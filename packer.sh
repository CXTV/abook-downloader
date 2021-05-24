mkdir binary
npm i --save-dev rollup --save-dev @rollup/plugin-node-resolve --save-dev @rollup/plugin-commonjs --save-dev @rollup/plugin-json --save-dev uglify-js --save-dev pkg --save-dev
npm i progress request string-width performance-now
npx rollup abook-downloader.js --format cjs -p node-resolve,commonjs,json 2>/dev/null | sed -E 's/^util\$g.inherits\(PrivateKey\$4\, Key\$5\);$//' | npx uglify-js -m eval=true,v8=true -c -e >binary/abook-downloader.bundle.min.js
npx pkg --public -t node16-mac-arm64 executeJS.js -o binary/node-mac-arm64
codesign --remove-signature binary/node-mac-arm64
npx pkg --public -t node16-mac-x64 executeJS.js -o binary/node-mac-x64
codesign --remove-signature binary/node-mac-x64
npx pkg --public -t node16-windows-arm64 executeJS.js -o binary/node-windows-arm64.exe
npx pkg --public -t node16-windows-x64 executeJS.js -o binary/node-windows-x64.exe
# npx pkg --public -t node14-windows-x86 executeJS.js -o node-windows-x86.exe
rm package-lock.json package.json
# rm -r node_modules
