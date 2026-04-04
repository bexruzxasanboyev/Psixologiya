document.addEventListener("DOMContentLoaded", (function() {
    const e = document.querySelectorAll(".webinar-cta"),
        t = document.getElementById("registrationModal"),
        n = document.getElementById("closeModalBtn"),
        o = document.querySelector(".homeModalOverlay"),
        l = document.getElementById("registrationForm"),
        d = document.getElementById("name"),
        r = document.getElementById("nameError"),
        a = document.getElementById("phone"),
        c = document.getElementById("phoneError"),
        i = document.getElementById("submitBtn"),
        s = document.getElementById("selectedCountry"),
        m = document.getElementById("selectedCountryCode"),
        u = document.getElementById("countryDropdown"),
        y = document.getElementById("dropdownIcon"),
        E = setupPhoneFormatter({
            inputEl: a,
            codeLabelEl: m,
            dropdownEl: u,
            triggerEl: s,
            iconEl: y,
            errorEl: c,
            defaultCode: "+998"
        });
    let p = !1,
        g = 0;

    function f() {
        t && (p = !0, g = window.scrollY, t.style.display = "block", document.body.style.overflow = "hidden", r.style.display = "none", c.style.display = "none")
    }

    function v() {
        t && p && (p = !1, t.style.display = "none", document.body.style.overflow = "", document.body.style.position = "", document.body.style.top = "", window.scrollTo(0, g))
    }
    e.forEach((e => e.addEventListener("click", f))), n && n.addEventListener("click", v), o && o.addEventListener("click", v), setTimeout((function() {
        p || f()
    }), 6e4), document.querySelectorAll(".title, .event__list__title, .text span, .expert__img").forEach((function(e) {
        e.style.cursor = "pointer", e.addEventListener("click", f)
    })), l.addEventListener("submit", (function(e) {
        e.preventDefault();
        const t = d.value.trim(),
            n = a.value.trim();
        let o = !1;
        if (t ? r.style.display = "none" : (r.style.display = "block", o = !0), E.validate(n) ? c.style.display = "none" : (c.style.display = "block", o = !0), o) return;
        i.textContent = "YUBORILMOQDA...", i.disabled = !0;
        const l = new Date,
            s = l.toLocaleDateString("uz-UZ"),
            m = l.toLocaleTimeString("uz-UZ"),
            u = {
                Ism: t,
                TelefonRaqam: E.getCurrentCode() + " " + n,
                SanaSoat: s + " - " + m
            };
        localStorage.setItem("formData", JSON.stringify(u)), window.location.href = "https://t.me/AsosIt", i.textContent = "DAVOM ETISH", i.disabled = !1, d.value = "", a.value = "", v()
    }))
})), document.addEventListener("DOMContentLoaded", (function() {
    document.querySelectorAll(".webinar-faq__dropdown").forEach((e => {
        const t = e.querySelector(".webinar-faq__dropdown__head");
        t && t.addEventListener("click", (function() {
            if (e.classList.contains("is-open")) e.classList.remove("is-open"), e.style.maxHeight = "80px";
            else {
                e.classList.add("is-open"), e.style.maxHeight = "200px";
                const t = e.scrollHeight;
                e.style.maxHeight = t + "px"
            }
        }))
    }))
})), document.addEventListener("DOMContentLoaded", (() => {
    const e = document.getElementById("timer");
    if (!e) return;
    let t = 120;
    const n = setInterval((() => {
        const o = Math.floor(t / 60),
            l = t % 60;
        e.textContent = `${String(o).padStart(2,"0")}:${String(l).padStart(2,"0")}`, t <= 0 && clearInterval(n), t--
    }), 1e3)
}));