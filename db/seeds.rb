# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(
  email: "test@pawkeo.com",
  password: 'testpawkeo',
  password_confirmation: 'testpawkeo',
)

SpotSearch.create!(
  start_time: Date.new,
  orig_lat: 48.8534,
  orig_lng: 2.3488,
  dest_lat: 48.8534,
  dest_lng: 2.3488,
  user_id: User.last[:id],
)
