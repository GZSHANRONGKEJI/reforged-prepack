
Vagrant.require_version '>= 1.5.0'

Vagrant.configure(2) do |config|
  config.vm.box         = 'ubuntu/trusty64'
  config.vm.box_version = '~> 14.04'
  config.vm.synced_folder '.', '/vagrant', disabled: true

  # Providers
  config.vm.provider :virtualbox do |v|
    v.customize ['modifyvm', :id, '--memory', '512', '--ioapic', 'on']
  end

  # SSH
  config.ssh.username = 'vagrant'

  # Port Forwarding
  config.vm.network :forwarded_port, guest: 8080,  host: 8080
  config.vm.network :forwarded_port, guest: 28015, host: 28015
  config.vm.network :forwarded_port, guest: 29015, host: 29015

  # Provisioning
  config.vm.provision :shell do |sh|
    sh.inline = <<-EOF
      source /etc/lsb-release && echo "deb http://download.rethinkdb.com/apt $DISTRIB_CODENAME main" | sudo tee /etc/apt/sources.list.d/rethinkdb.list
      wget -qO- http://download.rethinkdb.com/apt/pubkey.gpg | sudo apt-key add -
      sudo apt-get --assume-yes update
      sudo apt-get install --assume-yes rethinkdb;
      sed -e 's/# bind=127.0.0.1/bind=all/g' /etc/rethinkdb/default.conf.sample > /etc/rethinkdb/instances.d/default.conf;
      service rethinkdb start;
    EOF
  end
end

#vagrant file originally from https://github.com/RyanAmos/rethinkdb-vagrant/blob/master/Vagrantfile
#by Ryan Amos
