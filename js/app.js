document.addEventListener("DOMContentLoaded", function() {
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

    e.forEach(function(e) { e.addEventListener("click", f) });
    n && n.addEventListener("click", v);
    o && o.addEventListener("click", v);

    l.addEventListener("submit", function(e) {
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
        localStorage.setItem("formData", JSON.stringify(u)), window.location.href = "https://t.me/+e1jh_ZVfWokwOGNi", i.textContent = "DAVOM ETISH", i.disabled = !1, d.value = "", a.value = "", v()
    });

    // Non-critical tasks — run when main thread is idle
    var idle = window.requestIdleCallback || function(cb) { setTimeout(cb, 50) };

    idle(function() {
        setTimeout(function() { p || f() }, 6e4);

        document.querySelectorAll(".title, .event__list__title, .text span, .expert__img").forEach(function(e) {
            e.style.cursor = "pointer";
            e.addEventListener("click", f)
        });

        // FAQ dropdowns
        document.querySelectorAll(".webinar-faq__dropdown").forEach(function(e) {
            var t = e.querySelector(".webinar-faq__dropdown__head");
            t && t.addEventListener("click", function() {
                if (e.classList.contains("is-open")) e.classList.remove("is-open"), e.style.maxHeight = "80px";
                else {
                    e.classList.add("is-open"), e.style.maxHeight = "200px";
                    var t = e.scrollHeight;
                    e.style.maxHeight = t + "px"
                }
            })
        });

        // Timer
        var el = document.getElementById("timer");
        if (el) {
            var sec = 120;
            var iv = setInterval(function() {
                var min = Math.floor(sec / 60), s = sec % 60;
                el.textContent = String(min).padStart(2,"0") + ":" + String(s).padStart(2,"0");
                if (sec <= 0) clearInterval(iv);
                sec--
            }, 1e3)
        }
    });
});