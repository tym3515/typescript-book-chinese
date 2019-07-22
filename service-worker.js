/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6f213d0b17258e8b23d63a5fba504345"
  },
  {
    "url": "assets/css/0.styles.f45e872f.css",
    "revision": "0d08ddf63bb9f21642c12addc4f4c5ef"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b635c98c.js",
    "revision": "484368cc1f8538ce33bd5b2825f1b0a4"
  },
  {
    "url": "assets/js/11.f9a9cf45.js",
    "revision": "3cf123e9757b8ed7dfaf3776dedb39d0"
  },
  {
    "url": "assets/js/12.4fca7fe7.js",
    "revision": "1d18a48ebae2b7b1527a793dedbb042c"
  },
  {
    "url": "assets/js/13.8a5c49b9.js",
    "revision": "0f4a0c610fa679e0d4e095788198e5ea"
  },
  {
    "url": "assets/js/14.f5c4fb74.js",
    "revision": "ef8765f633bd6e9e8f247dcd9457b00a"
  },
  {
    "url": "assets/js/15.0d97a3f1.js",
    "revision": "86553b71e95a24abbb0842a78daaa0a2"
  },
  {
    "url": "assets/js/16.96e0afd1.js",
    "revision": "40cb0efd633aa47a50057575c9f8da23"
  },
  {
    "url": "assets/js/17.1621d6f8.js",
    "revision": "17f73096b46c66eba74807e4328775f1"
  },
  {
    "url": "assets/js/18.fb850ea8.js",
    "revision": "377556b6dba11e966793e5e1146a1512"
  },
  {
    "url": "assets/js/19.4e156a7a.js",
    "revision": "272070dbb6c5ac935c54080d7384b104"
  },
  {
    "url": "assets/js/2.2a274f30.js",
    "revision": "8c020448baae9acd1c366afd506966dd"
  },
  {
    "url": "assets/js/20.1a5762e2.js",
    "revision": "ad3926bb2856c31fb4a5118a0dbe56c2"
  },
  {
    "url": "assets/js/21.2e88ebce.js",
    "revision": "8ea05df855ad3b288fe5fc71951e441c"
  },
  {
    "url": "assets/js/22.3bc3e10b.js",
    "revision": "e56354d0da87cfac7bd552997ecfbd8d"
  },
  {
    "url": "assets/js/23.40ec0da2.js",
    "revision": "def9b952db1e2c33007ea7a1b4d3e1c5"
  },
  {
    "url": "assets/js/24.89b522f3.js",
    "revision": "6ba8042970fb1929984d0096c8a894d4"
  },
  {
    "url": "assets/js/25.773e0d7d.js",
    "revision": "c01847143d84161effc66498d84bf623"
  },
  {
    "url": "assets/js/26.be1b030d.js",
    "revision": "7353d2131e7eddc5905790644a914711"
  },
  {
    "url": "assets/js/27.b5cab333.js",
    "revision": "4aa6a9e6a60538fde4ffa9e47b5ba29f"
  },
  {
    "url": "assets/js/28.6d5b46a4.js",
    "revision": "4a6dfffaaf6b63260e3619135fb1e444"
  },
  {
    "url": "assets/js/29.8102a27f.js",
    "revision": "bdfde4ef08ba1efe2e0ca26f692580d6"
  },
  {
    "url": "assets/js/3.0b6855f4.js",
    "revision": "6005a10f1a81d256ac1c96f8866a0a5a"
  },
  {
    "url": "assets/js/30.42cb6708.js",
    "revision": "d57a3552d4b3aa3440c9e4d6e0169d5c"
  },
  {
    "url": "assets/js/31.230d8296.js",
    "revision": "bc86f857737bff66db2c56a00447100f"
  },
  {
    "url": "assets/js/32.aa2e6e0d.js",
    "revision": "1cea976f8cbdac3689e953962324757c"
  },
  {
    "url": "assets/js/33.70b37c1e.js",
    "revision": "aa9d2287f0ab27ca501aaa1265964780"
  },
  {
    "url": "assets/js/34.96c1a66c.js",
    "revision": "82c81cc9ee75e8845c4406f8581e223f"
  },
  {
    "url": "assets/js/35.17c7c661.js",
    "revision": "896cee5a7a2f02f74d9f6c512a8058a0"
  },
  {
    "url": "assets/js/36.2d6f0eb3.js",
    "revision": "a686d644b62a4d063d5235e489566012"
  },
  {
    "url": "assets/js/37.370c1761.js",
    "revision": "9e95890f6e9158b43f3513b3257e7caf"
  },
  {
    "url": "assets/js/38.c0764e27.js",
    "revision": "8f2570065c0f6d5386197ab1f6095422"
  },
  {
    "url": "assets/js/39.f17651e5.js",
    "revision": "f610b628c2fb4e61c0f4a40bb4d4e434"
  },
  {
    "url": "assets/js/4.f7fc35f8.js",
    "revision": "3e147c93f683a033d6006e7e59949cdd"
  },
  {
    "url": "assets/js/40.06d0eb50.js",
    "revision": "60a55006a4f067c4b5c67ca13e475450"
  },
  {
    "url": "assets/js/41.f29edd91.js",
    "revision": "afba91222b6a57fb745a4973af49ef52"
  },
  {
    "url": "assets/js/42.9c9ccb5e.js",
    "revision": "16896384b6e4329a352f44a239d1e150"
  },
  {
    "url": "assets/js/43.a09a85d8.js",
    "revision": "6a2d4800b7e063fb9722da2072f1a2d7"
  },
  {
    "url": "assets/js/44.12a293c3.js",
    "revision": "12f03b2d63c7b166c9c69e3b240f9fd4"
  },
  {
    "url": "assets/js/45.3ba05482.js",
    "revision": "57aaf2cf397a914516be0a401767fcc5"
  },
  {
    "url": "assets/js/46.8821f174.js",
    "revision": "4448e3bc4f81957d23c2e41db4d01f65"
  },
  {
    "url": "assets/js/47.fc817602.js",
    "revision": "45713ef949ad634bdc8cd925aaa0e321"
  },
  {
    "url": "assets/js/48.830cebc7.js",
    "revision": "256dcc724ed4cc75a38138223f5dc424"
  },
  {
    "url": "assets/js/49.2a81dd4a.js",
    "revision": "f47d40238f1942495f466f6b447a57ae"
  },
  {
    "url": "assets/js/5.81bc92c4.js",
    "revision": "a81b964f4278dae1aaf06c13a7c57641"
  },
  {
    "url": "assets/js/50.43087ebb.js",
    "revision": "e5dd34b3bdbc3ac99faaded719fb5ed0"
  },
  {
    "url": "assets/js/51.36ff679b.js",
    "revision": "5abb3a350770eb0d446d71c76d1e01e7"
  },
  {
    "url": "assets/js/52.9ce111b7.js",
    "revision": "45993dc4e7572215dde898ed690e3a20"
  },
  {
    "url": "assets/js/53.22d03e2d.js",
    "revision": "407ca9600665b93aa8d1f3b4f0b07d77"
  },
  {
    "url": "assets/js/54.eb82f221.js",
    "revision": "14bb00cb2ff91062b99f4d78c6caecaf"
  },
  {
    "url": "assets/js/55.92bf5ebe.js",
    "revision": "820a991e66862c1050f0b6dbfc401f33"
  },
  {
    "url": "assets/js/56.20c4aeeb.js",
    "revision": "32ccc8be835b5684ee2cad13f807e3c1"
  },
  {
    "url": "assets/js/57.59d0262d.js",
    "revision": "4bd229059ce925d3ac561f6c847fded5"
  },
  {
    "url": "assets/js/58.ee44192b.js",
    "revision": "62fdcd9dfa58f99e3c08586b561167aa"
  },
  {
    "url": "assets/js/59.da895241.js",
    "revision": "69566dfe2653b0144ffa7f59103a754f"
  },
  {
    "url": "assets/js/6.6fde3483.js",
    "revision": "baa738afd6a7d334a3e48d1f70c610ff"
  },
  {
    "url": "assets/js/60.4c3395e1.js",
    "revision": "cde876cc6339b177d1f3c9281c9ce735"
  },
  {
    "url": "assets/js/61.0a534de4.js",
    "revision": "37a106805aae7776181ca3cbcf7e2270"
  },
  {
    "url": "assets/js/62.377b047d.js",
    "revision": "22c47ba47681741042ca74d631e72323"
  },
  {
    "url": "assets/js/63.f692c9d6.js",
    "revision": "c5251c7ae23563dac98996bc44a57411"
  },
  {
    "url": "assets/js/64.f59193e7.js",
    "revision": "b84764a39b289bf7289ba3baca981058"
  },
  {
    "url": "assets/js/65.88199a04.js",
    "revision": "29862aa97818bf9eeac36025b59f9304"
  },
  {
    "url": "assets/js/66.5bedc4da.js",
    "revision": "a3f48b14dc25fb5ee2531f5c0293a636"
  },
  {
    "url": "assets/js/67.dbe66622.js",
    "revision": "a2f27eebcd2cb3501e2ed80188ee4ae1"
  },
  {
    "url": "assets/js/68.772c174c.js",
    "revision": "dc13fa866b66872ec8603695060adbe8"
  },
  {
    "url": "assets/js/69.262261c0.js",
    "revision": "33bb3b7103e96e382da28a746a420657"
  },
  {
    "url": "assets/js/7.574f184f.js",
    "revision": "165b18725b95fd05d69422e261120ed8"
  },
  {
    "url": "assets/js/70.accba6a3.js",
    "revision": "264c7d9a5eaefe6730c5674fba8593d8"
  },
  {
    "url": "assets/js/71.76e83172.js",
    "revision": "2f8f4640c24df23008d87c7213ead458"
  },
  {
    "url": "assets/js/72.581c1da2.js",
    "revision": "8e70bcd44046f651506d6272653073e6"
  },
  {
    "url": "assets/js/73.448c88b0.js",
    "revision": "edb308131ac428916e8d9949e7df63bf"
  },
  {
    "url": "assets/js/74.8b805f5e.js",
    "revision": "f80bc1e8a58d58d67f7162c192600ca1"
  },
  {
    "url": "assets/js/75.54bf6b36.js",
    "revision": "1c2865ac2b1b37aba5f02917a30e729e"
  },
  {
    "url": "assets/js/76.bfd73f27.js",
    "revision": "7cb06ebf7d0ad19bffcb5fb42ae29809"
  },
  {
    "url": "assets/js/77.f77c2637.js",
    "revision": "69d5860abb9d30dc9a55f3b4540b528d"
  },
  {
    "url": "assets/js/78.aa7f73bb.js",
    "revision": "1ff018ee8de2dc7dc96c7f16e5be7357"
  },
  {
    "url": "assets/js/79.aa76a8f8.js",
    "revision": "cd07097e7d2f24c47c72674b261ee292"
  },
  {
    "url": "assets/js/8.b1a194c7.js",
    "revision": "c4b4d4b05598f9acf02b5abde2d8e33f"
  },
  {
    "url": "assets/js/80.42eacae5.js",
    "revision": "a4b63200d454ab45ab0f1a1a846e48d0"
  },
  {
    "url": "assets/js/81.cf40d4b2.js",
    "revision": "09f11e6976572cb05e1c820bfc1c9fa7"
  },
  {
    "url": "assets/js/82.8f79dc99.js",
    "revision": "88ab1da0ef9cf29acb2c1bfe965b9884"
  },
  {
    "url": "assets/js/83.5f198f7a.js",
    "revision": "9ecb60f84664147c7eb65241bf455530"
  },
  {
    "url": "assets/js/84.9ff1f804.js",
    "revision": "8486308450ce81084f158434736674e3"
  },
  {
    "url": "assets/js/85.6e2478e5.js",
    "revision": "27c13ae235baf5e36c9c5c7f5dbe1cf0"
  },
  {
    "url": "assets/js/86.4aa3d9e8.js",
    "revision": "a5e601f06761fed2cdb2508ccfbce4d3"
  },
  {
    "url": "assets/js/87.adee741f.js",
    "revision": "393f6e405769b16e66db2edd1635ca41"
  },
  {
    "url": "assets/js/9.86b859b2.js",
    "revision": "3741f454ed16c31a1aa4f722473e3f69"
  },
  {
    "url": "assets/js/app.ba0b8890.js",
    "revision": "2be5dbe283478cc6ee780212074e673a"
  },
  {
    "url": "compiler/ast.html",
    "revision": "7d5e7820cd113acaccd719a4766a4b2a"
  },
  {
    "url": "compiler/binder.html",
    "revision": "26a4785d4cd418cbbdeef2523c7b42f6"
  },
  {
    "url": "compiler/checker.html",
    "revision": "7104495b9fe93140d44332a694212745"
  },
  {
    "url": "compiler/emitter.html",
    "revision": "e811687391c9bfb7cdd6c80ff79a000d"
  },
  {
    "url": "compiler/overview.html",
    "revision": "5a0cf5494c85eddf7585569e81316d40"
  },
  {
    "url": "compiler/parser.html",
    "revision": "2a103fef7919cc3212fbe45b5dd9d330"
  },
  {
    "url": "compiler/program.html",
    "revision": "ae66d37f184029501bafd82b8019abab"
  },
  {
    "url": "compiler/scanner.html",
    "revision": "20cc71403f114fdcc0e577ab161048df"
  },
  {
    "url": "contact.png",
    "revision": "de36f2215c396bf6f74409c047520234"
  },
  {
    "url": "error/common.html",
    "revision": "d87157693a51dc2370ff5b1a46009931"
  },
  {
    "url": "error/interpreting.html",
    "revision": "bc91d698126f687ac0a8224c36f6d4f2"
  },
  {
    "url": "faqs/class.html",
    "revision": "f2d8e6aac8d5ddbe2da139cf0240a166"
  },
  {
    "url": "faqs/commandline-behavior.html",
    "revision": "759bda7869930ed12851e7b393a09917"
  },
  {
    "url": "faqs/comments.html",
    "revision": "902e6742d438a7c59309c437551ad356"
  },
  {
    "url": "faqs/common-bug-not-bugs.html",
    "revision": "8579b326ed460865679619afa4c2cb20"
  },
  {
    "url": "faqs/common-feature-request.html",
    "revision": "b42bb493fbc6be70e3dea642c21c2517"
  },
  {
    "url": "faqs/decorators.html",
    "revision": "dc9e1fa8f257cfb8020c134fc7deeb81"
  },
  {
    "url": "faqs/enums.html",
    "revision": "12b8daf0ce792b4643155d66ea874ca2"
  },
  {
    "url": "faqs/function.html",
    "revision": "aa416821d4e3141a6c9a99dbb72e14b2"
  },
  {
    "url": "faqs/generics.html",
    "revision": "1fb3f7a7af5899a2fd440e2e92f21156"
  },
  {
    "url": "faqs/glossary-and-terms.html",
    "revision": "727d118620b746d98fdda68212dc69cb"
  },
  {
    "url": "faqs/jsx-and-react.html",
    "revision": "59958dc87c1c181011e0f72c864043e6"
  },
  {
    "url": "faqs/modules.html",
    "revision": "c7ef6be3b1c49dbcfca36ffeabe7de38"
  },
  {
    "url": "faqs/thing-that-dont-work.html",
    "revision": "e1b3f0ae275b449fc7c23244ff88412a"
  },
  {
    "url": "faqs/tsconfig-behavior.html",
    "revision": "3ce87a804ac23f057a0ecdea0a3698f3"
  },
  {
    "url": "faqs/type-guards.html",
    "revision": "b66a30f7e2597afccfde518cd72eed71"
  },
  {
    "url": "faqs/type-system-behavior.html",
    "revision": "5d4f24d5a29d938ababcd3f9bd7299f2"
  },
  {
    "url": "ide.png",
    "revision": "0552400adbb2b3fcbed10a98a02e2516"
  },
  {
    "url": "index.html",
    "revision": "616d04847696d180c436f75da980a83a"
  },
  {
    "url": "jsx/nonReactJSX.html",
    "revision": "f31c8b0ba80b5851a3c3e74452602e4b"
  },
  {
    "url": "jsx/reactJSX.html",
    "revision": "56110b46c0ed49830dedca072be1e796"
  },
  {
    "url": "jsx/support.html",
    "revision": "ab32b90bbcd40d591ab1b36053e4e503"
  },
  {
    "url": "logo.png",
    "revision": "166813938a8a65cf3197fa7da1d131f4"
  },
  {
    "url": "project/compilationContext.html",
    "revision": "4d7f02f66cf3a669adcebfd5ece97467"
  },
  {
    "url": "project/declarationspaces.html",
    "revision": "68333bf381c62af60727d449f5230ce1"
  },
  {
    "url": "project/dynamicImportExpressions.html",
    "revision": "0b600d182fd88222e09b13144e3a35da"
  },
  {
    "url": "project/modules.html",
    "revision": "fdb7d450c505cbf76317f19682657aed"
  },
  {
    "url": "project/namespaces.html",
    "revision": "cfc09219686740f47adb6dcec09baf7c"
  },
  {
    "url": "tips/avoidExportDefault.html",
    "revision": "8f8170a0eb0ed33caa7850aead601d24"
  },
  {
    "url": "tips/barrel.html",
    "revision": "b12c44bb4c3d746def47f70e74f307e0"
  },
  {
    "url": "tips/bind.html",
    "revision": "aae7e3a7065c6d5dcb2b318fa4331cc7"
  },
  {
    "url": "tips/buildToggles.html",
    "revision": "6ae5fb7fec10ae7a1c2ae986f25e5903"
  },
  {
    "url": "tips/classAreUseful.html",
    "revision": "f4fa6ed7f0d7fe443d588076f125561a"
  },
  {
    "url": "tips/covarianceAndContravariance.html",
    "revision": "a10370e93c5a62e72c4b2e8e5ae481e8"
  },
  {
    "url": "tips/createArrays.html",
    "revision": "3529cb6854dc5891137a45ff354795ad"
  },
  {
    "url": "tips/curry.html",
    "revision": "fae92be29f710a891c2ed77097ece5a9"
  },
  {
    "url": "tips/functionParameters.html",
    "revision": "2577538bf4baf5b38610799657fd4397"
  },
  {
    "url": "tips/infer.html",
    "revision": "1fb9f9ad4e997812f0655aeb75adc841"
  },
  {
    "url": "tips/lazyObjectLiteralInitialization.html",
    "revision": "5ebe9e82c5883e3f32b67a729ffe04d0"
  },
  {
    "url": "tips/limitPropertySetters.html",
    "revision": "af29b75cf639e280868732d1d9593852"
  },
  {
    "url": "tips/metadata.html",
    "revision": "b0fa2ccea3860b8d804b276b01614679"
  },
  {
    "url": "tips/nominalTyping.html",
    "revision": "c916856d546c29fe67e2f5aac64c3c46"
  },
  {
    "url": "tips/outFileCaution.html",
    "revision": "1e433469b0a9627935d7ba0a07d0a1d6"
  },
  {
    "url": "tips/singletonPatern.html",
    "revision": "5792ae2fce600bc892d5ba670987698e"
  },
  {
    "url": "tips/statefulFunctions.html",
    "revision": "d54521306549d11df9f2d3929fe247d3"
  },
  {
    "url": "tips/staticConstructors.html",
    "revision": "4ae9aad727336b07dfb0ff0332463795"
  },
  {
    "url": "tips/stringBasedEmuns.html",
    "revision": "6a05d7f3f51d9f09476ae390acac68d9"
  },
  {
    "url": "tips/truthy.html",
    "revision": "0459166914f65671a97ac85b4251dc8c"
  },
  {
    "url": "tips/typeInstantiation.html",
    "revision": "1a9da38f660785d5bdddcc46b9e96e5e"
  },
  {
    "url": "tips/typesafeEventEmitter.html",
    "revision": "024958a22768a4ebeffd0954c8ff0fdf"
  },
  {
    "url": "typescript-downloads.jpg",
    "revision": "c820bb267e14bd6881db03696f3ae603"
  },
  {
    "url": "typings/ambient.html",
    "revision": "9fea67414259db0a0c411e63ad359749"
  },
  {
    "url": "typings/callable.html",
    "revision": "12dc96bdfd95483873e57165a7e23dd1"
  },
  {
    "url": "typings/discrominatedUnion.html",
    "revision": "5c3402e9704449f65584a369bc2c088c"
  },
  {
    "url": "typings/enums.html",
    "revision": "d29fcd4a85cb13b8c763f9e3b1ac3239"
  },
  {
    "url": "typings/exceptionsHanding.html",
    "revision": "35bbb78fa7c38a3a79cacca4e7f4d2a5"
  },
  {
    "url": "typings/freshness.html",
    "revision": "4499a9ad74d6dc6aeeaa3fdc135bd637"
  },
  {
    "url": "typings/functions.html",
    "revision": "3098f116524f6eee2357e10a0f61e26e"
  },
  {
    "url": "typings/generices.html",
    "revision": "35cd09c90464451ab12f8c15c5ff93fd"
  },
  {
    "url": "typings/indexSignatures.html",
    "revision": "eb8206ea2ecaee54ca14f7084dfc2808"
  },
  {
    "url": "typings/interfaces.html",
    "revision": "ca643486b434ab1eca60cddbc7e70774"
  },
  {
    "url": "typings/lib.html",
    "revision": "297cacf35b4634445512d55094632ec5"
  },
  {
    "url": "typings/literals.html",
    "revision": "1fc69683c5de02a589e07f92a695c190"
  },
  {
    "url": "typings/migrating.html",
    "revision": "6e7e6c8c778be1493287dc837a62dfb0"
  },
  {
    "url": "typings/mixins.html",
    "revision": "0463717d89dd765bbfc02331e2fa88e3"
  },
  {
    "url": "typings/movingTypes.html",
    "revision": "28337e704ba2e03b314d5dc74dd98c55"
  },
  {
    "url": "typings/neverType.html",
    "revision": "66c767ccbd16df0e95ea9c02655a8d51"
  },
  {
    "url": "typings/overview.html",
    "revision": "4a15c3d0c423c31b1251191d5f6cd8b7"
  },
  {
    "url": "typings/readonly.html",
    "revision": "30e96c14f5f50c08f9af0a091b9ee23a"
  },
  {
    "url": "typings/thisType.html",
    "revision": "6bbc4d7727b4e419981ad2e5b3e256d0"
  },
  {
    "url": "typings/typeAssertion.html",
    "revision": "1b0993cc0c069bb8796a0321cda01b6b"
  },
  {
    "url": "typings/typeCompatibility.html",
    "revision": "8fb3926b4c4d3abd25c147096322b3df"
  },
  {
    "url": "typings/typeGuard.html",
    "revision": "0535fb1edd4c731c95ac03ba93760c81"
  },
  {
    "url": "typings/typeInference.html",
    "revision": "c193f0c18718f496d04da188d4a68f4a"
  },
  {
    "url": "typings/types.html",
    "revision": "ec5788cd924404c87ccbe7fb106f6652"
  },
  {
    "url": "wechat.jpg",
    "revision": "36c771d59ed899617f1e6c49f9ee812f"
  },
  {
    "url": "zhifubao.jpg",
    "revision": "2a94b23f0d0d6d55befc332742849b67"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
