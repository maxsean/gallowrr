class User < ApplicationRecord
  EMAIL_REGEXP = /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/
  HANDLE_REGEXP = /\A[A-Za-z0-9]+(?:[_-][A-Za-z0-9]+)*\z/

  attr_accessor :confirmation_token, :password_reset_token, :remember_token

  before_create :generate_confirmation_digest, :generate_identifier
  before_save :downcase_email

  has_secure_password

  has_many :games
  has_many :words, through: :games

  validates_format_of :email, with: EMAIL_REGEXP
  validates_format_of :handle, with: HANDLE_REGEXP
  validates_length_of :handle, in: 3..30
  validates_presence_of :email, :handle
  validates_uniqueness_of :email, :handle, :universally_unique_id

  def authenticated?(attribute, token)
    digest = self.send("#{attribute}_digest")
    return false if digest.nil?
    BCrypt::Password.new(digest).is_password?(token)
  end

  def downcase_email
    self.email.downcase!
  end

  def generate_remember_digest
    self.remember_token = User.new_token
    update_attributes(remember_digest: User.digest(remember_token))
  end

  def terminate_remember_digest
    update_attributes(remember_digest: nil)
  end

  def to_param
    handle
  end

  def self.digest(string)
    cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST :
                                                  BCrypt::Engine.cost
    BCrypt::Password.create(string, cost: cost)
  end

  def self.new_token
    SecureRandom.urlsafe_base64
  end

  protected

  def generate_confirmation_digest
    self.confirmation_token = User.new_token
    self.confirmation_digest = User.digest(confirmation_token)
  end

  def generate_identifier
    self.universally_unique_id ||= SecureRandom.uuid
  end

end
