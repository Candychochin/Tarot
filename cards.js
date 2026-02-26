const arcanaCards = [
    {
        id: 0,
        name: 'The Fool',
        image: './tarot_final/00-TheFool.webp',
        meaning: {
            general: 'New beginnings, innocence, and a leap of faith.',
            love: 'A new, spontaneous romance or a "fresh start" in an existing relationship.',
            career: 'A new career path or an unconventional job offer.',
            school: 'Taking an unusual elective or starting a brand new degree.',
            finance: 'Risk-taking with money; potential for a new income stream.',
            advice: 'Be brave and embrace the unknown.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Recklessness, risk-taking, and being held back by fear.',
            love: 'Ignoring red flags or a lack of commitment.',
            career: 'A risky career move or a stalled creative project.',
            school: 'Lack of focus or being too afraid to try something new.',
            finance: 'Impulsive spending leading to regret.',
            advice: 'Look before you leap; don’t ignore the facts.',
            yes_no: 'No'
        }
    },
    {
        id: 1,
        name: 'The Magician',
        image: './tarot_final/01-TheMagician.webp',
        meaning: {
            general: 'Manifestation, resourcefulness, and personal power.',
            love: 'Using your charm to attract a partner; a period of high chemistry.',
            career: 'You have the skills to get the promotion or launch your business.',
            school: 'Excellent focus; you have the tools to ace your exams.',
            finance: 'A time to turn your ideas into profit.',
            advice: 'You have everything you need to succeed—take action.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Manipulation, poor planning, and untapped talents.',
            love: 'A partner who is not what they seem; deceptive charm.',
            career: 'Misuse of power at work or feeling uninspired.',
            school: 'Cheating or failing to apply your skills properly.',
            finance: 'A "get rich quick" scam or financial manipulation.',
            advice: 'Reassess your intentions; are you being honest with yourself?',
            yes_no: 'No'
        }
    },
    {
        id: 2,
        name: 'The High Priestess',
        image: './tarot_final/02-TheHighPriestess.webp',
        meaning: {
            general: 'Intuition, mystery, and the subconscious mind.',
            love: 'A deep, psychic connection; or perhaps someone is keeping secrets.',
            career: 'Follow your gut feeling about a workplace situation.',
            school: 'Focus on hidden knowledge, research, or psychology.',
            finance: 'Be silent about your financial plans for now.',
            advice: 'Trust your intuition over logic right now.',
            yes_no: 'Maybe / Wait'
        },
        reversed: {
            general: 'Secrets revealed, disconnected from intuition, and surface-level living.',
            love: 'Hidden motives in a relationship or ignoring your gut feeling.',
            career: 'Workplace gossip or a lack of transparency in your company.',
            school: 'Surface-level learning; you are missing the deeper meaning.',
            finance: 'Hidden costs or ignoring financial red flags.',
            advice: 'Stop overthinking and reconnect with your inner voice.',
            yes_no: 'Wait'
        }
    },
    {
        id: 3,
        name: 'The Empress',
        image: './tarot_final/03-TheEmpress.webp',
        meaning: {
            general: 'Abundance, nature, and nurturing.',
            love: 'A very fertile, loving, and supportive relationship.',
            career: 'A creative project is blooming; great for artists.',
            school: 'Success through creativity rather than just memorization.',
            finance: 'Material comfort and financial growth.',
            advice: 'Nurture yourself and those around you.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Dependency, creative block, and lack of growth.',
            love: 'Suffocating a partner or feeling unloved.',
            career: 'A project that is failing to grow; feeling unproductive.',
            school: 'Lack of inspiration or struggling with self-expression.',
            finance: 'Financial overspending on luxuries you can’t afford.',
            advice: 'Work on your self-esteem before caring for others.',
            yes_no: 'No'
        }
    },
    {
        id: 4,
        name: 'The Emperor',
        image: './tarot_final/04-TheEmperor.webp',
        meaning: {
            general: 'Authority, structure, and foundation.',
            love: 'A stable, perhaps traditional or protective relationship.',
            career: 'Promotion to a leadership role or a period of discipline.',
            school: 'Strict study schedules and organization will lead to success.',
            finance: 'Disciplined budgeting and long-term investments.',
            advice: 'Take control of the situation and set firm boundaries.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Tyranny, lack of discipline, and power struggles.',
            love: 'A controlling or overbearing partner; lack of balance.',
            career: 'An inflexible boss or a chaotic work environment.',
            school: 'Rebelling against authority or lack of academic structure.',
            finance: 'Poor financial management and lack of control.',
            advice: 'Loosen your grip; try to lead with empathy instead of force.',
            yes_no: 'No'
        }
    },
    {
        id: 5,
        name: 'The Hierophant',
        image: './tarot_final/05-TheHierophant.webp',
        meaning: {
            general: 'Tradition, conformity, and spiritual wisdom.',
            love: 'A committed relationship, marriage, or traditional dating.',
            career: 'Working within a large organization or finding a mentor.',
            school: 'Traditional education; following the syllabus strictly.',
            finance: 'Stick to safe, traditional ways of managing money.',
            advice: 'Follow the established rules for now.',
            yes_no: 'Maybe'
        },
        reversed: {
            general: 'Rebellion, unconventionality, and new ways of thinking.',
            love: 'A relationship that breaks tradition or social norms.',
            career: 'Challenging the status quo at work or starting a solo path.',
            school: 'Self-taught learning or questioning the traditional syllabus.',
            finance: 'Risky, non-traditional investments.',
            advice: 'Don’t be afraid to break the rules to find your own truth.',
            yes_no: 'Maybe'
        }
    },
    {
        id: 6,
        name: 'The Lovers',
        image: './tarot_final/06-TheLovers.webp',
        meaning: {
            general: 'Harmony, relationships, and choices.',
            love: 'A deep soulmate connection or a major relationship choice.',
            career: 'A partnership or a decision between two career paths.',
            school: 'A choice between two majors or a successful group project.',
            finance: 'A major financial decision requiring careful thought.',
            advice: 'Align your choices with your personal values.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Disharmony, imbalance, and poor choices.',
            love: 'A disconnect in values or a difficult breakup.',
            career: 'Conflict with a business partner; a decision you regret.',
            school: 'Distraction from studies due to relationship drama.',
            finance: 'Irresponsible financial decisions made for temporary pleasure.',
            advice: 'Take responsibility for the choices you’ve made.',
            yes_no: 'No'
        }
    },
    {
        id: 7,
        name: 'The Chariot',
        image: './tarot_final/07-TheChariot.webp',
        meaning: {
            general: 'Control, willpower, and victory.',
            love: 'Taking charge of your dating life; overcoming obstacles together.',
            career: 'Ambition and drive lead to a major professional win.',
            school: 'Staying focused and "driving" through a difficult semester.',
            finance: 'Success in financial goals through sheer determination.',
            advice: 'Stay disciplined and keep your eyes on the prize.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Lack of control, aggression, and lack of direction.',
            love: 'The relationship is moving too fast or crashing.',
            career: 'Ambition without a plan; feeling "stuck" despite effort.',
            school: 'Burnout; you are pushing too hard and losing focus.',
            finance: 'Financial losses due to impulsive, aggressive moves.',
            advice: 'Slow down and regain control before you crash.',
            yes_no: 'No'
        }
    },
    {
        id: 8,
        name: 'Strength',
        image: './tarot_final/08-Strength.webp',
        meaning: {
            general: 'Courage, persuasion, and influence.',
            love: 'Patience and compassion are needed in your relationship.',
            career: 'Managing workplace conflict with kindness and tact.',
            school: 'The inner strength to keep going when things get tough.',
            finance: 'Controlled spending; having the power to resist impulse.',
            advice: 'Tame your impulses with soft power, not force.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Self-doubt, weakness, and raw emotion.',
            love: 'Low self-esteem in love; or letting anger get the best of you.',
            career: 'Lacking the courage to stand up for yourself at work.',
            school: 'Giving up easily when a subject gets difficult.',
            finance: 'Compulsive spending caused by emotional distress.',
            advice: 'Find your inner courage; you are stronger than you feel.',
            yes_no: 'No'
        }
    },
    {
        id: 9,
        name: 'The Hermit',
        image: './tarot_final/09-TheHermit.webp',
        meaning: {
            general: 'Soul-searching, introspection, and solitude.',
            love: 'A period of being single or needing space within a relationship.',
            career: 'Considering a career change; looking for deeper meaning.',
            school: 'Self-study or a period of intense focus on a thesis.',
            finance: 'Not a time for spending; focus on your inner wealth.',
            advice: 'Step back from the noise and listen to your inner self.',
            yes_no: 'Maybe / No'
        },
        reversed: {
            general: 'Loneliness, isolation, and withdrawal.',
            love: 'Being too isolated; or a relationship where you feel lonely.',
            career: 'Over-analyzing a career move; social anxiety at work.',
            school: 'Being an outcast or failing to ask for help when needed.',
            finance: 'Being "cheap" to the point of missing out on life.',
            advice: 'It is time to come back to the world and reconnect.',
            yes_no: 'No'
        }
    },
    {
        id: 10,
        name: 'Wheel of Fortune',
        image: './tarot_final/10-WheelOfFortune.webp',
        meaning: {
            general: 'Luck, karma, and life cycles.',
            love: 'A fated meeting or a sudden change in relationship status.',
            career: 'A sudden promotion or unexpected professional shift.',
            school: 'Grades or opportunities may shift unexpectedly; stay adaptable.',
            finance: 'A change in fortune; could be a windfall or a shift in luck.',
            advice: 'Go with the flow; things are changing for a reason.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Bad luck, resistance to change, and breaking cycles.',
            love: 'A sudden, negative shift in a relationship; bad timing.',
            career: 'Unexpected setbacks or a stroke of bad luck at work.',
            school: 'Grades dropping unexpectedly; a difficult learning cycle.',
            finance: 'A period of financial hardship; watch your spending.',
            advice: 'Accept that you can’t control everything.',
            yes_no: 'No'
        }
    },
    {
        id: 11,
        name: 'Justice',
        image: './tarot_final/11-Justice.webp',
        meaning: {
            general: 'Fairness, truth, and law.',
            love: 'A balanced relationship; or legal matters like marriage/divorce.',
            career: 'A fair outcome in a workplace dispute or contract signing.',
            school: 'Your grades will accurately reflect your effort.',
            finance: 'Settling debts or legal financial matters.',
            advice: 'Be honest and weigh all options before acting.',
            yes_no: 'Maybe'
        },
        reversed: {
            general: 'Injustice, lack of accountability, and unfairness.',
            love: 'An unfair dynamic in love or someone lying to you.',
            career: 'Being blamed for something you didn’t do at work.',
            school: 'Being graded unfairly or facing an academic bias.',
            finance: 'Unfair financial dealings or legal trouble.',
            advice: 'Be honest even if the world isn’t being fair to you.',
            yes_no: 'No'
        }
    },
    {
        id: 12,
        name: 'The Hanged Man',
        image: './tarot_final/12-TheHangedMan.webp',
        meaning: {
            general: 'Pause, surrender, and new perspectives.',
            love: 'A stalemate; waiting for the right time to move forward.',
            career: 'A period of uncertainty; things are on hold.',
            school: 'A break from studies or seeing a subject in a new light.',
            finance: 'Financial stagnation; wait before investing.',
            advice: 'Let go of control and look at things from a different angle.',
            yes_no: 'Maybe / No'
        },
        reversed: {
            general: 'Delay, resistance, and stagnation.',
            love: 'Waiting too long for someone who won’t change.',
            career: 'Working hard but getting nowhere; a wasted sacrifice.',
            school: 'Procrastination that leads to unnecessary stress.',
            finance: 'Wasting money on things that provide no value.',
            advice: 'Stop waiting for "the right time" and start moving.',
            yes_no: 'No'
        }
    },
    {
        id: 13,
        name: 'Death',
        image: './tarot_final/13-Death.webp',
        meaning: {
            general: 'Endings, transformation, and transition.',
            love: 'The end of a relationship or a major shift in dynamic.',
            career: 'Leaving a job to start something completely different.',
            school: 'Graduation or changing your major entirely.',
            finance: 'An old way of making money ends, making room for a new one.',
            advice: 'Embrace change; you must let go of the old to grow.',
            yes_no: 'No'
        },
        reversed: {
            general: 'Resistance to change, repeating patterns, and stagnation.',
            love: 'Holding onto a dead relationship; fear of being single.',
            career: 'Staying in a job you hate because you’re afraid of the unknown.',
            school: 'Refusing to learn from mistakes; academic stubbornness.',
            finance: 'Continuing bad financial habits that you know are failing.',
            advice: 'Let go; the more you resist, the more it hurts.',
            yes_no: 'No'
        }
    },
    {
        id: 14,
        name: 'Temperance',
        image: './tarot_final/14-Temperance.webp',
        meaning: {
            general: 'Balance, patience, and moderation.',
            love: 'A peaceful, harmonious, and balanced relationship.',
            career: 'Finding a good work-life balance or a calm work environment.',
            school: 'Blending different subjects or studying with a clear head.',
            finance: 'Moderate spending and careful financial planning.',
            advice: 'Find the middle ground; avoid extremes.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Imbalance, excess, and lack of long-term vision.',
            love: 'Conflict caused by extremes or lack of compromise.',
            career: 'Burnout due to poor work-life balance.',
            school: 'Cramming or failing to manage your study time.',
            finance: 'Spending money as soon as you get it; no balance.',
            advice: 'Find your center; you are living in extremes.',
            yes_no: 'No'
        }
    },
    {
        id: 15,
        name: 'The Devil',
        image: './tarot_final/15-TheDevil.webp',
        meaning: {
            general: 'Addiction, restriction, and attachment.',
            love: 'An unhealthy obsession or a relationship based only on lust.',
            career: 'Feeling trapped in a job or driven by greed.',
            school: 'Procrastination or being "chained" to bad study habits.',
            finance: 'Debt or overspending on things you don\'t need.',
            advice: 'Break free from the things that are holding you back.',
            yes_no: 'No'
        },
        reversed: {
            general: 'Release, breaking free, and restoration of control.',
            love: 'Leaving a toxic partner; overcoming an unhealthy obsession.',
            career: 'Quitting a job that felt like a trap.',
            school: 'Breaking a bad habit like procrastination or cheating.',
            finance: 'Paying off debts and gaining financial freedom.',
            advice: 'You have the power to walk away now. Do it.',
            yes_no: 'Yes'
        }
    },
    {
        id: 16,
        name: 'The Tower',
        image: './tarot_final/16-TheTower.webp',
        meaning: {
            general: 'Sudden change, upheaval, and revelation.',
            love: 'A sudden breakup or a shocking realization about a partner.',
            career: 'Unexpected job loss or a massive company shake-up.',
            school: 'A sudden change in plans or a failing grade that forces a rethink.',
            finance: 'A sudden financial loss or an unexpected expense.',
            advice: 'Let the old structures fall; you will build something stronger.',
            yes_no: 'No'
        },
        reversed: {
            general: 'Personal upheaval, avoiding disaster, and delayed crisis.',
            love: 'Avoiding a breakup that needs to happen; building tension.',
            career: 'A disaster you barely escaped; or a slow company decline.',
            school: 'Fear of failing; a crisis that happens internally.',
            finance: 'Narrowly avoiding financial ruin; or a long period of loss.',
            advice: 'Don’t ignore the cracks in your foundation.',
            yes_no: 'Maybe'
        }
    },
    {
        id: 17,
        name: 'The Star',
        image: './tarot_final/17-TheStar.webp',
        meaning: {
            general: 'Hope, faith, and rejuvenation.',
            love: 'Healing after a breakup or a very hopeful new romance.',
            career: 'Success is coming; a period of inspiration and recognition.',
            school: 'Renewed interest in studies; a very bright academic future.',
            finance: 'Financial recovery and feeling optimistic about money.',
            advice: 'Keep the faith; the worst is behind you.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Lack of faith, despair, and discouragement.',
            love: 'Feeling hopeless about love; a lack of romantic spark.',
            career: 'Feeling uninspired or like your dreams are out of reach.',
            school: 'Academic discouragement; feeling like you’ll never succeed.',
            finance: 'Feeling pessimistic about your financial future.',
            advice: 'The stars are still there; you just need to look up.',
            yes_no: 'No'
        }
    },
    {
        id: 18,
        name: 'The Moon',
        image: './tarot_final/18-TheMoon.webp',
        meaning: {
            general: 'Illusion, fear, and anxiety.',
            love: 'Confusion in a relationship; things are not what they seem.',
            career: 'Uncertainty at work; be careful of office gossip or hidden agendas.',
            school: 'Feeling lost in a subject or confused about your path.',
            finance: 'Hidden financial risks; don’t sign anything yet.',
            advice: 'Be careful; not everything is as it appears.',
            yes_no: 'No'
        },
        reversed: {
            general: 'Release of fear, clarity, and secrets coming to light.',
            love: 'Finding out the truth about a partner; ending confusion.',
            career: 'A workplace mystery is solved; clarity in your path.',
            school: 'Understanding a difficult subject after much confusion.',
            finance: 'Uncovering a financial error or hidden cost.',
            advice: 'The fog is lifting; trust what you see now.',
            yes_no: 'Yes'
        }
    },
    {
        id: 19,
        name: 'The Sun',
        image: './tarot_final/19-TheSun.webp',
        meaning: {
            general: 'Positivity, fun, and success.',
            love: 'A happy, vibrant, and joyful relationship.',
            career: 'Success, public recognition, and professional joy.',
            school: 'Passing with flying colors; feeling confident and smart.',
            finance: 'Financial abundance and prosperity.',
            advice: 'Enjoy this moment; you have every reason to be happy.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Temporary depression, lack of success, or over-optimism.',
            love: 'A "cloudy" patch in a relationship; boredom or small lies.',
            career: 'Success is delayed; or being too cocky at work.',
            school: 'Struggling with a grade but not for long; keep trying.',
            finance: 'Financial success is present but not as much as expected.',
            advice: 'Stay positive; the clouds are only temporary.',
            yes_no: 'Maybe / Yes'
        }
    },
    {
        id: 20,
        name: 'Judgement',
        image: './tarot_final/20-Judgement.webp',
        meaning: {
            general: 'Rebirth, inner calling, and absolution.',
            love: 'A relationship milestone or evaluating a past partner.',
            career: 'Finding your true professional calling.',
            school: 'A final assessment or making a big decision about your future.',
            finance: 'A time to evaluate your spending habits and make a change.',
            advice: 'Forgive yourself and others; it’s time to move on.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Self-doubt, refusal of a calling, and stagnation.',
            love: 'Ignoring lessons from the past; or being too critical of a partner.',
            career: 'Ignoring a promotion or a new career path due to fear.',
            school: 'Failing to learn from an academic mistake.',
            finance: 'Making the same financial mistakes over and over.',
            advice: 'Stop judging yourself so harshly and move on.',
            yes_no: 'No'
        }
    },
    {
        id: 21,
        name: 'The World',
        image: './tarot_final/21-TheWorld.webp',
        meaning: {
            general: 'Completion, integration, and travel.',
            love: 'A relationship reaching its full potential; a "happily ever after."',
            career: 'Achieving a major career goal or working internationally.',
            school: 'Successful graduation or completing a long-term project.',
            finance: 'Financial security and reaching your savings goals.',
            advice: 'Celebrate your success; you have come a long way.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Lack of closure, incompletion, and delays.',
            love: 'A relationship that hasn’t reached its full potential; no closure.',
            career: 'A project that is almost finished but stuck on the last step.',
            school: 'Delaying graduation or not finishing a final thesis.',
            finance: 'Financial goals are close but not quite reached.',
            advice: 'Tie up your loose ends before you move to the next thing.',
            yes_no: 'No / Wait'
        }
    }
];

//  ===== arcana cards =====


const wandsCards = [
    {
        id: 22,
        name: 'Ace of Wands',
        image: './tarot_final/Wands01.webp',
        meaning: {
            general: 'A burst of energy, inspiration, and new potential.',
            love: 'A passionate new spark or a boost of excitement in a relationship.',
            career: 'A brilliant new business idea or a high-energy project.',
            school: 'Fresh motivation for a creative subject or a new hobby.',
            finance: 'A new opportunity to make money; follow your passion.',
            advice: 'Seize the moment and take the lead.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Lack of energy, creative blocks, and delays.',
            love: 'A fading spark or a relationship that starts then stops.',
            career: 'A project that lacks direction or a missed opportunity.',
            school: 'Feeling uninspired by your studies.',
            finance: 'Financial ideas that fail to launch.',
            advice: 'Wait for a better time to start your new project.',
            yes_no: 'No'
        }
    },
    {
        id: 23,
        name: 'Two of Wands',
        image: './tarot_final/Wands02.webp',
        meaning: {
            general: 'Planning, making decisions, and looking toward the future.',
            love: 'Discussing long-term plans or travel with a partner.',
            career: 'Expanding your horizons; considering a job abroad or a promotion.',
            school: 'Planning your future career path or choosing a study abroad program.',
            finance: 'Looking at long-term investments rather than quick wins.',
            advice: 'Step out of your comfort zone; the world is yours.',
            yes_no: 'Maybe'
        },
        reversed: {
            general: 'Fear of the unknown, lack of planning, and staying safe.',
            love: 'Being afraid to commit to a future with someone.',
            career: 'Choosing the "safe" option and missing out on growth.',
            school: 'Not planning for your post-graduation life.',
            finance: 'Poor financial planning leading to unexpected costs.',
            advice: 'Don’t let fear keep you from your potential.',
            yes_no: 'No'
        }
    },
    {
        id: 24,
        name: 'Three of Wands',
        image: './tarot_final/Wands03.webp',
        meaning: {
            general: 'Expansion, foresight, and ships coming in.',
            love: 'Your love life is expanding; perhaps meeting someone while traveling.',
            career: 'Your hard work is starting to pay off; success is on the horizon.',
            school: 'Your academic efforts are opening up global opportunities.',
            finance: 'Growth in your bank account; your "investments" are yielding results.',
            advice: 'Keep your eyes on the horizon; your success is coming.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Delays, lack of foresight, and frustrated plans.',
            love: 'Long-distance relationships struggling; or travel plans canceled.',
            career: 'Your "ships" are not coming in; business delays.',
            school: 'Academic opportunities that don’t pan out.',
            finance: 'Expectations for a profit are not met.',
            advice: 'Re-evaluate your long-term strategy.',
            yes_no: 'No'
        }
    },
    {
        id: 25,
        name: 'Four of Wands',
        image: './tarot_final/Wands04.webp',
        meaning: {
            general: 'Celebration, homecoming, and stability.',
            love: 'A happy home life, an engagement, or a joyful wedding.',
            career: 'A workplace celebration or reaching a stable milestone.',
            school: 'Graduation parties or a very successful group project.',
            finance: 'Financial stability that allows for a celebration or home improvement.',
            advice: 'Enjoy your achievements with your loved ones.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Home conflict, lack of support, and canceled events.',
            love: 'Family tension regarding a partner; or a broken engagement.',
            career: 'Lack of recognition at work; or a toxic workplace culture.',
            school: 'Feeling unwelcome in your school environment.',
            finance: 'Overspending on a home that you can’t maintain.',
            advice: 'Focus on your own inner stability first.',
            yes_no: 'No'
        }
    },
    {
        id: 26,
        name: 'Five of Wands',
        image: './tarot_final/Wands05.webp',
        meaning: {
            general: 'Competition, conflict, and disagreement.',
            love: 'Arguments or feeling like you’re competing for someone’s attention.',
            career: 'Office politics or healthy competition for a promotion.',
            school: 'Stiff competition for grades or a spot in a competitive program.',
            finance: 'Disagreements over money or a struggle to keep up with bills.',
            advice: 'Stand your ground, but don’t take the conflict personally.',
            yes_no: 'No'
        },
        reversed: {
            general: 'Avoiding conflict, end of struggle, and harmony.',
            love: 'Peace returning to a relationship after an argument.',
            career: 'The end of workplace competition; or avoiding a necessary fight.',
            school: 'Stressful exams are finally over.',
            finance: 'Resolving a financial dispute.',
            advice: 'Embrace the peace, but don’t ignore the issues that caused the fight.',
            yes_no: 'Yes'
        }
    },
    {
        id: 27,
        name: 'Six of Wands',
        image: './tarot_final/Wands06.webp',
        meaning: {
            general: 'Public recognition, victory, and success.',
            love: 'You and your partner are seen as a "power couple."',
            career: 'Getting the promotion or public praise for a job well done.',
            school: 'Winning an award or being the top of your class.',
            finance: 'A financial win that brings you status or prestige.',
            advice: 'Take a bow; you’ve earned this victory.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Fall from grace, lack of recognition, and ego.',
            love: 'Being rejected or feeling overlooked by a partner.',
            career: 'Being passed over for a promotion or losing a "win."',
            school: 'Failing to meet expectations; or academic embarrassment.',
            finance: 'Financial failure after a period of success.',
            advice: 'Don’t let your ego be crushed; just work harder next time.',
            yes_no: 'No'
        }
    },
    {
        id: 28,
        name: 'Seven of Wands',
        image: './tarot_final/Wands07.webp',
        meaning: {
            general: 'Defensiveness, perseverance, and protecting your territory.',
            love: 'Protecting your relationship from outside interference.',
            career: 'Defending your ideas or position against challengers.',
            school: 'Working hard to maintain your high GPA despite obstacles.',
            finance: 'Protecting your wealth; saying no to risky loans.',
            advice: 'Don’t back down; you have the upper hand.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Giving up, feeling overwhelmed, and surrender.',
            love: 'Losing the battle for a relationship; letting others interfere.',
            career: 'Being overwhelmed by your workload and giving up.',
            school: 'Academic pressure becoming too much to handle.',
            finance: 'Losing money due to lack of defense or bad investments.',
            advice: 'It is okay to walk away if the fight isn’t yours anymore.',
            yes_no: 'No'
        }
    },
    {
        id: 29,
        name: 'Eight of Wands',
        image: './tarot_final/Wands08.webp',
        meaning: {
            general: 'Speed, movement, and quick action.',
            love: 'A whirlwind romance or a sudden influx of messages/texts.',
            career: 'A very fast-paced period at work; things are moving quickly.',
            school: 'A sudden burst of productivity or a quick end to a semester.',
            finance: 'Money coming in (or going out) very quickly.',
            advice: 'Act fast; the window of opportunity is narrow.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Slow movement, delays, and frustration.',
            love: 'Communication breakdown or a relationship moving too slowly.',
            career: 'Project delays or missed deadlines.',
            school: 'Feeling like you are making no progress in your studies.',
            finance: 'Delayed payments or slow financial growth.',
            advice: 'Patience is required; things are moving, just slowly.',
            yes_no: 'No'
        }
    },
    {
        id: 30,
        name: 'Nine of Wands',
        image: './tarot_final/Wands09.webp',
        meaning: {
            general: 'Resilience, boundaries, and the "final push."',
            love: 'Protecting your heart after being hurt; stay strong.',
            career: 'You’re tired, but you’re almost at the finish line of a project.',
            school: 'The final stretch of finals week; keep going.',
            finance: 'Financial challenges are almost over; don’t give up now.',
            advice: 'One last effort is all it takes; don’t quit now.',
            yes_no: 'Maybe'
        },
        reversed: {
            general: 'Exhaustion, giving up, and lack of resilience.',
            love: 'Dropping your guard too late; or being too tired to love.',
            career: 'Extreme burnout; you have no energy left for work.',
            school: 'Dropping out or failing due to mental exhaustion.',
            finance: 'Financial struggle that you no longer have the energy to fight.',
            advice: 'Take a break; you cannot pour from an empty cup.',
            yes_no: 'No'
        }
    },
    {
        id: 31,
        name: 'Ten of Wands',
        image: './tarot_final/Wands10.webp',
        meaning: {
            general: 'Burden, responsibility, and overextension.',
            love: 'Taking on all the emotional labor in a relationship.',
            career: 'Being overworked and stressed; too many responsibilities.',
            school: 'A heavy course load that is starting to feel unsustainable.',
            finance: 'Debt or financial responsibilities that feel too heavy to carry.',
            advice: 'Delegate some of your work; you can’t do it all alone.',
            yes_no: 'No'
        },
        reversed: {
            general: 'Release of burdens, delegation, and relief.',
            love: 'Letting go of a partner’s baggage; or sharing the load.',
            career: 'Quitting an overworked job; or hiring help.',
            school: 'Dropping a difficult class to save your mental health.',
            finance: 'Finally getting out from under heavy debt.',
            advice: 'Put the weight down; you were never meant to carry it all.',
            yes_no: 'Yes'
        }
    },
    {
        id: 32,
        name: 'Page of Wands',
        image: './tarot_final/Wands11.webp',
        meaning: {
            general: 'Exploration, excitement, and new messages.',
            love: 'A flirtatious message or a new, fun-loving crush.',
            career: 'A new entry-level job or a fresh creative spark.',
            school: 'Starting a new club or finding a new subject you love.',
            finance: 'A small but exciting new source of income.',
            advice: 'Be playful and follow your curiosity.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Bad news, lack of ambition, and immaturity.',
            love: 'A boring or flaky partner; or a message that hurts.',
            career: 'A project that lacks a solid foundation; or a lazy employee.',
            school: 'Lack of interest in learning; or failing an assignment.',
            finance: 'A small financial loss due to a silly mistake.',
            advice: 'Get serious and stop wasting your potential.',
            yes_no: 'No'
        }
    },
    {
        id: 33,
        name: 'Knight of Wands',
        image: './tarot_final/Wands12.webp',
        meaning: {
            general: 'Action, adventure, and impulsiveness.',
            love: 'A fast-moving, passionate romance that might be short-lived.',
            career: 'Charging ahead with a new project with high confidence.',
            school: 'Diving headfirst into a new area of study with lots of energy.',
            finance: 'Spending money on travel or adventure; watch for impulsive buys.',
            advice: 'Move with courage, but try not to be too reckless.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Recklessness, haste, and scattered energy.',
            love: 'A "player" who leaves as soon as things get serious.',
            career: 'A career path that changes too often; no stability.',
            school: 'Starting many things but finishing none.',
            finance: 'Gambling or very risky financial behavior.',
            advice: 'Think before you act; your speed is causing damage.',
            yes_no: 'No'
        }
    },
    {
        id: 34,
        name: 'Queen of Wands',
        image: './tarot_final/Wands13.webp',
        meaning: {
            general: 'Confidence, independence, and social butterflies.',
            love: 'An attractive, confident partner who knows their worth.',
            career: 'Leading with charisma and getting people on your side.',
            school: 'Being a social leader or a very confident student.',
            finance: 'Having the confidence to manage and grow your money.',
            advice: 'Be bold and let your light shine.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Jealousy, insecurity, and intimidation.',
            love: 'A manipulative or over-jealous partner.',
            career: 'A boss who is threatened by your success.',
            school: 'Academic jealousy or being a "mean girl" in class.',
            finance: 'Spending money to make others jealous.',
            advice: 'Find your own confidence without putting others down.',
            yes_no: 'No'
        }
    },
    {
        id: 35,
        name: 'King of Wands',
        image: './tarot_final/Wands14.webp',
        meaning: {
            general: 'Leadership, vision, and entrepreneurship.',
            love: 'A strong, protective, and visionary partner.',
            career: 'The ultimate boss card; you are a natural-born leader.',
            school: 'Leading a major campus initiative or setting a high standard.',
            finance: 'Major financial success through bold leadership.',
            advice: 'Lead by example and stay focused on the big picture.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Arrogance, poor leadership, and anger.',
            love: 'A partner who is aggressive or too controlling.',
            career: 'An ineffective or mean boss; or a failing business venture.',
            school: 'Lacking the discipline to finish your degree.',
            finance: 'Financial loss due to an oversized ego.',
            advice: 'Humble yourself and listen to others.',
            yes_no: 'No'
        }
    }
];

//  ===== wands cards =====

const cupsCards = [
    {
        id: 36,
        name: 'Ace of Cups',
        image: './tarot_final/Cups01.webp',
        meaning: {
            general: 'New love, overflowing emotions, and spiritual peace.',
            love: 'The start of a deep, emotional connection or a new crush.',
            career: 'Finding a job you truly love or a creative breakthrough.',
            school: 'Finding a mentor or a subject that touches your soul.',
            finance: 'Financial blessings that bring emotional relief.',
            advice: 'Open your heart to the possibilities.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Emotional drain, repressed feelings, and blocked creativity.',
            love: 'A period of emotional coldness or a breakup; feeling unloved.',
            career: 'Lack of passion for your work; feeling uninspired.',
            school: 'Academic burnout; or a lack of connection with your subjects.',
            finance: 'Financial instability caused by emotional spending.',
            advice: 'Self-love is the priority right now; fill your own cup.',
            yes_no: 'No'
        }
    },
    {
        id: 37,
        name: 'Two of Cups',
        image: './tarot_final/Cups02.webp',
        meaning: {
            general: 'Partnership, mutual attraction, and balance.',
            love: 'A soulmate connection; harmony and equality in love.',
            career: 'A great business partnership or a supportive colleague.',
            school: 'Successful collaboration with a study partner.',
            finance: 'A balanced budget or a shared financial goal with a partner.',
            advice: 'Seek connection and cooperation.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Disharmony, breakups, and mismatched values.',
            love: 'Arguments or a deep disconnect with a partner.',
            career: 'A business partnership failing or a toxic work colleague.',
            school: 'Conflict in group projects; or feeling isolated in class.',
            finance: 'Poor shared financial decisions; lack of balance.',
            advice: 'Re-evaluate your connections; make sure they are equal.',
            yes_no: 'No'
        }
    },
    {
        id: 38,
        name: 'Three of Cups',
        image: './tarot_final/Cups03.webp',
        meaning: {
            general: 'Friendship, community, and celebration.',
            love: 'Socializing with your partner or finding love through friends.',
            career: 'A supportive team environment and office celebrations.',
            school: 'A fun social life and great group study sessions.',
            finance: 'Spending money on social events and friends.',
            advice: 'Celebrate with your tribe; you aren’t alone.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Overindulgence, gossip, and social isolation.',
            love: '"Third wheel" situations or a social circle interfering in love.',
            career: 'Office gossip or a team that doesn’t work well together.',
            school: 'Partying too much at the expense of your grades.',
            finance: 'Spending too much on social events or peer pressure.',
            advice: 'Be careful who you trust with your secrets right now.',
            yes_no: 'No'
        }
    },
    {
        id: 39,
        name: 'Four of Cups',
        image: './tarot_final/Cups04.webp',
        meaning: {
            general: 'Apathy, meditation, and missed opportunities.',
            love: 'Feeling bored or uninspired by your current options.',
            career: 'Feeling "stuck" or unmotivated in your current role.',
            school: 'Lacking interest in your classes; daydreaming during lectures.',
            finance: 'Ignoring financial opportunities because of a bad mood.',
            advice: 'Look at what is being offered to you; don’t shut the world out.',
            yes_no: 'No'
        },
        reversed: {
            general: 'Awareness, choosing to move, and ending stagnation.',
            love: 'Choosing to date again after a long period of being single.',
            career: 'Finally accepting a new opportunity or project.',
            school: 'Renewed interest in a subject that was once boring.',
            finance: 'Realizing you have financial options you previously ignored.',
            advice: 'The period of "waiting" is over; it is time to act.',
            yes_no: 'Yes'
        }
    },
    {
        id: 40,
        name: 'Five of Cups',
        image: './tarot_final/Cups05.webp',
        meaning: {
            general: 'Loss, regret, and disappointment.',
            love: 'A painful breakup or focusing too much on past mistakes.',
            career: 'A project that didn’t go as planned; feeling like a failure.',
            school: 'Disappointment over a grade; dwelling on the "what ifs."',
            finance: 'Focusing on money lost rather than what you still have.',
            advice: 'Turn around; there is still hope behind you.',
            yes_no: 'No'
        },
        reversed: {
            general: 'Moving on, acceptance, and finding hope.',
            love: 'Healing from a past heartbreak and opening up again.',
            career: 'Recovering from a business loss and starting fresh.',
            school: 'Recovering from a bad grade and finding new motivation.',
            finance: 'Starting to rebuild your savings after a loss.',
            advice: 'Forgive yourself and look toward the future.',
            yes_no: 'Yes'
        }
    },
    {
        id: 41,
        name: 'Six of Cups',
        image: './tarot_final/Cups06.webp',
        meaning: {
            general: 'Nostalgia, childhood, and innocence.',
            love: 'An ex returning or a sweet, simple, and kind romance.',
            career: 'Returning to a former workplace or a childhood dream job.',
            school: 'Visiting your old school or drawing inspiration from the past.',
            finance: 'Money from family, an inheritance, or a childhood savings account.',
            advice: 'Reconnect with your inner child or your roots.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Living in the past, stuck in nostalgia, and maturity.',
            love: 'Being unable to move on from an ex; or "growing up" in love.',
            career: 'Leaving a family business or a "comfortable" job to grow.',
            school: 'Struggling to adapt to a new school level (like college).',
            finance: 'Financial independence from family support.',
            advice: 'Don’t let the "good old days" stop you from living today.',
            yes_no: 'Maybe'
        }
    },
    {
        id: 42,
        name: 'Seven of Cups',
        image: './tarot_final/Cups07.webp',
        meaning: {
            general: 'Choices, illusions, and wishful thinking.',
            love: 'Too many options; being confused about what you really want.',
            career: 'Having multiple paths but lacking a concrete plan.',
            school: 'Too many interests; struggling to pick a major.',
            finance: 'Be careful of "get rich quick" schemes; they are illusions.',
            advice: 'Stop dreaming and start choosing.',
            yes_no: 'Maybe'
        },
        reversed: {
            general: 'Clarity, making a choice, and reality checks.',
            love: 'Finally seeing a partner for who they really are.',
            career: 'Narrowing down your career options to one solid path.',
            school: 'Finally choosing a major or a specific project goal.',
            finance: 'Seeing through a deceptive financial offer.',
            advice: 'The time for dreaming is over; pick a path and stick to it.',
            yes_no: 'Yes'
        }
    },
    {
        id: 43,
        name: 'Eight of Cups',
        image: './tarot_final/Cups08.webp',
        meaning: {
            general: 'Walking away, abandonment, and searching for truth.',
            love: 'Walking away from a relationship that no longer fulfills you.',
            career: 'Leaving a job to find something more meaningful.',
            school: 'Dropping a class or major that doesn’t fit your soul anymore.',
            finance: 'Moving your money away from a failing investment.',
            advice: 'It’s okay to leave what no longer serves you.',
            yes_no: 'No'
        },
        reversed: {
            general: 'Fear of moving on, stagnation, and staying too long.',
            love: 'Staying in a relationship you know is over; fear of being single.',
            career: 'Staying in a miserable job because it is "safe."',
            school: 'Being afraid to drop a class that isn’t working.',
            finance: 'Holding on to a losing investment out of fear.',
            advice: 'You know what you need to do; don’t be afraid of the change.',
            yes_no: 'No'
        }
    },
    {
        id: 44,
        name: 'Nine of Cups',
        image: './tarot_final/Cups09.webp',
        meaning: {
            general: 'Contentment, satisfaction, and "The Wish Card."',
            love: 'A very happy, fulfilling love life; having your heart’s desire.',
            career: 'Being perfectly happy with your current professional status.',
            school: 'Academic success that makes you feel proud and happy.',
            finance: 'Financial comfort and the ability to treat yourself.',
            advice: 'Your wish is coming true; enjoy your success.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Smugness, greed, and lack of fulfillment.',
            love: 'Getting what you wanted but realizing it doesn’t make you happy.',
            career: 'A "successful" project that feels hollow or unethical.',
            school: 'Passing a test through luck rather than hard work.',
            finance: 'Overspending on material things to hide emotional pain.',
            advice: 'True happiness comes from within, not from what you own.',
            yes_no: 'No'
        }
    },
    {
        id: 45,
        name: 'Ten of Cups',
        image: './tarot_final/Cups10.webp',
        meaning: {
            general: 'Emotional wholeness, happy family, and alignment.',
            love: 'The "happily ever after" card; total emotional fulfillment.',
            career: 'A job that feels like family and aligns with your values.',
            school: 'A very supportive environment where you feel you belong.',
            finance: 'Long-term financial security for the whole family.',
            advice: 'Cherish the love and harmony in your life.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Family conflict, broken home, and mismatched values.',
            love: 'Struggling to find harmony; or family members disliking a partner.',
            career: 'A workplace that feels like a "broken family."',
            school: 'Feeling like you don’t fit in with your peers.',
            finance: 'Disputes over family money or inheritance.',
            advice: 'Focus on healing your personal relationships.',
            yes_no: 'No'
        }
    },
    {
        id: 46,
        name: 'Page of Cups',
        image: './tarot_final/Cups11.webp',
        meaning: {
            general: 'Creativity, intuition, and surprise news.',
            love: 'A sweet message, a new crush, or an emotional surprise.',
            career: 'A creative job offer or following a "hunch" at work.',
            school: 'An artistic breakthrough or a sudden interest in poetry/art.',
            finance: 'A small gift or news about a financial opportunity.',
            advice: 'Be open to your feelings and stay curious.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Emotional immaturity, insecurity, and escaped creativity.',
            love: 'A "drama queen" partner or a crush that is immature.',
            career: 'A creative block or being too sensitive to criticism at work.',
            school: 'Procrastination or being too distracted by social media.',
            finance: 'Silly spending based on a passing whim.',
            advice: 'Grow up a little and take more responsibility for your feelings.',
            yes_no: 'No'
        }
    },
    {
        id: 47,
        name: 'Knight of Cups',
        image: './tarot_final/Cups12.webp',
        meaning: {
            general: 'Romance, charm, and imagination.',
            love: 'A romantic proposal or someone sweeping you off your feet.',
            career: 'A job offer in a creative field or a charming colleague.',
            school: 'Following your artistic passions with great enthusiasm.',
            finance: 'Follow your heart with money, but don’t be too idealistic.',
            advice: 'Follow your heart, but keep your feet on the ground.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Moodiness, unrealistic expectations, and disappointment.',
            love: 'A partner who is hot and cold; or an "empty" romantic gesture.',
            career: 'A job offer that sounds better than it actually is.',
            school: 'Switching subjects as soon as they get hard.',
            finance: 'Spending money on "dreams" that have no foundation.',
            advice: 'Avoid making big decisions while you are emotional.',
            yes_no: 'No'
        }
    },
    {
        id: 48,
        name: 'Queen of Cups',
        image: './tarot_final/Cups13.webp',
        meaning: {
            general: 'Compassion, calm, and emotional stability.',
            love: 'A nurturing, intuitive partner who understands your soul.',
            career: 'Being a supportive mentor or a healer in the workplace.',
            school: 'Using your intuition to guide your academic choices.',
            finance: 'Managing money with intuition and care for others.',
            advice: 'Listen to your heart and lead with empathy.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Emotional insecurity, co-dependency, and being overly sensitive.',
            love: 'Giving too much in a relationship and losing yourself.',
            career: 'Letting your emotions cloud your professional judgment.',
            school: 'Taking academic criticism too personally.',
            finance: 'Giving away too much money to people who take advantage.',
            advice: 'Set emotional boundaries to protect your peace.',
            yes_no: 'No'
        }
    },
    {
        id: 49,
        name: 'King of Cups',
        image: './tarot_final/Cups14.webp',
        meaning: {
            general: 'Emotional balance, control, and generosity.',
            love: 'A mature, calm partner who provides emotional security.',
            career: 'A calm, wise leader who handles stress with grace.',
            school: 'Being the "calm in the storm" during stressful exams.',
            finance: 'Financial wisdom and using your wealth to help others.',
            advice: 'Stay emotionally balanced even if things get chaotic.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Emotional manipulation, moodiness, and volatility.',
            love: 'An emotionally controlling or toxic partner.',
            career: 'An unpredictable boss; or feeling emotionally burnt out.',
            school: 'Feeling completely overwhelmed by academic stress.',
            finance: 'Financial loss due to emotional or impulsive "bets."',
            advice: 'Seek balance and don’t let others manipulate your feelings.',
            yes_no: 'No'
        }
    }
];

//  ===== cups cards =====

const swordsCards = [
    {
        id: 50,
        name: 'Ace of Swords',
        image: './tarot_final/Swords01.webp',
        meaning: {
            general: 'A mental breakthrough, clarity, and sharp intellect.',
            love: 'A moment of truth in a relationship or a very honest conversation.',
            career: 'A new idea that cuts through the noise; success in communication.',
            school: 'Aiding in a difficult exam or finally understanding a complex theory.',
            finance: 'Clear-headed financial decisions; seeing through a bad deal.',
            advice: 'Use your logic and speak your truth clearly.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Confusion, lack of clarity, and misinformation.',
            love: 'A misunderstanding that causes a major argument.',
            career: 'A failure to communicate a plan; or a bad business idea.',
            school: 'Writer’s block or failing to understand a key concept.',
            finance: 'Signing a contract without reading the fine print.',
            advice: 'Wait for the "mental fog" to clear before acting.',
            yes_no: 'No'
        }
    },
    {
        id: 51,
        name: 'Two of Swords',
        image: './tarot_final/Swords02.webp',
        meaning: {
            general: 'Stalemate, indecision, and a crossroads.',
            love: 'Ignoring a relationship problem or being unable to choose between two people.',
            career: 'A difficult choice between two roles; feeling stuck in the middle.',
            school: 'Struggling to choose a major or a topic for a paper.',
            finance: 'Avoiding a financial decision; time to take off the blindfold.',
            advice: 'Stop overthinking and make a choice based on facts.',
            yes_no: 'Maybe / Wait'
        },
        reversed: {
            general: 'Information overload, confusion, and mental turmoil.',
            love: 'A difficult truth comes to light; emotional upheaval.',
            career: 'Being forced to make a decision before you are ready.',
            school: 'Struggling to focus because of too many competing ideas.',
            finance: 'Financial confusion; or realizing you’ve been misled.',
            advice: 'Stop gathering information and start listening to your gut.',
            yes_no: 'No'
        }
    },
    {
        id: 52,
        name: 'Three of Swords',
        image: './tarot_final/Swords03.webp',
        meaning: {
            general: 'Heartbreak, sorrow, and emotional pain.',
            love: 'A painful breakup, betrayal, or a period of grief.',
            career: 'Workplace disappointment or a project being rejected.',
            school: 'Failure in a subject you cared about or social exclusion.',
            finance: 'A stressful financial loss or a contract being broken.',
            advice: 'Allow yourself to feel the pain so you can begin to heal.',
            yes_no: 'No'
        },
        reversed: {
            general: 'Recovery, forgiveness, and releasing pain.',
            love: 'Healing after a breakup; or a couple deciding to try again.',
            career: 'Moving past a workplace failure or rejection.',
            school: 'The end of a difficult academic period.',
            finance: 'Starting to recover from a financial blow.',
            advice: 'Let go of the sorrow; you are ready to heal.',
            yes_no: 'Yes'
        }
    },
    {
        id: 53,
        name: 'Four of Swords',
        image: './tarot_final/Swords04.webp',
        meaning: {
            general: 'Rest, recovery, and contemplation.',
            love: 'Taking a break from dating to recharge your energy.',
            career: 'Taking a vacation or a mental health day to avoid burnout.',
            school: 'A necessary study break; don’t cram, just rest.',
            finance: 'Financial stability that comes from doing nothing; stop spending.',
            advice: 'Withdraw and recharge your batteries before moving forward.',
            yes_no: 'Maybe / Wait'
        },
        reversed: {
            general: 'Restlessness, burnout, and returning to the world too soon.',
            love: 'Waking up to relationship problems after ignoring them.',
            career: 'Returning to work before you have fully recovered from stress.',
            school: 'Pushing through exhaustion; your brain needs a real break.',
            finance: 'Spending money impulsively to relieve stress.',
            advice: 'Don’t rush your recovery; the world can wait.',
            yes_no: 'No'
        }
    },
    {
        id: 54,
        name: 'Five of Swords',
        image: './tarot_final/Swords05.webp',
        meaning: {
            general: 'Conflict, winning at any cost, and hollow victory.',
            love: 'A "win" in an argument that actually hurts the relationship.',
            career: 'Office drama or a cutthroat environment where trust is low.',
            school: 'Competitive peers or feeling like a "loser" in class.',
            finance: 'Financial gain through dishonest means; it won’t last.',
            advice: 'Pick your battles wisely; some wins aren’t worth the cost.',
            yes_no: 'No'
        },
        reversed: {
            general: 'End of conflict, moving on, and resentment.',
            love: 'Letting go of a grudge; or a quiet but painful breakup.',
            career: 'The end of a workplace rivalry; or choosing to leave a toxic job.',
            school: 'Deciding that winning an argument isn’t worth losing a friend.',
            finance: 'Repairing financial damage caused by a past dispute.',
            advice: 'Walk away from the drama; it is not serving you.',
            yes_no: 'Yes'
        }
    },
    {
        id: 55,
        name: 'Six of Swords',
        image: './tarot_final/Swords06.webp',
        meaning: {
            general: 'Transition, moving on, and finding calmer waters.',
            love: 'Leaving a toxic relationship or moving into a more peaceful phase.',
            career: 'Moving to a new department or leaving a stressful job.',
            school: 'Switching schools or finishing a very difficult semester.',
            finance: 'Slowly moving away from debt toward stability.',
            advice: 'Keep moving forward; the worst is behind you.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Stuck in the past, cancelled travel, and difficult transitions.',
            love: 'Refusing to leave a toxic situation; or an ex coming back.',
            career: 'A job move that is delayed or a project that won’t move forward.',
            school: 'Academic delays; or feeling unable to grasp new concepts.',
            finance: 'Financial trouble follows you to a new situation.',
            advice: 'Identify what is keeping you stuck in the past.',
            yes_no: 'No'
        }
    },
    {
        id: 56,
        name: 'Seven of Swords',
        image: './tarot_final/Swords07.webp',
        meaning: {
            general: 'Deception, strategy, and "the lone wolf."',
            love: 'Secrets, infidelity, or someone not being entirely honest.',
            career: 'Strategic moves; or perhaps a colleague taking credit for your work.',
            school: 'Academic dishonesty or finding a clever shortcut to success.',
            finance: 'Be careful of hidden fees or someone trying to scam you.',
            advice: 'Be strategic, but watch your back.',
            yes_no: 'No'
        },
        reversed: {
            general: 'Confession, being caught, and changing your ways.',
            love: 'Coming clean to a partner; or secrets being discovered.',
            career: 'Workplace lies being exposed; or a need for a new strategy.',
            school: 'Getting caught for academic dishonesty; or rethinking your shortcuts.',
            finance: 'Returning stolen money or realizing a scam before it’s too late.',
            advice: 'Honesty is your only path forward right now.',
            yes_no: 'No'
        }
    },
    {
        id: 57,
        name: 'Eight of Swords',
        image: './tarot_final/Swords08.webp',
        meaning: {
            general: 'Feeling trapped, restricted, and victimized.',
            love: 'Feeling like you have no choice in a relationship; self-sabotage.',
            career: 'Feeling stuck in a dead-end job; blindness to other options.',
            school: 'Anxiety about grades that makes you feel paralyzed.',
            finance: 'Debt that makes you feel like you can’t move or breathe.',
            advice: 'The "blindfold" is loose; you can leave whenever you choose.',
            yes_no: 'No'
        },
        reversed: {
            general: 'Self-belief, freedom, and release from restrictions.',
            love: 'Breaking free from a controlling relationship; mental clarity.',
            career: 'Finding a way out of a dead-end job; seeing new options.',
            school: 'Overcoming test anxiety and feeling capable again.',
            finance: 'Creating a plan to finally pay off a "trapping" debt.',
            advice: 'You have always had the power to leave. Now use it.',
            yes_no: 'Yes'
        }
    },
    {
        id: 58,
        name: 'Nine of Swords',
        image: './tarot_final/Swords09.webp',
        meaning: {
            general: 'Anxiety, nightmares, and mental anguish.',
            love: 'Worrying excessively about your partner or the future of love.',
            career: 'Work stress that is keeping you up at night.',
            school: 'Severe exam anxiety or fear of failure.',
            finance: 'Panicking about money, even if the situation isn’t that bad.',
            advice: 'Your fears are likely exaggerated; find a way to calm your mind.',
            yes_no: 'No'
        },
        reversed: {
            general: 'Recovery from anxiety, facing fears, and finding help.',
            love: 'Realizing your fears about a partner were exaggerated.',
            career: 'Work stress begins to lift; or you find a way to cope.',
            school: 'Finding help for academic stress; a mental breakthrough.',
            finance: 'Ending a period of financial panic; realizing it’s fixable.',
            advice: 'The light is returning; don’t be afraid to ask for support.',
            yes_no: 'Yes'
        }
    },
    {
        id: 59,
        name: 'Ten of Swords',
        image: './tarot_final/Swords10.webp',
        meaning: {
            general: 'Rock bottom, betrayal, and a painful ending.',
            love: 'The final end of a relationship; a betrayal that hurts deeply.',
            career: 'A sudden job loss or a project being completely scrapped.',
            school: 'Failing a final exam or being forced to leave a program.',
            finance: 'Financial ruin or a total loss of an investment.',
            advice: 'Accept the end; things can only get better from here.',
            yes_no: 'No'
        },
        reversed: {
            general: 'Recovery, transformation, and avoiding total disaster.',
            love: 'Picking up the pieces after a devastating breakup.',
            career: 'Starting over after a job loss; the only way is up.',
            school: 'Narrowly passing a class you thought you’d fail.',
            finance: 'The worst of the financial crisis has passed.',
            advice: 'You survived the worst; now rebuild.',
            yes_no: 'Yes'
        }
    },
    {
        id: 60,
        name: 'Page of Swords',
        image: './tarot_final/Swords11.webp',
        meaning: {
            general: 'Curiosity, mental agility, and new ideas.',
            love: 'Flirty banter or someone who is mentally stimulating but detached.',
            career: 'Starting a new project that requires a lot of research and talking.',
            school: 'A thirsty mind; great for debating and learning new facts.',
            finance: 'Researching new ways to make money; stay alert for info.',
            advice: 'Keep your eyes open and gather all the facts.',
            yes_no: 'Maybe'
        },
        reversed: {
            general: 'All talk and no action, gossip, and acting like a "know-it-all."',
            love: 'Snarky comments or using words to hurt a partner.',
            career: 'Spreading office rumors; or a project that lacks depth.',
            school: 'Parrot-learning; repeating facts without understanding them.',
            finance: 'Financial news that turns out to be false or exaggerated.',
            advice: 'Think before you speak; words can be weapons.',
            yes_no: 'No'
        }
    },
    {
        id: 61,
        name: 'Knight of Swords',
        image: './tarot_final/Swords12.webp',
        meaning: {
            general: 'Directness, haste, and intellectual drive.',
            love: 'A partner who is very direct and perhaps a bit blunt or cold.',
            career: 'Charging toward a goal with logic and speed.',
            school: 'Writing a paper in one night or crushing a debate.',
            finance: 'Fast-paced financial moves; acting quickly on a tip.',
            advice: 'Go for it, but don’t trample over people’s feelings.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Rudeness, tactlessness, and scattered energy.',
            love: 'A partner who is aggressive or argumentative; lack of empathy.',
            career: 'A "loose cannon" at work; or rushing a project into failure.',
            school: 'Being too confrontational in class; or failing due to haste.',
            finance: 'Losing money because you acted without thinking.',
            advice: 'Slow down and consider the feelings of others.',
            yes_no: 'No'
        }
    },
    {
        id: 62,
        name: 'Queen of Swords',
        image: './tarot_final/Swords13.webp',
        meaning: {
            general: 'Independence, clarity, and boundaries.',
            love: 'A partner who values their space; being realistic about love.',
            career: 'A mentor who gives constructive but harsh criticism.',
            school: 'Total focus and objective thinking in your studies.',
            finance: 'Cutting out unnecessary expenses with surgical precision.',
            advice: 'Be objective and set firm boundaries.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Cold-heartedness, bitterness, and manipulation.',
            love: 'A partner who is using logic to manipulate emotions.',
            career: 'A harsh, unsupportive female authority figure.',
            school: 'Being overly critical of your own or others\' work.',
            finance: 'Financial decisions made out of spite or bitterness.',
            advice: 'Soften your heart; you are becoming too cynical.',
            yes_no: 'No'
        }
    },
    {
        id: 63,
        name: 'King of Swords',
        image: './tarot_final/Swords14.webp',
        meaning: {
            general: 'Mental discipline, authority, and truth.',
            love: 'A relationship based on intellectual connection and respect.',
            career: 'A leader who is fair, logical, and follows the rules.',
            school: 'Academic excellence through logic and structure.',
            finance: 'Expert financial advice or managing money with logic.',
            advice: 'Use your head, not your heart, for this situation.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Abuse of power, irrationality, and cruelty.',
            love: 'A cold, controlling partner; or a legal battle in love.',
            career: 'A manipulative boss who uses their intellect to demean others.',
            school: 'Failing a grade due to an unfair or biased authority.',
            finance: 'Financial corruption or losing a legal case.',
            advice: 'Watch out for people who use their status to hurt you.',
            yes_no: 'No'
        }
    }
];

//  ===== swords cards =====

const pentaclesCards = [
    {
        id: 64,
        name: 'Ace of Pentacles',
        image: './tarot_final/Pentacles01.webp',
        meaning: {
            general: 'A new financial or physical opportunity; manifestation.',
            love: 'A stable new relationship or a gift from a partner.',
            career: 'A new job offer, a raise, or a solid business idea.',
            school: 'A scholarship or a very practical vocational opportunity.',
            finance: 'A new source of income or a successful investment.',
            advice: 'Take the opportunity to build something lasting.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Missed opportunity, lack of planning, and financial instability.',
            love: 'A relationship that is not grounded in reality.',
            career: 'A job offer that falls through or a business delay.',
            school: 'Wasting a scholarship or failing to register for a course.',
            finance: 'A bad investment or unexpected financial drain.',
            advice: 'Double-check your plans; something is missing.',
            yes_no: 'No'
        }
    },
    {
        id: 65,
        name: 'Two of Pentacles',
        image: './tarot_final/Pentacles02.webp',
        meaning: {
            general: 'Balance, multitasking, and adaptability.',
            love: 'Balancing a relationship with work or school life.',
            career: 'Handling multiple projects at once; stay flexible.',
            school: 'Balancing your social life and study schedule.',
            finance: 'Robbing Peter to pay Paul; careful budget management.',
            advice: 'Stay flexible and keep your priorities in order.',
            yes_no: 'Maybe'
        },
        reversed: {
            general: 'Disorganization, overwhelm, and dropping the ball.',
            love: 'Neglecting a relationship because of work; or vice versa.',
            career: 'Too many projects; failing to meet deadlines.',
            school: 'Poor time management leading to academic stress.',
            finance: 'Financial "juggling" that fails; overspending.',
            advice: 'Simplify your life; you are trying to do too much.',
            yes_no: 'No'
        }
    },
    {
        id: 66,
        name: 'Three of Pentacles',
        image: './tarot_final/Pentacles03.webp',
        meaning: {
            general: 'Teamwork, collaboration, and learning.',
            love: 'Building a foundation together; or a relationship with a colleague.',
            career: 'Successful teamwork and recognition for your skills.',
            school: 'Great group projects or learning from a master in your field.',
            finance: 'Investing in your skills or working with a financial planner.',
            advice: 'Collaboration is the key to your success.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Lack of teamwork, poor workmanship, and no growth.',
            love: 'A relationship where you can’t work together on goals.',
            career: 'Conflict with coworkers; or a project with poor quality.',
            school: 'A group project where no one contributes; lack of effort.',
            finance: 'Spending money on low-quality items that don’t last.',
            advice: 'If you want it done right, focus on quality and collaboration.',
            yes_no: 'No'
        }
    },
    {
        id: 67,
        name: 'Four of Pentacles',
        image: './tarot_final/Pentacles04.webp',
        meaning: {
            general: 'Conservation, security, and possessiveness.',
            love: 'Holding on too tight to a partner; fear of change.',
            career: 'Playing it safe at work; staying in a job just for the money.',
            school: 'Sticking to what you know; being afraid to try new subjects.',
            finance: 'Budgeting strictly; or being "cheap" with your money.',
            advice: 'Security is good, but don’t be afraid to let go a little.',
            yes_no: 'Maybe'
        },
        reversed: {
            general: 'Greed, letting go, and spending too much.',
            love: 'Jealousy and possessiveness; or finally opening your heart.',
            career: 'Being too afraid to take a new job; or being reckless at work.',
            school: 'Being stingy with your notes/help; or failing to study at all.',
            finance: 'A major financial loss; or finally spending on something useful.',
            advice: 'Find the balance between saving and living.',
            yes_no: 'Maybe'
        }
    },
    {
        id: 68,
        name: 'Five of Pentacles',
        image: './tarot_final/Pentacles05.webp',
        meaning: {
            general: 'Hardship, poverty, and isolation.',
            love: 'Feeling "left out in the cold" by a partner; emotional distance.',
            career: 'Job loss or a period of financial struggle in your business.',
            school: 'Struggling with tuition fees or feeling like an academic outsider.',
            finance: 'Financial loss or significant debt; ask for help.',
            advice: 'Look for the help that is available to you; you aren’t alone.',
            yes_no: 'No'
        },
        reversed: {
            general: 'Recovery, end of hardship, and renewed health.',
            love: 'A relationship recovering from a tough time.',
            career: 'Finally finding a job after a long period of unemployment.',
            school: 'Finding the resources you need to continue studying.',
            finance: 'Slowly paying off debts and finding stability.',
            advice: 'The "winter" is ending; welcome the help coming your way.',
            yes_no: 'Yes'
        }
    },
    {
        id: 69,
        name: 'Six of Pentacles',
        image: './tarot_final/Pentacles06.webp',
        meaning: {
            general: 'Generosity, charity, and sharing wealth.',
            love: 'A balanced relationship where both give and take equally.',
            career: 'A generous boss or being rewarded for your hard work.',
            school: 'Receiving a grant, scholarship, or help from a teacher.',
            finance: 'Receiving money or being in a position to help others.',
            advice: 'Give what you can, and accept help when offered.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Selfishness, debt, and one-sided charity.',
            love: 'An unequal relationship; one person does all the giving.',
            career: 'A boss who underpays; or you taking credit for others\' work.',
            school: 'Refusing to help peers; or being "teacher\'s pet" for wrong reasons.',
            finance: 'Taking on bad debt; or being "stung" by a loan shark.',
            advice: 'Ensure your generosity (or receiving) is balanced.',
            yes_no: 'No'
        }
    },
    {
        id: 70,
        name: 'Seven of Pentacles',
        image: './tarot_final/Pentacles07.webp',
        meaning: {
            general: 'Patience, investment, and waiting for the harvest.',
            love: 'The "long game" in love; waiting for a relationship to grow.',
            career: 'Seeing the long-term results of your hard work.',
            school: 'Studying hard and waiting for your final grades to reflect it.',
            finance: 'Long-term investments; waiting for your money to grow.',
            advice: 'Be patient; your hard work is about to pay off.',
            yes_no: 'Yes / Wait'
        },
        reversed: {
            general: 'Impatience, lack of reward, and wasted effort.',
            love: 'Putting effort into a relationship that gives nothing back.',
            career: 'A dead-end job where hard work goes unnoticed.',
            school: 'Studying the wrong things; or wanting success without effort.',
            finance: 'Financial impatience; taking money out of an investment too early.',
            advice: 'Re-evaluate where you are putting your energy.',
            yes_no: 'No'
        }
    },
    {
        id: 71,
        name: 'Eight of Pentacles',
        image: './tarot_final/Pentacles08.webp',
        meaning: {
            general: 'Apprenticeship, mastery, and diligence.',
            love: 'Working hard on a relationship; or meeting someone at work.',
            career: 'Honing your craft; becoming an expert in your field.',
            school: 'Intense studying and focus; mastering a new skill.',
            finance: 'Making money through hard, honest work.',
            advice: 'Keep practicing; mastery takes time and effort.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Lack of focus, cutting corners, and laziness.',
            love: 'Neglecting the small things that make a relationship work.',
            career: 'Being bored with your job; producing low-quality work.',
            school: 'Lacking the discipline to finish your assignments.',
            finance: 'Financial scams; or "get rich quick" ideas that fail.',
            advice: 'Success requires consistent, honest effort.',
            yes_no: 'No'
        }
    },
    {
        id: 72,
        name: 'Nine of Pentacles',
        image: './tarot_final/Pentacles09.webp',
        meaning: {
            general: 'Independence, luxury, and self-sufficiency.',
            love: 'Being happy being single; or a relationship that allows for freedom.',
            career: 'Reaching a high level of success on your own terms.',
            school: 'Self-study and academic independence; doing it on your own.',
            finance: 'Financial independence and enjoying the finer things.',
            advice: 'Enjoy the fruits of your labor; you’ve earned it.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Over-spending, dependency, and lack of self-discipline.',
            love: 'Being with someone just for their money; or vice versa.',
            career: 'Living beyond your means; or being "fake" successful.',
            school: 'Relying on others to pass your classes.',
            finance: 'Financial instability; "all show and no substance."',
            advice: 'Work on your own independence and self-worth.',
            yes_no: 'No'
        }
    },
    {
        id: 73,
        name: 'Ten of Pentacles',
        image: './tarot_final/Pentacles10.webp',
        meaning: {
            general: 'Legacy, inheritance, and long-term success.',
            love: 'A stable, multi-generational family life; long-term commitment.',
            career: 'Working for a family business or building a lasting career.',
            school: 'Completing your degree; family pride in your achievements.',
            finance: 'Inheritance, property, or long-term financial security.',
            advice: 'Focus on building something that will last for years.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Family feud, financial loss, and instability.',
            love: 'Family meddling in your love life; or a rocky home life.',
            career: 'A business failure; or a workplace that lacks tradition.',
            school: 'Feeling like you’ve let your family down academically.',
            finance: 'Inheritance disputes or losing long-term assets.',
            advice: 'Protect your foundations; something is threatening your stability.',
            yes_no: 'No'
        }
    },
    {
        id: 74,
        name: 'Page of Pentacles',
        image: './tarot_final/Pentacles11.webp',
        meaning: {
            general: 'Ambition, manifestation, and new beginnings.',
            love: 'A practical, grounded new relationship or interest.',
            career: 'A new job opportunity or a chance to learn a new skill.',
            school: 'Starting a new course or degree with great focus.',
            finance: 'A small windfall or a new way to save money.',
            advice: 'Stay grounded and keep your goals in sight.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Lack of progress, procrastination, and unrealistic goals.',
            love: 'A relationship that is going nowhere; lack of commitment.',
            career: 'Failing to follow through on a job opportunity.',
            school: 'Failing a course because you didn’t do the work.',
            finance: 'Financial immaturity; wasting money on fads.',
            advice: 'Stop dreaming and start doing the groundwork.',
            yes_no: 'No'
        }
    },
    {
        id: 75,
        name: 'Knight of Pentacles',
        image: './tarot_final/Pentacles12.webp',
        meaning: {
            general: 'Routine, dependability, and hard work.',
            love: 'A very reliable and steady partner; slow-moving but solid.',
            career: 'Working hard every day to reach your goals; consistency.',
            school: 'Sticking to a strict study routine; no shortcuts.',
            finance: 'Safe, steady financial growth through slow saving.',
            advice: 'Keep grinding; the slow and steady approach wins the race.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Boredom, stagnation, and being "stuck in a rut."',
            love: 'A relationship that has become dull or routine.',
            career: 'Feeling like a "cog in a machine"; or being lazy at work.',
            school: 'Academic apathy; doing the bare minimum to pass.',
            finance: 'Money stagnation; neither growing nor shrinking.',
            advice: 'Break your routine; you need a fresh perspective.',
            yes_no: 'No'
        }
    },
    {
        id: 76,
        name: 'Queen of Pentacles',
        image: './tarot_final/Pentacles13.webp',
        meaning: {
            general: 'Nurturing, practical, and resourceful.',
            love: 'A stable, caring, and sensual partner who loves to provide.',
            career: 'Being a grounded, practical leader who gets things done.',
            school: 'Success in practical subjects like business, science, or home ec.',
            finance: 'Financial security and managing your home with care.',
            advice: 'Take care of your practical needs and those you love.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Work-home imbalance, insecurity, and neglect.',
            love: 'Being too busy with work to care for your partner.',
            career: 'A toxic work environment; or lack of practical leadership.',
            school: 'Feeling ungrounded and unable to focus on studies.',
            finance: 'Poor home management; or spending to hide insecurity.',
            advice: 'Reconnect with your physical needs and your home life.',
            yes_no: 'No'
        }
    },
    {
        id: 77,
        name: 'King of Pentacles',
        image: './tarot_final/Pentacles14.webp',
        meaning: {
            general: 'Abundance, security, and ultimate success.',
            love: 'A high-status, stable, and generous partner.',
            career: 'Reaching the top of your career; being a successful mogul.',
            school: 'The ultimate academic achievement; mastering your field.',
            finance: 'Extreme financial wealth and professional security.',
            advice: 'Lead with practicality and enjoy your abundance.',
            yes_no: 'Yes'
        },
        reversed: {
            general: 'Greed, corruption, and poor business management.',
            love: 'A partner who is obsessed with status or money; coldness.',
            career: 'A failing business due to poor leadership or laziness.',
            school: 'Using your education for dishonest or greedy reasons.',
            finance: 'Significant financial loss due to arrogance or waste.',
            advice: 'Don’t put money before people.',
            yes_no: 'No'
        }
    }
];

//  ===== pentacles cards =====

const fullDeck = [
    ...arcanaCards,
    ...wandsCards,
    ...cupsCards,
    ...swordsCards,
    ...pentaclesCards
]

// ===== making full deck =====