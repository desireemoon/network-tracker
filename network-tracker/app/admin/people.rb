ActiveAdmin.register Person do
  permit_params :name, :picture, :relation, :virtual_interaction, :irl_interaction, :phone, :email, :address, :notes
  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  # permit_params :name, :picture, :relation, :virtual_interaction, :irl_interaction, :phone, :email, :address, :notes
  #
  # or
  #
  # permit_params do
  #   permitted = [:name, :picture, :relation, :virtual_interaction, :irl_interaction, :phone, :email, :address, :notes]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
  
end
