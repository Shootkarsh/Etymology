

// Root word database with comprehensive entries
const rootDatabase = {
    // Personality and Self-related roots
    'ego': {
        origin: 'Latin',
        meaning: 'I or self',
        examples: ['egoist', 'egotist', 'egomaniac', 'egotistical', 'egoism'],
        usage: 'Related to self or personality',
        relatedWords: {
            'egoist': {
                meaning: 'Someone concerned with their own welfare',
                breakdown: {
                    'ego': 'self',
                    'ist': 'one who practices'
                }
            },
            'egotist': {
                meaning: 'A boastful person who excessively talks about themselves',
                breakdown: {
                    'ego': 'self',
                    'ist': 'one who practices'
                }
            },
            'egomaniac': {
                meaning: 'Someone obsessed with their own needs and desires',
                breakdown: {
                    'ego': 'self',
                    'mania': 'madness'
                }
            },
            'egoism': {
                meaning: 'The ethical theory that self-interest is the foundation of morality',
                breakdown: {
                    'ego': 'self',
                    'ism': 'belief system'
                }
            }
        }
    },

    // Human-related roots
    'anthropos': {
        origin: 'Greek',
        meaning: 'mankind, human',
        examples: ['anthropology', 'anthropomorphic', 'misanthrope', 'philanthropy', 'anthropocentric'],
        usage: 'Related to humans or human characteristics',
        relatedWords: {
            'anthropology': {
                meaning: 'The study of mankind and human societies',
                breakdown: {
                    'anthropos': 'human',
                    'logos': 'study'
                }
            },
            'misanthrope': {
                meaning: 'A person who hates humanity',
                breakdown: {
                    'mis': 'to hate',
                    'anthropos': 'mankind'
                }
            },
            'philanthropy': {
                meaning: 'Love of mankind; promoting human welfare',
                breakdown: {
                    'phil': 'loving',
                    'anthropos': 'mankind'
                }
            }
        }
    },

    // Directional/Personality types
    'vertere': {
        origin: 'Latin',
        meaning: 'to turn',
        examples: ['introvert', 'extrovert', 'ambivert', 'revert', 'convert'],
        usage: 'Related to turning or changing direction',
        relatedWords: {
            'introvert': {
                meaning: 'A person who turns their thoughts inward',
                breakdown: {
                    'intro': 'inside',
                    'vertere': 'to turn'
                }
            },
            'extrovert': {
                meaning: 'A person who turns their thoughts outward',
                breakdown: {
                    'extra': 'outside',
                    'vertere': 'to turn'
                }
            },
            'ambivert': {
                meaning: 'A person who exhibits both introverted and extroverted tendencies',
                breakdown: {
                    'ambi': 'both',
                    'vertere': 'to turn'
                }
            }
        }
    },

    // Hatred-related roots
    'mis': {
        origin: 'Greek',
        meaning: 'hatred or dislike',
        examples: ['misanthrope', 'misogynist', 'misogamist', 'misandrist'],
        usage: 'Forms words relating to hatred or dislike',
        relatedWords: {
            'misogynist': {
                meaning: 'A person who hates women',
                breakdown: {
                    'mis': 'hatred',
                    'gyne': 'woman'
                }
            },
            'misandrist': {
                meaning: 'A person who hates men',
                breakdown: {
                    'mis': 'hatred',
                    'andros': 'man'
                }
            }
        }
    }
};

// Function to create word cards
function createWordCards() {
    const wordsGrid = document.querySelector('.words-grid');
    
    Object.entries(rootDatabase).forEach(([root, data]) => {
        const card = document.createElement('div');
        card.className = 'word-card';
        card.innerHTML = `
            <div class="root-header">
                <h3 class="latin-root">${root}</h3>
                <span class="origin-badge">${data.origin}</span>
            </div>
            <p class="root-meaning">${data.meaning}</p>
            <p class="usage-note">${data.usage}</p>
            <div class="example-words">
                ${data.examples.map(example => 
                    `<span class="example-word" onclick="showWordDetails('${example}')">${example}</span>`
                ).join('')}
            </div>
        `;
        wordsGrid.appendChild(card);
    });
}

// Function to show word details in modal
function showWordDetails(word) {
    const modal = document.querySelector('.modal');
    const modalContent = modal.querySelector('.modal-content');
    
    // Find the word in the database
    let wordData = null;
    let rootWord = null;
    
    for (const [root, data] of Object.entries(rootDatabase)) {
        if (data.relatedWords[word]) {
            wordData = data.relatedWords[word];
            rootWord = root;
            break;
        }
    }

    if (!wordData) return;

    modalContent.innerHTML = `
        <span class="close-modal">&times;</span>
        <h2 class="word-title">${word}</h2>
        <div class="word-meaning">
            <h3>Meaning:</h3>
            <p>${wordData.meaning}</p>
        </div>
        <div class="word-breakdown">
            <h3>Root Word Breakdown:</h3>
            ${Object.entries(wordData.breakdown).map(([part, meaning]) => `
                <div class="breakdown-item">
                    <span class="part">${part}</span>
                    <span class="meaning">${meaning}</span>
                </div>
            `).join('')}
        </div>
        <div class="related-words">
            <h3>Other words using "${rootWord}":</h3>
            ${rootDatabase[rootWord].examples
                .filter(ex => ex !== word)
                .map(ex => `<span class="example-word" onclick="showWordDetails('${ex}')">${ex}</span>`)
                .join('')}
        </div>
    `;

    modal.style.display = 'flex';
}

// Initialize the word cards
document.addEventListener('DOMContentLoaded', createWordCards); 