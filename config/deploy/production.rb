############################################
# Setup Server
############################################

set :stage, :production
server "derwent-01.mixd.co.uk", user: "mixdsftpuser", roles: %w{web app db}
set :deploy_to, "/var/www/vhosts/aaronthomas.co.uk/httpdocs"

############################################
# Setup Git
############################################

set :branch, "master"
