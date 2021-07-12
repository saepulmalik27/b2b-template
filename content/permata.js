
import hero from 'src/images/illu/hero_section_plw.png';
import plw_logo from 'src/images/illu/plw_logo.png';
import askSpeaker from 'src/images/illu/ask_speaker_plw.png'
import virtualBackground from 'src/images/illu/virtual_background_plw.png'
import podcast from 'src/images/illu/podcast_plw.png'
import photobooth1 from 'src/images/illu/photobooth_1_plw.png'
import photobooth2 from 'src/images/illu/photobooth_2_plw.png'

import event_030821_1_plw from 'src/images/illu/event/event_030821_1_plw.png'
import event_030821_2_plw from 'src/images/illu/event/event_030821_2_plw.png'
import event_030821_3_plw from 'src/images/illu/event/event_030821_3_plw.png'
import event_030821_4_plw from 'src/images/illu/event/event_030821_4_plw.png'
import event_040821_1_plw from 'src/images/illu/event/event_040821_1_plw.png'
import event_040821_2_plw from 'src/images/illu/event/event_040821_2_plw.png'
import event_040821_3_plw from 'src/images/illu/event/event_040821_3_plw.png'
import event_040821_4_plw from 'src/images/illu/event/event_040821_4_plw.png'
import event_050821_1_plw from 'src/images/illu/event/event_050821_1_plw.png'
import event_050821_2_plw from 'src/images/illu/event/event_050821_2_plw.png'
import event_050821_3_plw from 'src/images/illu/event/event_050821_3_plw.png'
import event_050821_4_plw from 'src/images/illu/event/event_050821_4_plw.png'
import event_050821_5_plw from 'src/images/illu/event/event_050821_5_plw.png'
import event_050821_6_plw from 'src/images/illu/event/event_050821_6_plw.png'

export const permata =  {
        "navigation": [
          { "title": "About", "id": "about" },
          { "title": "Ask Speaker", "id": "askSpeaker" },
          { "title": "Schedule", "id": "schedule" },
          {"title" : "Podcast", "id" : "podcastRecomandation"},
          { "title": "Virtual Background", "id": "virtualBackground" },
          { "title": "Photobooth", "id": "virtualPhotobooth" },
          { "title": "FAQ", "id": "faq" }
        ],
        "sections": [
          {
            "section": {
              "name": "hero",
              "component": "WithIllu"
            },
            "title": {
              "type": "image",
              "content": plw_logo
            },
            "description": "<p> Permata Virtual Learning Week, <br/> Save the date:  </p> <br/> <p> <b>3 - 5 Agustus 2021 | 09.15-17.00 WIB </b></p>",
            "src": hero,
            "cta": [
              {
                "title": "Daftar Session",
                "url": "https://form.typeform.com/to/o2Drpm5d?npk={{npk}}&name={{name}}&email={{email}}",
                "login": true
              }
            ]
          },
          {
            "section": {
              "name": "about",
              "component": "About"
            },
            "title": {
              "type": "text",
              "content": "Tentang Permata Virtual Learning Week",
              "style": "neon"
            },
            "description": "<p> Teknologi digital mendisrupsi banyak sektor bisnis, termasuk perbankan. Masa depan seolah-olah didefinisikan oleh dua opsi saja: untuk ikut mendisrupsi atau terdisrupsi. <br/><br/> Namun, di tengah dunia yang serba berubah, 'terlambat' jadi semakin dekat. Keputusan tak hanya harus tepat, tapi juga cepat. Pemenangnya tidak pula tetap, melihat skenario yang kian Volatile, Uncertain, Complex, dan Ambiguous kini. Satu hal yang pasti, di balik kejayaan manapun juga, peran Sumber Daya Manusia punya pengaruh besar. Mereka menciptakan satu perubahan untuk membuka lebih banyak pintu lainnya. <br/><br/> Permata Learning Week hadir untuk menyadarkan kembali kapabilitas dan kapasitas tiap insan PermataBank  agar siap bertempur dalam tiap agenda transformasi. Pertanyaannya adalah, kita sudah sampai mana? <br/><br/> Temukan jawabannya di tiap sesi menarik yang dihadirkan tahun ini. </p>",
            "align": "center"
          },
          {
            "section": {
              "name": "askSpeaker",
              "component": "WithIllu"
            },
            "title": { "type": "text", "content": "Ask Speaker", "style": "neon" },
            "description": "<p> Punya pertanyaan untuk para pembicara di Permata Learning Week 2021? Yuk langsung tanyakan sekarang! Pertanyaan yang terpilih akan dibacakan pada saat rangkaian acara webinar berlangsung.  </p> ",
            "src": askSpeaker,
            "cta": [
              {
                "title": "Submit",
                "url": "https://form.typeform.com/to/kKDjPOSs?npk={{npk}}&email={{email}}&name={{name}}",
                "login": true
              }
            ],
            "reverse": true
          },
          {
            "section": {
              "name": "schedule",
              "component": "EventList"
            },
            "title": {
              "type": "text",
              "content": "Schedule"
            },
            "description": "<p>Penasaran dengan tema webinar dan pembicara yang turut meramaikan Permata Learning Week 2021? Lihat dan catat jadwalnya di sini agar tak ketinggalan!</p>",
            "contentType": "lists",
            "contents": [
              {
                "title": "3 Agustus 2021",
                "list_content": [
                  {
                    "src": event_030821_1_plw,
                    "event": {
                      "title": "Opening Permata Learning Week 2021",
                      "content": "<p> <b> Tanggal & Waktu </b> : <br/> 3 Agustus 2021, 09.15 -12.00 WIB <br/><br/>  <b>Speaker</b> : <br/> Chalit Tayjasanant, Bain & Company Abdy Dharma Salimin</p>"
                    },
                    "cta": [
                      {
                        "title": "join room",
                        "url": "https://google.com"
                      }
                    ]
                  },
                  {
                    "src": event_030821_2_plw,
                    "event": {
                      "title": "Branch through Digital Transformation",
                      "content": "<p> <b> Tanggal & Waktu </b> : <br/> 3 Agustus 2021, 15.00 -17.00 WIB <br/><br/>  <b>Speaker</b> : <br/> Ricky Diego</p>"
                    },
                    "cta": [
                      {
                        "title": "join room",
                        "url": "https://google.com"
                      }
                    ]
                  },
                  {
                    "src": event_030821_3_plw,
                    "event": {
                      "title": "Digital Cyber Risk",
                      "content": "<p> <b> Tanggal & Waktu </b> : <br/> 3 Agustus 2021, 15.00 -17.00 WIB <br/><br/>  <b>Speaker</b> : <br/> Daniel Victor Sirait</p>"
                    },
                    "cta": [
                      {
                        "title": "join room",
                        "url": "https://google.com"
                      }
                    ]
                  },
                  {
                    "src": event_030821_4_plw,
                    "event": {
                      "title": "Digital Channel: Market & Opportunity",
                      "content": "<p> <b> Tanggal & Waktu </b> : <br/> 3 Agustus 2021, 15.00 -17.00 WIB <br/><br/>  <b>Speaker</b> : <br/> Indra Gunawan</p>"
                    },
                    "cta": [
                      {
                        "title": "join room",
                        "url": "https://google.com"
                      }
                    ]
                  }
                ]
              },
              {
                "title": "4 Agustus 2021",
                "list_content": [
                  {
                    "src": event_040821_1_plw,
                    "event": {
                      "title": "Building Future Leader",
                      "content": "<p> <b> Tanggal & Waktu </b> : <br/> 4 Agustus 2021, 10.00 -12.00 WIB<br/><br/>  <b>Speaker</b> : <br/> Handry Satriago</p>"
                    },
                    "cta": [
                      {
                        "title": "join room",
                        "url": "https://google.com"
                      }
                    ]
                  },
                  {
                    "src": event_040821_2_plw,
                    "event": {
                      "title": "Financial Acumen",
                      "content": "<p> <b> Tanggal & Waktu </b> : <br/> 4 Agustus 2021, 10.00 -12.00 WIB <br/><br/>  <b>Speaker</b> : <br/> Axel Efralm</p>"
                    },
                    "cta": [
                      {
                        "title": "join room",
                        "url": "https://google.com"
                      }
                    ]
                  },
                  {
                    "src": event_040821_3_plw,
                    "event": {
                      "title": "Creative & Innoative Thinking",
                      "content": "<p> <b> Tanggal & Waktu </b> : <br/> 4 Agustus 2021, 10.00 -12.00 WIB <br/><br/>  <b>Speaker</b> : <br/> Danny Kosasih</p>"
                    },
                    "cta": [
                      {
                        "title": "join room",
                        "url": "https://google.com"
                      }
                    ]
                  },
                  {
                    "src": event_040821_4_plw,
                    "event": {
                      "title": "Permata Digital Banking Webinar",
                      "content": "<p> <b> Tanggal & Waktu </b> : <br/> 4 Agustus 2021, 10.00 -12.00 WIB  <br/><br/>  <b>Speaker</b> : <br/> Regi Wahyu, Gildas Deograt, Teguh Supangkat</p>"
                    },
                    "cta": [
                      {
                        "title": "join room",
                        "url": "https://google.com"
                      }
                    ]
                  }
                ]
              },
              {
                "title": "5 Agustus 2021",
                "list_content": [
                  {
                    "src": event_050821_1_plw,
                    "event": {
                      "title": "Dealing with Zoom Fatigue",
                      "content": "<p> <b> Tanggal & Waktu </b> : <br/> 5 Agustus 2021, 10.00 -12.00 WIB<br/><br/>  <b>Speaker</b> : <br/> Saskhya Aulia Prima</p>"
                    },
                    "cta": [
                      {
                        "title": "join room",
                        "url": "https://google.com"
                      }
                    ]
                  },
                  {
                    "src": event_050821_2_plw,
                    "event": {
                      "title": "Find Your Why",
                      "content": "<p> <b> Tanggal & Waktu </b> : <br/> 5 Agustus 2021, 10.00 -12.00 WIB<br/><br/>  <b>Speaker</b> : <br/> Ali Zaenal Abidin</p>"
                    },
                    "cta": [
                      {
                        "title": "join room",
                        "url": "https://google.com"
                      }
                    ]
                  },
                  {
                    "src": event_050821_3_plw,
                    "event": {
                      "title": "Rising Children in Digital Era",
                      "content": "<p> <b> Tanggal & Waktu </b> : <br/> 5 Agustus 2021, 10.00 -12.00 WIB<br/><br/>  <b>Speaker</b> : <br/> Elizabeth Santosa</p>"
                    },
                    "cta": [
                      {
                        "title": "join room",
                        "url": "https://google.com"
                      }
                    ]
                  },
                  {
                    "src": event_050821_4_plw,
                    "event": {
                      "title": "Personal Branding",
                      "content": "<p> <b> Tanggal & Waktu </b> : <br/> 5 Agustus 2021, 13.00 -15.00 WIB  <br/><br/>  <b>Speaker</b> : <br/> Christian Sugiono</p>"
                    },
                    "cta": [
                      {
                        "title": "join room",
                        "url": "https://google.com"
                      }
                    ]
                  },
                  {
                    "src": event_050821_6_plw,
                    "event": {
                      "title": "Creative Effective Digital Content with The Right Tools",
                      "content": "<p> <b> Tanggal & Waktu </b> : <br/> 5 Agustus 2021, 13.00 -15.00 WIB  <br/><br/>  <b>Speaker</b> : <br/> Coming Soon</p>"
                    },
                    "cta": [
                      {
                        "title": "join room",
                        "url": "https://google.com"
                      }
                    ]
                  },
                  {
                    "src": event_050821_5_plw,
                    "event": {
                      "title": "Closing Permata Learning Week 2021",
                      "content": "<p> <b> Tanggal & Waktu </b> : <br/> 5 Agustus 2021, 15.20 -17.00 WIB  <br/><br/>  <b>Speaker</b> : <br/> Dayan Sadikin</p>"
                    },
                    "cta": [
                      {
                        "title": "join room",
                        "url": "https://google.com"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "section": {
              "name": "podcastRecomandation",
              "component": "WithIllu"
            },
            "title": {
              "type": "text",
              "content": "Recommended Educational Podcasts",
              "style": "neon"
            },
            "description": "<p> Ingin banyak belajar tapi tidak tahu harus mulai dari mana? Temukan berbagai podcast menarik mengenai skills, business & finance, serta technology & innovation yang siap temani waktu belajar kamu. <br/> <br/> Menangkan 3 Audio Playbook “Meaningful Leadership” dari Yoris Sebastian bagi kamu yang aktif mendengarkan podcast dan menjawab quiz yang terdapat di dalamnya. Ayo dengarkan sekarang! </p> ",
            "src": podcast,
            "cta": [
              {
                "title": "Visit",
                "term" : true,
                "login" : true,
                "url": "https://wapi.inspigo.id/client-token/login/TC52rZWu5ASQZeYW9GigEvkGK2kUhH"
              }
            ],
            "term" : {
              "title": {
                "type": "text",
                "content": "Terms & Conditions"
              },
              "description" : "<p> Dengan mengklik “Lanjutkan”, kamu akan otomatis terdaftar di Inspigo (learning partner dari Permata Learning Week 2021) dengan email yang kamu daftarkan pada acara ini.  </p> ",
              "cta" : [{
                "title" : "lanjutkan",
                "url" : "https://member.inspigo.id/home/corporate/permatalearningcarnival?refresh={{token}}",
                "replaceUrl" : true
              }
              ]
            }
          },
          {
            "section": {
              "name": "virtualBackground",
              "component": "WithIllu"
            },
            "title": {
              "type": "text",
              "content": "Virtual Background",
              "style": "neon"
            },
            "description": "<p> Ayo download virtual backgroud ini dan jangan lupa untuk memakainya selama event Permata Learning Week 2021 pada tanggal 3 - 5 Agustus 2021 </p> ",
            "src": virtualBackground,
            "reverse" : true,
            "cta": [
              {
                "title": "Download",
                "url": "https://drive.google.com/file/d/1OEHhPWxeiZBGDlgbDP0S8oVTqqhQ_c9x/view"
              }
            ]
          },
          {
            "section": {
              "name": "virtualPhotobooth",
              "component": "ContentIllu"
            },
            "title": {
              "type": "text",
              "content": "Give Your Best Smile",
              "style": "neon"
            },
            "subtitle": "Try virtual photobooth",
            "content": [
              {
                "src": photobooth1
              },
              { "src": photobooth2 }
            ],
            "cta": [
              {
                "title": "Take Your Photo",
                "url": "https://app.virtualbooth.me/booth/06rqMbLJ"
              }
            ]
          },
          {
            "section": {
              "name": "faq",
              "component": "Faq"
            },
            "questions": [
              {
                "title": "1. Apakah saya perlu login terlebih dahulu untuk mengakses fitur yang ada di dalam website ini?",
                "description": "<p>Ya, kamu perlu login terlebih dahulu untuk memastikan bahwa kamu memang berhak untuk mengikuti rangkaian Permata Learning Week 2021.</p>"
              },
              {
                "title": "2. Apakah saya harus mendaftar untuk mengikuti Permata Learning Week 2021?",
                "description": "<p>Ya, kamu diharuskan mendaftar lewat menu “Daftar Session” agar dapat tervalidasi sebagai peserta Permata Learning Week 2021. Kamu memiliki waktu sampai tanggal 2 Agustus 2021 untuk mendaftar lewat “Daftar Session”.</p>"
              },
              {
                "title": "3. Kapan tenggat waktu pengiriman pertanyaan untuk para pembicara?",
                "description": "<p>Pengumpulan pertanyaan untuk para pembicara akan ditutup pada tanggal 2 Agustus 2021.</p>"
              },
              {
                "title": "4. Apakah pada tanggal 3 - 5 Agustus 2021 saya hanya boleh mengikuti webinar yang sudah saya pilih saat mengisi “Daftar Session”?",
                "description": "<p>Kamu disarankan untuk mengikuti sesi webinar yang sudah dipilih sebelumnya pada saat kamu mengisi “Daftar Session”.</p>"
              },
              {
                "title": "5. Di hari H, bagaimana cara saya mengikuti rangkaian sesi webinar Permata Learning Week 2021 yang sudah dipilih?",
                "description": "<p>Silahkan akses website plw2021.com dan login terlebih dahulu. Cari sesi webinar yang ingin diikuti di bagian “Schedule” lalu klik tombol “Join Room”.</p>"
              },
              {
                "title": "6. Bagaimana perhitungan poin pada Leaderboard?",
                "description": "<p>Perhitungan poin pada Leaderboard didasarkan atas dua hal:  Jumlah kehadiran kamu di sesi webinar yang sudah dipilih dari tanggal 3 - 5 Agustus 2021 dan poin yang kamu kumpulkan saat menjawab quiz selama webinar.</p>"
              },
              {
                "title": "Apabila saya ada pertanyaan lain di luar pertanyaan di atas dapat menghubungi ke mana?",
                "description": "<p>Silakan kirimkan pertanyaan kamu ke alamat email permatalearningweek2021@gmail.com atau hubungi nomor Whatsapp berikut <br/> +6281383896010 - Aulia atau <br/>+62818828389 - Zulfiqar atau <br/>+6281286068375 - Riesta </p>"
              }
            ]
          }
        ]
      }
