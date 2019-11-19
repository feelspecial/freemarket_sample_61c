crumb :root do
  link "メルカリ", root_path
end

crumb :users do
  link 'マイページ', users_path
end

# listingのルーティングをusersからproductへ移動した事により再設定が必要になったのでコメントアウトしました。
# crumb :listing do
#   link '出品した商品 - 出品中', listing_product_path
#   parent :products
# end

# crumb :showmine do
#   link '出品商品画面', showmine_product_path
#   parent :listing
# end

crumb :profile do
  link 'プロフィール', profile_user_path
  parent :users
end

crumb :creditdisplay do
  link '支払い方法', creditdisplay_user_path
  parent :users
end

crumb :identification do
  link '本人情報', identification_user_path
  parent :users
end

crumb :logout do
  link 'ログアウト', logout_user_path
  parent :users
end

# crumb :projects do
#   link "Projects", projects_path
# end

# crumb :project do |project|
#   link project.name, project_path(project)
#   parent :projects
# end

# crumb :project_issues do |project|
#   link "Issues", project_issues_path(project)
#   parent :project, project
# end

# crumb :issue do |issue|
#   link issue.title, issue_path(issue)
#   parent :project_issues, issue.project
# end

# If you want to split your breadcrumbs configuration over multiple files, you
# can create a folder named `config/breadcrumbs` and put your configuration
# files there. All *.rb files (e.g. `frontend.rb` or `products.rb`) in that
# folder are loaded and reloaded automatically when you change them, just like
# this file (`config/breadcrumbs.rb`).