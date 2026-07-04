// ==========================================
// Data Antologi Puisi & Kutipan (Venus)
// ==========================================

const quotes = [
    {
        text: "Sebab pada akhirnya, kita hanyalah sekumpulan ingatan yang perlahan memudar di ingatan orang lain.",
        author: "Anonim"
    },
    {
        text: "Aku menulis untuk melipat jarak, agar sunyiku dan sunyimu bisa saling menyapa tanpa harus bersuara.",
        author: "Lentera Malam"
    },
    {
        text: "Jangan terburu-buru. Beberapa bunga mekar di awal musim semi, beberapa lainnya mekar di akhir musim panas. Waktumu akan tiba.",
        author: "Karsa Sunyi"
    },
    {
        text: "Luka hari ini mungkin belum sembuh esok hari. Tapi ingatlah, malam yang paling gelap sekalipun pasti akan menyambut fajar.",
        author: "Sajak Senja"
    },
    {
        text: "Ada rindu yang tidak perlu dititipkan pada angin, cukup disimpan rapi di dalam baris-baris doa.",
        author: "Gumam Malam"
    },
    {
        text: "Sebab mencintaimu adalah keberanian untuk merelakan sebagian dari diriku hilang bersama tawamu.",
        author: "Venus"
    },
    {
        text: "Kita adalah dua sunyi yang saling melengkapi, menulis sajak di antara gemuruh dunia yang tak peduli.",
        author: "Catatan Venus"
    }
];

// Static pre-populated published poems
const defaultPoems = [
    {
        id: 1,
        title: "Menemukanmu di Batas Mimpi",
        date: "28 Juni 2026",
        excerpt: "Malam ini gerimis jatuh tanpa suara, seperti rindu yang kukirim lewat hembusan angin...",
        category: "romansa",
        readTime: "2 mnt membaca",
        body: `Malam ini gerimis jatuh tanpa suara,
        seperti rindu yang kukirim lewat hembusan angin.
        Aku menatap langit yang kelabu,
        mencari bayangmu di antara ribuan titik air.
        
        Kutemukan kamu di batas mimpi,
        berdiri anggun di bawah temaram lampu kota.
        Tersenyum tanpa berkata-kata,
        seolah tahu aku sedang merapalkan namamu.
        
        Namun pagi selalu datang terlalu cepat,
        merenggut mimpi dan menyisakan sepi.
        Tapi tak apa, setidaknya di batas mimpi itu,
        kita pernah menjadi nyata.`
    },
    {
        id: 2,
        title: "Secangkir Kopi dan Kepergian",
        date: "15 Mei 2026",
        excerpt: "Asapnya mengepul, membawa aroma ingatan tentang langkah kakimu yang menjauh...",
        category: "perjalanan",
        readTime: "2 mnt membaca",
        body: `Asapnya mengepul lambat di udara dingin,
        membawa aroma ingatan tentang langkah kakimu yang menjauh.
        Secangkir kopi hitam di meja ini,
        menjadi saksi bisu akhir dari sebuah cerita.
        
        Rasa pahitnya menetap di lidah,
        sama seperti kenyataan yang harus kuterima.
        Bahwa ada orang yang ditakdirkan singgah,
        namun tidak untuk menetap selamanya.
        
        Biarlah kopi ini dingin bersama waktu,
        sebagaimana hatiku yang perlahan belajar merelakanmu.
        Selamat jalan,
        pelajaran terbaik di hidupku.`
    },
    {
        id: 3,
        title: "Sajak Hujan di Bulan April",
        date: "02 April 2026",
        excerpt: "Ia membasahi bumi, menghapus debu-debu kesedihan yang melekat di jendela kamarku...",
        category: "perjalanan",
        readTime: "2 mnt membaca",
        body: `April datang membawa awan mendung,
        membasahi bumi yang lelah dipanggang matahari.
        Ia mengetuk kaca jendela kamarku,
        membawa melodi tenang yang meninabobokan jiwa.
        
        Hujan hari ini terasa berbeda,
        ia tidak membawa kesedihan seperti biasanya.
        Ia seperti penghapus luka,
        membersihkan sisa-sisa sesak yang tersimpan di dada.
        
        Biarlah airnya mengalir deras,
        membawa pergi semua keraguan yang tersisa.
        Sebab setelah badai mereda,
        pelangi selalu punya cara untuk menyapa.`
    },
    {
        id: 4,
        title: "Catatan di Persimpangan Jalan",
        date: "12 Maret 2026",
        excerpt: "Aku berdiri di tempat di mana petunjuk arah telah patah dihantam angin kencang...",
        category: "perjalanan",
        readTime: "3 mnt membaca",
        body: `Aku berdiri di persimpangan jalan,
        di mana petunjuk arah telah patah dihantam waktu.
        Ke kiri menawarkan kenyamanan masa lalu,
        ke kanan membentang ketidakpastian yang abu-abu.
        
        Orang-orang berjalan tergesa di sekelilingku,
        masing-masing membawa peta dan tujuannya sendiri.
        Sementara aku masih sibuk bertanya pada sunyi,
        apakah langkah kaki ini sudah menapak bumi yang tepat.
        
        Kini kupahami, perjalanan hidup bukanlah balapan.
        Tersesat sesaat bukanlah akhir dari segalanya.
        Kadang kita perlu berhenti bernapas dalam-dalam,
        untuk menemukan arah yang sejati dari dalam diri.`
    },
    {
        id: 5,
        title: "Surat Cinta yang Terlambat Dikirim",
        date: "14 Februari 2026",
        excerpt: "Kutulis namamu pada lembar kertas usang yang kusimpan di laci paling bawah meja belajarku...",
        category: "romansa",
        readTime: "2 mnt membaca",
        body: `Kutulis namamu pada lembar kertas usang,
        lalu kusimpan di laci terdalam meja belajarku.
        Bersama debu dan rahasia-rahasia kecil,
        aksara ini diam-diam menua tanpa pernah kau sentuh.
        
        Ada kata-kata yang terlalu berat untuk diucapkan,
        ada rasa yang terlampau rapuh untuk ditunjukkan.
        Maka biarlah surat ini tetap tinggal di sini,
        sebagai monumen dari cinta yang tak sempat berkembang.
        
        Kau mungkin telah bahagia di pelukan orang lain,
        sementara surat ini masih setia menyimpan namamu.
        Menjadi bukti sunyi bahwa aku pernah mencintaimu,
        dengan cara yang paling hening yang kubisa.`
    },
    {
        id: 6,
        title: "Kita yang Berteduh di Bawah Kenangan",
        date: "05 Januari 2026",
        excerpt: "Saat sore merambat jingga, aku kembali melihat bayang kita berdiri tertawa di bawah halte halte tua...",
        category: "romansa",
        readTime: "3 mnt membaca",
        body: `Halte tua di sudut jalan itu masih sama,
        berdebu dan menyimpan bau tanah sehabis hujan.
        Di sanalah kita dulu sering berteduh,
        bukan hanya dari air langit, melainkan dari dinginnya dunia.
        
        Kita tertawa tentang hal-hari tak penting,
        saling berbagi jaket dan impian masa depan.
        Namun kini halte itu kosong,
        hanya ada aku dan kepulan napas dingin di udara.
        
        Kenangan ternyata menjadi atap yang rapuh.
        Ia bisa melindungi kita dari terik sesaat,
        namun tak mampu menahan derasnya kenyataan.
        Bahwa cerita kita telah usai, dan kita harus berjalan sendiri-sendiri.`
    }
];

// ==========================================
// State Management
// ==========================================

let currentFilter = 'all';
let searchQuery = '';

// Load favorite and published poems from localStorage
let favoritePoems = JSON.parse(localStorage.getItem('favorite_poems')) || [];
let customPublishedPoems = JSON.parse(localStorage.getItem('published_poems')) || [];
let drafts = JSON.parse(localStorage.getItem('venus_drafts')) || [];

let activeDrawerPoemId = null;
let currentDrawerFontSize = 1.3; // rem

// Active draft state variables
let activeDraftId = null;

// ==========================================
// Toast Notification Utility
// ==========================================

function showToast(message, icon = 'check') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    
    let svgIcon = '';
    if (icon === 'check') {
        svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
    } else if (icon === 'heart') {
        svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="#9c1c31" stroke="#9c1c31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`;
    } else if (icon === 'heart-broken') {
        svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`;
    }

    toast.innerHTML = `${svgIcon}<span>${message}</span>`;
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// ==========================================
// Fullscreen Intro Overlay (Venus)
// ==========================================

const introOverlay = document.getElementById('intro-overlay');

function handleIntroOverlay() {
    const introShown = sessionStorage.getItem('venus_intro_shown');
    
    if (introShown === 'true') {
        // Skip intro overlay immediately if already shown this session
        introOverlay.style.display = 'none';
        document.body.style.overflow = '';
    } else {
        // Block scrolling
        document.body.style.overflow = 'hidden';
        
        // Let it run for 3.2 seconds then hide
        setTimeout(() => {
            introOverlay.classList.add('hide');
            document.body.style.overflow = '';
            sessionStorage.setItem('venus_intro_shown', 'true');
            
            // Clean up DOM after slide up transition completes
            setTimeout(() => {
                introOverlay.style.display = 'none';
            }, 900);
        }, 3200);
    }
}

// ==========================================
// Quote Generator & Copy Logic
// ==========================================

let currentQuoteIndex = 0;
const quoteTextElement = document.getElementById('quote-text');
const quoteAuthorElement = document.getElementById('quote-author');
const btnNextQuote = document.getElementById('btn-next-quote');
const btnCopyQuote = document.getElementById('btn-copy-quote');

function loadQuote(index) {
    quoteTextElement.style.opacity = 0;
    quoteAuthorElement.style.opacity = 0;
    
    setTimeout(() => {
        quoteTextElement.textContent = quotes[index].text;
        quoteAuthorElement.textContent = `— ${quotes[index].author}`;
        quoteTextElement.style.opacity = 1;
        quoteAuthorElement.style.opacity = 1;
    }, 300);
}

btnNextQuote.addEventListener('click', () => {
    let nextIndex;
    do {
        nextIndex = Math.floor(Math.random() * quotes.length);
    } while (nextIndex === currentQuoteIndex && quotes.length > 1);
    
    currentQuoteIndex = nextIndex;
    loadQuote(currentQuoteIndex);
});

btnCopyQuote.addEventListener('click', () => {
    const textToCopy = `"${quotes[currentQuoteIndex].text}" ${quoteAuthorElement.textContent} | Venus Archive`;
    navigator.clipboard.writeText(textToCopy).then(() => {
        showToast("Kutipan berhasil disalin ke clipboard!");
    }).catch(err => {
        console.error("Gagal menyalin: ", err);
    });
});

// ==========================================
// Dynamic Background Glow System
// ==========================================

const bodyElement = document.body;
const themeIndicatorText = document.querySelector('#theme-indicator .badge-text');

function updateThemeGlow(filter) {
    bodyElement.classList.remove('theme-romansa', 'theme-perjalanan');
    
    if (filter === 'romansa') {
        bodyElement.classList.add('theme-romansa');
        themeIndicatorText.textContent = "Tema: Romansa";
    } else if (filter === 'perjalanan') {
        bodyElement.classList.add('theme-perjalanan');
        themeIndicatorText.textContent = "Tema: Perjalanan";
    } else {
        themeIndicatorText.textContent = "Tema: Sunyi";
    }
}

// ==========================================
// Poetry Gallery & Filtering Logic
// ==========================================

const poetryGrid = document.getElementById('poetry-grid');
const emptyState = document.getElementById('poetry-empty-state');
const searchInput = document.getElementById('search-input');
const filterPills = document.querySelectorAll('.filter-pill');

// Combine static pre-populated poems with any user-published ones
function getAllPoems() {
    return [...customPublishedPoems, ...defaultPoems];
}

function renderPoems() {
    poetryGrid.innerHTML = '';
    const allPoemsList = getAllPoems();
    
    const filtered = allPoemsList.filter(poem => {
        // Category filter
        if (currentFilter === 'perjalanan' && poem.category !== 'perjalanan') return false;
        if (currentFilter === 'romansa' && poem.category !== 'romansa') return false;
        if (currentFilter === 'favorit' && !favoritePoems.includes(poem.id)) return false;
        
        // Search query filter
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            const matchesTitle = poem.title.toLowerCase().includes(query);
            const matchesExcerpt = poem.excerpt.toLowerCase().includes(query);
            const matchesBody = poem.body.toLowerCase().includes(query);
            return matchesTitle || matchesExcerpt || matchesBody;
        }
        
        return true;
    });

    if (filtered.length === 0) {
        emptyState.style.display = 'flex';
        poetryGrid.style.display = 'none';
    } else {
        emptyState.style.display = 'none';
        poetryGrid.style.display = 'grid';
        
        filtered.forEach(poem => {
            const card = document.createElement('div');
            card.className = `poetry-card`;
            card.setAttribute('data-id', poem.id);
            card.onclick = () => openDrawer(poem.id);
            
            const categoryLabel = poem.category === 'romansa' ? 'Romansa' : 'Perjalanan Hidup';
            
            // Render specific banner cover based on category
            let coverSrc = 'assets/withered_rose.png'; // default
            if (poem.category === 'perjalanan') {
                coverSrc = 'assets/old_diaries.png';
            }
            
            card.innerHTML = `
                <div class="poetry-card-cover">
                    <img src="${coverSrc}" alt="${categoryLabel}">
                </div>
                <div class="poetry-card-content">
                    <div>
                        <div class="poetry-card-header">
                            <span class="poetry-card-date">${poem.date}</span>
                            <span class="poem-tag font-alt" style="margin-bottom: 0; padding: 0.25rem 0.6rem; font-size: 0.65rem;">${categoryLabel}</span>
                        </div>
                        <h3>${poem.title}</h3>
                        <p class="poetry-card-excerpt">${poem.excerpt}</p>
                    </div>
                    <div class="poetry-card-footer">
                        <span class="read-time font-alt">${poem.readTime}</span>
                        <span class="action-read-more">Baca Sajak ➔</span>
                    </div>
                </div>
            `;
            poetryGrid.appendChild(card);
        });
    }
}

// Search Input Listener
searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderPoems();
});

// Category Filters Tab Listener
filterPills.forEach(pill => {
    pill.addEventListener('click', (e) => {
        filterPills.forEach(p => {
            p.classList.remove('active');
            p.setAttribute('aria-selected', 'false');
        });
        pill.classList.add('active');
        pill.setAttribute('aria-selected', 'true');
        
        currentFilter = pill.getAttribute('data-filter');
        updateThemeGlow(currentFilter);
        renderPoems();
    });
});

// ==========================================
// Poetry Drafts Management ("Draf Catatan")
// ==========================================

const draftsListContainer = document.getElementById('drafts-list');
const btnNewDraft = document.getElementById('btn-new-draft');
const draftTitleInput = document.getElementById('draft-title-input');
const draftBodyInput = document.getElementById('draft-body-input');
const draftLastSavedLabel = document.getElementById('draft-last-saved');

const btnSaveDraft = document.getElementById('btn-save-draft');
const btnDeleteDraft = document.getElementById('btn-delete-draft');
const btnPublishDraft = document.getElementById('btn-publish-draft');

const publishModal = document.getElementById('publish-modal');
const btnCancelPublish = document.getElementById('btn-cancel-publish');
const publishCategoryButtons = document.querySelectorAll('.pub-opt-btn');

// Initial Draft Data Setup if Empty
function initDefaultDrafts() {
    if (drafts.length === 0) {
        drafts = [
            {
                id: 101,
                title: "Secangkir Sunyi & Secarik Kertas",
                body: `Kutulis ini di kala malam semakin larut,
menatap mawar merah di meja yang kelopaknya mulai layu berguguran.
Ada keindahan yang aneh tentang bagaimana ia hancur dalam sepi.
Sama seperti kisah kita yang runtuh tanpa suara.

Di atas meja ini, 
buku diary usangku terbuka lebar,
menunggu tintaku berdamai dengan masa lalu.`,
                date: "28 Juni 2026"
            },
            {
                id: 102,
                title: "Langkah Kaki Berdebu",
                body: `Perjalanan hidup menuntunku ke arah yang salah,
atau mungkin ini adalah peta yang sengaja dipatahkan oleh semesta.
Buku harian lama berserakan di rak berdebu,
tiap halamannya berisi air mata yang kini telah mengering.

Aku melangkah lagi,
tidak terburu-buru,
menikmati sisa rintik rindu yang membasahi jaketku.`,
                date: "15 Juni 2026"
            }
        ];
        localStorage.setItem('venus_drafts', JSON.stringify(drafts));
    }
}

function renderDraftsList() {
    draftsListContainer.innerHTML = '';
    
    if (drafts.length === 0) {
        draftsListContainer.innerHTML = `<span class="draft-timestamp" style="text-align:center; padding: 2rem 0; display:block;">Tidak ada draf tulisan.</span>`;
        return;
    }
    
    drafts.forEach(draft => {
        const item = document.createElement('div');
        item.className = `draft-item ${draft.id === activeDraftId ? 'active' : ''}`;
        item.onclick = () => selectDraft(draft.id);
        
        const rawBodyExcerpt = draft.body.split('\n')[0] || "Draf kosong...";
        
        item.innerHTML = `
            <span class="draft-item-title">${draft.title || 'Draf Tanpa Judul'}</span>
            <span class="draft-item-excerpt">${rawBodyExcerpt}</span>
            <span class="draft-item-date">${draft.date}</span>
        `;
        draftsListContainer.appendChild(item);
    });
}

function selectDraft(id) {
    activeDraftId = id;
    const draft = drafts.find(d => d.id === id);
    if (!draft) return;
    
    // Enable inputs
    draftTitleInput.removeAttribute('disabled');
    draftBodyInput.removeAttribute('disabled');
    btnSaveDraft.removeAttribute('disabled');
    btnDeleteDraft.removeAttribute('disabled');
    btnPublishDraft.removeAttribute('disabled');
    
    // Fill inputs
    draftTitleInput.value = draft.title;
    draftBodyInput.value = draft.body;
    draftLastSavedLabel.textContent = `Terakhir disunting: ${draft.date}`;
    
    renderDraftsList(); // highlight active item
}

// Generate human readable date
function getFormattedDate() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('id-ID', options);
}

// Action: Create New Empty Draft
btnNewDraft.addEventListener('click', () => {
    const newDraft = {
        id: Date.now(),
        title: "Draf Baru Venus",
        body: "",
        date: getFormattedDate()
    };
    
    drafts.unshift(newDraft);
    localStorage.setItem('venus_drafts', JSON.stringify(drafts));
    
    activeDraftId = newDraft.id;
    renderDraftsList();
    selectDraft(newDraft.id);
    
    draftTitleInput.focus();
    showToast("Draf baru berhasil dibuat!");
});

// Action: Save Active Draft
btnSaveDraft.addEventListener('click', () => {
    if (!activeDraftId) return;
    
    const draft = drafts.find(d => d.id === activeDraftId);
    if (draft) {
        draft.title = draftTitleInput.value.trim() || "Draf Tanpa Judul";
        draft.body = draftBodyInput.value;
        draft.date = getFormattedDate();
        
        localStorage.setItem('venus_drafts', JSON.stringify(drafts));
        draftLastSavedLabel.textContent = `Terakhir disunting: ${draft.date}`;
        
        renderDraftsList();
        showToast("Draf tersimpan di penyimpanan lokal.");
    }
});

// Action: Delete Active Draft
btnDeleteDraft.addEventListener('click', () => {
    if (!activeDraftId) return;
    
    const index = drafts.findIndex(d => d.id === activeDraftId);
    if (index > -1) {
        drafts.splice(index, 1);
        localStorage.setItem('venus_drafts', JSON.stringify(drafts));
        
        // Reset Editor
        activeDraftId = null;
        draftTitleInput.value = '';
        draftBodyInput.value = '';
        draftLastSavedLabel.textContent = 'Pilih atau buat draf baru';
        
        draftTitleInput.setAttribute('disabled', 'true');
        draftBodyInput.setAttribute('disabled', 'true');
        btnSaveDraft.setAttribute('disabled', 'true');
        btnDeleteDraft.setAttribute('disabled', 'true');
        btnPublishDraft.setAttribute('disabled', 'true');
        
        renderDraftsList();
        showToast("Draf tulisan berhasil dihapus.");
    }
});

// ==========================================
// Draft Publishing Workflow (Siarkan Karya)
// ==========================================

btnPublishDraft.addEventListener('click', () => {
    if (!activeDraftId) return;
    
    // Auto-save draft content first
    const draft = drafts.find(d => d.id === activeDraftId);
    if (draft) {
        draft.title = draftTitleInput.value.trim() || "Draf Tanpa Judul";
        draft.body = draftBodyInput.value;
        draft.date = getFormattedDate();
        localStorage.setItem('venus_drafts', JSON.stringify(drafts));
    }
    
    // Open publication modal to choose category
    publishModal.style.display = 'flex';
    publishModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
});

btnCancelPublish.addEventListener('click', () => {
    publishModal.style.display = 'none';
    publishModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';
});

// Category Click inside Publish Modal -> Triggers Publish
publishCategoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-category'); // "romansa" or "perjalanan"
        publishCurrentDraft(category);
    });
});

function publishCurrentDraft(category) {
    const draft = drafts.find(d => d.id === activeDraftId);
    if (!draft) return;
    
    // Calculate reading time
    const wordCount = draft.body.split(/\s+/).filter(w => w.length > 0).length;
    const calcMinutes = Math.ceil(wordCount / 140) || 1;
    const readTimeLabel = `${calcMinutes} mnt membaca`;
    
    // Create new published poem object
    const newPoem = {
        id: Date.now(), // unique ID
        title: draft.title,
        date: getFormattedDate(),
        excerpt: draft.body.split('\n').filter(line => line.trim().length > 0)[0]?.substring(0, 100) + '...' || 'Membaca sajak baru...',
        category: category,
        readTime: readTimeLabel,
        body: draft.body
    };
    
    // Add to custom published poems
    customPublishedPoems.unshift(newPoem);
    localStorage.setItem('published_poems', JSON.stringify(customPublishedPoems));
    
    // Delete from drafts list
    drafts = drafts.filter(d => d.id !== activeDraftId);
    localStorage.setItem('venus_drafts', JSON.stringify(drafts));
    
    // Reset editor inputs
    activeDraftId = null;
    draftTitleInput.value = '';
    draftBodyInput.value = '';
    draftLastSavedLabel.textContent = 'Pilih atau buat draf baru';
    
    draftTitleInput.setAttribute('disabled', 'true');
    draftBodyInput.setAttribute('disabled', 'true');
    btnSaveDraft.setAttribute('disabled', 'true');
    btnDeleteDraft.setAttribute('disabled', 'true');
    btnPublishDraft.setAttribute('disabled', 'true');
    
    // Close modal
    publishModal.style.display = 'none';
    publishModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';
    
    // Refresh lists and grids
    renderDraftsList();
    renderPoems();
    
    showToast("Karya berhasil dipublikasikan ke Antologi!", "check");
    
    // Smooth scroll to Poetry section so user can see it!
    setTimeout(() => {
        document.getElementById('puisi').scrollIntoView({ behavior: 'smooth' });
    }, 500);
}

// ==========================================
// Poetry Card Creator Canvas ("Coretan Rasa")
// ==========================================

const canvasTextArea = document.getElementById('canvas-text');
const canvasAuthorInput = document.getElementById('canvas-author');
const cardPreview = document.getElementById('sajak-card-preview');
const themeBtns = document.querySelectorAll('.theme-btn');
const btnExport = document.getElementById('btn-export-canvas');

let activeCanvasTheme = 'theme-sunset';

// Switch themes for canvas
themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        themeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const selectedTheme = btn.getAttribute('data-theme');
        cardPreview.className = `sajak-card-canvas ${selectedTheme}`;
        activeCanvasTheme = selectedTheme;
    });
});

// Auto size textarea inside card creator
canvasTextArea.addEventListener('input', () => {
    canvasTextArea.style.height = 'auto';
    canvasTextArea.style.height = (canvasTextArea.scrollHeight) + 'px';
});

// Canvas Draw & Export PNG (Maroon aesthetic exporter)
btnExport.addEventListener('click', () => {
    const textVal = canvasTextArea.value.trim() || canvasTextArea.placeholder;
    const authorVal = canvasAuthorInput.value.trim() || "Venus";
    
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 1000; 
    const ctx = canvas.getContext('2d');
    
    // Define Gothic Maroon Gradients based on themes
    let grad = ctx.createLinearGradient(0, 0, 800, 1000);
    let borderStroke = 'rgba(156, 28, 49, 0.12)';
    
    if (activeCanvasTheme === 'theme-sunset') {
        grad.addColorStop(0, '#1f0b0e');
        grad.addColorStop(0.4, '#2f0710');
        grad.addColorStop(1, '#0e0305');
        borderStroke = 'rgba(156, 28, 49, 0.25)';
    } else if (activeCanvasTheme === 'theme-midnight') {
        grad.addColorStop(0, '#090306');
        grad.addColorStop(0.5, '#17070b');
        grad.addColorStop(1, '#000000');
        borderStroke = 'rgba(156, 28, 49, 0.2)';
    } else if (activeCanvasTheme === 'theme-forest') {
        grad.addColorStop(0, '#0d0c0c');
        grad.addColorStop(0.5, '#1a080c');
        grad.addColorStop(1, '#000000');
        borderStroke = 'rgba(156, 28, 49, 0.2)';
    } else if (activeCanvasTheme === 'theme-rose') {
        grad.addColorStop(0, '#2b0409');
        grad.addColorStop(0.5, '#3d0710');
        grad.addColorStop(1, '#0c0003');
        borderStroke = 'rgba(255, 140, 130, 0.25)';
    }
    
    // Fill background
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw Noise Effect
    ctx.fillStyle = 'rgba(255, 255, 255, 0.02)';
    for (let i = 0; i < canvas.width; i += 3) {
        for (let j = 0; j < canvas.height; j += 3) {
            if (Math.random() > 0.5) {
                ctx.fillRect(i, j, 2, 2);
            }
        }
    }
    
    // Draw Glass inner frame
    ctx.strokeStyle = borderStroke;
    ctx.lineWidth = 1;
    ctx.strokeRect(40, 40, canvas.width - 80, canvas.height - 80);
    
    // Watermark
    ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
    ctx.font = 'bold 12px "Outfit", sans-serif';
    ctx.letterSpacing = '3px';
    ctx.textAlign = 'center';
    ctx.fillText("VENUS ARCHIVE", canvas.width / 2, 80);
    
    // Draw Quote Mark
    ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.font = 'italic 160px "Cormorant Garamond", Georgia, serif';
    ctx.textAlign = 'left';
    ctx.fillText("“", 80, 240);
    
    // Draw central text (word wrapping logic)
    ctx.fillStyle = '#ffffff';
    ctx.font = 'italic 34px "Cormorant Garamond", Georgia, serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    const lines = getLines(ctx, textVal, canvas.width - 180);
    const lineHeight = 55;
    const startY = (canvas.height / 2) - ((lines.length - 1) * lineHeight / 2);
    
    lines.forEach((line, i) => {
        ctx.fillText(line, canvas.width / 2, startY + (i * lineHeight));
    });
    
    // Draw Author
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.font = '14px "Outfit", sans-serif';
    ctx.letterSpacing = '2px';
    ctx.textAlign = 'center';
    ctx.fillText(`— ${authorVal.toUpperCase()}`, canvas.width / 2, canvas.height - 120);
    
    // Export and download
    try {
        const url = canvas.toDataURL("image/png");
        const a = document.createElement('a');
        a.download = `sajak-venus-${authorVal.toLowerCase().replace(/\s+/g, '-') || 'sunyi'}.png`;
        a.href = url;
        a.click();
        showToast("Kartu Sajak berhasil diunduh!");
    } catch (e) {
        console.error("Gagal melakukan export Canvas: ", e);
        showToast("Gagal mengunduh gambar.", "heart-broken");
    }
});

// Canvas Word Wrapping Helper
function getLines(ctx, text, maxWidth) {
    const paragraphs = text.split("\n");
    const lines = [];

    paragraphs.forEach(paragraph => {
        const words = paragraph.split(" ");
        if (words.length === 0 || (words.length === 1 && words[0] === "")) {
            lines.push("");
            return;
        }
        
        let currentLine = words[0];
        for (let i = 1; i < words.length; i++) {
            const word = words[i];
            const width = ctx.measureText(currentLine + " " + word).width;
            if (width < maxWidth) {
                currentLine += " " + word;
            } else {
                lines.push(currentLine);
                currentLine = word;
            }
        }
        lines.push(currentLine);
    });
    
    return lines;
}

// ==========================================
// Immersive Side-Drawer Reader
// ==========================================

const drawer = document.getElementById('poem-drawer');
const drawerCategory = document.getElementById('drawer-category');
const drawerDate = document.getElementById('drawer-date');
const drawerTitle = document.getElementById('drawer-title');
const drawerText = document.getElementById('drawer-text');
const btnFavoriteDrawer = document.getElementById('btn-favorite-drawer');
const btnCloseDrawer = document.getElementById('btn-close-drawer');
const btnIncreaseFont = document.getElementById('font-increase');
const btnDecreaseFont = document.getElementById('font-decrease');

function openDrawer(id) {
    const allPoemsList = getAllPoems();
    const poem = allPoemsList.find(p => p.id === id);
    if (!poem) return;
    
    // Record read metric & log activity
    if (typeof trackPoemRead === 'function') {
        trackPoemRead(poem);
    }
    
    activeDrawerPoemId = id;
    
    const isRomance = poem.category === 'romansa';
    drawerCategory.textContent = isRomance ? 'Romansa' : 'Perjalanan Hidup';
    drawerDate.textContent = poem.date;
    drawerTitle.textContent = poem.title;
    
    currentDrawerFontSize = 1.3;
    drawerText.style.fontSize = `${currentDrawerFontSize}rem`;
    
    drawerText.textContent = poem.body;
    
    if (favoritePoems.includes(id)) {
        btnFavoriteDrawer.classList.add('active');
        btnFavoriteDrawer.setAttribute('title', 'Hapus dari Favorit');
    } else {
        btnFavoriteDrawer.classList.remove('active');
        btnFavoriteDrawer.setAttribute('title', 'Tambahkan ke Favorit');
    }
    
    updateThemeGlow(poem.category);
    
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; 
}

function closeDrawer() {
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto'; 
    
    updateThemeGlow(currentFilter);
    activeDrawerPoemId = null;
}

btnCloseDrawer.addEventListener('click', closeDrawer);

drawer.addEventListener('click', (e) => {
    if (e.target === drawer) {
        closeDrawer();
    }
});

// Font Sizing logic
btnIncreaseFont.addEventListener('click', () => {
    if (currentDrawerFontSize < 1.9) {
        currentDrawerFontSize += 0.15;
        drawerText.style.fontSize = `${currentDrawerFontSize}rem`;
    }
});

btnDecreaseFont.addEventListener('click', () => {
    if (currentDrawerFontSize > 1.0) {
        currentDrawerFontSize -= 0.15;
        drawerText.style.fontSize = `${currentDrawerFontSize}rem`;
    }
});

// Favorite Toggle logic
btnFavoriteDrawer.addEventListener('click', () => {
    if (!activeDrawerPoemId) return;
    
    const index = favoritePoems.indexOf(activeDrawerPoemId);
    if (index > -1) {
        favoritePoems.splice(index, 1);
        btnFavoriteDrawer.classList.remove('active');
        btnFavoriteDrawer.setAttribute('title', 'Tambahkan ke Favorit');
        showToast("Sajak dihapus dari favorit saya.", "heart-broken");
    } else {
        favoritePoems.push(activeDrawerPoemId);
        btnFavoriteDrawer.classList.add('active');
        btnFavoriteDrawer.setAttribute('title', 'Hapus dari Favorit');
        showToast("Sajak disimpan ke favorit!", "heart");
    }
    
    localStorage.setItem('favorite_poems', JSON.stringify(favoritePoems));
    renderPoems(); 
});

// ==========================================
// Web Audio API Rain & Wind Synthesizer
// ==========================================

let audioCtx = null;
let rainNode = null;
let windNode = null;
let windLfo = null;
let mainVolumeNode = null;
let isAudioPlaying = false;

const btnToggleSound = document.getElementById('btn-toggle-sound');
const soundStatus = document.getElementById('sound-status');
const soundVolume = document.getElementById('sound-volume');
const soundControlPanel = document.querySelector('.sound-control-panel');
const playSvg = document.querySelector('.sound-icon-play');
const pauseSvg = document.querySelector('.sound-icon-pause');

function initRainSynth() {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    
    mainVolumeNode = audioCtx.createGain();
    mainVolumeNode.gain.setValueAtTime(soundVolume.value, audioCtx.currentTime);
    mainVolumeNode.connect(audioCtx.destination);
    
    // --- 1. Rain Synthesizer Node (White noise + bandpass filter) ---
    const bufferSize = 2 * audioCtx.sampleRate;
    const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
    }
    
    rainNode = audioCtx.createBufferSource();
    rainNode.buffer = noiseBuffer;
    rainNode.loop = true;
    
    const rainFilter = audioCtx.createBiquadFilter();
    rainFilter.type = 'lowpass';
    rainFilter.frequency.value = 1200; 
    
    const rainGain = audioCtx.createGain();
    rainGain.gain.value = 0.45; 
    
    rainNode.connect(rainFilter);
    rainFilter.connect(rainGain);
    rainGain.connect(mainVolumeNode);
    
    // --- 2. Wind Synthesizer Node (Brownish noise + oscillating bandpass sweep) ---
    const windBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const windOutput = windBuffer.getChannelData(0);
    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        windOutput[i] = (lastOut + (0.02 * white)) / 1.02;
        lastOut = windOutput[i];
        windOutput[i] *= 3.5; 
    }
    
    windNode = audioCtx.createBufferSource();
    windNode.buffer = windBuffer;
    windNode.loop = true;
    
    const windFilter = audioCtx.createBiquadFilter();
    windFilter.type = 'bandpass';
    windFilter.frequency.value = 250;
    windFilter.Q.value = 1.8;
    
    const windGain = audioCtx.createGain();
    windGain.gain.value = 0.25;
    
    windLfo = audioCtx.createOscillator();
    windLfo.frequency.value = 0.08; 
    
    const windLfoGain = audioCtx.createGain();
    windLfoGain.gain.value = 120; 
    
    windLfo.connect(windLfoGain);
    windLfoGain.connect(windFilter.frequency);
    
    windNode.connect(windFilter);
    windFilter.connect(windGain);
    windGain.connect(mainVolumeNode);
}

function startRainSynth() {
    if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
        playRainSources();
        return;
    }
    
    initRainSynth();
    playRainSources();
}

function playRainSources() {
    rainNode.start(0);
    windNode.start(0);
    windLfo.start(0);
    
    isAudioPlaying = true;
    soundStatus.textContent = "Aktif (Menemani Sunyi)";
    soundControlPanel.classList.add('playing');
    playSvg.style.display = 'none';
    pauseSvg.style.display = 'block';
}

function stopRainSynth() {
    if (audioCtx) {
        try {
            rainNode.stop();
            windNode.stop();
            windLfo.stop();
        } catch (e) {
            // Already stopped or not started
        }
        audioCtx.close();
        audioCtx = null;
    }
    
    isAudioPlaying = false;
    soundStatus.textContent = "Nonaktif";
    soundControlPanel.classList.remove('playing');
    playSvg.style.display = 'block';
    pauseSvg.style.display = 'none';
}

btnToggleSound.addEventListener('click', () => {
    if (!isAudioPlaying) {
        startRainSynth();
    } else {
        stopRainSynth();
    }
});

soundVolume.addEventListener('input', (e) => {
    const volume = parseFloat(e.target.value);
    if (mainVolumeNode && audioCtx) {
        mainVolumeNode.gain.setValueAtTime(volume, audioCtx.currentTime);
    }
});

// ==========================================
// Admin Mode & Security Analytics System
// ==========================================

let isAdmin = false;
let failCount = 0;
let lockoutEndTime = 0;
let lockoutTimer = null;
let lastActivityTime = Date.now();
let autolockInterval = null;
let trafficSimulationInterval = null;

let wizardCurrentStep = 1;
let wizardInputPIN = "";
let authInputPIN = "";

const securityQuestions = {
    first_pen: "Siapa nama pena pertama Anda?",
    memorable_city: "Kota mana yang menyimpan kenangan romansa terdalam?",
    favorite_poem: "Karya penyair favorit Anda selain Venus?",
    childhood_street: "Apa nama jalan tempat tinggal Anda saat kecil?"
};

// --- 1. Visitor Stats Initialization & Logging ---

function initVisitorStats() {
    // Simulated base stats if empty
    if (!localStorage.getItem('total_visitors')) {
        localStorage.setItem('total_visitors', '142');
    }
    
    const allPoems = getAllPoems();
    allPoems.forEach(poem => {
        const readsKey = `poem_reads_${poem.id}`;
        if (!localStorage.getItem(readsKey)) {
            // Seed default mock read counts to look realistic
            const mockReads = {
                1: 76, // Menemukanmu di Batas Mimpi
                2: 54, // Secangkir Kopi dan Kepergian
                3: 41, // Sajak Hujan di Bulan April
                4: 38, // Catatan di Persimpangan Jalan
                5: 68, // Surat Cinta yang Terlambat Dikirim
                6: 49  // Kita yang Berteduh di Bawah Kenangan
            };
            localStorage.setItem(readsKey, (mockReads[poem.id] || 15).toString());
        }
    });

    if (!localStorage.getItem('total_reads')) {
        // Calculate initial sum
        let sum = 0;
        allPoems.forEach(poem => {
            sum += parseInt(localStorage.getItem(`poem_reads_${poem.id}`)) || 0;
        });
        localStorage.setItem('total_reads', sum.toString());
    }

    // Increment visitor count on page load
    let visitors = parseInt(localStorage.getItem('total_visitors')) || 142;
    visitors++;
    localStorage.setItem('total_visitors', visitors.toString());

    // Log initial visitor
    logVisitorActivity("Seorang pengunjung membuka beranda arsip sunyi Venus.");
}

function trackPoemRead(poem) {
    const readsKey = `poem_reads_${poem.id}`;
    let reads = parseInt(localStorage.getItem(readsKey)) || 0;
    reads++;
    localStorage.setItem(readsKey, reads.toString());

    let totalReads = parseInt(localStorage.getItem('total_reads')) || 0;
    totalReads++;
    localStorage.setItem('total_reads', totalReads.toString());

    logVisitorActivity(`Seorang pengunjung mulai membaca sajak: "${poem.title}".`);

    if (isAdmin) {
        updateDashboardStats();
    }
}

function logVisitorActivity(message) {
    let logs = JSON.parse(localStorage.getItem('venus_visitor_logs')) || [];
    const timestamp = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    logs.push({ time: timestamp, text: message });
    
    // Keep only last 40 entries
    if (logs.length > 40) {
        logs.shift();
    }
    
    localStorage.setItem('venus_visitor_logs', JSON.stringify(logs));
    
    if (isAdmin) {
        updateDashboardLogs();
    }
}

// --- 2. Dashboard Rendering Functions ---

function updateDashboardStats() {
    if (!isAdmin) return;

    // Load simple stats
    document.getElementById('stat-total-visitors').textContent = localStorage.getItem('total_visitors') || '0';
    document.getElementById('stat-total-reads').textContent = localStorage.getItem('total_reads') || '0';
    
    // Drafts count
    const draftsCount = drafts.length;
    document.getElementById('stat-total-drafts').textContent = draftsCount.toString();

    // Render popularity chart (CSS progress bars)
    const chartContainer = document.getElementById('popularity-chart-container');
    if (chartContainer) {
        chartContainer.innerHTML = '';
        const allPoems = getAllPoems();
        
        const readsData = allPoems.map(poem => {
            const reads = parseInt(localStorage.getItem(`poem_reads_${poem.id}`)) || 0;
            return { id: poem.id, title: poem.title, reads: reads };
        });

        // Find total reads for percentage calculation
        const sumReads = readsData.reduce((acc, curr) => acc + curr.reads, 0);

        readsData.forEach(item => {
            const pct = sumReads > 0 ? Math.round((item.reads / sumReads) * 100) : 0;
            const barHTML = `
                <div class="chart-bar-item">
                    <div class="chart-bar-labels">
                        <span class="chart-bar-title">${item.title}</span>
                        <span class="chart-bar-val">${item.reads} kali dibaca (${pct}%)</span>
                    </div>
                    <div class="chart-bar-bg">
                        <div class="chart-bar-fill" style="width: ${pct}%;"></div>
                    </div>
                </div>
            `;
            chartContainer.innerHTML += barHTML;
        });
    }
}

function updateDashboardLogs() {
    if (!isAdmin) return;
    
    const logContainer = document.getElementById('terminal-log');
    if (logContainer) {
        logContainer.innerHTML = '';
        const logs = JSON.parse(localStorage.getItem('venus_visitor_logs')) || [];
        
        if (logs.length === 0) {
            logContainer.innerHTML = '<span class="log-entry" style="color: var(--text-muted);">Belum ada log aktivitas tercatat...</span>';
            return;
        }

        logs.forEach(entry => {
            const entryHTML = `
                <div class="log-entry">
                    <span class="log-time">[${entry.time}]</span>
                    <span>${entry.text}</span>
                </div>
            `;
            logContainer.innerHTML += entryHTML;
        });

        // Auto-scroll to bottom of logs terminal
        logContainer.scrollTop = logContainer.scrollHeight;
    }
}

// --- 3. UI Visibility Controller ---

function updateUIVisibility() {
    const lockedCard = document.getElementById('drafts-locked-state');
    const workspace = document.querySelector('.drafts-workspace');
    const dashboard = document.getElementById('admin-dashboard');
    const navDraf = document.getElementById('nav-draf-link');
    const navDashboard = document.getElementById('nav-dashboard-link');

    const urlParams = new URLSearchParams(window.location.search);
    const hasAdminParam = urlParams.get('admin') === 'true' || window.location.hash === '#admin';
    const hasActiveSession = sessionStorage.getItem('venus_admin_session') === 'true';
    const isAdminRoute = hasAdminParam || hasActiveSession;

    if (isAdminRoute) {
        // Admin route is active (either via URL or active session)
        // Show navigation links
        if (navDraf) navDraf.style.display = 'inline-block';
        
        // Show drafts section
        const drafSection = document.getElementById('draf-section');
        if (drafSection) drafSection.style.display = 'block';

        if (isAdmin) {
            // Authenticated Admin
            if (navDashboard) navDashboard.style.display = 'inline-block';
            if (lockedCard) lockedCard.style.display = 'none';
            if (workspace) workspace.style.display = 'flex';
            if (dashboard) dashboard.style.display = 'block';

            // Update security status indicator
            const secStatus = document.getElementById('stat-security-status');
            if (secStatus) {
                secStatus.textContent = 'Terbuka (Sesi)';
                secStatus.style.color = '#ef4444';
            }

            // Update dashboard content
            updateDashboardStats();
            updateDashboardLogs();
        } else {
            // Admin Route but NOT authenticated yet
            if (navDashboard) navDashboard.style.display = 'none';
            if (lockedCard) lockedCard.style.display = 'block';
            if (workspace) workspace.style.display = 'none';
            if (dashboard) dashboard.style.display = 'none';
        }
    } else {
        // Standard Viewer Route (No admin params or active session)
        isAdmin = false;
        
        // Hide nav links
        if (navDraf) navDraf.style.display = 'none';
        if (navDashboard) navDashboard.style.display = 'none';
        
        // Hide sections
        const drafSection = document.getElementById('draf-section');
        if (drafSection) drafSection.style.display = 'none';
        if (dashboard) dashboard.style.display = 'none';
    }
}

// --- 4. Setup Wizard Controls ---

function openSecurityWizard() {
    wizardCurrentStep = 1;
    wizardInputPIN = "";
    document.getElementById('wizard-pin-input').value = "";
    document.getElementById('wizard-answer-input').value = "";
    document.getElementById('wizard-question-select').selectedIndex = 0;
    
    // Reset PIN dots
    const dots = document.querySelectorAll('#wizard-pin-display .pin-dot');
    dots.forEach(d => d.classList.remove('filled'));

    updateWizardStepUI();
    
    const wizardModal = document.getElementById('security-wizard-modal');
    wizardModal.style.display = 'flex';
    wizardModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function updateWizardStepUI() {
    const steps = document.querySelectorAll('.wizard-step');
    steps.forEach((s, idx) => {
        if (idx + 1 === wizardCurrentStep) {
            s.style.display = 'block';
            s.classList.add('active');
        } else {
            s.style.display = 'none';
            s.classList.remove('active');
        }
    });

    // Update Progress Bar
    const progressFill = document.getElementById('wizard-progress-fill');
    const indicator = document.getElementById('wizard-steps-indicator');
    const progressPercent = (wizardCurrentStep / 5) * 100;
    progressFill.style.width = `${progressPercent}%`;
    indicator.textContent = `Langkah ${wizardCurrentStep} dari 5`;

    // Handle button enable validations per step
    if (wizardCurrentStep === 2) {
        document.getElementById('btn-wizard-pin-next').disabled = wizardInputPIN.length !== 4;
    } else if (wizardCurrentStep === 3) {
        const ans = document.getElementById('wizard-answer-input').value.trim();
        document.getElementById('btn-wizard-question-next').disabled = ans === "";
    }
}

function handleWizardKeypadPress(val) {
    if (val === 'clear') {
        wizardInputPIN = "";
    } else if (val === 'delete') {
        wizardInputPIN = wizardInputPIN.slice(0, -1);
    } else if (wizardInputPIN.length < 4) {
        wizardInputPIN += val;
    }

    // Update Dots
    const dots = document.querySelectorAll('#wizard-pin-display .pin-dot');
    dots.forEach((dot, idx) => {
        if (idx < wizardInputPIN.length) {
            dot.classList.add('filled');
        } else {
            dot.classList.remove('filled');
        }
    });

    document.getElementById('btn-wizard-pin-next').disabled = wizardInputPIN.length !== 4;
}

function saveWizardConfiguration() {
    // Encrypt PIN simply with base64 for local storage aesthetics
    const encodedPIN = btoa(wizardInputPIN);
    localStorage.setItem('venus_admin_pin', encodedPIN);
    
    // Save recovery details
    const select = document.getElementById('wizard-question-select');
    localStorage.setItem('venus_recovery_question_key', select.value);
    localStorage.setItem('venus_recovery_question_text', securityQuestions[select.value]);
    localStorage.setItem('venus_recovery_answer', document.getElementById('wizard-answer-input').value.trim().toLowerCase());

    // Save configurations
    const autolock = document.getElementById('wizard-opt-autolock').checked;
    const simulation = document.getElementById('wizard-opt-simulation').checked;
    localStorage.setItem('venus_autolock', autolock.toString());
    localStorage.setItem('venus_simulation', simulation.toString());

    // Mark as configured
    localStorage.setItem('venus_admin_configured', 'true');

    logVisitorActivity("Perisai keamanan diaktifkan. Konfigurasi mitigasi awal selesai.");
}

// --- 5. PIN Authentication & Lockout ---

function openPinAuthModal() {
    authInputPIN = "";
    resetPinAuthDots();
    
    // Close recovery panel if open
    document.getElementById('recovery-panel').style.display = 'none';

    // Check Lockout
    const storedLockout = parseInt(localStorage.getItem('venus_lockout_end')) || 0;
    if (storedLockout > Date.now()) {
        lockoutEndTime = storedLockout;
        startLockoutCountdown();
    } else {
        document.getElementById('lockout-warning').style.display = 'none';
        enableAuthKeypad(true);
    }

    const modal = document.getElementById('pin-auth-modal');
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function resetPinAuthDots() {
    const dots = document.querySelectorAll('#auth-pin-display .pin-dot');
    dots.forEach(d => {
        d.classList.remove('filled');
        d.classList.remove('error');
    });
}

function handleAuthKeypadPress(val) {
    if (lockoutEndTime > Date.now()) return; // locked out

    if (val === 'clear') {
        authInputPIN = "";
    } else if (val === 'delete') {
        authInputPIN = authInputPIN.slice(0, -1);
    } else if (authInputPIN.length < 4) {
        authInputPIN += val;
    }

    // Update Dots
    const dots = document.querySelectorAll('#auth-pin-display .pin-dot');
    dots.forEach((dot, idx) => {
        if (idx < authInputPIN.length) {
            dot.classList.add('filled');
        } else {
            dot.classList.remove('filled');
        }
    });

    if (authInputPIN.length === 4) {
        // Trigger verification
        setTimeout(verifyPIN, 200);
    }
}

function verifyPIN() {
    const storedPINEncoded = localStorage.getItem('venus_admin_pin');
    const enteredPINEncoded = btoa(authInputPIN);

    if (storedPINEncoded === enteredPINEncoded) {
        // Auth Success!
        isAdmin = true;
        sessionStorage.setItem('venus_admin_session', 'true');
        failCount = 0;
        localStorage.removeItem('venus_lockout_end');
        
        closePinAuthModal();
        updateUIVisibility();
        showToast("Verifikasi berhasil! Selamat datang kembali, Venus.", "check");
        logVisitorActivity("Admin berhasil masuk melalui verifikasi PIN.");
        
        // Reset activity timer
        lastActivityTime = Date.now();
        restartSimulationAndAutolock();
    } else {
        // Auth Failed
        failCount++;
        authInputPIN = "";
        
        const dots = document.querySelectorAll('#auth-pin-display .pin-dot');
        dots.forEach(d => {
            d.classList.remove('filled');
            d.classList.add('error');
        });

        showToast("Kode PIN salah. Akses ditolak!", "heart-broken");
        logVisitorActivity(`Kegagalan otorisasi PIN admin (Percobaan #${failCount}).`);

        setTimeout(resetPinAuthDots, 600);

        if (failCount >= 3) {
            // Trigger Lockout
            lockoutEndTime = Date.now() + 30000; // 30 seconds
            localStorage.setItem('venus_lockout_end', lockoutEndTime.toString());
            failCount = 0;
            startLockoutCountdown();
        }
    }
}

function startLockoutCountdown() {
    enableAuthKeypad(false);
    const warning = document.getElementById('lockout-warning');
    const countdown = document.getElementById('lockout-countdown');
    warning.style.display = 'block';

    if (lockoutTimer) clearInterval(lockoutTimer);
    
    lockoutTimer = setInterval(() => {
        const remaining = Math.ceil((lockoutEndTime - Date.now()) / 1000);
        if (remaining <= 0) {
            clearInterval(lockoutTimer);
            lockoutEndTime = 0;
            localStorage.removeItem('venus_lockout_end');
            warning.style.display = 'none';
            enableAuthKeypad(true);
            showToast("Sistem tidak terkunci. Silakan coba kembali.");
        } else {
            countdown.textContent = remaining.toString();
        }
    }, 1000);
}

function enableAuthKeypad(enable) {
    const btns = document.querySelectorAll('#auth-keypad .key-btn');
    btns.forEach(b => b.disabled = !enable);
}

function closePinAuthModal() {
    const modal = document.getElementById('pin-auth-modal');
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';
    if (lockoutTimer) clearInterval(lockoutTimer);
}

// --- 6. PIN Recovery Questions ---

function showRecoveryPanel() {
    const panel = document.getElementById('recovery-panel');
    const label = document.getElementById('recovery-question-label');
    const questionText = localStorage.getItem('venus_recovery_question_text') || "Siapa nama pena pertama Anda?";
    
    label.textContent = `Pertanyaan: ${questionText}`;
    document.getElementById('recovery-answer-input').value = "";
    panel.style.display = 'block';
    
    // Smooth scroll inside modal if needed
    panel.scrollIntoView({ behavior: 'smooth' });
}

function submitRecoveryAnswer() {
    const entered = document.getElementById('recovery-answer-input').value.trim().toLowerCase();
    const stored = localStorage.getItem('venus_recovery_answer') || "";

    if (entered === stored && stored !== "") {
        // Recovery success!
        isAdmin = true;
        sessionStorage.setItem('venus_admin_session', 'true');
        closePinAuthModal();
        updateUIVisibility();
        
        showToast("Jawaban pemulihan benar! Otoritas admin diberikan. Silakan setel ulang PIN Anda.", "check");
        logVisitorActivity("Admin masuk melewati PIN menggunakan jawaban pertanyaan keamanan.");
        
        // Auto trigger PIN reset screen
        setTimeout(() => {
            triggerPINReset();
        }, 1000);
    } else {
        showToast("Jawaban pemulihan salah! Akses ditolak.", "heart-broken");
        logVisitorActivity("Percobaan gagal memulihkan akses dengan pertanyaan keamanan.");
    }
}

function triggerPINReset() {
    // Open Security Wizard directly at Step 2 to rewrite PIN
    wizardCurrentStep = 2;
    wizardInputPIN = "";
    
    const dots = document.querySelectorAll('#wizard-pin-display .pin-dot');
    dots.forEach(d => d.classList.remove('filled'));
    
    updateWizardStepUI();
    
    const wizardModal = document.getElementById('security-wizard-modal');
    wizardModal.style.display = 'flex';
    wizardModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Customize wizard navigation for reset context (directly skip to step 5 on finish)
    const completeBtn = document.getElementById('btn-wizard-complete');
    const nextBtn = document.getElementById('btn-wizard-pin-next');
    
    // Override next button temporarily for reset mode
    const origNextClick = nextBtn.onclick;
    nextBtn.onclick = () => {
        const encodedPIN = btoa(wizardInputPIN);
        localStorage.setItem('venus_admin_pin', encodedPIN);
        
        // Go directly to step 5 (Finished)
        wizardCurrentStep = 5;
        updateWizardStepUI();
    };
    
    // Restore normal flow when wizard completes
    const origCompleteClick = completeBtn.onclick;
    completeBtn.onclick = () => {
        // Restore buttons
        nextBtn.onclick = origNextClick;
        completeBtn.onclick = origCompleteClick;
        
        wizardModal.style.display = 'none';
        wizardModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = 'auto';
        
        showToast("Kode PIN baru berhasil disimpan!", "check");
        logVisitorActivity("PIN Keamanan Admin diatur ulang.");
        updateUIVisibility();
    };
}

// --- 7. Auto-Lock & Mock Traffic Simulator timers ---

function restartSimulationAndAutolock() {
    // Autolock tracker
    if (autolockInterval) clearInterval(autolockInterval);
    const autolockActive = localStorage.getItem('venus_autolock') !== 'false';
    if (autolockActive) {
        autolockInterval = setInterval(() => {
            if (isAdmin && (Date.now() - lastActivityTime > 300000)) { // 5 minutes
                isAdmin = false;
                sessionStorage.removeItem('venus_admin_session');
                updateUIVisibility();
                showToast("Sesi Admin terkunci otomatis karena tidak ada aktivitas.", "heart-broken");
                logVisitorActivity("Sesi administrator terkunci otomatis (timeout 5 menit).");
                setTimeout(() => {
                    window.location.href = window.location.pathname;
                }, 1500);
            }
        }, 15000); // Check every 15s
    }

    // Mock Traffic Generator
    if (trafficSimulationInterval) clearInterval(trafficSimulationInterval);
    const simActive = localStorage.getItem('venus_simulation') !== 'false';
    if (simActive) {
        trafficSimulationInterval = setInterval(() => {
            // Only simulate if user is active/page is visible, or simulate background
            runMockTrafficSimulation();
        }, 40000); // Every 40 seconds
    }
}

function runMockTrafficSimulation() {
    const mockLocations = ["Jakarta", "Bandung", "Surabaya", "Medan", "Yogyakarta", "Semarang", "Makassar", "Denpasar", "Bogor", "Malang"];
    const loc = mockLocations[Math.floor(Math.random() * mockLocations.length)];
    
    const roll = Math.random();
    if (roll < 0.3) {
        // Increment visitor count
        let visitors = parseInt(localStorage.getItem('total_visitors')) || 142;
        visitors += Math.floor(Math.random() * 2) + 1;
        localStorage.setItem('total_visitors', visitors.toString());
        
        logVisitorActivity(`Pengunjung baru dari ${loc} membuka beranda arsip.`);
    } else if (roll < 0.85) {
        // Reading a poem
        const allPoems = getAllPoems();
        const poem = allPoems[Math.floor(Math.random() * allPoems.length)];
        
        const readsKey = `poem_reads_${poem.id}`;
        let reads = parseInt(localStorage.getItem(readsKey)) || 0;
        reads++;
        localStorage.setItem(readsKey, reads.toString());

        let totalReads = parseInt(localStorage.getItem('total_reads')) || 0;
        totalReads++;
        localStorage.setItem('total_reads', totalReads.toString());
        
        logVisitorActivity(`Seseorang di ${loc} mulai membaca sajak: "${poem.title}".`);
    } else {
        // Copy daily quote
        logVisitorActivity(`Seseorang di ${loc} menyalin kutipan harian.`);
    }

    if (isAdmin) {
        updateDashboardStats();
    }
}

// --- 8. Application Initializer Hook ---

document.addEventListener('DOMContentLoaded', () => {
    // Intro overlay handler
    handleIntroOverlay();
    
    // Initial content loads
    loadQuote(currentQuoteIndex);
    initDefaultDrafts();
    renderDraftsList();
    renderPoems();
    
    // Initialize visitor analytics
    initVisitorStats();

    // Set role visibility on start based on URL parameters and active session storage
    const urlParams = new URLSearchParams(window.location.search);
    const hasAdminParam = urlParams.get('admin') === 'true' || window.location.hash === '#admin';
    const hasActiveSession = sessionStorage.getItem('venus_admin_session') === 'true';
    
    if (hasActiveSession) {
        isAdmin = true;
    }
    
    updateUIVisibility();
    restartSimulationAndAutolock();

    // Auto-prompt login if admin parameter is set but not logged in
    if (hasAdminParam && !isAdmin) {
        const configured = localStorage.getItem('venus_admin_configured') === 'true';
        if (!configured) {
            openSecurityWizard();
        } else {
            openPinAuthModal();
        }
    }

    // Set active link highlighting on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    window.addEventListener('scroll', () => {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= (sectionTop - 180)) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === currentSection) {
                link.classList.add('active');
            }
        });
    });

    // --- Setup DOM event bindings for Admin and Wizard features ---

    // Record last activity on interaction
    const recordActivity = () => { lastActivityTime = Date.now(); };
    window.addEventListener('mousemove', recordActivity);
    window.addEventListener('keypress', recordActivity);
    window.addEventListener('click', recordActivity);

    // Optional Role switcher in Header (safe wrapped if button exists)
    const adminToggleBtn = document.getElementById('btn-admin-toggle');
    if (adminToggleBtn) {
        adminToggleBtn.addEventListener('click', () => {
            if (isAdmin) {
                // Log out
                isAdmin = false;
                sessionStorage.removeItem('venus_admin_session');
                updateUIVisibility();
                showToast("Keluar dari Mode Admin. Menjadi Viewer kembali.");
                logVisitorActivity("Admin keluar secara manual.");
                setTimeout(() => {
                    window.location.href = window.location.pathname;
                }, 800);
            } else {
                // Check setup
                const configured = localStorage.getItem('venus_admin_configured') === 'true';
                if (!configured) {
                    openSecurityWizard();
                } else {
                    openPinAuthModal();
                }
            }
        });
    }

    // Lock Screen "Masuk Sebagai Admin" button
    document.getElementById('btn-unlock-drafts').addEventListener('click', () => {
        const configured = localStorage.getItem('venus_admin_configured') === 'true';
        if (!configured) {
            openSecurityWizard();
        } else {
            openPinAuthModal();
        }
    });

    // --- Wizard Setup Buttons Event Listeners ---

    const wizardModal = document.getElementById('security-wizard-modal');
    
    // Next Step buttons
    wizardModal.querySelectorAll('.btn-next-step').forEach(btn => {
        btn.addEventListener('click', () => {
            if (wizardCurrentStep === 2) {
                if (wizardInputPIN.length !== 4) return;
            } else if (wizardCurrentStep === 3) {
                const ans = document.getElementById('wizard-answer-input').value.trim();
                if (ans === "") return;
            }

            if (wizardCurrentStep === 4) {
                saveWizardConfiguration();
            }

            wizardCurrentStep++;
            updateWizardStepUI();
        });
    });

    // Prev Step buttons
    wizardModal.querySelectorAll('.btn-prev-step').forEach(btn => {
        btn.addEventListener('click', () => {
            if (wizardCurrentStep > 1) {
                wizardCurrentStep--;
                updateWizardStepUI();
            }
        });
    });

    // Wizard Custom Keypad Click
    document.querySelectorAll('#wizard-keypad .key-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const val = e.currentTarget.getAttribute('data-val');
            handleWizardKeypadPress(val);
        });
    });

    // Wizard Step 3 Answer text validation
    document.getElementById('wizard-answer-input').addEventListener('input', () => {
        updateWizardStepUI();
    });

    // Wizard Complete Finish Button
    document.getElementById('btn-wizard-complete').addEventListener('click', () => {
        wizardModal.style.display = 'none';
        wizardModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = 'auto';

        isAdmin = true;
        sessionStorage.setItem('venus_admin_session', 'true');
        updateUIVisibility();
        showToast("Otoritas Admin aktif. Selamat berkarya!", "check");
        restartSimulationAndAutolock();
    });

    // --- Auth PIN Modal Event Listeners ---

    document.getElementById('btn-close-pin-modal').addEventListener('click', () => {
        closePinAuthModal();
    });

    // Keypad Click inside auth PIN dialog
    document.querySelectorAll('#auth-keypad .key-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const val = e.currentTarget.getAttribute('data-val');
            handleAuthKeypadPress(val);
        });
    });

    // Forget PIN Panel
    document.getElementById('btn-forget-pin').addEventListener('click', () => {
        showRecoveryPanel();
    });

    document.getElementById('btn-cancel-recovery').addEventListener('click', () => {
        document.getElementById('recovery-panel').style.display = 'none';
    });

    document.getElementById('btn-submit-recovery').addEventListener('click', () => {
        submitRecoveryAnswer();
    });

    // --- Admin Dashboard Actions Event Listeners ---

    // Reset PIN
    document.getElementById('btn-reset-pin').addEventListener('click', () => {
        triggerPINReset();
    });

    // Clear logs
    document.getElementById('btn-clear-logs').addEventListener('click', () => {
        localStorage.setItem('venus_visitor_logs', JSON.stringify([]));
        updateDashboardLogs();
        showToast("Log aktivitas dibersihkan.");
    });

    // Logout
    document.getElementById('btn-admin-logout').addEventListener('click', () => {
        isAdmin = false;
        sessionStorage.removeItem('venus_admin_session');
        updateUIVisibility();
        showToast("Sesi Admin ditutup. Mengalihkan ke mode Viewer...");
        logVisitorActivity("Admin keluar dari dashboard.");
        setTimeout(() => {
            window.location.href = window.location.pathname;
        }, 800);
    });

    // Simulate traffic trigger
    document.getElementById('btn-simulate-traffic').addEventListener('click', () => {
        runMockTrafficSimulation();
        showToast("Simulasi trafik berhasil dipicu!", "check");
    });
});

