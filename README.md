# Velvet Curtain

Velvet Curtain은, 사진 파일을 공유하기 위해서 특정 서비스에 사진을 업로드하고, 링크를 공유하는 불편함을 최소화 하고자 만들어진 Decentralized Application(이하 DApp)입니다. 해시 값을 통해서 앨범 또는 사진을 가져오고 관리할 수 있습니다. 이는 Electron과 Vuejs 기술로 이뤄진 DApp으로, 별도의 서비스 페이지를 제공하지 않습니다.

## Try
```sh
$ ipfs daemon

$ yarn global add parcel-bundler
$ yarn install

$ yarn dev
$ yarn electron:dev
```

## Structure
```
User
  ├───Albums (Feed)         특정 유저가 소지하고 있는 Album 들
  │   ├───Album (Feed)      앨범이 가지고 있는 이미지들의 목록
  │   │   ├───Image (Hash)  Docs's Hash
  │   │   └───Image (Hash)  Docs's Hash
  │   ├───Album (Feed)      앨범이 가지고 있는 이미지들의 목록
  │   └───Album (Feed)      앨범이 가지고 있는 이미지들의 목록
  │
  └───Photos (Feed)


User's Stream (Docs)        특정 유저가 Pin하고 있는 모든 사진
  ├───Image (filename, Hash, index)
  ├───Image (filename, Hash, index)
  ├───Image (filename, Hash, index)
  ├───Image (filename, Hash, index)
  ├───Image (filename, Hash, index)
  ...
```

## TODO
 - [ ] go-ipfs integration
 - [ ] Multi Platform Electron build
 - [ ] Remove js-ipfs-api
 - [ ] Photo Album
 - [ ] Multi File Upload
 - [ ] maybe... muon?

## Color
  * [Light Theme](https://colorhunt.co/palette/112572)
  * [Dark Theme](https://colorhunt.co/palette/114174)