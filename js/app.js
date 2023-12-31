(() => {
  "use strict";
  function e(e) {
    this.type = e;
  }
  (e.prototype.init = function () {
    const e = this;
    (this.оbjects = []),
      (this.daClassname = "_dynamic_adapt_"),
      (this.nodes = document.querySelectorAll("[data-da]"));
    for (let e = 0; e < this.nodes.length; e++) {
      const t = this.nodes[e],
        s = t.dataset.da.trim().split(","),
        i = {};
      (i.element = t),
        (i.parent = t.parentNode),
        (i.destination = document.querySelector(s[0].trim())),
        (i.breakpoint = s[1] ? s[1].trim() : "767"),
        (i.place = s[2] ? s[2].trim() : "last"),
        (i.index = this.indexInParent(i.parent, i.element)),
        this.оbjects.push(i);
    }
    this.arraySort(this.оbjects),
      (this.mediaQueries = Array.prototype.map.call(
        this.оbjects,
        function (e) {
          return (
            "(" + this.type + "-width: " + e.breakpoint + "px)," + e.breakpoint
          );
        },
        this
      )),
      (this.mediaQueries = Array.prototype.filter.call(
        this.mediaQueries,
        function (e, t, s) {
          return Array.prototype.indexOf.call(s, e) === t;
        }
      ));
    for (let t = 0; t < this.mediaQueries.length; t++) {
      const s = this.mediaQueries[t],
        i = String.prototype.split.call(s, ","),
        a = window.matchMedia(i[0]),
        l = i[1],
        n = Array.prototype.filter.call(this.оbjects, function (e) {
          return e.breakpoint === l;
        });
      a.addListener(function () {
        e.mediaHandler(a, n);
      }),
        this.mediaHandler(a, n);
    }
  }),
    (e.prototype.mediaHandler = function (e, t) {
      if (e.matches)
        for (let e = 0; e < t.length; e++) {
          const s = t[e];
          (s.index = this.indexInParent(s.parent, s.element)),
            this.moveTo(s.place, s.element, s.destination);
        }
      else
        for (let e = t.length - 1; e >= 0; e--) {
          const s = t[e];
          s.element.classList.contains(this.daClassname) &&
            this.moveBack(s.parent, s.element, s.index);
        }
    }),
    (e.prototype.moveTo = function (e, t, s) {
      t.classList.add(this.daClassname),
        "last" === e || e >= s.children.length
          ? s.insertAdjacentElement("beforeend", t)
          : "first" !== e
          ? s.children[e].insertAdjacentElement("beforebegin", t)
          : s.insertAdjacentElement("afterbegin", t);
    }),
    (e.prototype.moveBack = function (e, t, s) {
      t.classList.remove(this.daClassname),
        void 0 !== e.children[s]
          ? e.children[s].insertAdjacentElement("beforebegin", t)
          : e.insertAdjacentElement("beforeend", t);
    }),
    (e.prototype.indexInParent = function (e, t) {
      const s = Array.prototype.slice.call(e.children);
      return Array.prototype.indexOf.call(s, t);
    }),
    (e.prototype.arraySort = function (e) {
      "min" === this.type
        ? Array.prototype.sort.call(e, function (e, t) {
            return e.breakpoint === t.breakpoint
              ? e.place === t.place
                ? 0
                : "first" === e.place || "last" === t.place
                ? -1
                : "last" === e.place || "first" === t.place
                ? 1
                : e.place - t.place
              : e.breakpoint - t.breakpoint;
          })
        : Array.prototype.sort.call(e, function (e, t) {
            return e.breakpoint === t.breakpoint
              ? e.place === t.place
                ? 0
                : "first" === e.place || "last" === t.place
                ? 1
                : "last" === e.place || "first" === t.place
                ? -1
                : t.place - e.place
              : t.breakpoint - e.breakpoint;
          });
    });
  new e("max").init();
  let t = (e, t = 500, s = 0) => {
      e.classList.contains("_slide") ||
        (e.classList.add("_slide"),
        (e.style.transitionProperty = "height, margin, padding"),
        (e.style.transitionDuration = t + "ms"),
        (e.style.height = `${e.offsetHeight}px`),
        e.offsetHeight,
        (e.style.overflow = "hidden"),
        (e.style.height = s ? `${s}px` : "0px"),
        (e.style.paddingTop = 0),
        (e.style.paddingBottom = 0),
        (e.style.marginTop = 0),
        (e.style.marginBottom = 0),
        window.setTimeout(() => {
          (e.hidden = !s),
            !s && e.style.removeProperty("height"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            !s && e.style.removeProperty("overflow"),
            e.style.removeProperty("transition-duration"),
            e.style.removeProperty("transition-property"),
            e.classList.remove("_slide");
        }, t));
    },
    s = (e, t = 500, s = 0) => {
      if (!e.classList.contains("_slide")) {
        e.classList.add("_slide"),
          (e.hidden = !e.hidden && null),
          s && e.style.removeProperty("height");
        let i = e.offsetHeight;
        (e.style.overflow = "hidden"),
          (e.style.height = s ? `${s}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          e.offsetHeight,
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = i + "px"),
          e.style.removeProperty("padding-top"),
          e.style.removeProperty("padding-bottom"),
          e.style.removeProperty("margin-top"),
          e.style.removeProperty("margin-bottom"),
          window.setTimeout(() => {
            e.style.removeProperty("height"),
              e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide");
          }, t);
      }
    },
    i = (e, i = 500) => (e.hidden ? s(e, i) : t(e, i)),
    a = !0,
    l = (e = 500) => {
      let t = document.querySelector("body");
      if (a) {
        let s = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let e = 0; e < s.length; e++) {
            s[e].style.paddingRight = "0px";
          }
          (t.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, e),
          (a = !1),
          setTimeout(function () {
            a = !0;
          }, e);
      }
    },
    n = (e = 500) => {
      let t = document.querySelector("body");
      if (a) {
        let s = document.querySelectorAll("[data-lp]");
        for (let e = 0; e < s.length; e++) {
          s[e].style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px";
        }
        (t.style.paddingRight =
          window.innerWidth -
          document.querySelector(".wrapper").offsetWidth +
          "px"),
          document.documentElement.classList.add("lock"),
          (a = !1),
          setTimeout(function () {
            a = !0;
          }, e);
      }
    };
  function r(e) {
    setTimeout(() => {
      window.FLS && console.log(e);
    }, 0);
  }
  function o(e, t) {
    const s = Array.from(e).filter(function (e, s, i) {
      if (e.dataset[t]) return e.dataset[t].split(",")[0];
    });
    if (s.length) {
      const e = [];
      s.forEach((s) => {
        const i = {},
          a = s.dataset[t].split(",");
        (i.value = a[0]),
          (i.type = a[1] ? a[1].trim() : "max"),
          (i.item = s),
          e.push(i);
      });
      let i = e.map(function (e) {
        return (
          "(" + e.type + "-width: " + e.value + "px)," + e.value + "," + e.type
        );
      });
      i = (function (e) {
        return e.filter(function (e, t, s) {
          return s.indexOf(e) === t;
        });
      })(i);
      const a = [];
      if (i.length)
        return (
          i.forEach((t) => {
            const s = t.split(","),
              i = s[1],
              l = s[2],
              n = window.matchMedia(s[0]),
              r = e.filter(function (e) {
                if (e.value === i && e.type === l) return !0;
              });
            a.push({ itemsArray: r, matchMedia: n });
          }),
          a
        );
    }
  }
  let c = (e, t = !1, s = 500, i = 0) => {
    const a = document.querySelector(e);
    if (a) {
      let n = "",
        o = 0;
      t &&
        ((n = "header.header"), (o = document.querySelector(n).offsetHeight));
      let c = {
        speedAsDuration: !0,
        speed: s,
        header: n,
        offset: i,
        easing: "easeOutQuad",
      };
      if (
        (document.documentElement.classList.contains("menu-open") &&
          (l(), document.documentElement.classList.remove("menu-open")),
        "undefined" != typeof SmoothScroll)
      )
        new SmoothScroll().animateScroll(a, "", c);
      else {
        let e = a.getBoundingClientRect().top + scrollY;
        window.scrollTo({ top: o ? e - o : e, behavior: "smooth" });
      }
      r(`[gotoBlock]: Юхуу...едем к ${e}`);
    } else r(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
  };
  class d {
    constructor(e, t = null) {
      if (
        ((this.config = Object.assign({ init: !0, logging: !0 }, e)),
        (this.selectClasses = {
          classSelect: "select",
          classSelectBody: "select__body",
          classSelectTitle: "select__title",
          classSelectValue: "select__value",
          classSelectLabel: "select__label",
          classSelectInput: "select__input",
          classSelectText: "select__text",
          classSelectLink: "select__link",
          classSelectOptions: "select__options",
          classSelectOptionsScroll: "select__scroll",
          classSelectOption: "select__option",
          classSelectContent: "select__content",
          classSelectRow: "select__row",
          classSelectData: "select__asset",
          classSelectDisabled: "_select-disabled",
          classSelectTag: "_select-tag",
          classSelectOpen: "_select-open",
          classSelectActive: "_select-active",
          classSelectFocus: "_select-focus",
          classSelectMultiple: "_select-multiple",
          classSelectCheckBox: "_select-checkbox",
          classSelectOptionSelected: "_select-selected",
        }),
        (this._this = this),
        this.config.init)
      ) {
        const e = t
          ? document.querySelectorAll(t)
          : document.querySelectorAll("select");
        e.length
          ? (this.selectsInit(e),
            this.setLogging(`Проснулся, построил селектов: (${e.length})`))
          : this.setLogging("Сплю, нет ни одного select zzZZZzZZz");
      }
    }
    getSelectClass(e) {
      return `.${e}`;
    }
    getSelectElement(e, t) {
      return {
        originalSelect: e.querySelector("select"),
        selectElement: e.querySelector(this.getSelectClass(t)),
      };
    }
    selectsInit(e) {
      e.forEach((e, t) => {
        this.selectInit(e, t + 1);
      }),
        document.addEventListener(
          "click",
          function (e) {
            this.selectsActions(e);
          }.bind(this)
        ),
        document.addEventListener(
          "keydown",
          function (e) {
            this.selectsActions(e);
          }.bind(this)
        ),
        document.addEventListener(
          "focusin",
          function (e) {
            this.selectsActions(e);
          }.bind(this)
        ),
        document.addEventListener(
          "focusout",
          function (e) {
            this.selectsActions(e);
          }.bind(this)
        );
    }
    selectInit(e, t) {
      const s = this;
      let i = document.createElement("div");
      if (
        (i.classList.add(this.selectClasses.classSelect),
        e.parentNode.insertBefore(i, e),
        i.appendChild(e),
        (e.hidden = !0),
        t && (e.dataset.id = t),
        i.insertAdjacentHTML(
          "beforeend",
          `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`
        ),
        this.selectBuild(e),
        this.getSelectPlaceholder(e) &&
          ((e.dataset.placeholder = this.getSelectPlaceholder(e).value),
          this.getSelectPlaceholder(e).label.show))
      ) {
        this.getSelectElement(
          i,
          this.selectClasses.classSelectTitle
        ).selectElement.insertAdjacentHTML(
          "afterbegin",
          `<span class="${this.selectClasses.classSelectLabel}">${
            this.getSelectPlaceholder(e).label.text
              ? this.getSelectPlaceholder(e).label.text
              : this.getSelectPlaceholder(e).value
          }</span>`
        );
      }
      (e.dataset.speed = e.dataset.speed ? e.dataset.speed : "150"),
        e.addEventListener("change", function (e) {
          s.selectChange(e);
        });
    }
    selectBuild(e) {
      const t = e.parentElement;
      (t.dataset.id = e.dataset.id),
        t.classList.add(
          e.getAttribute("class") ? `select_${e.getAttribute("class")}` : ""
        ),
        e.multiple
          ? t.classList.add(this.selectClasses.classSelectMultiple)
          : t.classList.remove(this.selectClasses.classSelectMultiple),
        e.hasAttribute("data-checkbox") && e.multiple
          ? t.classList.add(this.selectClasses.classSelectCheckBox)
          : t.classList.remove(this.selectClasses.classSelectCheckBox),
        this.setSelectTitleValue(t, e),
        this.setOptions(t, e),
        e.hasAttribute("data-search") && this.searchActions(t),
        e.hasAttribute("data-open") && this.selectAction(t),
        this.selectDisabled(t, e);
    }
    selectsActions(e) {
      const t = e.target,
        s = e.type;
      if (
        t.closest(this.getSelectClass(this.selectClasses.classSelect)) ||
        t.closest(this.getSelectClass(this.selectClasses.classSelectTag))
      ) {
        const i = t.closest(".select")
            ? t.closest(".select")
            : document.querySelector(
                `.${this.selectClasses.classSelect}[data-id="${
                  t.closest(
                    this.getSelectClass(this.selectClasses.classSelectTag)
                  ).dataset.selectId
                }"]`
              ),
          a = this.getSelectElement(i).originalSelect;
        if ("click" === s) {
          if (!a.disabled)
            if (
              t.closest(this.getSelectClass(this.selectClasses.classSelectTag))
            ) {
              const e = t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTag)
                ),
                s = document.querySelector(
                  `.${this.selectClasses.classSelect}[data-id="${e.dataset.selectId}"] .select__option[data-value="${e.dataset.value}"]`
                );
              this.optionAction(i, a, s);
            } else if (
              t.closest(
                this.getSelectClass(this.selectClasses.classSelectTitle)
              )
            )
              this.selectAction(i);
            else if (
              t.closest(
                this.getSelectClass(this.selectClasses.classSelectOption)
              )
            ) {
              const e = t.closest(
                this.getSelectClass(this.selectClasses.classSelectOption)
              );
              this.optionAction(i, a, e);
            }
        } else
          "focusin" === s || "focusout" === s
            ? t.closest(this.getSelectClass(this.selectClasses.classSelect)) &&
              ("focusin" === s
                ? i.classList.add(this.selectClasses.classSelectFocus)
                : i.classList.remove(this.selectClasses.classSelectFocus))
            : "keydown" === s && "Escape" === e.code && this.selectsСlose();
      } else this.selectsСlose();
    }
    selectsСlose() {
      const e = document.querySelectorAll(
        `${this.getSelectClass(
          this.selectClasses.classSelect
        )}${this.getSelectClass(this.selectClasses.classSelectOpen)}`
      );
      e.length &&
        e.forEach((e) => {
          this.selectAction(e);
        });
    }
    selectAction(e) {
      const t = this.getSelectElement(e).originalSelect,
        s = this.getSelectElement(
          e,
          this.selectClasses.classSelectOptions
        ).selectElement;
      s.classList.contains("_slide") ||
        (e.classList.toggle(this.selectClasses.classSelectOpen),
        i(s, t.dataset.speed));
    }
    setSelectTitleValue(e, t) {
      const s = this.getSelectElement(
          e,
          this.selectClasses.classSelectBody
        ).selectElement,
        i = this.getSelectElement(
          e,
          this.selectClasses.classSelectTitle
        ).selectElement;
      i && i.remove(),
        s.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(e, t));
    }
    getSelectTitleValue(e, t) {
      let s = this.getSelectedOptionsData(t, 2).html;
      if (
        (t.multiple &&
          t.hasAttribute("data-tags") &&
          ((s = this.getSelectedOptionsData(t)
            .elements.map(
              (t) =>
                `<span role="button" data-select-id="${
                  e.dataset.id
                }" data-value="${
                  t.value
                }" class="_select-tag">${this.getSelectElementContent(
                  t
                )}</span>`
            )
            .join("")),
          t.dataset.tags &&
            document.querySelector(t.dataset.tags) &&
            ((document.querySelector(t.dataset.tags).innerHTML = s),
            t.hasAttribute("data-search") && (s = !1))),
        (s = s.length ? s : t.dataset.placeholder),
        this.getSelectedOptionsData(t).values.length
          ? e.classList.add(this.selectClasses.classSelectActive)
          : e.classList.remove(this.selectClasses.classSelectActive),
        t.hasAttribute("data-search"))
      )
        return `<div class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${s}" data-placeholder="${s}" class="${this.selectClasses.classSelectInput}"></span></div>`;
      {
        const e =
          this.getSelectedOptionsData(t).elements.length &&
          this.getSelectedOptionsData(t).elements[0].dataset.class
            ? ` ${this.getSelectedOptionsData(t).elements[0].dataset.class}`
            : "";
        return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><span class="${this.selectClasses.classSelectContent}${e}">${s}</span></span></button>`;
      }
    }
    getSelectElementContent(e) {
      const t = e.dataset.asset ? `${e.dataset.asset}` : "",
        s = t.indexOf("img") >= 0 ? `<img src="${t}" alt="">` : t;
      let i = "";
      return (
        (i += t ? `<span class="${this.selectClasses.classSelectRow}">` : ""),
        (i += t ? `<span class="${this.selectClasses.classSelectData}">` : ""),
        (i += t ? s : ""),
        (i += t ? "</span>" : ""),
        (i += t ? `<span class="${this.selectClasses.classSelectText}">` : ""),
        (i += e.textContent),
        (i += t ? "</span>" : ""),
        (i += t ? "</span>" : ""),
        i
      );
    }
    getSelectPlaceholder(e) {
      const t = Array.from(e.options).find((e) => !e.value);
      if (t)
        return {
          value: t.textContent,
          show: t.hasAttribute("data-show"),
          label: { show: t.hasAttribute("data-label"), text: t.dataset.label },
        };
    }
    getSelectedOptionsData(e, t) {
      let s = [];
      return (
        e.multiple
          ? (s = Array.from(e.options)
              .filter((e) => e.value)
              .filter((e) => e.selected))
          : s.push(e.options[e.selectedIndex]),
        {
          elements: s.map((e) => e),
          values: s.filter((e) => e.value).map((e) => e.value),
          html: s.map((e) => this.getSelectElementContent(e)),
        }
      );
    }
    getOptions(e) {
      let t = e.hasAttribute("data-scroll") ? "data-simplebar" : "",
        s = e.dataset.scroll ? `style="max-height:${e.dataset.scroll}px"` : "",
        i = Array.from(e.options);
      if (i.length > 0) {
        let a = "";
        return (
          ((this.getSelectPlaceholder(e) &&
            !this.getSelectPlaceholder(e).show) ||
            e.multiple) &&
            (i = i.filter((e) => e.value)),
          (a += t
            ? `<div ${t} ${s} class="${this.selectClasses.classSelectOptionsScroll}">`
            : ""),
          i.forEach((t) => {
            a += this.getOption(t, e);
          }),
          (a += t ? "</div>" : ""),
          a
        );
      }
    }
    getOption(e, t) {
      const s =
          e.selected && t.multiple
            ? ` ${this.selectClasses.classSelectOptionSelected}`
            : "",
        i = e.selected && !t.hasAttribute("data-show-selected") ? "hidden" : "",
        a = e.dataset.class ? ` ${e.dataset.class}` : "",
        l = !!e.dataset.href && e.dataset.href,
        n = e.hasAttribute("data-href-blank") ? 'target="_blank"' : "";
      let r = "";
      return (
        (r += l
          ? `<a ${n} ${i} href="${l}" data-value="${e.value}" class="${this.selectClasses.classSelectOption}${a}${s}">`
          : `<button ${i} class="${this.selectClasses.classSelectOption}${a}${s}" data-value="${e.value}" type="button">`),
        (r += this.getSelectElementContent(e)),
        (r += l ? "</a>" : "</button>"),
        r
      );
    }
    setOptions(e, t) {
      this.getSelectElement(
        e,
        this.selectClasses.classSelectOptions
      ).selectElement.innerHTML = this.getOptions(t);
    }
    optionAction(e, t, s) {
      if (t.multiple) {
        s.classList.toggle(this.selectClasses.classSelectOptionSelected);
        this.getSelectedOptionsData(t).elements.forEach((e) => {
          e.removeAttribute("selected");
        });
        e.querySelectorAll(
          this.getSelectClass(this.selectClasses.classSelectOptionSelected)
        ).forEach((e) => {
          t.querySelector(`option[value="${e.dataset.value}"]`).setAttribute(
            "selected",
            "selected"
          );
        });
      } else
        t.hasAttribute("data-show-selected") ||
          (e.querySelector(
            `${this.getSelectClass(
              this.selectClasses.classSelectOption
            )}[hidden]`
          ) &&
            (e.querySelector(
              `${this.getSelectClass(
                this.selectClasses.classSelectOption
              )}[hidden]`
            ).hidden = !1),
          (s.hidden = !0)),
          (t.value = s.hasAttribute("data-value")
            ? s.dataset.value
            : s.textContent),
          this.selectAction(e);
      this.setSelectTitleValue(e, t), this.setSelectChange(t);
    }
    selectChange(e) {
      const t = e.target;
      this.selectBuild(t), this.setSelectChange(t);
    }
    setSelectChange(e) {
      if (
        (e.hasAttribute("data-validate") && u.validateInput(e),
        e.hasAttribute("data-submit") && e.value)
      ) {
        let t = document.createElement("button");
        (t.type = "submit"), e.closest("form").append(t), t.click(), t.remove();
      }
      const t = e.parentElement;
      this.selectCallback(t, e);
    }
    selectDisabled(e, t) {
      t.disabled
        ? (e.classList.add(this.selectClasses.classSelectDisabled),
          (this.getSelectElement(
            e,
            this.selectClasses.classSelectTitle
          ).selectElement.disabled = !0))
        : (e.classList.remove(this.selectClasses.classSelectDisabled),
          (this.getSelectElement(
            e,
            this.selectClasses.classSelectTitle
          ).selectElement.disabled = !1));
    }
    searchActions(e) {
      this.getSelectElement(e).originalSelect;
      const t = this.getSelectElement(
          e,
          this.selectClasses.classSelectInput
        ).selectElement,
        s = this.getSelectElement(
          e,
          this.selectClasses.classSelectOptions
        ).selectElement,
        i = s.querySelectorAll(`.${this.selectClasses.classSelectOption}`),
        a = this;
      t.addEventListener("input", function () {
        i.forEach((e) => {
          e.textContent.toUpperCase().indexOf(t.value.toUpperCase()) >= 0
            ? (e.hidden = !1)
            : (e.hidden = !0);
        }),
          !0 === s.hidden && a.selectAction(e);
      });
    }
    selectCallback(e, t) {
      document.dispatchEvent(
        new CustomEvent("selectCallback", { detail: { select: t } })
      );
    }
    setLogging(e) {
      this.config.logging && r(`[select]: ${e}`);
    }
  }
  const p = { inputMaskModule: null, selectModule: null };
  let u = {
    getErrors(e) {
      let t = 0,
        s = e.querySelectorAll("*[data-required]");
      return (
        s.length &&
          s.forEach((e) => {
            (null === e.offsetParent && "SELECT" !== e.tagName) ||
              e.disabled ||
              (t += this.validateInput(e));
          }),
        t
      );
    },
    validateInput(e) {
      let t = 0;
      return (
        "email" === e.dataset.required
          ? ((e.value = e.value.replace(" ", "")),
            this.emailTest(e) ? (this.addError(e), t++) : this.removeError(e))
          : ("checkbox" !== e.type || e.checked) && e.value
          ? this.removeError(e)
          : (this.addError(e), t++),
        t
      );
    },
    addError(e) {
      e.classList.add("_form-error"),
        e.parentElement.classList.add("_form-error");
      let t = e.parentElement.querySelector(".form__error");
      t && e.parentElement.removeChild(t),
        e.dataset.error &&
          e.parentElement.insertAdjacentHTML(
            "beforeend",
            `<div class="form__error">${e.dataset.error}</div>`
          );
    },
    removeError(e) {
      e.classList.remove("_form-error"),
        e.parentElement.classList.remove("_form-error"),
        e.parentElement.querySelector(".form__error") &&
          e.parentElement.removeChild(
            e.parentElement.querySelector(".form__error")
          );
    },
    formClean(e) {
      e.reset(),
        setTimeout(() => {
          let t = e.querySelectorAll("input,textarea");
          for (let e = 0; e < t.length; e++) {
            const s = t[e];
            s.parentElement.classList.remove("_form-focus"),
              s.classList.remove("_form-focus"),
              u.removeError(s),
              (s.value = s.dataset.placeholder);
          }
          let s = e.querySelectorAll(".checkbox__input");
          if (s.length > 0)
            for (let e = 0; e < s.length; e++) {
              s[e].checked = !1;
            }
          if (p.selectModule) {
            let t = e.querySelectorAll(".select");
            if (t.length)
              for (let e = 0; e < t.length; e++) {
                const s = t[e].querySelector("select");
                p.selectModule.selectBuild(s);
              }
          }
        }, 0);
    },
    emailTest: (e) =>
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
  };
  function h(e) {
    return (
      null !== e &&
      "object" == typeof e &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function m(e = {}, t = {}) {
    Object.keys(t).forEach((s) => {
      void 0 === e[s]
        ? (e[s] = t[s])
        : h(t[s]) && h(e[s]) && Object.keys(t[s]).length > 0 && m(e[s], t[s]);
    });
  }
  const f = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: "" },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createEvent: () => ({ initEvent() {} }),
    createElement: () => ({
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName: () => [],
    }),
    createElementNS: () => ({}),
    importNode: () => null,
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  function g() {
    const e = "undefined" != typeof document ? document : {};
    return m(e, f), e;
  }
  const v = {
    document: f,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle: () => ({ getPropertyValue: () => "" }),
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia: () => ({}),
    requestAnimationFrame: (e) =>
      "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
    cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    },
  };
  function S() {
    const e = "undefined" != typeof window ? window : {};
    return m(e, v), e;
  }
  function b(e, t = 0) {
    return setTimeout(e, t);
  }
  function w() {
    return Date.now();
  }
  function y(e, t = "x") {
    const s = S();
    let i, a, l;
    const n = (function (e) {
      const t = S();
      let s;
      return (
        t.getComputedStyle && (s = t.getComputedStyle(e, null)),
        !s && e.currentStyle && (s = e.currentStyle),
        s || (s = e.style),
        s
      );
    })(e);
    return (
      s.WebKitCSSMatrix
        ? ((a = n.transform || n.webkitTransform),
          a.split(",").length > 6 &&
            (a = a
              .split(", ")
              .map((e) => e.replace(",", "."))
              .join(", ")),
          (l = new s.WebKitCSSMatrix("none" === a ? "" : a)))
        : ((l =
            n.MozTransform ||
            n.OTransform ||
            n.MsTransform ||
            n.msTransform ||
            n.transform ||
            n
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (i = l.toString().split(","))),
      "x" === t &&
        (a = s.WebKitCSSMatrix
          ? l.m41
          : 16 === i.length
          ? parseFloat(i[12])
          : parseFloat(i[4])),
      "y" === t &&
        (a = s.WebKitCSSMatrix
          ? l.m42
          : 16 === i.length
          ? parseFloat(i[13])
          : parseFloat(i[5])),
      a || 0
    );
  }
  function E(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      e.constructor &&
      "Object" === Object.prototype.toString.call(e).slice(8, -1)
    );
  }
  function C(...e) {
    const t = Object(e[0]),
      s = ["__proto__", "constructor", "prototype"];
    for (let a = 1; a < e.length; a += 1) {
      const l = e[a];
      if (
        null != l &&
        ((i = l),
        !("undefined" != typeof window && void 0 !== window.HTMLElement
          ? i instanceof HTMLElement
          : i && (1 === i.nodeType || 11 === i.nodeType)))
      ) {
        const e = Object.keys(Object(l)).filter((e) => s.indexOf(e) < 0);
        for (let s = 0, i = e.length; s < i; s += 1) {
          const i = e[s],
            a = Object.getOwnPropertyDescriptor(l, i);
          void 0 !== a &&
            a.enumerable &&
            (E(t[i]) && E(l[i])
              ? l[i].__swiper__
                ? (t[i] = l[i])
                : C(t[i], l[i])
              : !E(t[i]) && E(l[i])
              ? ((t[i] = {}), l[i].__swiper__ ? (t[i] = l[i]) : C(t[i], l[i]))
              : (t[i] = l[i]));
        }
      }
    }
    var i;
    return t;
  }
  function T(e, t, s) {
    e.style.setProperty(t, s);
  }
  function x({ swiper: e, targetPosition: t, side: s }) {
    const i = S(),
      a = -e.translate;
    let l,
      n = null;
    const r = e.params.speed;
    (e.wrapperEl.style.scrollSnapType = "none"),
      i.cancelAnimationFrame(e.cssModeFrameID);
    const o = t > a ? "next" : "prev",
      c = (e, t) => ("next" === o && e >= t) || ("prev" === o && e <= t),
      d = () => {
        (l = new Date().getTime()), null === n && (n = l);
        const o = Math.max(Math.min((l - n) / r, 1), 0),
          p = 0.5 - Math.cos(o * Math.PI) / 2;
        let u = a + p * (t - a);
        if ((c(u, t) && (u = t), e.wrapperEl.scrollTo({ [s]: u }), c(u, t)))
          return (
            (e.wrapperEl.style.overflow = "hidden"),
            (e.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (e.wrapperEl.style.overflow = ""),
                e.wrapperEl.scrollTo({ [s]: u });
            }),
            void i.cancelAnimationFrame(e.cssModeFrameID)
          );
        e.cssModeFrameID = i.requestAnimationFrame(d);
      };
    d();
  }
  function L(e, t = "") {
    return [...e.children].filter((e) => e.matches(t));
  }
  function A(e, t = []) {
    const s = document.createElement(e);
    return s.classList.add(...(Array.isArray(t) ? t : [t])), s;
  }
  function M(e, t) {
    return S().getComputedStyle(e, null).getPropertyValue(t);
  }
  function P(e) {
    let t,
      s = e;
    if (s) {
      for (t = 0; null !== (s = s.previousSibling); )
        1 === s.nodeType && (t += 1);
      return t;
    }
  }
  function k(e, t) {
    const s = [];
    let i = e.parentElement;
    for (; i; )
      t ? i.matches(t) && s.push(i) : s.push(i), (i = i.parentElement);
    return s;
  }
  function _(e, t, s) {
    const i = S();
    return s
      ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
          parseFloat(
            i
              .getComputedStyle(e, null)
              .getPropertyValue("width" === t ? "margin-right" : "margin-top")
          ) +
          parseFloat(
            i
              .getComputedStyle(e, null)
              .getPropertyValue("width" === t ? "margin-left" : "margin-bottom")
          )
      : e.offsetWidth;
  }
  let O, I, $;
  function z() {
    return (
      O ||
        (O = (function () {
          const e = S(),
            t = g();
          return {
            smoothScroll:
              t.documentElement && "scrollBehavior" in t.documentElement.style,
            touch: !!(
              "ontouchstart" in e ||
              (e.DocumentTouch && t instanceof e.DocumentTouch)
            ),
          };
        })()),
      O
    );
  }
  function B(e = {}) {
    return (
      I ||
        (I = (function ({ userAgent: e } = {}) {
          const t = z(),
            s = S(),
            i = s.navigator.platform,
            a = e || s.navigator.userAgent,
            l = { ios: !1, android: !1 },
            n = s.screen.width,
            r = s.screen.height,
            o = a.match(/(Android);?[\s\/]+([\d.]+)?/);
          let c = a.match(/(iPad).*OS\s([\d_]+)/);
          const d = a.match(/(iPod)(.*OS\s([\d_]+))?/),
            p = !c && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            u = "Win32" === i;
          let h = "MacIntel" === i;
          return (
            !c &&
              h &&
              t.touch &&
              [
                "1024x1366",
                "1366x1024",
                "834x1194",
                "1194x834",
                "834x1112",
                "1112x834",
                "768x1024",
                "1024x768",
                "820x1180",
                "1180x820",
                "810x1080",
                "1080x810",
              ].indexOf(`${n}x${r}`) >= 0 &&
              ((c = a.match(/(Version)\/([\d.]+)/)),
              c || (c = [0, 1, "13_0_0"]),
              (h = !1)),
            o && !u && ((l.os = "android"), (l.android = !0)),
            (c || p || d) && ((l.os = "ios"), (l.ios = !0)),
            l
          );
        })(e)),
      I
    );
  }
  function G() {
    return (
      $ ||
        ($ = (function () {
          const e = S();
          let t = !1;
          function s() {
            const t = e.navigator.userAgent.toLowerCase();
            return (
              t.indexOf("safari") >= 0 &&
              t.indexOf("chrome") < 0 &&
              t.indexOf("android") < 0
            );
          }
          if (s()) {
            const s = String(e.navigator.userAgent);
            if (s.includes("Version/")) {
              const [e, i] = s
                .split("Version/")[1]
                .split(" ")[0]
                .split(".")
                .map((e) => Number(e));
              t = e < 16 || (16 === e && i < 2);
            }
          }
          return {
            isSafari: t || s(),
            needPerspectiveFix: t,
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              e.navigator.userAgent
            ),
          };
        })()),
      $
    );
  }
  const D = {
    on(e, t, s) {
      const i = this;
      if (!i.eventsListeners || i.destroyed) return i;
      if ("function" != typeof t) return i;
      const a = s ? "unshift" : "push";
      return (
        e.split(" ").forEach((e) => {
          i.eventsListeners[e] || (i.eventsListeners[e] = []),
            i.eventsListeners[e][a](t);
        }),
        i
      );
    },
    once(e, t, s) {
      const i = this;
      if (!i.eventsListeners || i.destroyed) return i;
      if ("function" != typeof t) return i;
      function a(...s) {
        i.off(e, a), a.__emitterProxy && delete a.__emitterProxy, t.apply(i, s);
      }
      return (a.__emitterProxy = t), i.on(e, a, s);
    },
    onAny(e, t) {
      const s = this;
      if (!s.eventsListeners || s.destroyed) return s;
      if ("function" != typeof e) return s;
      const i = t ? "unshift" : "push";
      return (
        s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
      );
    },
    offAny(e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed) return t;
      if (!t.eventsAnyListeners) return t;
      const s = t.eventsAnyListeners.indexOf(e);
      return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
    },
    off(e, t) {
      const s = this;
      return !s.eventsListeners || s.destroyed
        ? s
        : s.eventsListeners
        ? (e.split(" ").forEach((e) => {
            void 0 === t
              ? (s.eventsListeners[e] = [])
              : s.eventsListeners[e] &&
                s.eventsListeners[e].forEach((i, a) => {
                  (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                    s.eventsListeners[e].splice(a, 1);
                });
          }),
          s)
        : s;
    },
    emit(...e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed) return t;
      if (!t.eventsListeners) return t;
      let s, i, a;
      "string" == typeof e[0] || Array.isArray(e[0])
        ? ((s = e[0]), (i = e.slice(1, e.length)), (a = t))
        : ((s = e[0].events), (i = e[0].data), (a = e[0].context || t)),
        i.unshift(a);
      return (
        (Array.isArray(s) ? s : s.split(" ")).forEach((e) => {
          t.eventsAnyListeners &&
            t.eventsAnyListeners.length &&
            t.eventsAnyListeners.forEach((t) => {
              t.apply(a, [e, ...i]);
            }),
            t.eventsListeners &&
              t.eventsListeners[e] &&
              t.eventsListeners[e].forEach((e) => {
                e.apply(a, i);
              });
        }),
        t
      );
    },
  };
  const q = (e, t) => {
      if (!e || e.destroyed || !e.params) return;
      const s = t.closest(
        e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
      );
      if (s) {
        const t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
        t && t.remove();
      }
    },
    H = (e, t) => {
      if (!e.slides[t]) return;
      const s = e.slides[t].querySelector('[loading="lazy"]');
      s && s.removeAttribute("loading");
    },
    V = (e) => {
      if (!e || e.destroyed || !e.params) return;
      let t = e.params.lazyPreloadPrevNext;
      const s = e.slides.length;
      if (!s || !t || t < 0) return;
      t = Math.min(t, s);
      const i =
          "auto" === e.params.slidesPerView
            ? e.slidesPerViewDynamic()
            : Math.ceil(e.params.slidesPerView),
        a = e.activeIndex,
        l = a + i - 1;
      if (e.params.rewind)
        for (let i = a - t; i <= l + t; i += 1) {
          const t = ((i % s) + s) % s;
          t !== a && t > l && H(e, t);
        }
      else
        for (let i = Math.max(l - t, 0); i <= Math.min(l + t, s - 1); i += 1)
          i !== a && i > l && H(e, i);
    };
  const F = {
    updateSize: function () {
      const e = this;
      let t, s;
      const i = e.el;
      (t =
        void 0 !== e.params.width && null !== e.params.width
          ? e.params.width
          : i.clientWidth),
        (s =
          void 0 !== e.params.height && null !== e.params.height
            ? e.params.height
            : i.clientHeight),
        (0 === t && e.isHorizontal()) ||
          (0 === s && e.isVertical()) ||
          ((t =
            t -
            parseInt(M(i, "padding-left") || 0, 10) -
            parseInt(M(i, "padding-right") || 0, 10)),
          (s =
            s -
            parseInt(M(i, "padding-top") || 0, 10) -
            parseInt(M(i, "padding-bottom") || 0, 10)),
          Number.isNaN(t) && (t = 0),
          Number.isNaN(s) && (s = 0),
          Object.assign(e, {
            width: t,
            height: s,
            size: e.isHorizontal() ? t : s,
          }));
    },
    updateSlides: function () {
      const e = this;
      function t(t) {
        return e.isHorizontal()
          ? t
          : {
              width: "height",
              "margin-top": "margin-left",
              "margin-bottom ": "margin-right",
              "margin-left": "margin-top",
              "margin-right": "margin-bottom",
              "padding-left": "padding-top",
              "padding-right": "padding-bottom",
              marginRight: "marginBottom",
            }[t];
      }
      function s(e, s) {
        return parseFloat(e.getPropertyValue(t(s)) || 0);
      }
      const i = e.params,
        {
          wrapperEl: a,
          slidesEl: l,
          size: n,
          rtlTranslate: r,
          wrongRTL: o,
        } = e,
        c = e.virtual && i.virtual.enabled,
        d = c ? e.virtual.slides.length : e.slides.length,
        p = L(l, `.${e.params.slideClass}, swiper-slide`),
        u = c ? e.virtual.slides.length : p.length;
      let h = [];
      const m = [],
        f = [];
      let g = i.slidesOffsetBefore;
      "function" == typeof g && (g = i.slidesOffsetBefore.call(e));
      let v = i.slidesOffsetAfter;
      "function" == typeof v && (v = i.slidesOffsetAfter.call(e));
      const S = e.snapGrid.length,
        b = e.slidesGrid.length;
      let w = i.spaceBetween,
        y = -g,
        E = 0,
        C = 0;
      if (void 0 === n) return;
      "string" == typeof w &&
        w.indexOf("%") >= 0 &&
        (w = (parseFloat(w.replace("%", "")) / 100) * n),
        (e.virtualSize = -w),
        p.forEach((e) => {
          r ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
            (e.style.marginBottom = ""),
            (e.style.marginTop = "");
        }),
        i.centeredSlides &&
          i.cssMode &&
          (T(a, "--swiper-centered-offset-before", ""),
          T(a, "--swiper-centered-offset-after", ""));
      const x = i.grid && i.grid.rows > 1 && e.grid;
      let A;
      x && e.grid.initSlides(u);
      const P =
        "auto" === i.slidesPerView &&
        i.breakpoints &&
        Object.keys(i.breakpoints).filter(
          (e) => void 0 !== i.breakpoints[e].slidesPerView
        ).length > 0;
      for (let a = 0; a < u; a += 1) {
        let l;
        if (
          ((A = 0),
          p[a] && (l = p[a]),
          x && e.grid.updateSlide(a, l, u, t),
          !p[a] || "none" !== M(l, "display"))
        ) {
          if ("auto" === i.slidesPerView) {
            P && (p[a].style[t("width")] = "");
            const n = getComputedStyle(l),
              r = l.style.transform,
              o = l.style.webkitTransform;
            if (
              (r && (l.style.transform = "none"),
              o && (l.style.webkitTransform = "none"),
              i.roundLengths)
            )
              A = e.isHorizontal() ? _(l, "width", !0) : _(l, "height", !0);
            else {
              const e = s(n, "width"),
                t = s(n, "padding-left"),
                i = s(n, "padding-right"),
                a = s(n, "margin-left"),
                r = s(n, "margin-right"),
                o = n.getPropertyValue("box-sizing");
              if (o && "border-box" === o) A = e + a + r;
              else {
                const { clientWidth: s, offsetWidth: n } = l;
                A = e + t + i + a + r + (n - s);
              }
            }
            r && (l.style.transform = r),
              o && (l.style.webkitTransform = o),
              i.roundLengths && (A = Math.floor(A));
          } else
            (A = (n - (i.slidesPerView - 1) * w) / i.slidesPerView),
              i.roundLengths && (A = Math.floor(A)),
              p[a] && (p[a].style[t("width")] = `${A}px`);
          p[a] && (p[a].swiperSlideSize = A),
            f.push(A),
            i.centeredSlides
              ? ((y = y + A / 2 + E / 2 + w),
                0 === E && 0 !== a && (y = y - n / 2 - w),
                0 === a && (y = y - n / 2 - w),
                Math.abs(y) < 0.001 && (y = 0),
                i.roundLengths && (y = Math.floor(y)),
                C % i.slidesPerGroup == 0 && h.push(y),
                m.push(y))
              : (i.roundLengths && (y = Math.floor(y)),
                (C - Math.min(e.params.slidesPerGroupSkip, C)) %
                  e.params.slidesPerGroup ==
                  0 && h.push(y),
                m.push(y),
                (y = y + A + w)),
            (e.virtualSize += A + w),
            (E = A),
            (C += 1);
        }
      }
      if (
        ((e.virtualSize = Math.max(e.virtualSize, n) + v),
        r &&
          o &&
          ("slide" === i.effect || "coverflow" === i.effect) &&
          (a.style.width = `${e.virtualSize + i.spaceBetween}px`),
        i.setWrapperSize &&
          (a.style[t("width")] = `${e.virtualSize + i.spaceBetween}px`),
        x && e.grid.updateWrapperSize(A, h, t),
        !i.centeredSlides)
      ) {
        const t = [];
        for (let s = 0; s < h.length; s += 1) {
          let a = h[s];
          i.roundLengths && (a = Math.floor(a)),
            h[s] <= e.virtualSize - n && t.push(a);
        }
        (h = t),
          Math.floor(e.virtualSize - n) - Math.floor(h[h.length - 1]) > 1 &&
            h.push(e.virtualSize - n);
      }
      if (c && i.loop) {
        const t = f[0] + w;
        if (i.slidesPerGroup > 1) {
          const s = Math.ceil(
              (e.virtual.slidesBefore + e.virtual.slidesAfter) /
                i.slidesPerGroup
            ),
            a = t * i.slidesPerGroup;
          for (let e = 0; e < s; e += 1) h.push(h[h.length - 1] + a);
        }
        for (
          let s = 0;
          s < e.virtual.slidesBefore + e.virtual.slidesAfter;
          s += 1
        )
          1 === i.slidesPerGroup && h.push(h[h.length - 1] + t),
            m.push(m[m.length - 1] + t),
            (e.virtualSize += t);
      }
      if ((0 === h.length && (h = [0]), 0 !== i.spaceBetween)) {
        const s = e.isHorizontal() && r ? "marginLeft" : t("marginRight");
        p.filter(
          (e, t) => !(i.cssMode && !i.loop) || t !== p.length - 1
        ).forEach((e) => {
          e.style[s] = `${w}px`;
        });
      }
      if (i.centeredSlides && i.centeredSlidesBounds) {
        let e = 0;
        f.forEach((t) => {
          e += t + (i.spaceBetween ? i.spaceBetween : 0);
        }),
          (e -= i.spaceBetween);
        const t = e - n;
        h = h.map((e) => (e < 0 ? -g : e > t ? t + v : e));
      }
      if (i.centerInsufficientSlides) {
        let e = 0;
        if (
          (f.forEach((t) => {
            e += t + (i.spaceBetween ? i.spaceBetween : 0);
          }),
          (e -= i.spaceBetween),
          e < n)
        ) {
          const t = (n - e) / 2;
          h.forEach((e, s) => {
            h[s] = e - t;
          }),
            m.forEach((e, s) => {
              m[s] = e + t;
            });
        }
      }
      if (
        (Object.assign(e, {
          slides: p,
          snapGrid: h,
          slidesGrid: m,
          slidesSizesGrid: f,
        }),
        i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
      ) {
        T(a, "--swiper-centered-offset-before", -h[0] + "px"),
          T(
            a,
            "--swiper-centered-offset-after",
            e.size / 2 - f[f.length - 1] / 2 + "px"
          );
        const t = -e.snapGrid[0],
          s = -e.slidesGrid[0];
        (e.snapGrid = e.snapGrid.map((e) => e + t)),
          (e.slidesGrid = e.slidesGrid.map((e) => e + s));
      }
      if (
        (u !== d && e.emit("slidesLengthChange"),
        h.length !== S &&
          (e.params.watchOverflow && e.checkOverflow(),
          e.emit("snapGridLengthChange")),
        m.length !== b && e.emit("slidesGridLengthChange"),
        i.watchSlidesProgress && e.updateSlidesOffset(),
        !(c || i.cssMode || ("slide" !== i.effect && "fade" !== i.effect)))
      ) {
        const t = `${i.containerModifierClass}backface-hidden`,
          s = e.el.classList.contains(t);
        u <= i.maxBackfaceHiddenSlides
          ? s || e.el.classList.add(t)
          : s && e.el.classList.remove(t);
      }
    },
    updateAutoHeight: function (e) {
      const t = this,
        s = [],
        i = t.virtual && t.params.virtual.enabled;
      let a,
        l = 0;
      "number" == typeof e
        ? t.setTransition(e)
        : !0 === e && t.setTransition(t.params.speed);
      const n = (e) => (i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e]);
      if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)
          (t.visibleSlides || []).forEach((e) => {
            s.push(e);
          });
        else
          for (a = 0; a < Math.ceil(t.params.slidesPerView); a += 1) {
            const e = t.activeIndex + a;
            if (e > t.slides.length && !i) break;
            s.push(n(e));
          }
      else s.push(n(t.activeIndex));
      for (a = 0; a < s.length; a += 1)
        if (void 0 !== s[a]) {
          const e = s[a].offsetHeight;
          l = e > l ? e : l;
        }
      (l || 0 === l) && (t.wrapperEl.style.height = `${l}px`);
    },
    updateSlidesOffset: function () {
      const e = this,
        t = e.slides,
        s = e.isElement
          ? e.isHorizontal()
            ? e.wrapperEl.offsetLeft
            : e.wrapperEl.offsetTop
          : 0;
      for (let i = 0; i < t.length; i += 1)
        t[i].swiperSlideOffset =
          (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) -
          s -
          e.cssOverflowAdjustment();
    },
    updateSlidesProgress: function (e = (this && this.translate) || 0) {
      const t = this,
        s = t.params,
        { slides: i, rtlTranslate: a, snapGrid: l } = t;
      if (0 === i.length) return;
      void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
      let n = -e;
      a && (n = e),
        i.forEach((e) => {
          e.classList.remove(s.slideVisibleClass);
        }),
        (t.visibleSlidesIndexes = []),
        (t.visibleSlides = []);
      for (let e = 0; e < i.length; e += 1) {
        const r = i[e];
        let o = r.swiperSlideOffset;
        s.cssMode && s.centeredSlides && (o -= i[0].swiperSlideOffset);
        const c =
            (n + (s.centeredSlides ? t.minTranslate() : 0) - o) /
            (r.swiperSlideSize + s.spaceBetween),
          d =
            (n - l[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) /
            (r.swiperSlideSize + s.spaceBetween),
          p = -(n - o),
          u = p + t.slidesSizesGrid[e];
        ((p >= 0 && p < t.size - 1) ||
          (u > 1 && u <= t.size) ||
          (p <= 0 && u >= t.size)) &&
          (t.visibleSlides.push(r),
          t.visibleSlidesIndexes.push(e),
          i[e].classList.add(s.slideVisibleClass)),
          (r.progress = a ? -c : c),
          (r.originalProgress = a ? -d : d);
      }
    },
    updateProgress: function (e) {
      const t = this;
      if (void 0 === e) {
        const s = t.rtlTranslate ? -1 : 1;
        e = (t && t.translate && t.translate * s) || 0;
      }
      const s = t.params,
        i = t.maxTranslate() - t.minTranslate();
      let { progress: a, isBeginning: l, isEnd: n, progressLoop: r } = t;
      const o = l,
        c = n;
      if (0 === i) (a = 0), (l = !0), (n = !0);
      else {
        a = (e - t.minTranslate()) / i;
        const s = Math.abs(e - t.minTranslate()) < 1,
          r = Math.abs(e - t.maxTranslate()) < 1;
        (l = s || a <= 0), (n = r || a >= 1), s && (a = 0), r && (a = 1);
      }
      if (s.loop) {
        const s = t.getSlideIndexByData(0),
          i = t.getSlideIndexByData(t.slides.length - 1),
          a = t.slidesGrid[s],
          l = t.slidesGrid[i],
          n = t.slidesGrid[t.slidesGrid.length - 1],
          o = Math.abs(e);
        (r = o >= a ? (o - a) / n : (o + n - l) / n), r > 1 && (r -= 1);
      }
      Object.assign(t, {
        progress: a,
        progressLoop: r,
        isBeginning: l,
        isEnd: n,
      }),
        (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
          t.updateSlidesProgress(e),
        l && !o && t.emit("reachBeginning toEdge"),
        n && !c && t.emit("reachEnd toEdge"),
        ((o && !l) || (c && !n)) && t.emit("fromEdge"),
        t.emit("progress", a);
    },
    updateSlidesClasses: function () {
      const e = this,
        { slides: t, params: s, slidesEl: i, activeIndex: a } = e,
        l = e.virtual && s.virtual.enabled,
        n = (e) => L(i, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
      let r;
      if (
        (t.forEach((e) => {
          e.classList.remove(
            s.slideActiveClass,
            s.slideNextClass,
            s.slidePrevClass
          );
        }),
        l)
      )
        if (s.loop) {
          let t = a - e.virtual.slidesBefore;
          t < 0 && (t = e.virtual.slides.length + t),
            t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
            (r = n(`[data-swiper-slide-index="${t}"]`));
        } else r = n(`[data-swiper-slide-index="${a}"]`);
      else r = t[a];
      if (r) {
        r.classList.add(s.slideActiveClass);
        let e = (function (e, t) {
          const s = [];
          for (; e.nextElementSibling; ) {
            const i = e.nextElementSibling;
            t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
          }
          return s;
        })(r, `.${s.slideClass}, swiper-slide`)[0];
        s.loop && !e && (e = t[0]), e && e.classList.add(s.slideNextClass);
        let i = (function (e, t) {
          const s = [];
          for (; e.previousElementSibling; ) {
            const i = e.previousElementSibling;
            t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
          }
          return s;
        })(r, `.${s.slideClass}, swiper-slide`)[0];
        s.loop && 0 === !i && (i = t[t.length - 1]),
          i && i.classList.add(s.slidePrevClass);
      }
      e.emitSlidesClasses();
    },
    updateActiveIndex: function (e) {
      const t = this,
        s = t.rtlTranslate ? t.translate : -t.translate,
        {
          snapGrid: i,
          params: a,
          activeIndex: l,
          realIndex: n,
          snapIndex: r,
        } = t;
      let o,
        c = e;
      const d = (e) => {
        let s = e - t.virtual.slidesBefore;
        return (
          s < 0 && (s = t.virtual.slides.length + s),
          s >= t.virtual.slides.length && (s -= t.virtual.slides.length),
          s
        );
      };
      if (
        (void 0 === c &&
          (c = (function (e) {
            const { slidesGrid: t, params: s } = e,
              i = e.rtlTranslate ? e.translate : -e.translate;
            let a;
            for (let e = 0; e < t.length; e += 1)
              void 0 !== t[e + 1]
                ? i >= t[e] && i < t[e + 1] - (t[e + 1] - t[e]) / 2
                  ? (a = e)
                  : i >= t[e] && i < t[e + 1] && (a = e + 1)
                : i >= t[e] && (a = e);
            return (
              s.normalizeSlideIndex && (a < 0 || void 0 === a) && (a = 0), a
            );
          })(t)),
        i.indexOf(s) >= 0)
      )
        o = i.indexOf(s);
      else {
        const e = Math.min(a.slidesPerGroupSkip, c);
        o = e + Math.floor((c - e) / a.slidesPerGroup);
      }
      if ((o >= i.length && (o = i.length - 1), c === l))
        return (
          o !== r && ((t.snapIndex = o), t.emit("snapIndexChange")),
          void (
            t.params.loop &&
            t.virtual &&
            t.params.virtual.enabled &&
            (t.realIndex = d(c))
          )
        );
      let p;
      (p =
        t.virtual && a.virtual.enabled && a.loop
          ? d(c)
          : t.slides[c]
          ? parseInt(
              t.slides[c].getAttribute("data-swiper-slide-index") || c,
              10
            )
          : c),
        Object.assign(t, {
          previousSnapIndex: r,
          snapIndex: o,
          previousRealIndex: n,
          realIndex: p,
          previousIndex: l,
          activeIndex: c,
        }),
        t.initialized && V(t),
        t.emit("activeIndexChange"),
        t.emit("snapIndexChange"),
        n !== p && t.emit("realIndexChange"),
        (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
    },
    updateClickedSlide: function (e) {
      const t = this,
        s = t.params,
        i = e.closest(`.${s.slideClass}, swiper-slide`);
      let a,
        l = !1;
      if (i)
        for (let e = 0; e < t.slides.length; e += 1)
          if (t.slides[e] === i) {
            (l = !0), (a = e);
            break;
          }
      if (!i || !l)
        return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
      (t.clickedSlide = i),
        t.virtual && t.params.virtual.enabled
          ? (t.clickedIndex = parseInt(
              i.getAttribute("data-swiper-slide-index"),
              10
            ))
          : (t.clickedIndex = a),
        s.slideToClickedSlide &&
          void 0 !== t.clickedIndex &&
          t.clickedIndex !== t.activeIndex &&
          t.slideToClickedSlide();
    },
  };
  const j = {
    getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
      const { params: t, rtlTranslate: s, translate: i, wrapperEl: a } = this;
      if (t.virtualTranslate) return s ? -i : i;
      if (t.cssMode) return i;
      let l = y(a, e);
      return (l += this.cssOverflowAdjustment()), s && (l = -l), l || 0;
    },
    setTranslate: function (e, t) {
      const s = this,
        { rtlTranslate: i, params: a, wrapperEl: l, progress: n } = s;
      let r,
        o = 0,
        c = 0;
      s.isHorizontal() ? (o = i ? -e : e) : (c = e),
        a.roundLengths && ((o = Math.floor(o)), (c = Math.floor(c))),
        (s.previousTranslate = s.translate),
        (s.translate = s.isHorizontal() ? o : c),
        a.cssMode
          ? (l[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal()
              ? -o
              : -c)
          : a.virtualTranslate ||
            (s.isHorizontal()
              ? (o -= s.cssOverflowAdjustment())
              : (c -= s.cssOverflowAdjustment()),
            (l.style.transform = `translate3d(${o}px, ${c}px, 0px)`));
      const d = s.maxTranslate() - s.minTranslate();
      (r = 0 === d ? 0 : (e - s.minTranslate()) / d),
        r !== n && s.updateProgress(e),
        s.emit("setTranslate", s.translate, t);
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function (e = 0, t = this.params.speed, s = !0, i = !0, a) {
      const l = this,
        { params: n, wrapperEl: r } = l;
      if (l.animating && n.preventInteractionOnTransition) return !1;
      const o = l.minTranslate(),
        c = l.maxTranslate();
      let d;
      if (
        ((d = i && e > o ? o : i && e < c ? c : e),
        l.updateProgress(d),
        n.cssMode)
      ) {
        const e = l.isHorizontal();
        if (0 === t) r[e ? "scrollLeft" : "scrollTop"] = -d;
        else {
          if (!l.support.smoothScroll)
            return (
              x({ swiper: l, targetPosition: -d, side: e ? "left" : "top" }), !0
            );
          r.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
        }
        return !0;
      }
      return (
        0 === t
          ? (l.setTransition(0),
            l.setTranslate(d),
            s &&
              (l.emit("beforeTransitionStart", t, a), l.emit("transitionEnd")))
          : (l.setTransition(t),
            l.setTranslate(d),
            s &&
              (l.emit("beforeTransitionStart", t, a),
              l.emit("transitionStart")),
            l.animating ||
              ((l.animating = !0),
              l.onTranslateToWrapperTransitionEnd ||
                (l.onTranslateToWrapperTransitionEnd = function (e) {
                  l &&
                    !l.destroyed &&
                    e.target === this &&
                    (l.wrapperEl.removeEventListener(
                      "transitionend",
                      l.onTranslateToWrapperTransitionEnd
                    ),
                    (l.onTranslateToWrapperTransitionEnd = null),
                    delete l.onTranslateToWrapperTransitionEnd,
                    s && l.emit("transitionEnd"));
                }),
              l.wrapperEl.addEventListener(
                "transitionend",
                l.onTranslateToWrapperTransitionEnd
              ))),
        !0
      );
    },
  };
  function N({ swiper: e, runCallbacks: t, direction: s, step: i }) {
    const { activeIndex: a, previousIndex: l } = e;
    let n = s;
    if (
      (n || (n = a > l ? "next" : a < l ? "prev" : "reset"),
      e.emit(`transition${i}`),
      t && a !== l)
    ) {
      if ("reset" === n) return void e.emit(`slideResetTransition${i}`);
      e.emit(`slideChangeTransition${i}`),
        "next" === n
          ? e.emit(`slideNextTransition${i}`)
          : e.emit(`slidePrevTransition${i}`);
    }
  }
  const R = {
    slideTo: function (e = 0, t = this.params.speed, s = !0, i, a) {
      "string" == typeof e && (e = parseInt(e, 10));
      const l = this;
      let n = e;
      n < 0 && (n = 0);
      const {
        params: r,
        snapGrid: o,
        slidesGrid: c,
        previousIndex: d,
        activeIndex: p,
        rtlTranslate: u,
        wrapperEl: h,
        enabled: m,
      } = l;
      if ((l.animating && r.preventInteractionOnTransition) || (!m && !i && !a))
        return !1;
      const f = Math.min(l.params.slidesPerGroupSkip, n);
      let g = f + Math.floor((n - f) / l.params.slidesPerGroup);
      g >= o.length && (g = o.length - 1);
      const v = -o[g];
      if (r.normalizeSlideIndex)
        for (let e = 0; e < c.length; e += 1) {
          const t = -Math.floor(100 * v),
            s = Math.floor(100 * c[e]),
            i = Math.floor(100 * c[e + 1]);
          void 0 !== c[e + 1]
            ? t >= s && t < i - (i - s) / 2
              ? (n = e)
              : t >= s && t < i && (n = e + 1)
            : t >= s && (n = e);
        }
      if (l.initialized && n !== p) {
        if (!l.allowSlideNext && v < l.translate && v < l.minTranslate())
          return !1;
        if (
          !l.allowSlidePrev &&
          v > l.translate &&
          v > l.maxTranslate() &&
          (p || 0) !== n
        )
          return !1;
      }
      let S;
      if (
        (n !== (d || 0) && s && l.emit("beforeSlideChangeStart"),
        l.updateProgress(v),
        (S = n > p ? "next" : n < p ? "prev" : "reset"),
        (u && -v === l.translate) || (!u && v === l.translate))
      )
        return (
          l.updateActiveIndex(n),
          r.autoHeight && l.updateAutoHeight(),
          l.updateSlidesClasses(),
          "slide" !== r.effect && l.setTranslate(v),
          "reset" !== S && (l.transitionStart(s, S), l.transitionEnd(s, S)),
          !1
        );
      if (r.cssMode) {
        const e = l.isHorizontal(),
          s = u ? v : -v;
        if (0 === t) {
          const t = l.virtual && l.params.virtual.enabled;
          t &&
            ((l.wrapperEl.style.scrollSnapType = "none"),
            (l._immediateVirtual = !0)),
            t && !l._cssModeVirtualInitialSet && l.params.initialSlide > 0
              ? ((l._cssModeVirtualInitialSet = !0),
                requestAnimationFrame(() => {
                  h[e ? "scrollLeft" : "scrollTop"] = s;
                }))
              : (h[e ? "scrollLeft" : "scrollTop"] = s),
            t &&
              requestAnimationFrame(() => {
                (l.wrapperEl.style.scrollSnapType = ""),
                  (l._immediateVirtual = !1);
              });
        } else {
          if (!l.support.smoothScroll)
            return (
              x({ swiper: l, targetPosition: s, side: e ? "left" : "top" }), !0
            );
          h.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
        }
        return !0;
      }
      return (
        l.setTransition(t),
        l.setTranslate(v),
        l.updateActiveIndex(n),
        l.updateSlidesClasses(),
        l.emit("beforeTransitionStart", t, i),
        l.transitionStart(s, S),
        0 === t
          ? l.transitionEnd(s, S)
          : l.animating ||
            ((l.animating = !0),
            l.onSlideToWrapperTransitionEnd ||
              (l.onSlideToWrapperTransitionEnd = function (e) {
                l &&
                  !l.destroyed &&
                  e.target === this &&
                  (l.wrapperEl.removeEventListener(
                    "transitionend",
                    l.onSlideToWrapperTransitionEnd
                  ),
                  (l.onSlideToWrapperTransitionEnd = null),
                  delete l.onSlideToWrapperTransitionEnd,
                  l.transitionEnd(s, S));
              }),
            l.wrapperEl.addEventListener(
              "transitionend",
              l.onSlideToWrapperTransitionEnd
            )),
        !0
      );
    },
    slideToLoop: function (e = 0, t = this.params.speed, s = !0, i) {
      if ("string" == typeof e) {
        e = parseInt(e, 10);
      }
      const a = this;
      let l = e;
      return (
        a.params.loop &&
          (a.virtual && a.params.virtual.enabled
            ? (l += a.virtual.slidesBefore)
            : (l = a.getSlideIndexByData(l))),
        a.slideTo(l, t, s, i)
      );
    },
    slideNext: function (e = this.params.speed, t = !0, s) {
      const i = this,
        { enabled: a, params: l, animating: n } = i;
      if (!a) return i;
      let r = l.slidesPerGroup;
      "auto" === l.slidesPerView &&
        1 === l.slidesPerGroup &&
        l.slidesPerGroupAuto &&
        (r = Math.max(i.slidesPerViewDynamic("current", !0), 1));
      const o = i.activeIndex < l.slidesPerGroupSkip ? 1 : r,
        c = i.virtual && l.virtual.enabled;
      if (l.loop) {
        if (n && !c && l.loopPreventsSliding) return !1;
        i.loopFix({ direction: "next" }),
          (i._clientLeft = i.wrapperEl.clientLeft);
      }
      return l.rewind && i.isEnd
        ? i.slideTo(0, e, t, s)
        : i.slideTo(i.activeIndex + o, e, t, s);
    },
    slidePrev: function (e = this.params.speed, t = !0, s) {
      const i = this,
        {
          params: a,
          snapGrid: l,
          slidesGrid: n,
          rtlTranslate: r,
          enabled: o,
          animating: c,
        } = i;
      if (!o) return i;
      const d = i.virtual && a.virtual.enabled;
      if (a.loop) {
        if (c && !d && a.loopPreventsSliding) return !1;
        i.loopFix({ direction: "prev" }),
          (i._clientLeft = i.wrapperEl.clientLeft);
      }
      function p(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      const u = p(r ? i.translate : -i.translate),
        h = l.map((e) => p(e));
      let m = l[h.indexOf(u) - 1];
      if (void 0 === m && a.cssMode) {
        let e;
        l.forEach((t, s) => {
          u >= t && (e = s);
        }),
          void 0 !== e && (m = l[e > 0 ? e - 1 : e]);
      }
      let f = 0;
      if (
        (void 0 !== m &&
          ((f = n.indexOf(m)),
          f < 0 && (f = i.activeIndex - 1),
          "auto" === a.slidesPerView &&
            1 === a.slidesPerGroup &&
            a.slidesPerGroupAuto &&
            ((f = f - i.slidesPerViewDynamic("previous", !0) + 1),
            (f = Math.max(f, 0)))),
        a.rewind && i.isBeginning)
      ) {
        const a =
          i.params.virtual && i.params.virtual.enabled && i.virtual
            ? i.virtual.slides.length - 1
            : i.slides.length - 1;
        return i.slideTo(a, e, t, s);
      }
      return i.slideTo(f, e, t, s);
    },
    slideReset: function (e = this.params.speed, t = !0, s) {
      return this.slideTo(this.activeIndex, e, t, s);
    },
    slideToClosest: function (e = this.params.speed, t = !0, s, i = 0.5) {
      const a = this;
      let l = a.activeIndex;
      const n = Math.min(a.params.slidesPerGroupSkip, l),
        r = n + Math.floor((l - n) / a.params.slidesPerGroup),
        o = a.rtlTranslate ? a.translate : -a.translate;
      if (o >= a.snapGrid[r]) {
        const e = a.snapGrid[r];
        o - e > (a.snapGrid[r + 1] - e) * i && (l += a.params.slidesPerGroup);
      } else {
        const e = a.snapGrid[r - 1];
        o - e <= (a.snapGrid[r] - e) * i && (l -= a.params.slidesPerGroup);
      }
      return (
        (l = Math.max(l, 0)),
        (l = Math.min(l, a.slidesGrid.length - 1)),
        a.slideTo(l, e, t, s)
      );
    },
    slideToClickedSlide: function () {
      const e = this,
        { params: t, slidesEl: s } = e,
        i =
          "auto" === t.slidesPerView
            ? e.slidesPerViewDynamic()
            : t.slidesPerView;
      let a,
        l = e.clickedIndex;
      const n = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
      if (t.loop) {
        if (e.animating) return;
        (a = parseInt(
          e.clickedSlide.getAttribute("data-swiper-slide-index"),
          10
        )),
          t.centeredSlides
            ? l < e.loopedSlides - i / 2 ||
              l > e.slides.length - e.loopedSlides + i / 2
              ? (e.loopFix(),
                (l = e.getSlideIndex(
                  L(s, `${n}[data-swiper-slide-index="${a}"]`)[0]
                )),
                b(() => {
                  e.slideTo(l);
                }))
              : e.slideTo(l)
            : l > e.slides.length - i
            ? (e.loopFix(),
              (l = e.getSlideIndex(
                L(s, `${n}[data-swiper-slide-index="${a}"]`)[0]
              )),
              b(() => {
                e.slideTo(l);
              }))
            : e.slideTo(l);
      } else e.slideTo(l);
    },
  };
  const W = {
    loopCreate: function (e) {
      const t = this,
        { params: s, slidesEl: i } = t;
      if (!s.loop || (t.virtual && t.params.virtual.enabled)) return;
      L(i, `.${s.slideClass}, swiper-slide`).forEach((e, t) => {
        e.setAttribute("data-swiper-slide-index", t);
      }),
        t.loopFix({
          slideRealIndex: e,
          direction: s.centeredSlides ? void 0 : "next",
        });
    },
    loopFix: function ({
      slideRealIndex: e,
      slideTo: t = !0,
      direction: s,
      setTranslate: i,
      activeSlideIndex: a,
      byController: l,
      byMousewheel: n,
    } = {}) {
      const r = this;
      if (!r.params.loop) return;
      r.emit("beforeLoopFix");
      const {
        slides: o,
        allowSlidePrev: c,
        allowSlideNext: d,
        slidesEl: p,
        params: u,
      } = r;
      if (
        ((r.allowSlidePrev = !0),
        (r.allowSlideNext = !0),
        r.virtual && u.virtual.enabled)
      )
        return (
          t &&
            (u.centeredSlides || 0 !== r.snapIndex
              ? u.centeredSlides && r.snapIndex < u.slidesPerView
                ? r.slideTo(r.virtual.slides.length + r.snapIndex, 0, !1, !0)
                : r.snapIndex === r.snapGrid.length - 1 &&
                  r.slideTo(r.virtual.slidesBefore, 0, !1, !0)
              : r.slideTo(r.virtual.slides.length, 0, !1, !0)),
          (r.allowSlidePrev = c),
          (r.allowSlideNext = d),
          void r.emit("loopFix")
        );
      const h =
        "auto" === u.slidesPerView
          ? r.slidesPerViewDynamic()
          : Math.ceil(parseFloat(u.slidesPerView, 10));
      let m = u.loopedSlides || h;
      m % u.slidesPerGroup != 0 &&
        (m += u.slidesPerGroup - (m % u.slidesPerGroup)),
        (r.loopedSlides = m);
      const f = [],
        g = [];
      let v = r.activeIndex;
      void 0 === a
        ? (a = r.getSlideIndex(
            r.slides.filter((e) => e.classList.contains(u.slideActiveClass))[0]
          ))
        : (v = a);
      const S = "next" === s || !s,
        b = "prev" === s || !s;
      let w = 0,
        y = 0;
      if (a < m) {
        w = Math.max(m - a, u.slidesPerGroup);
        for (let e = 0; e < m - a; e += 1) {
          const t = e - Math.floor(e / o.length) * o.length;
          f.push(o.length - t - 1);
        }
      } else if (a > r.slides.length - 2 * m) {
        y = Math.max(a - (r.slides.length - 2 * m), u.slidesPerGroup);
        for (let e = 0; e < y; e += 1) {
          const t = e - Math.floor(e / o.length) * o.length;
          g.push(t);
        }
      }
      if (
        (b &&
          f.forEach((e) => {
            p.prepend(r.slides[e]);
          }),
        S &&
          g.forEach((e) => {
            p.append(r.slides[e]);
          }),
        r.recalcSlides(),
        "auto" === u.slidesPerView && r.updateSlides(),
        u.watchSlidesProgress && r.updateSlidesOffset(),
        t)
      )
        if (f.length > 0 && b)
          if (void 0 === e) {
            const e = r.slidesGrid[v],
              t = r.slidesGrid[v + w] - e;
            n
              ? r.setTranslate(r.translate - t)
              : (r.slideTo(v + w, 0, !1, !0),
                i && (r.touches[r.isHorizontal() ? "startX" : "startY"] += t));
          } else i && r.slideToLoop(e, 0, !1, !0);
        else if (g.length > 0 && S)
          if (void 0 === e) {
            const e = r.slidesGrid[v],
              t = r.slidesGrid[v - y] - e;
            n
              ? r.setTranslate(r.translate - t)
              : (r.slideTo(v - y, 0, !1, !0),
                i && (r.touches[r.isHorizontal() ? "startX" : "startY"] += t));
          } else r.slideToLoop(e, 0, !1, !0);
      if (
        ((r.allowSlidePrev = c),
        (r.allowSlideNext = d),
        r.controller && r.controller.control && !l)
      ) {
        const t = {
          slideRealIndex: e,
          slideTo: !1,
          direction: s,
          setTranslate: i,
          activeSlideIndex: a,
          byController: !0,
        };
        Array.isArray(r.controller.control)
          ? r.controller.control.forEach((e) => {
              !e.destroyed && e.params.loop && e.loopFix(t);
            })
          : r.controller.control instanceof r.constructor &&
            r.controller.control.params.loop &&
            r.controller.control.loopFix(t);
      }
      r.emit("loopFix");
    },
    loopDestroy: function () {
      const e = this,
        { params: t, slidesEl: s } = e;
      if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
      e.recalcSlides();
      const i = [];
      e.slides.forEach((e) => {
        const t =
          void 0 === e.swiperSlideIndex
            ? 1 * e.getAttribute("data-swiper-slide-index")
            : e.swiperSlideIndex;
        i[t] = e;
      }),
        e.slides.forEach((e) => {
          e.removeAttribute("data-swiper-slide-index");
        }),
        i.forEach((e) => {
          s.append(e);
        }),
        e.recalcSlides(),
        e.slideTo(e.realIndex, 0);
    },
  };
  function Y(e) {
    const t = this,
      s = g(),
      i = S(),
      a = t.touchEventsData;
    a.evCache.push(e);
    const { params: l, touches: n, enabled: r } = t;
    if (!r) return;
    if (!l.simulateTouch && "mouse" === e.pointerType) return;
    if (t.animating && l.preventInteractionOnTransition) return;
    !t.animating && l.cssMode && l.loop && t.loopFix();
    let o = e;
    o.originalEvent && (o = o.originalEvent);
    let c = o.target;
    if ("wrapper" === l.touchEventsTarget && !t.wrapperEl.contains(c)) return;
    if ("which" in o && 3 === o.which) return;
    if ("button" in o && o.button > 0) return;
    if (a.isTouched && a.isMoved) return;
    const d = !!l.noSwipingClass && "" !== l.noSwipingClass,
      p = e.composedPath ? e.composedPath() : e.path;
    d && o.target && o.target.shadowRoot && p && (c = p[0]);
    const u = l.noSwipingSelector
        ? l.noSwipingSelector
        : `.${l.noSwipingClass}`,
      h = !(!o.target || !o.target.shadowRoot);
    if (
      l.noSwiping &&
      (h
        ? (function (e, t = this) {
            return (function t(s) {
              if (!s || s === g() || s === S()) return null;
              s.assignedSlot && (s = s.assignedSlot);
              const i = s.closest(e);
              return i || s.getRootNode ? i || t(s.getRootNode().host) : null;
            })(t);
          })(u, c)
        : c.closest(u))
    )
      return void (t.allowClick = !0);
    if (l.swipeHandler && !c.closest(l.swipeHandler)) return;
    (n.currentX = o.pageX), (n.currentY = o.pageY);
    const m = n.currentX,
      f = n.currentY,
      v = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
      b = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
    if (v && (m <= b || m >= i.innerWidth - b)) {
      if ("prevent" !== v) return;
      e.preventDefault();
    }
    Object.assign(a, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
      (n.startX = m),
      (n.startY = f),
      (a.touchStartTime = w()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      l.threshold > 0 && (a.allowThresholdMove = !1);
    let y = !0;
    c.matches(a.focusableElements) &&
      ((y = !1), "SELECT" === c.nodeName && (a.isTouched = !1)),
      s.activeElement &&
        s.activeElement.matches(a.focusableElements) &&
        s.activeElement !== c &&
        s.activeElement.blur();
    const E = y && t.allowTouchMove && l.touchStartPreventDefault;
    (!l.touchStartForcePreventDefault && !E) ||
      c.isContentEditable ||
      o.preventDefault(),
      t.params.freeMode &&
        t.params.freeMode.enabled &&
        t.freeMode &&
        t.animating &&
        !l.cssMode &&
        t.freeMode.onTouchStart(),
      t.emit("touchStart", o);
  }
  function X(e) {
    const t = g(),
      s = this,
      i = s.touchEventsData,
      { params: a, touches: l, rtlTranslate: n, enabled: r } = s;
    if (!r) return;
    if (!a.simulateTouch && "mouse" === e.pointerType) return;
    let o = e;
    if ((o.originalEvent && (o = o.originalEvent), !i.isTouched))
      return void (
        i.startMoving &&
        i.isScrolling &&
        s.emit("touchMoveOpposite", o)
      );
    const c = i.evCache.findIndex((e) => e.pointerId === o.pointerId);
    c >= 0 && (i.evCache[c] = o);
    const d = i.evCache.length > 1 ? i.evCache[0] : o,
      p = d.pageX,
      u = d.pageY;
    if (o.preventedByNestedSwiper) return (l.startX = p), void (l.startY = u);
    if (!s.allowTouchMove)
      return (
        o.target.matches(i.focusableElements) || (s.allowClick = !1),
        void (
          i.isTouched &&
          (Object.assign(l, {
            startX: p,
            startY: u,
            prevX: s.touches.currentX,
            prevY: s.touches.currentY,
            currentX: p,
            currentY: u,
          }),
          (i.touchStartTime = w()))
        )
      );
    if (a.touchReleaseOnEdges && !a.loop)
      if (s.isVertical()) {
        if (
          (u < l.startY && s.translate <= s.maxTranslate()) ||
          (u > l.startY && s.translate >= s.minTranslate())
        )
          return (i.isTouched = !1), void (i.isMoved = !1);
      } else if (
        (p < l.startX && s.translate <= s.maxTranslate()) ||
        (p > l.startX && s.translate >= s.minTranslate())
      )
        return;
    if (
      t.activeElement &&
      o.target === t.activeElement &&
      o.target.matches(i.focusableElements)
    )
      return (i.isMoved = !0), void (s.allowClick = !1);
    if (
      (i.allowTouchCallbacks && s.emit("touchMove", o),
      o.targetTouches && o.targetTouches.length > 1)
    )
      return;
    (l.currentX = p), (l.currentY = u);
    const h = l.currentX - l.startX,
      m = l.currentY - l.startY;
    if (s.params.threshold && Math.sqrt(h ** 2 + m ** 2) < s.params.threshold)
      return;
    if (void 0 === i.isScrolling) {
      let e;
      (s.isHorizontal() && l.currentY === l.startY) ||
      (s.isVertical() && l.currentX === l.startX)
        ? (i.isScrolling = !1)
        : h * h + m * m >= 25 &&
          ((e = (180 * Math.atan2(Math.abs(m), Math.abs(h))) / Math.PI),
          (i.isScrolling = s.isHorizontal()
            ? e > a.touchAngle
            : 90 - e > a.touchAngle));
    }
    if (
      (i.isScrolling && s.emit("touchMoveOpposite", o),
      void 0 === i.startMoving &&
        ((l.currentX === l.startX && l.currentY === l.startY) ||
          (i.startMoving = !0)),
      i.isScrolling ||
        (s.zoom &&
          s.params.zoom &&
          s.params.zoom.enabled &&
          i.evCache.length > 1))
    )
      return void (i.isTouched = !1);
    if (!i.startMoving) return;
    (s.allowClick = !1),
      !a.cssMode && o.cancelable && o.preventDefault(),
      a.touchMoveStopPropagation && !a.nested && o.stopPropagation();
    let f = s.isHorizontal() ? h : m,
      v = s.isHorizontal()
        ? l.currentX - l.previousX
        : l.currentY - l.previousY;
    a.oneWayMovement &&
      ((f = Math.abs(f) * (n ? 1 : -1)), (v = Math.abs(v) * (n ? 1 : -1))),
      (l.diff = f),
      (f *= a.touchRatio),
      n && ((f = -f), (v = -v));
    const S = s.touchesDirection;
    (s.swipeDirection = f > 0 ? "prev" : "next"),
      (s.touchesDirection = v > 0 ? "prev" : "next");
    const b = s.params.loop && !a.cssMode;
    if (!i.isMoved) {
      if (
        (b && s.loopFix({ direction: s.swipeDirection }),
        (i.startTranslate = s.getTranslate()),
        s.setTransition(0),
        s.animating)
      ) {
        const e = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0,
        });
        s.wrapperEl.dispatchEvent(e);
      }
      (i.allowMomentumBounce = !1),
        !a.grabCursor ||
          (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
          s.setGrabCursor(!0),
        s.emit("sliderFirstMove", o);
    }
    let y;
    i.isMoved &&
      S !== s.touchesDirection &&
      b &&
      Math.abs(f) >= 1 &&
      (s.loopFix({ direction: s.swipeDirection, setTranslate: !0 }), (y = !0)),
      s.emit("sliderMove", o),
      (i.isMoved = !0),
      (i.currentTranslate = f + i.startTranslate);
    let E = !0,
      C = a.resistanceRatio;
    if (
      (a.touchReleaseOnEdges && (C = 0),
      f > 0
        ? (b &&
            !y &&
            i.currentTranslate >
              (a.centeredSlides
                ? s.minTranslate() - s.size / 2
                : s.minTranslate()) &&
            s.loopFix({
              direction: "prev",
              setTranslate: !0,
              activeSlideIndex: 0,
            }),
          i.currentTranslate > s.minTranslate() &&
            ((E = !1),
            a.resistance &&
              (i.currentTranslate =
                s.minTranslate() -
                1 +
                (-s.minTranslate() + i.startTranslate + f) ** C)))
        : f < 0 &&
          (b &&
            !y &&
            i.currentTranslate <
              (a.centeredSlides
                ? s.maxTranslate() + s.size / 2
                : s.maxTranslate()) &&
            s.loopFix({
              direction: "next",
              setTranslate: !0,
              activeSlideIndex:
                s.slides.length -
                ("auto" === a.slidesPerView
                  ? s.slidesPerViewDynamic()
                  : Math.ceil(parseFloat(a.slidesPerView, 10))),
            }),
          i.currentTranslate < s.maxTranslate() &&
            ((E = !1),
            a.resistance &&
              (i.currentTranslate =
                s.maxTranslate() +
                1 -
                (s.maxTranslate() - i.startTranslate - f) ** C))),
      E && (o.preventedByNestedSwiper = !0),
      !s.allowSlideNext &&
        "next" === s.swipeDirection &&
        i.currentTranslate < i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      !s.allowSlidePrev &&
        "prev" === s.swipeDirection &&
        i.currentTranslate > i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      s.allowSlidePrev ||
        s.allowSlideNext ||
        (i.currentTranslate = i.startTranslate),
      a.threshold > 0)
    ) {
      if (!(Math.abs(f) > a.threshold || i.allowThresholdMove))
        return void (i.currentTranslate = i.startTranslate);
      if (!i.allowThresholdMove)
        return (
          (i.allowThresholdMove = !0),
          (l.startX = l.currentX),
          (l.startY = l.currentY),
          (i.currentTranslate = i.startTranslate),
          void (l.diff = s.isHorizontal()
            ? l.currentX - l.startX
            : l.currentY - l.startY)
        );
    }
    a.followFinger &&
      !a.cssMode &&
      (((a.freeMode && a.freeMode.enabled && s.freeMode) ||
        a.watchSlidesProgress) &&
        (s.updateActiveIndex(), s.updateSlidesClasses()),
      s.params.freeMode &&
        a.freeMode.enabled &&
        s.freeMode &&
        s.freeMode.onTouchMove(),
      s.updateProgress(i.currentTranslate),
      s.setTranslate(i.currentTranslate));
  }
  function U(e) {
    const t = this,
      s = t.touchEventsData,
      i = s.evCache.findIndex((t) => t.pointerId === e.pointerId);
    if (
      (i >= 0 && s.evCache.splice(i, 1),
      ["pointercancel", "pointerout", "pointerleave"].includes(e.type))
    ) {
      if (
        !(
          "pointercancel" === e.type &&
          (t.browser.isSafari || t.browser.isWebView)
        )
      )
        return;
    }
    const {
      params: a,
      touches: l,
      rtlTranslate: n,
      slidesGrid: r,
      enabled: o,
    } = t;
    if (!o) return;
    if (!a.simulateTouch && "mouse" === e.pointerType) return;
    let c = e;
    if (
      (c.originalEvent && (c = c.originalEvent),
      s.allowTouchCallbacks && t.emit("touchEnd", c),
      (s.allowTouchCallbacks = !1),
      !s.isTouched)
    )
      return (
        s.isMoved && a.grabCursor && t.setGrabCursor(!1),
        (s.isMoved = !1),
        void (s.startMoving = !1)
      );
    a.grabCursor &&
      s.isMoved &&
      s.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1);
    const d = w(),
      p = d - s.touchStartTime;
    if (t.allowClick) {
      const e = c.path || (c.composedPath && c.composedPath());
      t.updateClickedSlide((e && e[0]) || c.target),
        t.emit("tap click", c),
        p < 300 &&
          d - s.lastClickTime < 300 &&
          t.emit("doubleTap doubleClick", c);
    }
    if (
      ((s.lastClickTime = w()),
      b(() => {
        t.destroyed || (t.allowClick = !0);
      }),
      !s.isTouched ||
        !s.isMoved ||
        !t.swipeDirection ||
        0 === l.diff ||
        s.currentTranslate === s.startTranslate)
    )
      return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
    let u;
    if (
      ((s.isTouched = !1),
      (s.isMoved = !1),
      (s.startMoving = !1),
      (u = a.followFinger
        ? n
          ? t.translate
          : -t.translate
        : -s.currentTranslate),
      a.cssMode)
    )
      return;
    if (t.params.freeMode && a.freeMode.enabled)
      return void t.freeMode.onTouchEnd({ currentPos: u });
    let h = 0,
      m = t.slidesSizesGrid[0];
    for (
      let e = 0;
      e < r.length;
      e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
    ) {
      const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
      void 0 !== r[e + t]
        ? u >= r[e] && u < r[e + t] && ((h = e), (m = r[e + t] - r[e]))
        : u >= r[e] && ((h = e), (m = r[r.length - 1] - r[r.length - 2]));
    }
    let f = null,
      g = null;
    a.rewind &&
      (t.isBeginning
        ? (g =
            t.params.virtual && t.params.virtual.enabled && t.virtual
              ? t.virtual.slides.length - 1
              : t.slides.length - 1)
        : t.isEnd && (f = 0));
    const v = (u - r[h]) / m,
      S = h < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
    if (p > a.longSwipesMs) {
      if (!a.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection &&
        (v >= a.longSwipesRatio
          ? t.slideTo(a.rewind && t.isEnd ? f : h + S)
          : t.slideTo(h)),
        "prev" === t.swipeDirection &&
          (v > 1 - a.longSwipesRatio
            ? t.slideTo(h + S)
            : null !== g && v < 0 && Math.abs(v) > a.longSwipesRatio
            ? t.slideTo(g)
            : t.slideTo(h));
    } else {
      if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation &&
      (c.target === t.navigation.nextEl || c.target === t.navigation.prevEl)
        ? c.target === t.navigation.nextEl
          ? t.slideTo(h + S)
          : t.slideTo(h)
        : ("next" === t.swipeDirection && t.slideTo(null !== f ? f : h + S),
          "prev" === t.swipeDirection && t.slideTo(null !== g ? g : h));
    }
  }
  function Q() {
    const e = this,
      { params: t, el: s } = e;
    if (s && 0 === s.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: i, allowSlidePrev: a, snapGrid: l } = e,
      n = e.virtual && e.params.virtual.enabled;
    (e.allowSlideNext = !0),
      (e.allowSlidePrev = !0),
      e.updateSize(),
      e.updateSlides(),
      e.updateSlidesClasses();
    const r = n && t.loop;
    !("auto" === t.slidesPerView || t.slidesPerView > 1) ||
    !e.isEnd ||
    e.isBeginning ||
    e.params.centeredSlides ||
    r
      ? e.params.loop && !n
        ? e.slideToLoop(e.realIndex, 0, !1, !0)
        : e.slideTo(e.activeIndex, 0, !1, !0)
      : e.slideTo(e.slides.length - 1, 0, !1, !0),
      e.autoplay &&
        e.autoplay.running &&
        e.autoplay.paused &&
        (clearTimeout(e.autoplay.resizeTimeout),
        (e.autoplay.resizeTimeout = setTimeout(() => {
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            e.autoplay.resume();
        }, 500))),
      (e.allowSlidePrev = a),
      (e.allowSlideNext = i),
      e.params.watchOverflow && l !== e.snapGrid && e.checkOverflow();
  }
  function K(e) {
    const t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function Z() {
    const e = this,
      { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
    if (!i) return;
    let a;
    (e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = -t.scrollLeft)
        : (e.translate = -t.scrollTop),
      0 === e.translate && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
    const l = e.maxTranslate() - e.minTranslate();
    (a = 0 === l ? 0 : (e.translate - e.minTranslate()) / l),
      a !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
      e.emit("setTranslate", e.translate, !1);
  }
  function J(e) {
    q(this, e.target), this.update();
  }
  let ee = !1;
  function te() {}
  const se = (e, t) => {
    const s = g(),
      { params: i, el: a, wrapperEl: l, device: n } = e,
      r = !!i.nested,
      o = "on" === t ? "addEventListener" : "removeEventListener",
      c = t;
    a[o]("pointerdown", e.onTouchStart, { passive: !1 }),
      s[o]("pointermove", e.onTouchMove, { passive: !1, capture: r }),
      s[o]("pointerup", e.onTouchEnd, { passive: !0 }),
      s[o]("pointercancel", e.onTouchEnd, { passive: !0 }),
      s[o]("pointerout", e.onTouchEnd, { passive: !0 }),
      s[o]("pointerleave", e.onTouchEnd, { passive: !0 }),
      (i.preventClicks || i.preventClicksPropagation) &&
        a[o]("click", e.onClick, !0),
      i.cssMode && l[o]("scroll", e.onScroll),
      i.updateOnWindowResize
        ? e[c](
            n.ios || n.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            Q,
            !0
          )
        : e[c]("observerUpdate", Q, !0),
      a[o]("load", e.onLoad, { capture: !0 });
  };
  const ie = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  const ae = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopedSlides: null,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
  function le(e, t) {
    return function (s = {}) {
      const i = Object.keys(s)[0],
        a = s[i];
      "object" == typeof a && null !== a
        ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
            !0 === e[i] &&
            (e[i] = { auto: !0 }),
          i in e && "enabled" in a
            ? (!0 === e[i] && (e[i] = { enabled: !0 }),
              "object" != typeof e[i] ||
                "enabled" in e[i] ||
                (e[i].enabled = !0),
              e[i] || (e[i] = { enabled: !1 }),
              C(t, s))
            : C(t, s))
        : C(t, s);
    };
  }
  const ne = {
      eventsEmitter: D,
      update: F,
      translate: j,
      transition: {
        setTransition: function (e, t) {
          const s = this;
          s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${e}ms`),
            s.emit("setTransition", e, t);
        },
        transitionStart: function (e = !0, t) {
          const s = this,
            { params: i } = s;
          i.cssMode ||
            (i.autoHeight && s.updateAutoHeight(),
            N({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
        },
        transitionEnd: function (e = !0, t) {
          const s = this,
            { params: i } = s;
          (s.animating = !1),
            i.cssMode ||
              (s.setTransition(0),
              N({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
        },
      },
      slide: R,
      loop: W,
      grabCursor: {
        setGrabCursor: function (e) {
          const t = this;
          if (
            !t.params.simulateTouch ||
            (t.params.watchOverflow && t.isLocked) ||
            t.params.cssMode
          )
            return;
          const s =
            "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
          t.isElement && (t.__preventObserver__ = !0),
            (s.style.cursor = "move"),
            (s.style.cursor = e ? "grabbing" : "grab"),
            t.isElement &&
              requestAnimationFrame(() => {
                t.__preventObserver__ = !1;
              });
        },
        unsetGrabCursor: function () {
          const e = this;
          (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode ||
            (e.isElement && (e.__preventObserver__ = !0),
            (e[
              "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
            ].style.cursor = ""),
            e.isElement &&
              requestAnimationFrame(() => {
                e.__preventObserver__ = !1;
              }));
        },
      },
      events: {
        attachEvents: function () {
          const e = this,
            t = g(),
            { params: s } = e;
          (e.onTouchStart = Y.bind(e)),
            (e.onTouchMove = X.bind(e)),
            (e.onTouchEnd = U.bind(e)),
            s.cssMode && (e.onScroll = Z.bind(e)),
            (e.onClick = K.bind(e)),
            (e.onLoad = J.bind(e)),
            ee || (t.addEventListener("touchstart", te), (ee = !0)),
            se(e, "on");
        },
        detachEvents: function () {
          se(this, "off");
        },
      },
      breakpoints: {
        setBreakpoint: function () {
          const e = this,
            { realIndex: t, initialized: s, params: i, el: a } = e,
            l = i.breakpoints;
          if (!l || (l && 0 === Object.keys(l).length)) return;
          const n = e.getBreakpoint(l, e.params.breakpointsBase, e.el);
          if (!n || e.currentBreakpoint === n) return;
          const r = (n in l ? l[n] : void 0) || e.originalParams,
            o = ie(e, i),
            c = ie(e, r),
            d = i.enabled;
          o && !c
            ? (a.classList.remove(
                `${i.containerModifierClass}grid`,
                `${i.containerModifierClass}grid-column`
              ),
              e.emitContainerClasses())
            : !o &&
              c &&
              (a.classList.add(`${i.containerModifierClass}grid`),
              ((r.grid.fill && "column" === r.grid.fill) ||
                (!r.grid.fill && "column" === i.grid.fill)) &&
                a.classList.add(`${i.containerModifierClass}grid-column`),
              e.emitContainerClasses()),
            ["navigation", "pagination", "scrollbar"].forEach((t) => {
              const s = i[t] && i[t].enabled,
                a = r[t] && r[t].enabled;
              s && !a && e[t].disable(), !s && a && e[t].enable();
            });
          const p = r.direction && r.direction !== i.direction,
            u = i.loop && (r.slidesPerView !== i.slidesPerView || p);
          p && s && e.changeDirection(), C(e.params, r);
          const h = e.params.enabled;
          Object.assign(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev,
          }),
            d && !h ? e.disable() : !d && h && e.enable(),
            (e.currentBreakpoint = n),
            e.emit("_beforeBreakpoint", r),
            u && s && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()),
            e.emit("breakpoint", r);
        },
        getBreakpoint: function (e, t = "window", s) {
          if (!e || ("container" === t && !s)) return;
          let i = !1;
          const a = S(),
            l = "window" === t ? a.innerHeight : s.clientHeight,
            n = Object.keys(e).map((e) => {
              if ("string" == typeof e && 0 === e.indexOf("@")) {
                const t = parseFloat(e.substr(1));
                return { value: l * t, point: e };
              }
              return { value: e, point: e };
            });
          n.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
          for (let e = 0; e < n.length; e += 1) {
            const { point: l, value: r } = n[e];
            "window" === t
              ? a.matchMedia(`(min-width: ${r}px)`).matches && (i = l)
              : r <= s.clientWidth && (i = l);
          }
          return i || "max";
        },
      },
      checkOverflow: {
        checkOverflow: function () {
          const e = this,
            { isLocked: t, params: s } = e,
            { slidesOffsetBefore: i } = s;
          if (i) {
            const t = e.slides.length - 1,
              s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
            e.isLocked = e.size > s;
          } else e.isLocked = 1 === e.snapGrid.length;
          !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
            !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
            t && t !== e.isLocked && (e.isEnd = !1),
            t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
        },
      },
      classes: {
        addClasses: function () {
          const e = this,
            { classNames: t, params: s, rtl: i, el: a, device: l } = e,
            n = (function (e, t) {
              const s = [];
              return (
                e.forEach((e) => {
                  "object" == typeof e
                    ? Object.keys(e).forEach((i) => {
                        e[i] && s.push(t + i);
                      })
                    : "string" == typeof e && s.push(t + e);
                }),
                s
              );
            })(
              [
                "initialized",
                s.direction,
                { "free-mode": e.params.freeMode && s.freeMode.enabled },
                { autoheight: s.autoHeight },
                { rtl: i },
                { grid: s.grid && s.grid.rows > 1 },
                {
                  "grid-column":
                    s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
                },
                { android: l.android },
                { ios: l.ios },
                { "css-mode": s.cssMode },
                { centered: s.cssMode && s.centeredSlides },
                { "watch-progress": s.watchSlidesProgress },
              ],
              s.containerModifierClass
            );
          t.push(...n), a.classList.add(...t), e.emitContainerClasses();
        },
        removeClasses: function () {
          const { el: e, classNames: t } = this;
          e.classList.remove(...t), this.emitContainerClasses();
        },
      },
    },
    re = {};
  class oe {
    constructor(...e) {
      let t, s;
      1 === e.length &&
      e[0].constructor &&
      "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
        ? (s = e[0])
        : ([t, s] = e),
        s || (s = {}),
        (s = C({}, s)),
        t && !s.el && (s.el = t);
      const i = g();
      if (
        s.el &&
        "string" == typeof s.el &&
        i.querySelectorAll(s.el).length > 1
      ) {
        const e = [];
        return (
          i.querySelectorAll(s.el).forEach((t) => {
            const i = C({}, s, { el: t });
            e.push(new oe(i));
          }),
          e
        );
      }
      const a = this;
      (a.__swiper__ = !0),
        (a.support = z()),
        (a.device = B({ userAgent: s.userAgent })),
        (a.browser = G()),
        (a.eventsListeners = {}),
        (a.eventsAnyListeners = []),
        (a.modules = [...a.__modules__]),
        s.modules && Array.isArray(s.modules) && a.modules.push(...s.modules);
      const l = {};
      a.modules.forEach((e) => {
        e({
          params: s,
          swiper: a,
          extendParams: le(s, l),
          on: a.on.bind(a),
          once: a.once.bind(a),
          off: a.off.bind(a),
          emit: a.emit.bind(a),
        });
      });
      const n = C({}, ae, l);
      return (
        (a.params = C({}, n, re, s)),
        (a.originalParams = C({}, a.params)),
        (a.passedParams = C({}, s)),
        a.params &&
          a.params.on &&
          Object.keys(a.params.on).forEach((e) => {
            a.on(e, a.params.on[e]);
          }),
        a.params && a.params.onAny && a.onAny(a.params.onAny),
        Object.assign(a, {
          enabled: a.params.enabled,
          el: t,
          classNames: [],
          slides: [],
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: () => "horizontal" === a.params.direction,
          isVertical: () => "vertical" === a.params.direction,
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          cssOverflowAdjustment() {
            return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
          },
          allowSlideNext: a.params.allowSlideNext,
          allowSlidePrev: a.params.allowSlidePrev,
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: a.params.focusableElements,
            lastClickTime: 0,
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            startMoving: void 0,
            evCache: [],
          },
          allowClick: !0,
          allowTouchMove: a.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        a.emit("_swiper"),
        a.params.init && a.init(),
        a
      );
    }
    getSlideIndex(e) {
      const { slidesEl: t, params: s } = this,
        i = P(L(t, `.${s.slideClass}, swiper-slide`)[0]);
      return P(e) - i;
    }
    getSlideIndexByData(e) {
      return this.getSlideIndex(
        this.slides.filter(
          (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
        )[0]
      );
    }
    recalcSlides() {
      const { slidesEl: e, params: t } = this;
      this.slides = L(e, `.${t.slideClass}, swiper-slide`);
    }
    enable() {
      const e = this;
      e.enabled ||
        ((e.enabled = !0),
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled &&
        ((e.enabled = !1),
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"));
    }
    setProgress(e, t) {
      const s = this;
      e = Math.min(Math.max(e, 0), 1);
      const i = s.minTranslate(),
        a = (s.maxTranslate() - i) * e + i;
      s.translateTo(a, void 0 === t ? 0 : t),
        s.updateActiveIndex(),
        s.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className
        .split(" ")
        .filter(
          (t) =>
            0 === t.indexOf("swiper") ||
            0 === t.indexOf(e.params.containerModifierClass)
        );
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return t.destroyed
        ? ""
        : e.className
            .split(" ")
            .filter(
              (e) =>
                0 === e.indexOf("swiper-slide") ||
                0 === e.indexOf(t.params.slideClass)
            )
            .join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.forEach((s) => {
        const i = e.getSlideClasses(s);
        t.push({ slideEl: s, classNames: i }), e.emit("_slideClass", s, i);
      }),
        e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e = "current", t = !1) {
      const {
        params: s,
        slides: i,
        slidesGrid: a,
        slidesSizesGrid: l,
        size: n,
        activeIndex: r,
      } = this;
      let o = 1;
      if (s.centeredSlides) {
        let e,
          t = i[r].swiperSlideSize;
        for (let s = r + 1; s < i.length; s += 1)
          i[s] &&
            !e &&
            ((t += i[s].swiperSlideSize), (o += 1), t > n && (e = !0));
        for (let s = r - 1; s >= 0; s -= 1)
          i[s] &&
            !e &&
            ((t += i[s].swiperSlideSize), (o += 1), t > n && (e = !0));
      } else if ("current" === e)
        for (let e = r + 1; e < i.length; e += 1) {
          (t ? a[e] + l[e] - a[r] < n : a[e] - a[r] < n) && (o += 1);
        }
      else
        for (let e = r - 1; e >= 0; e -= 1) {
          a[r] - a[e] < n && (o += 1);
        }
      return o;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: s } = e;
      function i() {
        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
          s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let a;
      if (
        (s.breakpoints && e.setBreakpoint(),
        [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
          t.complete && q(e, t);
        }),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        e.params.freeMode && e.params.freeMode.enabled)
      )
        i(), e.params.autoHeight && e.updateAutoHeight();
      else {
        if (
          ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) &&
          e.isEnd &&
          !e.params.centeredSlides
        ) {
          const t =
            e.virtual && e.params.virtual.enabled ? e.virtual.slides : e.slides;
          a = e.slideTo(t.length - 1, 0, !1, !0);
        } else a = e.slideTo(e.activeIndex, 0, !1, !0);
        a || i();
      }
      s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update");
    }
    changeDirection(e, t = !0) {
      const s = this,
        i = s.params.direction;
      return (
        e || (e = "horizontal" === i ? "vertical" : "horizontal"),
        e === i ||
          ("horizontal" !== e && "vertical" !== e) ||
          (s.el.classList.remove(`${s.params.containerModifierClass}${i}`),
          s.el.classList.add(`${s.params.containerModifierClass}${e}`),
          s.emitContainerClasses(),
          (s.params.direction = e),
          s.slides.forEach((t) => {
            "vertical" === e ? (t.style.width = "") : (t.style.height = "");
          }),
          s.emit("changeDirection"),
          t && s.update()),
        s
      );
    }
    changeLanguageDirection(e) {
      const t = this;
      (t.rtl && "rtl" === e) ||
        (!t.rtl && "ltr" === e) ||
        ((t.rtl = "rtl" === e),
        (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
        t.rtl
          ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "rtl"))
          : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "ltr")),
        t.update());
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      let s = e || t.params.el;
      if (("string" == typeof s && (s = document.querySelector(s)), !s))
        return !1;
      (s.swiper = t), s.shadowEl && (t.isElement = !0);
      const i = () =>
        `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let a = (() => {
        if (s && s.shadowRoot && s.shadowRoot.querySelector) {
          return s.shadowRoot.querySelector(i());
        }
        return L(s, i())[0];
      })();
      return (
        !a &&
          t.params.createElements &&
          ((a = A("div", t.params.wrapperClass)),
          s.append(a),
          L(s, `.${t.params.slideClass}`).forEach((e) => {
            a.append(e);
          })),
        Object.assign(t, {
          el: s,
          wrapperEl: a,
          slidesEl: t.isElement ? s : a,
          mounted: !0,
          rtl: "rtl" === s.dir.toLowerCase() || "rtl" === M(s, "direction"),
          rtlTranslate:
            "horizontal" === t.params.direction &&
            ("rtl" === s.dir.toLowerCase() || "rtl" === M(s, "direction")),
          wrongRTL: "-webkit-box" === M(a, "display"),
        }),
        !0
      );
    }
    init(e) {
      const t = this;
      if (t.initialized) return t;
      return (
        !1 === t.mount(e) ||
          (t.emit("beforeInit"),
          t.params.breakpoints && t.setBreakpoint(),
          t.addClasses(),
          t.updateSize(),
          t.updateSlides(),
          t.params.watchOverflow && t.checkOverflow(),
          t.params.grabCursor && t.enabled && t.setGrabCursor(),
          t.params.loop && t.virtual && t.params.virtual.enabled
            ? t.slideTo(
                t.params.initialSlide + t.virtual.slidesBefore,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              )
            : t.slideTo(
                t.params.initialSlide,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              ),
          t.params.loop && t.loopCreate(),
          t.attachEvents(),
          [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e) => {
            e.complete
              ? q(t, e)
              : e.addEventListener("load", (e) => {
                  q(t, e.target);
                });
          }),
          V(t),
          (t.initialized = !0),
          V(t),
          t.emit("init"),
          t.emit("afterInit")),
        t
      );
    }
    destroy(e = !0, t = !0) {
      const s = this,
        { params: i, el: a, wrapperEl: l, slides: n } = s;
      return (
        void 0 === s.params ||
          s.destroyed ||
          (s.emit("beforeDestroy"),
          (s.initialized = !1),
          s.detachEvents(),
          i.loop && s.loopDestroy(),
          t &&
            (s.removeClasses(),
            a.removeAttribute("style"),
            l.removeAttribute("style"),
            n &&
              n.length &&
              n.forEach((e) => {
                e.classList.remove(
                  i.slideVisibleClass,
                  i.slideActiveClass,
                  i.slideNextClass,
                  i.slidePrevClass
                ),
                  e.removeAttribute("style"),
                  e.removeAttribute("data-swiper-slide-index");
              })),
          s.emit("destroy"),
          Object.keys(s.eventsListeners).forEach((e) => {
            s.off(e);
          }),
          !1 !== e &&
            ((s.el.swiper = null),
            (function (e) {
              const t = e;
              Object.keys(t).forEach((e) => {
                try {
                  t[e] = null;
                } catch (e) {}
                try {
                  delete t[e];
                } catch (e) {}
              });
            })(s)),
          (s.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      C(re, e);
    }
    static get extendedDefaults() {
      return re;
    }
    static get defaults() {
      return ae;
    }
    static installModule(e) {
      oe.prototype.__modules__ || (oe.prototype.__modules__ = []);
      const t = oe.prototype.__modules__;
      "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((e) => oe.installModule(e)), oe)
        : (oe.installModule(e), oe);
    }
  }
  Object.keys(ne).forEach((e) => {
    Object.keys(ne[e]).forEach((t) => {
      oe.prototype[t] = ne[e][t];
    });
  }),
    oe.use([
      function ({ swiper: e, on: t, emit: s }) {
        const i = S();
        let a = null,
          l = null;
        const n = () => {
            e &&
              !e.destroyed &&
              e.initialized &&
              (s("beforeResize"), s("resize"));
          },
          r = () => {
            e && !e.destroyed && e.initialized && s("orientationchange");
          };
        t("init", () => {
          e.params.resizeObserver && void 0 !== i.ResizeObserver
            ? e &&
              !e.destroyed &&
              e.initialized &&
              ((a = new ResizeObserver((t) => {
                l = i.requestAnimationFrame(() => {
                  const { width: s, height: i } = e;
                  let a = s,
                    l = i;
                  t.forEach(
                    ({ contentBoxSize: t, contentRect: s, target: i }) => {
                      (i && i !== e.el) ||
                        ((a = s ? s.width : (t[0] || t).inlineSize),
                        (l = s ? s.height : (t[0] || t).blockSize));
                    }
                  ),
                    (a === s && l === i) || n();
                });
              })),
              a.observe(e.el))
            : (i.addEventListener("resize", n),
              i.addEventListener("orientationchange", r));
        }),
          t("destroy", () => {
            l && i.cancelAnimationFrame(l),
              a && a.unobserve && e.el && (a.unobserve(e.el), (a = null)),
              i.removeEventListener("resize", n),
              i.removeEventListener("orientationchange", r);
          });
      },
      function ({ swiper: e, extendParams: t, on: s, emit: i }) {
        const a = [],
          l = S(),
          n = (t, s = {}) => {
            const n = new (l.MutationObserver || l.WebkitMutationObserver)(
              (t) => {
                if (e.__preventObserver__) return;
                if (1 === t.length) return void i("observerUpdate", t[0]);
                const s = function () {
                  i("observerUpdate", t[0]);
                };
                l.requestAnimationFrame
                  ? l.requestAnimationFrame(s)
                  : l.setTimeout(s, 0);
              }
            );
            n.observe(t, {
              attributes: void 0 === s.attributes || s.attributes,
              childList: void 0 === s.childList || s.childList,
              characterData: void 0 === s.characterData || s.characterData,
            }),
              a.push(n);
          };
        t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
          s("init", () => {
            if (e.params.observer) {
              if (e.params.observeParents) {
                const t = k(e.el);
                for (let e = 0; e < t.length; e += 1) n(t[e]);
              }
              n(e.el, { childList: e.params.observeSlideChildren }),
                n(e.wrapperEl, { attributes: !1 });
            }
          }),
          s("destroy", () => {
            a.forEach((e) => {
              e.disconnect();
            }),
              a.splice(0, a.length);
          });
      },
    ]);
  const ce = oe;
  function de(e, t, s, i) {
    return (
      e.params.createElements &&
        Object.keys(i).forEach((a) => {
          if (!s[a] && !0 === s.auto) {
            let l = L(e.el, `.${i[a]}`)[0];
            l || ((l = A("div", i[a])), (l.className = i[a]), e.el.append(l)),
              (s[a] = l),
              (t[a] = l);
          }
        }),
      s
    );
  }
  function pe({ swiper: e, extendParams: t, on: s, emit: i }) {
    t({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
        navigationDisabledClass: "swiper-navigation-disabled",
      },
    }),
      (e.navigation = { nextEl: null, prevEl: null });
    const a = (e) => (Array.isArray(e) || (e = [e].filter((e) => !!e)), e);
    function l(t) {
      let s;
      return t &&
        "string" == typeof t &&
        e.isElement &&
        ((s = e.el.shadowRoot.querySelector(t)), s)
        ? s
        : (t &&
            ("string" == typeof t && (s = [...document.querySelectorAll(t)]),
            e.params.uniqueNavElements &&
              "string" == typeof t &&
              s.length > 1 &&
              1 === e.el.querySelectorAll(t).length &&
              (s = e.el.querySelector(t))),
          t && !s ? t : s);
    }
    function n(t, s) {
      const i = e.params.navigation;
      (t = a(t)).forEach((t) => {
        t &&
          (t.classList[s ? "add" : "remove"](...i.disabledClass.split(" ")),
          "BUTTON" === t.tagName && (t.disabled = s),
          e.params.watchOverflow &&
            e.enabled &&
            t.classList[e.isLocked ? "add" : "remove"](i.lockClass));
      });
    }
    function r() {
      const { nextEl: t, prevEl: s } = e.navigation;
      if (e.params.loop) return n(s, !1), void n(t, !1);
      n(s, e.isBeginning && !e.params.rewind),
        n(t, e.isEnd && !e.params.rewind);
    }
    function o(t) {
      t.preventDefault(),
        (!e.isBeginning || e.params.loop || e.params.rewind) &&
          (e.slidePrev(), i("navigationPrev"));
    }
    function c(t) {
      t.preventDefault(),
        (!e.isEnd || e.params.loop || e.params.rewind) &&
          (e.slideNext(), i("navigationNext"));
    }
    function d() {
      const t = e.params.navigation;
      if (
        ((e.params.navigation = de(
          e,
          e.originalParams.navigation,
          e.params.navigation,
          { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
        )),
        !t.nextEl && !t.prevEl)
      )
        return;
      let s = l(t.nextEl),
        i = l(t.prevEl);
      Object.assign(e.navigation, { nextEl: s, prevEl: i }),
        (s = a(s)),
        (i = a(i));
      const n = (s, i) => {
        s && s.addEventListener("click", "next" === i ? c : o),
          !e.enabled && s && s.classList.add(...t.lockClass.split(" "));
      };
      s.forEach((e) => n(e, "next")), i.forEach((e) => n(e, "prev"));
    }
    function p() {
      let { nextEl: t, prevEl: s } = e.navigation;
      (t = a(t)), (s = a(s));
      const i = (t, s) => {
        t.removeEventListener("click", "next" === s ? c : o),
          t.classList.remove(...e.params.navigation.disabledClass.split(" "));
      };
      t.forEach((e) => i(e, "next")), s.forEach((e) => i(e, "prev"));
    }
    s("init", () => {
      !1 === e.params.navigation.enabled ? u() : (d(), r());
    }),
      s("toEdge fromEdge lock unlock", () => {
        r();
      }),
      s("destroy", () => {
        p();
      }),
      s("enable disable", () => {
        let { nextEl: t, prevEl: s } = e.navigation;
        (t = a(t)),
          (s = a(s)),
          [...t, ...s]
            .filter((e) => !!e)
            .forEach((t) =>
              t.classList[e.enabled ? "remove" : "add"](
                e.params.navigation.lockClass
              )
            );
      }),
      s("click", (t, s) => {
        let { nextEl: l, prevEl: n } = e.navigation;
        (l = a(l)), (n = a(n));
        const r = s.target;
        if (
          e.params.navigation.hideOnClick &&
          !n.includes(r) &&
          !l.includes(r)
        ) {
          if (
            e.pagination &&
            e.params.pagination &&
            e.params.pagination.clickable &&
            (e.pagination.el === r || e.pagination.el.contains(r))
          )
            return;
          let t;
          l.length
            ? (t = l[0].classList.contains(e.params.navigation.hiddenClass))
            : n.length &&
              (t = n[0].classList.contains(e.params.navigation.hiddenClass)),
            i(!0 === t ? "navigationShow" : "navigationHide"),
            [...l, ...n]
              .filter((e) => !!e)
              .forEach((t) =>
                t.classList.toggle(e.params.navigation.hiddenClass)
              );
        }
      });
    const u = () => {
      e.el.classList.add(
        ...e.params.navigation.navigationDisabledClass.split(" ")
      ),
        p();
    };
    Object.assign(e.navigation, {
      enable: () => {
        e.el.classList.remove(
          ...e.params.navigation.navigationDisabledClass.split(" ")
        ),
          d(),
          r();
      },
      disable: u,
      update: r,
      init: d,
      destroy: p,
    });
  }
  function ue(e = "") {
    return `.${e
      .trim()
      .replace(/([\.:!+\/])/g, "\\$1")
      .replace(/ /g, ".")}`;
  }
  function he({ swiper: e, extendParams: t, on: s, emit: i }) {
    const a = "swiper-pagination";
    let l;
    t({
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: "bullets",
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: (e) => e,
        formatFractionTotal: (e) => e,
        bulletClass: `${a}-bullet`,
        bulletActiveClass: `${a}-bullet-active`,
        modifierClass: `${a}-`,
        currentClass: `${a}-current`,
        totalClass: `${a}-total`,
        hiddenClass: `${a}-hidden`,
        progressbarFillClass: `${a}-progressbar-fill`,
        progressbarOppositeClass: `${a}-progressbar-opposite`,
        clickableClass: `${a}-clickable`,
        lockClass: `${a}-lock`,
        horizontalClass: `${a}-horizontal`,
        verticalClass: `${a}-vertical`,
        paginationDisabledClass: `${a}-disabled`,
      },
    }),
      (e.pagination = { el: null, bullets: [] });
    let n = 0;
    const r = (e) => (Array.isArray(e) || (e = [e].filter((e) => !!e)), e);
    function o() {
      return (
        !e.params.pagination.el ||
        !e.pagination.el ||
        (Array.isArray(e.pagination.el) && 0 === e.pagination.el.length)
      );
    }
    function c(t, s) {
      const { bulletActiveClass: i } = e.params.pagination;
      t &&
        (t = t[("prev" === s ? "previous" : "next") + "ElementSibling"]) &&
        (t.classList.add(`${i}-${s}`),
        (t = t[("prev" === s ? "previous" : "next") + "ElementSibling"]) &&
          t.classList.add(`${i}-${s}-${s}`));
    }
    function d(t) {
      const s = t.target.closest(ue(e.params.pagination.bulletClass));
      if (!s) return;
      t.preventDefault();
      const i = P(s) * e.params.slidesPerGroup;
      if (e.params.loop) {
        if (e.realIndex === i) return;
        const t = e.getSlideIndexByData(i),
          s = e.getSlideIndexByData(e.realIndex);
        t > e.slides.length - e.loopedSlides &&
          e.loopFix({
            direction: t > s ? "next" : "prev",
            activeSlideIndex: t,
            slideTo: !1,
          }),
          e.slideToLoop(i);
      } else e.slideTo(i);
    }
    function p() {
      const t = e.rtl,
        s = e.params.pagination;
      if (o()) return;
      let a,
        d,
        p = e.pagination.el;
      p = r(p);
      const u =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : e.slides.length,
        h = e.params.loop
          ? Math.ceil(u / e.params.slidesPerGroup)
          : e.snapGrid.length;
      if (
        (e.params.loop
          ? ((d = e.previousRealIndex || 0),
            (a =
              e.params.slidesPerGroup > 1
                ? Math.floor(e.realIndex / e.params.slidesPerGroup)
                : e.realIndex))
          : void 0 !== e.snapIndex
          ? ((a = e.snapIndex), (d = e.previousSnapIndex))
          : ((d = e.previousIndex || 0), (a = e.activeIndex || 0)),
        "bullets" === s.type &&
          e.pagination.bullets &&
          e.pagination.bullets.length > 0)
      ) {
        const i = e.pagination.bullets;
        let r, o, u;
        if (
          (s.dynamicBullets &&
            ((l = _(i[0], e.isHorizontal() ? "width" : "height", !0)),
            p.forEach((t) => {
              t.style[e.isHorizontal() ? "width" : "height"] =
                l * (s.dynamicMainBullets + 4) + "px";
            }),
            s.dynamicMainBullets > 1 &&
              void 0 !== d &&
              ((n += a - (d || 0)),
              n > s.dynamicMainBullets - 1
                ? (n = s.dynamicMainBullets - 1)
                : n < 0 && (n = 0)),
            (r = Math.max(a - n, 0)),
            (o = r + (Math.min(i.length, s.dynamicMainBullets) - 1)),
            (u = (o + r) / 2)),
          i.forEach((e) => {
            const t = [
              ...[
                "",
                "-next",
                "-next-next",
                "-prev",
                "-prev-prev",
                "-main",
              ].map((e) => `${s.bulletActiveClass}${e}`),
            ]
              .map((e) =>
                "string" == typeof e && e.includes(" ") ? e.split(" ") : e
              )
              .flat();
            e.classList.remove(...t);
          }),
          p.length > 1)
        )
          i.forEach((e) => {
            const t = P(e);
            t === a && e.classList.add(...s.bulletActiveClass.split(" ")),
              s.dynamicBullets &&
                (t >= r &&
                  t <= o &&
                  e.classList.add(...`${s.bulletActiveClass}-main`.split(" ")),
                t === r && c(e, "prev"),
                t === o && c(e, "next"));
          });
        else {
          const e = i[a];
          if (
            (e && e.classList.add(...s.bulletActiveClass.split(" ")),
            s.dynamicBullets)
          ) {
            const e = i[r],
              t = i[o];
            for (let e = r; e <= o; e += 1)
              i[e] &&
                i[e].classList.add(...`${s.bulletActiveClass}-main`.split(" "));
            c(e, "prev"), c(t, "next");
          }
        }
        if (s.dynamicBullets) {
          const a = Math.min(i.length, s.dynamicMainBullets + 4),
            n = (l * a - l) / 2 - u * l,
            r = t ? "right" : "left";
          i.forEach((t) => {
            t.style[e.isHorizontal() ? r : "top"] = `${n}px`;
          });
        }
      }
      p.forEach((t, l) => {
        if (
          ("fraction" === s.type &&
            (t.querySelectorAll(ue(s.currentClass)).forEach((e) => {
              e.textContent = s.formatFractionCurrent(a + 1);
            }),
            t.querySelectorAll(ue(s.totalClass)).forEach((e) => {
              e.textContent = s.formatFractionTotal(h);
            })),
          "progressbar" === s.type)
        ) {
          let i;
          i = s.progressbarOpposite
            ? e.isHorizontal()
              ? "vertical"
              : "horizontal"
            : e.isHorizontal()
            ? "horizontal"
            : "vertical";
          const l = (a + 1) / h;
          let n = 1,
            r = 1;
          "horizontal" === i ? (n = l) : (r = l),
            t.querySelectorAll(ue(s.progressbarFillClass)).forEach((t) => {
              (t.style.transform = `translate3d(0,0,0) scaleX(${n}) scaleY(${r})`),
                (t.style.transitionDuration = `${e.params.speed}ms`);
            });
        }
        "custom" === s.type && s.renderCustom
          ? ((t.innerHTML = s.renderCustom(e, a + 1, h)),
            0 === l && i("paginationRender", t))
          : (0 === l && i("paginationRender", t), i("paginationUpdate", t)),
          e.params.watchOverflow &&
            e.enabled &&
            t.classList[e.isLocked ? "add" : "remove"](s.lockClass);
      });
    }
    function u() {
      const t = e.params.pagination;
      if (o()) return;
      const s =
        e.virtual && e.params.virtual.enabled
          ? e.virtual.slides.length
          : e.slides.length;
      let a = e.pagination.el;
      a = r(a);
      let l = "";
      if ("bullets" === t.type) {
        let i = e.params.loop
          ? Math.ceil(s / e.params.slidesPerGroup)
          : e.snapGrid.length;
        e.params.freeMode && e.params.freeMode.enabled && i > s && (i = s);
        for (let s = 0; s < i; s += 1)
          t.renderBullet
            ? (l += t.renderBullet.call(e, s, t.bulletClass))
            : (l += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
      }
      "fraction" === t.type &&
        (l = t.renderFraction
          ? t.renderFraction.call(e, t.currentClass, t.totalClass)
          : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
        "progressbar" === t.type &&
          (l = t.renderProgressbar
            ? t.renderProgressbar.call(e, t.progressbarFillClass)
            : `<span class="${t.progressbarFillClass}"></span>`),
        (e.pagination.bullets = []),
        a.forEach((s) => {
          "custom" !== t.type && (s.innerHTML = l || ""),
            "bullets" === t.type &&
              e.pagination.bullets.push(
                ...s.querySelectorAll(ue(t.bulletClass))
              );
        }),
        "custom" !== t.type && i("paginationRender", a[0]);
    }
    function h() {
      e.params.pagination = de(
        e,
        e.originalParams.pagination,
        e.params.pagination,
        { el: "swiper-pagination" }
      );
      const t = e.params.pagination;
      if (!t.el) return;
      let s;
      "string" == typeof t.el &&
        e.isElement &&
        (s = e.el.shadowRoot.querySelector(t.el)),
        s ||
          "string" != typeof t.el ||
          (s = [...document.querySelectorAll(t.el)]),
        s || (s = t.el),
        s &&
          0 !== s.length &&
          (e.params.uniqueNavElements &&
            "string" == typeof t.el &&
            Array.isArray(s) &&
            s.length > 1 &&
            ((s = [...e.el.querySelectorAll(t.el)]),
            s.length > 1 &&
              (s = s.filter((t) => k(t, ".swiper")[0] === e.el)[0])),
          Array.isArray(s) && 1 === s.length && (s = s[0]),
          Object.assign(e.pagination, { el: s }),
          (s = r(s)),
          s.forEach((s) => {
            "bullets" === t.type &&
              t.clickable &&
              s.classList.add(t.clickableClass),
              s.classList.add(t.modifierClass + t.type),
              s.classList.add(
                e.isHorizontal() ? t.horizontalClass : t.verticalClass
              ),
              "bullets" === t.type &&
                t.dynamicBullets &&
                (s.classList.add(`${t.modifierClass}${t.type}-dynamic`),
                (n = 0),
                t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
              "progressbar" === t.type &&
                t.progressbarOpposite &&
                s.classList.add(t.progressbarOppositeClass),
              t.clickable && s.addEventListener("click", d),
              e.enabled || s.classList.add(t.lockClass);
          }));
    }
    function m() {
      const t = e.params.pagination;
      if (o()) return;
      let s = e.pagination.el;
      s &&
        ((s = r(s)),
        s.forEach((s) => {
          s.classList.remove(t.hiddenClass),
            s.classList.remove(t.modifierClass + t.type),
            s.classList.remove(
              e.isHorizontal() ? t.horizontalClass : t.verticalClass
            ),
            t.clickable && s.removeEventListener("click", d);
        })),
        e.pagination.bullets &&
          e.pagination.bullets.forEach((e) =>
            e.classList.remove(...t.bulletActiveClass.split(" "))
          );
    }
    s("changeDirection", () => {
      if (!e.pagination || !e.pagination.el) return;
      const t = e.params.pagination;
      let { el: s } = e.pagination;
      (s = r(s)),
        s.forEach((s) => {
          s.classList.remove(t.horizontalClass, t.verticalClass),
            s.classList.add(
              e.isHorizontal() ? t.horizontalClass : t.verticalClass
            );
        });
    }),
      s("init", () => {
        !1 === e.params.pagination.enabled ? f() : (h(), u(), p());
      }),
      s("activeIndexChange", () => {
        void 0 === e.snapIndex && p();
      }),
      s("snapIndexChange", () => {
        p();
      }),
      s("snapGridLengthChange", () => {
        u(), p();
      }),
      s("destroy", () => {
        m();
      }),
      s("enable disable", () => {
        let { el: t } = e.pagination;
        t &&
          ((t = r(t)),
          t.forEach((t) =>
            t.classList[e.enabled ? "remove" : "add"](
              e.params.pagination.lockClass
            )
          ));
      }),
      s("lock unlock", () => {
        p();
      }),
      s("click", (t, s) => {
        const a = s.target;
        let { el: l } = e.pagination;
        if (
          (Array.isArray(l) || (l = [l].filter((e) => !!e)),
          e.params.pagination.el &&
            e.params.pagination.hideOnClick &&
            l &&
            l.length > 0 &&
            !a.classList.contains(e.params.pagination.bulletClass))
        ) {
          if (
            e.navigation &&
            ((e.navigation.nextEl && a === e.navigation.nextEl) ||
              (e.navigation.prevEl && a === e.navigation.prevEl))
          )
            return;
          const t = l[0].classList.contains(e.params.pagination.hiddenClass);
          i(!0 === t ? "paginationShow" : "paginationHide"),
            l.forEach((t) =>
              t.classList.toggle(e.params.pagination.hiddenClass)
            );
        }
      });
    const f = () => {
      e.el.classList.add(e.params.pagination.paginationDisabledClass);
      let { el: t } = e.pagination;
      t &&
        ((t = r(t)),
        t.forEach((t) =>
          t.classList.add(e.params.pagination.paginationDisabledClass)
        )),
        m();
    };
    Object.assign(e.pagination, {
      enable: () => {
        e.el.classList.remove(e.params.pagination.paginationDisabledClass);
        let { el: t } = e.pagination;
        t &&
          ((t = r(t)),
          t.forEach((t) =>
            t.classList.remove(e.params.pagination.paginationDisabledClass)
          )),
          h(),
          u(),
          p();
      },
      disable: f,
      render: u,
      update: p,
      init: h,
      destroy: m,
    });
  }
  function me() {
    let e = document.querySelectorAll(
      '[class*="__swiper"]:not(.swiper-wrapper)'
    );
    e &&
      e.forEach((e) => {
        e.parentElement.classList.add("swiper"),
          e.classList.add("swiper-wrapper");
        for (const t of e.children) t.classList.add("swiper-slide");
      });
  }
  window.addEventListener("load", function (e) {
    me(),
      document.querySelector(".header__slider") &&
        new ce(".header__slider", {
          modules: [pe, he],
          observer: !0,
          observeParents: !0,
          slidesPerView: 1,
          spaceBetween: 0,
          autoHeight: !0,
          speed: 800,
          pagination: {
            el: ".swiper-pagination",
            clickable: !0,
            type: "bullets",
          },
          navigation: {
            nextEl: ".about__more .more__item_next",
            prevEl: ".about__more .more__item_prev",
          },
          on: {},
        });
  });
  let fe = !1;
  setTimeout(() => {
    if (fe) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0),
    (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    }),
    (function () {
      let e = document.querySelector(".icon-menu");
      e &&
        e.addEventListener("click", function (e) {
          a &&
            (((e = 500) => {
              document.documentElement.classList.contains("lock") ? l(e) : n(e);
            })(),
            document.documentElement.classList.toggle("menu-open"));
        });
    })(),
    (function () {
      const e = document.querySelectorAll("[data-tabs]");
      let i = [];
      if (e.length > 0) {
        const t = location.hash.replace("#", "");
        t.startsWith("tab-") && (i = t.replace("tab-", "").split("-")),
          e.forEach((e, t) => {
            e.classList.add("_tab-init"),
              e.setAttribute("data-tabs-index", t),
              e.addEventListener("click", l),
              (function (e) {
                const t = e.querySelectorAll("[data-tabs-titles]>*"),
                  s = e.querySelectorAll("[data-tabs-body]>*"),
                  a = e.dataset.tabsIndex,
                  l = i[0] == a;
                if (l) {
                  e.querySelector(
                    "[data-tabs-titles]>._tab-active"
                  ).classList.remove("_tab-active");
                }
                s.length > 0 &&
                  s.forEach((e, s) => {
                    t[s].setAttribute("data-tabs-title", ""),
                      e.setAttribute("data-tabs-item", ""),
                      l && s == i[1] && t[s].classList.add("_tab-active"),
                      (e.hidden = !t[s].classList.contains("_tab-active"));
                  });
              })(e);
          });
        let s = o(e, "tabs");
        s &&
          s.length &&
          s.forEach((e) => {
            e.matchMedia.addEventListener("change", function () {
              a(e.itemsArray, e.matchMedia);
            }),
              a(e.itemsArray, e.matchMedia);
          });
      }
      function a(e, t) {
        e.forEach((e) => {
          const s = (e = e.item).querySelector("[data-tabs-titles]"),
            i = e.querySelectorAll("[data-tabs-title]"),
            a = e.querySelector("[data-tabs-body]");
          e.querySelectorAll("[data-tabs-item]").forEach((l, n) => {
            t.matches
              ? (a.append(i[n]), a.append(l), e.classList.add("_tab-spoller"))
              : (s.append(i[n]), e.classList.remove("_tab-spoller"));
          });
        });
      }
      function l(e) {
        const i = e.target;
        if (i.closest("[data-tabs-title]")) {
          const a = i.closest("[data-tabs-title]"),
            l = a.closest("[data-tabs]");
          if (
            !a.classList.contains("_tab-active") &&
            !l.querySelectorAll("._slide").length
          ) {
            const e = l.querySelector("[data-tabs-title]._tab-active");
            e && e.classList.remove("_tab-active"),
              a.classList.add("_tab-active"),
              (function (e) {
                const i = e.querySelectorAll("[data-tabs-title]"),
                  a = e.querySelectorAll("[data-tabs-item]"),
                  l = e.dataset.tabsIndex,
                  n = (function (e) {
                    if (e.hasAttribute("data-tabs-animate"))
                      return e.dataset.tabsAnimate > 0
                        ? e.dataset.tabsAnimate
                        : 500;
                  })(e);
                a.length > 0 &&
                  a.forEach((e, a) => {
                    i[a].classList.contains("_tab-active")
                      ? (n ? s(e, n) : (e.hidden = !1),
                        e.closest(".popup") ||
                          (location.hash = `tab-${l}-${a}`))
                      : n
                      ? t(e, n)
                      : (e.hidden = !0);
                  });
              })(l);
          }
          e.preventDefault();
        }
      }
    })(),
    document.addEventListener("click", function (e) {
      let t = e.target;
      if (t.closest(".quantity__button")) {
        let e = parseInt(t.closest(".quantity").querySelector("input").value);
        t.classList.contains("quantity__button_plus")
          ? e++
          : (--e, e < 1 && (e = 1)),
          (t.closest(".quantity").querySelector("input").value = e);
      }
    }),
    (p.selectModule = new d({})),
    (function () {
      function e(e) {
        if ("click" === e.type) {
          const t = e.target;
          if (t.closest("[data-goto]")) {
            const s = t.closest("[data-goto]"),
              i = s.dataset.goto ? s.dataset.goto : "",
              a = !!s.hasAttribute("data-goto-header"),
              l = s.dataset.gotoSpeed ? s.dataset.gotoSpeed : "500";
            c(i, a, l), e.preventDefault();
          }
        } else if ("watcherCallback" === e.type && e.detail) {
          const t = e.detail.entry,
            s = t.target;
          if ("navigator" === s.dataset.watch) {
            const e = s.id,
              i =
                (document.querySelector("[data-goto]._navigator-active"),
                document.querySelector(`[data-goto="${e}"]`));
            t.isIntersecting
              ? i && i.classList.add("_navigator-active")
              : i && i.classList.remove("_navigator-active");
          }
        }
      }
      document.addEventListener("click", e),
        document.addEventListener("watcherCallback", e);
    })(),
    (function () {
      fe = !0;
      const e = document.querySelector("header.header"),
        t = e.hasAttribute("data-scroll-show"),
        s = e.dataset.scrollShow ? e.dataset.scrollShow : 500,
        i = e.dataset.scroll ? e.dataset.scroll : 1;
      let a,
        l = 0;
      document.addEventListener("windowScroll", function (n) {
        const r = window.scrollY;
        clearTimeout(a),
          r >= i
            ? (!e.classList.contains("_header-scroll") &&
                e.classList.add("_header-scroll"),
              t &&
                (r > l
                  ? e.classList.contains("_header-show") &&
                    e.classList.remove("_header-show")
                  : !e.classList.contains("_header-show") &&
                    e.classList.add("_header-show"),
                (a = setTimeout(() => {
                  !e.classList.contains("_header-show") &&
                    e.classList.add("_header-show");
                }, s))))
            : (e.classList.contains("_header-scroll") &&
                e.classList.remove("_header-scroll"),
              t &&
                e.classList.contains("_header-show") &&
                e.classList.remove("_header-show")),
          (l = r <= 0 ? 0 : r);
      });
    })();
})();
