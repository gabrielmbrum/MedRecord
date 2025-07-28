
#### instalação do node e de angular cli
```
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc

url -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

npm install -g @angular/cli

```

foi instalado o Node com versão > 20, para que tenha compatibilidade com o Angular CLI 20

