# Heliactyl (v11)

Tired of dashactyl? Why not try Heliactyl
Features on top of dashactyl:
- Join for Resources
- Anti Discord Ratelimit
- Gift Resources
- Improved API
- Better Default Theme

# Support

Discord Server: https://dc.heliactyl.xyz

# How to install

1. Upload the file above onto a Pterodactyl nodejs server (download the egg from parkervcp eggs)
2. Unarchive the file and set the server to use NodeJS 12
3. Configure settings.json (specifically panel domain/apikey and discord auth settings for it to work)
4. Start the server (ignore the 2 strange errors that might come up)

# Configure proxy (for example client.sryden.com)

1. Point the domain you want it on to your vps (example client.sryden.com to 1.1.1.1)
2. Run `apt install nginx && apt install certbot` on the vps
3. Run `ufw allow 80` and `ufw allow 443` on the vps
4. Run `nano /etc/nginx/sites-enabled/heliactyl.conf`
5. Paste the configuration at the bottom of this and replace <heliactyl> with the IP of the pterodactyl server and <domain> with the domain
6. Run `certbot certonly -d <DOMAIN>` then do 1 and put your email
7. Run `systemctl restart nginx` and try open your domain
```
server {
listen 80;
server_name <domain>;
return 301 https://$host$request_uri;
}
server {
listen 443;
server_name <DOMAIN> ;
ssl_certificate /etc/letsencrypt/live/ <DOMAIN> /fullchain.pem;
ssl_certificate_key /etc/letsencrypt/live/ <DOMAIN> /privkey.pem;
ssl on;
ssl_session_cache builtin:1000 shared:SSL:10m;
ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
ssl_ciphers HIGH:!aNULL:!eNULL:!EXPORT:!CAMELLIA:!DES:!MD5:!PSK:!RC4;
ssl_prefer_server_ciphers on;
access_log /var/log/nginx/access.log;
location /afkwspath {
  proxy_http_version 1.1;
  proxy_set_header Upgrade $http_upgrade;
  proxy_set_header Connection "upgrade";
  proxy_pass "http:// <IP> /afkwspath";
}
location / {
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header X-Forwarded-Proto $scheme;
proxy_pass http:// <IP>;
proxy_read_timeout 90;
proxy_redirect http:// <IP> https:// <DOMAIN>;
  }
}
