'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b9ea196fbabcd9e9fcc09bc0792185e9",
".git/config": "baccd29dcf69d06906f89906c2b59e7d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "923b3eba859d179d2a30c5fcff0b8c4a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d59f201bd1b3b3542ca64b079cffffeb",
".git/logs/refs/heads/master": "d59f201bd1b3b3542ca64b079cffffeb",
".git/logs/refs/remotes/origin/master": "2794cc6f5f26f5bddc48bc8f9c0ea8d8",
".git/objects/02/4e2c3bf40de3c3cd90a965c1f86ab729858bcd": "14473d8d20dec1c2fe1261cb03587938",
".git/objects/03/c12c0e143bd233b26d4894cd074981b6629f5c": "54d83112b920fecd36422d0ed5f08237",
".git/objects/06/2f06caae0882f79c0c622ae8cea006a2616ab1": "b2f04da526f5ea8a55ecfc39e438adae",
".git/objects/07/343c8794eecdd8fcfb0ae1aa19d6150a6fa08d": "bdda01eef23955330194d576383c9a2e",
".git/objects/07/8a1b7655fbfdf4b628b344f6cee15462ccf326": "b3477a05e17fb55dbd53b4e516ca6d13",
".git/objects/09/7fb185b59219fe572a528365850ee67bfe5638": "c5819a28f746869093804f1dba60522e",
".git/objects/0f/70999d08fb48ab20b465dcb580915a9e2cb028": "529bad47393142b1d69cb65540b7f2bd",
".git/objects/10/4505940e130f8113384d074c28e8a3e35d3989": "9298b9de6081b2cf8fcaf5fdf19653a9",
".git/objects/14/9c93c442f57efe228013cac365fe501cc8a999": "0abe933aa327e006b4d7d57222c23051",
".git/objects/17/e24614ebf49e005e06a491c82ce4644bfa82d5": "a23776ad2ab88143a17fb629669df749",
".git/objects/18/0b452896866a28f522e675ded9db937fc848a9": "9cfbf16be7d5bd0e1d8b5526a72c67ac",
".git/objects/1e/d08a9fb03c6a97a7dbba404c52b4db8d3b8d7d": "a5596d6b3f80c2f5842fc17aa6c43408",
".git/objects/1f/22d309701d40474abccf729d1c6560a43afb98": "0094c5a97bb50f2deadc540ce4e520ae",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/532c5f61a12ff8d5af03cb5d1b76d005060f88": "113b1ffed58a5c7f953b0d8947cf9ddd",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/25/cfc3e113fd3005e05043c71c7767605693577a": "0a7093d3672c93239dbb20806f1054ce",
".git/objects/28/261499b100159a5d67d2d2fd13c251beb340a3": "8f511e6b18643e336c05b2dde126d2cd",
".git/objects/2d/47757b6af61f9a53fb022e5e399d73ea5a0158": "69556581e95a360daf113cd87c8c7cbc",
".git/objects/2f/b3f86a75e7dcbbe6e0fd499b11a8149e9df9ce": "e1f3dbedcfb8663a066a34a76420f544",
".git/objects/31/1fe7a80fabf765e7ac42f5e97bf88a7ad9d853": "89450653e4ce653159fd02e163052284",
".git/objects/35/6e64533e798ea912d652b56a3ca0f665e7c8de": "34d1bec5a221e92a00c4cf71518d0e42",
".git/objects/35/8f6d76eaeb6dc758d3759a9f1af12aa86021b0": "1e43ed5079fe0234d0d88fb9ffc88ecd",
".git/objects/36/5c964985e63a7109d5f635b495d09a39e34389": "ffe5d3ace7290e1c4189cd2cfa275685",
".git/objects/36/90a9c2c8ac1289b666005ed6eb6e645a63cbed": "82bf5f8f2308d53c780f137e2dd765e3",
".git/objects/38/254edcfadafdfdbd27e834c0929f4a78662e41": "6608ff4b01e3ae3a4f1fb038489c3ac8",
".git/objects/3a/e9c41cfee7c92c4b2f2b24a07c18bb8bd436dd": "6a1af6b22c547e3fb126269d86462f3d",
".git/objects/3c/3cb4f85cd43cb9ebc919e4d315b168b99f6ae0": "c0c2f0f63bbaed512b42c47e230f2ebd",
".git/objects/41/e067ecf9fd3c5bc05b746b5732b04a3aed8059": "95ea212a84e5ab9e4ee8ec573c5a34ea",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/83472455da520ac4f9c0df943e928033808417": "749c741cc60a3ba2f01714df1035b91c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4a/041be390f1f2ff8d6d588cd9f2a78b1149d07a": "e5c16fcf5705592fefe25005791e91aa",
".git/objects/4c/fb687fc95c6a74a33784cd01e0f2ae31ad66a8": "2e0122b52a8fea31cfdd5dee6f675abc",
".git/objects/4d/0107ad06947c7af8bbce67af9f5c810702aa98": "566f87c8156155aa6d07f57aef7dd5ba",
".git/objects/50/43e6769e0f79c4bb06bf6f759b11eade1d58f9": "8ac038854f9fb847864e3493dfbf4a49",
".git/objects/51/1979bfaae806a75c27964d98d5cae72f8609c8": "38607b581113f8d184058dcaefcffcc0",
".git/objects/51/2fd12fe5a3fa2716c058954787d257cb9a7bb4": "b5209941ea2bbcafc84746b1d5080e5f",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/520025c8f8a61eb68e6355bc93e403db21e078": "2cb40bfe184bac168b8be77a459b4e95",
".git/objects/5b/aaa96b960ae83e453ea9388b68496c861430c5": "0524ee8c5c8b3c6b67bfee66a899bada",
".git/objects/5f/792611cfb1e6ab2888349f02d58760c86c67b2": "8198a40d2c9e7a47c3fd7510b019be83",
".git/objects/60/7d21c9a827749cc161c4304ba918b670801d70": "3d0811ea9ac34a1a819206a886f3873e",
".git/objects/65/8dd9f7cd5c1b435803044726dd72a71cf25300": "047f72dcf10d90752abb4b08cdb56e26",
".git/objects/66/8aad94e5540bc6dfa2b14e8343ee3d19986e32": "12a727704deb4475543b0269ba85b9ed",
".git/objects/68/7ad846f2c6cfc9876f291d48f3996cdca031cf": "7d958964e79cc0a821f348076f2bb73c",
".git/objects/6d/caf1b2658cd8c37f718028c207059c25596e65": "49b19eb71abc1f0fdc28d873e7f00f49",
".git/objects/6f/cae59a8d5b4b5c42bc7b23dae26487b7815234": "122aba6527e304c87590005861e6455e",
".git/objects/6f/cbf68a2231d2bfc10a07912e57b587f23948dd": "4df7bf5317d7a58acd0dbd4ab0b1edae",
".git/objects/71/05051d5878e8ff89a74963e2193f9177c640f1": "4fe05fddde32b6d73864589bddb67f67",
".git/objects/71/d62460c9b9db74c4cd9ec117e2054bf74096fe": "b9ff1c4798f5cfa7371b52d4493e947f",
".git/objects/72/cf8db8561144f778bbe2aa8eb42290350d6cde": "fa27e5762136254705a29a5e972761ba",
".git/objects/74/983b4f8c18f086fe93d4303917d7e661d2e7d0": "b2fbe658f769ad0c09c544913f582676",
".git/objects/75/40843b7e3aced3dad54b6b47fd5ec823f19e10": "e35493381eeddeeabe81c7474a14a854",
".git/objects/75/b833370b60945436cd12691596ce832ec59633": "5860baaab22ceb7784cef3e499c84759",
".git/objects/7b/11fd76481fb469ebc83971722a9f5f5e39c077": "29d8cb9c488df755062ce26489dabb6f",
".git/objects/7c/68e555b6c214597da60f7e2e00a254ba333aef": "fd5a69e23c5d9101a45bb3affa16aa73",
".git/objects/86/c132e0841b1fd7955adc5889abe87a3d544651": "1f77b2197cc71cf0412840a7418bdac9",
".git/objects/87/355318ac69d1dbe8843ebc0315340fd370c805": "b4fc7d162b40e9887db71a967eb68adc",
".git/objects/88/24458c55e84d4eb8b886f80a05caf8bafd8a66": "046d300913877979d96cdf194aa6472e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/ca5ed8d2105c339032e64fd0ae749e0d02e6e6": "5cd0b55550ca330d55775c77b410a265",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/c3c8e39c10954224a291f0f49e9cc21e3450cb": "66f759505c9eee215bf3c88ca243d018",
".git/objects/92/3949530a3d5ff958641944df64593a2613a927": "5a35197ff7539009e025a88ce426f1b0",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9a/5c1ef8a8d372e302a34709bbd34dd3e294a864": "c880fbc73bbfe7f60ab650a6bc451904",
".git/objects/9d/c212a49ec0305d1c59b1130328cef9082587da": "228d7f2ed903681302f70f012917272a",
".git/objects/9e/ac7e93d3d5465bc4df4c14216e855e00ccd405": "3b285a7965a9015c17eff67de735e3f5",
".git/objects/a0/95206122d9e6ddd5313410bec531a8037aba5f": "e66196342422743be8ad002fe2be9cf7",
".git/objects/a0/ea1afd13a67b84ad543f19dd1c4e21aa20d136": "45d1a4c47bac2f7ef0a43cca0c89211e",
".git/objects/a2/34720d1b6197bbce4d4b75dd2f4e995ab43b1b": "acf520305219813a18bf0fe79b99593c",
".git/objects/a2/b3494e8d8838b3b48257f1b022e16c1d950ee5": "768aa53f716559c0d0fefef7f0b55e73",
".git/objects/a6/87eb80281ac0f16485e1893b56a79aed5c7dc5": "a134dd23601009e430a2673b9ba3d705",
".git/objects/a9/6d51e5522c6757a4c437bd0fcb1120f2e5a697": "720f7046080d53575afd9695d75cfc04",
".git/objects/ad/7126231e315fbf7142594110189175c25a16ac": "f450293e753f535b41997baaaaac6c9c",
".git/objects/ae/ae0c6367bc2777f9c0b9846200ebd3506f488c": "eaea2e2cfe682354bb90905306ea4bbc",
".git/objects/af/8ed76adf4cd886290fae5928368ebf372376fa": "2fbe504c70a2272eaea5cb0d57b44b61",
".git/objects/af/e6e3229227f2a017e6bd32c2164b9bfdc8d19b": "99cc47c8f7a2fee5fec1e193ec3c6e80",
".git/objects/b2/dada8c00e0ce6ad44e441a372daa44e16120ca": "55a0cfa26bfaa1889049033131cdb822",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/334e1ae2b448d207960a8a0e2970feb505ca8d": "d6862915909039bc05c04c8174deb795",
".git/objects/bc/b5bafaca430e7bbb2653b7189f1bf698bcc07c": "6e18da7d26ec6fae78fdd385e909ecd4",
".git/objects/bd/10ab4ad0f72cd073cf105fee8df31ed5febab7": "0558ce63132b2bd56685812f0ab14d01",
".git/objects/c0/9a4f3edd86bf49324a861132224e171f103615": "3256fca6a7be00ffb41d372a81d3536a",
".git/objects/c2/8c387bdb7a752301f7496e51782b78da950c2c": "832e3aa2c5aaf6dd8b08cb7af9025c27",
".git/objects/c5/09cb836a85556106ceea16af5fb38f67b94c4c": "af2a486859044a6a4a2779005b147a07",
".git/objects/c7/5413cf31f9fec6d3d5e6adaa3bd205b4709568": "6b9bea1dea2bde4dd05d274ff4884888",
".git/objects/c9/5ba72dd32b53a9dd2bd33252812f3e9eb0008f": "1776af524149990584126b93d9261178",
".git/objects/c9/e267198cb681d2a6b023f385fa5fdc48a39ba4": "625b3fd8f76f4585f055a1fa807f246b",
".git/objects/cc/f442667f7b9e75e1cbc27da061f51dfdac2eaf": "f4df22d028853d2f2c10fa2720cff7ef",
".git/objects/d0/924528450b60084023c720c08d4e4da18f5db6": "5a5bcab2206bfdf9e353d392d33de88f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/e764fb3e9b150cd39867527593f22b9a08b702": "b9fbe6d6f56739800b4138a60881d7a0",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d9/bca38f38230efffda876aac2577f46ce40c0f1": "0b9ba6567f1d8fe99e61442a383d4f29",
".git/objects/da/9aa8e83499cdf42ebad2590b5058d774b9d2d5": "6145a8975de48261ba0a3791e3b1dfb2",
".git/objects/de/1059a33476d5edca5a7a468472473c2e5720d0": "54678b232bb54c08c92e855d7bf187d2",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e1/87002c218b141da108cfbc2fa6648b26f35c51": "54fa72475f547316fcdd622e536f66f1",
".git/objects/e5/6bef95d24a153e036e78d590275ef85a54539a": "d2df0a945b044a4e2c0a16461dca8dca",
".git/objects/e6/b2d7b46d468e7067d9b19023604ea6e2ce9b14": "bccd95bc398d5f65dee2980bc0b07078",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/1ba8dd6cd31bcb25841af4c501f60e6e339d92": "720164565e900ec1021fe8b6a2747157",
".git/objects/ea/4830694351edf596acdb19808a0d56ba089f90": "362e4d0f9a13cad244e464a64a653027",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/529f16ca0b7b5acc5c0dac9ce687e70a02426c": "288448e0a030a0f65bc24cd78cb69320",
".git/objects/f1/4fcf05e0adfd0b14036ade66428f1f342f144c": "2033345e3a7f4d1e48d178b6bea2f634",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ff/8d4253196ee6955ae65c500afe9667fe2e1ac0": "3ce258e63b5b0878dbdb659f1ec0ddf9",
".git/refs/heads/master": "73a6939c38cd5827c1c8480187805b1e",
".git/refs/remotes/origin/master": "73a6939c38cd5827c1c8480187805b1e",
"assets/AssetManifest.bin": "06ffae2f49f1dbe739b0cc2632bfb74b",
"assets/AssetManifest.bin.json": "7057a3099a3038f50c2d80997d63e7c3",
"assets/AssetManifest.json": "f7a9e745941f4a8c273f43ea99fe841f",
"assets/assets/circle_loader.json": "e466d2919e29da1f4bfab363d199a255",
"assets/assets/icons/about.svg": "46c335f2885217940502f3ff07e5af3a",
"assets/assets/icons/contact.svg": "19c2dac1b0feb92e5827cf5612975276",
"assets/assets/icons/github.svg": "366f3200ec4d379ec6889e2bbdccf4fb",
"assets/assets/icons/home.svg": "03ca3fcd3f961f588b19841438664ac5",
"assets/assets/icons/instagram.svg": "cadfa7dc20269989995631a2a371d4ce",
"assets/assets/icons/linkedin.svg": "0dab79bfaa9f5aa85129e45874f5bd1a",
"assets/assets/icons/projects.svg": "5fef09b5ea819b84e973cee08d902d53",
"assets/assets/icons/services.svg": "9c4a238e4ec16d361b86b5f2cd1730c9",
"assets/assets/icons/twitter.svg": "071e8830844eaf7beb1df029de2c3686",
"assets/assets/icons/wave.svg": "eebece4bb80e5dd85823a6dc9044357e",
"assets/assets/images/bg_img.svg": "9dc5960c7124dc361ba30bd79188b881",
"assets/assets/images/flutter_service_img.png": "93d903468a771b89b9245e330d4d58bf",
"assets/assets/images/full_stack_development.jpeg": "6f7f21d796f87d0519f2f4de822688a8",
"assets/assets/images/main_pic.png": "38ea98fefcfbf4c784ea894669fe4d3d",
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
"assets/assets/images/project_images/starr_key_1.png": "45a3d27380a539a1df24a461b09664e2",
"assets/assets/images/project_images/starr_key_2.png": "baf1dbe5aab2bcf37df91d9da643b826",
"assets/assets/images/project_images/starr_key_3.png": "93224518aec72cd6d485b6f7c0d7c499",
"assets/assets/images/project_images/starr_key_4.png": "1288c2640743c3dc81ba3e080e2fa3ee",
"assets/assets/images/project_images/starr_key_5.png": "66eb32f76e8c3cb8c5376bbf89f68b97",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "725da484f4569741bf2b9844e1bee18d",
"assets/NOTICES": "5108085b1d97947dd173e040665dd227",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "7737f5fc722b6a040ac15271ea8d92fb",
"canvaskit/canvaskit.js.symbols": "8b59bb301fc2b1136f25606382f2ed6c",
"canvaskit/canvaskit.wasm": "c25c81b17823dbcffd70246687da5927",
"canvaskit/chromium/canvaskit.js": "2f82009588e8a72043db753d360d488f",
"canvaskit/chromium/canvaskit.js.symbols": "5573e55905729e79f52db673cb8da1ce",
"canvaskit/chromium/canvaskit.wasm": "9627b5a8211942dea260a8c23015b24f",
"canvaskit/skwasm.js": "099f00a255e1b1f33ba268145da4d8d8",
"canvaskit/skwasm.js.symbols": "3de29dc1934313ba10e7131c64b8049f",
"canvaskit/skwasm.wasm": "9b5275e9e635f5125f4bc329d6b1efe0",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4af2b91eb221b73845365e1302528f07",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "dda14bca0bd14de1fe30f8d24424cba6",
"/": "dda14bca0bd14de1fe30f8d24424cba6",
"main.dart.js": "93a586958cbedee685cb924ff425e005",
"manifest.json": "150b0dacfc8235aeff6f0a100acf9a48",
"version.json": "48dd23b51abb368ca9ea7fd41b8beb0f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
