class Picture < ApplicationRecord

  validates :title, :user_id, :description, presence: true

  validate :ensure_photo 
  
  validate :photo_description

  has_one_attached :photo

  # has_many :likes
  
  # has_many :likers 

  # has_many :likers_pics

  belongs_to :user 

  def ensure_photo
    unless self.photo.attached?
      errors[:photo] << "must be attached"
    end
  end

  # def photo_description
    
  # end

  # add belongs to association for user_id
end
