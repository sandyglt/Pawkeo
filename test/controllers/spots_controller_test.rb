require 'test_helper'

class SpotsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get spots_create_url
    assert_response :success
  end

  test "should get update" do
    get spots_update_url
    assert_response :success
  end

end
