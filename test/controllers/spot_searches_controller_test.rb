require 'test_helper'

class SpotSearchesControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get spot_searches_show_url
    assert_response :success
  end

  test "should get create" do
    get spot_searches_create_url
    assert_response :success
  end

end
