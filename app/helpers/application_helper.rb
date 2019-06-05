module ApplicationHelper

   def resource_name
     :user
   end

   def resource
     @resource ||= User.new
   end

   def resource_class
     User
   end

   def devise_mapping
     @devise_mapping ||= Devise.mappings[:user]
   end

  def svg(name)
    file_path = "#{Rails.root}/app/assets/images/#{name}.svg"
    return File.read(file_path).html_safe if File.exists?(file_path)
    '(not found)'
  end
end
