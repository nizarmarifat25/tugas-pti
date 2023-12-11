import img1 from './assets/chat-gpt-logo.png'
import img2 from './assets/google-maps-logo.png'
import img3 from './assets/google-translate-logo.png'
import img4 from './assets/otter-ai.png'

const data = [

    {
        no: 2,
        image: img2,
        name: "Google Maps",
        understanding: "Google Maps adalah aplikasi yang sangat berguna. Google Maps dapat membantu Anda memberitahukan petunjuk arah kemana Anda harus pergi dan apa saja yang perlu Anda ketahui sebelum Anda sampai di sana. Meskipun Google Maps adalah favorit saya tetapi agak sedikit kurang praktis.",
        function: ["menampilkan rute dan menggunakan informasi lalu lintas real-time untuk menemukan rute terbaik ke tujuan", "Pemberi Saran", "Menghitung jarak tempuh", "Share location secara Real Time"],
        link: 'https://www.google.com/maps'
    },
    {
        no: 3,
        image: img3,
        name: "Google Translate",
        understanding: "Google Terjemahan adalah layanan penerjemahan statistik dan mesin neural multibahasa bahasa yang dikembangkan oleh Google, untuk menerjemahkan teks dan situs web dari satu bahasa ke bahasa lain",
        function: ["Penerjemah suara", "Camera Translator", "Transcribe",],
        link: 'https://translate.google.co.id/?hl=id'
    },
    {
        no: 4,
        image: img4,
        name: "Otter ai",
        understanding: "Otter ai adalah perangkat lunak transkripsi suara ke teks yang menggunakan kecerdasan buatan. Ia mengambil suara dalam umpan audio, memprosesnya melalui algoritma AI, dan mulai menumpuk kata-kata di halaman, siap untuk dibaca, disorot, dan disalin. ",
        function: ["Transkripsi Otomatis", "Analisis Data", "Pencarian dan Indexing",],
        link:'https://otter.ai/'
    },
    {
        no: 1,
        image: img1,
        name: "Chat GPT",
        understanding: "Chat GPT (Generative Pre-training Transformer) adalah kecerdasan buatan yang cara kerjanya memakai format percakapan. Teknis sederhananya adalah seperti kita bertanya dengan guru di kelas, tetapi di Chat GPT kamu bertanya kepada AI dan secara otomatis memperoleh jawaban dalam waktu singkat.",
        function: ["Penyedia Informasi", "Pemberi Saran"],
        link: 'https://chat.openai.com/'
    },
]
export default data