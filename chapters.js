(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const carousel = $('carousel');
  const controller = window.journeyCarousel;
  const about = 'https://baotinmanhhai.vn/ve-chung-toi/';
  const gift = 'https://baotinmanhhai.vn/kim-gia-bao-gift';
  const accumulate = 'https://baotinmanhhai.vn/san-pham-tich-luy';
  const firstCards = carousel.innerHTML;
  const chapters = [
    {
      name:'Khởi nguồn', eyebrow:'HÀNH TRÌNH GIỮ CHỮ TÍN', year:'1992',
      title:'Khởi nguồn<br>chữ Tín', intro:'Thương hiệu vàng bạc, đá quý khởi nguồn tại Hà Nội',
      origin:'Từ cửa hàng đầu tiên năm 1992,<br> Bảo Tín Mạnh Hải bắt đầu hành trình<br> gìn giữ chữ Tín.',
      image:'assets/xua-va-nay.webp', alt:'Thiết kế minh họa cửa hàng xưa và nay', markup:firstCards
    },
    {
      name:'Chế tác', eyebrow:'TINH HOA KIM HOÀN', year:'Tinh hoa',
      title:'Trong từng<br>đường nét', intro:'Khám phá giá trị của tay nghề, thiết kế và sự chỉn chu.',
      origin:'Tinh hoa kim hoàn truyền thống,<br> gửi vào từng trân bảo.',
      image:'assets/pencil-scene.webp', alt:'Minh họa phác họa mặt tiền và không gian trưng bày', source:about,
      cards:[
        ['Di sản','Kế thừa tay nghề','Bảo Tín Mạnh Hải giới thiệu nền tảng kế thừa tinh hoa kim hoàn truyền thống. Hành trình chế tác bắt đầu từ sự trân trọng những giá trị ấy.','assets/cua-hang-xua.webp'],
        ['Thiết kế','Dấu ấn văn hóa','Trang giới thiệu thương hiệu đặt dấu ấn văn hóa Việt trong định hướng sản phẩm. Hãy quan sát hình tượng, đường nét và ý nghĩa của mỗi thiết kế.','assets/pencil-scene.webp'],
        ['Chất liệu','Hiểu từng sản phẩm','Chất liệu và hàm lượng vàng được công bố theo từng sản phẩm. Bạn có thể xem thông tin cụ thể trên trang sản phẩm chính thức.','assets/gift-0.webp'],
        ['Đường nét','Sự chỉn chu','Từ tổng thể đến chi tiết, mỗi đường nét góp phần tạo nên cảm nhận về một món trang sức hoặc quà tặng. Khám phá thiết kế để chọn món phù hợp với bạn.','assets/pencil-scene.webp'],
        ['Lưu giữ','Giá trị trao truyền','Theo định hướng thương hiệu, trân bảo có thể gắn với tài sản tích lũy, kỷ vật gia đình và dấu ấn văn hóa.','assets/xua-va-nay.webp']
      ]
    },
    {
      name:'Trân bảo', eyebrow:'KIM GIA BẢO GIFT', year:'Trân bảo',
      title:'Gửi trao<br>điều trân quý', intro:'Những thiết kế quà tặng mang lời chúc và ý nghĩa dành cho người nhận.',
      origin:'Một món quà được chọn bằng sự thấu hiểu,<br> một lời chúc được lưu giữ dài lâu.',
      image:'assets/gift-0.webp', alt:'Hình ảnh bộ sưu tập Vẹn Tròn Hương Sắc từ website chính thức', source:gift,
      cards:[
        ['Hương sắc','Vẹn tròn lời chúc','Vẹn Tròn Hương Sắc gồm bốn đóa hoa vàng mang những ý nghĩa về tình duyên, công danh, tâm trí và tài lộc.','assets/gift-0.webp'],
        ['Bình an','Gửi người thân yêu','Phúc Lành Bình An được giới thiệu như một biểu tượng tình thân và sự tri ân dành cho bố mẹ, ông bà.','assets/gift-1.webp'],
        ['Công danh','Ghi nhận nỗ lực','Đăng khoa & Công danh gửi lời chúc mừng đỗ đạt, sự nghiệp thăng tiến và công danh rực rỡ.','assets/gift-2.webp'],
        ['Tuổi mới','Lưu một kỷ niệm','Ước nguyện tuổi mới gửi lời chúc sức khỏe, hạnh phúc và thành công trong những dịp sinh nhật.','assets/gift-3.webp'],
        ['Đầu đời','Đón một khởi đầu','Khám phá Phúc Bảo Đầu Đời và các dòng quà tặng trên trang Kim Gia Bảo Gift chính thức.','assets/gift-4.webp']
      ]
    },
    {
      name:'Chữ Tín', eyebrow:'GIÁ TRỊ ĐƯỢC TIẾP NỐI', year:'Chữ Tín',
      title:'Gìn giữ qua<br>những thế hệ', intro:'Giữ tín nhiệm hơn giữ vàng.',
      origin:'Hành trình tiếp tục,<br> với chữ Tín làm nền tảng.',
      image:'assets/store.webp', alt:'Ảnh cửa hàng Bảo Tín Mạnh Hải từ website chính thức', source:about,
      cards:[
        ['Tín nhiệm','Là lẽ sống','Tín nhiệm là một trong bốn giá trị cốt lõi được Bảo Tín Mạnh Hải công bố, gắn với triết lý “Giữ tín nhiệm hơn giữ vàng”.','assets/store.webp'],
        ['Bền vững','Để phát triển','Bền vững để phát triển là giá trị cốt lõi thể hiện định hướng dài hạn của thương hiệu.','assets/cua-hang-xua.webp'],
        ['Mạnh mẽ','Để vươn xa','Mạnh mẽ để vươn xa được thể hiện trong hành trình mở rộng và tiếp nối những giá trị đã xây dựng.','assets/south.webp'],
        ['Hạnh phúc','Là sẻ chia','Hạnh phúc là sẻ chia là giá trị cốt lõi gắn với tinh thần trao gửi những điều tốt đẹp.','assets/gift-1.webp'],
        ['Tiếp nối','Chọn trân bảo của bạn','Khám phá ba danh mục chính thức theo nhu cầu của bạn, gồm Kim Gia Bảo Gift, sản phẩm tích lũy và trang sức.','assets/gift-0.webp']
      ]
    }
  ];
  const key = 'btmh-journey-reading-v1';
  let progress = [0,0,0,0];
  try {
    const saved = JSON.parse(localStorage.getItem(key));
    if (saved?.version === 1 && Array.isArray(saved.read)) {
      progress = progress.map((value, i) => {
        if (i > 0 && progress[i-1] < 5) return 0;
        const n = saved.read[i];
        progress[i] = Number.isInteger(n) && n >= 0 && n <= 5 ? n : 0;
        return progress[i];
      });
    }
  } catch {}
  let active = 0;
  let dwell;
  let toastTimer;
  let detailVisible = false;
  let carouselVisible = false;
  let messageCount = 0;
  let nudgeDismissed = false;
  const lock = '<svg class="lock-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10V7a5 5 0 0 1 10 0v3M5 10h14v11H5z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M12 14v3" stroke="currentColor" stroke-width="2"/></svg>';
  const check = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6" fill="none" stroke="currentColor" stroke-width="2"/></svg>';
  const stepButtons = chapters.map((chapter, i) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'chapter-step';
    button.addEventListener('click', () => selectChapter(i));
    $('chapter-name').parentElement.parentElement.querySelector('.chapter-steps').append(button);
    return button;
  });
  function allowed(i) {
    return i === 0 || progress.slice(0, i).every(count => count === 5);
  }
  function save() {
    try { localStorage.setItem(key, JSON.stringify({version:1,read:progress})); } catch {}
  }
  function toast(message) {
    clearTimeout(toastTimer);
    $('toast').textContent = message;
    $('toast').hidden = false;
    toastTimer = setTimeout(() => $('toast').hidden = true, 4400);
  }
  function message(text, from = 'assistant') {
    const paragraph = document.createElement('p');
    paragraph.className = 'chat-message ' + from;
    paragraph.textContent = text;
    $('chat-messages').append(paragraph);
    if (++messageCount > 45) $('chat-messages').firstElementChild.remove();
    $('chat-messages').scrollTop = $('chat-messages').scrollHeight;
  }
  let popupNext = null;
  let welcomeTimer;
  const popup = $('journey-popup');
  function showPopup(next = null) {
    clearTimeout(welcomeTimer);
    popupNext = next;
    const unlocked = next !== null;
    $('popup-title').textContent = unlocked ? (next === 4 ? 'Bạn đã hoàn thành hành trình!' : 'Chương ' + (next+1) + ' đã mở khóa!') : 'Chào bạn đến với Hành trình giữ chữ Tín';
    $('popup-copy').textContent = unlocked ? (next === 4 ? 'Cảm ơn bạn đã khám phá đủ 4 chương. Hãy tìm món trân bảo phù hợp với điều bạn muốn gửi trao.' : 'Bạn đã xem đủ 5 thẻ. Cùng khám phá ' + chapters[next].name.toLowerCase() + ' trong chương tiếp theo nhé.') :
      'Mình là robot DMS x BTMH. Cùng đọc lần lượt 5 thẻ lịch sử Chương 1 để mở khóa Chương 2 nhé. Mình sẽ đồng hành và nhắc tiến độ cho bạn.';
    $('popup-primary').textContent = unlocked ? (next === 4 ? 'Khám phá sản phẩm' : 'Vào Chương ' + (next+1)) : 'Đọc tiếp hành trình';
    if (!popup.open) popup.showModal();
    try { sessionStorage.setItem('btmh-welcome-seen','1'); } catch {}
  }
  function scheduleWelcome() {
    let seen = false;
    try { seen = sessionStorage.getItem('btmh-welcome-seen') === '1'; } catch {}
    if (seen || !$('opening').hidden) return;
    clearTimeout(welcomeTimer);
    welcomeTimer = setTimeout(() => {
      if ($('opening').hidden && !popup.open) showPopup();
    }, 1200);
  }
  popup.addEventListener('close',scheduleRead);
  $('popup-close').addEventListener('click', () => popup.close());
  popup.addEventListener('click', event => {
    if (event.target !== popup) return;
    const r = popup.getBoundingClientRect();
    if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) popup.close();
  });
  $('popup-primary').addEventListener('click', () => {
    const target = popupNext;
    popup.close();
    if (target === 4) return $('san-pham').scrollIntoView({behavior:reduced() ? 'instant' : 'smooth'});
    if (target !== null) return selectChapter(target);
    goToUnread();
  });
  $('popup-chat').addEventListener('click', () => { popup.close(); openChat(); });
  function openChat() {
    $('chat-panel').hidden = false;
    $('chat-launch').setAttribute('aria-expanded','true');
    $('chat-nudge').hidden = true;
    $('chat-input').focus({preventScroll:true});
  }
  function missingMessage(chapter = active) {
    if (progress[chapter] === 5) return 'Bạn đã xem đủ 5 thẻ của Chương ' + (chapter+1) + '. ' +
      (chapter < 3 ? 'Chương ' + (chapter+2) + ' đã sẵn sàng mở.' : 'Bạn đã hoàn thành cả hành trình.');
    return 'Bạn đã xem ' + progress[chapter] + '/5 thẻ của Chương ' + (chapter+1) +
      '. Hãy xem lần lượt từ thẻ ' + (progress[chapter]+1) + ' và dừng một chút để đọc nội dung bên dưới nhé.';
  }
  function update() {
    const opened = chapters.filter((chapter, i) => allowed(i)).length;
    $('chapter-total').innerHTML = 'Đã mở <strong>' + opened + '/4</strong> chương';
    $('chapter-name').textContent = chapters[active].name;
    const meter = document.querySelector('.chapter-meter');
    meter.setAttribute('aria-valuenow',opened);
    meter.querySelector('span').style.width = opened * 25 + '%';
    stepButtons.forEach((button, i) => {
      const unlocked = allowed(i);
      button.innerHTML = (unlocked ? '' : lock) + '<span>' + (i+1) + '</span>' +
        (progress[i] === 5 ? '<i class="step-check">' + check + '</i>' : '');
      button.classList.toggle('locked', !unlocked);
      button.classList.toggle('active', i === active);
      button.setAttribute('aria-disabled', String(!unlocked));
      button.setAttribute('aria-current',i === active ? 'step' : 'false');
      button.setAttribute('aria-label','Chương ' + (i+1) + ' · ' + chapters[i].name + (unlocked ? '' : ' · Đang khóa'));
    });
    $('reading-text').textContent = 'Đã xem ' + progress[active] + '/5 ' + (active === 0 ? 'dấu mốc' : 'thẻ');
    $('reading-hint').textContent = progress[active] === 5 ? 'Đã hoàn thành chương này' : 'Xem lần lượt từng thẻ để mở chương mới';
    document.querySelectorAll('#carousel .card').forEach((card, i) => card.classList.toggle('is-read',i < progress[active]));
    const gate = $('chapter-gate');
    gate.replaceChildren();
    const completed = progress[active] === 5;
    gate.classList.toggle('unlocked',completed);
    const icon = document.createElement('div');
    icon.className = 'gate-icon';
    icon.innerHTML = completed ? check : lock;
    gate.append(icon);
    const copy = document.createElement('div');
    const title = document.createElement('strong');
    title.textContent = completed ? (active === 3 ? 'Bạn đã đi hết hành trình giữ chữ Tín' : 'Chương ' + (active+2) + ' đã mở khóa') :
      (active === 3 ? 'Hoàn thành hành trình của bạn' : 'Mở khóa Chương ' + (active+2));
    const detail = document.createElement('p');
    detail.textContent = completed ? (active === 3 ? 'Khám phá trân bảo phù hợp với điều bạn muốn gửi trao.' :
      'Tiếp tục khám phá ' + chapters[active+1].name.toLowerCase() + ' của Bảo Tín Mạnh Hải.') :
      'Xem đủ 5 thẻ của chương này. Tiến độ của bạn được lưu trên thiết bị.';
    copy.append(title,detail);
    gate.append(copy);
    const action = document.createElement('button');
    action.type = 'button';
    action.textContent = completed ? (active === 3 ? 'Khám phá sản phẩm' : 'Vào Chương ' + (active+2)) : 'Đọc tiếp';
    action.addEventListener('click', () => {
      if (completed && active < 3) return selectChapter(active+1);
      if (completed) return $('san-pham').scrollIntoView({behavior:reduced() ? 'instant' : 'smooth'});
      goToUnread();
    });
    gate.append(action);
    if (!nudgeDismissed) {
      const nudgeText = $('chat-nudge').querySelector('p');
      nudgeText.textContent = completed ? 'Bạn đã hoàn thành Chương ' + (active+1) + '. ' +
        (active < 3 ? 'Chương tiếp theo đã mở khóa!' : 'Cùng khám phá các trân bảo nhé.') :
        'Đọc hết ' + (active === 0 ? 'lịch sử ' : 'nội dung ') + 'Chương ' + (active+1) +
        ' để mở khóa ' + (active < 3 ? 'Chương ' + (active+2) : 'toàn bộ hành trình') + ' nhé.';
    }
  }
  function reduced() { return matchMedia('(prefers-reduced-motion: reduce)').matches; }
  function goToUnread() {
    controller.goTo(Math.min(progress[active],4));
    $('lich-su').scrollIntoView({behavior:reduced() ? 'instant' : 'smooth',block:'start'});
    scheduleRead();
  }
  function selectChapter(i, scroll = true) {
    if (!allowed(i)) {
      const firstIncomplete = progress.findIndex(count => count < 5);
      const chapterNumber = firstIncomplete + 1;
      toast('Chương ' + (i+1) + ' đang khóa. Hãy xem đủ 5 thẻ của Chương ' + chapterNumber + ' trước nhé.');
      message('Để mở Chương ' + (i+1) + ', bạn cần hoàn thành các chương trước theo thứ tự. ' + missingMessage(firstIncomplete));
      return;
    }
    clearTimeout(dwell);
    active = i;
    const chapter = chapters[i];
    document.querySelector('.hero-copy .chapter').textContent = 'CHƯƠNG ' + (i+1) + ' · ' + chapter.eyebrow;
    $('hero-title').innerHTML = '<span>' + chapter.year + '</span><br>' + chapter.title.replaceAll('<br>', '<br> ');
    document.querySelector('.hero-copy').classList.toggle('chapter-hero-alt',i > 0);
    document.querySelector('.intro-copy').textContent = chapter.intro;
    document.querySelector('.photo').src = chapter.image;
    document.querySelector('.photo').alt = chapter.alt;
    document.querySelector('.origin').innerHTML = chapter.origin;
    document.querySelector('.photo-credit').textContent = i === 0 ? 'Thiết kế minh họa · Cửa hàng xưa và nay' :
      (i === 1 ? 'Phác họa minh họa · Tinh hoa kim hoàn' : 'Hình ảnh từ website Bảo Tín Mạnh Hải');
    $('compare-button').hidden = i !== 0;
    $('replay').hidden = i !== 0;
    document.querySelector('.drawing').hidden = true;
    document.querySelector('.official-photo').hidden = true;
    document.querySelector('.compare-ui').hidden = true;
    $('compare-button').setAttribute('aria-pressed','false');
    $('compare-button').textContent = 'Xem phác họa thuở đầu';
    $('film-button').hidden = i !== 0;
    controller.replace(chapter.markup || chapter.cards.map(([year,title,copy,image]) => {
      return '<article class="card heritage-card"><div class="card-art" aria-hidden="true"><img src="' + image +
        '" alt="" draggable="false"></div><div class="card-copy"><p class="year">' + year +
        '</p><h3>' + title + '</h3></div><div class="milestone-content" hidden><img src="' + image +
        '" alt="' + title + '"><div><p class="milestone-stage">' + title + '</p><p>' + copy +
        '</p><a class="chapter-source" href="' + chapter.source +
        '" target="_blank" rel="noopener">Xem tại website chính thức</a></div></div></article>';
    }).join(''));
    update();
    if (scroll) document.querySelector('.mast').scrollIntoView({behavior:reduced() ? 'instant' : 'smooth',block:'start'});
    history.replaceState(null,'','#chuong-' + (i+1));
    scheduleRead();
  }
  function isReadyToRead(candidate, chapter) {
    return chapter === active && candidate === progress[active] && allowed(active) &&
      document.visibilityState === 'visible' && $('opening').hidden && !popup.open && detailVisible && carouselVisible &&
      controller.getIndex() === candidate && Math.abs(carousel.scrollLeft - controller.getAt(candidate)) < 4;
  }
  function scheduleRead() {
    clearTimeout(dwell);
    const candidate = controller.getIndex();
    const chapter = active;
    if (!isReadyToRead(candidate, chapter)) return;
    dwell = setTimeout(() => {
      if (!isReadyToRead(candidate, chapter)) return;
      progress[active] = candidate + 1;
      save();
      update();
      if (progress[active] === 5) {
        toast(active < 3 ? 'Đã mở khóa Chương ' + (active+2) + ' · ' + chapters[active+1].name : 'Bạn đã hoàn thành bốn chương!');
        message(missingMessage());
        showPopup(active+1);
      }
    }, 1500);
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.target === $('milestone-detail')) detailVisible = entry.isIntersecting && entry.intersectionRatio >= .4;
      if (entry.target === carousel) carouselVisible = entry.isIntersecting && entry.intersectionRatio >= .4;
    });
    scheduleRead();
  }, {threshold:[0,.4,.6,1]});
  observer.observe($('milestone-detail'));
  observer.observe(carousel);
  carousel.addEventListener('milestonechange', () => { update(); scheduleRead(); });
  carousel.addEventListener('scrollend', scheduleRead);
  carousel.addEventListener('scroll', () => { clearTimeout(dwell); scheduleRead(); },{passive:true});
  document.addEventListener('visibilitychange',scheduleRead);
  window.addEventListener('hashchange', () => {
    const match = location.hash.match(/^#chuong-(\d)$/);
    if (!match) return;
    const target = Number(match[1]) - 1;
    if (target < 0 || target > 3) return;
    if (target !== active && allowed(target)) selectChapter(target);
    else if (!allowed(target)) {
      history.replaceState(null,'','#chuong-' + (active+1));
      selectChapter(target);
    }
  });
  $('chat-launch').addEventListener('click', () => {
    if ($('chat-panel').hidden) openChat();
    else { $('chat-panel').hidden = true; $('chat-launch').setAttribute('aria-expanded','false'); }
  });
  $('chat-close').addEventListener('click', () => {
    $('chat-panel').hidden = true;
    $('chat-launch').setAttribute('aria-expanded','false');
    $('chat-launch').focus({preventScroll:true});
  });
  $('nudge-close').addEventListener('click', () => { nudgeDismissed = true; $('chat-nudge').hidden = true; });
  function respond(question) {
    message(question,'visitor');
    const q = question.toLocaleLowerCase('vi').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d');
    if (/mo|khoa|chuong moi/.test(q)) {
      const incomplete = progress.findIndex(count => count < 5);
      message(incomplete < 0 ? 'Bạn đã hoàn thành đủ 4 chương. Chọn một chương trên thanh hành trình để xem lại nhé.' :
        'Mỗi chương mở khi bạn đã xem lần lượt đủ 5 thẻ của chương trước. ' + missingMessage(incomplete));
    } else if (/tiep|con thieu|chua doc/.test(q)) {
      message('Mình sẽ đưa bạn đến thẻ tiếp theo cần đọc. ' + missingMessage());
      goToUnread();
    } else if (/tien do|da doc|da xem|bao nhieu/.test(q)) {
      message(missingMessage());
    } else if (/1992|lich su|thanh lap|khoi nguon/.test(q)) {
      message('Bảo Tín Mạnh Hải thành lập ngày 15/11/1992 tại 39 Nguyễn Trãi, Thanh Xuân, Hà Nội. Chương 1 đưa bạn qua 5 giai đoạn trong tư liệu lịch sử. ' + missingMessage(0));
    } else if (/qua|gift|san pham|hoa/.test(q)) {
      message('Chương 3 giới thiệu những lời chúc qua Kim Gia Bảo Gift, như Vẹn Tròn Hương Sắc và Phúc Lành Bình An. Bạn cũng có thể mở danh mục chính thức ở cuối trang để xem sản phẩm.');
    } else if (/tin|triet ly|thuong hieu/.test(q)) {
      message('“Giữ tín nhiệm hơn giữ vàng” là triết lý Bảo Tín Mạnh Hải theo đuổi. Bốn chương giúp bạn khám phá khởi nguồn, tinh hoa kim hoàn, trân bảo và các giá trị được tiếp nối.');
    } else if (/che tac|chat luong|vang/.test(q)) {
      message('Chương 2 giới thiệu tinh hoa kim hoàn và cách khám phá chất liệu, thiết kế theo thông tin công bố. Chi tiết hàm lượng vàng cần xem trên từng trang sản phẩm chính thức.');
    } else {
      message('Mình hỗ trợ hướng dẫn chương, kiểm tra tiến độ và giới thiệu nội dung thương hiệu trên trang này. Bạn có thể hỏi “Mở chương mới”, “Tiến độ của tôi” hoặc “Đọc tiếp”. ' + missingMessage());
    }
  }
  $('chat-form').addEventListener('submit', event => {
    event.preventDefault();
    const question = $('chat-input').value.trim();
    if (!question) return;
    $('chat-input').value = '';
    respond(question);
  });
  document.querySelectorAll('[data-question]').forEach(button => button.addEventListener('click', () => respond(button.dataset.question)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !$('chat-panel').hidden) $('chat-close').click();
  });
  message('Chào bạn, mình là DMS x BTMH, trợ lý hướng dẫn hành trình. Đọc hết lịch sử Chương 1 để mở khóa Chương 2 nhé. Mình sẽ nhắc thẻ còn thiếu và cập nhật tiến độ cho bạn.');
  const openingObserver = new MutationObserver(() => {
    document.querySelector('.concierge').classList.toggle('intro-playing',!$('opening').hidden);
    document.querySelector('.concierge').inert = !$('opening').hidden;
    scheduleRead();
    scheduleWelcome();
  });
  openingObserver.observe($('opening'),{attributes:true,attributeFilter:['hidden']});
  document.querySelector('.concierge').classList.toggle('intro-playing',!$('opening').hidden);
  document.querySelector('.concierge').inert = !$('opening').hidden;
  update();
  scheduleWelcome();
  const initial = location.hash.match(/^#chuong-(\d)$/);
  if (initial && Number(initial[1]) > 1 && Number(initial[1]) <= 4) selectChapter(Number(initial[1])-1,false);
})();
