#!/bin/bash
# dont take this as a ref, ugly script done at 01:45, hours before the shutdown

for url in $(for asset in $(cat .glitch-assets  | grep -v "deleted\":true"); do 
        echo "$asset" | jq -r .url 
    done | sort | uniq ); do
    if grep -qr "$url" settings.json public/; then
        cd public/img
            wget "$url"
        cd -
        sed -ri s#\"${url}[^\"]*\"#\"img\/${url##*/}\"#gi *.json *.html public/*.html public/*.json public/styles/themes/*.css
        
    fi
done
