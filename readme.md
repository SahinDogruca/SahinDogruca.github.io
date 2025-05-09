# Lyrics Finder 🎵✨

Basit ve kullanımı kolay bir şarkı sözleri arama uygulaması. Sadece HTML, CSS ve JavaScript kullanılarak geliştirilmiştir.

![Lyrics Finder Dark Ekran Görüntüsü](/assets/dark.png)
![Lyrics Finder Light Ekran Görüntüsü](/assets/light.png)

## 📝 Proje Açıklaması

Bu web uygulaması, kullanıcıların sanatçı ve şarkı adı girerek şarkı sözlerini anında bulmasını sağlar. Minimalist tasarımı ve kolay kullanımı ile dikkat çeker.

### Özellikler

- 🔍 Sanatçı ve şarkı adına göre arama
- ⚡ Anlık sonuçlar
- 📋 Şarkı sözlerini kopyalama özelliği
- 🌗 Karanlık tema desteği
- 📱 Responsive tasarım

## 🚀 Kurulum

1. Repository'yi klonlayın:

   ```bash
   git clone https://github.com/SahinDogruca/SahinDogruca.github.io
   ```

2. Proje dizinine gidin:

   ```bash
   cd lyrics-finder
   ```

3. `index.html` dosyasını bir web tarayıcısında açın veya bir yerel sunucu kullanın:
   ```bash
   # Eğer Python kurulu ise:
   python -m http.server
   # URL: http://127.0.0.1:8000
   ```

## 💻 Kullanım

1. Sanatçı alanına sanatçı adını girin
2. Şarkı alanına şarkı adını girin
3. "Search" butonuna tıklayın
4. Şarkı sözleri görüntülenecektir
5. İsterseniz "Copy" butonuna tıklayarak şarkı sözlerini kopyalayabilirsiniz

## 🛠️ Teknolojiler

Bu proje aşağıdaki web teknolojileri kullanılarak geliştirilmiştir:

- **HTML**: Sayfa yapısı ve içeriği
- **CSS**: Stil ve görsel tasarım
- **JavaScript**: Etkileşim ve veri işleme
- **localStorage**: Kullanıcı Tercihlerini kaydetmek (Dark theme)

## 📁 Proje Yapısı

```
lyrics-finder/
│
├── index.html          # Ana HTML dosyası
├── main.css       # CSS stil dosyası
├── app.js          # JavaScript mantık dosyası
├── assets/             # Görseller
└── README.md           # Bu dosya
```

## 🔄 API Entegrasyonu

Bu proje şarkı sözlerini getirmek için şu yöntemlerden birini kullanabilir:

- Yerel bir JSON dosyasından veri okuma
- Harici bir Lyrics API'si ile entegrasyon
- (Özel API kullanıyorsanız, burada belirtebilirsiniz)

## 🔧 Özelleştirme

Projeyi kendi ihtiyaçlarınıza göre özelleştirmek için:

1. CSS dosyasını düzenleyerek renk şemasını değiştirebilirsiniz
2. JavaScript dosyasında arama algoritmasını geliştirebilirsiniz
3. Yeni özellikler ekleyebilirsiniz (favorilere ekleme, geçmiş aramalar vb.)

## 📱 Responsive Tasarım

Bu uygulama mobil cihazlar da dahil olmak üzere farklı ekran boyutlarına uyum sağlayacak şekilde tasarlanmıştır.

## 🤝 Katkıda Bulunma

Projeye katkıda bulunmak isteyenler için:

1. Bu repository'yi fork edin
2. Yeni bir branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some amazing feature'`)
4. Branch'inize push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun
