SpotSearch.destroy_all
Address.destroy_all
User.destroy_all
Spot.destroy_all

puts "User seed creation"
User.create!(
  email: "test@pawkeo.com",
  password: 'testpawkeo',
  password_confirmation: 'testpawkeo',
  first_name: 'Robot',
  last_name: 'Droid'
)

User.create!(
  email: "myriam@pawkeo.com",
  password: '123456',
  password_confirmation: '123456',
  first_name: 'Myriam',
  last_name: 'Chahlafi'
)

# puts "SpotSearch seed creation"
# SpotSearch.create!(
#   start_time: Date.new,
#   orig_lat: 48.8649,
#   orig_lng: 2.3800699999999324,
#   dest_lat: 47.9999,
#   dest_lng: 2.3800699999999324,
#   user_id: User.last[:id],
# )


puts "100 Spots seeds creation"
100.times do
  puts "Spot created!"
  genlat = 48.85 + rand(0.0..0.03)
  genlng = 2.34 + rand(0.0..0.05)
Spot.create!(
  lng: genlng,
  lat: genlat,
)
end

puts "Seeds done"
