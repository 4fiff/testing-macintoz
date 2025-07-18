const products = [
    // Produk 1
    { 
        id: 1, kategori: 'Mac', name: 'Macbook Air 13" M4 (2024) - Sky Blue', specs: '16GB RAM, 256GB SSD', 
        price: 15799000, stock: 8, grade: 'Baru', sku: '7PZ3X8QA', sold: 312, 
        images: ['images/produk/id1_7PZ3X8QA/1.webp', 'images/produk/id1_7PZ3X8QA/2.webp', 'images/produk/id1_7PZ3X8QA/3.webp', 'images/produk/id1_7PZ3X8QA/4.webp', 'images/produk/id1_7PZ3X8QA/5.webp', 'images/produk/id1_7PZ3X8QA/6.webp', 'images/produk/id1_7PZ3X8QA/7.webp', 'images/produk/id1_7PZ3X8QA/8.webp'], 
        description: {
            intro: 'MacBook Air is the world’s most popular laptop for a reason’s. It delivers up to 18 hours of battery life. The M4 chip unlocks a whole new level of performance for work and play. And it now comes in a stunning Sky Blue color.',
            specs: ['Chip: Apple M4 (10-core CPU, 8-core GPU)', 
                    'Layar: 13.6-inch Liquid Retina display with True Tone',
                    'Memori: 16GB RAM terpadu', 
                    'Penyimpanan: 256GB SSD',
                    'Camera: 12MP Center Stage camera',
                    'Charging: MagSafe 3 charging port',
                    'Port: Two Thunderbolt 4 ports, headphone jack',
                        'Color: Sky Blue' ]
        },
        pros: ['Semua Produk Baru Bergaransi iBox Official',
                'Processor Super Kencang Anti Panas',
                'Speaker dan Bass Mantap',
                'Redesign terbaru Macbook Air, lebih Modern dan Catchy',
                'Baterai tahan sangat lama',
                'Charging Menggunakan Magsafe'],
        cons: ['Keterbatasan Port/Colokan (disarankan beli dongle terpisah)'],
        inTheBox: ['Unit MacBook Air 13" M4',
                '30W USB-C Power Adapter',
                'Magsafe Charge Cable (2m)']
    },
    // Produk 2
    { 
        id: 2, kategori: 'Mac', name: 'Macbook Air 13" M4 (2024) - Midnight', specs: '16GB RAM, 256GB SSD', 
        price: 15799000, stock: 3, grade: 'Baru', sku: 'R4K81NZB',  sold: 163,
        images: ['images/produk/id2_R4K81NZB/1.webp', 'images/produk/id2_R4K81NZB/2.webp', 'images/produk/id2_R4K81NZB/3.webp', 'images/produk/id2_R4K81NZB/4.webp', 'images/produk/id2_R4K81NZB/5.webp', 'images/produk/id2_R4K81NZB/6.webp', 'images/produk/id2_R4K81NZB/7.webp'], 
        description: {
            intro: 'MacBook Air is the world’s most popular laptop for a reason’s. It delivers up to 18 hours of battery life. The M4 chip unlocks a whole new level of performance for work and play. And it now comes in a stunning Sky Blue color.',
            specs: ['Chip: Apple M4 (10-core CPU, 8-core GPU)', 
                    'Layar: 13.6-inch Liquid Retina display with True Tone',
                    'Memori: 16GB RAM terpadu', 
                    'Penyimpanan: 256GB SSD',
                    'Camera: 12MP Center Stage camera',
                    'Charging: MagSafe 3 charging port',
                    'Port: Two Thunderbolt 4 ports, headphone jack',
                        'Color: Midnight' ]
        },
        pros: ['Semua Produk Baru Bergaransi iBox Official',
                'Processor Super Kencang Anti Panas',
                'Speaker dan Bass Mantap',
                'Redesign terbaru Macbook Air, lebih Modern dan Catchy',
                'Baterai tahan sangat lama',
                'Charging Menggunakan Magsafe'],
        cons: ['Keterbatasan Port/Colokan (disarankan beli dongle terpisah)'],
        inTheBox: ['Unit MacBook Air 13" M4',
                '30W USB-C Power Adapter',
                'Magsafe Charge Cable (2m)']
    },
    // Produk 3
    { 
        id: 3, kategori: 'Mac', name: 'Macbook Air 15" M4 (2024) - Sky Blue', specs: '16GB RAM, 256GB SSD', 
        price: 19899000, stock: 5, grade: 'Baru', sku: 'G7X23MLQ',  sold: 232,
        images: ['images/produk/id3_G7X23MLQ/1.webp', 'images/produk/id3_G7X23MLQ/2.webp', 'images/produk/id3_G7X23MLQ/3.webp', 'images/produk/id3_G7X23MLQ/4.webp', 'images/produk/id3_G7X23MLQ/5.webp', 'images/produk/id3_G7X23MLQ/6.webp', 'images/produk/id3_G7X23MLQ/7.webp', 'images/produk/id3_G7X23MLQ/8.webp'], 
        description: {
            intro: 'MacBook Air is the world’s most popular laptop for a reason’s. It delivers up to 18 hours of battery life. The M4 chip unlocks a whole new level of performance for work and play. And it now comes in a stunning Sky Blue color.',
            specs: ['Chip: Apple M4 (10-core CPU, 10-core GPU)', 
                    'Layar: 15.3-inch Liquid Retina display with True Tone',
                    'Memori: 16GB RAM terpadu', 
                    'Penyimpanan: 256GB SSD',
                    'Camera: 12MP Center Stage camera',
                    'Charging: MagSafe 3 charging port',
                    'Port: Two Thunderbolt 4 ports, headphone jack',
                        'Color: Sky Blue' ]
        },
        pros: ['Semua Produk Baru Bergaransi iBox Official',
                'Processor Super Kencang Anti Panas',
                'Speaker dan Bass Mantap',
                'Redesign terbaru Macbook Air, lebih Modern dan Catchy',
                'Baterai tahan sangat lama',
                'Charging Menggunakan Magsafe'],
        cons: ['Keterbatasan Port/Colokan (disarankan beli dongle terpisah)'],
        inTheBox: ['Unit MacBook Air 15" M4',
                '35W Dual USB-C Port Compact Power Adapter',
                'Magsafe Charge Cable (2m)']
    },
    // Produk 4
    { 
        id: 4, kategori: 'Mac', name: 'Macbook Air 15" M4 (2024) - Midnight', specs: '16GB RAM, 256GB SSD', 
        price: 19899000, stock: 6, grade: 'Baru', sku: '9HFZ3Y2A',  sold: 263,
        images: ['images/produk/id4_9HFZ3Y2A/1.webp', 'images/produk/id4_9HFZ3Y2A/2.webp', 'images/produk/id4_9HFZ3Y2A/3.webp', 'images/produk/id4_9HFZ3Y2A/4.webp', 'images/produk/id4_9HFZ3Y2A/5.webp', 'images/produk/id4_9HFZ3Y2A/6.webp', 'images/produk/id4_9HFZ3Y2A/7.webp', 'images/produk/id4_9HFZ3Y2A/8.webp'], 
        description: {
            intro: 'MacBook Air is the world’s most popular laptop for a reason’s. It delivers up to 18 hours of battery life. The M4 chip unlocks a whole new level of performance for work and play. And it now comes in a stunning Sky Blue color.',
            specs: ['Chip: Apple M4 (10-core CPU, 10-core GPU)', 
                    'Layar: 15.3-inch Liquid Retina display with True Tone',
                    'Memori: 16GB RAM terpadu', 
                    'Penyimpanan: 256GB SSD',
                    'Camera: 12MP Center Stage camera',
                    'Charging: MagSafe 3 charging port',
                    'Port: Two Thunderbolt 4 ports, headphone jack',
                        'Color: Midnight' ]
        },
        pros: ['Semua Produk Baru Bergaransi iBox Official',
                'Processor Super Kencang Anti Panas',
                'Speaker dan Bass Mantap',
                'Redesign terbaru Macbook Air, lebih Modern dan Catchy',
                'Baterai tahan sangat lama',
                'Charging Menggunakan Magsafe'],
        cons: ['Keterbatasan Port/Colokan (disarankan beli dongle terpisah)'],
        inTheBox: ['Unit MacBook Air 15" M4',
                '35W Dual USB-C Port Compact Power Adapter',
                'Magsafe Charge Cable (2m)']
    },
    // Produk 5
    { 
        id: 5, kategori: 'Mac', name: 'Macbook Pro 14" M4 (2024) - Space Black', specs: '16GB RAM, 512GB SSD', 
        price: 23999000, stock: 2, grade: 'Baru', sku: 'W1B8PZ6K', sold: 112,
        images: ['images/produk/id5_W1B8PZ6K/1.webp', 'images/produk/id5_W1B8PZ6K/2.webp', 'images/produk/id5_W1B8PZ6K/3.webp', 'images/produk/id5_W1B8PZ6K/4.webp', 'images/produk/id5_W1B8PZ6K/5.webp', 'images/produk/id5_W1B8PZ6K/6.webp', 'images/produk/id5_W1B8PZ6K/7.webp', 'images/produk/id5_W1B8PZ6K/8.webp'], 
        description: {
            intro: 'MacBook Pro features the most advanced lineup of chips ever built for a pro laptop. Phenomenal single- and multithreaded CPU performance, faster unified memory, enhanced machine learning accelerators — the M4 family of chips gives you the kind of speed and capability you’ve never thought possible.',
            specs: ['Chip: Apple M4 (10-core CPU, 10-core GPU, 16-core Neural Engine)', 
                    'Layar: 14-inch Liquid Retina XDR display',
                    'Memori: 16GB RAM terpadu', 
                    'Penyimpanan: 512GB SSD',
                    'Camera: 12MP Center Stage camera',
                    'Charging: MagSafe 3 charging port',
                    'Port: Three Thunderbolt 4 ports, HDMI port, SDXC card slot, headphone jack',
                        'Color: Space Black' ]
        },
        pros: ['Semua Produk Baru Bergaransi iBox Official',
                'Processor Super Kencang Anti Panas',
                'Speaker dan Bass Terbaik di Laptop Manapun',
                'Redesign terbaru Macbook Pro, lebih Modern',
                'Baterai tahan sangat lama',
                'Charging Menggunakan Magsafe'],
        inTheBox: ['Unit MacBook Pro 14" M4',
                '70W USB-C Power Adapter',
                'Magsafe Charge Cable (2m)']
    },
    // Produk 6
    { 
        id: 6, kategori: 'Mac', name: 'Macbook Pro 14" M4 Pro (2024) - Space Black', specs: '24GB RAM, 512GB SSD', 
        price: 30799000, stock: 7, grade: 'Baru', sku: 'YZ93LMX4',  sold: 153,
        images: ['images/produk/id6_YZ93LMX4/1.webp', 'images/produk/id6_YZ93LMX4/2.webp', 'images/produk/id6_YZ93LMX4/3.webp', 'images/produk/id6_YZ93LMX4/4.webp', 'images/produk/id6_YZ93LMX4/5.webp', 'images/produk/id6_YZ93LMX4/6.webp', 'images/produk/id6_YZ93LMX4/7.webp', 'images/produk/id6_YZ93LMX4/8.webp'], 
        description: {
            intro: 'MacBook Pro features the most advanced lineup of chips ever built for a pro laptop. Phenomenal single- and multithreaded CPU performance, faster unified memory, enhanced machine learning accelerators — the M4 family of chips gives you the kind of speed and capability you’ve never thought possible.',
            specs: ['Chip: Apple M4 Pro (12‑core CPU, 16‑core GPU, 16‑core Neural Engine)', 
                    'Layar: 14-inch Liquid Retina XDR display',
                    'Memori: 24GB RAM terpadu', 
                    'Penyimpanan: 512GB SSD',
                    'Camera: 12MP Center Stage camera',
                    'Charging: MagSafe 3 charging port',
                    'Port: Three Thunderbolt 5 ports, HDMI port, SDXC card slot, headphone jack',
                        'Color: Space Black' ]
        },
        pros: ['Semua Produk Baru Bergaransi iBox Official',
                'Transfer Data Super Cepat dengan Port Thunderbolt 5 (120Gb/s)',
                'Processor Super Kencang Anti Panas',
                'Speaker dan Bass Terbaik di Laptop Manapun',
                'Redesign terbaru Macbook Pro, lebih Modern',
                'Baterai tahan sangat lama',
                'Charging Menggunakan Magsafe'],
        inTheBox: ['Unit MacBook Pro 14" M4 Pro',
                '70W USB-C Power Adapter',
                'Magsafe Charge Cable (2m)']
    },
    // Produk 7
    { 
        id: 7, kategori: 'Mac', name: 'Macbook Pro 14" M4 Max (2024) - Space Black', specs: '36GB RAM, 1TB SSD', 
        price: 48999000, stock: 6, grade: 'Baru', sku: 'KQ7AZ813',  sold: 112,
        images: ['images/produk/id7_KQ7AZ813/1.webp', 'images/produk/id7_KQ7AZ813/2.webp', 'images/produk/id7_KQ7AZ813/3.webp', 'images/produk/id7_KQ7AZ813/4.webp', 'images/produk/id7_KQ7AZ813/5.webp', 'images/produk/id7_KQ7AZ813/6.webp', 'images/produk/id7_KQ7AZ813/7.webp', 'images/produk/id7_KQ7AZ813/8.webp'], 
        description: {
            intro: 'MacBook Pro features the most advanced lineup of chips ever built for a pro laptop. Phenomenal single- and multithreaded CPU performance, faster unified memory, enhanced machine learning accelerators — the M4 family of chips gives you the kind of speed and capability you’ve never thought possible.',
            specs: ['Chip: Apple M4 Max (14‑core CPU, 32‑core GPU, 16‑core Neural Engine)', 
                    'Layar: 14-inch Liquid Retina XDR display',
                    'Memori: 36GB RAM terpadu', 
                    'Penyimpanan: 1TB SSD',
                    'Camera: 12MP Center Stage camera',
                    'Charging: MagSafe 3 charging port',
                    'Port: Three Thunderbolt 5 ports, HDMI port, SDXC card slot, headphone jack',
                        'Color: Space Black' ]
        },
        pros: ['Semua Produk Baru Bergaransi iBox Official',
                'Transfer Data Super Cepat dengan Port Thunderbolt 5 (120Gb/s)',
                'Processor Super Kencang Anti Panas',
                'Speaker dan Bass Terbaik di Laptop Manapun',
                'Redesign terbaru Macbook Pro, lebih Modern',
                'Baterai tahan sangat lama',
                'Charging Menggunakan Magsafe'],
        inTheBox: ['Unit MacBook Pro 14" M4 Max',
                '96W USB-C Power Adapter',
                'Magsafe Charge Cable (2m)']
    },
    // Produk 8
    { 
        id: 8, kategori: 'Mac', name: 'Macbook Pro 16" M4 Pro (2024) - Space Black', specs: '24GB RAM, 512GB SSD', 
        price: 39999000, stock: 7, grade: 'Baru', sku: '6NVB4XPQ',  sold: 201,
        images: ['images/produk/id8_6NVB4XPQ/1.webp', 'images/produk/id8_6NVB4XPQ/2.webp', 'images/produk/id8_6NVB4XPQ/3.webp', 'images/produk/id8_6NVB4XPQ/4.webp', 'images/produk/id8_6NVB4XPQ/5.webp', 'images/produk/id8_6NVB4XPQ/6.webp', 'images/produk/id8_6NVB4XPQ/7.webp', 'images/produk/id8_6NVB4XPQ/8.webp'], 
        description: {
            intro: 'MacBook Pro features the most advanced lineup of chips ever built for a pro laptop. Phenomenal single- and multithreaded CPU performance, faster unified memory, enhanced machine learning accelerators — the M4 family of chips gives you the kind of speed and capability you’ve never thought possible.',
            specs: ['Chip: Apple M4 Pro (14‑core CPU, 20‑core GPU, 16‑core Neural Engine)', 
                    'Layar: 16-inch Liquid Retina XDR display',
                    'Memori: 24GB RAM terpadu', 
                    'Penyimpanan: 512GB SSD',
                    'Camera: 12MP Center Stage camera',
                    'Charging: MagSafe 3 charging port',
                    'Port: Three Thunderbolt 5 ports, HDMI port, SDXC card slot, headphone jack',
                        'Color: Space Black' ]
        },
        pros: ['Semua Produk Baru Bergaransi iBox Official',
                'Transfer Data Super Cepat dengan Port Thunderbolt 5 (120Gb/s)',
                'Processor Super Kencang Anti Panas',
                'Speaker dan Bass Terbaik di Laptop Manapun',
                'Redesign terbaru Macbook Pro, lebih Modern',
                'Baterai tahan sangat lama',
                'Charging Menggunakan Magsafe'],
        inTheBox: ['Unit MacBook Pro 16" M4 Pro',
                '140W USB-C Power Adapter',
                'Magsafe Charge Cable (2m)']
    },
    // Produk 9
    { 
        id: 9, kategori: 'Mac', name: 'Macbook Pro 16" M4 Max (2024) - Space Black', specs: '36GB RAM, 1TB SSD', 
        price: 54999000, stock: 4, grade: 'Baru', sku: 'M29XQY8L',  sold: 142,
        images: ['images/produk/id9_M29XQY8L/1.webp', 'images/produk/id9_M29XQY8L/2.webp', 'images/produk/id9_M29XQY8L/3.webp', 'images/produk/id9_M29XQY8L/4.webp', 'images/produk/id9_M29XQY8L/5.webp', 'images/produk/id9_M29XQY8L/6.webp', 'images/produk/id9_M29XQY8L/7.webp', 'images/produk/id9_M29XQY8L/8.webp'], 
        description: {
            intro: 'MacBook Pro features the most advanced lineup of chips ever built for a pro laptop. Phenomenal single- and multithreaded CPU performance, faster unified memory, enhanced machine learning accelerators — the M4 family of chips gives you the kind of speed and capability you’ve never thought possible.',
            specs: ['Chip: Apple M4 Max (14‑core CPU, 32‑core GPU, 16‑core Neural Engine)', 
                    'Layar: 16-inch Liquid Retina XDR display',
                    'Memori: 36GB RAM terpadu', 
                    'Penyimpanan: 1TB SSD',
                    'Camera: 12MP Center Stage camera',
                    'Charging: MagSafe 3 charging port',
                    'Port: Three Thunderbolt 5 ports, HDMI port, SDXC card slot, headphone jack',
                        'Color: Space Black' ]
        },
        pros: ['Semua Produk Baru Bergaransi iBox Official',
                'Transfer Data Super Cepat dengan Port Thunderbolt 5 (120Gb/s)',
                'Processor Super Kencang Anti Panas',
                'Speaker dan Bass Terbaik di Laptop Manapun',
                'Redesign terbaru Macbook Pro, lebih Modern',
                'Baterai tahan sangat lama',
                'Charging Menggunakan Magsafe'],
        inTheBox: ['Unit MacBook Pro 16" M4 Max',
                '140W USB-C Power Adapter',
                'Magsafe Charge Cable (2m)']
    },
    // Produk 10
    { 
        id: 10, kategori: 'Mac', name: 'Macbook Air 13" M3 (2023) - Space Grey', specs: '16GB RAM, 256GB SSD', 
        price: 14299000, stock: 11, grade: 'Baru', sku: 'AXZL5NQ7',  sold: 117,
        images: ['images/produk/id10_AXZL5NQ7/1.webp', 'images/produk/id10_AXZL5NQ7/2.webp', 'images/produk/id10_AXZL5NQ7/3.webp', 'images/produk/id10_AXZL5NQ7/4.webp'], 
        description: {
            intro: 'MacBook Air is the world’s most popular laptop for a reason’s. It delivers up to 18 hours of battery life. The M3 chip unlocks a whole new level of performance for work and play.',
            specs: ['Chip: Apple M3 (8-core CPU, 8-core GPU)', 
                    'Layar: 13.6-inch Liquid Retina display with True Tone',
                    'Memori: 16GB RAM terpadu', 
                    'Penyimpanan: 256GB SSD',
                    'Camera: 12MP Center Stage camera',
                    'Charging: MagSafe 3 charging port',
                    'Port: Two Thunderbolt 4 ports, headphone jack',
                        'Color: Space Grey' ]
        },
        pros: ['Processor Super Kencang Anti Panas',
                'Speaker dan Bass Mantap',
                'Redesign terbaru Macbook Air, lebih Modern dan Catchy',
                'Baterai tahan sangat lama',
                'Charging Menggunakan Magsafe'],
        cons: ['Keterbatasan Port/Colokan (disarankan beli dongle terpisah)'],
        inTheBox: ['Unit MacBook Air 13" M3',
                '30W USB-C Power Adapter',
                'Magsafe Charge Cable (2m)']
    },
    // Produk 11
    { 
        id: 11, kategori: 'Mac', name: 'Macbook Pro 15" Intel Core i7 (2016) - Space Grey', specs: '16GB RAM, 512GB SSD', 
        price: 5600000, stock: 3, grade: 'A', sku: '7CCF0VDG',  sold: 72,
        images: ['images/produk/id11_7CCF0VDG/1.webp', 'images/produk/id11_7CCF0VDG/2.webp', 'images/produk/id11_7CCF0VDG/3.webp', 'images/produk/id11_7CCF0VDG/4.webp', 'images/produk/id11_7CCF0VDG/5.webp', 'images/produk/id11_7CCF0VDG/6.webp', 'images/produk/id11_7CCF0VDG/7.webp'], 
        description: {
            intro: 'MacBook Pro ini adalah pilihan tepat bagi Anda yang mencari laptop bertenaga dengan harga terjangkau. Dapur pacunya menggunakan prosesor Intel Core i7 yang terbukti andal untuk berbagai tugas berat. Kondisinya pun sangat istimewa dengan fisik 95% mulus dan kesehatan baterai terjaga di atas 90%.',
            specs: ['Chip: Intel Core i7 @2.7Ghz', 
                    'Memori: 16GB RAM terpadu', 
                    'Penyimpanan: 512GB SSD',
                    'Layar: 13.3-inch Retina display',
                    'CC: 203',
                    'BH: Normal',
                    'Color: Space Grey' ]
        },
        pros: ['Design lebih modern dibanding versi 2015',
                'Layar Jernih tanpa whitespot/deadpixel',
                'Kondisi fisik 95% mulus',
                'Speaker Normal dan Bass Mantap',
                'Dilengkapi Touchbar untuk kemudahan Navigasi'],
        cons: ['Keterbatasan Port/Colokan (disarankan beli dongle terpisah)'],
                
        inTheBox: ['Unit Macbook Pro i7',
                   'Charger Original',
                   'USB-C Charge Cable (2m)',
                   'Kotak Original (jika tersedia)']
    },
    // Produk 12
    { 
        id: 12, kategori: 'Mac', name: 'Macbook Air 13" M1 (2020) - RoseGold', specs: '8GB RAM, 256GB SSD', 
        price: 8100000, stock: 6, grade: 'A', sku: '7CLL02GD',  sold: 32,
        images: ['images/produk/id12_7CLL02GD/1.webp', 'images/produk/id12_7CLL02GD/2.webp', 'images/produk/id12_7CLL02GD/3.webp', 'images/produk/id12_7CLL02GD/4.webp', 'images/produk/id12_7CLL02GD/5.webp', 'images/produk/id12_7CLL02GD/6.webp', 'images/produk/id12_7CLL02GD/7.webp'], 
        description: {
            intro: 'Rasakan revolusi performa dengan MacBook Air M1 (2020). Chip M1 super cepat ini menawarkan kinerja luar biasa dan daya tahan baterai hingga 18 jam, semua dalam desain tipis yang senyap tanpa kipas. Unit ini dalam kondisi istimewa dengan fisik 95% mulus dan Battery Health 100% (CC rendah: 69), siap menjadi andalan Anda untuk produktivitas di mana saja.',
            specs: ['Chip: Apple M1 (8-core CPU, 7-core GPU)', 
                    'Layar: 13.3-inch Retina display',
                    'Memori: 8GB RAM terpadu', 
                    'Penyimpanan: 256GB SSD',
                    'CC: 69',
                    'BH: 100%',
                    'Color: RoseGold' ]
        },
        pros: ['Processor Apple, Kenceng dan Anti Panas',
                'Dilengkapi TouchID untuk kemudahan Login',
                'Speaker Terbaik di Laptop Tipis',
                'Design Modern Unibody dan Sangat Tipis',
                'Kamera jernih dan bagus',
                'Layar Jernih, Terang dan tanpa whitespot/deadpixel',
                'Kondisi fisik 95% mulus',
                'Build Quality sangat Kokoh',
                'Jack Audio dan Thunderbolt 3'],
        cons: ['Hanya ada USB Type-C (disarankan beli dongle)'],
        inTheBox: ['Unit MacBook Air M1',
                'Charger Original',
                'USB-C Charge Cable (2m)',
                'Kotak Original (jika tersedia)']
    },
    // Produk 13
    { 
        id: 13, kategori: 'Mac', name: 'Macbook Pro 13" M1 (2020) - Space Grey', specs: '8GB RAM, 256GB SSD', 
        price: 9000000, stock: 4, grade: 'A', sku: '7RCF3DWH',  sold: 58,
        images: ['images/produk/id13_7RCF3DWH/1.webp', 'images/produk/id13_7RCF3DWH/2.webp', 'images/produk/id13_7RCF3DWH/3.webp', 'images/produk/id13_7RCF3DWH/4.webp', 'images/produk/id13_7RCF3DWH/5.webp', 'images/produk/id13_7RCF3DWH/6.webp', 'images/produk/id13_7RCF3DWH/7.webp'], 
        description: {
            intro: 'Pilihan tepat untuk mendapatkan performa level Pro dalam kondisi istimewa. Berbeda dari MacBook Air, model Pro ini dilengkapi kipas pendingin untuk menjaga performa puncak tetap konsisten dan Touch Bar untuk alur kerja yang lebih efisien. Kondisi fisik produk 95% mulus dan yang terpenting, dibekali baterai baru (CC: 13), memberikan Anda performa dan daya tahan yang terasa seperti baru.',
            specs: ['Chip: Apple M1 (8-core CPU, 7-core GPU)', 
                    'Layar: 13.3-inch Retina display',
                    'Memori: 8GB RAM terpadu', 
                    'Penyimpanan: 256GB SSD',
                        'CC: 13',
                        'BH: 100%',
                        'Color: Space Grey' ]
        },
        pros: ['Prosesor Super Kencang Anti Panas',
                'Layar Jernih tanpa whitespot/deadpixel',
                'Kondisi fisik 95% mulus',
                'Speaker Normal dan Bass Mantap',
                'Dilengkapi Touchbar untuk kemudahan Navigasi',
                'Dilengkapi kipas untuk menjaga suhu laptop(tidak seperti macbook air yang fanless)',
                'Baterai tahan sangat lama (diatas 10 jam pemakaian ringan)'],
        cons: ['Keterbatasan Port/Colokan (disarankan beli dongle terpisah)'],
        inTheBox: ['Unit MacBook Pro M1',
                'Charger Original',
                'USB-C Charge Cable (2m)',
                'Kotak Original (jika tersedia)']
    },
    // Produk 14
    { 
        id: 14, kategori: 'Mac', name: 'MacBook Air 13" M1 (2020) - Space Grey', specs: '8GB RAM, 256GB SSD', 
        price: 8000000, stock: 5, grade: 'A', sku: '7CLL1HBK',  sold: 80,
        images: ['images/produk/id14_7CLL1HBK/1.webp', 'images/produk/id14_7CLL1HBK/2.webp', 'images/produk/id14_7CLL1HBK/3.webp', 'images/produk/id14_7CLL1HBK/4.webp', 'images/produk/id14_7CLL1HBK/5.webp', 'images/produk/id14_7CLL1HBK/6.webp'], 
        description: {
            intro: 'Pilihan cerdas untuk performa dan portabilitas. MacBook Air M1 ini memiliki kondisi fisik 95% mulus dan kesehatan baterai 94%. Dengan harga terjangkau, Anda mendapatkan perangkat andal untuk segala kebutuhan, dari bekerja hingga hiburan, tanpa kompromi pada kualitas.',
            specs: ['Chip: Apple M1 (8-core CPU, 7-core GPU)', 
                    'Layar: 13.3-inch Retina display',
                    'Memori: 8GB RAM terpadu', 
                    'Penyimpanan: 256GB SSD',
                        'CC: 178',
                        'BH: 94%',
                        'Color: Space Grey' ]
        },
        pros: ['Processor Kenceng dan Anti Panas',
                'Speaker Top Quality',
                'Design Modern Unibody dan Sangat Tipis',
                'Kamera jernih dan bagus',
                'Layar Jernih, Terang dan tanpa whitespot/deadpixel',
                'Kondisi fisik 95% mulus',
                'Build Quality sangat Kokoh',
                'Dilengkapi TouchID untuk kemudahan Login'],
        cons: ['Hanya ada USB Type-C (disarankan beli dongle)'],
        inTheBox: ['Unit MacBook Air M1',
                'Charger Original',
                'USB-C Charge Cable (2m)',
                'Kotak Original (jika tersedia)']
    },
    // Produk 15
    { 
        id: 15, kategori: 'Mac', name: '15MacBook Pro 13" Intel Core i7 (2018) - Space Grey', specs: '16GB RAM, 512GB SSD', 
        price: 5750000, stock: 3, grade: 'A', sku: 'OMOTA0GR',  sold: 41,
        images: ['images/produk/id15_OMOTA0GR/1.webp', 'images/produk/id15_OMOTA0GR/2.webp', 'images/produk/id15_OMOTA0GR/3.webp', 'images/produk/id15_OMOTA0GR/4.webp', 'images/produk/id15_OMOTA0GR/5.webp'], 
        description: {
            intro: 'Dapatkan MacBook Pro 15-inch spek tinggi dengan kondisi istimewa. Performa andal dari Intel i7, RAM 16GB, dan SSD 512GB. Fisik 95% mulus, lengkap dengan Touch Bar, dan baterai prima. Pilihan hemat untuk tenaga komputasi level profesional.',
            specs: ['Chip: Intel Core i7', 
                    'Layar: 15-inch Retina display',
                    'Memori: 16GB RAM terpadu', 
                    'Penyimpanan: 512GB SSD',
                        'CC: 131',
                        'BH: Normal',
                        'Color: Space Grey' ]
        },
        pros: ['Layar Jernih, Terang dan tanpa whitespot/deadpixel',
                'Kondisi fisik 95% mulus',
                'Speaker Normal dan Bass Mantap',
                'Dilengkapi TouchBar untuk kemudahan navigasi',
                'Dilengkapi TouchID untuk kemudahan login',
                'Baterai tahan lama',
                'Kamera jernih dan bagus'],
        cons: ['Keterbatasan Port/Colokan (disarankan beli dongle terpisah)'],
        inTheBox: ['Unit MacBook Pro',
                'Charger Original',
                'USB-C Charge Cable (2m)',
                'Kotak Original (jika tersedia)']
    },
    // Produk 16
    { 
        id: 16, kategori: 'Mac', name: 'Macbook Pro 13" Intel Core i5 (2019) - Space Grey', specs: '8GB RAM, 256GB SSD', 
        price: 6300000, stock: 6, grade: 'A', sku: '7CTH4QBL',  sold: 29,
        images: ['images/produk/id16_7CTH4QBL/1.webp', 'images/produk/id16_7CTH4QBL/2.webp', 'images/produk/id16_7CTH4QBL/3.webp', 'images/produk/id16_7CTH4QBL/4.webp', 'images/produk/id16_7CTH4QBL/5.webp', 'images/produk/id16_7CTH4QBL/6.webp', 'images/produk/id16_7CTH4QBL/7.webp'], 
        description: {
            intro: 'Dapatkan MacBook Pro 2019 dengan kondisi istimewa seperti baru. Fisik sangat terawat 95% mulus, dan baterai dalam kondisi sempurna di 100% (CC rendah: 98). Nilai terbaik untuk Anda yang mencari laptop Apple andal dengan performa Intel i5 untuk aktivitas harian.',
            specs: ['Chip: Intel Core i5 1.4Ghz', 
                    'Layar: 13.3-inch Retina display',
                    'Memori: 8GB RAM terpadu', 
                    'Penyimpanan: 256GB SSD',
                        'CC: 98',
                        'BH: 100%',
                        'Color: Space Grey' ]
        },
        pros: ['Dilengkapi TouchID untuk kemudahan login',
                'Layar Jernih, Terang dan tanpa whitespot/deadpixel',
                'Kondisi fisik 95% mulus',
                'Speaker Normal dan Bass Mantap',
                'Kamera jernih dan bagus',
                'Build Quality sangat Kokoh'],
        cons: ['Keterbatasan Port/Colokan (disarankan beli dongle terpisah)'],
        inTheBox: ['Unit MacBook Pro',
                'Charger Original',
                'USB-C Charge Cable (2m)',
                'Kotak Original (jika tersedia)']
    },
    // Produk 17
    { 
        id: 17, kategori: 'Mac', name: 'Macbook Pro 14" M1 Pro (2021) - Space Grey', specs: '16GB RAM, 512GB SSD', 
        price: 15300000, stock: 4, grade: 'A', sku: '7RHAEOWD',  sold: 65,
        images: ['images/produk/id17_7RHAEOWD/1.webp', 'images/produk/id17_7RHAEOWD/2.webp', 'images/produk/id17_7RHAEOWD/3.webp', 'images/produk/id17_7RHAEOWD/4.webp', 'images/produk/id17_7RHAEOWD/5.webp', 'images/produk/id17_7RHAEOWD/6.webp', 'images/produk/id17_7RHAEOWD/7.webp'], 
        description: {
            intro: 'Kesempatan langka: MacBook Pro 14" M1 Pro dalam kondisi sempurna. Fisik 100% mulus, baterai 100% (CC 11), seperti membuka unit baru. Nilai tak terkalahkan untuk performa profesional, layar XDR 120Hz, dan port lengkap dengan harga jauh lebih hemat.',
            specs: ['Chip: Apple M1 Pro (8-core CPU, 14-core GPU)', 
                    'Layar: 14-inch 120 Hz Mini-LED Retina XDR Display',
                    'Memori: 16GB RAM terpadu', 
                    'Penyimpanan: 512GB SSD',
                        'CC: 11',
                        'BH: 100%',
                        'Color: Space Grey' ]
        },
        pros: ['Procesor Super Kencang dan Hemat Daya',
                'Dilengkapi TouchID untuk kemudahan login',
                'Layar 120Hz Jernih, Terang dan tanpa whitespot/deadpixel',
                'Kondisi fisik 100% mulus',
                'Speaker Normal dan Bass Mantap',
                'Kamera jernih dan bagus',
                'Build Quality sangat Kokoh',
                'Sudah menggunakan Magsafe',
                'Sudah dilengkapi HDMI dan Slot SD Card'],
        
        inTheBox: ['Unit MacBook Pro 14"',
                '70w USB-C Power Adapter',
                'USB-C Charge Cable (2m)',
                'Kotak Original (jika tersedia)']
    },
    // Produk 18
    { 
        id: 18, kategori: 'Mac', name: 'MacBook Air 13" M1 (2020) - Space Grey', specs: '8GB RAM, 256GB SSD', 
        price: 7800000, stock: 2, grade: 'B', sku: 'OMHA9TBL',  sold: 47,
        images: ['images/produk/id18_OMHA9TBL/1.webp', 'images/produk/id18_OMHA9TBL/2.webp', 'images/produk/id18_OMHA9TBL/3.webp', 'images/produk/id18_OMHA9TBL/4.webp', 'images/produk/id18_OMHA9TBL/5.webp', 'images/produk/id18_OMHA9TBL/6.webp', 'images/produk/id18_OMHA9TBL/7.webp', ], 
        description: {
            intro: 'Pilihan hemat untuk performa M1 yang fenomenal. MacBook Air ini dalam kondisi baik (fisik 90% mulus) dan baterai sangat sehat di 95%. Nikmati kecepatan, desain tipis, dan ketahanan baterai hingga 16 jam. Nilai terbaik untuk menunjang semua aktivitas Anda.',
            specs: ['Chip: Apple M1 (8-core CPU, 7-core GPU)', 
                    'Layar: 13.3-inch Retina display',
                    'Memori: 8GB RAM terpadu', 
                    'Penyimpanan: 256GB SSD',
                        'CC: 152',
                        'BH: 95%',
                        'Color: Space Grey' ]
        },
        pros: ['Processor Super Cepat dan Hemat Daya',
                'Layar Jernih, Terang dan tanpa whitespot/deadpixel',
                'Speaker Normal dan Bass Mantap',
                'Dilengkapi TouchID untuk kemudahan login',
                'Kamera jernih dan bagus',
                'Build Quality sangat Kokoh',
                'Kondisi fisik 90% mulus',
                'Design Modern dan Super Tipis',
                'Baterai Bertahan Sangat Lama Hingga 16 Jam'],
        cons: ['Hanya ada USB Type-C (disarankan beli dongle)'],
        inTheBox: ['Unit MacBook Air M1',
                'USB-C Power Adapter',
                'USB-C Charge Cable (2m)',
                'Kotak Original (jika tersedia)']
    },
    // Produk 19
    { 
        id: 19, kategori: 'Mac', name: 'Macbook Pro 13" Intel Core i5 (2018) - Space Grey', specs: '8GB RAM, 256GB SSD', 
        price: 6400000, stock: 3, grade: 'A', sku: '7RLLD8WO',  sold: 37,
        images: ['images/produk/id19_7RLLD8WO/1.webp', 'images/produk/id19_7RLLD8WO/2.webp', 'images/produk/id19_7RLLD8WO/3.webp', 'images/produk/id19_7RLLD8WO/4.webp', 'images/produk/id19_7RLLD8WO/5.webp', 'images/produk/id19_7RLLD8WO/6.webp'], 
        description: {
            intro: 'Pilihan cerdas untuk merasakan pengalaman Pro. MacBook Pro 2018 ini dilengkapi Touch Bar dan ditenagai Intel i5. Kondisinya istimewa dengan fisik 95% mulus dan kesehatan baterai 93%. Performa dan fitur premium dalam satu paket bernilai tinggi.',
            specs: ['Chip: Intel Core i5 @2.3Ghz', 
                    'Layar: 13.3-inch Retina display',
                    'Memori: 8GB RAM terpadu', 
                    'Penyimpanan: 256GB SSD',
                        'CC: 158',
                        'BH: 93%',
                        'Color: Space Grey' ]
        },
        pros: ['Layar Jernih, Terang dan tanpa whitespot/deadpixel',
                'Jack Audio dan Thunderbolt 3',
                'Design Modern Unibody',
                'Kamera jernih dan bagus',
                'Speaker Top, Bass Mantap',
                'Kondisi fisik 95% mulus',
                'Build Quality sangat Kokoh',
                'Dilengkapi TouchBar dan TouchID'],
        cons: ['Hanya ada USB Type-C (disarankan beli dongle)'],
        inTheBox: ['Unit MacBook Pro 2018',
                'USB-C Power Adapter',
                'USB-C Charge Cable (2m)',
                'Kotak Original (jika tersedia)']
    },
    // Produk 20
    { 
        id: 20, kategori: 'Mac', name: 'MacBook Air 13" M1 (2020) - RoseGold', specs: '8GB RAM, 256GB SSD', 
        price: 8250000, stock: 5, grade: 'A', sku: '7CHKJ1TP',  sold: 76,
        images: ['images/produk/id20_7CHKJ1TP/1.webp', 'images/produk/id20_7CHKJ1TP/2.webp', 'images/produk/id20_7CHKJ1TP/3.webp', 'images/produk/id20_7CHKJ1TP/4.webp', 'images/produk/id20_7CHKJ1TP/5.webp', 'images/produk/id20_7CHKJ1TP/6.webp', 'images/produk/id20_7CHKJ1TP/7.webp', 'images/produk/id20_7CHKJ1TP/8.webp'], 
        description: {
            intro: 'Dapatkan MacBook Air M1 RoseGold dalam kondisi mendekati baru. Fisik terawat 95% mulus dengan kesehatan baterai istimewa 99% (CC sangat rendah: 69). Nilai terbaik untuk performa M1 yang cepat dan sunyi, ideal untuk menunjang gaya hidup dinamis Anda.',
            specs: ['Chip: Apple M1 (8-core CPU, 7-core GPU)', 
                    'Layar: 13.3-inch Retina display',
                    'Memori: 8GB RAM terpadu', 
                    'Penyimpanan: 256GB SSD',
                        'CC: 69',
                        'BH: 99%',
                        'Color: RoseGold' ]
        },
        pros: ['Layar Jernih, Terang dan tanpa whitespot/deadpixel',
                'Kondisi fisik 95% mulus',
                'Speaker Normal dan Bass Mantap',
                'Dilengkapi TouchID untuk kemudahan login',
                'Baterai tahan lama',
                'Kamera jernih dan bagus',
                'Bobot ringan dan kokoh'],
        cons: ['Keterbatasan Port/Colokan (disarankan beli dongle terpisah)'],
        inTheBox: ['Unit MacBook Air M1',
                '30W USB-C Power Adapter',
                'USB-C Charge Cable (2m)',
                'Kotak Original (jika tersedia)']
    },
    // Produk 21
    { 
        id: 21, kategori: 'Mac', name: 'Macbook Pro 15" Intel Core i7 (2018) - Space Grey', specs: '16GB RAM, 512GB SSD', 
        price: 6300000, stock: 2, grade: 'A', sku: 'OMHZR7YL',  sold: 59,
        images: ['images/produk/id21_OMHZR7YL/1.webp', 'images/produk/id21_OMHZR7YL/2.webp', 'images/produk/id21_OMHZR7YL/3.webp', 'images/produk/id21_OMHZR7YL/4.webp', 'images/produk/id21_OMHZR7YL/5.webp'], 
        description: {
            intro: 'Nilai tinggi untuk profesional. MacBook Pro 15-inch ini ditenagai Intel i7, RAM 16GB, dan SSD 512GB untuk tugas berat. Kondisi istimewa dengan fisik 95% mulus dan kesehatan baterai 97%. Dapatkan performa Pro sejati dengan harga yang sangat cerdas.',
            specs: ['Chip: Intel Core i7 @2.2Ghz', 
                    'Layar: 15-inch Retina display',
                    'Memori: 16GB RAM terpadu', 
                    'Penyimpanan: 512GB SSD',
                        'CC: 152',
                        'BH: 97%',
                        'Color: Space Grey' ]
        },
        pros: ['Dilengkapi Touch Bar untuk kemudahan Navigasi',
                'Layar Jernih, Terang dan tanpa whitespot/deadpixel',
                'Speaker Normal dan Bass Mantap',
                'Design Modern',
                'Dilengkapi TouchID untuk kemudahan login',
                'Kamera jernih dan bagus',
                '4x Thunderbolt 3',
                'Build Quality sangat Kokoh',
                'Kondisi fisik 95% mulus'],
        cons: ['Hanya ada USB Type-C (disarankan beli dongle)'],
        inTheBox: ['Unit MacBook Pro',
                'USB-C Power Adapter',
                'USB-C Charge Cable (2m)',
                'Kotak Original (jika tersedia)']
    },
    // Produk 22
    { 
        id: 22, kategori: 'Mac', name: 'Macbook Pro 15" Intel Core i7 (2018) - Space Grey', specs: '16GB RAM, 512GB SSD', 
        price: 6600000, stock: 4, grade: 'A', sku: '7RHADMTP',  sold: 28,
        images: ['images/produk/id22_7RHADMTP/1.webp', 'images/produk/id22_7RHADMTP/2.webp', 'images/produk/id22_7RHADMTP/3.webp', 'images/produk/id22_7RHADMTP/4.webp', 'images/produk/id22_7RHADMTP/5.webp', 'images/produk/id22_7RHADMTP/6.webp', 'images/produk/id22_7RHADMTP/7.webp'], 
        description: {
            intro: 'Performa tinggi, harga menarik. MacBook Pro 15-inch ini siap bekerja keras dengan Intel i7, RAM 16GB, dan SSD 512GB. Kondisinya istimewa, fisik 95% mulus dan baterai sangat sehat di 95%. Nilai sempurna untuk profesional yang butuh keandalan.',
            specs: ['Chip: Intel Core i7 @2.5Ghz', 
                    'Layar: 15-inch Retina display',
                    'Memori: 16GB RAM terpadu', 
                    'Penyimpanan: 512GB SSD',
                        'CC: 145',
                        'BH: 95%',
                        'Color: Space Grey' ]
        },
        pros: ['Dilengkapi TouchID untuk kemudahan login',
                'Layar Jernih, Terang dan tanpa whitespot/deadpixel',
                'Kondisi fisik 95% mulus',
                'Speaker Normal dan Bass Mantap',
                'Kamera jernih dan bagus',
                'Build Quality sangat Kokoh'],
        cons: ['Keterbatasan Port/Colokan (disarankan beli dongle terpisah)', 
                'Bobot Laptop Relatif Berat'],
        inTheBox: ['Unit MacBook Pro 2018',
                'USB-C Power Adapter',
                'USB-C Charge Cable (2m)',
                'Kotak Original (jika tersedia)']
    },
    // Produk 23
    { 
        id: 23, kategori: 'Mac', name: 'Macbook Pro 13" Intel Core i7 (2015) - Silver', specs: '8GB RAM, 512GB SSD', 
        price: 5200000, stock: 0, grade: 'B', sku: '7ROT12BK', sold: 84,
        images: ['images/produk/id23_7ROT12BK/1.webp', 'images/produk/id23_7ROT12BK/2.webp', 'images/produk/id23_7ROT12BK/3.webp', 'images/produk/id23_7ROT12BK/4.webp', 'images/produk/id23_7ROT12BK/5.webp', 'images/produk/id23_7ROT12BK/6.webp', 'images/produk/id23_7ROT12BK/7.webp', 'images/produk/id23_7ROT12BK/8.webp'], 
        description: {
            intro: 'MacBook Pro 2015, sebuah workhorse andal dengan spek upgrade Core i7 dan SSD 512GB. Baterai sangat sehat (CC 69) siap untuk kerja panjang. Ada dent kecil wajar pemakaian, namun performanya menawarkan nilai terbaik di kelasnya. Pilihan hemat dan bertenaga.',
            specs: ['Chip: Intel Core i7 @3.1Ghz', 
                    'Layar: 13.3-inch Retina display',
                    'Memori: 8GB RAM terpadu', 
                    'Penyimpanan: 512GB SSD',
                        'CC: 69',
                        'BH: Normal',
                        'Color: Silver' ]
        },
        pros: ['Layar jernih tanpa whitespot/deadpixel',
                'Kondisi fisik 90% mulus',
                'Speaker normal dan bass mantap'],
        cons: ['Dent-dent kecil dan Minor'],
        inTheBox: ['Unit MacBook Pro 2015',
                'USB-C Power Adapter',
                'USB-C Charge Cable (2m)',
                'Kotak Original (jika tersedia)']
    },
    // Produk 24
    { 
        id: 24, kategori: 'Mac', name: 'Macbook Pro 15" Intel Core i7 (2017) - Space Grey', specs: '16GB RAM, 512GB SSD', 
        price: 5100000, stock: 3, grade: 'A', sku: '7RCF3EBK',  sold: 34,
        images: ['images/produk/id24_7RCF3EBK/1.webp', 'images/produk/id24_7RCF3EBK/2.webp', 'images/produk/id24_7RCF3EBK/3.webp', 'images/produk/id24_7RCF3EBK/4.webp', 'images/produk/id24_7RCF3EBK/5.webp'], 
        description: {
            intro: 'Sebuah powerhouse sejati. MacBook Pro 15" ini punya spek monster: Core i7, RAM 16GB, SSD 512GB, dan Dual VGA (AMD). Kondisi fisik 90% mulus dengan baterai yang sangat awet untuk kerja berat. Nilai terbaik untuk performa grafis dan komputasi profesional.',
            specs: ['Chip: Intel Core i7 @3.1Ghz',
                    'Graphic Card: Dual VGA (intel HD & AMD)',
                    'Layar: 15-inch Retina display',
                    'Memori: 16GB RAM terpadu', 
                    'Penyimpanan: 512GB SSD',
                        'CC: 370',
                        'BH: Normal',
                        'Color: Space Grey']
        },
        pros: ['Dilengkapi Touchbar untuk kemudahan navigasi',
                'Layar Jernih tanpa whitespot/deadpixel',
                'Kondisi fisik 90% mulus',
                'Speaker Sangat Bagus',
                'Backlit Keyboard',
                'Baterai Sangat awet walau pemakaian berat'],
        cons: ['Bobot Laptop mencapai 2kg'],
        inTheBox: ['Unit MacBook Pro 2017',
                'USB-C Power Adapter',
                'USB-C Charge Cable (2m)',
                'Kotak Original (jika tersedia)']
    },
    // Produk 25
    { 
        id: 25, kategori: 'Mac', name: 'Macbook Air 13" Intel Core i5 (2019) - Space Grey', specs: '16GB RAM, 512GB SSD', 
        price: 5200000, stock: 3, grade: 'A', sku: '7RHX3GBK',  sold: 69,
        images: ['images/produk/id25_7RHX3GBK/1.webp', 'images/produk/id25_7RHX3GBK/2.webp', 'images/produk/id25_7RHX3GBK/3.webp', 'images/produk/id25_7RHX3GBK/4.webp', 'images/produk/id25_7RHX3GBK/5.webp', 'images/produk/id25_7RHX3GBK/6.webp'], 
        description: {
            intro: 'Nilai tak terkalahkan untuk MacBook Air 2019. Unit ini punya RAM 16GB dan SSD 512GB, jauh di atas standar. Kondisi fisik 95% mulus dan baterai 92% sangat prima. Pilihan sempurna untuk yang butuh kecepatan dan kapasitas ekstra.',
            specs: ['Chip: Intel Core i5 @1.4Ghz', 
                    'Layar: 13.3-inch Retina display',
                    'Memori: 16GB RAM terpadu', 
                    'Penyimpanan: 512GB SSD',
                        'CC: 288',
                        'BH: 92%',
                        'Color: Space Grey' ]
        },
        pros: ['Dilengkapi TouchID untuk kemudahan login',
                'Layar jernih, terang dan tanpa whitespot/deadpixel',
                'Kondisi fisik 95% mulus',
                'Speaker normal dan bass mantap',
                'Kamera jernih dan bagus',
                'Build quality sangat kokoh',
                'Desain modern dan super tipis',],
        cons: ['Performa Kurang bagi yang suka game AAA atau Render berat', 
                'Hanya ada USB Type-C (disarankan beli dongle)'],
        inTheBox: ['Unit MacBook Air 2019',
                'USB-C Power Adapter',
                'USB-C Charge Cable (2m)',
                'Kotak Original (jika tersedia)']
    },
    // Produk 26
    { 
        id: 26, kategori: 'Mac', name: 'Macbook Pro 15" Intel Core i7 (2018) - Space Grey', specs: '16GB RAM, 512GB SSD', 
        price: 6900000, stock: 4, grade: 'A', sku: 'OMHZR7BR',  sold: 53,
        images: ['images/produk/id26_OMHZR7BR/1.webp', 'images/produk/id26_OMHZR7BR/2.webp', 'images/produk/id26_OMHZR7BR/3.webp', 'images/produk/id26_OMHZR7BR/4.webp', 'images/produk/id26_OMHZR7BR/5.webp', 'images/produk/id26_OMHZR7BR/6.webp', 'images/produk/id26_OMHZR7BR/7.webp'], 
        description: {
            intro: 'Kekuatan Pro untuk profesional. MacBook Pro 15-inch ini dibekali spek tinggi (i7/16GB/512GB) untuk performa maksimal. Kondisi fisik 90% mulus dengan kesehatan baterai sangat prima di 92%. Nilai terbaik untuk menaklukkan semua pekerjaan berat Anda dengan andal.',
            specs: ['Chip: Intel Core i7 @2.6Ghz', 
                    'Layar: 15-inch Retina display',
                    'Memori: 16GB RAM terpadu', 
                    'Penyimpanan: 512GB SSD',
                        'CC: 232',
                        'BH: 92%',
                        'Color: Space Grey' ]
        },
        pros: ['4x Thunderbolt 3',
                'Layar jernih, terang dan tanpa whitespot/deadpixel',
                'Speaker normal dan bass mantap',
                'Dilengkapi TouchID untuk kemudahan login',
                'Dilengkapi Touch Bar untuk kemudahan navigasi',
                'Kamera jernih dan bagus',
                'Build quality sangat kokoh',
                'Kondisi fisik 90% mulus',
                'Desain modern'],
        cons: ['Hanya ada USB Type-C (disarankan beli dongle)'],
        inTheBox: ['Unit MacBook Pro 2018',
                'USB-C Power Adapter',
                'USB-C Charge Cable (2m)',
                'Kotak Original (jika tersedia)']
    },
    // Produk 27
    { 
        id: 27, kategori: 'Mac', name: 'Macbook Air 13" Intel Core i3 (2020) - Space Grey', specs: '8GB RAM, 256GB SSD', 
        price: 6300000, stock: 4, grade: 'A', sku: '7RCF3DBK',  sold: 62,
        images: ['images/produk/id27_7RCF3DBK/1.webp', 'images/produk/id27_7RCF3DBK/2.webp', 'images/produk/id27_7RCF3DBK/3.webp', 'images/produk/id27_7RCF3DBK/4.webp', 'images/produk/id27_7RCF3DBK/5.webp', 'images/produk/id27_7RCF3DBK/6.webp'], 
        description: {
            intro: 'Nilai terbaik untuk MacBook Air 2020. Dengan kondisi fisik 95% mulus dan baterai sehat 89%, laptop ini menawarkan performa kencang untuk harganya. Sangat ideal dan hemat untuk mahasiswa atau pekerjaan ringan sehari-hari. Desain tipis, ringan, dan modern.',
            specs: ['Chip: Intel Core i3 @1,1Ghz', 
                    'Layar: 13.3-inch Retina display',
                    'Memori: 8GB RAM terpadu', 
                    'Penyimpanan: 256GB SSD',
                        'CC: 220',
                        'BH: 89%',
                        'Color: Space Grey' ]
        },
        pros: ['Layar Jernih tanpa whitespot/deadpixel',
                'Performa sangat kencang untuk harganya',
                'Kondisi fisik 95% mulus',
                'Speaker Mantap',
                'Tipis, ringan, dan mudah dibawa'],
        cons: ['Bukan laptop terbaik untuk pekerjaan berat'],
        inTheBox: ['Unit MacBook Air 2020',
                'USB-C Power Adapter',
                'USB-C Charge Cable (2m)',
                'Kotak Original (jika tersedia)']
    },
    // Produk 28
    { 
        id: 28, kategori: 'Mac', name: 'Macbook Pro 15" Intel Core i7 (2019) - Space Grey', specs: '16GB RAM, 512GB SSD', 
        price: 7300000, stock: 5, grade: 'A', sku: '7CHKCYBK',  sold: 45,
        images: ['images/produk/id28_7CHKCYBK/1.webp', 'images/produk/id28_7CHKCYBK/2.webp', 'images/produk/id28_7CHKCYBK/3.webp', 'images/produk/id28_7CHKCYBK/4.webp', 'images/produk/id28_7CHKCYBK/5.webp', 'images/produk/id28_7CHKCYBK/6.webp'], 
        description: {
            intro: 'Powerhouse untuk para profesional. MacBook Pro 15-inch 2019 ini punya spek jawara: i7, 16GB RAM, 512GB SSD, dan grafis ganda AMD Radeon. Kondisi fisik 90% mulus dengan baterai 93% prima. Nilai sempurna untuk semua kebutuhan kreatif dan teknis Anda.',
            specs: ['Chip: Intel Core i7 @2.6Ghz', 
                    'Layar: 13.3-inch Retina display',
                    'Memori: 16GB RAM terpadu', 
                    'Penyimpanan: 512GB SSD',
                        'CC: 264',
                        'BH: 93%',
                        'Color: Space Grey' ]
        },
        pros: ['Dilengkapi TouchBar untuk kemudahan navigasi',
                'Dilengkapi TouchID untuk kemudahan login',
                'Layar jernih, terang dan tanpa whitespot/deadpixel',
                'Kondisi fisik 90% mulus',
                'Speaker normal dan bass mantap',
                'Kamera jernih dan bagus',
                'Build quality sangat kokoh',
                'Desain modern dan tipis',
                'Dual VGA, Intel UHD dan AMD Radeon'],
        cons: ['Bobot kurang cocok bagi yang portabilitas tinggi', 
                'Hanya ada USB Type-C (disarankan beli dongle)'],
        inTheBox: ['Unit MacBook Pro 2019',
                'USB-C Power Adapter',
                'USB-C Charge Cable (2m)',
                'Kotak Original (jika tersedia)']
    },
    // Produk 29
    { 
        id: 29, kategori: 'Mac', name: 'Macbook Pro 13" Intel Core i5 (2017) - Silver', specs: '8GB RAM, 256GB SSD', 
        price: 4800000, stock: 0, grade: 'A', sku: 'OMHA44BK',  sold: 77,
        images: ['images/produk/id29_OMHA44BK/1.webp', 'images/produk/id29_OMHA44BK/2.webp', 'images/produk/id29_OMHA44BK/3.webp', 'images/produk/id29_OMHA44BK/4.webp', 'images/produk/id29_OMHA44BK/5.webp', 'images/produk/id29_OMHA44BK/6.webp'], 
        description: {
            intro: 'Kesempatan langka: MacBook Pro 2017 dengan kondisi baterai seperti baru (BH 99%, CC 122). Fisik sangat terawat 95% mulus. Ditenagai Intel i5, ini adalah nilai terbaik untuk mendapatkan laptop Pro yang andal dan awet dengan harga sangat terjangkau.',
            specs: ['Chip: Intel Core i5 @2.3Ghz', 
                    'Layar: 13.3-inch Retina display',
                    'Memori: 8GB RAM terpadu', 
                    'Penyimpanan: 256GB SSD',
                        'CC: 122',
                        'BH: 99%',
                        'Color: Silver' ]
        },
        pros: ['Speaker top quality',
                'Desain modern unibody',
                'Kamera jernih dan bagus',
                'Layar jernih, terang dan tanpa whitespot/deadpixel',
                'Build quality sangat kokoh',
                'Kondisi fisik 95% mulus',
                '2x Thunderbolt 3'],
        cons: ['Hanya ada USB Type-C (disarankan beli dongle)', 
                'Belum ada TouchID, tidak bisa login pakai sidik jari'],
        inTheBox: ['Unit MacBook Pro 2017',
                'USB-C Power Adapter',
                'USB-C Charge Cable (2m)',
                'Kotak Original (jika tersedia)']
    },
    // Produk 30
    { 
        id: 30, kategori: 'Mac', name: 'Macbook Pro 13" Intel Core i7 (2016) - Space Grey', specs: '16GB RAM, 256GB SSD', 
        price: 5100000, stock: 2, grade: 'A', sku: 'OMLL6QWT',  sold: 39,
        images: ['images/produk/id30_OMLL6QWT/1.webp', 'images/produk/id30_OMLL6QWT/2.webp', 'images/produk/id30_OMLL6QWT/3.webp', 'images/produk/id30_OMLL6QWT/4.webp', 'images/produk/id30_OMLL6QWT/5.webp'], 
        description: {
            intro: 'Dapatkan performa Pro bertenaga dengan MacBook Pro 2016 (i7/16GB RAM). Kondisi istimewa, fisik 95% mulus dan baterai 95% prima. Pilihan cerdas untuk pekerjaan yang butuh kecepatan lebih tanpa menguras kantong. Kualitas dan keandalan terjamin.',
            specs: ['Chip: Intel Core i7 @2.2Ghz', 
                    'Layar: 13.3-inch Retina display',
                    'Memori: 16GB RAM terpadu', 
                    'Penyimpanan: 256GB SSD',
                        'CC: 184',
                        'BH: 95%',
                        'Color: Space Grey' ]
        },
        pros: ['Speaker sangat enak',
                'Desain modern unibody',
                'Kamera jernih dan bagus',
                'Layar jernih, terang dan tanpa whitespot/deadpixel',
                'Kondisi fisik 95% mulus',
                'Build quality sangat kokoh',
                'Jack audio dan Thunderbolt 3'],
        cons: ['Belum ada TouchBar dan TouchID', 
                'Hanya ada USB Type-C (disarankan beli dongle)'],
        inTheBox: ['Unit MacBook Pro 2016',
                '30W USB-C Power Adapter',
                'USB-C Charge Cable (2m)',
                'Kotak Original (jika tersedia)']
    },
    // Produk 31
    { 
        id: 31, kategori: 'Mac', name: 'Macbook Air 13" Intel Core i5 (2018) - RoseGold', specs: '8GB RAM, 256GB SSD', 
        price: 5750000, stock: 1, grade: 'A', sku: '7RHASNGR',  sold: 25,
        images: ['images/produk/id31_7RHASNGR/1.webp', 'images/produk/id31_7RHASNGR/2.webp', 'images/produk/id31_7RHASNGR/3.webp', 'images/produk/id31_7RHASNGR/4.webp', 'images/produk/id31_7RHASNGR/5.webp', 'images/produk/id31_7RHASNGR/6.webp', 'images/produk/id31_7RHASNGR/7.webp'], 
        description: {
            intro: 'Seperti baru! MacBook Air 2018 Rose Gold dengan kondisi baterai sempurna 100% (CC sangat rendah: 53). Fisik 95% mulus, ditenagai Intel i5. Ini adalah nilai terbaik untuk mendapatkan laptop Apple yang terasa baru dengan daya tahan baterai maksimal.',
            specs: ['Chip: Intel Core i5 @1.6Ghz', 
                    'Layar: 13.3-inch Retina display',
                    'Memori: 8GB RAM terpadu', 
                    'Penyimpanan: 256GB SSD',
                       'CC: 53',
                        'BH: 100%',
                        'Color: RoseGold'  ]
        },
        pros: ['Dilengkapi TouchID untuk kemudahan login',
                'Layar Jernih, Terang dan tanpa whitespot/deadpixel',
                'Kondisi fisik 95% mulus',
                'Speaker Normal dan Bass Mantap',
                'Kamera jernih dan bagus',
                'Bobot ringan dan kokoh'],
        cons: ['Keterbatasan Port/Colokan (disarankan beli dongle terpisah)'],
        inTheBox: ['Unit MacBook Air 2018',
                'USB-C Power Adapter',
                'USB-C Charge Cable (2m)',
                'Kotak Original (jika tersedia)']
    },
    // Produk 32
    { 
        id: 32, kategori: 'Mac', name: 'Macbook Air 13" Intel Core i5 (2017) - Silver', specs: '8GB RAM, 128GB SSD', 
        price: 2100000, stock: 0, grade: 'B', sku: '7RLLD8WH', sold: 22,
        images: ['images/produk/id32_7RLLD8WH/1.webp', 'images/produk/id32_7RLLD8WH/2.webp', 'images/produk/id32_7RLLD8WH/3.webp', 'images/produk/id32_7RLLD8WH/4.webp', 'images/produk/id32_7RLLD8WH/5.webp'], 
        description: {
            intro: 'Pilihan paling terjangkau untuk masuk ke ekosistem Apple. MacBook Air 2017 ini ideal untuk tugas ringan, Browse, dan mengetik. Kondisi fisik 90% mulus (Grade B) dengan baterai normal. Sebuah laptop andal yang menawarkan nilai luar biasa dengan harga sangat hemat.',
            specs: ['Chip: Intel Core i5 @1.8Ghz', 
                    'Layar: 13.3-inch Retina display',
                    'Memori: 8GB RAM terpadu', 
                    'Penyimpanan: 128GB SSD',
                        'CC: 312',
                        'BH: Normal',
                        'Color: Silver/White' ]
        },
        pros: ['Layar Jernih dan Terang',
                'Design Unibody',
                'Kamera bagus',
                'Charge menggunakan MagSafe',
                'Speaker Cukup Bagus',
                'Kondisi fisik 90% mulus',
                'Build Quality sangat Kokoh',
                'Cocok Untuk Pekerjaan dan Aktivitas Ringan'],
        cons: ['Belum Thunderbolt 3', 
                'Desain bezel layar yang agak tebal',
                'Belum Redesign ala-ala Macbook Terbaru'],
        inTheBox: ['Unit MacBook Air 2017',
                'Power Adapter',
                'Magsafe Charge Cable (2m)',
                'Kotak Original (jika tersedia)']
    },
    // Produk 33
    { 
        id: 33, kategori: 'Mac', name: 'Macbook Air 13" M2 (2022) - Silver', specs: '8GB RAM, 256GB SSD', 
        price: 11200000, stock: 4, grade: 'A', sku: 'L9CF01BK',  sold: 51,
        images: ['images/produk/id33_L9CF01BK/1.webp', 'images/produk/id33_L9CF01BK/2.webp', 'images/produk/id33_L9CF01BK/3.webp', 'images/produk/id33_L9CF01BK/4.webp', 'images/produk/id33_L9CF01BK/5.webp', 'images/produk/id33_L9CF01BK/6.webp', 'images/produk/id33_L9CF01BK/7.webp', 'images/produk/id33_L9CF01BK/8.webp'], 
        description: {
            intro: 'Pilihan cerdas untuk MacBook Air M2. Unit ini dalam kondisi istimewa, fisik 95% mulus dengan baterai 100% (CC sangat rendah: 52). Nikmati desain modern, kecepatan M2, dan kenyamanan MagSafe. Sebuah paket komplit bernilai tinggi untuk Anda.',
            specs: ['Chip: Apple M2 (8-core CPU, 8-core GPU)', 
                    'Layar: 13.6-inch Retina display',
                    'Memori: 8GB RAM terpadu', 
                    'Penyimpanan: 256GB SSD',
                        'CC: 52',
                        'BH: 100%',
                        'Color: Silver' ]
        },
        pros: ['Processor Super Kencang Anti Panas',
                'Layar Jernih, Terang dan tanpa whitespot/deadpixel',
                'Kondisi fisik 95% mulus',
                'Speaker Normal dan Bass Mantap',
                'Redesign terbaru Macbook Air, lebih Modern dan Catchy',
                'Baterai tahan sangat lama (diatas 10 jam pemakaian ringan)',
                'Charging Menggunakan Magsafe'],
        cons: ['Keterbatasan Port/Colokan (disarankan beli dongle terpisah)'],
        inTheBox: ['Unit MacBook Air M2',
                'Magsafe Power Adapter',
                'Magsafe Charge Cable (2m)',
                'Kotak Original (jika tersedia)']
    },
    // Produk 34
    { 
        id: 34, kategori: 'Mac', name: 'Macbook Air 13" Intel Core i3 (2020) - Space Grey', specs: '8GB RAM, 256GB SSD', 
        price: 6800000, stock: 2, grade: 'A', sku: '7RCF3ESV',  sold: 66,
        images: ['images/produk/id34_7RCF3ESV/1.webp', 'images/produk/id34_7RCF3ESV/2.webp', 'images/produk/id34_7RCF3ESV/3.webp', 'images/produk/id34_7RCF3ESV/4.webp', 'images/produk/id34_7RCF3ESV/5.webp', 'images/produk/id34_7RCF3ESV/6.webp', 'images/produk/id34_7RCF3ESV/7.webp'], 
        description: {
            intro: 'MacBook Air 2020 modern yang super portabel. Kondisi sangat baik, fisik 95% mulus dengan baterai sehat 86%. Ditenagai Intel i3, laptop ini andal untuk semua tugas harian Anda. Nilai terbaik untuk mendapatkan laptop Apple modern dengan harga terjangkau.',
            specs: ['Chip: Intel Core i3 @1.1Ghz', 
                    'Layar: 13.3-inch Retina display',
                    'Memori: 8GB RAM terpadu', 
                    'Penyimpanan: 256GB SSD',
                        'CC: 152',
                        'BH: 86%',
                        'Color: Space Grey' ]
        },
        pros: ['Layar Jernih tanpa whitespot/deadpixel',
                'Kondisi fisik 95% mulus',
                'Speaker Jernih',
                'Layar Retina dengan warna akurat',
                'Tipis, ringan, dan mudah dibawa'],
        cons: ['Keterbatasan Port/Colokan (disarankan beli dongle terpisah)'],
        inTheBox: ['Unit MacBook Air 2020',
                'USB-C Power Adapter',
                'USB-C Charge Cable (2m)',
                'Kotak Original (jika tersedia)']
    },

    // =========IPHONE=========IPHONE=======IPHONE=======IPHONE========IPHONE
    // =========IPHONE=========IPHONE=======IPHONE=======IPHONE========IPHONE
    // =========IPHONE=========IPHONE=======IPHONE=======IPHONE========IPHONE
    // =========IPHONE=========IPHONE=======IPHONE=======IPHONE========IPHONE
    // =========IPHONE=========IPHONE=======IPHONE=======IPHONE========IPHONE
    
    // Tambahkan atau ganti produk iPhone Anda dengan struktur baru ini di dalam produk.js

// ... (data produk MacBook Anda tetap di atas sini)
        //produk 35
        {
        id: 35,
        name: 'iPhone 16 Pro Max',
        kategori: 'iPhone',
        basePrice: 22999000,
        images: {
                'Desert Titanium': ['images/produk/id35_ip16pm/ip16pm-dt-1.webp', 'images/produk/id35_ip16pm/ip16pm-dt-2.webp', 'images/produk/id35_ip16pm/ip16pm-dt-3.webp', 'images/produk/id35_ip16pm/ip16pm-dt-4.webp'],
                'Natural Titanium': ['images/produk/id35_ip16pm/ip16pm-nt-1.webp', 'images/produk/id35_ip16pm/ip16pm-nt-2.webp', 'images/produk/id35_ip16pm/ip16pm-nt-3.webp', 'images/produk/id35_ip16pm/ip16pm-nt-4.webp'],
                'White Titanium': ['images/produk/id35_ip16pm/ip16pm-wt-1.webp', 'images/produk/id35_ip16pm/ip16pm-wt-2.webp', 'images/produk/id35_ip16pm/ip16pm-wt-3.webp', 'images/produk/id35_ip16pm/ip16pm-wt-4.webp'],
                'Black Titanium': ['images/produk/id35_ip16pm/ip16pm-bt-1.webp', 'images/produk/id35_ip16pm/ip16pm-bt-2.webp', 'images/produk/id35_ip16pm/ip16pm-bt-3.webp', 'images/produk/id35_ip16pm/ip16pm-bt-4.webp'],
        },
        variants: [
                { sku: 'IP16PM-DT-256', color: 'Desert Titanium', colorHex: '#C3AA97', storage: '256GB', priceModifier: 0, stock: 20, sold: 200 },
                { sku: 'IP16PM-DT-512', color: 'Desert Titanium', colorHex: '#C3AA97', storage: '512GB', priceModifier: 4000000, stock: 10, sold: 95 },
                { sku: 'IP16PM-NT-256', color: 'Natural Titanium', colorHex: '#8A8A85', storage: '256GB', priceModifier: 0, stock: 20, sold: 200 },
                { sku: 'IP16PM-NT-512', color: 'Natural Titanium', colorHex: '#8A8A85', storage: '512GB', priceModifier: 4000000, stock: 10, sold: 95 },
                { sku: 'IP16PM-WT-256', color: 'White Titanium', colorHex: '#F3F1EE', storage: '256GB', priceModifier: 0, stock: 18, sold: 130 },
                { sku: 'IP16PM-WT-512', color: 'White Titanium', colorHex: '#F3F1EE', storage: '512GB', priceModifier: 4000000, stock: 18, sold: 130 },
                { sku: 'IP16PM-BT-256', color: 'Black Titanium', colorHex: '#474747', storage: '256GB', priceModifier: 0, stock: 18, sold: 130 },
                { sku: 'IP16PM-BT-512', color: 'Black Titanium', colorHex: '#474747', storage: '512GB', priceModifier: 4000000, stock: 18, sold: 130 },
        ],
        description: { intro: 'iPhone 16 Pro Max. Ditempa dalam titanium dan menampilkan Chip A18 Pro terobosan, tombol Tindakan yang dapat disesuaikan, dan sistem kamera Pro paling kuat yang pernah ada di iPhone dengan zoom optik 5x.', specs: ['Layar: 6.9-inch Super Retina XDR', 'Chip: A18 Pro', 'Kamera: Sistem kamera pro 48MP dengan 5x Telephoto'], condition: 'Produk Baru, Garansi Resmi.' },
        pros: ['Layar lebih besar dan imersif', 'Kamera dengan kemampuan zoom optik 5x', 'Daya tahan baterai terbaik', 'Performa A18 Pro'],
        cons: ['Ukuran besar mungkin tidak nyaman untuk semua orang', 'Harga sangat premium'],
        inTheBox: ['Unit iPhone 16 Pro Max', 'Kabel Pengisi Daya USB-C (1 m)']
        },
        // produk 36
        {
        id: 36,
        name: 'iPhone 16 Pro',
        kategori: 'iPhone',
        basePrice: 18999000, // Harga untuk varian paling dasar
        images: {
                // Sediakan gambar untuk setiap warna
                'Desert Titanium': ['images/produk/id36_ip16pro/ip16pro-dt-1.webp', 'images/produk/id36_ip16pro/ip16pro-dt-2.webp', 'images/produk/id36_ip16pro/ip16pro-dt-3.webp', 'images/produk/id36_ip16pro/ip16pro-dt-4.webp'],
                'Natural Titanium': ['images/produk/id36_ip16pro/ip16pro-nt-1.webp', 'images/produk/id36_ip16pro/ip16pro-nt-2.webp', 'images/produk/id36_ip16pro/ip16pro-nt-3.webp', 'images/produk/id36_ip16pro/ip16pro-nt-4.webp'],
                'White Titanium': ['images/produk/id36_ip16pro/ip16pro-wt-1.webp', 'images/produk/id36_ip16pro/ip16pro-wt-2.webp', 'images/produk/id36_ip16pro/ip16pro-wt-3.webp', 'images/produk/id36_ip16pro/ip16pro-wt-4.webp'],
                'Black Titanium': ['images/produk/id36_ip16pro/ip16pro-bt-1.webp', 'images/produk/id36_ip16pro/ip16pro-bt-2.webp', 'images/produk/id36_ip16pro/ip16pro-bt-3.webp', 'images/produk/id36_ip16pro/ip16pro-bt-4.webp'],
        },
        // Daftar semua kemungkinan varian
        variants: [
                { sku: 'IP16PRO-DT-128', color: 'Desert Titanium', colorHex: '#C3AA97', storage: '128GB', priceModifier: 0, stock: 20, sold: 200 },
                { sku: 'IP16PRO-DT-256', color: 'Desert Titanium', colorHex: '#C3AA97', storage: '256GB', priceModifier: 2000000, stock: 20, sold: 200 },
                { sku: 'IP16PRO-DT-512', color: 'Desert Titanium', colorHex: '#C3AA97', storage: '512GB', priceModifier: 4000000, stock: 10, sold: 95 },
                { sku: 'IP16PRO-NT-128', color: 'Natural Titanium', colorHex: '#8A8A85', storage: '128GB', priceModifier: 0, stock: 20, sold: 200 },
                { sku: 'IP16PRO-NT-256', color: 'Natural Titanium', colorHex: '#8A8A85', storage: '256GB', priceModifier: 2000000, stock: 20, sold: 200 },
                { sku: 'IP16PRO-NT-512', color: 'Natural Titanium', colorHex: '#8A8A85', storage: '512GB', priceModifier: 4000000, stock: 10, sold: 95 },
                { sku: 'IP16PRO-WT-128', color: 'White Titanium', colorHex: '#F3F1EE', storage: '128GB', priceModifier: 0, stock: 18, sold: 130 },
                { sku: 'IP16PRO-WT-256', color: 'White Titanium', colorHex: '#F3F1EE', storage: '256GB', priceModifier: 2000000, stock: 18, sold: 130 },
                { sku: 'IP16PRO-WT-512', color: 'White Titanium', colorHex: '#F3F1EE', storage: '512GB', priceModifier: 4000000, stock: 18, sold: 130 },
                { sku: 'IP16PRO-BT-128', color: 'Black Titanium', colorHex: '#474747', storage: '128GB', priceModifier: 0, stock: 18, sold: 130 },
                { sku: 'IP16PRO-BT-256', color: 'Black Titanium', colorHex: '#474747', storage: '256GB', priceModifier: 2000000, stock: 18, sold: 130 },
                { sku: 'IP16PRO-BT-512', color: 'Black Titanium', colorHex: '#474747', storage: '512GB', priceModifier: 4000000, stock: 18, sold: 130 },
        ],
        // Deskripsi umum untuk produk ini
        description: { intro: 'iPhone 16 Pro. Ditempa dalam titanium dan menampilkan Chip A18 Pro terobosan, tombol Tindakan yang dapat disesuaikan, dan sistem kamera Pro yang lebih kuat.', specs: ['Layar: 6.3-inch Super Retina XDR', 'Chip: A18 Pro', 'Kamera: Sistem kamera pro 48MP'], condition: 'Produk Baru, Garansi Resmi.' },
        pros: ['Bodi titanium premium yang ringan dan kuat', 'Performa A18 Pro untuk gaming dan tugas berat', 'Kualitas kamera terdepan', 'Port USB-C dengan kecepatan transfer tinggi'],
        cons: ['Harga premium', 'Daya tahan baterai standar'],
        inTheBox: ['Unit iPhone 16 Pro', 'Kabel Pengisi Daya USB-C (1 m)']
        },
        //produk 37
        {
        id: 37,
        name: 'iPhone 16',
        kategori: 'iPhone',
        basePrice: 15999000,
        images: {
                'Ultramarine': ['images/produk/id37_ip16/ip16-um-1.webp', 'images/produk/id37_ip16/ip16-um-2.webp', 'images/produk/id37_ip16/ip16-um-3.webp', 'images/produk/id37_ip16/ip16-um-4.webp'],
                'Teal': ['images/produk/id37_ip16/ip16-te-1.webp', 'images/produk/id37_ip16/ip16-te-2.webp', 'images/produk/id37_ip16/ip16-te-3.webp', 'images/produk/id37_ip16/ip16-te-4.webp'],
                'Pink': ['images/produk/id37_ip16/ip16-pi-1.webp', 'images/produk/id37_ip16/ip16-pi-2.webp', 'images/produk/id37_ip16/ip16-pi-3.webp', 'images/produk/id37_ip16/ip16-pi-4.webp'],
                'White': ['images/produk/id37_ip16/ip16-wh-1.webp', 'images/produk/id37_ip16/ip16-wh-2.webp', 'images/produk/id37_ip16/ip16-wh-3.webp', 'images/produk/id37_ip16/ip16-wh-4.webp'],
                'Black': ['images/produk/id37_ip16/ip16-bl-1.webp', 'images/produk/id37_ip16/ip16-bl-2.webp', 'images/produk/id37_ip16/ip16-bl-3.webp', 'images/produk/id37_ip16/ip16-bl-4.webp'],
        },
        variants: [
                { sku: 'IP16-UM-128', color: 'Ultramarine', colorHex: '#A3B6F7', storage: '128GB', priceModifier: 0, stock: 20, sold: 200 },
                { sku: 'IP16-UM-256', color: 'Ultramarine', colorHex: '#A3B6F7', storage: '256GB', priceModifier: 2000000, stock: 20, sold: 200 },
                { sku: 'IP16-UM-512', color: 'Ultramarine', colorHex: '#A3B6F7', storage: '512GB', priceModifier: 4000000, stock: 10, sold: 95 },
                { sku: 'IP16-TE-128', color: 'Teal', colorHex: '#B5D7D5', storage: '128GB', priceModifier: 0, stock: 20, sold: 200 },
                { sku: 'IP16-TE-256', color: 'Teal', colorHex: '#B5D7D5', storage: '256GB', priceModifier: 2000000, stock: 20, sold: 200 },
                { sku: 'IP16-TE-512', color: 'Teal', colorHex: '#B5D7D5', storage: '512GB', priceModifier: 4000000, stock: 10, sold: 95 },
                { sku: 'IP16-PI-128', color: 'Pink', colorHex: '#F4B2DC', storage: '128GB', priceModifier: 0, stock: 20, sold: 200 },
                { sku: 'IP16-PI-256', color: 'Pink', colorHex: '#F4B2DC', storage: '256GB', priceModifier: 2000000, stock: 20, sold: 200 },
                { sku: 'IP16-PI-512', color: 'Pink', colorHex: '#F4B2DC', storage: '512GB', priceModifier: 4000000, stock: 10, sold: 95 },
                { sku: 'IP16-WH-128', color: 'White', colorHex: '#FAFAFA', storage: '128GB', priceModifier: 0, stock: 20, sold: 200 },
                { sku: 'IP16-WH-256', color: 'White', colorHex: '#FAFAFA', storage: '256GB', priceModifier: 2000000, stock: 20, sold: 200 },
                { sku: 'IP16-WH-512', color: 'White', colorHex: '#FAFAFA', storage: '512GB', priceModifier: 4000000, stock: 10, sold: 95 },
                { sku: 'IP16-BL-128', color: 'Black', colorHex: '#44474A', storage: '128GB', priceModifier: 0, stock: 20, sold: 200 },
                { sku: 'IP16-BL-256', color: 'Black', colorHex: '#44474A', storage: '256GB', priceModifier: 2000000, stock: 20, sold: 200 },
                { sku: 'IP16-BL-512', color: 'Black', colorHex: '#44474A', storage: '512GB', priceModifier: 4000000, stock: 10, sold: 95 },
        ],
        description: { intro: 'iPhone 16. Ditempa dalam titanium dan menampilkan Chip A18 terobosan, tombol Tindakan yang dapat disesuaikan, dan sistem kamera Pro paling kuat yang pernah ada di iPhone dengan zoom optik 5x.', specs: ['Layar: 6.1-inch Super Retina XDR', 'Chip: A18', 'Kamera: Sistem kamera pro 48MP'], condition: 'Produk Baru, Garansi Resmi.' },
        pros: ['Layar lebih besar dan imersif', 'Kamera dengan kemampuan zoom optik 5x', 'Daya tahan baterai terbaik', 'Performa A18'],
        cons: ['Ukuran besar mungkin tidak nyaman untuk semua orang', 'Harga sangat premium'],
        inTheBox: ['Unit iPhone 16', 'Kabel Pengisi Daya USB-C (1 m)']
        },
        //produk 38
        {
        id: 38,
        name: 'iPhone 15',
        kategori: 'iPhone',
        basePrice: 12999000,
        images: {
                'Blue': ['images/produk/id38_ip15/ip15-bu-1.webp', 'images/produk/id38_ip15/ip15-bu-2.webp', 'images/produk/id38_ip15/ip15-bu-3.webp'],
                'Pink': ['images/produk/id38_ip15/ip15-pi-1.webp', 'images/produk/id38_ip15/ip15-pi-2.webp', 'images/produk/id38_ip15/ip15-pi-3.webp'],
                'Yellow': ['images/produk/id38_ip15/ip15-ye-1.webp', 'images/produk/id38_ip15/ip15-ye-2.webp', 'images/produk/id38_ip15/ip15-ye-3.webp'],
                'Green': ['images/produk/id38_ip15/ip15-gr-1.webp', 'images/produk/id38_ip15/ip15-gr-2.webp', 'images/produk/id38_ip15/ip15-gr-3.webp'],
                'Black': ['images/produk/id38_ip15/ip15-bl-1.webp', 'images/produk/id38_ip15/ip15-bl-2.webp', 'images/produk/id38_ip15/ip15-bl-3.webp'],
        },
        variants: [
                { sku: 'IP15-BU-128', color: 'Blue', colorHex: '#D6DDE0', storage: '128GB', priceModifier: 0, stock: 20, sold: 200 },
                { sku: 'IP15-BU-256', color: 'Blue', colorHex: '#D6DDE0', storage: '256GB', priceModifier: 2000000, stock: 20, sold: 200 },
                { sku: 'IP15-BU-512', color: 'Blue', colorHex: '#D6DDE0', storage: '512GB', priceModifier: 4000000, stock: 10, sold: 95 },
                { sku: 'IP15-PI-128', color: 'Pink', colorHex: '#ECD1D2', storage: '128GB', priceModifier: 0, stock: 20, sold: 200 },
                { sku: 'IP15-PI-256', color: 'Pink', colorHex: '#ECD1D2', storage: '256GB', priceModifier: 2000000, stock: 20, sold: 200 },
                { sku: 'IP15-PI-512', color: 'Pink', colorHex: '#ECD1D2', storage: '512GB', priceModifier: 4000000, stock: 10, sold: 95 },
                { sku: 'IP15-YE-128', color: 'Yellow', colorHex: '#EEE8CD', storage: '128GB', priceModifier: 0, stock: 20, sold: 200 },
                { sku: 'IP15-YE-256', color: 'Yellow', colorHex: '#EEE8CD', storage: '256GB', priceModifier: 2000000, stock: 20, sold: 200 },
                { sku: 'IP15-YE-512', color: 'Yellow', colorHex: '#EEE8CD', storage: '512GB', priceModifier: 4000000, stock: 10, sold: 95 },
                { sku: 'IP15-GR-128', color: 'Green', colorHex: '#D3DBCC', storage: '128GB', priceModifier: 0, stock: 20, sold: 200 },
                { sku: 'IP15-GR-256', color: 'Green', colorHex: '#D3DBCC', storage: '256GB', priceModifier: 2000000, stock: 20, sold: 200 },
                { sku: 'IP15-GR-512', color: 'Green', colorHex: '#D3DBCC', storage: '512GB', priceModifier: 4000000, stock: 10, sold: 95 },
                { sku: 'IP15-BL-128', color: 'Black', colorHex: '#4F5255', storage: '128GB', priceModifier: 0, stock: 20, sold: 200 },
                { sku: 'IP15-BL-256', color: 'Black', colorHex: '#4F5255', storage: '256GB', priceModifier: 2000000, stock: 20, sold: 200 },
                { sku: 'IP15-BL-512', color: 'Black', colorHex: '#4F5255', storage: '512GB', priceModifier: 4000000, stock: 10, sold: 95 },
        ],
        description: { intro: 'iPhone 15. Ditempa dalam titanium dan menampilkan Chip A17 terobosan, tombol Tindakan yang dapat disesuaikan, dan sistem kamera Pro paling kuat yang pernah ada di iPhone dengan zoom optik 5x.', specs: ['Layar: 6.1-inch Super Retina XDR', 'Chip: A17', 'Kamera: Sistem kamera pro 48MP'], condition: 'Produk Baru, Garansi Resmi.' },
        pros: ['Layar lebih besar dan imersif', 'Kamera dengan kemampuan zoom optik 5x', 'Daya tahan baterai terbaik', 'Performa A18'],
        cons: ['Ukuran besar mungkin tidak nyaman untuk semua orang', 'Harga sangat premium'],
        inTheBox: ['Unit iPhone 15', 'Kabel Pengisi Daya USB-C (1 m)']
        },
        //produk 39
        {
        id: 39,
        name: 'iPhone 14',
        kategori: 'iPhone',
        basePrice: 8999000,
        images: {
                'Red': ['images/produk/id39_ip14/ip14-re-1.webp'],
                'Blue': ['images/produk/id39_ip14/ip14-bu-1.webp'],
                'Purple': ['images/produk/id39_ip14/ip14-pu-1.webp'],
                'Yellow': ['images/produk/id39_ip14/ip14-ye-1.webp'],
                'Midnight': ['images/produk/id39_ip14/ip14-md-1.webp'],
                'Starlight': ['images/produk/id39_ip14/ip14-sr-1.webp'],
        },
        variants: [
                { sku: 'IP14-RE-128', color: 'Red', colorHex: '#FC0325', storage: '128GB', priceModifier: 0, stock: 20, sold: 200 },
                { sku: 'IP14-RE-256', color: 'Red', colorHex: '#FC0325', storage: '256GB', priceModifier: 2000000, stock: 20, sold: 200 },
                { sku: 'IP14-RE-512', color: 'Red', colorHex: '#FC0325', storage: '512GB', priceModifier: 4000000, stock: 10, sold: 95 },
                { sku: 'IP14-BU-128', color: 'Blue', colorHex: '#A0B4C7', storage: '128GB', priceModifier: 0, stock: 20, sold: 200 },
                { sku: 'IP14-BU-256', color: 'Blue', colorHex: '#A0B4C7', storage: '256GB', priceModifier: 2000000, stock: 20, sold: 200 },
                { sku: 'IP14-BU-512', color: 'Blue', colorHex: '#A0B4C7', storage: '512GB', priceModifier: 4000000, stock: 10, sold: 95 },
                { sku: 'IP14-PU-128', color: 'Purple', colorHex: '#E6DDEB', storage: '128GB', priceModifier: 0, stock: 20, sold: 200 },
                { sku: 'IP14-PU-256', color: 'Purple', colorHex: '#E6DDEB', storage: '256GB', priceModifier: 2000000, stock: 20, sold: 200 },
                { sku: 'IP14-PU-512', color: 'Purple', colorHex: '#E6DDEB', storage: '512GB', priceModifier: 4000000, stock: 10, sold: 95 },
                { sku: 'IP14-YE-128', color: 'Yellow', colorHex: '#FAE479', storage: '128GB', priceModifier: 0, stock: 20, sold: 200 },
                { sku: 'IP14-YE-256', color: 'Yellow', colorHex: '#FAE479', storage: '256GB', priceModifier: 2000000, stock: 20, sold: 200 },
                { sku: 'IP14-YE-512', color: 'Yellow', colorHex: '#FAE479', storage: '512GB', priceModifier: 4000000, stock: 10, sold: 95 },
                { sku: 'IP14-MD-128', color: 'Midnight', colorHex: '#222930', storage: '128GB', priceModifier: 0, stock: 20, sold: 200 },
                { sku: 'IP14-MD-256', color: 'Midnight', colorHex: '#222930', storage: '256GB', priceModifier: 2000000, stock: 20, sold: 200 },
                { sku: 'IP14-MD-512', color: 'Midnight', colorHex: '#222930', storage: '512GB', priceModifier: 4000000, stock: 10, sold: 95 },
                { sku: 'IP14-SR-128', color: 'Starlight', colorHex: '#FAF6F2', storage: '128GB', priceModifier: 0, stock: 20, sold: 200 },
                { sku: 'IP14-SR-256', color: 'Starlight', colorHex: '#FAF6F2', storage: '256GB', priceModifier: 2000000, stock: 20, sold: 200 },
                { sku: 'IP14-SR-512', color: 'Starlight', colorHex: '#FAF6F2', storage: '512GB', priceModifier: 4000000, stock: 10, sold: 95 },
        ],
        description: { intro: 'iPhone 14. Ditempa dalam titanium dan menampilkan Chip A16 terobosan, tombol Tindakan yang dapat disesuaikan, dan sistem kamera Pro paling kuat yang pernah ada di iPhone dengan zoom optik 5x.', specs: ['Layar: 6.1-inch Super Retina XDR', 'Chip: A16', 'Kamera: Sistem kamera pro 48MP'], condition: 'Produk Baru, Garansi Resmi.' },
        pros: ['Layar lebih besar dan imersif', 'Kamera dengan kemampuan zoom optik 5x', 'Daya tahan baterai terbaik', 'Performa A16'],
        cons: ['Ukuran besar mungkin tidak nyaman untuk semua orang', 'Harga sangat premium'],
        inTheBox: ['Unit iPhone 14', 'Kabel Pengisi Daya USB-C (1 m)']
        },

        // =========IPAD=========IPAD=======IPAD=======IPAD========IPAD
        // =========IPAD=========IPAD=======IPAD=======IPAD========IPAD
        // =========IPAD=========IPAD=======IPAD=======IPAD========IPAD
        // =========IPAD=========IPAD=======IPAD=======IPAD========IPAD
        // =========IPAD=========IPAD=======IPAD=======IPAD========IPAD
    // produk 40
    {
        id: 40,
        kategori: 'iPad', // <-- Kategori baru
        name: 'iPad Pro M4 13" (2024)',
        basePrice: 21999000,
        images: {
            'Space Black': ['images/produk/id40_ipp13/ipp13-sb-1.webp', 'images/produk/id40_ipp13/ipp13-sb-2.webp', 'images/produk/id40_ipp13/ipp13-sb-3.webp'],
            'Silver': ['images/produk/id40_ipp13/ipp13-sl-1.webp', 'images/produk/id40_ipp13/ipp13-sl-2.webp', 'images/produk/id40_ipp13/ipp13-sl-3.webp'],
        },
        variants: [
            { sku: 'IPP13-SB-256', color: 'Space Black', colorHex: '#3a3a3d', storage: '256GB', priceModifier: 0, stock: 10, sold: 95 },
            { sku: 'IPP13-SB-512', color: 'Space Black', colorHex: '#3a3a3d', storage: '512GB', priceModifier: 3500000, stock: 6, sold: 60 },
            { sku: 'IPP13-SB-1TB', color: 'Space Black', colorHex: '#3a3a3d', storage: '1TB', priceModifier: 7000000, stock: 7, sold: 60 },
            //{ sku: 'IPP13-SB-2TB', color: 'Space Black', colorHex: '#3a3a3d', storage: '2TB', priceModifier: 9000000, stock: 10, sold: 60 },
            { sku: 'IPP13-SL-256', color: 'Silver', colorHex: '#e3e4e6', storage: '256GB', priceModifier: 0, stock: 12, sold: 110 },
            //{ sku: 'IPP13-SL-512', color: 'Silver', colorHex: '#e3e4e6', storage: '512GB', priceModifier: 4000000, stock: 18, sold: 110 },
            { sku: 'IPP13-SL-1TB', color: 'Silver', colorHex: '#e3e4e6', storage: '1TB', priceModifier: 7000000, stock: 5, sold: 25 },
            //{ sku: 'IPP13-SL-2TB', color: 'Silver', colorHex: '#e3e4e6', storage: '2TB', priceModifier: 9000000, stock: 0, sold: 25 },
        ],
        description: {
            intro: 'iPad Pro. Tenaga luar biasa dengan layar paling canggih di dunia. Ditenagai chip Apple M4, iPad Pro baru menghadirkan performa menakjubkan dalam desain yang super tipis dan ringan.',
            specs: [ 'Layar: Ultra Retina XDR 13 inci dengan ProMotion', 'Chip: Apple M4', 'Kamera: 12MP Wide, 10MP Ultra Wide', 'Konektor: USB-C dengan dukungan Thunderbolt / USB 4' ],
        },
        pros: ['Performa setara laptop dengan chip M4', 'Layar OLED Tandem terbaik di pasaran', 'Desain sangat tipis dan ringan', 'Mendukung Apple Pencil Pro dan Magic Keyboard baru'],
        cons: ['Harga sangat premium', 'Posisi kamera depan di sisi samping'],
        inTheBox: ['Unit iPad Pro 13"', 'Kabel Pengisi Daya USB-C (1 m)']
    },
    // produk 41
    {
        id: 41,
        kategori: 'iPad',
        name: 'iPad Pro M4 11" (2024)',
        basePrice: 17999000,
        images: {
            'Silver': ['images/produk/id41_ipp11/ipp11-sl-1.webp', 'images/produk/id41_ipp11/ipp11-sl-2.webp', 'images/produk/id41_ipp11/ipp11-sl-3.webp'],
            'Space Black': ['images/produk/id41_ipp11/ipp11-sb-1.webp', 'images/produk/id41_ipp11/ipp11-sb-2.webp', 'images/produk/id41_ipp11/ipp11-sb-3.webp'],
        },
        variants: [
            { sku: 'IPP11-SL-256', color: 'Silver', colorHex: '#e3e4e6', storage: '256GB', priceModifier: 0, stock: 11, sold: 21 },
            //{ sku: 'IPP11-SL-512', color: 'Silver', colorHex: '#e3e4e6', storage: '512GB', priceModifier: 3500000, stock: 12, sold: 43 },
            { sku: 'IPP11-SL-1TB', color: 'Silver', colorHex: '#e3e4e6', storage: '1TB', priceModifier: 7000000, stock: 5, sold: 32 },
            //{ sku: 'IPP11-SL-2TB', color: 'Silver', colorHex: '#e3e4e6', storage: '2TB', priceModifier: 9000000, stock: 5, sold: 12 },
            { sku: 'IPP11-SB-256', color: 'Space Black', colorHex: '#3a3a3d', storage: '256GB', priceModifier: 0, stock: 7, sold: 95 },
            { sku: 'IPP11-SB-512', color: 'Space Black', colorHex: '#3a3a3d', storage: '512GB', priceModifier: 3500000, stock: 10, sold: 60 },
            //{ sku: 'IPP11-SB-1TB', color: 'Space Black', colorHex: '#3a3a3d', storage: '1TB', priceModifier: 7000000, stock: 6, sold: 95 },
            { sku: 'IPP11-SB-2TB', color: 'Space Black', colorHex: '#3a3a3d', storage: '2TB', priceModifier: 9000000, stock: 4, sold: 60 },
        ],
        description: {
            intro: 'iPad Pro. Tenaga luar biasa dengan layar paling canggih di dunia. Ditenagai chip Apple M4, iPad Pro baru menghadirkan performa menakjubkan dalam desain yang super tipis dan ringan.',
            specs: [ 'Layar: Ultra Retina XDR 11 inci dengan ProMotion', 'Chip: Apple M4', 'Kamera: 12MP Wide, 10MP Ultra Wide', 'Konektor: USB-C dengan dukungan Thunderbolt / USB 4' ],
        },
        pros: ['Performa setara laptop dengan chip M4', 'Layar OLED Tandem terbaik di pasaran', 'Desain sangat tipis dan ringan', 'Mendukung Apple Pencil Pro dan Magic Keyboard baru'],
        cons: ['Harga sangat premium', 'Posisi kamera depan di sisi samping'],
        inTheBox: ['Unit iPad Pro 11"', 'Kabel Pengisi Daya USB-C (1 m)']
    },
    // Produk 42 iPad Air 13" M3
    {
        id: 42,
        kategori: 'iPad',
        name: 'iPad Air M3 13" (2025)',
        basePrice: 12999000,
        images: {
            'Blue': ['images/produk/id42_ipa13/ipa13-bu-1.webp', 'images/produk/id42_ipa13/ipa13-bu-2.webp', 'images/produk/id42_ipa13/ipa13-bu-3.webp'],
            'Space Grey': ['images/produk/id42_ipa13/ipa13-sg-1.webp', 'images/produk/id42_ipa13/ipa13-sg-2.webp', 'images/produk/id42_ipa13/ipa13-sg-3.webp'],
            'Purple': ['images/produk/id42_ipa13/ipa13-pu-1.webp', 'images/produk/id42_ipa13/ipa13-pu-2.webp', 'images/produk/id42_ipa13/ipa13-pu-3.webp'],
            'Starlight': ['images/produk/id42_ipa13/ipa13-sl-1.webp', 'images/produk/id42_ipa13/ipa13-sl-2.webp', 'images/produk/id42_ipa13/ipa13-sl-3.webp'],
        },
        variants: [
            { sku: 'IPA13-BU-128', color: 'Blue', colorHex: '#a5b8cd', storage: '128GB', priceModifier: 0, stock: 10, sold: 20 },
            { sku: 'IPA13-BU-256', color: 'Blue', colorHex: '#a5b8cd', storage: '256GB', priceModifier: 1700000, stock: 10, sold: 20 },
            { sku: 'IPA13-BU-512', color: 'Blue', colorHex: '#a5b8cd', storage: '512GB', priceModifier: 3400000, stock: 10, sold: 20 },
            { sku: 'IPA13-BU-1TB', color: 'Blue', colorHex: '#a5b8cd', storage: '1TB', priceModifier: 6800000, stock: 10, sold: 20 },
            { sku: 'IPA13-SG-128', color: 'Space Grey', colorHex: '#5e5d5a', storage: '128GB', priceModifier: 0, stock: 10, sold: 20 },
            { sku: 'IPA13-SG-256', color: 'Space Grey', colorHex: '#5e5d5a', storage: '256GB', priceModifier: 1700000, stock: 10, sold: 20 },
            { sku: 'IPA13-SG-512', color: 'Space Grey', colorHex: '#5e5d5a', storage: '512GB', priceModifier: 3400000, stock: 10, sold: 20 },
            { sku: 'IPA13-SG-1TB', color: 'Space Grey', colorHex: '#5e5d5a', storage: '1TB', priceModifier: 6800000, stock: 10, sold: 20 },
            { sku: 'IPA13-PU-128', color: 'Purple', colorHex: '#b8b5ce', storage: '128GB', priceModifier: 0, stock: 10, sold: 20 },
            { sku: 'IPA13-PU-256', color: 'Purple', colorHex: '#b8b5ce', storage: '256GB', priceModifier: 1700000, stock: 10, sold: 20 },
            { sku: 'IPA13-PU-512', color: 'Purple', colorHex: '#b8b5ce', storage: '512GB', priceModifier: 3400000, stock: 10, sold: 20 },
            { sku: 'IPA13-PU-1TB', color: 'Purple', colorHex: '#b8b5ce', storage: '1TB', priceModifier: 6800000, stock: 10, sold: 20 },
            { sku: 'IPA13-SL-128', color: 'Starlight', colorHex: '#f0e5d8', storage: '128GB', priceModifier: 0, stock: 10, sold: 20 },
            { sku: 'IPA13-SL-256', color: 'Starlight', colorHex: '#f0e5d8', storage: '256GB', priceModifier: 1700000, stock: 10, sold: 20 },
            { sku: 'IPA13-SL-512', color: 'Starlight', colorHex: '#f0e5d8', storage: '512GB', priceModifier: 3400000, stock: 10, sold: 20 },
            { sku: 'IPA13-SL-1TB', color: 'Starlight', colorHex: '#f0e5d8', storage: '1TB', priceModifier: 6800000, stock: 10, sold: 20 },
        ],
        description: {
            intro: 'iPad Air baru dengan chip M3 super cepat. Kini hadir dalam dua ukuran portabel, dengan layar Liquid Retina yang memukau dan kemampuan AI terdepan untuk produktivitas dan kreativitas tanpa batas.',
            specs: [ 'Layar: Liquid Retina 13 inci dengan True Tone', 'Chip: Apple M3', 'Kamera: 12MP Wide di bagian depan dan belakang', 'Konektor: USB-C' ],
        },
        pros: ['Performa M3 yang sangat kencang', 'Desain yang ringan dan penuh warna', 'Mendukung Apple Pencil Pro', 'Posisi kamera depan yang lebih baik untuk video call'],
        cons: ['Tidak memiliki layar ProMotion 120Hz', 'Speaker stereo standar'],
        inTheBox: ['Unit iPad Air 13"', 'Kabel Pengisi Daya USB-C (1 m)']
    },
    // Produk 43 iPad Air 11" M3
    {
        id: 43,
        kategori: 'iPad',
        name: 'iPad Air M3 11" (2025)',
        basePrice: 9999000,
        images: {
            'Purple': ['images/produk/id43_ipa11/ipa11-pu-1.webp', 'images/produk/id43_ipa11/ipa11-pu-2.webp', 'images/produk/id43_ipa11/ipa11-pu-3.webp'],
            'Blue': ['images/produk/id43_ipa11/ipa11-bu-1.webp', 'images/produk/id43_ipa11/ipa11-bu-2.webp', 'images/produk/id43_ipa11/ipa11-bu-3.webp'],
            'Space Grey': ['images/produk/id43_ipa11/ipa11-sg-1.webp', 'images/produk/id43_ipa11/ipa11-sg-2.webp', 'images/produk/id43_ipa11/ipa11-sg-3.webp'],
            'Starlight': ['images/produk/id43_ipa11/ipa11-sl-1.webp', 'images/produk/id43_ipa11/ipa11-sl-2.webp', 'images/produk/id43_ipa11/ipa11-sl-3.webp'],
        },
        variants: [
            { sku: 'IPA11-PU-128', color: 'Purple', colorHex: '#b8b5ce', storage: '128GB', priceModifier: 0, stock: 10, sold: 20 },
            { sku: 'IPA11-PU-256', color: 'Purple', colorHex: '#b8b5ce', storage: '256GB', priceModifier: 1700000, stock: 10, sold: 20 },
            { sku: 'IPA11-PU-512', color: 'Purple', colorHex: '#b8b5ce', storage: '512GB', priceModifier: 3400000, stock: 10, sold: 20 },
            { sku: 'IPA11-PU-1TB', color: 'Purple', colorHex: '#b8b5ce', storage: '1TB', priceModifier: 6800000, stock: 10, sold: 20 },
            { sku: 'IPA11-BU-128', color: 'Blue', colorHex: '#a5b8cd', storage: '128GB', priceModifier: 0, stock: 10, sold: 20 },
            { sku: 'IPA11-BU-256', color: 'Blue', colorHex: '#a5b8cd', storage: '256GB', priceModifier: 1700000, stock: 10, sold: 20 },
            { sku: 'IPA11-BU-512', color: 'Blue', colorHex: '#a5b8cd', storage: '512GB', priceModifier: 3400000, stock: 10, sold: 20 },
            { sku: 'IPA11-BU-1TB', color: 'Blue', colorHex: '#a5b8cd', storage: '1TB', priceModifier: 6800000, stock: 10, sold: 20 },
            { sku: 'IPA11-SG-128', color: 'Space Grey', colorHex: '#5e5d5a', storage: '128GB', priceModifier: 0, stock: 10, sold: 20 },
            { sku: 'IPA11-SG-256', color: 'Space Grey', colorHex: '#5e5d5a', storage: '256GB', priceModifier: 1700000, stock: 10, sold: 20 },
            { sku: 'IPA11-SG-512', color: 'Space Grey', colorHex: '#5e5d5a', storage: '512GB', priceModifier: 3400000, stock: 10, sold: 20 },
            { sku: 'IPA11-SG-1TB', color: 'Space Grey', colorHex: '#5e5d5a', storage: '1TB', priceModifier: 6800000, stock: 10, sold: 20 },
            { sku: 'IPA11-SL-128', color: 'Starlight', colorHex: '#f0e5d8', storage: '128GB', priceModifier: 0, stock: 10, sold: 20 },
            { sku: 'IPA11-SL-256', color: 'Starlight', colorHex: '#f0e5d8', storage: '256GB', priceModifier: 1700000, stock: 10, sold: 20 },
            { sku: 'IPA11-SL-512', color: 'Starlight', colorHex: '#f0e5d8', storage: '512GB', priceModifier: 3400000, stock: 10, sold: 20 },
            { sku: 'IPA11-SL-1TB', color: 'Starlight', colorHex: '#f0e5d8', storage: '1TB', priceModifier: 6800000, stock: 10, sold: 20 },
        ],
        description: {
            intro: 'iPad Air baru dengan chip M3 super cepat. Kini hadir dalam dua ukuran portabel, dengan layar Liquid Retina yang memukau dan kemampuan AI terdepan untuk produktivitas dan kreativitas tanpa batas.',
            specs: [ 'Layar: Liquid Retina 11 inci dengan True Tone', 'Chip: Apple M3', 'Kamera: 12MP Wide di bagian depan dan belakang', 'Konektor: USB-C' ],
        },
        pros: ['Sangat portabel dan ringan', 'Performa M3 yang sangat kencang', 'Mendukung Apple Pencil Pro', 'Posisi kamera depan yang lebih baik untuk video call'],
        cons: ['Tidak memiliki layar ProMotion 120Hz', 'Ukuran layar mungkin terasa kecil untuk multitasking berat'],
        inTheBox: ['Unit iPad Air 11"', 'Kabel Pengisi Daya USB-C (1 m)']
    },
    // Produk 44 iPad 11th Gen
    {
        id: 44,
        kategori: 'iPad',
        name: 'iPad (11th Gen)',
        basePrice: 7999000,
        images: {
            'Pink': ['images/produk/id44_ip11/ip11-pi-1.webp', 'images/produk/id44_ip11/ip11-pi-2.webp', 'images/produk/id44_ip11/ip11-pi-3.webp'],
            'Blue': ['images/produk/id44_ip11/ip11-bu-1.webp', 'images/produk/id44_ip11/ip11-bu-2.webp', 'images/produk/id44_ip11/ip11-bu-3.webp'],
            'Yellow': ['images/produk/id44_ip11/ip11-ye-1.webp', 'images/produk/id44_ip11/ip11-ye-2.webp', 'images/produk/id44_ip11/ip11-ye-3.webp'],
            'Silver': ['images/produk/id44_ip11/ip11-sl-1.webp', 'images/produk/id44_ip11/ip11-sl-2.webp', 'images/produk/id44_ip11/ip11-sl-3.webp'],
        },
        variants: [
            { sku: 'IP11-PI-128', color: 'Pink', colorHex: '#f5d7de', storage: '128GB', priceModifier: 0, stock: 10, sold: 20 },
            { sku: 'IP11-PI-256', color: 'Pink', colorHex: '#f5d7de', storage: '256GB', priceModifier: 2000000, stock: 10, sold: 20 },
            { sku: 'IP11-PI-512', color: 'Pink', colorHex: '#f5d7de', storage: '512GB', priceModifier: 4000000, stock: 10, sold: 20 },
            { sku: 'IP11-BU-128', color: 'Blue', colorHex: '#a5b8cd', storage: '128GB', priceModifier: 0, stock: 10, sold: 20 },
            { sku: 'IP11-BU-256', color: 'Blue', colorHex: '#a5b8cd', storage: '256GB', priceModifier: 2000000, stock: 10, sold: 20 },
            { sku: 'IP11-BU-512', color: 'Blue', colorHex: '#a5b8cd', storage: '512GB', priceModifier: 4000000, stock: 10, sold: 20 },
            { sku: 'IP11-YE-128', color: 'Yellow', colorHex: '#f5e6a8', storage: '128GB', priceModifier: 0, stock: 10, sold: 20 },
            { sku: 'IP11-YE-256', color: 'Yellow', colorHex: '#f5e6a8', storage: '256GB', priceModifier: 2000000, stock: 10, sold: 20 },
            { sku: 'IP11-YE-512', color: 'Yellow', colorHex: '#f5e6a8', storage: '512GB', priceModifier: 4000000, stock: 10, sold: 20 },
            { sku: 'IP11-SI-128', color: 'Silver', colorHex: '#e3e4e6', storage: '128GB', priceModifier: 0, stock: 10, sold: 20 },
            { sku: 'IP11-SI-256', color: 'Silver', colorHex: '#e3e4e6', storage: '256GB', priceModifier: 2000000, stock: 10, sold: 20 },
            { sku: 'IP11-SI-512', color: 'Silver', colorHex: '#e3e4e6', storage: '512GB', priceModifier: 4000000, stock: 10, sold: 20 },
        ],
        description: {
            intro: 'iPad baru yang penuh warna dengan chip A16 Bionic yang andal, menjadikannya perangkat serbaguna untuk belajar, bermain, dan berkreasi. Ini adalah model Wi-Fi Only.',
            specs: [ 'Layar: Liquid Retina 10.9 inci', 'Chip: A16 Bionic', 'Kamera: 12MP Wide di bagian belakang', 'Konektor: USB-C' ],
        },
        pros: ['Desain penuh warna yang menarik', 'Performa A16 Bionic yang cepat untuk tugas sehari-hari', 'Harga paling terjangkau di jajaran iPad', 'Mendukung Apple Pencil (USB-C)'],
        cons: ['Layar belum laminasi', 'Tidak mendukung Apple Pencil Pro', 'Wi-Fi Only, tidak ada opsi seluler'],
        inTheBox: ['Unit iPad (11th Gen)', 'Kabel Pengisi Daya USB-C (1 m)', '20W USB-C Power Adapter']
    },

    // Produk 45 iPad mini 7th Gen
    {
        id: 45,
        kategori: 'iPad',
        name: 'iPad mini (7th Gen)',
        basePrice: 8499000,
        images: {
            'Starlight': ['images/produk/id45_ipm7/ipm7-sl-1.webp', 'images/produk/id45_ipm7/ipm7-sl-2.webp', 'images/produk/id45_ipm7/ipm7-sl-3.webp'],
            'Blue': ['images/produk/id45_ipm7/ipm7-bu-1.webp', 'images/produk/id45_ipm7/ipm7-bu-2.webp', 'images/produk/id45_ipm7/ipm7-bu-3.webp'],
            'Purple': ['images/produk/id45_ipm7/ipm7-pu-1.webp', 'images/produk/id45_ipm7/ipm7-pu-2.webp', 'images/produk/id45_ipm7/ipm7-pu-3.webp'],
            'Space Grey': ['images/produk/id45_ipm7/ipm7-sg-1.webp', 'images/produk/id45_ipm7/ipm7-sg-2.webp', 'images/produk/id45_ipm7/ipm7-sg-3.webp'],
        },
        variants: [
            { sku: 'IPM7-SL-128', color: 'Starlight', colorHex: '#f0e5d8', storage: '128GB', priceModifier: 0, stock: 10, sold: 20 },
            { sku: 'IPM7-SL-256', color: 'Starlight', colorHex: '#f0e5d8', storage: '256GB', priceModifier: 2000000, stock: 10, sold: 20 },
            { sku: 'IPM7-SL-512', color: 'Starlight', colorHex: '#f0e5d8', storage: '512GB', priceModifier: 4000000, stock: 10, sold: 20 },
            { sku: 'IPM7-BU-128', color: 'Blue', colorHex: '#a5b8cd', storage: '128GB', priceModifier: 0, stock: 10, sold: 20 },
            { sku: 'IPM7-BU-256', color: 'Blue', colorHex: '#a5b8cd', storage: '256GB', priceModifier: 2000000, stock: 10, sold: 20 },
            { sku: 'IPM7-BU-512', color: 'Blue', colorHex: '#a5b8cd', storage: '512GB', priceModifier: 4000000, stock: 10, sold: 20 },
            { sku: 'IPM7-PU-128', color: 'Purple', colorHex: '#b8b5ce', storage: '128GB', priceModifier: 0, stock: 10, sold: 20 },
            { sku: 'IPM7-PU-256', color: 'Purple', colorHex: '#b8b5ce', storage: '256GB', priceModifier: 2000000, stock: 10, sold: 20 },
            { sku: 'IPM7-PU-512', color: 'Purple', colorHex: '#b8b5ce', storage: '512GB', priceModifier: 4000000, stock: 10, sold: 20 },
            { sku: 'IPM7-SG-128', color: 'Space Grey', colorHex: '#5e5d5a', storage: '128GB', priceModifier: 0, stock: 10, sold: 20 },
            { sku: 'IPM7-SG-256', color: 'Space Grey', colorHex: '#5e5d5a', storage: '256GB', priceModifier: 2000000, stock: 10, sold: 20 },
            { sku: 'IPM7-SG-512', color: 'Space Grey', colorHex: '#5e5d5a', storage: '512GB', priceModifier: 4000000, stock: 10, sold: 20 },
        ],
        description: {
            intro: 'Ukuran mini, performa Pro. iPad mini terbaru kini ditenagai chip A17 Pro yang sangat kencang, menjadikannya perangkat ultra-portabel yang sempurna untuk catatan, membaca, dan bermain game. Ini adalah model Wi-Fi Only.',
            specs: [ 'Layar: Liquid Retina 8.3 inci', 'Chip: A17 Pro', 'Kamera: 12MP Wide di bagian belakang', 'Fitur: Touch ID di tombol atas' ],
        },
        pros: ['Ukuran sangat ringkas dan mudah dibawa', 'Performa A17 Pro setara iPhone Pro', 'Mendukung Apple Pencil (Generasi ke-2)', 'Layar laminasi penuh'],
        cons: ['Refresh rate layar hanya 60Hz', 'Ukuran layar kecil untuk multitasking', 'Wi-Fi Only, tidak ada opsi seluler'],
        inTheBox: ['Unit iPad mini', 'Kabel Pengisi Daya USB-C (1 m)', '20W USB-C Power Adapter']
    },

    // =========AIRPODS=========AIRPODS=======AIRPODS=======AIRPODS========AIRPODS
    // =========AIRPODS=========AIRPODS=======AIRPODS=======AIRPODS========AIRPODS
    // =========AIRPODS=========AIRPODS=======AIRPODS=======AIRPODS========AIRPODS
    // =========AIRPODS=========AIRPODS=======AIRPODS=======AIRPODS========AIRPODS
    // =========AIRPODS=========AIRPODS=======AIRPODS=======AIRPODS========AIRPODS

    // Produk 46 AirPods Max
    {
        id: 46,
        kategori: 'AirPods',
        name: 'AirPods Max',
        basePrice: 8999000,
        images: {
            'Blue': ['images/produk/id46_apm/apm_blue.webp', 'images/produk/id46_apm/6.webp', 'images/produk/id46_apm/7.webp', 'images/produk/id46_apm/8.webp', 'images/produk/id46_apm/9.webp', 'images/produk/id46_apm/10.webp'],
            'Purple': ['images/produk/id46_apm/apm_purple.webp', 'images/produk/id46_apm/6.webp', 'images/produk/id46_apm/7.webp', 'images/produk/id46_apm/8.webp', 'images/produk/id46_apm/9.webp', 'images/produk/id46_apm/10.webp'],
            'Midnight': ['images/produk/id46_apm/apm_midnight.webp', 'images/produk/id46_apm/6.webp', 'images/produk/id46_apm/7.webp', 'images/produk/id46_apm/8.webp', 'images/produk/id46_apm/9.webp', 'images/produk/id46_apm/10.webp'],
            'Starlight': ['images/produk/id46_apm/apm_starlight.webp', 'images/produk/id46_apm/6.webp', 'images/produk/id46_apm/7.webp', 'images/produk/id46_apm/8.webp', 'images/produk/id46_apm/9.webp', 'images/produk/id46_apm/10.webp'],
            'Orange': ['images/produk/id46_apm/apm_orange.webp', 'images/produk/id46_apm/6.webp', 'images/produk/id46_apm/7.webp', 'images/produk/id46_apm/8.webp', 'images/produk/id46_apm/9.webp', 'images/produk/id46_apm/10.webp'],
        },
        variants: [
            { sku: 'APM-BL', color: 'Blue', colorHex: '#a5b8cd', stock: 10, sold: 20 },
            { sku: 'APM-PU', color: 'Purple', colorHex: '#b8b5ce', stock: 10, sold: 20 },
            { sku: 'APM-MD', color: 'Midnight', colorHex: '#3a3a3d', stock: 10, sold: 20 },
            { sku: 'APM-SL', color: 'Starlight', colorHex: '#f0e5d8', stock: 10, sold: 20 },
            { sku: 'APM-OR', color: 'Orange', colorHex: '#ff8c69', stock: 10, sold: 20 },
        ],
        description: { intro: 'AirPods Max menata ulang headphone over-ear. Audio spasial dengan pelacakan kepala dinamis memberikan suara surround laksana teater untuk film dan acara TV.', specs: ['Audio Spasial Personal', 'Active Noise Cancellation dan mode Transparansi Adaptif', 'Hingga 20 jam waktu dengar'], condition: 'Produk Baru, Garansi Resmi.' },
        pros: ['Kualitas audio terbaik di kelasnya', 'Fitur peredam bising (ANC) yang luar biasa', 'Desain premium dan material berkualitas tinggi', 'Sangat nyaman digunakan'],
        cons: ['Harga sangat premium', 'Smart Case tidak memberikan perlindungan penuh', 'Tidak ada jack audio 3.5mm'],
        inTheBox: ['AirPods Max', 'Smart Case', 'Kabel Lightning ke USB-C']
    },
    // Produk 47 AirPods Pro 2
    {
        id: 47,
        kategori: 'AirPods',
        name: 'AirPods Pro (Generasi ke-2)',
        basePrice: 3999000,
        images: {
                'White': ['images/produk/id47_app/1.webp', 'images/produk/id47_app/2.webp', 'images/produk/id47_app/3.webp', 'images/produk/id47_app/4.webp', 'images/produk/id47_app/5.webp']
        },
        // Dibuat menjadi struktur varian meskipun hanya ada satu
        variants: [
                { sku: 'APP-G2-W', color: 'White', colorHex: '#f5f5f7', stock: 10, sold: 20 }
        ],
        description: { intro: 'AirPods Pro telah direkayasa ulang untuk menghasilkan kualitas audio yang lebih kaya. Peredam Kebisingan Aktif level berikutnya dan Transparansi Adaptif mengurangi lebih banyak suara eksternal.', specs: ['Chip H2 Apple', 'Audio Spasial Personal', 'Casing Pengisian Daya MagSafe (USB-C)'], condition: 'Produk Baru, Garansi Resmi.' },
        pros: ['Peredam bising (ANC) jauh lebih baik', 'Kontrol volume sentuh pada batang', 'Kualitas audio meningkat signifikan', 'Daya tahan baterai lebih lama'],
        cons: ['Desain tidak banyak berubah dari generasi pertama'],
        inTheBox: ['AirPods Pro', 'Casing Pengisian Daya MagSafe (USB-C) dengan speaker', 'Ujung silikon (empat ukuran)', 'Kabel Pengisi Daya USB-C']
    },
    // Produk 48 AirPods 4
    {
        id: 48,
        kategori: 'AirPods',
        name: 'AirPods (Generasi ke-4)',
        basePrice: 1799000,
        images: {
            'Default': ['images/produk/id48_ap4/1.webp', 'images/produk/id48_ap4/2.webp', 'images/produk/id48_ap4/3.webp', 'images/produk/id48_ap4/4.webp', 'images/produk/id48_ap4/5.webp']
        },
        variants: [
            { sku: 'AP4-NONANC', feature: 'Non-ANC', priceModifier: 0, stock: 10, sold: 20 },
            { sku: 'AP4-ANC', feature: 'Active Noice Cancelation', priceModifier: 500000, stock: 10, sold: 20 }
        ],
        description: { intro: 'Memperkenalkan AirPods (Generasi ke-4) dengan desain baru yang nyaman dan Audio Spasial Personal. Kini hadir dalam dua pilihan: dengan desain universal atau dengan Peredam Kebisingan Aktif untuk pengalaman mendengar yang lebih fokus.', specs: ['Chip H2 Apple', 'Audio Spasial Personal', 'Desain berkontur baru'], condition: 'Produk Baru, Garansi Resmi.' },
        pros: ['Kualitas audio yang jernih', 'Daya tahan baterai lebih lama', 'Desain lebih nyaman', 'Tersedia opsi dengan ANC'],
        cons: ['Opsi non-ANC tidak meredam suara sekitar', 'Tidak memiliki fitur audio adaptif seperti seri Pro'],
        inTheBox: ['AirPods', 'Casing Pengisian Daya', 'Kabel Pengisi Daya USB-C']
    },

    // =========ACCESSORIES=========ACCESSORIES=======ACCESSORIES=======ACCESSORIES========ACCESSORIES
    // =========ACCESSORIES=========ACCESSORIES=======ACCESSORIES=======ACCESSORIES========ACCESSORIES
    // =========ACCESSORIES=========ACCESSORIES=======ACCESSORIES=======ACCESSORIES========ACCESSORIES
    // =========ACCESSORIES=========ACCESSORIES=======ACCESSORIES=======ACCESSORIES========ACCESSORIES
    // =========ACCESSORIES=========ACCESSORIES=======ACCESSORIES=======ACCESSORIES========ACCESSORIES

    // produk 49
    {
        id: 49,
        kategori: 'Accessories',
        name: 'Magic Keyboard with Touch ID and Numeric Keypad - Black Keys',
        specs: 'US English',
        price: 3299000, // Harga bisa disesuaikan jika berbeda
        stock: 10,
        grade: 'Baru',
        sku: 'MKM-BK-US',
        sold: 25,
        images: ['images/produk/id49_mkm_bl/mkm-bl-1.webp', 'images/produk/id49_mkm_bl/mkm-bl-2.webp', 'images/produk/id49_mkm_bl/mkm-bl-3.webp', 'images/produk/id49_mkm_bl/mkm-bl-4.webp', 'images/produk/id49_mkm_bl/mkm-bl-5.webp'],
        description: {
            intro: 'Magic Keyboard dengan tombol hitam menghadirkan pengalaman mengetik yang sangat nyaman dan presisi. Dilengkapi Touch ID untuk autentikasi yang cepat dan aman.',
            specs: ['Koneksi: Bluetooth, port Lightning', 'Fitur: Tombol Panah Ukuran Penuh, Keypad Numerik'],
            condition: 'Produk Baru, Garansi Resmi.'
        },
        pros: ['Pengalaman mengetik yang luar biasa', 'Touch ID untuk login dan pembayaran yang mudah', 'Desain elegan dan minimalis'],
        cons: ['Harga premium', 'Menggunakan port Lightning untuk mengisi daya'],
        inTheBox: ['Magic Keyboard (Black Keys)', 'Kabel USB-C ke Lightning']
    },

    // Produk 50 Magic Keyboard for Mac - White Keys
    {
        id: 50,
        kategori: 'Accessories',
        name: 'Magic Keyboard with Touch ID and Numeric Keypad - White Keys',
        specs: 'US English',
        price: 2999000,
        stock: 15,
        grade: 'Baru',
        sku: 'MKM-WH-US',
        sold: 35,
        images: ['images/produk/id50_mkm_wh/mkm-wh-1.webp', 'images/produk/id50_mkm_wh/mkm-wh-2.webp', 'images/produk/id50_mkm_wh/mkm-wh-3.webp', 'images/produk/id50_mkm_wh/mkm-wh-4.webp', 'images/produk/id50_mkm_wh/mkm-wh-5.webp'],
        description: {
            intro: 'Magic Keyboard dengan tombol putih klasik menghadirkan pengalaman mengetik yang sangat nyaman dan presisi. Dilengkapi Touch ID untuk autentikasi yang cepat dan aman.',
            specs: ['Koneksi: Bluetooth, port Lightning', 'Fitur: Tombol Panah Ukuran Penuh, Keypad Numerik'],
            condition: 'Produk Baru, Garansi Resmi.'
        },
        pros: ['Pengalaman mengetik yang luar biasa', 'Touch ID untuk login dan pembayaran yang mudah', 'Desain elegan dan minimalis'],
        cons: ['Harga premium', 'Menggunakan port Lightning untuk mengisi daya'],
        inTheBox: ['Magic Keyboard (White Keys)', 'Kabel USB-C ke Lightning']
    },

    // Produk 51 Magic Trackpad - Black
    {
        id: 51,
        kategori: 'Accessories',
        name: 'Magic Trackpad - Black',
        specs: 'Multi-Touch Surface',
        price: 2499000,
        stock: 8,
        grade: 'Baru',
        sku: 'MTP-BK',
        sold: 28,
        images: ['images/produk/id51_mt_bl/mt-bl-1.webp', 'images/produk/id51_mt_bl/mt-bl-2.webp', 'images/produk/id51_mt_bl/mt-bl-3.webp', 'images/produk/id51_mt_bl/mt-bl-4.webp', 'images/produk/id51_mt_bl/mt-bl-5.webp'],
        description: {
            intro: 'Magic Trackpad nirkabel dengan permukaan hitam elegan. Dapat diisi ulang, dengan rangkaian lengkap gestur Multi-Touch dan teknologi Force Touch.',
            specs: ['Koneksi: Bluetooth, port Lightning', 'Teknologi: Force Touch, Multi-Touch'],
            condition: 'Produk Baru, Garansi Resmi.'
        },
        pros: ['Permukaan kaca yang luas dan responsif', 'Mendukung semua gestur macOS', 'Daya tahan baterai yang sangat lama'],
        cons: ['Harga premium untuk sebuah trackpad'],
        inTheBox: ['Magic Trackpad (Black)', 'Kabel USB-C ke Lightning']
    },
    // Produk 52 Magic Trackpad - White
    {
        id: 52,
        kategori: 'Accessories',
        name: 'Magic Trackpad - White',
        specs: 'Multi-Touch Surface',
        price: 2199000,
        stock: 12,
        grade: 'Baru',
        sku: 'MTP-WH',
        sold: 45,
        images: ['images/produk/id52_mt_wh/mt-wh-1.webp', 'images/produk/id52_mt_wh/mt-wh-2.webp', 'images/produk/id52_mt_wh/mt-wh-3.webp', 'images/produk/id52_mt_wh/mt-wh-4.webp', 'images/produk/id52_mt_wh/mt-wh-5.webp'],
        description: {
            intro: 'Magic Trackpad nirkabel dengan permukaan putih klasik. Dapat diisi ulang, dengan rangkaian lengkap gestur Multi-Touch dan teknologi Force Touch.',
            specs: ['Koneksi: Bluetooth, port Lightning', 'Teknologi: Force Touch, Multi-Touch'],
            condition: 'Produk Baru, Garansi Resmi.'
        },
        pros: ['Permukaan kaca yang luas dan responsif', 'Mendukung semua gestur macOS', 'Daya tahan baterai yang sangat lama'],
        cons: ['Harga premium untuk sebuah trackpad'],
        inTheBox: ['Magic Trackpad (White)', 'Kabel USB-C ke Lightning']
    },
    // Produk 53 Magic Keyboard for iPad Pro 13" - Black
    {
        id: 53,
        kategori: 'Accessories',
        name: 'Magic Keyboard for iPad Pro 13‑inch (M4) - Black',
        specs: 'US English',
        price: 5899000,
        stock: 10,
        grade: 'Baru',
        sku: 'MKIP13-BK-US',
        sold: 15,
        images: ['images/produk/id53_mk13_bl/mk13-bl-1.webp', 'images/produk/id53_mk13_bl/mk13-bl-2.webp', 'images/produk/id53_mk13_bl/mk13-bl-3.webp', 'images/produk/id53_mk13_bl/mk13-bl-4.webp', 'images/produk/id53_mk13_bl/mk13-bl-5.webp'],
        description: {
            intro: 'Magic Keyboard baru untuk iPad Pro adalah pendamping yang luar biasa. Menghadirkan pengalaman mengetik terbaik, trackpad baru yang lebih besar, dan sandaran aluminium yang kokoh dalam warna Hitam klasik.',
            specs: ['Kompatibilitas: iPad Pro 13 inci (M4)', 'Fitur: Baris fungsi, Trackpad dengan umpan balik haptik', 'Konektor: USB-C untuk pass-through charging'],
        },
        pros: ['Pengalaman mengetik seperti laptop', 'Trackpad yang sangat responsif', 'Desain melayang yang bisa disesuaikan sudutnya', 'Memberikan perlindungan depan dan belakang'],
        cons: ['Menambah bobot yang signifikan pada iPad', 'Harga sangat premium'],
        inTheBox: ['Magic Keyboard for iPad Pro 13-inch (Black)']
    },

    // Produk 54 Magic Keyboard for iPad Pro 13" - White
    {
        id: 54,
        kategori: 'Accessories',
        name: 'Magic Keyboard for iPad Pro 13‑inch (M4) - White',
        specs: 'US English',
        price: 5899000,
        stock: 10,
        grade: 'Baru',
        sku: 'MKIP13-WH-US',
        sold: 12,
        images: ['images/produk/id54_mk13_wh/mk13-wh-1.webp', 'images/produk/id54_mk13_wh/mk13-wh-2.webp', 'images/produk/id54_mk13_wh/mk13-wh-3.webp', 'images/produk/id54_mk13_wh/mk13-wh-4.webp', 'images/produk/id54_mk13_wh/mk13-wh-5.webp'],
        description: {
            intro: 'Magic Keyboard baru untuk iPad Pro adalah pendamping yang luar biasa. Menghadirkan pengalaman mengetik terbaik, trackpad baru yang lebih besar, dan sandaran aluminium yang kokoh dalam warna Putih yang elegan.',
            specs: ['Kompatibilitas: iPad Pro 13 inci (M4)', 'Fitur: Baris fungsi, Trackpad dengan umpan balik haptik', 'Konektor: USB-C untuk pass-through charging'],
        },
        pros: ['Pengalaman mengetik seperti laptop', 'Trackpad yang sangat responsif', 'Desain melayang yang bisa disesuaikan sudutnya', 'Memberikan perlindungan depan dan belakang'],
        cons: ['Menambah bobot yang signifikan pada iPad', 'Warna putih lebih rentan kotor'],
        inTheBox: ['Magic Keyboard for iPad Pro 13-inch (White)']
    },

    // Produk 55 Magic Keyboard for iPad Pro 11" - Black
    {
        id: 55,
        kategori: 'Accessories',
        name: 'Magic Keyboard for iPad Pro 11‑inch (M4) - Black',
        specs: 'US English',
        price: 4999000,
        stock: 10,
        grade: 'Baru',
        sku: 'MKIP11-BK-US',
        sold: 22,
        images: ['images/produk/id55_mk11_bl/mk11-bl-1.webp', 'images/produk/id55_mk11_bl/mk11-bl-2.webp', 'images/produk/id55_mk11_bl/mk11-bl-3.webp', 'images/produk/id55_mk11_bl/mk11-bl-4.webp', 'images/produk/id55_mk11_bl/mk11-bl-5.webp'],
        description: {
            intro: 'Mengubah iPad Pro 11 inci Anda menjadi laptop. Magic Keyboard baru ini menghadirkan pengalaman mengetik terbaik, trackpad baru yang lebih besar, dan sandaran aluminium kokoh dalam warna Hitam klasik.',
            specs: ['Kompatibilitas: iPad Pro 11 inci (M4)', 'Fitur: Baris fungsi, Trackpad dengan umpan balik haptik', 'Konektor: USB-C untuk pass-through charging'],
        },
        pros: ['Pengalaman mengetik seperti laptop', 'Trackpad yang responsif', 'Desain melayang yang bisa disesuaikan sudutnya', 'Memberikan perlindungan penuh'],
        cons: ['Menambah bobot pada iPad', 'Harga premium'],
        inTheBox: ['Magic Keyboard for iPad Pro 11-inch (Black)']
    },

    // Produk 56 Magic Keyboard for iPad Pro 11" - White
    {
        id: 56,
        kategori: 'Accessories',
        name: 'Magic Keyboard for iPad Pro 11‑inch (M4) - White',
        specs: 'US English',
        price: 4999000,
        stock: 10,
        grade: 'Baru',
        sku: 'MKIP11-WH-US',
        sold: 18,
        images: ['images/produk/id56_mk11_wh/mk11-wh-1.webp', 'images/produk/id56_mk11_wh/mk11-wh-2.webp', 'images/produk/id56_mk11_wh/mk11-wh-3.webp', 'images/produk/id56_mk11_wh/mk11-wh-4.webp', 'images/produk/id56_mk11_wh/mk11-wh-5.webp'],
        description: {
            intro: 'Mengubah iPad Pro 11 inci Anda menjadi laptop. Magic Keyboard baru ini menghadirkan pengalaman mengetik terbaik, trackpad baru yang lebih besar, dan sandaran aluminium kokoh dalam warna Putih yang elegan.',
            specs: ['Kompatibilitas: iPad Pro 11 inci (M4)', 'Fitur: Baris fungsi, Trackpad dengan umpan balik haptik', 'Konektor: USB-C untuk pass-through charging'],
        },
        pros: ['Pengalaman mengetik seperti laptop', 'Trackpad yang responsif', 'Desain melayang yang bisa disesuaikan sudutnya', 'Memberikan perlindungan penuh'],
        cons: ['Menambah bobot pada iPad', 'Warna putih lebih rentan kotor'],
        inTheBox: ['Magic Keyboard for iPad Pro 11-inch (White)']
    }
];