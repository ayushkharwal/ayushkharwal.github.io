'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3720b06abf0ddefc789875411d01f320",
".git/config": "81f3739147feba624f510095fbd940a0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f694ed06d5cb01b47dcc5f7e06a3011f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d2353938973c2cfc5ea9799b4352fc50",
".git/logs/refs/heads/master": "d2353938973c2cfc5ea9799b4352fc50",
".git/logs/refs/remotes/origin/master": "7ec8c7c65d86951b018d7355bd25e0bd",
".git/objects/03/c12c0e143bd233b26d4894cd074981b6629f5c": "54d83112b920fecd36422d0ed5f08237",
".git/objects/06/7517afb933bb202d2dc59b18e8c669448e66db": "bf876b7bda8beb49d43f4045cc956952",
".git/objects/09/7fb185b59219fe572a528365850ee67bfe5638": "c5819a28f746869093804f1dba60522e",
".git/objects/0a/f1d869999f20ed8b0e9fe771557fc4f6f36032": "e8b81d81178385419500ca42519e26ec",
".git/objects/0c/d49e4129315cff8af25b3a077ab5f19811ae3c": "55f624a8369ef4eaba8afd1520a73e96",
".git/objects/0f/70999d08fb48ab20b465dcb580915a9e2cb028": "529bad47393142b1d69cb65540b7f2bd",
".git/objects/14/9c93c442f57efe228013cac365fe501cc8a999": "0abe933aa327e006b4d7d57222c23051",
".git/objects/14fde26314": "0abe933aa327e006b4d7d57222c23051",
".git/objects/15223262d0": "1683ec2e9045bea4984e133d5295183d",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/532c5f61a12ff8d5af03cb5d1b76d005060f88": "113b1ffed58a5c7f953b0d8947cf9ddd",
".git/objects/28/261499b100159a5d67d2d2fd13c251beb340a3": "8f511e6b18643e336c05b2dde126d2cd",
".git/objects/2d/745c01795db2e2ea056c79f00eb3c8cadef16d": "70966d0b12f297d67a8ea27ec323af9e",
".git/objects/38/2b6004c51e1552209ffd65e797b57dbf6de295": "1f028d310591fae9234997551e7dc2e4",
".git/objects/3b/a6a57ed58f8cf4b0c9ca9f4a9b20e7695ad445": "743ed76a312a5d15818bd724633d9eb5",
".git/objects/3c/3cb4f85cd43cb9ebc919e4d315b168b99f6ae0": "c0c2f0f63bbaed512b42c47e230f2ebd",
".git/objects/3c/a42ce9526c4d9464b09c9b3ef911c9dbec2178": "5f5a6b5db047220e6e7a8d9642bca27f",
".git/objects/3f/df136ae3529fe0bb06ca090b3fb5e0dfa53a71": "79b0809c625845df595fcf36cd7e3879",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/041be390f1f2ff8d6d588cd9f2a78b1149d07a": "e5c16fcf5705592fefe25005791e91aa",
".git/objects/4c/e8728e89b9b48d5e07b1d459f191a0b7aa3d5f": "2c61a67a55e07bbb6c46ed15ef7528be",
".git/objects/4c/fb687fc95c6a74a33784cd01e0f2ae31ad66a8": "2e0122b52a8fea31cfdd5dee6f675abc",
".git/objects/50/43e6769e0f79c4bb06bf6f759b11eade1d58f9": "8ac038854f9fb847864e3493dfbf4a49",
".git/objects/51/1979bfaae806a75c27964d98d5cae72f8609c8": "38607b581113f8d184058dcaefcffcc0",
".git/objects/51/2fd12fe5a3fa2716c058954787d257cb9a7bb4": "b5209941ea2bbcafc84746b1d5080e5f",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/520025c8f8a61eb68e6355bc93e403db21e078": "2cb40bfe184bac168b8be77a459b4e95",
".git/objects/58/daa7ab397a712346a55b8282646f91c0c45701": "fe469594597a7a29a2669e67a367b594",
".git/objects/5c/63c233f98c440cbcce56d5d98b450096e8c42f": "ec391dd4c83644cdc2853c8e2a583705",
".git/objects/5f/792611cfb1e6ab2888349f02d58760c86c67b2": "8198a40d2c9e7a47c3fd7510b019be83",
".git/objects/62/5b75a3475ed3339617ffbe3667df9028e83417": "e348ab8d1bfdfa48160147eaef7b268d",
".git/objects/64/d5624f9947d3a2bb9fb5236a07c2f68846974f": "a0769984c5158f75dc6366953c4b5d3f",
".git/objects/64/f435f7cbffbad3c0612e2c159cb828babfc244": "152438265ee79b8093f20f6f556ad575",
".git/objects/65/9afe4e42269b808c1bb17b2440301d16a18eee": "2bf4edd37f407c81a74accf96ef86941",
".git/objects/66/8aad94e5540bc6dfa2b14e8343ee3d19986e32": "12a727704deb4475543b0269ba85b9ed",
".git/objects/66/f16564dc28959336d44da8cfb7b2ae40c50481": "b66a70e395586e59f414e070544a4275",
".git/objects/68/7ad846f2c6cfc9876f291d48f3996cdca031cf": "7d958964e79cc0a821f348076f2bb73c",
".git/objects/6d/caf1b2658cd8c37f718028c207059c25596e65": "49b19eb71abc1f0fdc28d873e7f00f49",
".git/objects/6f/cbf68a2231d2bfc10a07912e57b587f23948dd": "4df7bf5317d7a58acd0dbd4ab0b1edae",
".git/objects/70/8b42e14cc268ebc4d96352ef917beabb6b8b83": "15cf08aff321bf538a3b9310b6404d19",
".git/objects/72/401c4f689ea78a8c5511828aae2dd94e748511": "0eba60106efc1558a60cb809e8eebc32",
".git/objects/76/7127bb0e4b6ea4b31d2a5ee3a1db496ac7417e": "0301ec7e2028ee531bbc35987d11912d",
".git/objects/77/09527cf668faa85a69dbddd475c766cbbb6b29": "39a94ad3ca5281990777293aa781a8e8",
".git/objects/88/24458c55e84d4eb8b886f80a05caf8bafd8a66": "046d300913877979d96cdf194aa6472e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/4ff0660e5fd67394cea66eac67d062e735dc95": "288905d243944f28f363192422dbbb1b",
".git/objects/8e/0c3e4b9992c6ba5352118c73a15f39cfa2b4e3": "8f6123b11e6eb1fcdb8d23ed945c2824",
".git/objects/8f/907565570be267e7a3603eb9e3665b8661228b": "79e290f0202370ca305e2158d56585f2",
".git/objects/92/9f29e80b1a54c9c4b2f69270d1dd9ac3741313": "e1bb1297a521a6eff682a7a7c0bddbe8",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9c/25bbddd07e0c734ede8877a81adbab905c1dee": "63d6502bad61ffaeb4692d31e7107865",
".git/objects/9c/4d92db8e995397afa0303d2c513e6db23b417b": "f49490b0186aeb4780e4d2358c5a0d67",
".git/objects/9d/c212a49ec0305d1c59b1130328cef9082587da": "228d7f2ed903681302f70f012917272a",
".git/objects/a6/87eb80281ac0f16485e1893b56a79aed5c7dc5": "a134dd23601009e430a2673b9ba3d705",
".git/objects/ad/7126231e315fbf7142594110189175c25a16ac": "f450293e753f535b41997baaaaac6c9c",
".git/objects/ae/ae0c6367bc2777f9c0b9846200ebd3506f488c": "eaea2e2cfe682354bb90905306ea4bbc",
".git/objects/af/8ed76adf4cd886290fae5928368ebf372376fa": "2fbe504c70a2272eaea5cb0d57b44b61",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/29790b5ad6e66d3a10ab99a941dbb8c015b37a": "0b4477915dd7c651ca1f941d86e553de",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c2/8c387bdb7a752301f7496e51782b78da950c2c": "832e3aa2c5aaf6dd8b08cb7af9025c27",
".git/objects/c5/09cb836a85556106ceea16af5fb38f67b94c4c": "af2a486859044a6a4a2779005b147a07",
".git/objects/c6/8fa1fd37f153dd76a5ef1c4da4d38003cd120e": "6e5ab4db89e672232151393b0ff36382",
".git/objects/c7/2614410e85642a822f2508b319d3396db32558": "11d5f7b4d5277870f06e4cb479b9eebe",
".git/objects/c7/5413cf31f9fec6d3d5e6adaa3bd205b4709568": "6b9bea1dea2bde4dd05d274ff4884888",
".git/objects/c9/e267198cb681d2a6b023f385fa5fdc48a39ba4": "625b3fd8f76f4585f055a1fa807f246b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d9/bca38f38230efffda876aac2577f46ce40c0f1": "0b9ba6567f1d8fe99e61442a383d4f29",
".git/objects/da/252b7c885fa323cae73ec075656ce12ac3ff6a": "92c041949b96f5abde600f7a2a46c708",
".git/objects/da/9aa8e83499cdf42ebad2590b5058d774b9d2d5": "6145a8975de48261ba0a3791e3b1dfb2",
".git/objects/dc/5f78f84684dbf2830f5ba8b2c80aa0dc784236": "0701f77149eade8fa02a6144917a489d",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/1ba8dd6cd31bcb25841af4c501f60e6e339d92": "720164565e900ec1021fe8b6a2747157",
".git/objects/ea/4830694351edf596acdb19808a0d56ba089f90": "362e4d0f9a13cad244e464a64a653027",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ff/8d4253196ee6955ae65c500afe9667fe2e1ac0": "3ce258e63b5b0878dbdb659f1ec0ddf9",
".git/objects/ff/a85d32af2fd451e843808e83d51ee6c262ad37": "2eb3331cbc2a796dc3d325d03ab66dad",
".git/refs/heads/master": "16e4bf7fe872197ea9e2d60ac6b70efb",
".git/refs/remotes/origin/master": "16e4bf7fe872197ea9e2d60ac6b70efb",
"assets/AssetManifest.bin": "3f436271110ccf0cbe7ae44f56b3bac6",
"assets/AssetManifest.bin.json": "8a90c4973ee17701a103dc34af07ece1",
"assets/AssetManifest.json": "9ca366081f6029adde60af79566134f2",
"assets/assets/circle_loader.json": "e466d2919e29da1f4bfab363d199a255",
"assets/assets/icons/github.svg": "366f3200ec4d379ec6889e2bbdccf4fb",
"assets/assets/icons/instagram.svg": "cadfa7dc20269989995631a2a371d4ce",
"assets/assets/icons/linkedin.svg": "0dab79bfaa9f5aa85129e45874f5bd1a",
"assets/assets/icons/twitter.svg": "071e8830844eaf7beb1df029de2c3686",
"assets/assets/icons/wave.svg": "eebece4bb80e5dd85823a6dc9044357e",
"assets/assets/icons/youtube.svg": "a73469c393d003720becd8d923fa294f",
"assets/assets/images/bg_img.svg": "9dc5960c7124dc361ba30bd79188b881",
"assets/assets/images/flutter_service_img.png": "93d903468a771b89b9245e330d4d58bf",
"assets/assets/images/main_pic.png": "38ea98fefcfbf4c784ea894669fe4d3d",
"assets/assets/images/next_js_img.jpg": "b4a22c52aea458f6042be9c2599ed0d5",
"assets/assets/images/nodejs_mongodb_express_service.jpg": "ce6137b553f25894ea39480304644947",
"assets/assets/images/project_images/habit_tracker1.png": "ba631c09e663d2b246778fb09c587465",
"assets/assets/images/project_images/habit_tracker2.png": "0fc78d4173de44c8199761afc6d5f1aa",
"assets/assets/images/project_images/habit_tracker3.png": "cd527ffdf15ccf85b627e9a49b5a9095",
"assets/assets/images/project_images/KT%25201.png": "a5a78c3fc2c7cd4089d73bf6c2fccef2",
"assets/assets/images/project_images/KT%25202.png": "a5e42a17928c7b349e67f4dbc6416d21",
"assets/assets/images/project_images/KT%25203.png": "2748e6bfaf02fc5ee5b74e42b41f1476",
"assets/assets/images/project_images/KT%25204.png": "340a60622bb8dce09c41e2ac42b1f2cf",
"assets/assets/images/project_images/Shoea1.png": "789c7aef18f97e49bd10479a8d197010",
"assets/assets/images/project_images/Shoea2.png": "46b2822585818e38263c0213a4ccc245",
"assets/assets/images/project_images/Shoea3.png": "6d5f79b1e08b2c80fe82da3d8a6c9998",
"assets/assets/images/project_images/Shoea4.png": "dfa14d02034621a6b7cb4689428366e6",
"assets/assets/images/project_images/Starr%2520GEO%25201.png": "1e9641974c3a2ea68b77b36998c8e340",
"assets/assets/images/project_images/Starr%2520GEO%25202.png": "09b4d918feb75d842a17578195e80c0d",
"assets/assets/images/project_images/Starr%2520GEO%25203.png": "36aae4a041d8123f9a1742b7ee7abd93",
"assets/assets/images/project_images/Starr%2520GEO%25204.png": "719ce155fb052f89e5451bcf4ae29bac",
"assets/assets/images/project_images/Starr%2520Key%25201.png": "cbcfa1762522208231b0f56a530cef37",
"assets/assets/images/project_images/Starr%2520Key%25202.png": "a4c37d19534af162700b591a0ee79e86",
"assets/assets/images/project_images/Starr%2520Key%25203.png": "c7fc9d501749ce1ca91b0d4a7f5e5d81",
"assets/assets/images/project_images/Starr%2520Key%25204.png": "aa1f7473d06635733bdf34cb3913f007",
"assets/assets/images/project_images/Starr%2520Key%25205.png": "66eb32f76e8c3cb8c5376bbf89f68b97",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d06456d26c2aa4927b67f7b3449537a1",
"assets/NOTICES": "4665e45721b079905b76952080a482ef",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "e3d2f25b52a72fed284e272b089c70d4",
"canvaskit/canvaskit.js.symbols": "0dc170862ed93f218505cae1c85d24d3",
"canvaskit/canvaskit.wasm": "e821d097dca64e1b32366510a9ede203",
"canvaskit/chromium/canvaskit.js": "202130efa226985e3811f974788db976",
"canvaskit/chromium/canvaskit.js.symbols": "66e741aec40dda638947c74a2f846e33",
"canvaskit/chromium/canvaskit.wasm": "d861810c5c043741daf41e1a1f632467",
"canvaskit/skwasm.js": "f17a293d422e2c0b3a04962e68236cc2",
"canvaskit/skwasm.js.symbols": "618951e513f18b78fced50209d7b9955",
"canvaskit/skwasm.wasm": "ce8505fdfda9952b61f0bc3126c8bbff",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "08050f037a4dbc0b2a8531b7afc2516e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8f8f0144e7d176e3a9a7f0338555e6cb",
"/": "8f8f0144e7d176e3a9a7f0338555e6cb",
"main.dart.js": "632888ab6fc9a79f09c7ee87fd1e700c",
"manifest.json": "150b0dacfc8235aeff6f0a100acf9a48",
"version.json": "48dd23b51abb368ca9ea7fd41b8beb0f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
