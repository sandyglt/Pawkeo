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
  orig_lat: 48.8649,
  orig_lng: 2.3800699999999324,
  dest_lat: 48.8649,
  dest_lng: 2.3800699999999324,
  user_id: User.last[:id],
)


30.times do
  genlat = 48.868 + (rand()/1000)
  genlng = 2.0 + ((rand(37..38).to_f/100)+(rand()/1000))
Spot.create!(
  lng: genlng,
  lat: genlat,
)
end
