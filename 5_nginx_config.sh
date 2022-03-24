server{
listen [::]:443 ssl http2;
listen 443 ssl http2;
root /var/www/html;
        # Add index.php to the list if you are using PHP
        index index.html index.htm index.nginx-debian.html;
    server_name debugging.tools www.debugging.tools;

    location / {
  proxy_pass http://localhost:3000/;
  proxy_http_version 1.1;
  proxy_set_header Upgrade $http_upgrade;
  proxy_set_header Connection 'upgrade';
  proxy_set_header Host $host;
  proxy_cache_bypass $http_upgrade;

        }

ssl_certificate /etc/letsencrypt/live/debugging.tools/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/debugging.tools/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}

server {

listen [::]:80;
listen 80;
server_name debugging.tools;
return 301 $scheme://$host$request_uri;
}