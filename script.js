// 单词数据
const wordData = [
    {
        word: 'example',
        phonetic: '/ɪɡˈzæmpl/',
        etymology: 'ex (out) + ample (sample)',
        englishDefinition: 'a thing characteristic of its kind or illustrating a general rule',
        chineseTranslation: '例子，范例',
        exampleSentence: 'This is an example of how to use the word in a sentence.',
        sentenceTranslation: '这是一个如何在句子中使用该单词的例子。',
        imageUrl: 'https://via.placeholder.com/200',
        level: '基础',
        category: '日常用语'
    },
    {
        word: 'progress',
        phonetic: '/ˈprəʊɡres/',
        etymology: 'pro (forward) + gress (to go, step)',
        englishDefinition: 'forward or onward movement toward a destination',
        chineseTranslation: '进步，进展',
        exampleSentence: 'She is making good progress in her studies.',
        sentenceTranslation: '她在学习上取得了良好的进展。',
        imageUrl: 'https://via.placeholder.com/200',
        level: '基础',
        category: '日常用语'
    },
    {
        word: 'vocabulary',
        phonetic: '/vəˈkæbjʊləri/',
        etymology: 'vocab (word) + ulary (collection)',
        englishDefinition: 'the body of words used in a particular language',
        chineseTranslation: '词汇，词汇量',
        exampleSentence: 'Reading books is a great way to increase your vocabulary.',
        sentenceTranslation: '阅读书籍是增加词汇量的好方法。',
        imageUrl: 'https://via.placeholder.com/200',
        level: '中级',
        category: '语言学习'
    },
    // 雅思8分所需的高级词汇 - 学术类
    {
        word: 'ubiquitous',
        phonetic: '/juːˈbɪkwɪtəs/',
        etymology: 'ubi (where) + quitous (everywhere)',
        englishDefinition: 'present, appearing, or found everywhere',
        chineseTranslation: '无处不在的，普遍存在的',
        exampleSentence: 'Mobile phones have become ubiquitous in modern society, fundamentally changing how we communicate.',
        sentenceTranslation: '手机在现代社会已变得无处不在，从根本上改变了我们的沟通方式。',
        imageUrl: 'https://via.placeholder.com/200',
        level: '高级',
        category: '学术词汇'
    },
    {
        word: 'ameliorate',
        phonetic: '/əˈmiːlɪəreɪt/',
        etymology: 'a (to) + melior (better)',
        englishDefinition: 'to make something bad or unsatisfactory better',
        chineseTranslation: '改善，ameliorate',
        exampleSentence: 'The government implemented new policies to ameliorate the economic conditions in rural areas.',
        sentenceTranslation: '政府实施了新政策，以改善农村地区的经济状况。',
        imageUrl: 'https://via.placeholder.com/200',
        level: '高级',
        category: '学术词汇'
    },
    {
        word: 'dichotomy',
        phonetic: '/daɪˈkɒtəmi/',
        etymology: 'dicho (in two) + tomy (cutting)',
        englishDefinition: 'a division or contrast between two things that are or are represented as being opposed or entirely different',
        chineseTranslation: '二分法，对立',
        exampleSentence: 'There exists a false dichotomy between economic growth and environmental protection.',
        sentenceTranslation: '经济增长与环境保护之间存在一种错误的二分法。',
        imageUrl: 'https://via.placeholder.com/200',
        level: '高级',
        category: '学术词汇'
    },
    // 雅思8分所需的高级词汇 - 社科类
    {
        word: 'paradigm',
        phonetic: '/ˈpærədaɪm/',
        etymology: 'para (beside) + deig (to show)',
        englishDefinition: 'a typical example or pattern of something; a model',
        chineseTranslation: '范式，典范',
        exampleSentence: 'The discovery led to a paradigm shift in how scientists understand the universe.',
        sentenceTranslation: '这一发现导致了科学家理解宇宙方式的范式转变。',
        imageUrl: 'https://via.placeholder.com/200',
        level: '高级',
        category: '社会科学'
    },
    {
        word: 'meticulous',
        phonetic: '/məˈtɪkjʊləs/',
        etymology: 'metus (fear) + culous (full of)',
        englishDefinition: 'showing great attention to detail; very careful and precise',
        chineseTranslation: '一丝不苟的，极为谨慎的',
        exampleSentence: 'The research paper was the result of meticulous analysis of thousands of survey responses.',
        sentenceTranslation: '这篇研究论文是对数千份调查回复进行一丝不苟分析的结果。',
        imageUrl: 'https://via.placeholder.com/200',
        level: '高级',
        category: '学术词汇'
    },
    {
        word: 'nuance',
        phonetic: '/ˈnjuːɑːns/',
        etymology: 'nue (cloud) + ance (state of)',
        englishDefinition: 'a subtle difference in or shade of meaning, expression, or sound',
        chineseTranslation: '细微差别，微妙之处',
        exampleSentence: 'The translator struggled to capture all the nuances of the original text.',
        sentenceTranslation: '译者努力捕捉原文中所有的细微差别。',
        imageUrl: 'https://via.placeholder.com/200',
        level: '高级',
        category: '社会科学'
    },
    // 雅思8分所需的高级词汇 - 环境类
    {
        word: 'sustainable',
        phonetic: '/səˈsteɪnəbl/',
        etymology: 'sus (under) + tain (hold) + able (capable of)',
        englishDefinition: 'able to be maintained at a certain rate or level; conserving an ecological balance',
        chineseTranslation: '可持续的，可维持的',
        exampleSentence: 'Many cities are developing sustainable transport systems to reduce carbon emissions.',
        sentenceTranslation: '许多城市正在发展可持续交通系统，以减少碳排放。',
        imageUrl: 'https://via.placeholder.com/200',
        level: '中高级',
        category: '环境科学'
    },
    {
        word: 'biodiversity',
        phonetic: '/ˌbaɪəʊdaɪˈvɜːsɪti/',
        etymology: 'bio (life) + diversity (variety)',
        englishDefinition: 'the variety of plant and animal life in the world or in a particular habitat',
        chineseTranslation: '生物多样性',
        exampleSentence: 'The destruction of rainforests threatens biodiversity and accelerates climate change.',
        sentenceTranslation: '雨林的破坏威胁着生物多样性并加速气候变化。',
        imageUrl: 'https://via.placeholder.com/200',
        level: '中高级',
        category: '环境科学'
    },
    // 雅思8分所需的高级词汇 - 科技类
    {
        word: 'innovation',
        phonetic: '/ˌɪnəˈveɪʃn/',
        etymology: 'in (into) + nov (new) + ation (process)',
        englishDefinition: 'the action or process of innovating; a new method, idea, product, etc.',
        chineseTranslation: '创新，革新',
        exampleSentence: 'Technological innovation continues to transform every aspect of modern life.',
        sentenceTranslation: '技术创新继续改变现代生活的各个方面。',
        imageUrl: 'https://via.placeholder.com/200',
        level: '中高级',
        category: '科技'
    },
    {
        word: 'artificial',
        phonetic: '/ˌɑːtɪˈfɪʃl/',
        etymology: 'art (skill) + fic (make) + ial (relating to)',
        englishDefinition: 'made or produced by human beings rather than occurring naturally',
        chineseTranslation: '人造的，人工的',
        exampleSentence: 'Artificial intelligence systems are now capable of performing tasks that once required human intelligence.',
        sentenceTranslation: '人工智能系统现在能够执行曾经需要人类智能的任务。',
        imageUrl: 'https://via.placeholder.com/200',
        level: '中级',
        category: '科技'
    },
    // 雅思8分所需的高级词汇 - 教育类
    {
        word: 'pedagogy',
        phonetic: '/ˈpedəɡɒdʒi/',
        etymology: 'peda (child) + gogy (leading)',
        englishDefinition: 'the method and practice of teaching, especially as an academic subject or theoretical concept',
        chineseTranslation: '教育学，教学法',
        exampleSentence: 'Modern pedagogy emphasizes student-centered learning rather than rote memorization.',
        sentenceTranslation: '现代教学法强调以学生为中心的学习，而非死记硬背。',
        imageUrl: 'https://via.placeholder.com/200',
        level: '高级',
        category: '教育'
    },
    {
        word: 'assimilate',
        phonetic: '/əˈsɪmɪleɪt/',
        etymology: 'ad (to) + similis (like)',
        englishDefinition: 'take in and understand information or ideas; absorb and integrate',
        chineseTranslation: '吸收，理解；同化',
        exampleSentence: 'It takes time to assimilate new concepts, especially in complex academic fields.',
        sentenceTranslation: '需要时间来吸收新概念，尤其是在复杂的学术领域。',
        imageUrl: 'https://via.placeholder.com/200',
        level: '中高级',
        category: '教育'
    }
];

// 当前单词索引
let currentWordIndex = 0;
let currentCategory = 'all';
let currentLevel = 'all';

// DOM 元素
const currentWordElement = document.getElementById('currentWord');
const phoneticElement = document.getElementById('phonetic');
const etymologyElement = document.getElementById('etymology');
const englishDefinitionElement = document.getElementById('englishDefinition');
const chineseTranslationElement = document.getElementById('chineseTranslation');
const wordImageElement = document.getElementById('wordImage');
const exampleSentenceElement = document.getElementById('exampleSentence');
const sentenceTranslationElement = document.getElementById('sentenceTranslation');
const analyzeBtn = document.getElementById('analyzeBtn');
const analysisResult = document.getElementById('analysisResult');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');
const checkRecallBtn = document.getElementById('checkRecallBtn');
const recallInput = document.getElementById('recallInput');
const recallResult = document.getElementById('recallResult');
const optionBtns = document.querySelectorAll('.option-btn');
const contextResult = document.getElementById('contextResult');
const checkSentenceBtn = document.getElementById('checkSentenceBtn');
const sentenceInput = document.getElementById('sentenceInput');
const sentenceResult = document.getElementById('sentenceResult');

// 初始化页面
function initPage() {
    displayWord(currentWordIndex);
    
    // 分析句子按钮事件
    analyzeBtn.addEventListener('click', function() {
        // 生成并显示句子分析结果
        generateSentenceAnalysis();
        analysisResult.classList.toggle('hidden');
    });
    
    // 标签页切换
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // 切换按钮状态
            tabBtns.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // 切换内容区域
            tabPanes.forEach(pane => pane.classList.add('hidden'));
            document.getElementById(tabId).classList.remove('hidden');
        });
    });
    
    // 回忆练习检查按钮
    checkRecallBtn.addEventListener('click', function() {
        const input = recallInput.value.trim().toLowerCase();
        const correctWord = wordData[currentWordIndex].word.toLowerCase();
        
        recallResult.classList.remove('hidden');
        
        if (input === correctWord) {
            recallResult.textContent = '正确！';
            recallResult.style.color = 'green';
        } else {
            recallResult.textContent = `不正确。正确答案是：${correctWord}`;
            recallResult.style.color = 'red';
        }
    });
    
    // 选择选项按钮
    optionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const selectedOption = this.textContent;
            const correctOption = wordData[currentWordIndex].word; // 使用当前单词作为正确选项
            
            contextResult.classList.remove('hidden');
            
            optionBtns.forEach(btn => {
                btn.style.backgroundColor = '';
                btn.style.color = '';
            });
            
            if (selectedOption === correctOption) {
                this.style.backgroundColor = 'green';
                this.style.color = 'white';
                contextResult.textContent = '正确！';
                contextResult.style.color = 'green';
            } else {
                this.style.backgroundColor = 'red';
                this.style.color = 'white';
                contextResult.textContent = `不正确。正确答案是：${correctOption}`;
                contextResult.style.color = 'red';
            }
        });
    });
    
    // 造句练习检查按钮
    checkSentenceBtn.addEventListener('click', function() {
        const input = sentenceInput.value.trim();
        const currentWord = wordData[currentWordIndex].word;
        
        sentenceResult.classList.remove('hidden');
        
        if (input.toLowerCase().includes(currentWord.toLowerCase()) && input.length > 10) {
            sentenceResult.textContent = '很好！你的句子中包含了目标单词。';
            sentenceResult.style.color = 'green';
        } else {
            sentenceResult.textContent = `请确保你的句子包含单词 "${currentWord}" 并且足够长。`;
            sentenceResult.style.color = 'red';
        }
    });

    // 添加分类和难度选择器
    createCategoryAndLevelFilters();
}

// 创建分类和难度过滤器
function createCategoryAndLevelFilters() {
    // 创建过滤器容器
    const filtersContainer = document.createElement('div');
    filtersContainer.className = 'filters-container';
    filtersContainer.style.marginBottom = '20px';
    filtersContainer.style.padding = '15px';
    filtersContainer.style.backgroundColor = '#f3f7e0';
    filtersContainer.style.borderRadius = '12px';
    filtersContainer.style.display = 'flex';
    filtersContainer.style.flexWrap = 'wrap';
    filtersContainer.style.gap = '15px';
    filtersContainer.style.justifyContent = 'center';

    // 获取所有类别和难度级别
    const categories = ['all', ...new Set(wordData.map(word => word.category))];
    const levels = ['all', ...new Set(wordData.map(word => word.level))];

    // 创建类别选择器
    const categoryContainer = document.createElement('div');
    categoryContainer.innerHTML = '<strong>分类：</strong>';
    categoryContainer.style.display = 'flex';
    categoryContainer.style.alignItems = 'center';
    categoryContainer.style.flexWrap = 'wrap';
    categoryContainer.style.gap = '8px';

    categories.forEach(category => {
        const btn = document.createElement('button');
        btn.textContent = category === 'all' ? '所有' : category;
        btn.className = 'filter-btn';
        btn.style.padding = '6px 12px';
        btn.style.borderRadius = '8px';
        btn.style.backgroundColor = category === 'all' ? '#9ec46f' : '#d9e8a3';
        btn.style.color = category === 'all' ? 'white' : '#4a7419';
        btn.style.border = 'none';
        btn.style.cursor = 'pointer';
        btn.style.fontSize = '14px';

        btn.addEventListener('click', function() {
            // 更新所有按钮样式
            categoryContainer.querySelectorAll('.filter-btn').forEach(button => {
                button.style.backgroundColor = '#d9e8a3';
                button.style.color = '#4a7419';
            });
            // 突出显示选中的按钮
            this.style.backgroundColor = '#9ec46f';
            this.style.color = 'white';
            // 更新当前类别并重新加载单词
            currentCategory = category;
            filterWords();
        });

        categoryContainer.appendChild(btn);
    });

    // 创建难度级别选择器
    const levelContainer = document.createElement('div');
    levelContainer.innerHTML = '<strong>难度：</strong>';
    levelContainer.style.display = 'flex';
    levelContainer.style.alignItems = 'center';
    levelContainer.style.flexWrap = 'wrap';
    levelContainer.style.gap = '8px';

    levels.forEach(level => {
        const btn = document.createElement('button');
        btn.textContent = level === 'all' ? '所有' : level;
        btn.className = 'filter-btn';
        btn.style.padding = '6px 12px';
        btn.style.borderRadius = '8px';
        btn.style.backgroundColor = level === 'all' ? '#9ec46f' : '#d9e8a3';
        btn.style.color = level === 'all' ? 'white' : '#4a7419';
        btn.style.border = 'none';
        btn.style.cursor = 'pointer';
        btn.style.fontSize = '14px';

        btn.addEventListener('click', function() {
            // 更新所有按钮样式
            levelContainer.querySelectorAll('.filter-btn').forEach(button => {
                button.style.backgroundColor = '#d9e8a3';
                button.style.color = '#4a7419';
            });
            // 突出显示选中的按钮
            this.style.backgroundColor = '#9ec46f';
            this.style.color = 'white';
            // 更新当前难度并重新加载单词
            currentLevel = level;
            filterWords();
        });

        levelContainer.appendChild(btn);
    });

    // 添加总数统计
    const statsContainer = document.createElement('div');
    statsContainer.style.textAlign = 'center';
    statsContainer.style.width = '100%';
    statsContainer.style.fontSize = '15px';
    statsContainer.style.fontWeight = 'bold';
    statsContainer.style.color = '#5c8d23';
    statsContainer.textContent = `词库总量: ${wordData.length} 词 (雅思8分需掌握约8000-9000词)`;

    // 将选择器添加到过滤器容器
    filtersContainer.appendChild(categoryContainer);
    filtersContainer.appendChild(levelContainer);
    filtersContainer.appendChild(statsContainer);

    // 在header和main之间插入过滤器
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    document.querySelector('.container').insertBefore(filtersContainer, main);
}

// 根据分类和难度过滤单词
function filterWords() {
    let filteredIndices = [];
    
    for (let i = 0; i < wordData.length; i++) {
        const word = wordData[i];
        const matchesCategory = currentCategory === 'all' || word.category === currentCategory;
        const matchesLevel = currentLevel === 'all' || word.level === currentLevel;
        
        if (matchesCategory && matchesLevel) {
            filteredIndices.push(i);
        }
    }
    
    if (filteredIndices.length > 0) {
        currentWordIndex = filteredIndices[0];
        displayWord(currentWordIndex);
        
        // 更新导航按钮
        updateNavigationButtons(filteredIndices);
    } else {
        // 如果没有匹配的单词，显示提示
        currentWordElement.textContent = '没有匹配的单词';
        phoneticElement.textContent = '';
        etymologyElement.textContent = '';
        englishDefinitionElement.textContent = '请尝试其他过滤选项';
        chineseTranslationElement.textContent = '';
        exampleSentenceElement.textContent = '';
        sentenceTranslationElement.textContent = '';
    }
}

// 更新导航按钮以适应过滤后的单词列表
function updateNavigationButtons(filteredIndices) {
    // 获取现有的导航按钮
    const prevBtn = document.querySelector('.word-navigation button:first-child');
    const nextBtn = document.querySelector('.word-navigation button:last-child');
    
    // 更新按钮点击事件
    prevBtn.onclick = function() {
        const currentIndexInFiltered = filteredIndices.indexOf(currentWordIndex);
        if (currentIndexInFiltered > 0) {
            currentWordIndex = filteredIndices[currentIndexInFiltered - 1];
            displayWord(currentWordIndex);
        }
    };
    
    nextBtn.onclick = function() {
        const currentIndexInFiltered = filteredIndices.indexOf(currentWordIndex);
        if (currentIndexInFiltered < filteredIndices.length - 1) {
            currentWordIndex = filteredIndices[currentIndexInFiltered + 1];
            displayWord(currentWordIndex);
        }
    };
}

// 生成句子分析
function generateSentenceAnalysis() {
    const sentence = wordData[currentWordIndex].exampleSentence;
    const currentWord = wordData[currentWordIndex].word;
    
    // 清空现有内容
    analysisResult.innerHTML = '';
    
    // 创建分析标题
    const analysisTitle = document.createElement('h4');
    analysisTitle.textContent = '句子结构分析';
    analysisTitle.style.marginBottom = '10px';
    analysisTitle.style.color = '#5c8d23';
    analysisResult.appendChild(analysisTitle);
    
    // 分析句子结构
    const analysis = analyzeSentenceStructure(sentence, currentWord);
    
    // 创建结构分析内容
    const structureDiv = document.createElement('div');
    structureDiv.style.marginBottom = '15px';
    
    // 添加句子成分分析
    for (const component in analysis.components) {
        const p = document.createElement('p');
        p.style.marginBottom = '8px';
        
        const label = document.createElement('strong');
        label.textContent = component + ': ';
        p.appendChild(label);
        
        const span = document.createElement('span');
        span.textContent = analysis.components[component];
        
        // 如果该部分包含目标单词，则高亮显示
        if (analysis.components[component].toLowerCase().includes(currentWord.toLowerCase())) {
            span.style.backgroundColor = '#e5efc1';
            span.style.padding = '2px 4px';
            span.style.borderRadius = '4px';
            span.style.fontWeight = 'bold';
        }
        
        p.appendChild(span);
        structureDiv.appendChild(p);
    }
    
    analysisResult.appendChild(structureDiv);
    
    // 添加词性分析
    const posTitle = document.createElement('h4');
    posTitle.textContent = '词性与功能分析';
    posTitle.style.marginBottom = '10px';
    posTitle.style.marginTop = '20px';
    posTitle.style.color = '#5c8d23';
    analysisResult.appendChild(posTitle);
    
    const posDiv = document.createElement('div');
    
    // 添加当前词在句中的作用
    const wordRole = document.createElement('p');
    wordRole.style.marginBottom = '12px';
    wordRole.innerHTML = `<strong>${currentWord}</strong> 在句中的作用: ${analysis.wordRole}`;
    wordRole.style.backgroundColor = '#f3f7e0';
    wordRole.style.padding = '8px';
    wordRole.style.borderRadius = '8px';
    posDiv.appendChild(wordRole);
    
    // 添加句子的主要成分分析
    const sentenceComponents = document.createElement('p');
    sentenceComponents.innerHTML = '<strong>句子类型:</strong> ' + analysis.sentenceType;
    posDiv.appendChild(sentenceComponents);
    
    // 添加时态语态分析
    const tenseVoice = document.createElement('p');
    tenseVoice.innerHTML = '<strong>时态语态:</strong> ' + analysis.tenseVoice;
    posDiv.appendChild(tenseVoice);
    
    analysisResult.appendChild(posDiv);
    
    // 添加句子可视化
    const visualTitle = document.createElement('h4');
    visualTitle.textContent = '句子结构可视化';
    visualTitle.style.marginBottom = '10px';
    visualTitle.style.marginTop = '20px';
    visualTitle.style.color = '#5c8d23';
    analysisResult.appendChild(visualTitle);
    
    const visualDiv = document.createElement('div');
    visualDiv.style.fontFamily = 'monospace';
    visualDiv.style.whiteSpace = 'pre-wrap';
    visualDiv.style.backgroundColor = '#f3f7e0';
    visualDiv.style.padding = '10px';
    visualDiv.style.borderRadius = '8px';
    visualDiv.style.lineHeight = '1.8';
    visualDiv.style.fontSize = '14px';
    visualDiv.innerHTML = analysis.visualization;
    
    analysisResult.appendChild(visualDiv);
}

// 分析句子结构
function analyzeSentenceStructure(sentence, targetWord) {
    // 移除句号等标点
    const cleanSentence = sentence.replace(/[.,!?;:]$/, '');
    
    // 分词
    const words = cleanSentence.split(' ');
    
    // 分析结果对象
    const result = {
        components: {},
        wordRole: '',
        sentenceType: '',
        tenseVoice: '',
        visualization: ''
    };
    
    // 基于简单规则的句子成分识别
    // 注意：这是一个简化的分析，真实的语法分析要复杂得多
    
    // 尝试识别主语、谓语、宾语等基本成分
    if (words.length > 0) {
        // 简单句模式匹配 (主语+谓语+宾语)
        if (words[0].toLowerCase() === 'this' || words[0].toLowerCase() === 'it' || 
            words[0].toLowerCase() === 'she' || words[0].toLowerCase() === 'he' || 
            words[0].toLowerCase() === 'they' || words[0].toLowerCase() === 'we' || 
            words[0].toLowerCase() === 'you' || words[0].toLowerCase() === 'i' ||
            words[0].match(/^[A-Z]/)) {
            
            // 主语通常是句首的名词或代词
            let subjectEndIndex = 1;
            // 如果主语有修饰语，扩展主语范围
            while (subjectEndIndex < words.length && 
                   (words[subjectEndIndex].toLowerCase() === 'and' || 
                    words[subjectEndIndex].match(/^[a-z]/))) {
                subjectEndIndex++;
            }
            
            result.components['主语'] = words.slice(0, subjectEndIndex).join(' ');
            
            // 谓语通常是主语后的动词
            let verbStartIndex = subjectEndIndex;
            let verbEndIndex = verbStartIndex + 1;
            
            // 如果有助动词或情态动词
            if (verbStartIndex < words.length && 
                (words[verbStartIndex].toLowerCase() === 'is' || 
                 words[verbStartIndex].toLowerCase() === 'are' || 
                 words[verbStartIndex].toLowerCase() === 'was' || 
                 words[verbStartIndex].toLowerCase() === 'were' || 
                 words[verbStartIndex].toLowerCase() === 'have' || 
                 words[verbStartIndex].toLowerCase() === 'has' || 
                 words[verbStartIndex].toLowerCase() === 'can' || 
                 words[verbStartIndex].toLowerCase() === 'could' || 
                 words[verbStartIndex].toLowerCase() === 'may' || 
                 words[verbStartIndex].toLowerCase() === 'might' || 
                 words[verbStartIndex].toLowerCase() === 'will' || 
                 words[verbStartIndex].toLowerCase() === 'would' || 
                 words[verbStartIndex].toLowerCase() === 'should' || 
                 words[verbStartIndex].toLowerCase() === 'must')) {
                
                verbEndIndex++;
                // 检查是否有"not"或其他副词
                if (verbEndIndex < words.length && 
                    (words[verbEndIndex].toLowerCase() === 'not' || 
                     words[verbEndIndex].toLowerCase().endsWith('ly'))) {
                    verbEndIndex++;
                }
                // 检查后面是否有动词
                if (verbEndIndex < words.length && 
                    words[verbEndIndex].match(/^[a-z]/) && 
                    !words[verbEndIndex].match(/^(the|a|an|to|in|on|at|for|with|by|as|of)$/)) {
                    verbEndIndex++;
                }
            }
            
            result.components['谓语'] = words.slice(verbStartIndex, verbEndIndex).join(' ');
            
            // 宾语通常是谓语后的部分
            if (verbEndIndex < words.length) {
                result.components['宾语/补语'] = words.slice(verbEndIndex).join(' ');
            }
            
            // 分析句子类型
            if (cleanSentence.indexOf('?') !== -1) {
                result.sentenceType = '疑问句';
            } else if (words[0].toLowerCase() === 'what' || 
                       words[0].toLowerCase() === 'who' || 
                       words[0].toLowerCase() === 'when' || 
                       words[0].toLowerCase() === 'where' || 
                       words[0].toLowerCase() === 'why' || 
                       words[0].toLowerCase() === 'how') {
                result.sentenceType = '特殊疑问句';
            } else {
                result.sentenceType = '陈述句';
            }
            
            // 分析时态和语态
            if (result.components['谓语'].includes('is') || result.components['谓语'].includes('are')) {
                if (result.components['谓语'].includes('being')) {
                    result.tenseVoice = '现在进行时被动语态';
                } else if (result.components['谓语'].includes('been')) {
                    result.tenseVoice = '现在完成时被动语态';
                } else if (result.components['宾语/补语'] && result.components['宾语/补语'].includes('by')) {
                    result.tenseVoice = '现在时被动语态';
                } else {
                    result.tenseVoice = '现在时主动语态';
                }
            } else if (result.components['谓语'].includes('was') || result.components['谓语'].includes('were')) {
                if (result.components['宾语/补语'] && result.components['宾语/补语'].includes('by')) {
                    result.tenseVoice = '过去时被动语态';
                } else {
                    result.tenseVoice = '过去时主动语态';
                }
            } else if (result.components['谓语'].includes('will')) {
                result.tenseVoice = '将来时主动语态';
            } else if (result.components['谓语'].includes('have') || result.components['谓语'].includes('has')) {
                result.tenseVoice = '现在完成时主动语态';
            } else if (result.components['谓语'].includes('had')) {
                result.tenseVoice = '过去完成时主动语态';
            } else {
                result.tenseVoice = '一般现在时主动语态';
            }
        } 
        // 祈使句
        else if (words[0].match(/^[a-z]/) && 
                 !words[0].match(/^(the|a|an|to|in|on|at|for|with|by|as|of)$/)) {
            result.components['谓语'] = words[0];
            if (words.length > 1) {
                result.components['宾语/补语'] = words.slice(1).join(' ');
            }
            result.sentenceType = '祈使句';
            result.tenseVoice = '一般现在时主动语态';
        }
        // 其他复杂句型
        else {
            result.components['完整句子'] = cleanSentence;
            result.sentenceType = '复合句或特殊结构句';
            result.tenseVoice = '需要专业分析';
        }
    }
    
    // 确定目标单词在句中的作用
    const targetWordLower = targetWord.toLowerCase();
    let roleFound = false;
    
    for (const component in result.components) {
        if (result.components[component].toLowerCase().includes(targetWordLower)) {
            if (component === '主语') {
                result.wordRole = '作为主语的一部分，是句子的执行者';
                roleFound = true;
            } else if (component === '谓语') {
                result.wordRole = '作为谓语的一部分，表示动作或状态';
                roleFound = true;
            } else if (component === '宾语/补语') {
                if (result.components[component].toLowerCase().includes('of ' + targetWordLower) ||
                    result.components[component].toLowerCase().includes('in ' + targetWordLower) ||
                    result.components[component].toLowerCase().includes('on ' + targetWordLower) ||
                    result.components[component].toLowerCase().includes('at ' + targetWordLower) ||
                    result.components[component].toLowerCase().includes('with ' + targetWordLower) ||
                    result.components[component].toLowerCase().includes('by ' + targetWordLower) ||
                    result.components[component].toLowerCase().includes('for ' + targetWordLower)) {
                    result.wordRole = '作为介词短语的一部分，起修饰或补充说明作用';
                } else if (result.components[component].split(' ').indexOf(targetWordLower) !== -1) {
                    result.wordRole = '作为宾语的一部分，是动作的接受者';
                } else {
                    result.wordRole = '作为补语的一部分，提供额外信息';
                }
                roleFound = true;
            }
        }
    }
    
    if (!roleFound) {
        result.wordRole = '需要专业语法分析确定';
    }
    
    // 创建句子结构可视化
    let visualizationText = '';
    
    // 对句子各部分进行标记
    visualizationText += '句子成分标注:\n';
    const sentenceWords = cleanSentence.split(' ');
    let posLabels = [];
    
    // 简单的词性判断（非常简化）
    sentenceWords.forEach(word => {
        const cleanWord = word.replace(/[.,!?;:]$/, '');
        if (cleanWord.toLowerCase() === 'the' || cleanWord.toLowerCase() === 'a' || 
            cleanWord.toLowerCase() === 'an' || cleanWord.toLowerCase() === 'this' || 
            cleanWord.toLowerCase() === 'that' || cleanWord.toLowerCase() === 'these' || 
            cleanWord.toLowerCase() === 'those' || cleanWord.toLowerCase() === 'my' || 
            cleanWord.toLowerCase() === 'your' || cleanWord.toLowerCase() === 'his' || 
            cleanWord.toLowerCase() === 'her' || cleanWord.toLowerCase() === 'its' || 
            cleanWord.toLowerCase() === 'our' || cleanWord.toLowerCase() === 'their') {
            posLabels.push('冠/限');
        } else if (cleanWord.toLowerCase() === 'is' || cleanWord.toLowerCase() === 'are' || 
                   cleanWord.toLowerCase() === 'was' || cleanWord.toLowerCase() === 'were' || 
                   cleanWord.toLowerCase() === 'be' || cleanWord.toLowerCase() === 'been' || 
                   cleanWord.toLowerCase() === 'being' || cleanWord.toLowerCase() === 'have' || 
                   cleanWord.toLowerCase() === 'has' || cleanWord.toLowerCase() === 'had' || 
                   cleanWord.toLowerCase() === 'do' || cleanWord.toLowerCase() === 'does' || 
                   cleanWord.toLowerCase() === 'did' || cleanWord.toLowerCase() === 'will' || 
                   cleanWord.toLowerCase() === 'would' || cleanWord.toLowerCase() === 'shall' || 
                   cleanWord.toLowerCase() === 'should' || cleanWord.toLowerCase() === 'can' || 
                   cleanWord.toLowerCase() === 'could' || cleanWord.toLowerCase() === 'may' || 
                   cleanWord.toLowerCase() === 'might' || cleanWord.toLowerCase() === 'must') {
            posLabels.push('助/情');
        } else if (cleanWord.toLowerCase() === 'i' || cleanWord.toLowerCase() === 'you' || 
                   cleanWord.toLowerCase() === 'he' || cleanWord.toLowerCase() === 'she' || 
                   cleanWord.toLowerCase() === 'it' || cleanWord.toLowerCase() === 'we' || 
                   cleanWord.toLowerCase() === 'they' || cleanWord.toLowerCase() === 'me' || 
                   cleanWord.toLowerCase() === 'him' || cleanWord.toLowerCase() === 'her' || 
                   cleanWord.toLowerCase() === 'us' || cleanWord.toLowerCase() === 'them') {
            posLabels.push('代词');
        } else if (cleanWord.toLowerCase() === 'in' || cleanWord.toLowerCase() === 'on' || 
                   cleanWord.toLowerCase() === 'at' || cleanWord.toLowerCase() === 'for' || 
                   cleanWord.toLowerCase() === 'with' || cleanWord.toLowerCase() === 'by' || 
                   cleanWord.toLowerCase() === 'of' || cleanWord.toLowerCase() === 'to' || 
                   cleanWord.toLowerCase() === 'from' || cleanWord.toLowerCase() === 'about' || 
                   cleanWord.toLowerCase() === 'between' || cleanWord.toLowerCase() === 'among') {
            posLabels.push('介词');
        } else if (cleanWord.toLowerCase() === 'and' || cleanWord.toLowerCase() === 'but' || 
                   cleanWord.toLowerCase() === 'or' || cleanWord.toLowerCase() === 'so' || 
                   cleanWord.toLowerCase() === 'yet' || cleanWord.toLowerCase() === 'for' || 
                   cleanWord.toLowerCase() === 'nor' || cleanWord.toLowerCase() === 'because' || 
                   cleanWord.toLowerCase() === 'if' || cleanWord.toLowerCase() === 'although' || 
                   cleanWord.toLowerCase() === 'unless' || cleanWord.toLowerCase() === 'since' || 
                   cleanWord.toLowerCase() === 'while' || cleanWord.toLowerCase() === 'whereas') {
            posLabels.push('连词');
        } else if (cleanWord.toLowerCase().endsWith('ly')) {
            posLabels.push('副词');
        } else if (cleanWord.toLowerCase().endsWith('ing') && !result.components['谓语'].includes(cleanWord)) {
            posLabels.push('动名');
        } else if ((cleanWord.toLowerCase().endsWith('ed') || cleanWord.toLowerCase().endsWith('en')) && 
                   !result.components['谓语'].includes(cleanWord)) {
            posLabels.push('过分');
        } else if (cleanWord.toLowerCase() === targetWord.toLowerCase()) {
            // 标记目标单词
            posLabels.push('目标');
        } else if (result.components['谓语'] && result.components['谓语'].split(' ').some(v => v === cleanWord)) {
            posLabels.push('动词');
        } else {
            posLabels.push('名/形');
        }
    });
    
    // 构建句子可视化
    let wordLine = '';
    let labelLine = '';
    let connectLine = '';
    
    sentenceWords.forEach((word, idx) => {
        const label = posLabels[idx];
        const paddedWord = word.padEnd(Math.max(word.length, label.length) + 1);
        const paddedLabel = label.padEnd(Math.max(word.length, label.length) + 1);
        
        wordLine += paddedWord;
        labelLine += paddedLabel;
        connectLine += '│'.padEnd(Math.max(word.length, label.length) + 1);
    });
    
    visualizationText += wordLine + '\n';
    visualizationText += connectLine + '\n';
    visualizationText += labelLine + '\n\n';
    
    // 添加句子结构图
    visualizationText += '句子结构:\n';
    
    if (result.components['主语']) {
        visualizationText += '主语: ' + result.components['主语'] + '\n';
    }
    if (result.components['谓语']) {
        visualizationText += '  └─谓语: ' + result.components['谓语'] + '\n';
    }
    if (result.components['宾语/补语']) {
        visualizationText += '     └─宾语/补语: ' + result.components['宾语/补语'] + '\n';
    }
    
    result.visualization = visualizationText;
    
    return result;
}

// 显示单词
function displayWord(index) {
    const word = wordData[index];
    
    currentWordElement.textContent = word.word;
    phoneticElement.textContent = word.phonetic;
    etymologyElement.textContent = word.etymology;
    englishDefinitionElement.textContent = word.englishDefinition;
    chineseTranslationElement.textContent = word.chineseTranslation;
    wordImageElement.src = word.imageUrl;
    exampleSentenceElement.textContent = word.exampleSentence;
    sentenceTranslationElement.textContent = word.sentenceTranslation;
    
    // 重置句子分析区域
    analysisResult.classList.add('hidden');
    analysisResult.innerHTML = '';
    
    // 显示分类和难度标签
    if (!document.getElementById('wordMeta')) {
        const metaContainer = document.createElement('div');
        metaContainer.id = 'wordMeta';
        metaContainer.style.marginTop = '10px';
        metaContainer.style.display = 'flex';
        metaContainer.style.gap = '10px';
        metaContainer.style.justifyContent = 'center';
        
        const levelBadge = document.createElement('span');
        levelBadge.id = 'levelBadge';
        levelBadge.style.padding = '3px 8px';
        levelBadge.style.borderRadius = '12px';
        levelBadge.style.fontSize = '12px';
        levelBadge.style.fontWeight = 'bold';
        
        const categoryBadge = document.createElement('span');
        categoryBadge.id = 'categoryBadge';
        categoryBadge.style.padding = '3px 8px';
        categoryBadge.style.borderRadius = '12px';
        categoryBadge.style.fontSize = '12px';
        categoryBadge.style.fontWeight = 'bold';
        categoryBadge.style.backgroundColor = '#d9e8a3';
        categoryBadge.style.color = '#4a7419';
        
        metaContainer.appendChild(levelBadge);
        metaContainer.appendChild(categoryBadge);
        
        document.querySelector('.word-header').appendChild(metaContainer);
    }
    
    // 更新分类和难度标签
    const levelBadge = document.getElementById('levelBadge');
    const categoryBadge = document.getElementById('categoryBadge');
    
    levelBadge.textContent = word.level;
    categoryBadge.textContent = word.category;
    
    // 根据难度设置不同的颜色
    if (word.level === '基础') {
        levelBadge.style.backgroundColor = '#b4d455';
        levelBadge.style.color = '#4a7419';
    } else if (word.level === '中级') {
        levelBadge.style.backgroundColor = '#9ec46f';
        levelBadge.style.color = 'white';
    } else if (word.level === '中高级') {
        levelBadge.style.backgroundColor = '#5c8d23';
        levelBadge.style.color = 'white';
    } else if (word.level === '高级') {
        levelBadge.style.backgroundColor = '#4a7419';
        levelBadge.style.color = 'white';
    }
    
    // 更新练习区中的提示词
    document.querySelector('#recall .practice-prompt').textContent = word.chineseTranslation;
    
    // 更新语境应用练习中的句子和选项
    if (document.querySelector('#context .practice-prompt')) {
        const sentenceParts = word.exampleSentence.split(word.word);
        if (sentenceParts.length > 1) {
            document.querySelector('#context .practice-prompt').textContent = 
                sentenceParts[0] + '_____' + sentenceParts.slice(1).join(word.word);
            
            // 动态生成选项
            const options = generateWordOptions(word.word);
            const optionButtons = document.querySelectorAll('.option-btn');
            
            options.forEach((option, index) => {
                if (optionButtons[index]) {
                    optionButtons[index].textContent = option;
                }
            });
        }
    }
    
    // 重置练习区
    recallInput.value = '';
    recallResult.classList.add('hidden');
    
    optionBtns.forEach(btn => {
        btn.style.backgroundColor = '';
        btn.style.color = '';
    });
    contextResult.classList.add('hidden');
    
    sentenceInput.value = '';
    sentenceResult.classList.add('hidden');
}

// 生成单词选项
function generateWordOptions(correctWord) {
    // 随机选择3个不同的单词作为干扰项
    const otherWords = wordData
        .filter(word => word.word !== correctWord)
        .map(word => word.word);
    
    // 随机打乱并选择前3个
    const distractors = otherWords
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
    
    // 添加正确选项
    const options = [...distractors, correctWord];
    
    // 再次随机打乱
    return options.sort(() => 0.5 - Math.random());
}

// 添加前进/后退按钮
function addNavigationButtons() {
    const nav = document.createElement('div');
    nav.className = 'word-navigation';
    nav.style.marginTop = '20px';
    nav.style.display = 'flex';
    nav.style.justifyContent = 'space-between';
    
    const prevBtn = document.createElement('button');
    prevBtn.textContent = '上一个单词';
    prevBtn.addEventListener('click', function() {
        if (currentWordIndex > 0) {
            currentWordIndex--;
            displayWord(currentWordIndex);
        }
    });
    
    const nextBtn = document.createElement('button');
    nextBtn.textContent = '下一个单词';
    nextBtn.addEventListener('click', function() {
        if (currentWordIndex < wordData.length - 1) {
            currentWordIndex++;
            displayWord(currentWordIndex);
        }
    });
    
    nav.appendChild(prevBtn);
    nav.appendChild(nextBtn);
    
    document.querySelector('.word-card').appendChild(nav);
}

// 页面加载完成后初始化
window.addEventListener('DOMContentLoaded', function() {
    initPage();
    addNavigationButtons();
}); 