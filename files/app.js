const request = require('node-superfetch');
const deasync = require("deasync");

class CroxyApi {
	/**
     * Croxy-API kurulumunu yapar.
	 * @example
	 * const croxy = require("croxy-api")
	 * const api = new croxy("API_KEY")
     * @param {String} key - Siteden aldığınız API Key
     */
	constructor(key) {
		if (!key) throw new Error('Lütfen bir key giriniz. (Key almak için: https://croxythedeveloper.com.tr/croxyapi sitesinden ya da Discord sunucumuza gelerek alabilirsiniz: https://discord.gg/tuG3B8mJ49)');
		this.key = key;
		try {
			fetch("https://registry.npmjs.org/croxy-api/latest").then(async(res) => {
				res.json().then((data) => {
				  if(require("../package.json").version !== data.version) {
					console.warn("Eski bir sürümü kullanıyorsunuz. 'npm install croxy-api@"+require("../package.json").version+"' yazarak modülü güncelleyebilirsin. Destek almak için Discord sunucuma gelebilirsin: https://discord.gg/tuG3B8mJ49")
				  }
				})
			})
		} catch (err) {
			
		}
		new Promise(async function(resolve, reject){
			const { body } = await request.get('https://croxythedeveloper.com.tr/api/key/check?key='+key);
			if(body.key === false) throw new Error('Girdiğiniz key geçersizdir.');
		})
	};
	
	/**
     * Güncel döviz kurunu gösterir.
	 * @example
	 * // returns Object[]
	 * CroxyAPI.döviz();
     * @return {Object[]} Döviz kuru
    */
	döviz() {
		return deasync(async (cb) => {
			try {
				const { body } = await request.get(`https://croxythedeveloper.com.tr/api/croxyapi/doviz?key=${this.key}`);
				let veriler = {};
				Object.keys(body).forEach(v => {
					veriler[v] = {
						"birim": body[v].birim,
						"isim": body[v].isim,
						"alış": body[v].alış,
						"satış": body[v].satış,
						"değişim": body[v].değişim
					}
				});
				cb(null, veriler);
			} catch (err) {
				if(err.message === "503 Service Unavailable") throw new TypeError("Verilerin geldiği sitede bir hata ortaya çıktı. Lütfen tekrar deneyin. Eğer hala çalışmazsa lütfen modülün Discord destek sunucusuna gelin. https://discord.gg/tuG3B8mJ49")
				throw new TypeError(err);
			}
		})();
	}

	/**
     * Güncel kripto kurunu gösterir.
	 * @example
	 * // returns Object[]
	 * CroxyAPI.kripto();
     * @return {Object[]} Kripto kuru
    */
	kripto() {
		return deasync(async (cb) => {
			try {
				const { body } = await request.get(`https://croxythedeveloper.com.tr/api/croxyapi/kripto?key=${this.key}`);
				let veriler = {};
				Object.keys(body).forEach(v => {
					veriler[v] = {
						"birim": body[v].birim,
						"isim": body[v].isim,
						"alış": body[v].alış,
						"satış": body[v].satış,
						"değişim": body[v].değişim
					}
				});
				cb(null, veriler);
			} catch (err) {
				if(err.message === "503 Service Unavailable") throw new TypeError("Verilerin geldiği sitede bir hata ortaya çıktı. Lütfen tekrar deneyin. Eğer hala çalışmazsa lütfen modülün Discord destek sunucusuna gelin. https://discord.gg/tuG3B8mJ49")
				throw new TypeError(err);
			}
		})();
	}

	/**
     * Güncel yaşanan depremleri gösterir.
	 * @example
	 * // returns Object[]
	 * CroxyAPI.deprem(5);
	 * @param {Number} sayi - Gösterilecek veri sayısı
     * @return {Object[]} Deprem verileri
    */
	deprem(sayi) {
		if(!sayi || !Number(sayi) || sayi < 1) throw new TypeError('Lütfen kaç tane depremin görüntüleceğini yazın.')
		return deasync(async (cb) => {
			try {
				const { body } = await request.get(`https://croxythedeveloper.com.tr/api/croxyapi/deprem?key=${this.key}&sayi=${sayi}`);
				cb(null, body)
			} catch (err) {
				if(err.message === "503 Service Unavailable") throw new TypeError("Verilerin geldiği sitede bir hata ortaya çıktı. Lütfen tekrar deneyin. Eğer hala çalışmazsa lütfen modülün Discord destek sunucusuna gelin. https://discord.gg/tuG3B8mJ49")
				throw new TypeError(err);
			}
		})();
	}

	/**
     * Steam'den oyun aratırsınız
	 * @example
	 * // returns Object
	 * CroxyAPI.steam(5);
	 * @param {String} isim - Oyun ismi
     * @return {Object} Oyun hakkında bilgi
    */
	steam(isim) {
		if(!isim) throw new TypeError('Lütfen bir oyun ismi girin.')
		return deasync(async (cb) => {
			try {
				const { body } = await request.get(`https://croxythedeveloper.com.tr/api/croxyapi/steam?key=${this.key}&ara=${isim}`);
				cb(null, body)
			} catch (err) {
				if(err.message === "503 Service Unavailable") throw new TypeError("Verilerin geldiği sitede bir hata ortaya çıktı. Lütfen tekrar deneyin. Eğer hala çalışmazsa lütfen modülün Discord destek sunucusuna gelin. https://discord.gg/tuG3B8mJ49")
				throw new TypeError(err);
			}
		})();
	}

	/**
     * Minecraft sunucusu aratırsınız
	 * @example
	 * // returns Object
	 * CroxyAPI.minecraftSunucu("mc.hypixel.net");
	 * @param {String} ip - Sunucu IP'si
     * @return {Object} Sunucu hakkında bilgi
    */
	minecraftSunucu(ip) {
		if(!ip) throw new TypeError('Lütfen bir sunucu IP\'si girin.')
		return deasync(async (cb) => {
			try {
				const { body } = await request.get(`https://croxythedeveloper.com.tr/api/croxyapi/minecraftSunucu?key=${this.key}&ara=${ip}`);
				cb(null, body)
			} catch (err) {
				if(err.message === "503 Service Unavailable") throw new TypeError("Verilerin geldiği sitede bir hata ortaya çıktı. Lütfen tekrar deneyin. Eğer hala çalışmazsa lütfen modülün Discord destek sunucusuna gelin. https://discord.gg/tuG3B8mJ49")
				throw new TypeError(err);
			}
		})();
	}

	/**
     * Güncel haberleri gösterir.
	 * @example
	 * // returns Object[]
	 * CroxyAPI.haber(5, "spor");
	 * @param {Number} sayi - Gösterilecek veri sayısı
	 * @param {"ekonomi"|"magazin"|"spor"|"gündem"|"türkiye"|"dünya"} kategori - Haberlerin gösterileceği kategori
     * @return {Object[]} Haber verileri
    */

	haber(sayi, kategori) {
		const kategoriler = ["ekonomi", "magazin", "spor", "gündem", "türkiye", "dünya"]
		if(!sayi) throw new TypeError("Kaç tane haberin görüntüleneceğini yazın.")
		if(!kategoriler.includes(kategori)) throw new TypeError("Şu kategorileri girebilirsin: "+kategoriler.join(", "))
		return deasync(async (cb) => {
			try {
				var { body } = await request.get(`https://croxythedeveloper.com.tr/api/croxyapi/haber?key=${this.key}&sayi=${sayi}&kategori=${kategori}`);
				cb(null, body.hata ? body.hata : Object.keys(body.sonuç).map(x => body.sonuç[x]));
			} catch (err) {
				if(err.message === "503 Service Unavailable") throw new TypeError("Verilerin geldiği sitede bir hata ortaya çıktı. Lütfen tekrar deneyin. Eğer hala çalışmazsa lütfen modülün Discord destek sunucusuna gelin. https://discord.gg/tuG3B8mJ49")
				throw new TypeError(err);
			}
		})();
	}

	/**
     * Youtube kanalındaki videoları gösterir.
	 * @example
	 * // returns Object[]
	 * CroxyAPI.youtubeVideolar("croxyminecraft");
	 * @param {String} kanal - Youtube kanal ID'si
     * @return {Object[]} Kanal video verileri
    */
	youtubeVideolar(kanal) {
		if(!kanal) throw new TypeError('Lütfen bir kanal ID\'si girin.')
		return deasync(async (cb) => {
			try {
				var { body } = await request.get(`https://croxythedeveloper.com.tr/api/croxyapi/youtubeVideo?key=${this.key}&kanal=${kanal}`);
			} catch (err) {
				if(err.message === "503 Service Unavailable") throw new TypeError("Verilerin geldiği sitede bir hata ortaya çıktı. Lütfen tekrar deneyin. Eğer hala çalışmazsa lütfen modülün Discord destek sunucusuna gelin. https://discord.gg/tuG3B8mJ49")
				throw new TypeError(err);
			}
			cb(null, body.hata ? body.hata : body);
		})()
	}
	
	/**
     * İki şehir arasındaki mesafeyi gösterir.
	 * @example
	 * // returns Object[]
	 * CroxyAPI.kaçkm("istanbul", "adana");
	 * @param {String} şehir1 - Birinci şehir
	 * @param {String} şehir2 - İkinci şehir
     * @return {Object[]} Kilometre verileri
    */
	kaçkm(şehir1, şehir2) {
		if(!şehir1) throw new TypeError('Lütfen bir şehir girin.')
		if(!şehir2) throw new TypeError('Lütfen bir şehir girin.')
		return deasync(async (cb) => {
			try {
				var { body } = await request.get(`https://croxythedeveloper.com.tr/api/croxyapi/kackm?key=${this.key}&sehir1=${şehir1}&sehir2=${şehir2}`);
				cb(null, body.hata ? body.hata : body);
			} catch (err) {
				if(err.message === "503 Service Unavailable") throw new TypeError("Verilerin geldiği sitede bir hata ortaya çıktı. Lütfen tekrar deneyin. Eğer hala çalışmazsa lütfen modülün Discord destek sunucusuna gelin. https://discord.gg/tuG3B8mJ49")
				throw new TypeError(err);
			}
		})()
	}

};

var version = require("../package.json").version

module.exports = CroxyApi;
module.exports.version = version;
