#Reforged Prepack

#CURRENTLY UNDER CONSTRUCTION#
##GO AWAY!##

##starting point is similar to material-ui prepack, but is going to be heavily modified.###

This is a structor prepack that is based on
-*re*act
-*re*dux
-*re*active extensions (rxjs)
-*re*think db

Re^4, or "reforged"

...with hapi as the server.

####thrifty setup

This isn't real documentation. it sucks and will be rewritten.

you'll need to install things for the db
Windows:

in powershell, make sure you have choclatey. It makes the next part easier
run as administrator
```sh

Set-ExecutionPolicy RemoteSigned

iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))

```

now make sure you have vagrant and virtualbox, necessary for rethink db

```sh
choco install vagrant -y
choco install virtualbox -y
```

Optional: make sure you have Cygwin
(protip: if you installed git on windows, you l ikely have this already)

```sh
choco install cyg-get -y
cyg-get openssh
cyg-get rsync

```


start stuff
```sh

vagrant up

npm install

structor

```

navigate to `http://localhost:2222/structor/`
navigate to `http://localhost:8080/`


```sh
npm run build && node server

```

app will start on port 3553

navigate to `http://localhost:3553/`
