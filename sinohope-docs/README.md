# SINOHOPE DOCS

Source repo for https://docs.sinohope.com

## Usage CLI

* prepare
```bash
git clone git@github.com:sinohope/sinohope-docs.git
cd sinohope-docs
```

* install tools
```bash
npm install
```

* preview site
```bash
npm run re-gen && npm run start
```

* build static files
```bash
npm run build
```

* serve static files localy
```bash
npm run serve
```

# Deploy

## 1. build and push source
```bash
make
```
## 2. goto gh page repo

Visit [gh-page repo](https://github.com/sinohope/sinohope.github.io) and follow the instructions