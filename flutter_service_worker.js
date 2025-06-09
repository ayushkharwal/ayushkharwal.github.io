'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "e9673b285cda2df997dfe45dc5b857c6",
".git/config": "81f3739147feba624f510095fbd940a0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "2065a6510073f7da7fc3186a243d4e20",
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
".git/index": "0bced7ea9653a537b0b3e9f041ef40a5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "00e4c7478532beb7c6f72472cb058ba4",
".git/logs/refs/heads/master": "00e4c7478532beb7c6f72472cb058ba4",
".git/logs/refs/remotes/origin/master": "433d0c5d4b5cf7cd8c3ae82cb212c67e",
".git/objects/01/bde99230cca09eac3fda868cfb144a7af4c355": "73ff87c52ec28868358f1e8018130b0d",
".git/objects/03/1031b766e5bee35590325a235696e07caa485c": "4fc6749993905b9ed1f5db402dd197d1",
".git/objects/03/41e672165a54e220900b2600582d05de5c0ee1": "d2a59c62db0b475c5014b7e7feec397b",
".git/objects/03/c12c0e143bd233b26d4894cd074981b6629f5c": "54d83112b920fecd36422d0ed5f08237",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/07/12497f120bed912fa0eb5f3017bfb294394d6d": "d9fe6fe135f3e68bf5182a331e31cb0e",
".git/objects/07/c707199bf3e1c5ca46bf76bf9cd12b9ef10ff6": "e6852063be6b52faa15edf83ce72508f",
".git/objects/09/7fb185b59219fe572a528365850ee67bfe5638": "c5819a28f746869093804f1dba60522e",
".git/objects/0b/4520ca6ed189afb9cdab08011b9dc610a7c545": "241e2dc626c6a626fffe94e60c979c9f",
".git/objects/0e/9776722c4e9aa371b6fd590a0399eeb54ed5d3": "ada0a5b38cd6e3e2a492610bdeb949ed",
".git/objects/0f/70999d08fb48ab20b465dcb580915a9e2cb028": "529bad47393142b1d69cb65540b7f2bd",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/11/aae96f3635cb1b739f68c7c774abcebefd4a3e": "d9df830d1f9f3beffd8d3fb21a8989df",
".git/objects/14/0c800c77c82e7452bf7ef8914433a32ce2a50f": "26f5ba80280464f42b6c15955bc128cd",
".git/objects/14/9c93c442f57efe228013cac365fe501cc8a999": "0abe933aa327e006b4d7d57222c23051",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/532c5f61a12ff8d5af03cb5d1b76d005060f88": "113b1ffed58a5c7f953b0d8947cf9ddd",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/4215a03b2343798e31d9cbcc9d8029380a11ad": "b0486f433d29368a047e2605d1a4d154",
".git/objects/23/cc38a621e6e8e70510c7179c445f27c59abcbb": "728990f0d503b2485f069c49907f4fed",
".git/objects/25/cfc3e113fd3005e05043c71c7767605693577a": "0a7093d3672c93239dbb20806f1054ce",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/28/261499b100159a5d67d2d2fd13c251beb340a3": "8f511e6b18643e336c05b2dde126d2cd",
".git/objects/29/5d1b9fde3da8a2615668097318d00f76d5b310": "067abe664fcf2ef2860261d400d9eac8",
".git/objects/2a/19415225552c1804695d602471d036acc5b6bd": "b63efc0d5a882866b5da10703e2cd178",
".git/objects/2f/5cc8a5666866cabe32f29ca881cb0d62bf49bd": "efc2c4346f61190dfbaa3b3cf7556de8",
".git/objects/32/229b841c990bbe61820ba53c3b9cc35382cac8": "371f16206cddc02413aff72d22edfd31",
".git/objects/36/f4a8d1fe261bff0aa0918d92c6f5cbed063ad0": "0c19e5559ac5b31010903bf0b247493d",
".git/objects/36/fb7e91051ae0411fba17ae66421b1844506d97": "f00e85ec911174d4d3fe1d05ad65e4b6",
".git/objects/39/de33478fbdc8b9f9fb85ef024bf4bad08d2f16": "8aee07c16207920113929885dcd1e0ce",
".git/objects/3c/3cb4f85cd43cb9ebc919e4d315b168b99f6ae0": "c0c2f0f63bbaed512b42c47e230f2ebd",
".git/objects/3f/d081f11429b7fbac74cb8ace495b305b9ed165": "64400d092b2a6546428594843bec6038",
".git/objects/40/b10a690c6f3187caf115fd419d05a3c8e1313d": "24ec8ad4de47082658f5112931810977",
".git/objects/43/f89d8efa0881e9da5f9f3be8649d9a265a1425": "6d8b542d791d954178f719acab3afb53",
".git/objects/43/fadac0adad8479c603b1bf49db207219fb8d16": "dc65bba791680d40c2cee73cea100200",
".git/objects/46/68c52547a441b9855fbbf7015cf95b373d697f": "3aa4fab1243518a6ee9eac0677381134",
".git/objects/47/248112ba7d4de95ff5637bd50c2294888aadac": "55273354b92563049f6419cd3737927b",
".git/objects/48/37533a8ffb636e111644446b8b5254d152a146": "54ab11d80a5332cf91fd2999264849ea",
".git/objects/49/371e06afb402f4100078fde63971eb9e060ff9": "80b6c25558a995ef97c3f7cf3e1deab5",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4a/041be390f1f2ff8d6d588cd9f2a78b1149d07a": "e5c16fcf5705592fefe25005791e91aa",
".git/objects/4b/27f91635d2698c50f3bd40e86a4e9f1f4d0968": "4d445b463c1501f3873567bba62e4e41",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/e8728e89b9b48d5e07b1d459f191a0b7aa3d5f": "2c61a67a55e07bbb6c46ed15ef7528be",
".git/objects/4c/fb687fc95c6a74a33784cd01e0f2ae31ad66a8": "2e0122b52a8fea31cfdd5dee6f675abc",
".git/objects/50/43e6769e0f79c4bb06bf6f759b11eade1d58f9": "8ac038854f9fb847864e3493dfbf4a49",
".git/objects/50/89e9327e7b1690e3e0e1208b6eaa351a97002c": "c3601c464af2f33420735d9804dbb4fc",
".git/objects/50/bfc7e1e4df1a16dd3216328b8e8c3e2ba32a88": "8e192cce3a33054f7ed91c9925b05435",
".git/objects/51/1979bfaae806a75c27964d98d5cae72f8609c8": "38607b581113f8d184058dcaefcffcc0",
".git/objects/51/2fd12fe5a3fa2716c058954787d257cb9a7bb4": "b5209941ea2bbcafc84746b1d5080e5f",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/7b9395ad2c1cceaf39842f48f08d34a693e259": "3a81c4a8717663ddc841061125e5dc0e",
".git/objects/55/520025c8f8a61eb68e6355bc93e403db21e078": "2cb40bfe184bac168b8be77a459b4e95",
".git/objects/58/31840272dc1c691085a1cda9eff0467b035365": "adfbc6c173c4e9b037c82eb43ea9b9d0",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/42b2eab282a3e9850f16474881531eb2f586dd": "46565d5a4b2fefc746986e08357b2ccb",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5e/5a6fe1f84ace7683d891271c45184a88a7d0f6": "0894ae640e5e4f82fa531646e5db4a96",
".git/objects/5f/792611cfb1e6ab2888349f02d58760c86c67b2": "8198a40d2c9e7a47c3fd7510b019be83",
".git/objects/60/323ed6abdf13d27724c20971cae30198b4bebc": "9a2cc7330c419dd0255f26dcd8250b07",
".git/objects/60/8cd5fcf95988afb342f2d79375e9e471d37c7d": "f035198ae5d1389faedb60af0d6f98af",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/63/a88b872967f34696aafcabb9d21107af20a733": "043c2c1de487fac4f43e9a880c8257b0",
".git/objects/65/3d6839810d4d1ddf94bc0230ce417065647aa2": "ed352684db6b817ffa7f9acd7fdcdc16",
".git/objects/66/18da6f2c459002872acc840e67785ee398afef": "4e689584e41d8b91c986789e571f32c8",
".git/objects/66/8aad94e5540bc6dfa2b14e8343ee3d19986e32": "12a727704deb4475543b0269ba85b9ed",
".git/objects/66/f16564dc28959336d44da8cfb7b2ae40c50481": "b66a70e395586e59f414e070544a4275",
".git/objects/68/7ad846f2c6cfc9876f291d48f3996cdca031cf": "7d958964e79cc0a821f348076f2bb73c",
".git/objects/6a/dba49cfaf04eb8325abb2ca9bd7cdd9262c462": "84f2c3438ddbb36c3f90fe5f33de20d3",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6d/caf1b2658cd8c37f718028c207059c25596e65": "49b19eb71abc1f0fdc28d873e7f00f49",
".git/objects/6f/6ef3227b2c48e30a85f7d0610fa0204a7897fb": "d69e29fff0bc86de3756995a4c9e0aeb",
".git/objects/6f/cbf68a2231d2bfc10a07912e57b587f23948dd": "4df7bf5317d7a58acd0dbd4ab0b1edae",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/72/401c4f689ea78a8c5511828aae2dd94e748511": "0eba60106efc1558a60cb809e8eebc32",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/77/d35b1e6aec5e13967263e6ee132572ba1975b7": "9df759cf3e0c8501561bd0ca7518a8c0",
".git/objects/78/38a2f777646c1cedfb8b656fe9a6709bbb4dba": "f6dd580fde282ce2ca7f8049047c9f87",
".git/objects/7b/d75086dd5e023dd29fae1534b8324b560d9df5": "df2e4d92e3b8e53b26599a8aad653ddb",
".git/objects/7d/3917a094ce00f7ec252782d9319d3ad509e5a4": "000e11dd52eb920e835a3612494d247e",
".git/objects/7e/50ed8808c36636ddabda7e9aba59eea0ee0bd1": "87ccea29d694ae5e1b08ed9aaf5faca3",
".git/objects/7e/8d4488372bf19642cb602d4108a1ef214a20a1": "76b259aa8fd89b5ab0bc2b3eafda5436",
".git/objects/7f/b65503ec92103df46851698657c55a6221c144": "301cb455f0cf43a33b1ee1345582ee60",
".git/objects/85/60152ad9e7784d36d76a942824d50a2b0a468f": "7ca5820432dc2e158e8a4388539babee",
".git/objects/88/24458c55e84d4eb8b886f80a05caf8bafd8a66": "046d300913877979d96cdf194aa6472e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8c/f78eb5d812b9c6f246f3cc3d120b4cbd6dffd3": "acfb12428128b66684e9649790214eed",
".git/objects/91/adf611f3f13065c7f469b5b0bc2a94bc3e8dc8": "354ebff17bf484c9838b434c27945752",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/98/0a8eb1f9bc814f41e3987969a58ec5723e949a": "51732b6c95ea7f978229d8eecad600f6",
".git/objects/9a/54a12e07518d774d1aec7f8994c2ac75cc147f": "62e5b19dc0e38064163a0f5de7638115",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9d/c212a49ec0305d1c59b1130328cef9082587da": "228d7f2ed903681302f70f012917272a",
".git/objects/9e/9f448ccffc9def50d078827919e991023997d4": "0237795217c197f12df1a0c3ef466ba8",
".git/objects/9e/c1347e1681025cb38359be811821d4629535f7": "df13d01fed30e365d39ec9f98ad05b10",
".git/objects/a4/c26055f6614236c77b8fbaef5683e800a59b72": "068f103d330afdce22649b9268cae2da",
".git/objects/a5/9d4ab14fdc3279832e547fd2c972d54bc9fb02": "6c12663fd034e6a1aab7aaf4200384c7",
".git/objects/a6/2949401f5563bcdbb305fc6acdbc81f4480da7": "a7446b07e64604d621b73f285e2b2cac",
".git/objects/a6/3793f613ba6d16d32b3da0bd7621005800494a": "76539c7ebba788ebffe080b2a90c5085",
".git/objects/a6/87eb80281ac0f16485e1893b56a79aed5c7dc5": "a134dd23601009e430a2673b9ba3d705",
".git/objects/aa/e651a142f289808abccaccfcb5046d3ce499a8": "1d5a17c3c78c1bfe96572f3d38505773",
".git/objects/ad/7126231e315fbf7142594110189175c25a16ac": "f450293e753f535b41997baaaaac6c9c",
".git/objects/ae/ae0c6367bc2777f9c0b9846200ebd3506f488c": "eaea2e2cfe682354bb90905306ea4bbc",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/af/8ed76adf4cd886290fae5928368ebf372376fa": "2fbe504c70a2272eaea5cb0d57b44b61",
".git/objects/af/f49d1e085ae34d8d20ea746cd30175a2066e43": "f922fdeeb8fe5926d5b4bd3be8c732ce",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b2/0669d1569df8e6316e1ef51921395cf67767f0": "cb2f6ab9a17d8e4b58b559bfdf44989e",
".git/objects/b2/dada8c00e0ce6ad44e441a372daa44e16120ca": "55a0cfa26bfaa1889049033131cdb822",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b5/325022184cb48a0799c932bdcbcc0c911473af": "788f56e4006323e417b3c7bcaf33a201",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/d13d0e374dc1f3aa822573c9c91e5a1b0ff6b3": "3f212cbc39e623e7bd708ee26ac15789",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c0/8090c6cb5403015f9d71edbaf714e850842ae5": "e8c64a5b09926514037cb92954c76f73",
".git/objects/c2/8c387bdb7a752301f7496e51782b78da950c2c": "832e3aa2c5aaf6dd8b08cb7af9025c27",
".git/objects/c2/cbb3ae7776e3d69c3ff214ee55ecd84ebdbb13": "d43bf6c771a92f860e8e272bba6ea3ed",
".git/objects/c3/16d1eb54c60a54d9691f6593e9ec3ac64457be": "7a6c0c8322b731401d76a6a2902080ca",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c5/09cb836a85556106ceea16af5fb38f67b94c4c": "af2a486859044a6a4a2779005b147a07",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c7/5413cf31f9fec6d3d5e6adaa3bd205b4709568": "6b9bea1dea2bde4dd05d274ff4884888",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/c9/e267198cb681d2a6b023f385fa5fdc48a39ba4": "625b3fd8f76f4585f055a1fa807f246b",
".git/objects/d0/2a8f4b9def71ab9f9736558cf268f34540d371": "56d20fbce8e2f01dcd562bbd68164e43",
".git/objects/d0/53d28ed3ce5674ade22bcbea1d9a32b3a58c9c": "e26c7a17a91eda33135d23c284103460",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/1f9d8485978317ebf6de748c9a9b54c4501b10": "80bec8893a1eb4630560be555d9b7223",
".git/objects/d2/219be638288a98dc9b4f18355c2bdeb67906e4": "ab2450de855916693049bfeb5b340461",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/6cdc9329d23cf583154397617e0d8a6dadd8aa": "a91f4cdf11984dcd0d1b951f668a9054",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/a468eb0004ba6ea6a43eca35b6aa7cb74ee36e": "f45d58455cc038f703fcd552bf5fe6af",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/74861895124bf3239c6748425ae9487fd9d0dd": "487075be5f8384dd07cae45b41cd35a1",
".git/objects/d9/7c1a816058bcded90b507e51f7047cff005026": "e7e53037c6c672af4339ca6c30395982",
".git/objects/d9/bca38f38230efffda876aac2577f46ce40c0f1": "0b9ba6567f1d8fe99e61442a383d4f29",
".git/objects/da/9aa8e83499cdf42ebad2590b5058d774b9d2d5": "6145a8975de48261ba0a3791e3b1dfb2",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dc/bb0c15e731e32da5b38181fcc1b7c6b61ab75c": "e4579a1c296b4bf242a7bca34ba753b0",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/565a8dc0f53a8d03ca15ed972934cfa5c9eb06": "7163d3f3790ad49ad6614ce8130f3906",
".git/objects/e0/f52c2cdebb6eafcf8bcdcf2df08ba50118842c": "167fc170a5f50312073a30834f7d7bbe",
".git/objects/e4/fd53f12e19b8d859b5f66be79e72bb2abf699b": "a428c27319c2d6629de11dd5cebc0bd6",
".git/objects/e5/3ba47ce7a6a7a8840bb866a789d6f3d5be3320": "89eee8b6676c8da4cf86c884792204c2",
".git/objects/e5/618987c7550803ea549f350154c344a3207e0f": "28051a191640f13c1b0c112532546907",
".git/objects/e6/38e98259f091105367f74d65f66bf2bdd4fa53": "5c9ceb444aeaba26e8754ecdafcea883",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/1ba8dd6cd31bcb25841af4c501f60e6e339d92": "720164565e900ec1021fe8b6a2747157",
".git/objects/e7/a53d2d480b714cabd85543816458656ce1dea7": "9532630cebb4c9c7ee1173092fcfcae3",
".git/objects/e8/07c16045039dafae751a7c354ceabc21007804": "7cc136b32398448b7e5b3d5c5ee2853c",
".git/objects/e8/d79d3799131dfeb2d67b3190b12db29fc34d56": "3301e7d5dc5c9945d759c0458f67fa7d",
".git/objects/e9/c85a981207ffb3da48e021a3ff2aeaf1faa20d": "70a895f496c2b1aa283c75c584c21b90",
".git/objects/ea/4830694351edf596acdb19808a0d56ba089f90": "362e4d0f9a13cad244e464a64a653027",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f0/24011c7d6c12e7e0ead841c496702be0901087": "513c3cd0d31836b1c4d3d9e07cb00047",
".git/objects/f1/4dfe92cfe132cdab182b996dfe65d8a8e1bd73": "d61a7fa63b59abcebdf486b4fb38ea50",
".git/objects/f1/74471ed126f20776aadec62c8348fa23393c07": "6e76a281b9f0be9da3752c58fad0dabf",
".git/objects/f1/d12a9a71ff0ec2f57a27122b20f51893501ed4": "911897f87522aca8e69ee39743d2dd12",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/420417306b8b28e1adf9b4221888cf83f388e6": "ea8441ff48b054c6806fe0cb7d101e45",
".git/objects/f5/a55118cca179aff90be4e63d22ea0f8900df52": "e6b110fdba73ecb35d21d8e9ac168c3b",
".git/objects/fc/00dd9a74b23541fc35a15594817e93686240ec": "5b5fce0789960e58becdc9a2c719e37f",
".git/objects/fc/670d19e6e092a6aaa54a55eee38b010849b592": "db30ba7b07ab1aaa8d98491333de54a7",
".git/objects/fc/eb10379499b26d9eb8b8bd6649deb281040b4c": "21c9119cd8e5b556c75aab8370238345",
".git/objects/ff/284f32dfb621235b9b678dde17a38f2b63bada": "5ae7816cd84ca570490bf11007692ca6",
".git/objects/ff/8d4253196ee6955ae65c500afe9667fe2e1ac0": "3ce258e63b5b0878dbdb659f1ec0ddf9",
".git/ORIG_HEAD": "5f8a06c5e39555cf98cdfd1274f47e7e",
".git/refs/heads/master": "5bec08559906fcc7eb22a462299d60eb",
".git/refs/remotes/origin/master": "5bec08559906fcc7eb22a462299d60eb",
"assets/AssetManifest.bin": "5fd68c55f54ee5c3ef329831fe90ff9c",
"assets/AssetManifest.bin.json": "63f045351f72c2cacd4d58b4c8e65a52",
"assets/AssetManifest.json": "d9a623855ab109c3c01f2ce3b9cb3242",
"assets/assets/circle_loader.json": "e466d2919e29da1f4bfab363d199a255",
"assets/assets/fonts/Quicksand-Regular.ttf": "7194c41ffab51721bd84ca104553c4e1",
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
"assets/FontManifest.json": "c59f991b55efa263fc3e2e8592fe6b0d",
"assets/fonts/MaterialIcons-Regular.otf": "71c6b662dab0e781146efeb7e04a1ba7",
"assets/NOTICES": "dc489889909464cad2cc735a0e6c879a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f1126486ccebd15d203af7169b536fc2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "24a0868685b30b0a90d6ba622d0f7029",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "804bb2d330f562c1dd7a84af90065b63",
"/": "804bb2d330f562c1dd7a84af90065b63",
"main.dart.js": "e83ef9dce40787eb02921b780d0ff6d1",
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
