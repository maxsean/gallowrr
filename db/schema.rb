# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171214012841) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "games", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "word_id"
    t.integer "incorrect", default: 0, null: false
    t.string "outcome", default: "active", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "chosen_letters", default: [], array: true
    t.index ["user_id", "word_id"], name: "index_games_on_user_id_and_word_id", unique: true
    t.index ["user_id"], name: "index_games_on_user_id"
    t.index ["word_id"], name: "index_games_on_word_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "confirmation_digest"
    t.datetime "confirmed_at"
    t.string "email", null: false
    t.string "handle", null: false
    t.string "password_digest"
    t.string "password_reset_digest"
    t.datetime "password_reset_sent_at"
    t.string "remember_digest"
    t.string "universally_unique_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["handle"], name: "index_users_on_handle", unique: true
    t.index ["universally_unique_id"], name: "index_users_on_universally_unique_id", unique: true
  end

  create_table "words", force: :cascade do |t|
    t.string "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
