// Application data
const appData = { "features": [{ "Feature": "테이블 기본 표시", "AG Grid Community": "✅", "AG Grid Enterprise": "✅", "TanStack Table": "✅", "Category": "기본 기능" }, { "Feature": "정렬", "AG Grid Community": "✅", "AG Grid Enterprise": "✅", "TanStack Table": "✅", "Category": "기본 기능" }, { "Feature": "필터링", "AG Grid Community": "✅", "AG Grid Enterprise": "✅", "TanStack Table": "✅", "Category": "기본 기능" }, { "Feature": "페이지네이션", "AG Grid Community": "✅", "AG Grid Enterprise": "✅", "TanStack Table": "✅", "Category": "기본 기능" }, { "Feature": "검색", "AG Grid Community": "✅", "AG Grid Enterprise": "✅", "TanStack Table": "✅", "Category": "기본 기능" }, { "Feature": "열 조정", "AG Grid Community": "✅", "AG Grid Enterprise": "✅", "TanStack Table": "✅", "Category": "기본 기능" }, { "Feature": "행 선택", "AG Grid Community": "✅", "AG Grid Enterprise": "✅", "TanStack Table": "✅", "Category": "기본 기능" }, { "Feature": "키보드 탐색", "AG Grid Community": "✅", "AG Grid Enterprise": "✅", "TanStack Table": "✅", "Category": "기본 기능" }, { "Feature": "사용자 정의 헤더", "AG Grid Community": "✅", "AG Grid Enterprise": "✅", "TanStack Table": "✅", "Category": "기본 기능" }, { "Feature": "테마 지원", "AG Grid Community": "✅", "AG Grid Enterprise": "✅", "TanStack Table": "⚠️", "Category": "기본 기능" }, { "Feature": "무한 스크롤링", "AG Grid Community": "❌", "AG Grid Enterprise": "✅", "TanStack Table": "⚠️", "Category": "고급 표시 기능" }, { "Feature": "가상화(Virtualization)", "AG Grid Community": "✅", "AG Grid Enterprise": "✅", "TanStack Table": "✅", "Category": "고급 표시 기능" }, { "Feature": "행 그룹화", "AG Grid Community": "❌", "AG Grid Enterprise": "✅", "TanStack Table": "✅", "Category": "고급 표시 기능" }, { "Feature": "열 그룹화", "AG Grid Community": "❌", "AG Grid Enterprise": "✅", "TanStack Table": "⚠️", "Category": "고급 표시 기능" }, { "Feature": "셀 병합", "AG Grid Community": "❌", "AG Grid Enterprise": "✅", "TanStack Table": "⚠️", "Category": "고급 표시 기능" }, { "Feature": "피벗 테이블", "AG Grid Community": "❌", "AG Grid Enterprise": "✅", "TanStack Table": "⚠️", "Category": "고급 표시 기능" }, { "Feature": "마스터-디테일 뷰", "AG Grid Community": "❌", "AG Grid Enterprise": "✅", "TanStack Table": "⚠️", "Category": "고급 표시 기능" }, { "Feature": "행 높이 자동 조정", "AG Grid Community": "✅", "AG Grid Enterprise": "✅", "TanStack Table": "⚠️", "Category": "고급 표시 기능" }, { "Feature": "셀 렌더링 커스터마이징", "AG Grid Community": "✅", "AG Grid Enterprise": "✅", "TanStack Table": "✅", "Category": "고급 표시 기능" }, { "Feature": "트리 데이터 표시", "AG Grid Community": "❌", "AG Grid Enterprise": "✅", "TanStack Table": "⚠️", "Category": "고급 표시 기능" }, { "Feature": "풋터 집계", "AG Grid Community": "❌", "AG Grid Enterprise": "✅", "TanStack Table": "⚠️", "Category": "고급 표시 기능" }, { "Feature": "고정 열/행", "AG Grid Community": "✅", "AG Grid Enterprise": "✅", "TanStack Table": "✅", "Category": "고급 표시 기능" }, { "Feature": "셀 편집", "AG Grid Community": "✅", "AG Grid Enterprise": "✅", "TanStack Table": "⚠️", "Category": "편집 기능" }, { "Feature": "인라인 편집", "AG Grid Community": "✅", "AG Grid Enterprise": "✅", "TanStack Table": "⚠️", "Category": "편집 기능" }, { "Feature": "팝업 편집기", "AG Grid Community": "✅", "AG Grid Enterprise": "✅", "TanStack Table": "⚠️", "Category": "편집 기능" }, { "Feature": "셀 검증", "AG Grid Community": "✅", "AG Grid Enterprise": "✅", "TanStack Table": "⚠️", "Category": "편집 기능" }, { "Feature": "실행 취소/다시 실행", "AG Grid Community": "❌", "AG Grid Enterprise": "✅", "TanStack Table": "❌", "Category": "편집 기능" }, { "Feature": "드래그 앤 드롭", "AG Grid Community": "❌", "AG Grid Enterprise": "✅", "TanStack Table": "⚠️", "Category": "편집 기능" }, { "Feature": "행 추가/삭제", "AG Grid Community": "✅", "AG Grid Enterprise": "✅", "TanStack Table": "✅", "Category": "편집 기능" }, { "Feature": "복사/붙여넣기", "AG Grid Community": "✅", "AG Grid Enterprise": "✅", "TanStack Table": "⚠️", "Category": "편집 기능" }, { "Feature": "서버 사이드 처리", "AG Grid Community": "❌", "AG Grid Enterprise": "✅", "TanStack Table": "⚠️", "Category": "엔터프라이즈 기능" }, { "Feature": "Excel 내보내기", "AG Grid Community": "❌", "AG Grid Enterprise": "✅", "TanStack Table": "❌", "Category": "엔터프라이즈 기능" }, { "Feature": "PDF 내보내기", "AG Grid Community": "❌", "AG Grid Enterprise": "✅", "TanStack Table": "❌", "Category": "엔터프라이즈 기능" }, { "Feature": "CSV 내보내기", "AG Grid Community": "✅", "AG Grid Enterprise": "✅", "TanStack Table": "⚠️", "Category": "엔터프라이즈 기능" }, { "Feature": "라이브 데이터 업데이트", "AG Grid Community": "❌", "AG Grid Enterprise": "✅", "TanStack Table": "✅", "Category": "엔터프라이즈 기능" }, { "Feature": "집계 함수", "AG Grid Community": "❌", "AG Grid Enterprise": "✅", "TanStack Table": "⚠️", "Category": "엔터프라이즈 기능" }, { "Feature": "상태 저장", "AG Grid Community": "❌", "AG Grid Enterprise": "✅", "TanStack Table": "✅", "Category": "엔터프라이즈 기능" }, { "Feature": "열 메뉴", "AG Grid Community": "❌", "AG Grid Enterprise": "✅", "TanStack Table": "⚠️", "Category": "엔터프라이즈 기능" }, { "Feature": "렌더링 최적화", "AG Grid Community": "✅", "AG Grid Enterprise": "✅", "TanStack Table": "✅", "Category": "성능 및 확장성" }, { "Feature": "대용량 데이터 처리", "AG Grid Community": "⚠️", "AG Grid Enterprise": "✅", "TanStack Table": "⚠️", "Category": "성능 및 확장성" }, { "Feature": "메모리 효율성", "AG Grid Community": "✅", "AG Grid Enterprise": "✅", "TanStack Table": "✅", "Category": "성능 및 확장성" }, { "Feature": "커스텀 렌더러", "AG Grid Community": "✅", "AG Grid Enterprise": "✅", "TanStack Table": "✅", "Category": "성능 및 확장성" }, { "Feature": "커스텀 필터", "AG Grid Community": "✅", "AG Grid Enterprise": "✅", "TanStack Table": "✅", "Category": "성능 및 확장성" }, { "Feature": "커스텀 에디터", "AG Grid Community": "✅", "AG Grid Enterprise": "✅", "TanStack Table": "✅", "Category": "성능 및 확장성" }, { "Feature": "플러그인 시스템", "AG Grid Community": "❌", "AG Grid Enterprise": "✅", "TanStack Table": "✅", "Category": "성능 및 확장성" }, { "Feature": "React 지원", "AG Grid Community": "✅", "AG Grid Enterprise": "✅", "TanStack Table": "✅", "Category": "프레임워크 지원" }, { "Feature": "Vue 지원", "AG Grid Community": "✅", "AG Grid Enterprise": "✅", "TanStack Table": "⚠️", "Category": "프레임워크 지원" }, { "Feature": "Angular 지원", "AG Grid Community": "✅", "AG Grid Enterprise": "✅", "TanStack Table": "⚠️", "Category": "프레임워크 지원" }, { "Feature": "TypeScript 지원", "AG Grid Community": "✅", "AG Grid Enterprise": "✅", "TanStack Table": "✅", "Category": "프레임워크 지원" }, { "Feature": "Vanilla JS 지원", "AG Grid Community": "✅", "AG Grid Enterprise": "✅", "TanStack Table": "⚠️", "Category": "프레임워크 지원" }, { "Feature": "문서화 품질", "AG Grid Community": "✅", "AG Grid Enterprise": "✅", "TanStack Table": "✅", "Category": "개발자 경험" }, { "Feature": "예제 코드", "AG Grid Community": "✅", "AG Grid Enterprise": "✅", "TanStack Table": "✅", "Category": "개발자 경험" }, { "Feature": "기술 지원", "AG Grid Community": "❌", "AG Grid Enterprise": "✅", "TanStack Table": "❌", "Category": "개발자 경험" }, { "Feature": "커뮤니티 활성도", "AG Grid Community": "✅", "AG Grid Enterprise": "✅", "TanStack Table": "✅", "Category": "개발자 경험" }, { "Feature": "GitHub Stars", "AG Grid Community": "12.3K", "AG Grid Enterprise": "12.3K", "TanStack Table": "24.5K", "Category": "커뮤니티 및 인기도" }, { "Feature": "릴리스 주기", "AG Grid Community": "⚠️", "AG Grid Enterprise": "✅", "TanStack Table": "✅", "Category": "커뮤니티 및 인기도" }, { "Feature": "오픈소스 활성도", "AG Grid Community": "⚠️", "AG Grid Enterprise": "⚠️", "TanStack Table": "✅", "Category": "커뮤니티 및 인기도" }], "pricing": [{ "시나리오": "AG Grid Enterprise (8 Dev, 내부업무)", "개발자(동시)": "8", "배포 수": "0", "비용(USD)": "$7,992 (=999×8)", "비고": "외부 배포 없음, 내부 전용", "Category": "가격 정책" }, { "시나리오": "AG Grid Enterprise (8 Dev, 1배포 SaaS)", "개발자(동시)": "8", "배포 수": "1", "비용(USD)": "$8,742 (=999×8 + 750×1)", "비고": "SaaS 1개 배포", "Category": "가격 정책" }, { "시나리오": "AG Grid Enterprise (8 Dev, 2배포 SaaS)", "개발자(동시)": "8", "배포 수": "2", "비용(USD)": "$9,492 (=999×8 + 750×2)", "비고": "SaaS 2개 배포", "Category": "가격 정책" }, { "시나리오": "AG Grid Community", "개발자(동시)": "8", "배포 수": "2", "비용(USD)": "$0", "비고": "MIT, 무료", "Category": "가격 정책" }, { "시나리오": "TanStack Table", "개발자(동시)": "8", "배포 수": "2", "비용(USD)": "$0", "비고": "MIT, 무료", "Category": "가격 정책" }], "comparison": [{ "라이브러리": "AG Grid Community", "기능 지원율": "67.3%", "라이센스": "MIT", "비용": "$0", "주요 장점": "기본 기능 완벽 지원, 안정성", "주요 제약": "고급 기능 제한, 서버 사이드 처리 불가" }, { "라이브러리": "AG Grid Enterprise", "기능 지원율": "100.0%", "라이센스": "상용", "비용": "$999/개발자 + $750/배포", "주요 장점": "모든 기능 지원, 전문 기술 지원", "주요 제약": "높은 라이센스 비용" }, { "라이브러리": "TanStack Table", "기능 지원율": "77.3%", "라이센스": "MIT", "비용": "$0", "주요 장점": "헤드리스 설계, 커스터마이징 우수, 인기도 높음", "주요 제약": "일부 고급 기능 구현 필요" }], "summary": [{ "카테고리": "기본 기능", "AG Grid Community": "100%", "AG Grid Enterprise": "100%", "TanStack Table": "90%" }, { "카테고리": "고급 표시 기능", "AG Grid Community": "45.8%", "AG Grid Enterprise": "100%", "TanStack Table": "83.3%" }, { "카테고리": "편집 기능", "AG Grid Community": "75%", "AG Grid Enterprise": "100%", "TanStack Table": "55%" }, { "카테고리": "엔터프라이즈 기능", "AG Grid Community": "12.5%", "AG Grid Enterprise": "100%", "TanStack Table": "43.8%" }, { "카테고리": "성능 및 확장성", "AG Grid Community": "85.7%", "AG Grid Enterprise": "100%", "TanStack Table": "85.7%" }, { "카테고리": "프레임워크 지원", "AG Grid Community": "100%", "AG Grid Enterprise": "100%", "TanStack Table": "70%" }, { "카테고리": "개발자 경험", "AG Grid Community": "75%", "AG Grid Enterprise": "100%", "TanStack Table": "75%" }, { "카테고리": "커뮤니티 및 인기도", "AG Grid Community": "50%", "AG Grid Enterprise": "50%", "TanStack Table": "100%" }, { "카테고리": "총합", "AG Grid Community": "67.3%", "AG Grid Enterprise": "100%", "TanStack Table": "77.3%" }], "decision": [{ "시나리오": "대규모 엔터프라이즈 애플리케이션", "추천 라이브러리": "AG Grid Enterprise", "근거": "완전한 기능 세트, 기술 지원, 복잡한 데이터 처리" }, { "시나리오": "스타트업/중소기업", "추천 라이브러리": "TanStack Table", "근거": "무료, 높은 기능 지원율, 현대적 개발 방식" }, { "시나리오": "내부 도구/프로토타입", "추천 라이브러리": "AG Grid Community", "근거": "무료, 기본 기능 완벽 지원, 안정성" }, { "시나리오": "React 기반 프로젝트", "추천 라이브러리": "TanStack Table", "근거": "React 생태계 최적화, 높은 커스터마이징 자유도" }, { "시나리오": "다양한 프레임워크 지원 필요", "추천 라이브러리": "AG Grid Community/Enterprise", "근거": "React, Vue, Angular 등 모두 완벽 지원" }], "support_levels": { "AG Grid Community": { "완전 지원": 34, "부분 지원": 3, "미지원": 19, "지원율(%)": 61.2 }, "AG Grid Enterprise": { "완전 지원": 55, "부분 지원": 1, "미지원": 0, "지원율(%)": 95.7 }, "TanStack Table": { "완전 지원": 29, "부분 지원": 23, "미지원": 4, "지원율(%)": 69.8 } }, "charts": { "support_chart": "library_support_chart.png", "radar_chart": "radar_chart_final.png", "pricing_chart": "library_cost_comparison.png" } };

// Global variables
let filteredFeatures = appData.features;

// Initialize the application
document.addEventListener('DOMContentLoaded', function () {
    initializeApp();
});

function initializeApp() {
    populatePricingTable();
    populateFeaturesTable();
    populateDecisionGuide();
    setupCategoryFilter();
    setupEventListeners();
    setupSmoothScrolling();
}

// Populate pricing table
function populatePricingTable() {
    const tbody = document.getElementById('pricing-table-body');
    if (!tbody) return;

    tbody.innerHTML = '';
    appData.pricing.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${item['시나리오']}</strong></td>
            <td>${item['개발자(동시)']}</td>
            <td>${item['배포 수']}</td>
            <td><strong>${item['비용(USD)']}</strong></td>
            <td>${item['비고']}</td>
        `;
        tbody.appendChild(row);
    });
}

// Populate features comparison table
function populateFeaturesTable(features = appData.features) {
    const tbody = document.getElementById('features-table-body');
    if (!tbody) return;

    tbody.innerHTML = '';
    features.forEach(feature => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${feature.Feature}</strong></td>
            <td><span class="status status--info">${feature.Category}</span></td>
            <td>${formatSupportLevel(feature['AG Grid Community'])}</td>
            <td>${formatSupportLevel(feature['AG Grid Enterprise'])}</td>
            <td>${formatSupportLevel(feature['TanStack Table'])}</td>
        `;
        tbody.appendChild(row);
    });
}

// Format support level with appropriate styling
function formatSupportLevel(level) {
    if (level === '✅') {
        return '<span class="status status--success">✅ 완전 지원</span>';
    } else if (level === '⚠️') {
        return '<span class="status status--warning">⚠️ 부분 지원</span>';
    } else if (level === '❌') {
        return '<span class="status status--error">❌ 미지원</span>';
    } else {
        // Handle special cases like numbers or text
        return `<span class="status status--info">${level}</span>`;
    }
}

// Populate decision guide
function populateDecisionGuide() {
    const container = document.getElementById('decision-guide');
    if (!container) return;

    container.innerHTML = '';
    appData.decision.forEach(item => {
        const card = document.createElement('div');
        card.className = 'decision-card';
        card.innerHTML = `
            <h3>${item['시나리오']}</h3>
            <div class="recommended-lib">추천: ${item['추천 라이브러리']}</div>
            <p><strong>선택 근거:</strong> ${item['근거']}</p>
        `;
        container.appendChild(card);
    });
}

// Setup category filter
function setupCategoryFilter() {
    const categoryFilter = document.getElementById('category-filter');
    if (!categoryFilter) return;

    // Get unique categories
    const categories = [...new Set(appData.features.map(f => f.Category))];
    categories.sort();

    // Populate filter options
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Category filter
    const categoryFilter = document.getElementById('category-filter');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterFeatures);
    }

    // Search functionality
    const searchInput = document.getElementById('search-features');
    if (searchInput) {
        searchInput.addEventListener('input', filterFeatures);
    }

    // Calculator inputs
    const developersInput = document.getElementById('developers');
    const deploymentsInput = document.getElementById('deployments');

    if (developersInput) {
        developersInput.addEventListener('input', calculateCost);
    }
    if (deploymentsInput) {
        deploymentsInput.addEventListener('input', calculateCost);
    }
}

// Filter features based on category and search
function filterFeatures() {
    const categoryFilter = document.getElementById('category-filter');
    const searchInput = document.getElementById('search-features');

    const selectedCategory = categoryFilter ? categoryFilter.value : '';
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';

    filteredFeatures = appData.features.filter(feature => {
        const matchesCategory = !selectedCategory || feature.Category === selectedCategory;
        const matchesSearch = !searchTerm || feature.Feature.toLowerCase().includes(searchTerm);
        return matchesCategory && matchesSearch;
    });

    populateFeaturesTable(filteredFeatures);
}

// Calculate cost based on inputs
function calculateCost() {
    const developersInput = document.getElementById('developers');
    const deploymentsInput = document.getElementById('deployments');
    const costDisplay = document.getElementById('ag-enterprise-cost');

    if (!developersInput || !deploymentsInput || !costDisplay) return;

    const developers = parseInt(developersInput.value) || 0;
    const deployments = parseInt(deploymentsInput.value) || 0;

    const developerCost = developers * 999;
    const deploymentCost = deployments * 750;
    const totalCost = developerCost + deploymentCost;

    costDisplay.textContent = `$${totalCost.toLocaleString()}`;

    // Update the breakdown text
    const breakdown = costDisplay.nextElementSibling;
    if (breakdown) {
        breakdown.textContent = `개발자: $999 × ${developers} + 배포: $750 × ${deployments}`;
    }
}

// Setup smooth scrolling for navigation links
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed nav
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export functions for global access
window.calculateCost = calculateCost;
window.filterFeatures = filterFeatures;

// Add some visual feedback for loading states
function showLoading(element) {
    if (element) {
        element.classList.add('loading');
    }
}

function hideLoading(element) {
    if (element) {
        element.classList.remove('loading');
    }
}

// Enhanced print function
function printPage() {
    window.print();
}

// 프린트 전 처리 함수 (비움)
function beforePrint() { }

// 프린트 후 처리 함수 (비움)
function afterPrint() { }

// 프린트 이벤트 리스너 추가
window.addEventListener('beforeprint', beforePrint);
window.addEventListener('afterprint', afterPrint);

// Accessibility improvements
document.addEventListener('keydown', function (e) {
    // Escape key to clear search/filter
    if (e.key === 'Escape') {
        const searchInput = document.getElementById('search-features');
        const categoryFilter = document.getElementById('category-filter');

        if (searchInput && searchInput === document.activeElement) {
            searchInput.value = '';
            filterFeatures();
        }

        if (categoryFilter && categoryFilter === document.activeElement) {
            categoryFilter.value = '';
            filterFeatures();
        }
    }
});

// Initialize tooltips or additional UI enhancements
function initializeTooltips() {
    // Add tooltips for support level indicators
    const statusElements = document.querySelectorAll('.status');
    statusElements.forEach(status => {
        const text = status.textContent;
        let tooltip = '';

        if (text.includes('완전 지원')) {
            tooltip = '모든 기능이 완전히 구현되어 바로 사용 가능합니다.';
        } else if (text.includes('부분 지원')) {
            tooltip = '기본 기능은 제공되나 추가 구현이나 설정이 필요할 수 있습니다.';
        } else if (text.includes('미지원')) {
            tooltip = '해당 기능은 지원되지 않습니다.';
        }

        if (tooltip) {
            status.title = tooltip;
        }
    });
}

// Call additional initialization after DOM is fully loaded
setTimeout(() => {
    initializeTooltips();
    calculateCost(); // Initialize cost calculator with default values
}, 100);

// 이미지 레이어 팝업 기능
(function () {
    function showImagePopup(src, alt) {
        var popupLayer = document.getElementById('image-popup-layer');
        var popupImg = document.getElementById('popup-img');
        popupImg.src = src;
        popupImg.alt = alt || '';
        popupLayer.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
    function hideImagePopup() {
        var popupLayer = document.getElementById('image-popup-layer');
        popupLayer.style.display = 'none';
        document.body.style.overflow = '';
    }
    document.addEventListener('DOMContentLoaded', function () {
        var imgs = document.querySelectorAll('.popup-image');
        imgs.forEach(function (img) {
            img.style.cursor = 'zoom-in';
            img.addEventListener('click', function (e) {
                showImagePopup(img.src, img.alt);
            });
        });
        var popupLayer = document.getElementById('image-popup-layer');
        if (popupLayer) {
            popupLayer.addEventListener('click', function (e) {
                if (e.target === popupLayer) hideImagePopup();
            });
            document.addEventListener('keydown', function (e) {
                if (popupLayer.style.display === 'flex' && (e.key === 'Escape' || e.key === 'Esc')) {
                    hideImagePopup();
                }
            });
        }
    });
})();