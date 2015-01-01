# config valid only for Capistrano 3.2.1
lock '3.2.1'

############################################
# Setup project
############################################

set :application, "aaronthomas.co.uk"
set :repo_url, "git@github.com:aaronthomas/aaronthomas.co.uk.git"
set :scm, :git

############################################
# Setup Capistrano
############################################

set :log_level, :info
set :use_sudo, false

set :ssh_options, {
  forward_agent: true
}

set :keep_releases, 5
