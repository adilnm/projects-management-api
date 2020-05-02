include ActionView::Helpers::DateHelper

class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :created_at, :user

  def created_at
    'Posted '+time_ago_in_words(object.created_at)+' ago'
  end
end
