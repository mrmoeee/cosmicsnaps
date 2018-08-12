require 'test_helper'

class Api::PicturesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_pictures_index_url
    assert_response :success
  end

  test "should get show" do
    get api_pictures_show_url
    assert_response :success
  end

  test "should get create" do
    get api_pictures_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_pictures_destroy_url
    assert_response :success
  end

end
