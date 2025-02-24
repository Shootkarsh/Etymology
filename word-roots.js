const rootDatabase = {
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
            'egotistical': {
                meaning: 'Excessively self-centered or self-important',
                breakdown: {
                    'ego': 'self',
                    'istic': 'relating to',
                    'al': 'pertaining to'
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
            'anthropomorphic': {
                meaning: 'Having human characteristics',
                breakdown: {
                    'anthropos': 'human',
                    'morph': 'form',
                    'ic': 'relating to'
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
            },
            'anthropocentric': {
                meaning: 'Regarding humans as the central element',
                breakdown: {
                    'anthropos': 'human',
                    'centric': 'centered'
                }
            }
        }
    },
    'vertere': {
        origin: 'Latin',
        meaning: 'to turn',
        examples: ['introvert', 'extrovert', 'ambivert', 'introversion', 'extroversion', 'ambiversion'],
        usage: 'Related to turning or direction of action',
        relatedWords: {
            'introvert': {
                meaning: 'A person who turns their thoughts inward; often shy or reserved',
                breakdown: {
                    'intro': 'inside',
                    'vertere': 'to turn'
                }
            },
            'extrovert': {
                meaning: 'A person who is outgoing and turns their thoughts outward',
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
            },
            'introversion': {
                meaning: 'The state of being inward-focused',
                breakdown: {
                    'intro': 'inside',
                    'vertere': 'to turn',
                    'ion': 'state of'
                }
            },
            'extroversion': {
                meaning: 'The state of being outward-focused',
                breakdown: {
                    'extra': 'outside',
                    'vertere': 'to turn',
                    'ion': 'state of'
                }
            },
            'ambiversion': {
                meaning: 'The state of being both introverted and extroverted',
                breakdown: {
                    'ambi': 'both',
                    'vertere': 'to turn',
                    'ion': 'state of'
                }
            }
        }
    },
    'misein': {
        origin: 'Greek',
        meaning: 'to hate',
        examples: ['misanthrope', 'misogynist', 'misogamist', 'misandrist', 'misoneism', 'misologist'],
        usage: 'Forms words related to hatred or dislike',
        relatedWords: {
            'misanthrope': {
                meaning: 'A person who hates humanity',
                breakdown: {
                    'mis': 'to hate',
                    'anthropos': 'mankind'
                }
            },
            'misogynist': {
                meaning: 'A person who hates women',
                breakdown: {
                    'mis': 'to hate',
                    'gyne': 'woman'
                }
            },
            'misogamist': {
                meaning: 'A person who hates marriage',
                breakdown: {
                    'mis': 'to hate',
                    'gamos': 'marriage',
                    'ist': 'one who practices'
                }
            },
            'misandrist': {
                meaning: 'A person who hates men',
                breakdown: {
                    'mis': 'to hate',
                    'andros': 'man',
                    'ist': 'one who practices'
                }
            },
            'misoneism': {
                meaning: 'Hatred or fear of change or innovation',
                breakdown: {
                    'mis': 'to hate',
                    'neos': 'new',
                    'ism': 'state or condition'
                }
            },
            'misologist': {
                meaning: 'A person who hates reason or reasoning',
                breakdown: {
                    'mis': 'to hate',
                    'logos': 'reason',
                    'ist': 'one who practices'
                }
            }
        }
    },
    'gyne': {
        origin: 'Greek',
        meaning: 'woman',
        examples: ['gynecologist', 'gynecology', 'philogyny', 'polygyny', 'misogynist'],
        usage: 'Related to women or female characteristics',
        relatedWords: {
            'gynecologist': {
                meaning: 'A medical specialist dealing with women\'s health',
                breakdown: {
                    'gyne': 'woman',
                    'logos': 'study',
                    'ist': 'specialist'
                }
            },
            'philogyny': {
                meaning: 'Love or admiration of women',
                breakdown: {
                    'phil': 'loving',
                    'gyne': 'woman'
                }
            },
            'polygyny': {
                meaning: 'Practice of having multiple wives',
                breakdown: {
                    'poly': 'many',
                    'gyne': 'woman'
                }
            }
        }
    },
    'gamos': {
        origin: 'Greek',
        meaning: 'marriage',
        examples: ['polygamy', 'monogamy', 'bigamy', 'misogamist'],
        usage: 'Related to marriage',
        relatedWords: {
            'polygamy': {
                meaning: 'The practice of having multiple spouses at the same time',
                breakdown: {
                    'poly': 'many',
                    'gamos': 'marriage'
                }
            }
        }
    },
    'psyche': {
        origin: 'Greek',
        meaning: 'mind, soul',
        examples: ['psychology', 'psychiatry', 'psychopath', 'psychosomatic', 'psychotherapy'],
        usage: 'Related to mind and mental processes',
        relatedWords: {
            'psychology': {
                meaning: 'The scientific study of the mind and behavior',
                breakdown: {
                    'psyche': 'mind',
                    'logos': 'study'
                }
            },
            'psychiatry': {
                meaning: 'The branch of medicine concerned with mental disorders',
                breakdown: {
                    'psyche': 'mind',
                    'iatreia': 'healing'
                }
            },
            'psychopath': {
                meaning: 'A person suffering from a severe mental disorder',
                breakdown: {
                    'psyche': 'mind',
                    'pathos': 'suffering'
                }
            },
            'psychosomatic': {
                meaning: 'Relating to the interaction between mind and body',
                breakdown: {
                    'psyche': 'mind',
                    'soma': 'body'
                }
            }
        }
    },
    'pathos': {
        origin: 'Greek',
        meaning: 'suffering, feeling',
        examples: ['sympathy', 'empathy', 'antipathy', 'apathy', 'pathology'],
        usage: 'Related to feelings or suffering',
        relatedWords: {
            'sympathy': {
                meaning: 'Feelings of pity for others\' misfortune',
                breakdown: {
                    'syn': 'together',
                    'pathos': 'feeling'
                }
            },
            'empathy': {
                meaning: 'The ability to understand others\' feelings',
                breakdown: {
                    'en': 'in',
                    'pathos': 'feeling'
                }
            },
            'antipathy': {
                meaning: 'A deep-seated feeling of dislike',
                breakdown: {
                    'anti': 'against',
                    'pathos': 'feeling'
                }
            },
            'apathy': {
                meaning: 'Lack of interest or emotion',
                breakdown: {
                    'a': 'without',
                    'pathos': 'feeling'
                }
            }
        }
    },
    'thermos': {
        origin: 'Greek',
        meaning: 'heat',
        examples: ['thermometer', 'thermodynamics', 'thermostat', 'hypothermia'],
        usage: 'Related to heat and temperature',
        relatedWords: {
            'thermometer': {
                meaning: 'An instrument for measuring temperature',
                breakdown: {
                    'thermos': 'heat',
                    'metron': 'measure'
                }
            },
            'thermodynamics': {
                meaning: 'The study of heat and energy',
                breakdown: {
                    'thermos': 'heat',
                    'dynamis': 'power'
                }
            },
            'hypothermia': {
                meaning: 'Dangerously low body temperature',
                breakdown: {
                    'hypo': 'under',
                    'thermos': 'heat'
                }
            }
        }
    },
    'phone': {
        origin: 'Greek',
        meaning: 'sound',
        examples: ['telephone', 'phonograph', 'cacophony', 'euphony'],
        usage: 'Related to sound or voice',
        relatedWords: {
            'cacophony': {
                meaning: 'A harsh mixture of sounds',
                breakdown: {
                    'kakos': 'bad',
                    'phone': 'sound'
                }
            },
            'euphony': {
                meaning: 'Pleasant or harmonious sound',
                breakdown: {
                    'eu': 'good',
                    'phone': 'sound'
                }
            },
            'telephone': {
                meaning: 'Device for transmitting sound over distance',
                breakdown: {
                    'tele': 'distant',
                    'phone': 'sound'
                }
            }
        }
    },
    'micro': {
        origin: 'Greek',
        meaning: 'small',
        examples: ['microscope', 'microbe', 'microbiology', 'microfilm', 'microcosm'],
        usage: 'Related to small things or microscopic scale',
        relatedWords: {
            'microscope': {
                meaning: 'An instrument used to view very small objects',
                breakdown: {
                    'micro': 'small',
                    'skopein': 'to view'
                }
            },
            'microbe': {
                meaning: 'A microscopic organism',
                breakdown: {
                    'micro': 'small',
                    'bios': 'life'
                }
            },
            'microbiology': {
                meaning: 'The study of microscopic organisms',
                breakdown: {
                    'micro': 'small',
                    'bios': 'life',
                    'logos': 'study'
                }
            },
            'microfilm': {
                meaning: 'A film containing microphotographs',
                breakdown: {
                    'micro': 'small',
                    'film': 'thin layer'
                }
            },
            'microcosm': {
                meaning: 'A small-scale representation of something larger',
                breakdown: {
                    'micro': 'small',
                    'kosmos': 'world'
                }
            }
        }
    },
    'macro': {
        origin: 'Greek',
        meaning: 'large',
        examples: ['macroscope', 'macrocosm', 'macroeconomics', 'macromolecule'],
        usage: 'Related to large scale or size',
        relatedWords: {
            'macroscope': {
                meaning: 'An instrument for viewing large objects',
                breakdown: {
                    'macro': 'large',
                    'skopein': 'to view'
                }
            },
            'macrocosm': {
                meaning: 'The universe or a large-scale system',
                breakdown: {
                    'macro': 'large',
                    'kosmos': 'world'
                }
            },
            'macroeconomics': {
                meaning: 'Study of large-scale economic factors',
                breakdown: {
                    'macro': 'large',
                    'oikos': 'house',
                    'nomos': 'law'
                }
            },
            'macromolecule': {
                meaning: 'A very large molecule',
                breakdown: {
                    'macro': 'large',
                    'molecula': 'small mass'
                }
            }
        }
    },
    'tele': {
        origin: 'Greek',
        meaning: 'distant, far off',
        examples: ['telephone', 'television', 'telescope', 'telepathy', 'telekinesis'],
        usage: 'Related to distance or remote action',
        relatedWords: {
            'telephone': {
                meaning: 'Device for transmitting sound over distance',
                breakdown: {
                    'tele': 'distant',
                    'phone': 'sound'
                }
            },
            'television': {
                meaning: 'Device for transmitting images and sound',
                breakdown: {
                    'tele': 'distant',
                    'visio': 'sight'
                }
            },
            'telescope': {
                meaning: 'Instrument for viewing distant objects',
                breakdown: {
                    'tele': 'distant',
                    'skopein': 'to view'
                }
            },
            'telepathy': {
                meaning: 'Communication of thoughts over distance',
                breakdown: {
                    'tele': 'distant',
                    'pathos': 'feeling'
                }
            },
            'telekinesis': {
                meaning: 'Moving objects from a distance by mental power',
                breakdown: {
                    'tele': 'distant',
                    'kinesis': 'movement'
                }
            }
        }
    },
    'haima': {
        origin: 'Greek',
        meaning: 'blood',
        examples: ['hematology', 'hemorrhage', 'hemoglobin', 'anemia', 'hematoma'],
        usage: 'Related to blood and blood conditions',
        relatedWords: {
            'hematology': {
                meaning: 'Study of blood and blood diseases',
                breakdown: {
                    'haima': 'blood',
                    'logos': 'study'
                }
            },
            'hemorrhage': {
                meaning: 'Excessive blood loss',
                breakdown: {
                    'haima': 'blood',
                    'rhegnynai': 'to break'
                }
            },
            'hemoglobin': {
                meaning: 'Protein that carries oxygen in blood',
                breakdown: {
                    'haima': 'blood',
                    'globus': 'sphere'
                }
            },
            'anemia': {
                meaning: 'Condition of having too few red blood cells',
                breakdown: {
                    'an': 'without',
                    'haima': 'blood'
                }
            },
            'hematoma': {
                meaning: 'A localized collection of blood',
                breakdown: {
                    'haima': 'blood',
                    'oma': 'tumor or swelling'
                }
            }
        }
    },
    'cardio': {
        origin: 'Greek',
        meaning: 'heart',
        examples: ['cardiology', 'cardiovascular', 'cardiogram', 'cardiopulmonary', 'cardiomyopathy'],
        usage: 'Related to the heart and its functions',
        relatedWords: {
            'cardiology': {
                meaning: 'The study of the heart and its diseases',
                breakdown: {
                    'cardio': 'heart',
                    'logos': 'study'
                }
            },
            'cardiovascular': {
                meaning: 'Relating to the heart and blood vessels',
                breakdown: {
                    'cardio': 'heart',
                    'vascular': 'vessels'
                }
            },
            'cardiogram': {
                meaning: 'A record of heart activity',
                breakdown: {
                    'cardio': 'heart',
                    'gram': 'writing'
                }
            },
            'cardiopulmonary': {
                meaning: 'Relating to both heart and lungs',
                breakdown: {
                    'cardio': 'heart',
                    'pulmonary': 'lungs'
                }
            },
            'cardiomyopathy': {
                meaning: 'Disease of the heart muscle',
                breakdown: {
                    'cardio': 'heart',
                    'myo': 'muscle',
                    'pathos': 'disease'
                }
            }
        }
    },
    'nephro': {
        origin: 'Greek',
        meaning: 'kidney',
        examples: ['nephrology', 'nephrectomy', 'nephritis', 'nephropathy', 'hydronephrosis'],
        usage: 'Related to kidneys and their conditions',
        relatedWords: {
            'nephrology': {
                meaning: 'The study of kidney diseases',
                breakdown: {
                    'nephro': 'kidney',
                    'logos': 'study'
                }
            },
            'nephrectomy': {
                meaning: 'Surgical removal of a kidney',
                breakdown: {
                    'nephro': 'kidney',
                    'ectomy': 'removal'
                }
            },
            'nephritis': {
                meaning: 'Inflammation of the kidneys',
                breakdown: {
                    'nephro': 'kidney',
                    'itis': 'inflammation'
                }
            },
            'nephropathy': {
                meaning: 'Disease or damage of the kidneys',
                breakdown: {
                    'nephro': 'kidney',
                    'pathos': 'disease'
                }
            },
            'hydronephrosis': {
                meaning: 'Swelling of kidney due to fluid buildup',
                breakdown: {
                    'hydro': 'water',
                    'nephro': 'kidney',
                    'osis': 'condition'
                }
            }
        }
    },
    'dermato': {
        origin: 'Greek',
        meaning: 'skin',
        examples: ['dermatology', 'dermatitis', 'epidermis', 'hypodermic', 'pachyderm'],
        usage: 'Related to skin and its conditions',
        relatedWords: {
            'dermatology': {
                meaning: 'The study of skin diseases',
                breakdown: {
                    'dermato': 'skin',
                    'logos': 'study'
                }
            },
            'dermatitis': {
                meaning: 'Inflammation of the skin',
                breakdown: {
                    'dermato': 'skin',
                    'itis': 'inflammation'
                }
            },
            'epidermis': {
                meaning: 'The outer layer of skin',
                breakdown: {
                    'epi': 'upon',
                    'derma': 'skin'
                }
            },
            'hypodermic': {
                meaning: 'Under the skin',
                breakdown: {
                    'hypo': 'under',
                    'derma': 'skin'
                }
            },
            'pachyderm': {
                meaning: 'Thick-skinned animal',
                breakdown: {
                    'pachy': 'thick',
                    'derma': 'skin'
                }
            }
        }
    },
    'gastro': {
        origin: 'Greek',
        meaning: 'stomach',
        examples: ['gastrology', 'gastritis', 'gastroenterology', 'gastrointestinal', 'gastronomy'],
        usage: 'Related to the stomach and digestive system',
        relatedWords: {
            'gastrology': {
                meaning: 'The study of the stomach and its diseases',
                breakdown: {
                    'gastro': 'stomach',
                    'logos': 'study'
                }
            },
            'gastritis': {
                meaning: 'Inflammation of the stomach lining',
                breakdown: {
                    'gastro': 'stomach',
                    'itis': 'inflammation'
                }
            },
            'gastroenterology': {
                meaning: 'Study of digestive system',
                breakdown: {
                    'gastro': 'stomach',
                    'entero': 'intestine',
                    'logos': 'study'
                }
            },
            'gastrointestinal': {
                meaning: 'Relating to stomach and intestines',
                breakdown: {
                    'gastro': 'stomach',
                    'intestinal': 'of the intestines'
                }
            }
        }
    },
    'neuro': {
        origin: 'Greek',
        meaning: 'nerve',
        examples: ['neurology', 'neuroscience', 'neuroplasticity', 'neurotransmitter', 'neurosis'],
        usage: 'Related to nerves and the nervous system',
        relatedWords: {
            'neurology': {
                meaning: 'Study of the nervous system and its disorders',
                breakdown: {
                    'neuro': 'nerve',
                    'logos': 'study'
                }
            },
            'neuroscience': {
                meaning: 'Scientific study of the nervous system',
                breakdown: {
                    'neuro': 'nerve',
                    'scientia': 'knowledge'
                }
            },
            'neuroplasticity': {
                meaning: 'The brain\'s ability to form new neural connections',
                breakdown: {
                    'neuro': 'nerve',
                    'plastikos': 'moldable'
                }
            }
        }
    },
    'osteo': {
        origin: 'Greek',
        meaning: 'bone',
        examples: ['osteoporosis', 'osteopathy', 'osteology', 'osteoarthritis'],
        usage: 'Related to bones and bone conditions',
        relatedWords: {
            'osteoporosis': {
                meaning: 'Condition where bones become brittle',
                breakdown: {
                    'osteo': 'bone',
                    'poros': 'passage',
                    'osis': 'condition'
                }
            },
            'osteopathy': {
                meaning: 'Treatment of medical disorders through bone manipulation',
                breakdown: {
                    'osteo': 'bone',
                    'pathos': 'disease'
                }
            },
            'osteology': {
                meaning: 'The study of the structure and function of bones',
                breakdown: {
                    'osteo': 'bone',
                    'logos': 'study'
                }
            },
            'osteoarthritis': {
                meaning: 'Degenerative joint disease affecting bone and cartilage',
                breakdown: {
                    'osteo': 'bone',
                    'arthro': 'joint',
                    'itis': 'inflammation'
                }
            }
        }
    },
    'arthro': {
        origin: 'Greek',
        meaning: 'joint',
        examples: ['arthritis', 'arthroscopy', 'arthropathy', 'osteoarthritis'],
        usage: 'Related to joints and joint conditions',
        relatedWords: {
            'arthritis': {
                meaning: 'Inflammation of joints',
                breakdown: {
                    'arthro': 'joint',
                    'itis': 'inflammation'
                }
            },
            'arthroscopy': {
                meaning: 'Examination of joint interior using an arthroscope',
                breakdown: {
                    'arthro': 'joint',
                    'skopein': 'to view'
                }
            }
        }
    },
    'pneumo': {
        origin: 'Greek',
        meaning: 'lung, air',
        examples: ['pneumonia', 'pneumatic', 'pneumothorax', 'pneumonectomy'],
        usage: 'Related to lungs or air',
        relatedWords: {
            'pneumonia': {
                meaning: 'Inflammation of lung tissue',
                breakdown: {
                    'pneumo': 'lung',
                    'ia': 'condition'
                }
            },
            'pneumatic': {
                meaning: 'Operated by air pressure',
                breakdown: {
                    'pneumo': 'air',
                    'ic': 'relating to'
                }
            }
        }
    },
    'hepato': {
        origin: 'Greek',
        meaning: 'liver',
        examples: ['hepatitis', 'hepatology', 'hepatectomy', 'hepatomegaly'],
        usage: 'Related to the liver',
        relatedWords: {
            'hepatitis': {
                meaning: 'Inflammation of the liver',
                breakdown: {
                    'hepato': 'liver',
                    'itis': 'inflammation'
                }
            },
            'hepatology': {
                meaning: 'Study of the liver',
                breakdown: {
                    'hepato': 'liver',
                    'logos': 'study'
                }
            }
        }
    },
    'ophthalmo': {
        origin: 'Greek',
        meaning: 'eye',
        examples: ['ophthalmology', 'ophthalmoscope', 'ophthalmitis'],
        usage: 'Related to eyes and vision',
        relatedWords: {
            'ophthalmology': {
                meaning: 'Study of eye diseases',
                breakdown: {
                    'ophthalmo': 'eye',
                    'logos': 'study'
                }
            },
            'ophthalmoscope': {
                meaning: 'Instrument for examining the eye',
                breakdown: {
                    'ophthalmo': 'eye',
                    'skopein': 'to view'
                }
            }
        }
    },
    'oto': {
        origin: 'Greek',
        meaning: 'ear',
        examples: ['otology', 'otitis', 'otoscope', 'otolaryngology'],
        usage: 'Related to ears and hearing',
        relatedWords: {
            'otology': {
                meaning: 'Study of the ear',
                breakdown: {
                    'oto': 'ear',
                    'logos': 'study'
                }
            },
            'otitis': {
                meaning: 'Inflammation of the ear',
                breakdown: {
                    'oto': 'ear',
                    'itis': 'inflammation'
                }
            }
        }
    },
    'rhino': {
        origin: 'Greek',
        meaning: 'nose',
        examples: ['rhinology', 'rhinitis', 'rhinoplasty', 'rhinorrhea'],
        usage: 'Related to the nose',
        relatedWords: {
            'rhinology': {
                meaning: 'Study of the nose',
                breakdown: {
                    'rhino': 'nose',
                    'logos': 'study'
                }
            },
            'rhinitis': {
                meaning: 'Inflammation of nasal tissues',
                breakdown: {
                    'rhino': 'nose',
                    'itis': 'inflammation'
                }
            }
        }
    },
    'dermo': {
        origin: 'Greek',
        meaning: 'skin',
        examples: ['dermatology', 'dermis', 'dermatitis', 'dermatome'],
        usage: 'Related to skin',
        relatedWords: {
            'dermatology': {
                meaning: 'Study of skin diseases',
                breakdown: {
                    'dermo': 'skin',
                    'logos': 'study'
                }
            },
            'dermatitis': {
                meaning: 'Inflammation of the skin',
                breakdown: {
                    'dermo': 'skin',
                    'itis': 'inflammation'
                }
            }
        }
    },
    'onco': {
        origin: 'Greek',
        meaning: 'tumor, mass',
        examples: ['oncology', 'oncologist', 'oncogenic', 'oncolysis'],
        usage: 'Related to tumors and cancer',
        relatedWords: {
            'oncology': {
                meaning: 'The study and treatment of tumors and cancer',
                breakdown: {
                    'onco': 'tumor',
                    'logos': 'study'
                }
            },
            'oncogenic': {
                meaning: 'Causing tumor development',
                breakdown: {
                    'onco': 'tumor',
                    'genes': 'producing'
                }
            },
            'oncolysis': {
                meaning: 'Destruction of tumor cells',
                breakdown: {
                    'onco': 'tumor',
                    'lysis': 'breaking down'
                }
            }
        }
    },
    'endocrin': {
        origin: 'Greek',
        meaning: 'internal secretion',
        examples: ['endocrinology', 'endocrine', 'endocrinopathy'],
        usage: 'Related to hormones and glands',
        relatedWords: {
            'endocrinology': {
                meaning: 'Study of hormones and endocrine glands',
                breakdown: {
                    'endo': 'within',
                    'krinein': 'to separate',
                    'logos': 'study'
                }
            },
            'endocrine': {
                meaning: 'Relating to glands that secrete hormones',
                breakdown: {
                    'endo': 'within',
                    'krinein': 'to separate'
                }
            }
        }
    },
    'immuno': {
        origin: 'Latin',
        meaning: 'immune, safe',
        examples: ['immunology', 'immunotherapy', 'immunodeficiency', 'immunoglobulin'],
        usage: 'Related to the immune system',
        relatedWords: {
            'immunology': {
                meaning: 'Study of the immune system',
                breakdown: {
                    'immuno': 'immune',
                    'logos': 'study'
                }
            },
            'immunotherapy': {
                meaning: 'Treatment using immune system',
                breakdown: {
                    'immuno': 'immune',
                    'therapeia': 'treatment'
                }
            }
        }
    },
    'hemato': {
        origin: 'Greek',
        meaning: 'blood',
        examples: ['hematology', 'hematoma', 'hematocrit', 'hematopoiesis'],
        usage: 'Related to blood disorders',
        relatedWords: {
            'hematology': {
                meaning: 'Study of blood disorders',
                breakdown: {
                    'hemato': 'blood',
                    'logos': 'study'
                }
            },
            'hematopoiesis': {
                meaning: 'Production of blood cells',
                breakdown: {
                    'hemato': 'blood',
                    'poiesis': 'making'
                }
            }
        }
    },
    'pulmo': {
        origin: 'Latin',
        meaning: 'lung',
        examples: ['pulmonology', 'pulmonary', 'pulmonitis', 'cardiopulmonary'],
        usage: 'Related to lungs and breathing',
        relatedWords: {
            'pulmonology': {
                meaning: 'Study of diseases of the lungs',
                breakdown: {
                    'pulmo': 'lung',
                    'logos': 'study'
                }
            },
            'pulmonary': {
                meaning: 'Relating to the lungs',
                breakdown: {
                    'pulmo': 'lung',
                    'ary': 'relating to'
                }
            }
        }
    },
    'angio': {
        origin: 'Greek',
        meaning: 'vessel',
        examples: ['angiology', 'angiogram', 'angioplasty', 'cardiovascular'],
        usage: 'Related to blood vessels',
        relatedWords: {
            'angiology': {
                meaning: 'Study of blood and lymph vessels',
                breakdown: {
                    'angio': 'vessel',
                    'logos': 'study'
                }
            },
            'angioplasty': {
                meaning: 'Surgical repair of blood vessels',
                breakdown: {
                    'angio': 'vessel',
                    'plastos': 'molded'
                }
            }
        }
    },
    'paed': {
        origin: 'Greek',
        meaning: 'child',
        examples: ['pediatrics', 'pediatrician', 'orthopedics', 'pedology'],
        usage: 'Related to children and childhood',
        relatedWords: {
            'pediatrics': {
                meaning: 'Branch of medicine dealing with children and their diseases',
                breakdown: {
                    'paed': 'child',
                    'iatrics': 'medical treatment'
                }
            },
            'pediatrician': {
                meaning: 'Doctor specializing in children\'s health',
                breakdown: {
                    'paed': 'child',
                    'iatros': 'physician'
                }
            }
        }
    },
    'geronto': {
        origin: 'Greek',
        meaning: 'old age',
        examples: ['geriatrics', 'gerontology', 'gerontologist', 'gerontophobia'],
        usage: 'Related to aging and elderly care',
        relatedWords: {
            'geriatrics': {
                meaning: 'Branch of medicine focusing on health care of elderly people',
                breakdown: {
                    'geri': 'old age',
                    'iatrics': 'medical treatment'
                }
            },
            'gerontology': {
                meaning: 'Study of aging and its effects',
                breakdown: {
                    'geronto': 'old age',
                    'logos': 'study'
                }
            }
        }
    },
    'gyneco': {
        origin: 'Greek',
        meaning: 'woman',
        examples: ['gynecology', 'gynecologist', 'gynecological'],
        usage: 'Related to women\'s health',
        relatedWords: {
            'gynecology': {
                meaning: 'Study of women\'s reproductive health',
                breakdown: {
                    'gyneco': 'woman',
                    'logos': 'study'
                }
            },
            'gynecologist': {
                meaning: 'Doctor specializing in women\'s health',
                breakdown: {
                    'gyneco': 'woman',
                    'logos': 'study',
                    'ist': 'specialist'
                }
            }
        }
    },
    'obstet': {
        origin: 'Latin',
        meaning: 'to stand before',
        examples: ['obstetrics', 'obstetrician', 'obstetrical'],
        usage: 'Related to pregnancy and childbirth',
        relatedWords: {
            'obstetrics': {
                meaning: 'Branch of medicine dealing with pregnancy and childbirth',
                breakdown: {
                    'ob': 'before',
                    'sta': 'to stand',
                    'ics': 'practice of'
                }
            },
            'obstetrician': {
                meaning: 'Doctor specializing in pregnancy and childbirth',
                breakdown: {
                    'obstet': 'to stand before',
                    'ician': 'specialist'
                }
            }
        }
    },
    'dent': {
        origin: 'Latin',
        meaning: 'tooth',
        examples: ['dentistry', 'dentist', 'dental', 'orthodontics'],
        usage: 'Related to teeth and oral health',
        relatedWords: {
            'dentistry': {
                meaning: 'Practice of treating teeth and oral health',
                breakdown: {
                    'dent': 'tooth',
                    'istry': 'practice of'
                }
            },
            'orthodontics': {
                meaning: 'Branch of dentistry dealing with irregular teeth',
                breakdown: {
                    'ortho': 'straight',
                    'dont': 'tooth',
                    'ics': 'practice of'
                }
            }
        }
    },
    'logos': {
        origin: 'Greek',
        meaning: 'study, science, word',
        examples: ['biology', 'psychology', 'neurology', 'cardiology', 'dermatology'],
        usage: 'Forms names of sciences or fields of study',
        relatedWords: {
            'biology': {
                meaning: 'The study of life',
                breakdown: {
                    'bio': 'life',
                    'logos': 'study'
                }
            },
            'psychology': {
                meaning: 'The study of mind and behavior',
                breakdown: {
                    'psyche': 'mind',
                    'logos': 'study'
                }
            }
        }
    },
    'itis': {
        origin: 'Greek',
        meaning: 'inflammation',
        examples: ['dermatitis', 'arthritis', 'gastritis', 'nephritis'],
        usage: 'Indicates inflammatory disease',
        relatedWords: {
            'dermatitis': {
                meaning: 'Inflammation of the skin',
                breakdown: {
                    'dermat': 'skin',
                    'itis': 'inflammation'
                }
            },
            'arthritis': {
                meaning: 'Inflammation of joints',
                breakdown: {
                    'arthro': 'joint',
                    'itis': 'inflammation'
                }
            }
        }
    },
    'osis': {
        origin: 'Greek',
        meaning: 'condition, state, process',
        examples: ['osteoporosis', 'neurosis', 'diagnosis', 'prognosis'],
        usage: 'Forms names of conditions or processes',
        relatedWords: {
            'osteoporosis': {
                meaning: 'Condition of porous bones',
                breakdown: {
                    'osteo': 'bone',
                    'poros': 'passage',
                    'osis': 'condition'
                }
            },
            'neurosis': {
                meaning: 'Mental condition involving anxiety',
                breakdown: {
                    'neuro': 'nerve',
                    'osis': 'condition'
                }
            }
        }
    },
    'phil': {
        origin: 'Greek',
        meaning: 'loving, fond of',
        examples: ['philosophy', 'philanthropy', 'philology', 'bibliophile'],
        usage: 'Indicates fondness or attraction',
        relatedWords: {
            'philanthropy': {
                meaning: 'Love of humanity; charitable giving',
                breakdown: {
                    'phil': 'loving',
                    'anthropos': 'mankind'
                }
            },
            'bibliophile': {
                meaning: 'Book lover',
                breakdown: {
                    'biblio': 'book',
                    'phil': 'loving'
                }
            }
        }
    },
    'hypo': {
        origin: 'Greek',
        meaning: 'under, below',
        examples: ['hypodermic', 'hypothermia', 'hypoglycemia', 'hypothesis'],
        usage: 'Indicates under or below normal',
        relatedWords: {
            'hypodermic': {
                meaning: 'Under the skin',
                breakdown: {
                    'hypo': 'under',
                    'derma': 'skin'
                }
            },
            'hypothermia': {
                meaning: 'Below normal temperature',
                breakdown: {
                    'hypo': 'under',
                    'therm': 'heat'
                }
            }
        }
    },
    'hyper': {
        origin: 'Greek',
        meaning: 'over, above, excessive',
        examples: ['hyperactive', 'hypertension', 'hyperthermia', 'hyperglycemia'],
        usage: 'Indicates excess or above normal',
        relatedWords: {
            'hyperactive': {
                meaning: 'Excessively active',
                breakdown: {
                    'hyper': 'over',
                    'active': 'doing'
                }
            },
            'hypertension': {
                meaning: 'High blood pressure',
                breakdown: {
                    'hyper': 'over',
                    'tension': 'pressure'
                }
            }
        }
    },
    'poly': {
        origin: 'Greek',
        meaning: 'many, much',
        examples: ['polygon', 'polyglot', 'polygamy', 'polynomial'],
        usage: 'Indicates plurality or multiplicity',
        relatedWords: {
            'polygamy': {
                meaning: 'Marriage to multiple spouses',
                breakdown: {
                    'poly': 'many',
                    'gamos': 'marriage'
                }
            },
            'polyglot': {
                meaning: 'Speaking many languages',
                breakdown: {
                    'poly': 'many',
                    'glotta': 'tongue, language'
                }
            }
        }
    },
    'mono': {
        origin: 'Greek',
        meaning: 'one, single, alone',
        examples: ['monogamy', 'monologue', 'monopoly', 'monotone'],
        usage: 'Indicates singularity or oneness',
        relatedWords: {
            'monogamy': {
                meaning: 'Marriage to one person at a time',
                breakdown: {
                    'mono': 'one',
                    'gamos': 'marriage'
                }
            },
            'monologue': {
                meaning: 'Speech by one person',
                breakdown: {
                    'mono': 'one',
                    'logos': 'speech'
                }
            }
        }
    },
    'ist': {
        origin: 'Greek',
        meaning: 'one who practices, specialist',
        examples: ['dentist', 'psychiatrist', 'biologist', 'oncologist'],
        usage: 'Forms nouns referring to people who practice something',
        relatedWords: {
            'psychiatrist': {
                meaning: 'Doctor specializing in mental health',
                breakdown: {
                    'psych': 'mind',
                    'iatr': 'medical treatment',
                    'ist': 'specialist'
                }
            },
            'biologist': {
                meaning: 'Scientist who studies life',
                breakdown: {
                    'bio': 'life',
                    'log': 'study',
                    'ist': 'specialist'
                }
            }
        }
    },
    'ic': {
        origin: 'Greek',
        meaning: 'relating to, characteristic of',
        examples: ['chronic', 'psychiatric', 'gastric', 'cardiac'],
        usage: 'Forms adjectives from nouns',
        relatedWords: {
            'psychiatric': {
                meaning: 'Related to mental health treatment',
                breakdown: {
                    'psych': 'mind',
                    'iatr': 'medical treatment',
                    'ic': 'relating to'
                }
            },
            'cardiac': {
                meaning: 'Related to the heart',
                breakdown: {
                    'card': 'heart',
                    'ic': 'relating to'
                }
            }
        }
    },
    'ism': {
        origin: 'Greek',
        meaning: 'doctrine, practice, condition',
        examples: ['metabolism', 'criticism', 'socialism', 'Buddhism'],
        usage: 'Forms abstract nouns from other parts of speech',
        relatedWords: {
            'metabolism': {
                meaning: 'Process of converting food to energy',
                breakdown: {
                    'meta': 'change',
                    'bol': 'throw',
                    'ism': 'process'
                }
            },
            'criticism': {
                meaning: 'Practice of judging merits and faults',
                breakdown: {
                    'crit': 'judge',
                    'ism': 'practice'
                }
            }
        }
    },
    'ology': {
        origin: 'Greek',
        meaning: 'study of, science of',
        examples: ['biology', 'psychology', 'cardiology', 'neurology'],
        usage: 'Forms names of sciences or branches of knowledge',
        relatedWords: {
            'cardiology': {
                meaning: 'Study of the heart',
                breakdown: {
                    'cardi': 'heart',
                    'ology': 'study of'
                }
            },
            'neurology': {
                meaning: 'Study of the nervous system',
                breakdown: {
                    'neuro': 'nerve',
                    'ology': 'study of'
                }
            }
        }
    },
    'ectomy': {
        origin: 'Greek',
        meaning: 'surgical removal',
        examples: ['appendectomy', 'tonsillectomy', 'mastectomy'],
        usage: 'Forms names of surgical operations',
        relatedWords: {
            'appendectomy': {
                meaning: 'Surgical removal of the appendix',
                breakdown: {
                    'append': 'appendix',
                    'ectomy': 'removal'
                }
            },
            'mastectomy': {
                meaning: 'Surgical removal of breast tissue',
                breakdown: {
                    'mast': 'breast',
                    'ectomy': 'removal'
                }
            }
        }
    },
    'ial': {
        origin: 'Latin',
        meaning: 'relating to, having the character of',
        examples: ['facial', 'bacterial', 'social', 'racial'],
        usage: 'Forms adjectives from nouns',
        relatedWords: {
            'bacterial': {
                meaning: 'Relating to bacteria',
                breakdown: {
                    'bacter': 'rod, staff (bacteria)',
                    'ial': 'relating to'
                }
            },
            'facial': {
                meaning: 'Relating to the face',
                breakdown: {
                    'fac': 'face',
                    'ial': 'relating to'
                }
            }
        }
    },
    'kinesis': {
        origin: 'Greek',
        meaning: 'movement, motion',
        examples: ['telekinesis', 'kinetic', 'kinesthesia', 'photokinesis'],
        usage: 'Related to motion or movement',
        relatedWords: {
            'telekinesis': {
                meaning: 'Moving objects with the mind',
                breakdown: {
                    'tele': 'distant',
                    'kinesis': 'movement'
                }
            },
            'kinetic': {
                meaning: 'Relating to motion',
                breakdown: {
                    'kine': 'movement',
                    'ic': 'relating to'
                }
            }
        }
    },
    'genesis': {
        origin: 'Greek',
        meaning: 'origin, creation, generation',
        examples: ['photogenesis', 'pathogenesis', 'biogenesis', 'embryogenesis'],
        usage: 'Related to creation or formation',
        relatedWords: {
            'pathogenesis': {
                meaning: 'Development of disease',
                breakdown: {
                    'patho': 'disease',
                    'genesis': 'origin'
                }
            },
            'biogenesis': {
                meaning: 'Production of living organisms',
                breakdown: {
                    'bio': 'life',
                    'genesis': 'creation'
                }
            }
        }
    },
    'lysis': {
        origin: 'Greek',
        meaning: 'breaking down, dissolution',
        examples: ['analysis', 'paralysis', 'hydrolysis', 'electrolysis'],
        usage: 'Related to breaking down or decomposition',
        relatedWords: {
            'analysis': {
                meaning: 'Detailed examination by breaking into parts',
                breakdown: {
                    'ana': 'up, throughout',
                    'lysis': 'loosening'
                }
            },
            'paralysis': {
                meaning: 'Loss of ability to move',
                breakdown: {
                    'para': 'beside, beyond',
                    'lysis': 'loosening'
                }
            }
        }
    },
    'poiesis': {
        origin: 'Greek',
        meaning: 'making, production',
        examples: ['hematopoiesis', 'autopoiesis', 'biopoiesis'],
        usage: 'Related to production or creation',
        relatedWords: {
            'hematopoiesis': {
                meaning: 'Blood cell production',
                breakdown: {
                    'hemato': 'blood',
                    'poiesis': 'production'
                }
            },
            'biopoiesis': {
                meaning: 'Production of living matter',
                breakdown: {
                    'bio': 'life',
                    'poiesis': 'making'
                }
            }
        }
    },
    'stasis': {
        origin: 'Greek',
        meaning: 'standing still, stopping',
        examples: ['hemostasis', 'homeostasis', 'metastasis'],
        usage: 'Related to stopping or maintaining balance',
        relatedWords: {
            'hemostasis': {
                meaning: 'Stopping of blood flow',
                breakdown: {
                    'hemo': 'blood',
                    'stasis': 'stopping'
                }
            },
            'homeostasis': {
                meaning: 'Maintenance of stable conditions',
                breakdown: {
                    'homeo': 'same',
                    'stasis': 'standing'
                }
            }
        }
    },
    'tropism': {
        origin: 'Greek',
        meaning: 'turning, response to stimulus',
        examples: ['phototropism', 'geotropism', 'neurotropism'],
        usage: 'Related to growth or response to stimuli',
        relatedWords: {
            'phototropism': {
                meaning: 'Growth in response to light',
                breakdown: {
                    'photo': 'light',
                    'tropism': 'turning toward'
                }
            },
            'geotropism': {
                meaning: 'Growth in response to gravity',
                breakdown: {
                    'geo': 'earth',
                    'tropism': 'turning toward'
                }
            }
        }
    },
    'ergic': {
        origin: 'Greek',
        meaning: 'working, causing action',
        examples: ['cholinergic', 'adrenergic', 'synergic', 'energetic'],
        usage: 'Related to biological or chemical activity',
        relatedWords: {
            'cholinergic': {
                meaning: 'Activated or transmitted by acetylcholine',
                breakdown: {
                    'cholin': 'bile',
                    'ergic': 'working'
                }
            },
            'adrenergic': {
                meaning: 'Activated by or producing adrenaline',
                breakdown: {
                    'adren': 'near kidney (adrenaline)',
                    'ergic': 'working'
                }
            }
        }
    },
    'phagia': {
        origin: 'Greek',
        meaning: 'eating, devouring',
        examples: ['dysphagia', 'polyphagia', 'autophagia', 'aerophagia'],
        usage: 'Related to eating or swallowing',
        relatedWords: {
            'dysphagia': {
                meaning: 'Difficulty in swallowing',
                breakdown: {
                    'dys': 'difficult',
                    'phagia': 'eating'
                }
            },
            'polyphagia': {
                meaning: 'Excessive eating',
                breakdown: {
                    'poly': 'many, much',
                    'phagia': 'eating'
                }
            }
        }
    },
    'phobia': {
        origin: 'Greek',
        meaning: 'fear, aversion',
        examples: ['claustrophobia', 'agoraphobia', 'xenophobia', 'hydrophobia'],
        usage: 'Indicates irrational fear or aversion',
        relatedWords: {
            'claustrophobia': {
                meaning: 'Fear of enclosed spaces',
                breakdown: {
                    'claustro': 'closed space',
                    'phobia': 'fear'
                }
            },
            'agoraphobia': {
                meaning: 'Fear of open or public spaces',
                breakdown: {
                    'agora': 'marketplace',
                    'phobia': 'fear'
                }
            },
            'xenophobia': {
                meaning: 'Fear or hatred of foreigners or strangers',
                breakdown: {
                    'xeno': 'foreign, strange',
                    'phobia': 'fear'
                }
            },
            'hydrophobia': {
                meaning: 'Fear of water; a symptom of rabies',
                breakdown: {
                    'hydro': 'water',
                    'phobia': 'fear'
                }
            }
        }
    },
    'plegia': {
        origin: 'Greek',
        meaning: 'paralysis, stroke',
        examples: ['hemiplegia', 'paraplegia', 'quadriplegia', 'monoplegia'],
        usage: 'Related to paralysis of body parts',
        relatedWords: {
            'hemiplegia': {
                meaning: 'Paralysis of one side of the body',
                breakdown: {
                    'hemi': 'half',
                    'plegia': 'paralysis'
                }
            },
            'paraplegia': {
                meaning: 'Paralysis of lower body',
                breakdown: {
                    'para': 'beside',
                    'plegia': 'paralysis'
                }
            }
        }
    },
    'rrhea': {
        origin: 'Greek',
        meaning: 'flow, discharge',
        examples: ['diarrhea', 'rhinorrhea', 'gonorrhea', 'otorrhea'],
        usage: 'Indicates abnormal discharge or flow',
        relatedWords: {
            'diarrhea': {
                meaning: 'Abnormal frequency of bowel movements',
                breakdown: {
                    'dia': 'through',
                    'rrhea': 'flow'
                }
            },
            'rhinorrhea': {
                meaning: 'Excessive nasal discharge',
                breakdown: {
                    'rhino': 'nose',
                    'rrhea': 'flow'
                }
            }
        }
    },
    'taxis': {
        origin: 'Greek',
        meaning: 'arrangement, order',
        examples: ['syntax', 'chemotaxis', 'phototaxis', 'geotaxis'],
        usage: 'Related to arrangement or movement response',
        relatedWords: {
            'chemotaxis': {
                meaning: 'Movement in response to chemical stimulus',
                breakdown: {
                    'chemo': 'chemical',
                    'taxis': 'arrangement'
                }
            },
            'phototaxis': {
                meaning: 'Movement in response to light',
                breakdown: {
                    'photo': 'light',
                    'taxis': 'arrangement'
                }
            }
        }
    },
    'trophy': {
        origin: 'Greek',
        meaning: 'nourishment, growth',
        examples: ['atrophy', 'hypertrophy', 'dystrophy', 'eutrophy'],
        usage: 'Related to growth or development',
        relatedWords: {
            'atrophy': {
                meaning: 'Wasting away of tissue',
                breakdown: {
                    'a': 'without',
                    'trophy': 'nourishment'
                }
            },
            'hypertrophy': {
                meaning: 'Excessive growth',
                breakdown: {
                    'hyper': 'over',
                    'trophy': 'growth'
                }
            }
        }
    },
    'dynamia': {
        origin: 'Greek',
        meaning: 'power, strength',
        examples: ['adynamia', 'hypodynamia', 'dynamism', 'dynamic'],
        usage: 'Related to power or force',
        relatedWords: {
            'adynamia': {
                meaning: 'Lack of strength',
                breakdown: {
                    'a': 'without',
                    'dynamia': 'strength'
                }
            },
            'hypodynamia': {
                meaning: 'Decreased strength',
                breakdown: {
                    'hypo': 'under',
                    'dynamia': 'strength'
                }
            }
        }
    }
};

function createWordCards() {
    const wordsGrid = document.querySelector('.words-grid');
    wordsGrid.innerHTML = ''; // Clear existing cards
    
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

function showWordDetails(word) {
    const modal = document.querySelector('.modal');
    const modalContent = modal.querySelector('.modal-content');
    
    // Find the word in the database
    let wordData = null;
    let rootWord = null;
    
    for (const [root, data] of Object.entries(rootDatabase)) {
        if (data.relatedWords && data.relatedWords[word]) {
            wordData = data.relatedWords[word];
            rootWord = root;
            break;
        }
    }

    if (!wordData) {
        console.log(`Word data not found for: ${word}`);
        return;
    }

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
                    <span class="separator">-</span>
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

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    createWordCards();
    
    // Close modal when clicking outside
    document.querySelector('.modal').addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });

    // Close modal when clicking the close button
    document.querySelector('.modal').addEventListener('click', (e) => {
        if (e.target.classList.contains('close-modal')) {
            e.target.closest('.modal').style.display = 'none';
        }
    });

    // Update the search functionality
    document.querySelector('.search-input').addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.word-card');
        
        cards.forEach(card => {
            const rootWord = card.querySelector('.latin-root').textContent.toLowerCase();
            const examples = Array.from(card.querySelectorAll('.example-word'))
                .map(example => example.textContent.toLowerCase());
            
            // Show card if either root word or any example matches the search term
            if (rootWord.includes(searchTerm) || examples.some(ex => ex.includes(searchTerm))) {
                card.style.display = 'block';
                
                // If searching for an example word, highlight it
                if (examples.some(ex => ex.includes(searchTerm))) {
                    card.querySelectorAll('.example-word').forEach(exWord => {
                        if (exWord.textContent.toLowerCase().includes(searchTerm)) {
                            exWord.style.backgroundColor = '#B2967D';
                            exWord.style.color = 'white';
                        } else {
                            exWord.style.backgroundColor = '#E7D8C9';
                            exWord.style.color = 'initial';
                        }
                    });
                } else {
                    // Reset example word styling if not matching
                    card.querySelectorAll('.example-word').forEach(exWord => {
                        exWord.style.backgroundColor = '#E7D8C9';
                        exWord.style.color = 'initial';
                    });
                }
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Add this to reset styling when search is cleared
    document.querySelector('.search-input').addEventListener('blur', () => {
        if (document.querySelector('.search-input').value === '') {
            document.querySelectorAll('.example-word').forEach(exWord => {
                exWord.style.backgroundColor = '#E7D8C9';
                exWord.style.color = 'initial';
            });
        }
    });
}); 