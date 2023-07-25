var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// fakecss:/Users/rossedwards/Desktop/Projects/SashaDon/autoliisingukalkulaator/assets/svelte/Bank.esbuild-svelte-fake-css
var init_ = __esm({
  "fakecss:/Users/rossedwards/Desktop/Projects/SashaDon/autoliisingukalkulaator/assets/svelte/Bank.esbuild-svelte-fake-css"() {
  }
});

// node_modules/svelte/internal/index.js
var require_internal = __commonJS({
  "node_modules/svelte/internal/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    function noop3() {
    }
    var identity = (x) => x;
    function assign(tar, src) {
      for (const k in src)
        tar[k] = src[k];
      return tar;
    }
    function is_promise(value) {
      return !!value && (typeof value === "object" || typeof value === "function") && typeof value.then === "function";
    }
    function add_location(element2, file, line, column, char) {
      element2.__svelte_meta = {
        loc: { file, line, column, char }
      };
    }
    function run3(fn) {
      return fn();
    }
    function blank_object() {
      return /* @__PURE__ */ Object.create(null);
    }
    function run_all3(fns) {
      fns.forEach(run3);
    }
    function is_function3(thing) {
      return typeof thing === "function";
    }
    function safe_not_equal2(a, b) {
      return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
    }
    var src_url_equal_anchor;
    function src_url_equal(element_src, url) {
      if (!src_url_equal_anchor) {
        src_url_equal_anchor = document.createElement("a");
      }
      src_url_equal_anchor.href = url;
      return element_src === src_url_equal_anchor.href;
    }
    function not_equal(a, b) {
      return a != a ? b == b : a !== b;
    }
    function is_empty3(obj) {
      return Object.keys(obj).length === 0;
    }
    function validate_store(store, name) {
      if (store != null && typeof store.subscribe !== "function") {
        throw new Error(`'${name}' is not a store with a 'subscribe' method`);
      }
    }
    function subscribe2(store, ...callbacks) {
      if (store == null) {
        return noop3;
      }
      const unsub = store.subscribe(...callbacks);
      return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
    }
    function get_store_value2(store) {
      let value;
      subscribe2(store, (_) => value = _)();
      return value;
    }
    function component_subscribe(component, store, callback) {
      component.$$.on_destroy.push(subscribe2(store, callback));
    }
    function create_slot(definition, ctx, $$scope, fn) {
      if (definition) {
        const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
        return definition[0](slot_ctx);
      }
    }
    function get_slot_context(definition, ctx, $$scope, fn) {
      return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
    }
    function get_slot_changes(definition, $$scope, dirty, fn) {
      if (definition[2] && fn) {
        const lets = definition[2](fn(dirty));
        if ($$scope.dirty === void 0) {
          return lets;
        }
        if (typeof lets === "object") {
          const merged = [];
          const len = Math.max($$scope.dirty.length, lets.length);
          for (let i = 0; i < len; i += 1) {
            merged[i] = $$scope.dirty[i] | lets[i];
          }
          return merged;
        }
        return $$scope.dirty | lets;
      }
      return $$scope.dirty;
    }
    function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
      if (slot_changes) {
        const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
        slot.p(slot_context, slot_changes);
      }
    }
    function update_slot(slot, slot_definition, ctx, $$scope, dirty, get_slot_changes_fn, get_slot_context_fn) {
      const slot_changes = get_slot_changes(slot_definition, $$scope, dirty, get_slot_changes_fn);
      update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn);
    }
    function get_all_dirty_from_scope($$scope) {
      if ($$scope.ctx.length > 32) {
        const dirty = [];
        const length = $$scope.ctx.length / 32;
        for (let i = 0; i < length; i++) {
          dirty[i] = -1;
        }
        return dirty;
      }
      return -1;
    }
    function exclude_internal_props(props) {
      const result = {};
      for (const k in props)
        if (k[0] !== "$")
          result[k] = props[k];
      return result;
    }
    function compute_rest_props(props, keys) {
      const rest = {};
      keys = new Set(keys);
      for (const k in props)
        if (!keys.has(k) && k[0] !== "$")
          rest[k] = props[k];
      return rest;
    }
    function compute_slots(slots) {
      const result = {};
      for (const key in slots) {
        result[key] = true;
      }
      return result;
    }
    function once(fn) {
      let ran = false;
      return function(...args) {
        if (ran)
          return;
        ran = true;
        fn.call(this, ...args);
      };
    }
    function null_to_empty(value) {
      return value == null ? "" : value;
    }
    function set_store_value(store, ret, value) {
      store.set(value);
      return ret;
    }
    var has_prop = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    function action_destroyer(action_result) {
      return action_result && is_function3(action_result.destroy) ? action_result.destroy : noop3;
    }
    function split_css_unit(value) {
      const split = typeof value === "string" && value.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
      return split ? [parseFloat(split[1]), split[2] || "px"] : [value, "px"];
    }
    var contenteditable_truthy_values = ["", true, 1, "true", "contenteditable"];
    var is_client = typeof window !== "undefined";
    exports2.now = is_client ? () => window.performance.now() : () => Date.now();
    exports2.raf = is_client ? (cb) => requestAnimationFrame(cb) : noop3;
    function set_now(fn) {
      exports2.now = fn;
    }
    function set_raf(fn) {
      exports2.raf = fn;
    }
    var tasks = /* @__PURE__ */ new Set();
    function run_tasks(now) {
      tasks.forEach((task) => {
        if (!task.c(now)) {
          tasks.delete(task);
          task.f();
        }
      });
      if (tasks.size !== 0)
        exports2.raf(run_tasks);
    }
    function clear_loops() {
      tasks.clear();
    }
    function loop(callback) {
      let task;
      if (tasks.size === 0)
        exports2.raf(run_tasks);
      return {
        promise: new Promise((fulfill) => {
          tasks.add(task = { c: callback, f: fulfill });
        }),
        abort() {
          tasks.delete(task);
        }
      };
    }
    var globals3 = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : global;
    var ResizeObserverSingleton2 = class {
      constructor(options) {
        this.options = options;
        this._listeners = "WeakMap" in globals3 ? /* @__PURE__ */ new WeakMap() : void 0;
      }
      observe(element2, listener) {
        this._listeners.set(element2, listener);
        this._getObserver().observe(element2, this.options);
        return () => {
          this._listeners.delete(element2);
          this._observer.unobserve(element2);
        };
      }
      _getObserver() {
        var _a;
        return (_a = this._observer) !== null && _a !== void 0 ? _a : this._observer = new ResizeObserver((entries) => {
          var _a2;
          for (const entry of entries) {
            ResizeObserverSingleton2.entries.set(entry.target, entry);
            (_a2 = this._listeners.get(entry.target)) === null || _a2 === void 0 ? void 0 : _a2(entry);
          }
        });
      }
    };
    ResizeObserverSingleton2.entries = "WeakMap" in globals3 ? /* @__PURE__ */ new WeakMap() : void 0;
    var is_hydrating = false;
    function start_hydrating() {
      is_hydrating = true;
    }
    function end_hydrating() {
      is_hydrating = false;
    }
    function upper_bound(low, high, key, value) {
      while (low < high) {
        const mid = low + (high - low >> 1);
        if (key(mid) <= value) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
      return low;
    }
    function init_hydrate(target) {
      if (target.hydrate_init)
        return;
      target.hydrate_init = true;
      let children2 = target.childNodes;
      if (target.nodeName === "HEAD") {
        const myChildren = [];
        for (let i = 0; i < children2.length; i++) {
          const node = children2[i];
          if (node.claim_order !== void 0) {
            myChildren.push(node);
          }
        }
        children2 = myChildren;
      }
      const m = new Int32Array(children2.length + 1);
      const p = new Int32Array(children2.length);
      m[0] = -1;
      let longest = 0;
      for (let i = 0; i < children2.length; i++) {
        const current = children2[i].claim_order;
        const seqLen = (longest > 0 && children2[m[longest]].claim_order <= current ? longest + 1 : upper_bound(1, longest, (idx) => children2[m[idx]].claim_order, current)) - 1;
        p[i] = m[seqLen] + 1;
        const newLen = seqLen + 1;
        m[newLen] = i;
        longest = Math.max(newLen, longest);
      }
      const lis = [];
      const toMove = [];
      let last = children2.length - 1;
      for (let cur = m[longest] + 1; cur != 0; cur = p[cur - 1]) {
        lis.push(children2[cur - 1]);
        for (; last >= cur; last--) {
          toMove.push(children2[last]);
        }
        last--;
      }
      for (; last >= 0; last--) {
        toMove.push(children2[last]);
      }
      lis.reverse();
      toMove.sort((a, b) => a.claim_order - b.claim_order);
      for (let i = 0, j = 0; i < toMove.length; i++) {
        while (j < lis.length && toMove[i].claim_order >= lis[j].claim_order) {
          j++;
        }
        const anchor = j < lis.length ? lis[j] : null;
        target.insertBefore(toMove[i], anchor);
      }
    }
    function append(target, node) {
      target.appendChild(node);
    }
    function append_styles(target, style_sheet_id, styles) {
      const append_styles_to = get_root_for_style(target);
      if (!append_styles_to.getElementById(style_sheet_id)) {
        const style = element("style");
        style.id = style_sheet_id;
        style.textContent = styles;
        append_stylesheet(append_styles_to, style);
      }
    }
    function get_root_for_style(node) {
      if (!node)
        return document;
      const root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
      if (root && root.host) {
        return root;
      }
      return node.ownerDocument;
    }
    function append_empty_stylesheet(node) {
      const style_element = element("style");
      append_stylesheet(get_root_for_style(node), style_element);
      return style_element.sheet;
    }
    function append_stylesheet(node, style) {
      append(node.head || node, style);
      return style.sheet;
    }
    function append_hydration(target, node) {
      if (is_hydrating) {
        init_hydrate(target);
        if (target.actual_end_child === void 0 || target.actual_end_child !== null && target.actual_end_child.parentNode !== target) {
          target.actual_end_child = target.firstChild;
        }
        while (target.actual_end_child !== null && target.actual_end_child.claim_order === void 0) {
          target.actual_end_child = target.actual_end_child.nextSibling;
        }
        if (node !== target.actual_end_child) {
          if (node.claim_order !== void 0 || node.parentNode !== target) {
            target.insertBefore(node, target.actual_end_child);
          }
        } else {
          target.actual_end_child = node.nextSibling;
        }
      } else if (node.parentNode !== target || node.nextSibling !== null) {
        target.appendChild(node);
      }
    }
    function insert(target, node, anchor) {
      target.insertBefore(node, anchor || null);
    }
    function insert_hydration(target, node, anchor) {
      if (is_hydrating && !anchor) {
        append_hydration(target, node);
      } else if (node.parentNode !== target || node.nextSibling != anchor) {
        target.insertBefore(node, anchor || null);
      }
    }
    function detach(node) {
      if (node.parentNode) {
        node.parentNode.removeChild(node);
      }
    }
    function destroy_each(iterations, detaching) {
      for (let i = 0; i < iterations.length; i += 1) {
        if (iterations[i])
          iterations[i].d(detaching);
      }
    }
    function element(name) {
      return document.createElement(name);
    }
    function element_is(name, is) {
      return document.createElement(name, { is });
    }
    function object_without_properties(obj, exclude) {
      const target = {};
      for (const k in obj) {
        if (has_prop(obj, k) && exclude.indexOf(k) === -1) {
          target[k] = obj[k];
        }
      }
      return target;
    }
    function svg_element(name) {
      return document.createElementNS("http://www.w3.org/2000/svg", name);
    }
    function text(data) {
      return document.createTextNode(data);
    }
    function space() {
      return text(" ");
    }
    function empty() {
      return text("");
    }
    function comment(content) {
      return document.createComment(content);
    }
    function listen(node, event, handler, options) {
      node.addEventListener(event, handler, options);
      return () => node.removeEventListener(event, handler, options);
    }
    function prevent_default(fn) {
      return function(event) {
        event.preventDefault();
        return fn.call(this, event);
      };
    }
    function stop_propagation(fn) {
      return function(event) {
        event.stopPropagation();
        return fn.call(this, event);
      };
    }
    function stop_immediate_propagation(fn) {
      return function(event) {
        event.stopImmediatePropagation();
        return fn.call(this, event);
      };
    }
    function self(fn) {
      return function(event) {
        if (event.target === this)
          fn.call(this, event);
      };
    }
    function trusted(fn) {
      return function(event) {
        if (event.isTrusted)
          fn.call(this, event);
      };
    }
    function attr(node, attribute, value) {
      if (value == null)
        node.removeAttribute(attribute);
      else if (node.getAttribute(attribute) !== value)
        node.setAttribute(attribute, value);
    }
    var always_set_through_set_attribute = ["width", "height"];
    function set_attributes(node, attributes) {
      const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);
      for (const key in attributes) {
        if (attributes[key] == null) {
          node.removeAttribute(key);
        } else if (key === "style") {
          node.style.cssText = attributes[key];
        } else if (key === "__value") {
          node.value = node[key] = attributes[key];
        } else if (descriptors[key] && descriptors[key].set && always_set_through_set_attribute.indexOf(key) === -1) {
          node[key] = attributes[key];
        } else {
          attr(node, key, attributes[key]);
        }
      }
    }
    function set_svg_attributes(node, attributes) {
      for (const key in attributes) {
        attr(node, key, attributes[key]);
      }
    }
    function set_custom_element_data_map(node, data_map) {
      Object.keys(data_map).forEach((key) => {
        set_custom_element_data(node, key, data_map[key]);
      });
    }
    function set_custom_element_data(node, prop, value) {
      if (prop in node) {
        node[prop] = typeof node[prop] === "boolean" && value === "" ? true : value;
      } else {
        attr(node, prop, value);
      }
    }
    function set_dynamic_element_data(tag) {
      return /-/.test(tag) ? set_custom_element_data_map : set_attributes;
    }
    function xlink_attr(node, attribute, value) {
      node.setAttributeNS("http://www.w3.org/1999/xlink", attribute, value);
    }
    function get_binding_group_value(group, __value, checked) {
      const value = /* @__PURE__ */ new Set();
      for (let i = 0; i < group.length; i += 1) {
        if (group[i].checked)
          value.add(group[i].__value);
      }
      if (!checked) {
        value.delete(__value);
      }
      return Array.from(value);
    }
    function init_binding_group(group) {
      let _inputs;
      return {
        /* push */
        p(...inputs) {
          _inputs = inputs;
          _inputs.forEach((input) => group.push(input));
        },
        /* remove */
        r() {
          _inputs.forEach((input) => group.splice(group.indexOf(input), 1));
        }
      };
    }
    function init_binding_group_dynamic(group, indexes) {
      let _group = get_binding_group(group);
      let _inputs;
      function get_binding_group(group2) {
        for (let i = 0; i < indexes.length; i++) {
          group2 = group2[indexes[i]] = group2[indexes[i]] || [];
        }
        return group2;
      }
      function push() {
        _inputs.forEach((input) => _group.push(input));
      }
      function remove() {
        _inputs.forEach((input) => _group.splice(_group.indexOf(input), 1));
      }
      return {
        /* update */
        u(new_indexes) {
          indexes = new_indexes;
          const new_group = get_binding_group(group);
          if (new_group !== _group) {
            remove();
            _group = new_group;
            push();
          }
        },
        /* push */
        p(...inputs) {
          _inputs = inputs;
          push();
        },
        /* remove */
        r: remove
      };
    }
    function to_number(value) {
      return value === "" ? null : +value;
    }
    function time_ranges_to_array(ranges) {
      const array = [];
      for (let i = 0; i < ranges.length; i += 1) {
        array.push({ start: ranges.start(i), end: ranges.end(i) });
      }
      return array;
    }
    function children(element2) {
      return Array.from(element2.childNodes);
    }
    function init_claim_info(nodes) {
      if (nodes.claim_info === void 0) {
        nodes.claim_info = { last_index: 0, total_claimed: 0 };
      }
    }
    function claim_node(nodes, predicate, processNode, createNode, dontUpdateLastIndex = false) {
      init_claim_info(nodes);
      const resultNode = (() => {
        for (let i = nodes.claim_info.last_index; i < nodes.length; i++) {
          const node = nodes[i];
          if (predicate(node)) {
            const replacement = processNode(node);
            if (replacement === void 0) {
              nodes.splice(i, 1);
            } else {
              nodes[i] = replacement;
            }
            if (!dontUpdateLastIndex) {
              nodes.claim_info.last_index = i;
            }
            return node;
          }
        }
        for (let i = nodes.claim_info.last_index - 1; i >= 0; i--) {
          const node = nodes[i];
          if (predicate(node)) {
            const replacement = processNode(node);
            if (replacement === void 0) {
              nodes.splice(i, 1);
            } else {
              nodes[i] = replacement;
            }
            if (!dontUpdateLastIndex) {
              nodes.claim_info.last_index = i;
            } else if (replacement === void 0) {
              nodes.claim_info.last_index--;
            }
            return node;
          }
        }
        return createNode();
      })();
      resultNode.claim_order = nodes.claim_info.total_claimed;
      nodes.claim_info.total_claimed += 1;
      return resultNode;
    }
    function claim_element_base(nodes, name, attributes, create_element) {
      return claim_node(nodes, (node) => node.nodeName === name, (node) => {
        const remove = [];
        for (let j = 0; j < node.attributes.length; j++) {
          const attribute = node.attributes[j];
          if (!attributes[attribute.name]) {
            remove.push(attribute.name);
          }
        }
        remove.forEach((v) => node.removeAttribute(v));
        return void 0;
      }, () => create_element(name));
    }
    function claim_element(nodes, name, attributes) {
      return claim_element_base(nodes, name, attributes, element);
    }
    function claim_svg_element(nodes, name, attributes) {
      return claim_element_base(nodes, name, attributes, svg_element);
    }
    function claim_text(nodes, data) {
      return claim_node(
        nodes,
        (node) => node.nodeType === 3,
        (node) => {
          const dataStr = "" + data;
          if (node.data.startsWith(dataStr)) {
            if (node.data.length !== dataStr.length) {
              return node.splitText(dataStr.length);
            }
          } else {
            node.data = dataStr;
          }
        },
        () => text(data),
        true
        // Text nodes should not update last index since it is likely not worth it to eliminate an increasing subsequence of actual elements
      );
    }
    function claim_space(nodes) {
      return claim_text(nodes, " ");
    }
    function claim_comment(nodes, data) {
      return claim_node(nodes, (node) => node.nodeType === 8, (node) => {
        node.data = "" + data;
        return void 0;
      }, () => comment(data), true);
    }
    function find_comment(nodes, text2, start) {
      for (let i = start; i < nodes.length; i += 1) {
        const node = nodes[i];
        if (node.nodeType === 8 && node.textContent.trim() === text2) {
          return i;
        }
      }
      return nodes.length;
    }
    function claim_html_tag(nodes, is_svg) {
      const start_index = find_comment(nodes, "HTML_TAG_START", 0);
      const end_index = find_comment(nodes, "HTML_TAG_END", start_index);
      if (start_index === end_index) {
        return new HtmlTagHydration(void 0, is_svg);
      }
      init_claim_info(nodes);
      const html_tag_nodes = nodes.splice(start_index, end_index - start_index + 1);
      detach(html_tag_nodes[0]);
      detach(html_tag_nodes[html_tag_nodes.length - 1]);
      const claimed_nodes = html_tag_nodes.slice(1, html_tag_nodes.length - 1);
      for (const n of claimed_nodes) {
        n.claim_order = nodes.claim_info.total_claimed;
        nodes.claim_info.total_claimed += 1;
      }
      return new HtmlTagHydration(claimed_nodes, is_svg);
    }
    function set_data(text2, data) {
      data = "" + data;
      if (text2.data === data)
        return;
      text2.data = data;
    }
    function set_data_contenteditable(text2, data) {
      data = "" + data;
      if (text2.wholeText === data)
        return;
      text2.data = data;
    }
    function set_data_maybe_contenteditable(text2, data, attr_value) {
      if (~contenteditable_truthy_values.indexOf(attr_value)) {
        set_data_contenteditable(text2, data);
      } else {
        set_data(text2, data);
      }
    }
    function set_input_value(input, value) {
      input.value = value == null ? "" : value;
    }
    function set_input_type(input, type) {
      try {
        input.type = type;
      } catch (e) {
      }
    }
    function set_style(node, key, value, important) {
      if (value == null) {
        node.style.removeProperty(key);
      } else {
        node.style.setProperty(key, value, important ? "important" : "");
      }
    }
    function select_option(select, value, mounting) {
      for (let i = 0; i < select.options.length; i += 1) {
        const option = select.options[i];
        if (option.__value === value) {
          option.selected = true;
          return;
        }
      }
      if (!mounting || value !== void 0) {
        select.selectedIndex = -1;
      }
    }
    function select_options(select, value) {
      for (let i = 0; i < select.options.length; i += 1) {
        const option = select.options[i];
        option.selected = ~value.indexOf(option.__value);
      }
    }
    function select_value(select) {
      const selected_option = select.querySelector(":checked");
      return selected_option && selected_option.__value;
    }
    function select_multiple_value(select) {
      return [].map.call(select.querySelectorAll(":checked"), (option) => option.__value);
    }
    var crossorigin;
    function is_crossorigin() {
      if (crossorigin === void 0) {
        crossorigin = false;
        try {
          if (typeof window !== "undefined" && window.parent) {
            void window.parent.document;
          }
        } catch (error) {
          crossorigin = true;
        }
      }
      return crossorigin;
    }
    function add_iframe_resize_listener(node, fn) {
      const computed_style = getComputedStyle(node);
      if (computed_style.position === "static") {
        node.style.position = "relative";
      }
      const iframe = element("iframe");
      iframe.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;");
      iframe.setAttribute("aria-hidden", "true");
      iframe.tabIndex = -1;
      const crossorigin2 = is_crossorigin();
      let unsubscribe;
      if (crossorigin2) {
        iframe.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>";
        unsubscribe = listen(window, "message", (event) => {
          if (event.source === iframe.contentWindow)
            fn();
        });
      } else {
        iframe.src = "about:blank";
        iframe.onload = () => {
          unsubscribe = listen(iframe.contentWindow, "resize", fn);
          fn();
        };
      }
      append(node, iframe);
      return () => {
        if (crossorigin2) {
          unsubscribe();
        } else if (unsubscribe && iframe.contentWindow) {
          unsubscribe();
        }
        detach(iframe);
      };
    }
    var resize_observer_content_box = /* @__PURE__ */ new ResizeObserverSingleton2({ box: "content-box" });
    var resize_observer_border_box = /* @__PURE__ */ new ResizeObserverSingleton2({ box: "border-box" });
    var resize_observer_device_pixel_content_box = /* @__PURE__ */ new ResizeObserverSingleton2({ box: "device-pixel-content-box" });
    function toggle_class(element2, name, toggle) {
      element2.classList[toggle ? "add" : "remove"](name);
    }
    function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
      const e = document.createEvent("CustomEvent");
      e.initCustomEvent(type, bubbles, cancelable, detail);
      return e;
    }
    function query_selector_all(selector, parent = document.body) {
      return Array.from(parent.querySelectorAll(selector));
    }
    function head_selector(nodeId, head) {
      const result = [];
      let started = 0;
      for (const node of head.childNodes) {
        if (node.nodeType === 8) {
          const comment2 = node.textContent.trim();
          if (comment2 === `HEAD_${nodeId}_END`) {
            started -= 1;
            result.push(node);
          } else if (comment2 === `HEAD_${nodeId}_START`) {
            started += 1;
            result.push(node);
          }
        } else if (started > 0) {
          result.push(node);
        }
      }
      return result;
    }
    var HtmlTag = class {
      constructor(is_svg = false) {
        this.is_svg = false;
        this.is_svg = is_svg;
        this.e = this.n = null;
      }
      c(html) {
        this.h(html);
      }
      m(html, target, anchor = null) {
        if (!this.e) {
          if (this.is_svg)
            this.e = svg_element(target.nodeName);
          else
            this.e = element(target.nodeType === 11 ? "TEMPLATE" : target.nodeName);
          this.t = target.tagName !== "TEMPLATE" ? target : target.content;
          this.c(html);
        }
        this.i(anchor);
      }
      h(html) {
        this.e.innerHTML = html;
        this.n = Array.from(this.e.nodeName === "TEMPLATE" ? this.e.content.childNodes : this.e.childNodes);
      }
      i(anchor) {
        for (let i = 0; i < this.n.length; i += 1) {
          insert(this.t, this.n[i], anchor);
        }
      }
      p(html) {
        this.d();
        this.h(html);
        this.i(this.a);
      }
      d() {
        this.n.forEach(detach);
      }
    };
    var HtmlTagHydration = class extends HtmlTag {
      constructor(claimed_nodes, is_svg = false) {
        super(is_svg);
        this.e = this.n = null;
        this.l = claimed_nodes;
      }
      c(html) {
        if (this.l) {
          this.n = this.l;
        } else {
          super.c(html);
        }
      }
      i(anchor) {
        for (let i = 0; i < this.n.length; i += 1) {
          insert_hydration(this.t, this.n[i], anchor);
        }
      }
    };
    function attribute_to_object(attributes) {
      const result = {};
      for (const attribute of attributes) {
        result[attribute.name] = attribute.value;
      }
      return result;
    }
    function get_custom_elements_slots(element2) {
      const result = {};
      element2.childNodes.forEach((node) => {
        result[node.slot || "default"] = true;
      });
      return result;
    }
    function construct_svelte_component(component, props) {
      return new component(props);
    }
    var managed_styles = /* @__PURE__ */ new Map();
    var active = 0;
    function hash(str) {
      let hash2 = 5381;
      let i = str.length;
      while (i--)
        hash2 = (hash2 << 5) - hash2 ^ str.charCodeAt(i);
      return hash2 >>> 0;
    }
    function create_style_information(doc, node) {
      const info = { stylesheet: append_empty_stylesheet(node), rules: {} };
      managed_styles.set(doc, info);
      return info;
    }
    function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
      const step = 16.666 / duration;
      let keyframes = "{\n";
      for (let p = 0; p <= 1; p += step) {
        const t = a + (b - a) * ease(p);
        keyframes += p * 100 + `%{${fn(t, 1 - t)}}
`;
      }
      const rule = keyframes + `100% {${fn(b, 1 - b)}}
}`;
      const name = `__svelte_${hash(rule)}_${uid}`;
      const doc = get_root_for_style(node);
      const { stylesheet, rules } = managed_styles.get(doc) || create_style_information(doc, node);
      if (!rules[name]) {
        rules[name] = true;
        stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
      }
      const animation = node.style.animation || "";
      node.style.animation = `${animation ? `${animation}, ` : ""}${name} ${duration}ms linear ${delay}ms 1 both`;
      active += 1;
      return name;
    }
    function delete_rule(node, name) {
      const previous = (node.style.animation || "").split(", ");
      const next = previous.filter(
        name ? (anim) => anim.indexOf(name) < 0 : (anim) => anim.indexOf("__svelte") === -1
        // remove all Svelte animations
      );
      const deleted = previous.length - next.length;
      if (deleted) {
        node.style.animation = next.join(", ");
        active -= deleted;
        if (!active)
          clear_rules();
      }
    }
    function clear_rules() {
      exports2.raf(() => {
        if (active)
          return;
        managed_styles.forEach((info) => {
          const { ownerNode } = info.stylesheet;
          if (ownerNode)
            detach(ownerNode);
        });
        managed_styles.clear();
      });
    }
    function create_animation(node, from, fn, params) {
      if (!from)
        return noop3;
      const to = node.getBoundingClientRect();
      if (from.left === to.left && from.right === to.right && from.top === to.top && from.bottom === to.bottom)
        return noop3;
      const {
        delay = 0,
        duration = 300,
        easing = identity,
        // @ts-ignore todo: should this be separated from destructuring? Or start/end added to public api and documentation?
        start: start_time = exports2.now() + delay,
        // @ts-ignore todo:
        end = start_time + duration,
        tick: tick2 = noop3,
        css
      } = fn(node, { from, to }, params);
      let running = true;
      let started = false;
      let name;
      function start() {
        if (css) {
          name = create_rule(node, 0, 1, duration, delay, easing, css);
        }
        if (!delay) {
          started = true;
        }
      }
      function stop() {
        if (css)
          delete_rule(node, name);
        running = false;
      }
      loop((now) => {
        if (!started && now >= start_time) {
          started = true;
        }
        if (started && now >= end) {
          tick2(1, 0);
          stop();
        }
        if (!running) {
          return false;
        }
        if (started) {
          const p = now - start_time;
          const t = 0 + 1 * easing(p / duration);
          tick2(t, 1 - t);
        }
        return true;
      });
      start();
      tick2(0, 1);
      return stop;
    }
    function fix_position(node) {
      const style = getComputedStyle(node);
      if (style.position !== "absolute" && style.position !== "fixed") {
        const { width, height } = style;
        const a = node.getBoundingClientRect();
        node.style.position = "absolute";
        node.style.width = width;
        node.style.height = height;
        add_transform(node, a);
      }
    }
    function add_transform(node, a) {
      const b = node.getBoundingClientRect();
      if (a.left !== b.left || a.top !== b.top) {
        const style = getComputedStyle(node);
        const transform = style.transform === "none" ? "" : style.transform;
        node.style.transform = `${transform} translate(${a.left - b.left}px, ${a.top - b.top}px)`;
      }
    }
    function set_current_component(component) {
      exports2.current_component = component;
    }
    function get_current_component() {
      if (!exports2.current_component)
        throw new Error("Function called outside component initialization");
      return exports2.current_component;
    }
    function beforeUpdate(fn) {
      get_current_component().$$.before_update.push(fn);
    }
    function onMount(fn) {
      get_current_component().$$.on_mount.push(fn);
    }
    function afterUpdate(fn) {
      get_current_component().$$.after_update.push(fn);
    }
    function onDestroy(fn) {
      get_current_component().$$.on_destroy.push(fn);
    }
    function createEventDispatcher() {
      const component = get_current_component();
      return (type, detail, { cancelable = false } = {}) => {
        const callbacks = component.$$.callbacks[type];
        if (callbacks) {
          const event = custom_event(type, detail, { cancelable });
          callbacks.slice().forEach((fn) => {
            fn.call(component, event);
          });
          return !event.defaultPrevented;
        }
        return true;
      };
    }
    function setContext(key, context) {
      get_current_component().$$.context.set(key, context);
      return context;
    }
    function getContext(key) {
      return get_current_component().$$.context.get(key);
    }
    function getAllContexts() {
      return get_current_component().$$.context;
    }
    function hasContext(key) {
      return get_current_component().$$.context.has(key);
    }
    function bubble(component, event) {
      const callbacks = component.$$.callbacks[event.type];
      if (callbacks) {
        callbacks.slice().forEach((fn) => fn.call(this, event));
      }
    }
    var dirty_components = [];
    var intros = { enabled: false };
    var binding_callbacks = [];
    var render_callbacks3 = [];
    var flush_callbacks = [];
    var resolved_promise = /* @__PURE__ */ Promise.resolve();
    var update_scheduled = false;
    function schedule_update() {
      if (!update_scheduled) {
        update_scheduled = true;
        resolved_promise.then(flush);
      }
    }
    function tick() {
      schedule_update();
      return resolved_promise;
    }
    function add_render_callback(fn) {
      render_callbacks3.push(fn);
    }
    function add_flush_callback(fn) {
      flush_callbacks.push(fn);
    }
    var seen_callbacks = /* @__PURE__ */ new Set();
    var flushidx = 0;
    function flush() {
      if (flushidx !== 0) {
        return;
      }
      const saved_component = exports2.current_component;
      do {
        try {
          while (flushidx < dirty_components.length) {
            const component = dirty_components[flushidx];
            flushidx++;
            set_current_component(component);
            update(component.$$);
          }
        } catch (e) {
          dirty_components.length = 0;
          flushidx = 0;
          throw e;
        }
        set_current_component(null);
        dirty_components.length = 0;
        flushidx = 0;
        while (binding_callbacks.length)
          binding_callbacks.pop()();
        for (let i = 0; i < render_callbacks3.length; i += 1) {
          const callback = render_callbacks3[i];
          if (!seen_callbacks.has(callback)) {
            seen_callbacks.add(callback);
            callback();
          }
        }
        render_callbacks3.length = 0;
      } while (dirty_components.length);
      while (flush_callbacks.length) {
        flush_callbacks.pop()();
      }
      update_scheduled = false;
      seen_callbacks.clear();
      set_current_component(saved_component);
    }
    function update($$) {
      if ($$.fragment !== null) {
        $$.update();
        run_all3($$.before_update);
        const dirty = $$.dirty;
        $$.dirty = [-1];
        $$.fragment && $$.fragment.p($$.ctx, dirty);
        $$.after_update.forEach(add_render_callback);
      }
    }
    function flush_render_callbacks3(fns) {
      const filtered = [];
      const targets = [];
      render_callbacks3.forEach((c) => fns.indexOf(c) === -1 ? filtered.push(c) : targets.push(c));
      targets.forEach((c) => c());
      render_callbacks3 = filtered;
    }
    var promise;
    function wait() {
      if (!promise) {
        promise = Promise.resolve();
        promise.then(() => {
          promise = null;
        });
      }
      return promise;
    }
    function dispatch(node, direction, kind) {
      node.dispatchEvent(custom_event(`${direction ? "intro" : "outro"}${kind}`));
    }
    var outroing = /* @__PURE__ */ new Set();
    var outros;
    function group_outros() {
      outros = {
        r: 0,
        c: [],
        p: outros
        // parent group
      };
    }
    function check_outros() {
      if (!outros.r) {
        run_all3(outros.c);
      }
      outros = outros.p;
    }
    function transition_in(block, local) {
      if (block && block.i) {
        outroing.delete(block);
        block.i(local);
      }
    }
    function transition_out(block, local, detach2, callback) {
      if (block && block.o) {
        if (outroing.has(block))
          return;
        outroing.add(block);
        outros.c.push(() => {
          outroing.delete(block);
          if (callback) {
            if (detach2)
              block.d(1);
            callback();
          }
        });
        block.o(local);
      } else if (callback) {
        callback();
      }
    }
    var null_transition = { duration: 0 };
    function create_in_transition(node, fn, params) {
      const options = { direction: "in" };
      let config = fn(node, params, options);
      let running = false;
      let animation_name;
      let task;
      let uid = 0;
      function cleanup() {
        if (animation_name)
          delete_rule(node, animation_name);
      }
      function go() {
        const { delay = 0, duration = 300, easing = identity, tick: tick2 = noop3, css } = config || null_transition;
        if (css)
          animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
        tick2(0, 1);
        const start_time = exports2.now() + delay;
        const end_time = start_time + duration;
        if (task)
          task.abort();
        running = true;
        add_render_callback(() => dispatch(node, true, "start"));
        task = loop((now) => {
          if (running) {
            if (now >= end_time) {
              tick2(1, 0);
              dispatch(node, true, "end");
              cleanup();
              return running = false;
            }
            if (now >= start_time) {
              const t = easing((now - start_time) / duration);
              tick2(t, 1 - t);
            }
          }
          return running;
        });
      }
      let started = false;
      return {
        start() {
          if (started)
            return;
          started = true;
          delete_rule(node);
          if (is_function3(config)) {
            config = config(options);
            wait().then(go);
          } else {
            go();
          }
        },
        invalidate() {
          started = false;
        },
        end() {
          if (running) {
            cleanup();
            running = false;
          }
        }
      };
    }
    function create_out_transition(node, fn, params) {
      const options = { direction: "out" };
      let config = fn(node, params, options);
      let running = true;
      let animation_name;
      const group = outros;
      group.r += 1;
      function go() {
        const { delay = 0, duration = 300, easing = identity, tick: tick2 = noop3, css } = config || null_transition;
        if (css)
          animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
        const start_time = exports2.now() + delay;
        const end_time = start_time + duration;
        add_render_callback(() => dispatch(node, false, "start"));
        loop((now) => {
          if (running) {
            if (now >= end_time) {
              tick2(0, 1);
              dispatch(node, false, "end");
              if (!--group.r) {
                run_all3(group.c);
              }
              return false;
            }
            if (now >= start_time) {
              const t = easing((now - start_time) / duration);
              tick2(1 - t, t);
            }
          }
          return running;
        });
      }
      if (is_function3(config)) {
        wait().then(() => {
          config = config(options);
          go();
        });
      } else {
        go();
      }
      return {
        end(reset) {
          if (reset && config.tick) {
            config.tick(1, 0);
          }
          if (running) {
            if (animation_name)
              delete_rule(node, animation_name);
            running = false;
          }
        }
      };
    }
    function create_bidirectional_transition(node, fn, params, intro) {
      const options = { direction: "both" };
      let config = fn(node, params, options);
      let t = intro ? 0 : 1;
      let running_program = null;
      let pending_program = null;
      let animation_name = null;
      function clear_animation() {
        if (animation_name)
          delete_rule(node, animation_name);
      }
      function init2(program, duration) {
        const d = program.b - t;
        duration *= Math.abs(d);
        return {
          a: t,
          b: program.b,
          d,
          duration,
          start: program.start,
          end: program.start + duration,
          group: program.group
        };
      }
      function go(b) {
        const { delay = 0, duration = 300, easing = identity, tick: tick2 = noop3, css } = config || null_transition;
        const program = {
          start: exports2.now() + delay,
          b
        };
        if (!b) {
          program.group = outros;
          outros.r += 1;
        }
        if (running_program || pending_program) {
          pending_program = program;
        } else {
          if (css) {
            clear_animation();
            animation_name = create_rule(node, t, b, duration, delay, easing, css);
          }
          if (b)
            tick2(0, 1);
          running_program = init2(program, duration);
          add_render_callback(() => dispatch(node, b, "start"));
          loop((now) => {
            if (pending_program && now > pending_program.start) {
              running_program = init2(pending_program, duration);
              pending_program = null;
              dispatch(node, running_program.b, "start");
              if (css) {
                clear_animation();
                animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
              }
            }
            if (running_program) {
              if (now >= running_program.end) {
                tick2(t = running_program.b, 1 - t);
                dispatch(node, running_program.b, "end");
                if (!pending_program) {
                  if (running_program.b) {
                    clear_animation();
                  } else {
                    if (!--running_program.group.r)
                      run_all3(running_program.group.c);
                  }
                }
                running_program = null;
              } else if (now >= running_program.start) {
                const p = now - running_program.start;
                t = running_program.a + running_program.d * easing(p / running_program.duration);
                tick2(t, 1 - t);
              }
            }
            return !!(running_program || pending_program);
          });
        }
      }
      return {
        run(b) {
          if (is_function3(config)) {
            wait().then(() => {
              config = config(options);
              go(b);
            });
          } else {
            go(b);
          }
        },
        end() {
          clear_animation();
          running_program = pending_program = null;
        }
      };
    }
    function handle_promise(promise2, info) {
      const token = info.token = {};
      function update2(type, index, key, value) {
        if (info.token !== token)
          return;
        info.resolved = value;
        let child_ctx = info.ctx;
        if (key !== void 0) {
          child_ctx = child_ctx.slice();
          child_ctx[key] = value;
        }
        const block = type && (info.current = type)(child_ctx);
        let needs_flush = false;
        if (info.block) {
          if (info.blocks) {
            info.blocks.forEach((block2, i) => {
              if (i !== index && block2) {
                group_outros();
                transition_out(block2, 1, 1, () => {
                  if (info.blocks[i] === block2) {
                    info.blocks[i] = null;
                  }
                });
                check_outros();
              }
            });
          } else {
            info.block.d(1);
          }
          block.c();
          transition_in(block, 1);
          block.m(info.mount(), info.anchor);
          needs_flush = true;
        }
        info.block = block;
        if (info.blocks)
          info.blocks[index] = block;
        if (needs_flush) {
          flush();
        }
      }
      if (is_promise(promise2)) {
        const current_component = get_current_component();
        promise2.then((value) => {
          set_current_component(current_component);
          update2(info.then, 1, info.value, value);
          set_current_component(null);
        }, (error) => {
          set_current_component(current_component);
          update2(info.catch, 2, info.error, error);
          set_current_component(null);
          if (!info.hasCatch) {
            throw error;
          }
        });
        if (info.current !== info.pending) {
          update2(info.pending, 0);
          return true;
        }
      } else {
        if (info.current !== info.then) {
          update2(info.then, 1, info.value, promise2);
          return true;
        }
        info.resolved = promise2;
      }
    }
    function update_await_block_branch(info, ctx, dirty) {
      const child_ctx = ctx.slice();
      const { resolved } = info;
      if (info.current === info.then) {
        child_ctx[info.value] = resolved;
      }
      if (info.current === info.catch) {
        child_ctx[info.error] = resolved;
      }
      info.block.p(child_ctx, dirty);
    }
    function destroy_block(block, lookup) {
      block.d(1);
      lookup.delete(block.key);
    }
    function outro_and_destroy_block(block, lookup) {
      transition_out(block, 1, 1, () => {
        lookup.delete(block.key);
      });
    }
    function fix_and_destroy_block(block, lookup) {
      block.f();
      destroy_block(block, lookup);
    }
    function fix_and_outro_and_destroy_block(block, lookup) {
      block.f();
      outro_and_destroy_block(block, lookup);
    }
    function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
      let o = old_blocks.length;
      let n = list.length;
      let i = o;
      const old_indexes = {};
      while (i--)
        old_indexes[old_blocks[i].key] = i;
      const new_blocks = [];
      const new_lookup = /* @__PURE__ */ new Map();
      const deltas = /* @__PURE__ */ new Map();
      const updates = [];
      i = n;
      while (i--) {
        const child_ctx = get_context(ctx, list, i);
        const key = get_key(child_ctx);
        let block = lookup.get(key);
        if (!block) {
          block = create_each_block(key, child_ctx);
          block.c();
        } else if (dynamic) {
          updates.push(() => block.p(child_ctx, dirty));
        }
        new_lookup.set(key, new_blocks[i] = block);
        if (key in old_indexes)
          deltas.set(key, Math.abs(i - old_indexes[key]));
      }
      const will_move = /* @__PURE__ */ new Set();
      const did_move = /* @__PURE__ */ new Set();
      function insert2(block) {
        transition_in(block, 1);
        block.m(node, next);
        lookup.set(block.key, block);
        next = block.first;
        n--;
      }
      while (o && n) {
        const new_block = new_blocks[n - 1];
        const old_block = old_blocks[o - 1];
        const new_key = new_block.key;
        const old_key = old_block.key;
        if (new_block === old_block) {
          next = new_block.first;
          o--;
          n--;
        } else if (!new_lookup.has(old_key)) {
          destroy(old_block, lookup);
          o--;
        } else if (!lookup.has(new_key) || will_move.has(new_key)) {
          insert2(new_block);
        } else if (did_move.has(old_key)) {
          o--;
        } else if (deltas.get(new_key) > deltas.get(old_key)) {
          did_move.add(new_key);
          insert2(new_block);
        } else {
          will_move.add(old_key);
          o--;
        }
      }
      while (o--) {
        const old_block = old_blocks[o];
        if (!new_lookup.has(old_block.key))
          destroy(old_block, lookup);
      }
      while (n)
        insert2(new_blocks[n - 1]);
      run_all3(updates);
      return new_blocks;
    }
    function validate_each_keys(ctx, list, get_context, get_key) {
      const keys = /* @__PURE__ */ new Set();
      for (let i = 0; i < list.length; i++) {
        const key = get_key(get_context(ctx, list, i));
        if (keys.has(key)) {
          throw new Error("Cannot have duplicate keys in a keyed each");
        }
        keys.add(key);
      }
    }
    function get_spread_update(levels, updates) {
      const update2 = {};
      const to_null_out = {};
      const accounted_for = { $$scope: 1 };
      let i = levels.length;
      while (i--) {
        const o = levels[i];
        const n = updates[i];
        if (n) {
          for (const key in o) {
            if (!(key in n))
              to_null_out[key] = 1;
          }
          for (const key in n) {
            if (!accounted_for[key]) {
              update2[key] = n[key];
              accounted_for[key] = 1;
            }
          }
          levels[i] = n;
        } else {
          for (const key in o) {
            accounted_for[key] = 1;
          }
        }
      }
      for (const key in to_null_out) {
        if (!(key in update2))
          update2[key] = void 0;
      }
      return update2;
    }
    function get_spread_object(spread_props) {
      return typeof spread_props === "object" && spread_props !== null ? spread_props : {};
    }
    var _boolean_attributes3 = [
      "allowfullscreen",
      "allowpaymentrequest",
      "async",
      "autofocus",
      "autoplay",
      "checked",
      "controls",
      "default",
      "defer",
      "disabled",
      "formnovalidate",
      "hidden",
      "inert",
      "ismap",
      "loop",
      "multiple",
      "muted",
      "nomodule",
      "novalidate",
      "open",
      "playsinline",
      "readonly",
      "required",
      "reversed",
      "selected"
    ];
    var boolean_attributes3 = /* @__PURE__ */ new Set([..._boolean_attributes3]);
    var void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
    function is_void(name) {
      return void_element_names.test(name) || name.toLowerCase() === "!doctype";
    }
    var invalid_attribute_name_character = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;
    function spread(args, attrs_to_add) {
      const attributes = Object.assign({}, ...args);
      if (attrs_to_add) {
        const classes_to_add = attrs_to_add.classes;
        const styles_to_add = attrs_to_add.styles;
        if (classes_to_add) {
          if (attributes.class == null) {
            attributes.class = classes_to_add;
          } else {
            attributes.class += " " + classes_to_add;
          }
        }
        if (styles_to_add) {
          if (attributes.style == null) {
            attributes.style = style_object_to_string(styles_to_add);
          } else {
            attributes.style = style_object_to_string(merge_ssr_styles(attributes.style, styles_to_add));
          }
        }
      }
      let str = "";
      Object.keys(attributes).forEach((name) => {
        if (invalid_attribute_name_character.test(name))
          return;
        const value = attributes[name];
        if (value === true)
          str += " " + name;
        else if (boolean_attributes3.has(name.toLowerCase())) {
          if (value)
            str += " " + name;
        } else if (value != null) {
          str += ` ${name}="${value}"`;
        }
      });
      return str;
    }
    function merge_ssr_styles(style_attribute, style_directive) {
      const style_object = {};
      for (const individual_style of style_attribute.split(";")) {
        const colon_index = individual_style.indexOf(":");
        const name = individual_style.slice(0, colon_index).trim();
        const value = individual_style.slice(colon_index + 1).trim();
        if (!name)
          continue;
        style_object[name] = value;
      }
      for (const name in style_directive) {
        const value = style_directive[name];
        if (value) {
          style_object[name] = value;
        } else {
          delete style_object[name];
        }
      }
      return style_object;
    }
    var ATTR_REGEX = /[&"]/g;
    var CONTENT_REGEX = /[&<]/g;
    function escape(value, is_attr = false) {
      const str = String(value);
      const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
      pattern.lastIndex = 0;
      let escaped = "";
      let last = 0;
      while (pattern.test(str)) {
        const i = pattern.lastIndex - 1;
        const ch = str[i];
        escaped += str.substring(last, i) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
        last = i + 1;
      }
      return escaped + str.substring(last);
    }
    function escape_attribute_value(value) {
      const should_escape = typeof value === "string" || value && typeof value === "object";
      return should_escape ? escape(value, true) : value;
    }
    function escape_object(obj) {
      const result = {};
      for (const key in obj) {
        result[key] = escape_attribute_value(obj[key]);
      }
      return result;
    }
    function each(items, fn) {
      let str = "";
      for (let i = 0; i < items.length; i += 1) {
        str += fn(items[i], i);
      }
      return str;
    }
    var missing_component = {
      $$render: () => ""
    };
    function validate_component(component, name) {
      if (!component || !component.$$render) {
        if (name === "svelte:component")
          name += " this={...}";
        throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${name}>.`);
      }
      return component;
    }
    function debug(file, line, column, values) {
      console.log(`{@debug} ${file ? file + " " : ""}(${line}:${column})`);
      console.log(values);
      return "";
    }
    var on_destroy;
    function create_ssr_component(fn) {
      function $$render(result, props, bindings, slots, context) {
        const parent_component = exports2.current_component;
        const $$ = {
          on_destroy,
          context: new Map(context || (parent_component ? parent_component.$$.context : [])),
          // these will be immediately discarded
          on_mount: [],
          before_update: [],
          after_update: [],
          callbacks: blank_object()
        };
        set_current_component({ $$ });
        const html = fn(result, props, bindings, slots);
        set_current_component(parent_component);
        return html;
      }
      return {
        render: (props = {}, { $$slots = {}, context = /* @__PURE__ */ new Map() } = {}) => {
          on_destroy = [];
          const result = { title: "", head: "", css: /* @__PURE__ */ new Set() };
          const html = $$render(result, props, {}, $$slots, context);
          run_all3(on_destroy);
          return {
            html,
            css: {
              code: Array.from(result.css).map((css) => css.code).join("\n"),
              map: null
              // TODO
            },
            head: result.title + result.head
          };
        },
        $$render
      };
    }
    function add_attribute(name, value, boolean) {
      if (value == null || boolean && !value)
        return "";
      const assignment = boolean && value === true ? "" : `="${escape(value, true)}"`;
      return ` ${name}${assignment}`;
    }
    function add_classes(classes) {
      return classes ? ` class="${classes}"` : "";
    }
    function style_object_to_string(style_object) {
      return Object.keys(style_object).filter((key) => style_object[key]).map((key) => `${key}: ${escape_attribute_value(style_object[key])};`).join(" ");
    }
    function add_styles(style_object) {
      const styles = style_object_to_string(style_object);
      return styles ? ` style="${styles}"` : "";
    }
    function bind(component, name, callback) {
      const index = component.$$.props[name];
      if (index !== void 0) {
        component.$$.bound[index] = callback;
        callback(component.$$.ctx[index]);
      }
    }
    function create_component(block) {
      block && block.c();
    }
    function claim_component(block, parent_nodes) {
      block && block.l(parent_nodes);
    }
    function mount_component(component, target, anchor, customElement) {
      const { fragment, after_update } = component.$$;
      fragment && fragment.m(target, anchor);
      if (!customElement) {
        add_render_callback(() => {
          const new_on_destroy = component.$$.on_mount.map(run3).filter(is_function3);
          if (component.$$.on_destroy) {
            component.$$.on_destroy.push(...new_on_destroy);
          } else {
            run_all3(new_on_destroy);
          }
          component.$$.on_mount = [];
        });
      }
      after_update.forEach(add_render_callback);
    }
    function destroy_component3(component, detaching) {
      const $$ = component.$$;
      if ($$.fragment !== null) {
        flush_render_callbacks3($$.after_update);
        run_all3($$.on_destroy);
        $$.fragment && $$.fragment.d(detaching);
        $$.on_destroy = $$.fragment = null;
        $$.ctx = [];
      }
    }
    function make_dirty(component, i) {
      if (component.$$.dirty[0] === -1) {
        dirty_components.push(component);
        schedule_update();
        component.$$.dirty.fill(0);
      }
      component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
    }
    function init(component, options, instance, create_fragment, not_equal2, props, append_styles2, dirty = [-1]) {
      const parent_component = exports2.current_component;
      set_current_component(component);
      const $$ = component.$$ = {
        fragment: null,
        ctx: [],
        // state
        props,
        update: noop3,
        not_equal: not_equal2,
        bound: blank_object(),
        // lifecycle
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
        // everything else
        callbacks: blank_object(),
        dirty,
        skip_bound: false,
        root: options.target || parent_component.$$.root
      };
      append_styles2 && append_styles2($$.root);
      let ready = false;
      $$.ctx = instance ? instance(component, options.props || {}, (i, ret, ...rest) => {
        const value = rest.length ? rest[0] : ret;
        if ($$.ctx && not_equal2($$.ctx[i], $$.ctx[i] = value)) {
          if (!$$.skip_bound && $$.bound[i])
            $$.bound[i](value);
          if (ready)
            make_dirty(component, i);
        }
        return ret;
      }) : [];
      $$.update();
      ready = true;
      run_all3($$.before_update);
      $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
      if (options.target) {
        if (options.hydrate) {
          start_hydrating();
          const nodes = children(options.target);
          $$.fragment && $$.fragment.l(nodes);
          nodes.forEach(detach);
        } else {
          $$.fragment && $$.fragment.c();
        }
        if (options.intro)
          transition_in(component.$$.fragment);
        mount_component(component, options.target, options.anchor, options.customElement);
        end_hydrating();
        flush();
      }
      set_current_component(parent_component);
    }
    if (typeof HTMLElement === "function") {
      exports2.SvelteElement = class extends HTMLElement {
        constructor() {
          super();
          this.attachShadow({ mode: "open" });
        }
        connectedCallback() {
          const { on_mount } = this.$$;
          this.$$.on_disconnect = on_mount.map(run3).filter(is_function3);
          for (const key in this.$$.slotted) {
            this.appendChild(this.$$.slotted[key]);
          }
        }
        attributeChangedCallback(attr2, _oldValue, newValue) {
          this[attr2] = newValue;
        }
        disconnectedCallback() {
          run_all3(this.$$.on_disconnect);
        }
        $destroy() {
          destroy_component3(this, 1);
          this.$destroy = noop3;
        }
        $on(type, callback) {
          if (!is_function3(callback)) {
            return noop3;
          }
          const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
          callbacks.push(callback);
          return () => {
            const index = callbacks.indexOf(callback);
            if (index !== -1)
              callbacks.splice(index, 1);
          };
        }
        $set($$props) {
          if (this.$$set && !is_empty3($$props)) {
            this.$$.skip_bound = true;
            this.$$set($$props);
            this.$$.skip_bound = false;
          }
        }
      };
    }
    var SvelteComponent = class {
      $destroy() {
        destroy_component3(this, 1);
        this.$destroy = noop3;
      }
      $on(type, callback) {
        if (!is_function3(callback)) {
          return noop3;
        }
        const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
        callbacks.push(callback);
        return () => {
          const index = callbacks.indexOf(callback);
          if (index !== -1)
            callbacks.splice(index, 1);
        };
      }
      $set($$props) {
        if (this.$$set && !is_empty3($$props)) {
          this.$$.skip_bound = true;
          this.$$set($$props);
          this.$$.skip_bound = false;
        }
      }
    };
    function dispatch_dev(type, detail) {
      document.dispatchEvent(custom_event(type, Object.assign({ version: "3.59.1" }, detail), { bubbles: true }));
    }
    function append_dev(target, node) {
      dispatch_dev("SvelteDOMInsert", { target, node });
      append(target, node);
    }
    function append_hydration_dev(target, node) {
      dispatch_dev("SvelteDOMInsert", { target, node });
      append_hydration(target, node);
    }
    function insert_dev(target, node, anchor) {
      dispatch_dev("SvelteDOMInsert", { target, node, anchor });
      insert(target, node, anchor);
    }
    function insert_hydration_dev(target, node, anchor) {
      dispatch_dev("SvelteDOMInsert", { target, node, anchor });
      insert_hydration(target, node, anchor);
    }
    function detach_dev(node) {
      dispatch_dev("SvelteDOMRemove", { node });
      detach(node);
    }
    function detach_between_dev(before, after) {
      while (before.nextSibling && before.nextSibling !== after) {
        detach_dev(before.nextSibling);
      }
    }
    function detach_before_dev(after) {
      while (after.previousSibling) {
        detach_dev(after.previousSibling);
      }
    }
    function detach_after_dev(before) {
      while (before.nextSibling) {
        detach_dev(before.nextSibling);
      }
    }
    function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation, has_stop_immediate_propagation) {
      const modifiers = options === true ? ["capture"] : options ? Array.from(Object.keys(options)) : [];
      if (has_prevent_default)
        modifiers.push("preventDefault");
      if (has_stop_propagation)
        modifiers.push("stopPropagation");
      if (has_stop_immediate_propagation)
        modifiers.push("stopImmediatePropagation");
      dispatch_dev("SvelteDOMAddEventListener", { node, event, handler, modifiers });
      const dispose = listen(node, event, handler, options);
      return () => {
        dispatch_dev("SvelteDOMRemoveEventListener", { node, event, handler, modifiers });
        dispose();
      };
    }
    function attr_dev(node, attribute, value) {
      attr(node, attribute, value);
      if (value == null)
        dispatch_dev("SvelteDOMRemoveAttribute", { node, attribute });
      else
        dispatch_dev("SvelteDOMSetAttribute", { node, attribute, value });
    }
    function prop_dev(node, property, value) {
      node[property] = value;
      dispatch_dev("SvelteDOMSetProperty", { node, property, value });
    }
    function dataset_dev(node, property, value) {
      node.dataset[property] = value;
      dispatch_dev("SvelteDOMSetDataset", { node, property, value });
    }
    function set_data_dev(text2, data) {
      data = "" + data;
      if (text2.data === data)
        return;
      dispatch_dev("SvelteDOMSetData", { node: text2, data });
      text2.data = data;
    }
    function set_data_contenteditable_dev(text2, data) {
      data = "" + data;
      if (text2.wholeText === data)
        return;
      dispatch_dev("SvelteDOMSetData", { node: text2, data });
      text2.data = data;
    }
    function set_data_maybe_contenteditable_dev(text2, data, attr_value) {
      if (~contenteditable_truthy_values.indexOf(attr_value)) {
        set_data_contenteditable_dev(text2, data);
      } else {
        set_data_dev(text2, data);
      }
    }
    function validate_each_argument(arg) {
      if (typeof arg !== "string" && !(arg && typeof arg === "object" && "length" in arg)) {
        let msg = "{#each} only iterates over array-like objects.";
        if (typeof Symbol === "function" && arg && Symbol.iterator in arg) {
          msg += " You can use a spread to convert this iterable into an array.";
        }
        throw new Error(msg);
      }
    }
    function validate_slots(name, slot, keys) {
      for (const slot_key of Object.keys(slot)) {
        if (!~keys.indexOf(slot_key)) {
          console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
        }
      }
    }
    function validate_dynamic_element(tag) {
      const is_string = typeof tag === "string";
      if (tag && !is_string) {
        throw new Error('<svelte:element> expects "this" attribute to be a string.');
      }
    }
    function validate_void_dynamic_element(tag) {
      if (tag && is_void(tag)) {
        console.warn(`<svelte:element this="${tag}"> is self-closing and cannot have content.`);
      }
    }
    function construct_svelte_component_dev(component, props) {
      const error_message = "this={...} of <svelte:component> should specify a Svelte component.";
      try {
        const instance = new component(props);
        if (!instance.$$ || !instance.$set || !instance.$on || !instance.$destroy) {
          throw new Error(error_message);
        }
        return instance;
      } catch (err) {
        const { message } = err;
        if (typeof message === "string" && message.indexOf("is not a constructor") !== -1) {
          throw new Error(error_message);
        } else {
          throw err;
        }
      }
    }
    var SvelteComponentDev = class extends SvelteComponent {
      constructor(options) {
        if (!options || !options.target && !options.$$inline) {
          throw new Error("'target' is a required option");
        }
        super();
      }
      $destroy() {
        super.$destroy();
        this.$destroy = () => {
          console.warn("Component was already destroyed");
        };
      }
      $capture_state() {
      }
      $inject_state() {
      }
    };
    var SvelteComponentTyped = class extends SvelteComponentDev {
      constructor(options) {
        super(options);
      }
    };
    function loop_guard(timeout) {
      const start = Date.now();
      return () => {
        if (Date.now() - start > timeout) {
          throw new Error("Infinite loop detected");
        }
      };
    }
    exports2.HtmlTag = HtmlTag;
    exports2.HtmlTagHydration = HtmlTagHydration;
    exports2.ResizeObserverSingleton = ResizeObserverSingleton2;
    exports2.SvelteComponent = SvelteComponent;
    exports2.SvelteComponentDev = SvelteComponentDev;
    exports2.SvelteComponentTyped = SvelteComponentTyped;
    exports2.action_destroyer = action_destroyer;
    exports2.add_attribute = add_attribute;
    exports2.add_classes = add_classes;
    exports2.add_flush_callback = add_flush_callback;
    exports2.add_iframe_resize_listener = add_iframe_resize_listener;
    exports2.add_location = add_location;
    exports2.add_render_callback = add_render_callback;
    exports2.add_styles = add_styles;
    exports2.add_transform = add_transform;
    exports2.afterUpdate = afterUpdate;
    exports2.append = append;
    exports2.append_dev = append_dev;
    exports2.append_empty_stylesheet = append_empty_stylesheet;
    exports2.append_hydration = append_hydration;
    exports2.append_hydration_dev = append_hydration_dev;
    exports2.append_styles = append_styles;
    exports2.assign = assign;
    exports2.attr = attr;
    exports2.attr_dev = attr_dev;
    exports2.attribute_to_object = attribute_to_object;
    exports2.beforeUpdate = beforeUpdate;
    exports2.bind = bind;
    exports2.binding_callbacks = binding_callbacks;
    exports2.blank_object = blank_object;
    exports2.bubble = bubble;
    exports2.check_outros = check_outros;
    exports2.children = children;
    exports2.claim_comment = claim_comment;
    exports2.claim_component = claim_component;
    exports2.claim_element = claim_element;
    exports2.claim_html_tag = claim_html_tag;
    exports2.claim_space = claim_space;
    exports2.claim_svg_element = claim_svg_element;
    exports2.claim_text = claim_text;
    exports2.clear_loops = clear_loops;
    exports2.comment = comment;
    exports2.component_subscribe = component_subscribe;
    exports2.compute_rest_props = compute_rest_props;
    exports2.compute_slots = compute_slots;
    exports2.construct_svelte_component = construct_svelte_component;
    exports2.construct_svelte_component_dev = construct_svelte_component_dev;
    exports2.contenteditable_truthy_values = contenteditable_truthy_values;
    exports2.createEventDispatcher = createEventDispatcher;
    exports2.create_animation = create_animation;
    exports2.create_bidirectional_transition = create_bidirectional_transition;
    exports2.create_component = create_component;
    exports2.create_in_transition = create_in_transition;
    exports2.create_out_transition = create_out_transition;
    exports2.create_slot = create_slot;
    exports2.create_ssr_component = create_ssr_component;
    exports2.custom_event = custom_event;
    exports2.dataset_dev = dataset_dev;
    exports2.debug = debug;
    exports2.destroy_block = destroy_block;
    exports2.destroy_component = destroy_component3;
    exports2.destroy_each = destroy_each;
    exports2.detach = detach;
    exports2.detach_after_dev = detach_after_dev;
    exports2.detach_before_dev = detach_before_dev;
    exports2.detach_between_dev = detach_between_dev;
    exports2.detach_dev = detach_dev;
    exports2.dirty_components = dirty_components;
    exports2.dispatch_dev = dispatch_dev;
    exports2.each = each;
    exports2.element = element;
    exports2.element_is = element_is;
    exports2.empty = empty;
    exports2.end_hydrating = end_hydrating;
    exports2.escape = escape;
    exports2.escape_attribute_value = escape_attribute_value;
    exports2.escape_object = escape_object;
    exports2.exclude_internal_props = exclude_internal_props;
    exports2.fix_and_destroy_block = fix_and_destroy_block;
    exports2.fix_and_outro_and_destroy_block = fix_and_outro_and_destroy_block;
    exports2.fix_position = fix_position;
    exports2.flush = flush;
    exports2.flush_render_callbacks = flush_render_callbacks3;
    exports2.getAllContexts = getAllContexts;
    exports2.getContext = getContext;
    exports2.get_all_dirty_from_scope = get_all_dirty_from_scope;
    exports2.get_binding_group_value = get_binding_group_value;
    exports2.get_current_component = get_current_component;
    exports2.get_custom_elements_slots = get_custom_elements_slots;
    exports2.get_root_for_style = get_root_for_style;
    exports2.get_slot_changes = get_slot_changes;
    exports2.get_spread_object = get_spread_object;
    exports2.get_spread_update = get_spread_update;
    exports2.get_store_value = get_store_value2;
    exports2.globals = globals3;
    exports2.group_outros = group_outros;
    exports2.handle_promise = handle_promise;
    exports2.hasContext = hasContext;
    exports2.has_prop = has_prop;
    exports2.head_selector = head_selector;
    exports2.identity = identity;
    exports2.init = init;
    exports2.init_binding_group = init_binding_group;
    exports2.init_binding_group_dynamic = init_binding_group_dynamic;
    exports2.insert = insert;
    exports2.insert_dev = insert_dev;
    exports2.insert_hydration = insert_hydration;
    exports2.insert_hydration_dev = insert_hydration_dev;
    exports2.intros = intros;
    exports2.invalid_attribute_name_character = invalid_attribute_name_character;
    exports2.is_client = is_client;
    exports2.is_crossorigin = is_crossorigin;
    exports2.is_empty = is_empty3;
    exports2.is_function = is_function3;
    exports2.is_promise = is_promise;
    exports2.is_void = is_void;
    exports2.listen = listen;
    exports2.listen_dev = listen_dev;
    exports2.loop = loop;
    exports2.loop_guard = loop_guard;
    exports2.merge_ssr_styles = merge_ssr_styles;
    exports2.missing_component = missing_component;
    exports2.mount_component = mount_component;
    exports2.noop = noop3;
    exports2.not_equal = not_equal;
    exports2.null_to_empty = null_to_empty;
    exports2.object_without_properties = object_without_properties;
    exports2.onDestroy = onDestroy;
    exports2.onMount = onMount;
    exports2.once = once;
    exports2.outro_and_destroy_block = outro_and_destroy_block;
    exports2.prevent_default = prevent_default;
    exports2.prop_dev = prop_dev;
    exports2.query_selector_all = query_selector_all;
    exports2.resize_observer_border_box = resize_observer_border_box;
    exports2.resize_observer_content_box = resize_observer_content_box;
    exports2.resize_observer_device_pixel_content_box = resize_observer_device_pixel_content_box;
    exports2.run = run3;
    exports2.run_all = run_all3;
    exports2.safe_not_equal = safe_not_equal2;
    exports2.schedule_update = schedule_update;
    exports2.select_multiple_value = select_multiple_value;
    exports2.select_option = select_option;
    exports2.select_options = select_options;
    exports2.select_value = select_value;
    exports2.self = self;
    exports2.setContext = setContext;
    exports2.set_attributes = set_attributes;
    exports2.set_current_component = set_current_component;
    exports2.set_custom_element_data = set_custom_element_data;
    exports2.set_custom_element_data_map = set_custom_element_data_map;
    exports2.set_data = set_data;
    exports2.set_data_contenteditable = set_data_contenteditable;
    exports2.set_data_contenteditable_dev = set_data_contenteditable_dev;
    exports2.set_data_dev = set_data_dev;
    exports2.set_data_maybe_contenteditable = set_data_maybe_contenteditable;
    exports2.set_data_maybe_contenteditable_dev = set_data_maybe_contenteditable_dev;
    exports2.set_dynamic_element_data = set_dynamic_element_data;
    exports2.set_input_type = set_input_type;
    exports2.set_input_value = set_input_value;
    exports2.set_now = set_now;
    exports2.set_raf = set_raf;
    exports2.set_store_value = set_store_value;
    exports2.set_style = set_style;
    exports2.set_svg_attributes = set_svg_attributes;
    exports2.space = space;
    exports2.split_css_unit = split_css_unit;
    exports2.spread = spread;
    exports2.src_url_equal = src_url_equal;
    exports2.start_hydrating = start_hydrating;
    exports2.stop_immediate_propagation = stop_immediate_propagation;
    exports2.stop_propagation = stop_propagation;
    exports2.subscribe = subscribe2;
    exports2.svg_element = svg_element;
    exports2.text = text;
    exports2.tick = tick;
    exports2.time_ranges_to_array = time_ranges_to_array;
    exports2.to_number = to_number;
    exports2.toggle_class = toggle_class;
    exports2.transition_in = transition_in;
    exports2.transition_out = transition_out;
    exports2.trusted = trusted;
    exports2.update_await_block_branch = update_await_block_branch;
    exports2.update_keyed_each = update_keyed_each;
    exports2.update_slot = update_slot;
    exports2.update_slot_base = update_slot_base;
    exports2.validate_component = validate_component;
    exports2.validate_dynamic_element = validate_dynamic_element;
    exports2.validate_each_argument = validate_each_argument;
    exports2.validate_each_keys = validate_each_keys;
    exports2.validate_slots = validate_slots;
    exports2.validate_store = validate_store;
    exports2.validate_void_dynamic_element = validate_void_dynamic_element;
    exports2.xlink_attr = xlink_attr;
  }
});

// node_modules/svelte/internal/index.mjs
function noop() {
}
function run(fn) {
  return fn();
}
function run_all(fns) {
  fns.forEach(run);
}
function is_function(thing) {
  return typeof thing === "function";
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
function is_empty(obj) {
  return Object.keys(obj).length === 0;
}
function flush_render_callbacks(fns) {
  const filtered = [];
  const targets = [];
  render_callbacks.forEach((c) => fns.indexOf(c) === -1 ? filtered.push(c) : targets.push(c));
  targets.forEach((c) => c());
  render_callbacks = filtered;
}
function destroy_component(component, detaching) {
  const $$ = component.$$;
  if ($$.fragment !== null) {
    flush_render_callbacks($$.after_update);
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching);
    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}
var globals, ResizeObserverSingleton, render_callbacks, _boolean_attributes, boolean_attributes, SvelteElement;
var init_internal = __esm({
  "node_modules/svelte/internal/index.mjs"() {
    globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : global;
    ResizeObserverSingleton = class {
      constructor(options) {
        this.options = options;
        this._listeners = "WeakMap" in globals ? /* @__PURE__ */ new WeakMap() : void 0;
      }
      observe(element, listener) {
        this._listeners.set(element, listener);
        this._getObserver().observe(element, this.options);
        return () => {
          this._listeners.delete(element);
          this._observer.unobserve(element);
        };
      }
      _getObserver() {
        var _a;
        return (_a = this._observer) !== null && _a !== void 0 ? _a : this._observer = new ResizeObserver((entries) => {
          var _a2;
          for (const entry of entries) {
            ResizeObserverSingleton.entries.set(entry.target, entry);
            (_a2 = this._listeners.get(entry.target)) === null || _a2 === void 0 ? void 0 : _a2(entry);
          }
        });
      }
    };
    ResizeObserverSingleton.entries = "WeakMap" in globals ? /* @__PURE__ */ new WeakMap() : void 0;
    render_callbacks = [];
    _boolean_attributes = [
      "allowfullscreen",
      "allowpaymentrequest",
      "async",
      "autofocus",
      "autoplay",
      "checked",
      "controls",
      "default",
      "defer",
      "disabled",
      "formnovalidate",
      "hidden",
      "inert",
      "ismap",
      "loop",
      "multiple",
      "muted",
      "nomodule",
      "novalidate",
      "open",
      "playsinline",
      "readonly",
      "required",
      "reversed",
      "selected"
    ];
    boolean_attributes = /* @__PURE__ */ new Set([..._boolean_attributes]);
    if (typeof HTMLElement === "function") {
      SvelteElement = class extends HTMLElement {
        constructor() {
          super();
          this.attachShadow({ mode: "open" });
        }
        connectedCallback() {
          const { on_mount } = this.$$;
          this.$$.on_disconnect = on_mount.map(run).filter(is_function);
          for (const key in this.$$.slotted) {
            this.appendChild(this.$$.slotted[key]);
          }
        }
        attributeChangedCallback(attr, _oldValue, newValue) {
          this[attr] = newValue;
        }
        disconnectedCallback() {
          run_all(this.$$.on_disconnect);
        }
        $destroy() {
          destroy_component(this, 1);
          this.$destroy = noop;
        }
        $on(type, callback) {
          if (!is_function(callback)) {
            return noop;
          }
          const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
          callbacks.push(callback);
          return () => {
            const index = callbacks.indexOf(callback);
            if (index !== -1)
              callbacks.splice(index, 1);
          };
        }
        $set($$props) {
          if (this.$$set && !is_empty($$props)) {
            this.$$.skip_bound = true;
            this.$$set($$props);
            this.$$.skip_bound = false;
          }
        }
      };
    }
  }
});

// node_modules/svelte/store/index.mjs
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run3, invalidate = noop) {
    const subscriber = [run3, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run3(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0 && stop) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
var subscriber_queue;
var init_store = __esm({
  "node_modules/svelte/store/index.mjs"() {
    init_internal();
    init_internal();
    subscriber_queue = [];
  }
});

// stores.js
var stores_exports = {};
__export(stores_exports, {
  customPercentStore: () => customPercentStore
});
var customPercentStore;
var init_stores = __esm({
  "stores.js"() {
    init_store();
    customPercentStore = writable(0);
  }
});

// svelte/Bank.svelte
var require_Bank = __commonJS({
  "svelte/Bank.svelte"(exports2) {
    "use strict";
    init_();
    var { add_attribute, create_ssr_component, escape, subscribe: subscribe2 } = require_internal();
    var { customPercentStore: customPercentStore2 } = (init_stores(), __toCommonJS(stores_exports));
    var css = {
      code: ".labels_around.svelte-1u1ao6y{display:flex;justify-content:space-between}",
      map: '{"version":3,"file":"Bank.svelte","sources":["Bank.svelte"],"sourcesContent":["<script>\\n    import { customPercentStore } from \\"../stores\\";\\n\\n    export let bank;\\n    export let carLease;\\n    export let kaibemakse;\\n    export let person;\\n    export let type;\\n    export let euroborPrices;\\n\\n    $: interest = 0;\\n    $: currentInterest =\\n        (bank.interest == 0 ? 0 : bank.interest) +\\n        (interest == 0 ? 0 : interest);\\n\\n    $: interestWithEurobor =\\n        currentInterest != 0\\n            ? Number(currentInterest) + Number(euroborPrices[bank.euroborAeg])\\n            : 0;\\n\\n    $: carPriceWithRemovedNumbers =\\n        carLease.price -\\n        (carLease.self_finance === \\"\\" ? 0 : carLease.self_finance) -\\n        (type == \\"kasutus\\"\\n            ? carLease.price_left === \\"\\"\\n                ? 0\\n                : carLease.price_left\\n            : 0);\\n    $: carPriceKM =\\n        carPriceWithRemovedNumbers *\\n        (person == \\"legal\\" ? 1 : kaibemakse) *\\n        (type == \\"kapital\\" ? 0.7 : 1);\\n\\n    $: monthlyPrice =\\n        Math.round(100 * ((interestWithEurobor / 100 / 12) * carPriceKM)) /\\n        (1 -\\n            1 / Math.pow(interestWithEurobor / 100 / 12 + 1, carLease.period)) /\\n        100;\\n\\n    // display stuff\\n    $: displayCarPriceKM = Number(carLease.price) * 1.2;\\n    $: displayCarPrice = Number(carLease.price);\\n    $: displayPriceLeft = Number(carLease.price_left);\\n\\n    // $: fullCarPriceWithKM =\\n    //     carLease.price * (person == \\"legal\\" ? 1 : kaibemakse);\\n\\n    // $: discountedCarPrice =\\n    //     fullCarPriceWithKM -\\n    //     (carLease.self_finance === \\"\\" ? 0 : carLease.self_finance) -\\n    //     (type == \\"kasutus\\"\\n    //         ? carLease.price_left === \\"\\"\\n    //             ? 0\\n    //             : carLease.price_left\\n    //         : 0);\\n</script>\\n\\n<!-- class=\\"block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 text-gray-700 font-semibold\\" -->\\n<!-- class=\\"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white\\" -->\\n<!-- <p class=\\"font-normal text-gray-700 dark:text-gray-400\\"> -->\\n<a\\n    href={`${bank.link ? bank.link : \\"#\\"}`}\\n    class=\\"block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 text-gray-700 font-semibold\\"\\n>\\n    {#if bank.logo !== \\"\\"}\\n        <img src={bank.logo} alt=\\"logo\\" width=\\"100\\" height=\\"300\\" class=\\"pb-2\\" />\\n    {:else}\\n        <h5 class=\\"mb-2 text-2xl font-bold tracking-tight text-gray-900\\">\\n            {bank.name}\\n        </h5>\\n    {/if}\\n    <div class=\\"flex flex-col\\">\\n        <div style=\\"min-width: 12em;\\" class=\\"labels_around\\">\\n            {#if bank.interest != null && bank.interest != 0 && bank.name != \\"Oma\\"}\\n                <p class=\\"text-gray-500 text-xs\\">Interest</p>\\n                <p class=\\"text-gray-500 font-normal\\">\\n                    {bank.interest.toFixed(2)}% + {bank.euroborAeg}\\n                </p>\\n            {:else}\\n                <p class=\\"text-gray-500 text-xs\\">Interest</p>\\n                <span>\\n                    <input\\n                        class=\\"appearance-none shadow-sm border border-gray-200 text-sm p-2 focus:outline-none focus:border-gray-500 rounded-lg w-24\\"\\n                        bind:value={bank.interest}\\n                        on:input={() => ($customPercentStore = bank.interest)}\\n                        id=\\"custom_interest\\"\\n                        type=\\"text\\"\\n                        name=\\"custom_interest\\"\\n                        placeholder=\\"Oma %\\"\\n                        style=\\"height: 1px;width: 70px;\\"\\n                    />\\n                    %\\n                </span>\\n            {/if}\\n        </div>\\n        <div style=\\"min-width: 12em;\\" class=\\"labels_around\\">\\n            <p class=\\"text-gray-500 text-xs\\">Hind (KM-ga)</p>\\n            <p class=\\"font-semibold\\">{displayCarPriceKM.toFixed(2)} \u20AC</p>\\n        </div>\\n        <div class=\\"labels_around\\">\\n            <p class=\\"text-gray-500 text-xs\\">Liisingusumma</p>\\n            <p>{displayCarPrice.toFixed(2)} \u20AC</p>\\n        </div>\\n        <div class=\\"labels_around\\">\\n            <p class=\\"text-gray-500 text-xs\\">KM</p>\\n            <p>{person == \\"private\\" ? 20 : 0} %</p>\\n        </div>\\n        <div class=\\"labels_around\\">\\n            <p class=\\"text-gray-500 text-xs\\">Periood</p>\\n            <p>{carLease.period}</p>\\n        </div>\\n        {#if type == \\"kasutus\\"}\\n            <div class=\\"labels_around\\">\\n                <p class=\\"text-gray-500 text-xs\\">J\xE4\xE4kv\xE4\xE4rtus</p>\\n                <p>{displayPriceLeft.toFixed(2)} \u20AC</p>\\n            </div>\\n        {/if}\\n    </div>\\n\\n    <p class=\\"font-semibold text-gray-700\\">\\n        {#if monthlyPrice.toFixed(2) > 1}\\n            {monthlyPrice.toFixed(2)} \u20AC\\n            {#if bank.electroCarSupport == true}\\n                <!-- {monthlyPrice.toFixed(2)} \u20AC -->\\n            {/if}\\n        {:else}\\n            viga\\n        {/if}\\n    </p>\\n</a>\\n\\n<style lang=\\"postcss\\">\\n    .labels_around {\\n        display: flex;\\n        justify-content: space-between;\\n    }\\n</style>\\n"],"names":[],"mappings":"AAoII,6BAAe,CACX,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aACrB"}'
    };
    var Bank = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let interest;
      let currentInterest;
      let interestWithEurobor;
      let carPriceWithRemovedNumbers;
      let carPriceKM;
      let monthlyPrice;
      let displayCarPriceKM;
      let displayCarPrice;
      let displayPriceLeft;
      let $customPercentStore, $$unsubscribe_customPercentStore;
      $$unsubscribe_customPercentStore = subscribe2(customPercentStore2, (value) => $customPercentStore = value);
      let { bank } = $$props;
      let { carLease } = $$props;
      let { kaibemakse } = $$props;
      let { person } = $$props;
      let { type } = $$props;
      let { euroborPrices } = $$props;
      if ($$props.bank === void 0 && $$bindings.bank && bank !== void 0)
        $$bindings.bank(bank);
      if ($$props.carLease === void 0 && $$bindings.carLease && carLease !== void 0)
        $$bindings.carLease(carLease);
      if ($$props.kaibemakse === void 0 && $$bindings.kaibemakse && kaibemakse !== void 0)
        $$bindings.kaibemakse(kaibemakse);
      if ($$props.person === void 0 && $$bindings.person && person !== void 0)
        $$bindings.person(person);
      if ($$props.type === void 0 && $$bindings.type && type !== void 0)
        $$bindings.type(type);
      if ($$props.euroborPrices === void 0 && $$bindings.euroborPrices && euroborPrices !== void 0)
        $$bindings.euroborPrices(euroborPrices);
      $$result.css.add(css);
      interest = 0;
      currentInterest = (bank.interest == 0 ? 0 : bank.interest) + (interest == 0 ? 0 : interest);
      interestWithEurobor = currentInterest != 0 ? Number(currentInterest) + Number(euroborPrices[bank.euroborAeg]) : 0;
      carPriceWithRemovedNumbers = carLease.price - (carLease.self_finance === "" ? 0 : carLease.self_finance) - (type == "kasutus" ? carLease.price_left === "" ? 0 : carLease.price_left : 0);
      carPriceKM = carPriceWithRemovedNumbers * (person == "legal" ? 1 : kaibemakse) * (type == "kapital" ? 0.7 : 1);
      monthlyPrice = Math.round(100 * (interestWithEurobor / 100 / 12 * carPriceKM)) / (1 - 1 / Math.pow(interestWithEurobor / 100 / 12 + 1, carLease.period)) / 100;
      displayCarPriceKM = Number(carLease.price) * 1.2;
      displayCarPrice = Number(carLease.price);
      displayPriceLeft = Number(carLease.price_left);
      $$unsubscribe_customPercentStore();
      return `


<a${add_attribute("href", `${bank.link ? bank.link : "#"}`, 0)} class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 text-gray-700 font-semibold">${bank.logo !== "" ? `<img${add_attribute("src", bank.logo, 0)} alt="logo" width="100" height="300" class="pb-2">` : `<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">${escape(bank.name)}</h5>`}
    <div class="flex flex-col"><div style="min-width: 12em;" class="labels_around svelte-1u1ao6y">${bank.interest != null && bank.interest != 0 && bank.name != "Oma" ? `<p class="text-gray-500 text-xs">Interest</p>
                <p class="text-gray-500 font-normal">${escape(bank.interest.toFixed(2))}% + ${escape(bank.euroborAeg)}</p>` : `<p class="text-gray-500 text-xs">Interest</p>
                <span><input class="appearance-none shadow-sm border border-gray-200 text-sm p-2 focus:outline-none focus:border-gray-500 rounded-lg w-24" id="custom_interest" type="text" name="custom_interest" placeholder="Oma %" style="height: 1px;width: 70px;"${add_attribute("value", bank.interest, 0)}>
                    %
                </span>`}</div>
        <div style="min-width: 12em;" class="labels_around svelte-1u1ao6y"><p class="text-gray-500 text-xs">Hind (KM-ga)</p>
            <p class="font-semibold">${escape(displayCarPriceKM.toFixed(2))} \u20AC</p></div>
        <div class="labels_around svelte-1u1ao6y"><p class="text-gray-500 text-xs">Liisingusumma</p>
            <p>${escape(displayCarPrice.toFixed(2))} \u20AC</p></div>
        <div class="labels_around svelte-1u1ao6y"><p class="text-gray-500 text-xs">KM</p>
            <p>${escape(person == "private" ? 20 : 0)} %</p></div>
        <div class="labels_around svelte-1u1ao6y"><p class="text-gray-500 text-xs">Periood</p>
            <p>${escape(carLease.period)}</p></div>
        ${type == "kasutus" ? `<div class="labels_around svelte-1u1ao6y"><p class="text-gray-500 text-xs">J\xE4\xE4kv\xE4\xE4rtus</p>
                <p>${escape(displayPriceLeft.toFixed(2))} \u20AC</p></div>` : ``}</div>

    <p class="font-semibold text-gray-700">${monthlyPrice.toFixed(2) > 1 ? `${escape(monthlyPrice.toFixed(2))} \u20AC
            ${bank.electroCarSupport == true ? `` : ``}` : `viga`}</p>
</a>`;
    });
    exports2.default = Bank;
  }
});

// node_modules/svelte/ssr.js
var require_ssr = __commonJS({
  "node_modules/svelte/ssr.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var internal = require_internal();
    function onMount() {
    }
    function beforeUpdate() {
    }
    function afterUpdate() {
    }
    Object.defineProperty(exports2, "SvelteComponent", {
      enumerable: true,
      get: function() {
        return internal.SvelteComponentDev;
      }
    });
    Object.defineProperty(exports2, "SvelteComponentTyped", {
      enumerable: true,
      get: function() {
        return internal.SvelteComponentTyped;
      }
    });
    Object.defineProperty(exports2, "createEventDispatcher", {
      enumerable: true,
      get: function() {
        return internal.createEventDispatcher;
      }
    });
    Object.defineProperty(exports2, "getAllContexts", {
      enumerable: true,
      get: function() {
        return internal.getAllContexts;
      }
    });
    Object.defineProperty(exports2, "getContext", {
      enumerable: true,
      get: function() {
        return internal.getContext;
      }
    });
    Object.defineProperty(exports2, "hasContext", {
      enumerable: true,
      get: function() {
        return internal.hasContext;
      }
    });
    Object.defineProperty(exports2, "onDestroy", {
      enumerable: true,
      get: function() {
        return internal.onDestroy;
      }
    });
    Object.defineProperty(exports2, "setContext", {
      enumerable: true,
      get: function() {
        return internal.setContext;
      }
    });
    Object.defineProperty(exports2, "tick", {
      enumerable: true,
      get: function() {
        return internal.tick;
      }
    });
    exports2.afterUpdate = afterUpdate;
    exports2.beforeUpdate = beforeUpdate;
    exports2.onMount = onMount;
  }
});

// svelte/Calculator.svelte
var require_Calculator = __commonJS({
  "svelte/Calculator.svelte"(exports2) {
    "use strict";
    var { add_attribute, create_ssr_component, each, subscribe: subscribe2, validate_component } = require_internal();
    var { afterUpdate, onDestroy, onMount } = require_ssr();
    var { customPercentStore: customPercentStore2 } = (init_stores(), __toCommonJS(stores_exports));
    var { default: Bank } = require_Bank();
    var Calculator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let charCount;
      let unixtime;
      let kaibemakse;
      let checked;
      let typeOfLease;
      let typeOfPerson;
      let customBank;
      let $customPercentStore, $$unsubscribe_customPercentStore;
      $$unsubscribe_customPercentStore = subscribe2(customPercentStore2, (value) => $customPercentStore = value);
      let { pointers } = $$props;
      let { carData } = $$props;
      let { carLease2 } = $$props;
      let { percentages2 } = $$props;
      let { typeOfPerson2 } = $$props;
      let { typeOfLease2 } = $$props;
      let { checked2 } = $$props;
      let { hind } = $$props;
      let { pushEvent } = $$props;
      let { customPercent } = $$props;
      function useEffect(cb, deps) {
        let cleanup;
        function apply() {
          if (cleanup)
            cleanup();
          cleanup = cb();
        }
        if (deps) {
          let values = [];
          afterUpdate(() => {
            const new_values = deps();
            if (new_values.some((value, i) => value !== values[i])) {
              apply();
              values = new_values;
            }
          });
        } else {
          afterUpdate(apply);
        }
        onDestroy(() => {
          if (cleanup)
            cleanup();
        });
      }
      let body = "";
      let messagesElement;
      function submitMessage() {
        if (body === "")
          return;
        pushEvent("send_message", { body });
        body = "";
      }
      onMount(async () => {
        const interval = setInterval(
          () => {
            unixtime = Date.now() / 1e3;
          },
          1e3
        );
        document.addEventListener("mousemove", (e) => {
          const new_x = e.pageX / window.innerWidth * 100;
          const new_y = e.pageY / window.innerHeight * 100;
          pushEvent("cursor-move", { new_x, new_y });
        });
      });
      console.log(hind);
      console.log("cardData");
      console.log(carData);
      let { touched = "" } = $$props;
      function handleChange2() {
        if (touched == "hind") {
          carLease2.self_finance = percentages2.self_finance * carLease2.price / 100;
          carLease2.self_finance = carLease2.self_finance.toFixed(2);
          carLease2.price_left = percentages2.price_left * carLease2.price / 100;
          carLease2.price_left = carLease2.price_left.toFixed(2);
        }
        if (touched == "self_finance") {
          percentages2.self_finance = carLease2.self_finance * 100 / carLease2.price;
          percentages2.self_finance = percentages2.self_finance.toFixed(2);
        }
        if (touched == "self_finance_per") {
          carLease2.self_finance = percentages2.self_finance * carLease2.price / 100;
          carLease2.self_finance = carLease2.self_finance.toFixed(2);
        }
        if (touched == "price_left") {
          percentages2.price_left = carLease2.price_left * 100 / carLease2.price;
          percentages2.price_left = percentages2.price_left.toFixed(2);
        }
        if (touched == "price_left_per") {
          carLease2.price_left = percentages2.price_left * carLease2.price / 100;
          carLease2.price_left = carLease2.price_left.toFixed(2);
        }
        checkedInverse = checked2;
        if (checked2 == true) {
          if (touched == "custom") {
            let checkedNew = checked2;
            if (checkedNew == false) {
              checkedInverse = true;
            } else {
              checkedInverse = false;
            }
          }
        }
        let customPercentNew = $customPercentStore;
        console.log("custom");
        console.log($customPercentStore);
        console.log(customPercent);
        pushEvent("updated-data", {
          carLease2,
          percentages2,
          typeOfLease2,
          typeOfPerson2,
          checkedInverse,
          customPercentNew
        });
      }
      useEffect(
        () => {
          handleChange2();
        },
        () => [$customPercentStore]
      );
      const banks = [
        {
          name: "SwedBank",
          interest: 2.29,
          logo: "/images/swedbank.jpg",
          link: "https://www.swedbank.ee/business/finance/leasing/car",
          euroborAeg: "6 kuu",
          electroCarSupport: true
        },
        {
          name: "LHV",
          interest: 1.95,
          logo: "/images/lhv.jpg",
          link: "https://www.lhv.ee/et/liising",
          euroborAeg: "6 kuu",
          electroCarSupport: false
        },
        {
          name: "SEB",
          interest: 1.45,
          logo: "/images/seb.jpg",
          link: "https://www.seb.ee/eraklient/laenud/liising-mugav-viis-soiduki-soetamiseks",
          euroborAeg: "6 kuu",
          electroCarSupport: false
        },
        {
          name: "COOP",
          interest: 1.99,
          logo: "/images/coop.jpg",
          link: "https://www.cooppank.ee/autoliising",
          euroborAeg: "6 kuu",
          electroCarSupport: false
        },
        {
          name: "Luminor",
          interest: 2.49,
          logo: "/images/luminor.png",
          link: "https://luminor.ee/era/liising?static=true",
          euroborAeg: "3 kuu",
          electroCarSupport: false
        }
      ];
      const euroborPrices = {
        "3 kuu": 3.388,
        "6 kuu": 3.671,
        "12 kuu": 3.834
      };
      if ($$props.pointers === void 0 && $$bindings.pointers && pointers !== void 0)
        $$bindings.pointers(pointers);
      if ($$props.carData === void 0 && $$bindings.carData && carData !== void 0)
        $$bindings.carData(carData);
      if ($$props.carLease2 === void 0 && $$bindings.carLease2 && carLease2 !== void 0)
        $$bindings.carLease2(carLease2);
      if ($$props.percentages2 === void 0 && $$bindings.percentages2 && percentages2 !== void 0)
        $$bindings.percentages2(percentages2);
      if ($$props.typeOfPerson2 === void 0 && $$bindings.typeOfPerson2 && typeOfPerson2 !== void 0)
        $$bindings.typeOfPerson2(typeOfPerson2);
      if ($$props.typeOfLease2 === void 0 && $$bindings.typeOfLease2 && typeOfLease2 !== void 0)
        $$bindings.typeOfLease2(typeOfLease2);
      if ($$props.checked2 === void 0 && $$bindings.checked2 && checked2 !== void 0)
        $$bindings.checked2(checked2);
      if ($$props.hind === void 0 && $$bindings.hind && hind !== void 0)
        $$bindings.hind(hind);
      if ($$props.pushEvent === void 0 && $$bindings.pushEvent && pushEvent !== void 0)
        $$bindings.pushEvent(pushEvent);
      if ($$props.customPercent === void 0 && $$bindings.customPercent && customPercent !== void 0)
        $$bindings.customPercent(customPercent);
      if ($$props.touched === void 0 && $$bindings.touched && touched !== void 0)
        $$bindings.touched(touched);
      charCount = body.length;
      unixtime = Date.now() / 1e3;
      kaibemakse = 1.2;
      checked = false;
      typeOfLease = "kasutus";
      typeOfPerson = "private";
      customBank = {
        name: "Oma",
        interest: customPercent,
        logo: "",
        euroborAeg: "6 kuu"
      };
      $$unsubscribe_customPercentStore();
      return `<div class="containter flex justify-center content-align-column"><h1 class="p-2 mb-6 font-bold text-3xl sm:text-5xl md:text-5xl">Autoliising Kalkulaator
    </h1></div>
<div class="containter flex justify-center content-align-column"><div><form action=""><div class="grid gap-6 mb-6 md:grid-cols-3"><div><select class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg w" name="" id="lease_type"><option value="kasutus">Kasutusrent</option><option value="kapital">Kapitalirent</option></select></div>
                <div><select class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg" name="" id="person_type"><option value="private">eraisikuna</option><option value="legal">juriidilise isikuna</option></select></div>
                <div><div class="flex justify-content-row"><input type="checkbox" class="relative h-5 w-5 cursor-pointer rounded-md border border-blue-gray-200 transition-all" id="oma_pank" name="oma_pank"${add_attribute("checked", checked2, 1)}>
                        <label for="oma_pank" class="pl-2">Oma Pank</label></div></div></div>
            <div class="grid gap-6 mb-6 md:grid-cols-2"><div><label for="price" class="block mb-2 text-sm font-medium text-gray-900">Hind</label>
                    <input class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg" type="text" id="price" name="price" placeholder="Hind"${add_attribute("value", carLease2.price, 0)}></div>
                <div><label for="length" class="block mb-2 text-sm font-medium text-gray-900">Periood</label>
                    <input class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg" id="length" type="text" name="length" placeholder="Periood"${add_attribute("value", carLease2.period, 0)}></div>
                <div><label for="oma_eur" class="block mb-2 text-sm font-medium text-gray-900">Omafinantseering \u20AC</label>
                    <input class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg" id="oma_eur" type="text" name="oma_eur" placeholder="Omafinantseering \u20AC"${add_attribute("value", carLease2.self_finance, 0)}></div>
                <div><label for="oma_eur_per" class="block mb-2 text-sm font-medium text-gray-900">Omafinantseering %</label>
                    <input class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg" id="oma_eur_per" type="text" name="oma_eur_per" placeholder="Omafinantseering %"${add_attribute("value", percentages2.self_finance, 0)}></div>
                ${typeOfLease2 == "kasutus" ? `<div><label for="jaak_eur" class="block mb-2 text-sm font-medium text-gray-900">J\xE4\xE4kv\xE4\xE4rtus \u20AC</label>
                        <input class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg" id="jaak_eur" type="text" name="jaak_eur" placeholder="J\xE4\xE4kv\xE4\xE4rtus \u20AC"${add_attribute("value", carLease2.price_left, 0)}></div>
                    <div><label for="jaak_eur" class="block mb-2 text-sm font-medium text-gray-900">J\xE4\xE4kv\xE4\xE4rtus %</label>
                        <input class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg" type="text" name="jaak_per" placeholder="J\xE4\xE4kv\xE4\xE4rtus % "${add_attribute("value", percentages2.price_left, 0)}></div>` : ``}</div></form></div></div>


<div class="containter flex justify-center"><div><div${add_attribute("class", `grid gap-6 mb-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1`, 0)}>${checked2 === true ? `<div>${validate_component(Bank, "Bank").$$render(
        $$result,
        {
          bank: customBank,
          carLease: carLease2,
          kaibemakse,
          type: typeOfLease2,
          person: typeOfPerson2,
          euroborPrices
        },
        {},
        {}
      )}</div>` : ``}
            ${each(banks, (bank) => {
        return `<div>${validate_component(Bank, "Bank").$$render(
          $$result,
          {
            bank,
            carLease: carLease2,
            kaibemakse,
            type: typeOfLease2,
            person: typeOfPerson2,
            euroborPrices
          },
          {},
          {}
        )}
                </div>`;
      })}</div></div></div>

<br>
<hr>
<br>

<div class="flex justify-center"><p class="text-gray-500 text-xs">*Tulemus on ligikaudne ja v\xF5ib erineda sulle pakutavatest tingimustest*
    </p></div>

${each(Object.entries(pointers), ([user_id, user_pointer]) => {
        return `${unixtime - user_pointer.unixtime < 5 ? `<ul class="list-none"${add_attribute("id", user_id, 0)}><li${add_attribute("style", "color: deeppink; left: " + user_pointer.x + "%; top: " + user_pointer.y + "%", 0)} class="flex flex-col absolute pointer-events-none whitespace-nowrap overflow-hidden"><svg version="1.1" width="25px" height="25px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 21 21"><polygon fill="black" points="8.2,20.9 8.2,4.9 19.8,16.5 13,16.5 12.6,16.6"></polygon><polygon fill="currentColor" points="9.2,7.3 9.2,18.5 12.2,15.6 12.6,15.5 17.4,15.5"></polygon></svg></li>
        </ul>` : ``}`;
      })}`;
    });
    exports2.default = Calculator;
  }
});

// fakecss:/Users/rossedwards/Desktop/Projects/SashaDon/autoliisingukalkulaator/assets/svelte/Header.esbuild-svelte-fake-css
var init_2 = __esm({
  "fakecss:/Users/rossedwards/Desktop/Projects/SashaDon/autoliisingukalkulaator/assets/svelte/Header.esbuild-svelte-fake-css"() {
  }
});

// svelte/Header.svelte
var require_Header = __commonJS({
  "svelte/Header.svelte"(exports2) {
    "use strict";
    init_2();
    var { create_ssr_component } = require_internal();
    var css = {
      code: "@import url('https://fonts.googleapis.com/css2?family=Orbit&family=PT+Mono&display=swap');",
      map: `{"version":3,"file":"Header.svelte","sources":["Header.svelte"],"sourcesContent":["<script>\\n</script>\\n\\n<style>\\n  @import url('https://fonts.googleapis.com/css2?family=Orbit&family=PT+Mono&display=swap');\\n</style>\\n\\n\\n<header class=\\"px-4 sm:px-6 lg:px-8\\">\\n    <div class=\\"flex items-center justify-between border-b border-zinc-100 py-3 text-sm\\">\\n        <div class=\\"flex items-center gap-4\\">\\n            <a href=\\"/\\">\\n            <h2 style=\\"    font-family: 'Orbit', sans-serif; font-family: 'PT Mono', monospace;\\">autokalk</h2>\\n            </a>\\n        </div>\\n        <div class=\\"flex items-center gap-4 font-semibold leading-6 text-zinc-900\\">\\n            <div class=\\"flex justify-center items-center h-full w-full\\">\\n                <form phx-submit=\\"set_session\\">\\n                    <!-- svelte-ignore a11y-autofocus -->\\n                    <input\\n                        type=\\"text\\"\\n                        placeholder=\\"Sessioon kood\\"\\n                        name=\\"session\\"\\n                        class=\\"rounded\\"\\n                        autofocus\\n                        autocomplete=\\"name\\"\\n                    />\\n                    <button class=\\"py-2 px-4 bg-black text-white rounded\\">Liitu sessioon</button>\\n                </form>\\n\\n                <button phx-click=\\"new_session\\" class=\\"py-2 px-4 bg-black text-white rounded\\">Uus sessioon</button>\\n            </div>\\n        </div>\\n    </div>\\n</header>\\n\\n\\n<div></div>\\n"],"names":[],"mappings":"AAIE,QAAQ,iFAAiF"}`
    };
    var Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css);
      return `<header class="px-4 sm:px-6 lg:px-8"><div class="flex items-center justify-between border-b border-zinc-100 py-3 text-sm"><div class="flex items-center gap-4"><a href="/"><h2 style="font-family: 'Orbit', sans-serif; font-family: 'PT Mono', monospace;">autokalk</h2></a></div>
        <div class="flex items-center gap-4 font-semibold leading-6 text-zinc-900"><div class="flex justify-center items-center h-full w-full"><form phx-submit="set_session">
                    <input type="text" placeholder="Sessioon kood" name="session" class="rounded" autofocus autocomplete="name">
                    <button class="py-2 px-4 bg-black text-white rounded">Liitu sessioon</button></form>

                <button phx-click="new_session" class="py-2 px-4 bg-black text-white rounded">Uus sessioon</button></div></div></div></header>


<div></div>`;
    });
    exports2.default = Header;
  }
});

// import-glob:../svelte/**/*
var __exports = {};
__export(__exports, {
  default: () => __default,
  filenames: () => filenames
});
var module0 = __toESM(require_Bank());
var module1 = __toESM(require_Calculator());
var module2 = __toESM(require_Header());
var modules = [module0, module1, module2];
var __default = modules;
var filenames = ["../svelte/Bank.svelte", "../svelte/Calculator.svelte", "../svelte/Header.svelte"];

// ../deps/live_svelte/priv/static/live_svelte.esm.js
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
function render(name, props = {}, slots = null) {
  if (__require.resolve(__filename) in __require.cache) {
    delete __require.cache[__require.resolve(__filename)];
  }
  const component = __require(__filename)[name].default;
  const $$slots = Object.fromEntries(Object.entries(slots).map(([k, v]) => [k, () => v])) || {};
  return component.render(props, { $$slots, context: /* @__PURE__ */ new Map() });
}
function noop2() {
}
function run2(fn) {
  return fn();
}
function run_all2(fns) {
  fns.forEach(run2);
}
function is_function2(thing) {
  return typeof thing === "function";
}
function is_empty2(obj) {
  return Object.keys(obj).length === 0;
}
var render_callbacks2 = [];
function flush_render_callbacks2(fns) {
  const filtered = [];
  const targets = [];
  render_callbacks2.forEach((c) => fns.indexOf(c) === -1 ? filtered.push(c) : targets.push(c));
  targets.forEach((c) => c());
  render_callbacks2 = filtered;
}
var globals2 = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : global;
var _boolean_attributes2 = [
  "allowfullscreen",
  "allowpaymentrequest",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "hidden",
  "inert",
  "ismap",
  "itemscope",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected"
];
var boolean_attributes2 = /* @__PURE__ */ new Set([..._boolean_attributes2]);
function destroy_component2(component, detaching) {
  const $$ = component.$$;
  if ($$.fragment !== null) {
    flush_render_callbacks2($$.after_update);
    run_all2($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching);
    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}
var SvelteElement2;
if (typeof HTMLElement === "function") {
  SvelteElement2 = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      const { on_mount } = this.$$;
      this.$$.on_disconnect = on_mount.map(run2).filter(is_function2);
      for (const key in this.$$.slotted) {
        this.appendChild(this.$$.slotted[key]);
      }
    }
    attributeChangedCallback(attr, _oldValue, newValue) {
      this[attr] = newValue;
    }
    disconnectedCallback() {
      run_all2(this.$$.on_disconnect);
    }
    $destroy() {
      destroy_component2(this, 1);
      this.$destroy = noop2;
    }
    $on(type, callback) {
      if (!is_function2(callback)) {
        return noop2;
      }
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index = callbacks.indexOf(callback);
        if (index !== -1)
          callbacks.splice(index, 1);
      };
    }
    $set($$props) {
      if (this.$$set && !is_empty2($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }
  };
}
function exportSvelteComponents(components) {
  let { default: modules2, filenames: filenames2 } = components;
  filenames2 = filenames2.map((name) => name.replace("../svelte/", "")).map((name) => name.replace(".svelte", ""));
  return Object.assign({}, ...modules2.map((m, index) => ({ [filenames2[index]]: m.default })));
}

// js/server.js
module.exports = exportSvelteComponents(__exports);
module.exports.ssrRenderComponent = render;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vYXNzZXRzL25vZGVfbW9kdWxlcy9zdmVsdGUvaW50ZXJuYWwvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vYXNzZXRzL25vZGVfbW9kdWxlcy9zdmVsdGUvaW50ZXJuYWwvaW5kZXgubWpzIiwgIi4uLy4uLy4uLy4uL2Fzc2V0cy9ub2RlX21vZHVsZXMvc3ZlbHRlL3N0b3JlL2luZGV4Lm1qcyIsICIuLi8uLi8uLi8uLi9hc3NldHMvc3RvcmVzLmpzIiwgIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdmVsdGUvQmFuay5zdmVsdGUiLCAiLi4vLi4vLi4vLi4vYXNzZXRzL25vZGVfbW9kdWxlcy9zdmVsdGUvc3NyLmpzIiwgIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdmVsdGUvQ2FsY3VsYXRvci5zdmVsdGUiLCAiaW1wb3J0LWdsb2I6Li4vc3ZlbHRlLyoqLyoiLCAiLi4vLi4vLi4vLi4vZGVwcy9saXZlX3N2ZWx0ZS9hc3NldHMvanMvbGl2ZV9zdmVsdGUvcmVuZGVyLmpzIiwgIi4uLy4uLy4uLy4uL2RlcHMvbGl2ZV9zdmVsdGUvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9pbnRlcm5hbC9pbmRleC5tanMiLCAiLi4vLi4vLi4vLi4vZGVwcy9saXZlX3N2ZWx0ZS9hc3NldHMvanMvbGl2ZV9zdmVsdGUvdXRpbHMuanMiLCAiLi4vLi4vLi4vLi4vZGVwcy9saXZlX3N2ZWx0ZS9hc3NldHMvanMvbGl2ZV9zdmVsdGUvaG9va3MuanMiLCAiLi4vLi4vLi4vLi4vYXNzZXRzL2pzL3NlcnZlci5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG5mdW5jdGlvbiBub29wKCkgeyB9XG5jb25zdCBpZGVudGl0eSA9IHggPT4geDtcbmZ1bmN0aW9uIGFzc2lnbih0YXIsIHNyYykge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBmb3IgKGNvbnN0IGsgaW4gc3JjKVxuICAgICAgICB0YXJba10gPSBzcmNba107XG4gICAgcmV0dXJuIHRhcjtcbn1cbi8vIEFkYXB0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vdGhlbi9pcy1wcm9taXNlL2Jsb2IvbWFzdGVyL2luZGV4LmpzXG4vLyBEaXN0cmlidXRlZCB1bmRlciBNSVQgTGljZW5zZSBodHRwczovL2dpdGh1Yi5jb20vdGhlbi9pcy1wcm9taXNlL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbmZ1bmN0aW9uIGlzX3Byb21pc2UodmFsdWUpIHtcbiAgICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nO1xufVxuZnVuY3Rpb24gYWRkX2xvY2F0aW9uKGVsZW1lbnQsIGZpbGUsIGxpbmUsIGNvbHVtbiwgY2hhcikge1xuICAgIGVsZW1lbnQuX19zdmVsdGVfbWV0YSA9IHtcbiAgICAgICAgbG9jOiB7IGZpbGUsIGxpbmUsIGNvbHVtbiwgY2hhciB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJ1bihmbikge1xuICAgIHJldHVybiBmbigpO1xufVxuZnVuY3Rpb24gYmxhbmtfb2JqZWN0KCkge1xuICAgIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwpO1xufVxuZnVuY3Rpb24gcnVuX2FsbChmbnMpIHtcbiAgICBmbnMuZm9yRWFjaChydW4pO1xufVxuZnVuY3Rpb24gaXNfZnVuY3Rpb24odGhpbmcpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaW5nID09PSAnZnVuY3Rpb24nO1xufVxuZnVuY3Rpb24gc2FmZV9ub3RfZXF1YWwoYSwgYikge1xuICAgIHJldHVybiBhICE9IGEgPyBiID09IGIgOiBhICE9PSBiIHx8ICgoYSAmJiB0eXBlb2YgYSA9PT0gJ29iamVjdCcpIHx8IHR5cGVvZiBhID09PSAnZnVuY3Rpb24nKTtcbn1cbmxldCBzcmNfdXJsX2VxdWFsX2FuY2hvcjtcbmZ1bmN0aW9uIHNyY191cmxfZXF1YWwoZWxlbWVudF9zcmMsIHVybCkge1xuICAgIGlmICghc3JjX3VybF9lcXVhbF9hbmNob3IpIHtcbiAgICAgICAgc3JjX3VybF9lcXVhbF9hbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgfVxuICAgIHNyY191cmxfZXF1YWxfYW5jaG9yLmhyZWYgPSB1cmw7XG4gICAgcmV0dXJuIGVsZW1lbnRfc3JjID09PSBzcmNfdXJsX2VxdWFsX2FuY2hvci5ocmVmO1xufVxuZnVuY3Rpb24gbm90X2VxdWFsKGEsIGIpIHtcbiAgICByZXR1cm4gYSAhPSBhID8gYiA9PSBiIDogYSAhPT0gYjtcbn1cbmZ1bmN0aW9uIGlzX2VtcHR5KG9iaikge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLmxlbmd0aCA9PT0gMDtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlX3N0b3JlKHN0b3JlLCBuYW1lKSB7XG4gICAgaWYgKHN0b3JlICE9IG51bGwgJiYgdHlwZW9mIHN0b3JlLnN1YnNjcmliZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCcke25hbWV9JyBpcyBub3QgYSBzdG9yZSB3aXRoIGEgJ3N1YnNjcmliZScgbWV0aG9kYCk7XG4gICAgfVxufVxuZnVuY3Rpb24gc3Vic2NyaWJlKHN0b3JlLCAuLi5jYWxsYmFja3MpIHtcbiAgICBpZiAoc3RvcmUgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbm9vcDtcbiAgICB9XG4gICAgY29uc3QgdW5zdWIgPSBzdG9yZS5zdWJzY3JpYmUoLi4uY2FsbGJhY2tzKTtcbiAgICByZXR1cm4gdW5zdWIudW5zdWJzY3JpYmUgPyAoKSA9PiB1bnN1Yi51bnN1YnNjcmliZSgpIDogdW5zdWI7XG59XG5mdW5jdGlvbiBnZXRfc3RvcmVfdmFsdWUoc3RvcmUpIHtcbiAgICBsZXQgdmFsdWU7XG4gICAgc3Vic2NyaWJlKHN0b3JlLCBfID0+IHZhbHVlID0gXykoKTtcbiAgICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiBjb21wb25lbnRfc3Vic2NyaWJlKGNvbXBvbmVudCwgc3RvcmUsIGNhbGxiYWNrKSB7XG4gICAgY29tcG9uZW50LiQkLm9uX2Rlc3Ryb3kucHVzaChzdWJzY3JpYmUoc3RvcmUsIGNhbGxiYWNrKSk7XG59XG5mdW5jdGlvbiBjcmVhdGVfc2xvdChkZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIGZuKSB7XG4gICAgaWYgKGRlZmluaXRpb24pIHtcbiAgICAgICAgY29uc3Qgc2xvdF9jdHggPSBnZXRfc2xvdF9jb250ZXh0KGRlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgZm4pO1xuICAgICAgICByZXR1cm4gZGVmaW5pdGlvblswXShzbG90X2N0eCk7XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0X3Nsb3RfY29udGV4dChkZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIGZuKSB7XG4gICAgcmV0dXJuIGRlZmluaXRpb25bMV0gJiYgZm5cbiAgICAgICAgPyBhc3NpZ24oJCRzY29wZS5jdHguc2xpY2UoKSwgZGVmaW5pdGlvblsxXShmbihjdHgpKSlcbiAgICAgICAgOiAkJHNjb3BlLmN0eDtcbn1cbmZ1bmN0aW9uIGdldF9zbG90X2NoYW5nZXMoZGVmaW5pdGlvbiwgJCRzY29wZSwgZGlydHksIGZuKSB7XG4gICAgaWYgKGRlZmluaXRpb25bMl0gJiYgZm4pIHtcbiAgICAgICAgY29uc3QgbGV0cyA9IGRlZmluaXRpb25bMl0oZm4oZGlydHkpKTtcbiAgICAgICAgaWYgKCQkc2NvcGUuZGlydHkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGxldHM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBsZXRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY29uc3QgbWVyZ2VkID0gW107XG4gICAgICAgICAgICBjb25zdCBsZW4gPSBNYXRoLm1heCgkJHNjb3BlLmRpcnR5Lmxlbmd0aCwgbGV0cy5sZW5ndGgpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIG1lcmdlZFtpXSA9ICQkc2NvcGUuZGlydHlbaV0gfCBsZXRzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1lcmdlZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJCRzY29wZS5kaXJ0eSB8IGxldHM7XG4gICAgfVxuICAgIHJldHVybiAkJHNjb3BlLmRpcnR5O1xufVxuZnVuY3Rpb24gdXBkYXRlX3Nsb3RfYmFzZShzbG90LCBzbG90X2RlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgc2xvdF9jaGFuZ2VzLCBnZXRfc2xvdF9jb250ZXh0X2ZuKSB7XG4gICAgaWYgKHNsb3RfY2hhbmdlcykge1xuICAgICAgICBjb25zdCBzbG90X2NvbnRleHQgPSBnZXRfc2xvdF9jb250ZXh0KHNsb3RfZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBnZXRfc2xvdF9jb250ZXh0X2ZuKTtcbiAgICAgICAgc2xvdC5wKHNsb3RfY29udGV4dCwgc2xvdF9jaGFuZ2VzKTtcbiAgICB9XG59XG5mdW5jdGlvbiB1cGRhdGVfc2xvdChzbG90LCBzbG90X2RlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgZGlydHksIGdldF9zbG90X2NoYW5nZXNfZm4sIGdldF9zbG90X2NvbnRleHRfZm4pIHtcbiAgICBjb25zdCBzbG90X2NoYW5nZXMgPSBnZXRfc2xvdF9jaGFuZ2VzKHNsb3RfZGVmaW5pdGlvbiwgJCRzY29wZSwgZGlydHksIGdldF9zbG90X2NoYW5nZXNfZm4pO1xuICAgIHVwZGF0ZV9zbG90X2Jhc2Uoc2xvdCwgc2xvdF9kZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIHNsb3RfY2hhbmdlcywgZ2V0X3Nsb3RfY29udGV4dF9mbik7XG59XG5mdW5jdGlvbiBnZXRfYWxsX2RpcnR5X2Zyb21fc2NvcGUoJCRzY29wZSkge1xuICAgIGlmICgkJHNjb3BlLmN0eC5sZW5ndGggPiAzMikge1xuICAgICAgICBjb25zdCBkaXJ0eSA9IFtdO1xuICAgICAgICBjb25zdCBsZW5ndGggPSAkJHNjb3BlLmN0eC5sZW5ndGggLyAzMjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZGlydHlbaV0gPSAtMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGlydHk7XG4gICAgfVxuICAgIHJldHVybiAtMTtcbn1cbmZ1bmN0aW9uIGV4Y2x1ZGVfaW50ZXJuYWxfcHJvcHMocHJvcHMpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGsgaW4gcHJvcHMpXG4gICAgICAgIGlmIChrWzBdICE9PSAnJCcpXG4gICAgICAgICAgICByZXN1bHRba10gPSBwcm9wc1trXTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gY29tcHV0ZV9yZXN0X3Byb3BzKHByb3BzLCBrZXlzKSB7XG4gICAgY29uc3QgcmVzdCA9IHt9O1xuICAgIGtleXMgPSBuZXcgU2V0KGtleXMpO1xuICAgIGZvciAoY29uc3QgayBpbiBwcm9wcylcbiAgICAgICAgaWYgKCFrZXlzLmhhcyhrKSAmJiBrWzBdICE9PSAnJCcpXG4gICAgICAgICAgICByZXN0W2tdID0gcHJvcHNba107XG4gICAgcmV0dXJuIHJlc3Q7XG59XG5mdW5jdGlvbiBjb21wdXRlX3Nsb3RzKHNsb3RzKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgZm9yIChjb25zdCBrZXkgaW4gc2xvdHMpIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gb25jZShmbikge1xuICAgIGxldCByYW4gPSBmYWxzZTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKHJhbilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgcmFuID0gdHJ1ZTtcbiAgICAgICAgZm4uY2FsbCh0aGlzLCAuLi5hcmdzKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gbnVsbF90b19lbXB0eSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIHNldF9zdG9yZV92YWx1ZShzdG9yZSwgcmV0LCB2YWx1ZSkge1xuICAgIHN0b3JlLnNldCh2YWx1ZSk7XG4gICAgcmV0dXJuIHJldDtcbn1cbmNvbnN0IGhhc19wcm9wID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG5mdW5jdGlvbiBhY3Rpb25fZGVzdHJveWVyKGFjdGlvbl9yZXN1bHQpIHtcbiAgICByZXR1cm4gYWN0aW9uX3Jlc3VsdCAmJiBpc19mdW5jdGlvbihhY3Rpb25fcmVzdWx0LmRlc3Ryb3kpID8gYWN0aW9uX3Jlc3VsdC5kZXN0cm95IDogbm9vcDtcbn1cbmZ1bmN0aW9uIHNwbGl0X2Nzc191bml0KHZhbHVlKSB7XG4gICAgY29uc3Qgc3BsaXQgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLm1hdGNoKC9eXFxzKigtP1tcXGQuXSspKFteXFxzXSopXFxzKiQvKTtcbiAgICByZXR1cm4gc3BsaXQgPyBbcGFyc2VGbG9hdChzcGxpdFsxXSksIHNwbGl0WzJdIHx8ICdweCddIDogW3ZhbHVlLCAncHgnXTtcbn1cbmNvbnN0IGNvbnRlbnRlZGl0YWJsZV90cnV0aHlfdmFsdWVzID0gWycnLCB0cnVlLCAxLCAndHJ1ZScsICdjb250ZW50ZWRpdGFibGUnXTtcblxuY29uc3QgaXNfY2xpZW50ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG5leHBvcnRzLm5vdyA9IGlzX2NsaWVudFxuICAgID8gKCkgPT4gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpXG4gICAgOiAoKSA9PiBEYXRlLm5vdygpO1xuZXhwb3J0cy5yYWYgPSBpc19jbGllbnQgPyBjYiA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2IpIDogbm9vcDtcbi8vIHVzZWQgaW50ZXJuYWxseSBmb3IgdGVzdGluZ1xuZnVuY3Rpb24gc2V0X25vdyhmbikge1xuICAgIGV4cG9ydHMubm93ID0gZm47XG59XG5mdW5jdGlvbiBzZXRfcmFmKGZuKSB7XG4gICAgZXhwb3J0cy5yYWYgPSBmbjtcbn1cblxuY29uc3QgdGFza3MgPSBuZXcgU2V0KCk7XG5mdW5jdGlvbiBydW5fdGFza3Mobm93KSB7XG4gICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgaWYgKCF0YXNrLmMobm93KSkge1xuICAgICAgICAgICAgdGFza3MuZGVsZXRlKHRhc2spO1xuICAgICAgICAgICAgdGFzay5mKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAodGFza3Muc2l6ZSAhPT0gMClcbiAgICAgICAgZXhwb3J0cy5yYWYocnVuX3Rhc2tzKTtcbn1cbi8qKlxuICogRm9yIHRlc3RpbmcgcHVycG9zZXMgb25seSFcbiAqL1xuZnVuY3Rpb24gY2xlYXJfbG9vcHMoKSB7XG4gICAgdGFza3MuY2xlYXIoKTtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyB0YXNrIHRoYXQgcnVucyBvbiBlYWNoIHJhZiBmcmFtZVxuICogdW50aWwgaXQgcmV0dXJucyBhIGZhbHN5IHZhbHVlIG9yIGlzIGFib3J0ZWRcbiAqL1xuZnVuY3Rpb24gbG9vcChjYWxsYmFjaykge1xuICAgIGxldCB0YXNrO1xuICAgIGlmICh0YXNrcy5zaXplID09PSAwKVxuICAgICAgICBleHBvcnRzLnJhZihydW5fdGFza3MpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb21pc2U6IG5ldyBQcm9taXNlKGZ1bGZpbGwgPT4ge1xuICAgICAgICAgICAgdGFza3MuYWRkKHRhc2sgPSB7IGM6IGNhbGxiYWNrLCBmOiBmdWxmaWxsIH0pO1xuICAgICAgICB9KSxcbiAgICAgICAgYWJvcnQoKSB7XG4gICAgICAgICAgICB0YXNrcy5kZWxldGUodGFzayk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5jb25zdCBnbG9iYWxzID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgPyB3aW5kb3dcbiAgICA6IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICA/IGdsb2JhbFRoaXNcbiAgICAgICAgOiBnbG9iYWwpO1xuXG4vKipcbiAqIFJlc2l6ZSBvYnNlcnZlciBzaW5nbGV0b24uXG4gKiBPbmUgbGlzdGVuZXIgcGVyIGVsZW1lbnQgb25seSFcbiAqIGh0dHBzOi8vZ3JvdXBzLmdvb2dsZS5jb20vYS9jaHJvbWl1bS5vcmcvZy9ibGluay1kZXYvYy96Nmllbk9OVWI1QS9tL0Y1LVZjVVp0QkFBSlxuICovXG5jbGFzcyBSZXNpemVPYnNlcnZlclNpbmdsZXRvbiB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLl9saXN0ZW5lcnMgPSAnV2Vha01hcCcgaW4gZ2xvYmFscyA/IG5ldyBXZWFrTWFwKCkgOiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIG9ic2VydmUoZWxlbWVudCwgbGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzLnNldChlbGVtZW50LCBsaXN0ZW5lcik7XG4gICAgICAgIHRoaXMuX2dldE9ic2VydmVyKCkub2JzZXJ2ZShlbGVtZW50LCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fbGlzdGVuZXJzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMuX29ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTsgLy8gdGhpcyBsaW5lIGNhbiBwcm9iYWJseSBiZSByZW1vdmVkXG4gICAgICAgIH07XG4gICAgfVxuICAgIF9nZXRPYnNlcnZlcigpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICByZXR1cm4gKF9hID0gdGhpcy5fb2JzZXJ2ZXIpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICh0aGlzLl9vYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgUmVzaXplT2JzZXJ2ZXJTaW5nbGV0b24uZW50cmllcy5zZXQoZW50cnkudGFyZ2V0LCBlbnRyeSk7XG4gICAgICAgICAgICAgICAgKF9hID0gdGhpcy5fbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EoZW50cnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgfVxufVxuLy8gTmVlZHMgdG8gYmUgd3JpdHRlbiBsaWtlIHRoaXMgdG8gcGFzcyB0aGUgdHJlZS1zaGFrZS10ZXN0XG5SZXNpemVPYnNlcnZlclNpbmdsZXRvbi5lbnRyaWVzID0gJ1dlYWtNYXAnIGluIGdsb2JhbHMgPyBuZXcgV2Vha01hcCgpIDogdW5kZWZpbmVkO1xuXG4vLyBUcmFjayB3aGljaCBub2RlcyBhcmUgY2xhaW1lZCBkdXJpbmcgaHlkcmF0aW9uLiBVbmNsYWltZWQgbm9kZXMgY2FuIHRoZW4gYmUgcmVtb3ZlZCBmcm9tIHRoZSBET01cbi8vIGF0IHRoZSBlbmQgb2YgaHlkcmF0aW9uIHdpdGhvdXQgdG91Y2hpbmcgdGhlIHJlbWFpbmluZyBub2Rlcy5cbmxldCBpc19oeWRyYXRpbmcgPSBmYWxzZTtcbmZ1bmN0aW9uIHN0YXJ0X2h5ZHJhdGluZygpIHtcbiAgICBpc19oeWRyYXRpbmcgPSB0cnVlO1xufVxuZnVuY3Rpb24gZW5kX2h5ZHJhdGluZygpIHtcbiAgICBpc19oeWRyYXRpbmcgPSBmYWxzZTtcbn1cbmZ1bmN0aW9uIHVwcGVyX2JvdW5kKGxvdywgaGlnaCwga2V5LCB2YWx1ZSkge1xuICAgIC8vIFJldHVybiBmaXJzdCBpbmRleCBvZiB2YWx1ZSBsYXJnZXIgdGhhbiBpbnB1dCB2YWx1ZSBpbiB0aGUgcmFuZ2UgW2xvdywgaGlnaClcbiAgICB3aGlsZSAobG93IDwgaGlnaCkge1xuICAgICAgICBjb25zdCBtaWQgPSBsb3cgKyAoKGhpZ2ggLSBsb3cpID4+IDEpO1xuICAgICAgICBpZiAoa2V5KG1pZCkgPD0gdmFsdWUpIHtcbiAgICAgICAgICAgIGxvdyA9IG1pZCArIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBoaWdoID0gbWlkO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBsb3c7XG59XG5mdW5jdGlvbiBpbml0X2h5ZHJhdGUodGFyZ2V0KSB7XG4gICAgaWYgKHRhcmdldC5oeWRyYXRlX2luaXQpXG4gICAgICAgIHJldHVybjtcbiAgICB0YXJnZXQuaHlkcmF0ZV9pbml0ID0gdHJ1ZTtcbiAgICAvLyBXZSBrbm93IHRoYXQgYWxsIGNoaWxkcmVuIGhhdmUgY2xhaW1fb3JkZXIgdmFsdWVzIHNpbmNlIHRoZSB1bmNsYWltZWQgaGF2ZSBiZWVuIGRldGFjaGVkIGlmIHRhcmdldCBpcyBub3QgPGhlYWQ+XG4gICAgbGV0IGNoaWxkcmVuID0gdGFyZ2V0LmNoaWxkTm9kZXM7XG4gICAgLy8gSWYgdGFyZ2V0IGlzIDxoZWFkPiwgdGhlcmUgbWF5IGJlIGNoaWxkcmVuIHdpdGhvdXQgY2xhaW1fb3JkZXJcbiAgICBpZiAodGFyZ2V0Lm5vZGVOYW1lID09PSAnSEVBRCcpIHtcbiAgICAgICAgY29uc3QgbXlDaGlsZHJlbiA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAobm9kZS5jbGFpbV9vcmRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbXlDaGlsZHJlbi5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNoaWxkcmVuID0gbXlDaGlsZHJlbjtcbiAgICB9XG4gICAgLypcbiAgICAqIFJlb3JkZXIgY2xhaW1lZCBjaGlsZHJlbiBvcHRpbWFsbHkuXG4gICAgKiBXZSBjYW4gcmVvcmRlciBjbGFpbWVkIGNoaWxkcmVuIG9wdGltYWxseSBieSBmaW5kaW5nIHRoZSBsb25nZXN0IHN1YnNlcXVlbmNlIG9mXG4gICAgKiBub2RlcyB0aGF0IGFyZSBhbHJlYWR5IGNsYWltZWQgaW4gb3JkZXIgYW5kIG9ubHkgbW92aW5nIHRoZSByZXN0LiBUaGUgbG9uZ2VzdFxuICAgICogc3Vic2VxdWVuY2Ugb2Ygbm9kZXMgdGhhdCBhcmUgY2xhaW1lZCBpbiBvcmRlciBjYW4gYmUgZm91bmQgYnlcbiAgICAqIGNvbXB1dGluZyB0aGUgbG9uZ2VzdCBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlIG9mIC5jbGFpbV9vcmRlciB2YWx1ZXMuXG4gICAgKlxuICAgICogVGhpcyBhbGdvcml0aG0gaXMgb3B0aW1hbCBpbiBnZW5lcmF0aW5nIHRoZSBsZWFzdCBhbW91bnQgb2YgcmVvcmRlciBvcGVyYXRpb25zXG4gICAgKiBwb3NzaWJsZS5cbiAgICAqXG4gICAgKiBQcm9vZjpcbiAgICAqIFdlIGtub3cgdGhhdCwgZ2l2ZW4gYSBzZXQgb2YgcmVvcmRlcmluZyBvcGVyYXRpb25zLCB0aGUgbm9kZXMgdGhhdCBkbyBub3QgbW92ZVxuICAgICogYWx3YXlzIGZvcm0gYW4gaW5jcmVhc2luZyBzdWJzZXF1ZW5jZSwgc2luY2UgdGhleSBkbyBub3QgbW92ZSBhbW9uZyBlYWNoIG90aGVyXG4gICAgKiBtZWFuaW5nIHRoYXQgdGhleSBtdXN0IGJlIGFscmVhZHkgb3JkZXJlZCBhbW9uZyBlYWNoIG90aGVyLiBUaHVzLCB0aGUgbWF4aW1hbFxuICAgICogc2V0IG9mIG5vZGVzIHRoYXQgZG8gbm90IG1vdmUgZm9ybSBhIGxvbmdlc3QgaW5jcmVhc2luZyBzdWJzZXF1ZW5jZS5cbiAgICAqL1xuICAgIC8vIENvbXB1dGUgbG9uZ2VzdCBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlXG4gICAgLy8gbTogc3Vic2VxdWVuY2UgbGVuZ3RoIGogPT4gaW5kZXggayBvZiBzbWFsbGVzdCB2YWx1ZSB0aGF0IGVuZHMgYW4gaW5jcmVhc2luZyBzdWJzZXF1ZW5jZSBvZiBsZW5ndGggalxuICAgIGNvbnN0IG0gPSBuZXcgSW50MzJBcnJheShjaGlsZHJlbi5sZW5ndGggKyAxKTtcbiAgICAvLyBQcmVkZWNlc3NvciBpbmRpY2VzICsgMVxuICAgIGNvbnN0IHAgPSBuZXcgSW50MzJBcnJheShjaGlsZHJlbi5sZW5ndGgpO1xuICAgIG1bMF0gPSAtMTtcbiAgICBsZXQgbG9uZ2VzdCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gY2hpbGRyZW5baV0uY2xhaW1fb3JkZXI7XG4gICAgICAgIC8vIEZpbmQgdGhlIGxhcmdlc3Qgc3Vic2VxdWVuY2UgbGVuZ3RoIHN1Y2ggdGhhdCBpdCBlbmRzIGluIGEgdmFsdWUgbGVzcyB0aGFuIG91ciBjdXJyZW50IHZhbHVlXG4gICAgICAgIC8vIHVwcGVyX2JvdW5kIHJldHVybnMgZmlyc3QgZ3JlYXRlciB2YWx1ZSwgc28gd2Ugc3VidHJhY3Qgb25lXG4gICAgICAgIC8vIHdpdGggZmFzdCBwYXRoIGZvciB3aGVuIHdlIGFyZSBvbiB0aGUgY3VycmVudCBsb25nZXN0IHN1YnNlcXVlbmNlXG4gICAgICAgIGNvbnN0IHNlcUxlbiA9ICgobG9uZ2VzdCA+IDAgJiYgY2hpbGRyZW5bbVtsb25nZXN0XV0uY2xhaW1fb3JkZXIgPD0gY3VycmVudCkgPyBsb25nZXN0ICsgMSA6IHVwcGVyX2JvdW5kKDEsIGxvbmdlc3QsIGlkeCA9PiBjaGlsZHJlblttW2lkeF1dLmNsYWltX29yZGVyLCBjdXJyZW50KSkgLSAxO1xuICAgICAgICBwW2ldID0gbVtzZXFMZW5dICsgMTtcbiAgICAgICAgY29uc3QgbmV3TGVuID0gc2VxTGVuICsgMTtcbiAgICAgICAgLy8gV2UgY2FuIGd1YXJhbnRlZSB0aGF0IGN1cnJlbnQgaXMgdGhlIHNtYWxsZXN0IHZhbHVlLiBPdGhlcndpc2UsIHdlIHdvdWxkIGhhdmUgZ2VuZXJhdGVkIGEgbG9uZ2VyIHNlcXVlbmNlLlxuICAgICAgICBtW25ld0xlbl0gPSBpO1xuICAgICAgICBsb25nZXN0ID0gTWF0aC5tYXgobmV3TGVuLCBsb25nZXN0KTtcbiAgICB9XG4gICAgLy8gVGhlIGxvbmdlc3QgaW5jcmVhc2luZyBzdWJzZXF1ZW5jZSBvZiBub2RlcyAoaW5pdGlhbGx5IHJldmVyc2VkKVxuICAgIGNvbnN0IGxpcyA9IFtdO1xuICAgIC8vIFRoZSByZXN0IG9mIHRoZSBub2Rlcywgbm9kZXMgdGhhdCB3aWxsIGJlIG1vdmVkXG4gICAgY29uc3QgdG9Nb3ZlID0gW107XG4gICAgbGV0IGxhc3QgPSBjaGlsZHJlbi5sZW5ndGggLSAxO1xuICAgIGZvciAobGV0IGN1ciA9IG1bbG9uZ2VzdF0gKyAxOyBjdXIgIT0gMDsgY3VyID0gcFtjdXIgLSAxXSkge1xuICAgICAgICBsaXMucHVzaChjaGlsZHJlbltjdXIgLSAxXSk7XG4gICAgICAgIGZvciAoOyBsYXN0ID49IGN1cjsgbGFzdC0tKSB7XG4gICAgICAgICAgICB0b01vdmUucHVzaChjaGlsZHJlbltsYXN0XSk7XG4gICAgICAgIH1cbiAgICAgICAgbGFzdC0tO1xuICAgIH1cbiAgICBmb3IgKDsgbGFzdCA+PSAwOyBsYXN0LS0pIHtcbiAgICAgICAgdG9Nb3ZlLnB1c2goY2hpbGRyZW5bbGFzdF0pO1xuICAgIH1cbiAgICBsaXMucmV2ZXJzZSgpO1xuICAgIC8vIFdlIHNvcnQgdGhlIG5vZGVzIGJlaW5nIG1vdmVkIHRvIGd1YXJhbnRlZSB0aGF0IHRoZWlyIGluc2VydGlvbiBvcmRlciBtYXRjaGVzIHRoZSBjbGFpbSBvcmRlclxuICAgIHRvTW92ZS5zb3J0KChhLCBiKSA9PiBhLmNsYWltX29yZGVyIC0gYi5jbGFpbV9vcmRlcik7XG4gICAgLy8gRmluYWxseSwgd2UgbW92ZSB0aGUgbm9kZXNcbiAgICBmb3IgKGxldCBpID0gMCwgaiA9IDA7IGkgPCB0b01vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgd2hpbGUgKGogPCBsaXMubGVuZ3RoICYmIHRvTW92ZVtpXS5jbGFpbV9vcmRlciA+PSBsaXNbal0uY2xhaW1fb3JkZXIpIHtcbiAgICAgICAgICAgIGorKztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhbmNob3IgPSBqIDwgbGlzLmxlbmd0aCA/IGxpc1tqXSA6IG51bGw7XG4gICAgICAgIHRhcmdldC5pbnNlcnRCZWZvcmUodG9Nb3ZlW2ldLCBhbmNob3IpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFwcGVuZCh0YXJnZXQsIG5vZGUpIHtcbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQobm9kZSk7XG59XG5mdW5jdGlvbiBhcHBlbmRfc3R5bGVzKHRhcmdldCwgc3R5bGVfc2hlZXRfaWQsIHN0eWxlcykge1xuICAgIGNvbnN0IGFwcGVuZF9zdHlsZXNfdG8gPSBnZXRfcm9vdF9mb3Jfc3R5bGUodGFyZ2V0KTtcbiAgICBpZiAoIWFwcGVuZF9zdHlsZXNfdG8uZ2V0RWxlbWVudEJ5SWQoc3R5bGVfc2hlZXRfaWQpKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gZWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgc3R5bGUuaWQgPSBzdHlsZV9zaGVldF9pZDtcbiAgICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSBzdHlsZXM7XG4gICAgICAgIGFwcGVuZF9zdHlsZXNoZWV0KGFwcGVuZF9zdHlsZXNfdG8sIHN0eWxlKTtcbiAgICB9XG59XG5mdW5jdGlvbiBnZXRfcm9vdF9mb3Jfc3R5bGUobm9kZSkge1xuICAgIGlmICghbm9kZSlcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50O1xuICAgIGNvbnN0IHJvb3QgPSBub2RlLmdldFJvb3ROb2RlID8gbm9kZS5nZXRSb290Tm9kZSgpIDogbm9kZS5vd25lckRvY3VtZW50O1xuICAgIGlmIChyb290ICYmIHJvb3QuaG9zdCkge1xuICAgICAgICByZXR1cm4gcm9vdDtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGUub3duZXJEb2N1bWVudDtcbn1cbmZ1bmN0aW9uIGFwcGVuZF9lbXB0eV9zdHlsZXNoZWV0KG5vZGUpIHtcbiAgICBjb25zdCBzdHlsZV9lbGVtZW50ID0gZWxlbWVudCgnc3R5bGUnKTtcbiAgICBhcHBlbmRfc3R5bGVzaGVldChnZXRfcm9vdF9mb3Jfc3R5bGUobm9kZSksIHN0eWxlX2VsZW1lbnQpO1xuICAgIHJldHVybiBzdHlsZV9lbGVtZW50LnNoZWV0O1xufVxuZnVuY3Rpb24gYXBwZW5kX3N0eWxlc2hlZXQobm9kZSwgc3R5bGUpIHtcbiAgICBhcHBlbmQobm9kZS5oZWFkIHx8IG5vZGUsIHN0eWxlKTtcbiAgICByZXR1cm4gc3R5bGUuc2hlZXQ7XG59XG5mdW5jdGlvbiBhcHBlbmRfaHlkcmF0aW9uKHRhcmdldCwgbm9kZSkge1xuICAgIGlmIChpc19oeWRyYXRpbmcpIHtcbiAgICAgICAgaW5pdF9oeWRyYXRlKHRhcmdldCk7XG4gICAgICAgIGlmICgodGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgPT09IHVuZGVmaW5lZCkgfHwgKCh0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCAhPT0gbnVsbCkgJiYgKHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkLnBhcmVudE5vZGUgIT09IHRhcmdldCkpKSB7XG4gICAgICAgICAgICB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCA9IHRhcmdldC5maXJzdENoaWxkO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNraXAgbm9kZXMgb2YgdW5kZWZpbmVkIG9yZGVyaW5nXG4gICAgICAgIHdoaWxlICgodGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgIT09IG51bGwpICYmICh0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZC5jbGFpbV9vcmRlciA9PT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgdGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgPSB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZSAhPT0gdGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQpIHtcbiAgICAgICAgICAgIC8vIFdlIG9ubHkgaW5zZXJ0IGlmIHRoZSBvcmRlcmluZyBvZiB0aGlzIG5vZGUgc2hvdWxkIGJlIG1vZGlmaWVkIG9yIHRoZSBwYXJlbnQgbm9kZSBpcyBub3QgdGFyZ2V0XG4gICAgICAgICAgICBpZiAobm9kZS5jbGFpbV9vcmRlciAhPT0gdW5kZWZpbmVkIHx8IG5vZGUucGFyZW50Tm9kZSAhPT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCA9IG5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZS5wYXJlbnROb2RlICE9PSB0YXJnZXQgfHwgbm9kZS5uZXh0U2libGluZyAhPT0gbnVsbCkge1xuICAgICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gaW5zZXJ0KHRhcmdldCwgbm9kZSwgYW5jaG9yKSB7XG4gICAgdGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCBhbmNob3IgfHwgbnVsbCk7XG59XG5mdW5jdGlvbiBpbnNlcnRfaHlkcmF0aW9uKHRhcmdldCwgbm9kZSwgYW5jaG9yKSB7XG4gICAgaWYgKGlzX2h5ZHJhdGluZyAmJiAhYW5jaG9yKSB7XG4gICAgICAgIGFwcGVuZF9oeWRyYXRpb24odGFyZ2V0LCBub2RlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZS5wYXJlbnROb2RlICE9PSB0YXJnZXQgfHwgbm9kZS5uZXh0U2libGluZyAhPSBhbmNob3IpIHtcbiAgICAgICAgdGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCBhbmNob3IgfHwgbnVsbCk7XG4gICAgfVxufVxuZnVuY3Rpb24gZGV0YWNoKG5vZGUpIHtcbiAgICBpZiAobm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICB9XG59XG5mdW5jdGlvbiBkZXN0cm95X2VhY2goaXRlcmF0aW9ucywgZGV0YWNoaW5nKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVyYXRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChpdGVyYXRpb25zW2ldKVxuICAgICAgICAgICAgaXRlcmF0aW9uc1tpXS5kKGRldGFjaGluZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gZWxlbWVudChuYW1lKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSk7XG59XG5mdW5jdGlvbiBlbGVtZW50X2lzKG5hbWUsIGlzKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSwgeyBpcyB9KTtcbn1cbmZ1bmN0aW9uIG9iamVjdF93aXRob3V0X3Byb3BlcnRpZXMob2JqLCBleGNsdWRlKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0ge307XG4gICAgZm9yIChjb25zdCBrIGluIG9iaikge1xuICAgICAgICBpZiAoaGFzX3Byb3Aob2JqLCBrKVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgJiYgZXhjbHVkZS5pbmRleE9mKGspID09PSAtMSkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgdGFyZ2V0W2tdID0gb2JqW2tdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBzdmdfZWxlbWVudChuYW1lKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCBuYW1lKTtcbn1cbmZ1bmN0aW9uIHRleHQoZGF0YSkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkYXRhKTtcbn1cbmZ1bmN0aW9uIHNwYWNlKCkge1xuICAgIHJldHVybiB0ZXh0KCcgJyk7XG59XG5mdW5jdGlvbiBlbXB0eSgpIHtcbiAgICByZXR1cm4gdGV4dCgnJyk7XG59XG5mdW5jdGlvbiBjb21tZW50KGNvbnRlbnQpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlQ29tbWVudChjb250ZW50KTtcbn1cbmZ1bmN0aW9uIGxpc3Rlbihub2RlLCBldmVudCwgaGFuZGxlciwgb3B0aW9ucykge1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgcmV0dXJuICgpID0+IG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgb3B0aW9ucyk7XG59XG5mdW5jdGlvbiBwcmV2ZW50X2RlZmF1bHQoZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhpcywgZXZlbnQpO1xuICAgIH07XG59XG5mdW5jdGlvbiBzdG9wX3Byb3BhZ2F0aW9uKGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCBldmVudCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHN0b3BfaW1tZWRpYXRlX3Byb3BhZ2F0aW9uKGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCBldmVudCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHNlbGYoZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcylcbiAgICAgICAgICAgIGZuLmNhbGwodGhpcywgZXZlbnQpO1xuICAgIH07XG59XG5mdW5jdGlvbiB0cnVzdGVkKGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmIChldmVudC5pc1RydXN0ZWQpXG4gICAgICAgICAgICBmbi5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gYXR0cihub2RlLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09IG51bGwpXG4gICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgZWxzZSBpZiAobm9kZS5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKSAhPT0gdmFsdWUpXG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xufVxuLyoqXG4gKiBMaXN0IG9mIGF0dHJpYnV0ZXMgdGhhdCBzaG91bGQgYWx3YXlzIGJlIHNldCB0aHJvdWdoIHRoZSBhdHRyIG1ldGhvZCxcbiAqIGJlY2F1c2UgdXBkYXRpbmcgdGhlbSB0aHJvdWdoIHRoZSBwcm9wZXJ0eSBzZXR0ZXIgZG9lc24ndCB3b3JrIHJlbGlhYmx5LlxuICogSW4gdGhlIGV4YW1wbGUgb2YgYHdpZHRoYC9gaGVpZ2h0YCwgdGhlIHByb2JsZW0gaXMgdGhhdCB0aGUgc2V0dGVyIG9ubHlcbiAqIGFjY2VwdHMgbnVtZXJpYyB2YWx1ZXMsIGJ1dCB0aGUgYXR0cmlidXRlIGNhbiBhbHNvIGJlIHNldCB0byBhIHN0cmluZyBsaWtlIGA1MCVgLlxuICogSWYgdGhpcyBsaXN0IGJlY29tZXMgdG9vIGJpZywgcmV0aGluayB0aGlzIGFwcHJvYWNoLlxuICovXG5jb25zdCBhbHdheXNfc2V0X3Rocm91Z2hfc2V0X2F0dHJpYnV0ZSA9IFsnd2lkdGgnLCAnaGVpZ2h0J107XG5mdW5jdGlvbiBzZXRfYXR0cmlidXRlcyhub2RlLCBhdHRyaWJ1dGVzKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNvbnN0IGRlc2NyaXB0b3JzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMobm9kZS5fX3Byb3RvX18pO1xuICAgIGZvciAoY29uc3Qga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZXNba2V5XSA9PSBudWxsKSB7XG4gICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGtleSA9PT0gJ3N0eWxlJykge1xuICAgICAgICAgICAgbm9kZS5zdHlsZS5jc3NUZXh0ID0gYXR0cmlidXRlc1trZXldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGtleSA9PT0gJ19fdmFsdWUnKSB7XG4gICAgICAgICAgICBub2RlLnZhbHVlID0gbm9kZVtrZXldID0gYXR0cmlidXRlc1trZXldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRlc2NyaXB0b3JzW2tleV0gJiYgZGVzY3JpcHRvcnNba2V5XS5zZXQgJiYgYWx3YXlzX3NldF90aHJvdWdoX3NldF9hdHRyaWJ1dGUuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgbm9kZVtrZXldID0gYXR0cmlidXRlc1trZXldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYXR0cihub2RlLCBrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBzZXRfc3ZnX2F0dHJpYnV0ZXMobm9kZSwgYXR0cmlidXRlcykge1xuICAgIGZvciAoY29uc3Qga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgYXR0cihub2RlLCBrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgfVxufVxuZnVuY3Rpb24gc2V0X2N1c3RvbV9lbGVtZW50X2RhdGFfbWFwKG5vZGUsIGRhdGFfbWFwKSB7XG4gICAgT2JqZWN0LmtleXMoZGF0YV9tYXApLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBzZXRfY3VzdG9tX2VsZW1lbnRfZGF0YShub2RlLCBrZXksIGRhdGFfbWFwW2tleV0pO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gc2V0X2N1c3RvbV9lbGVtZW50X2RhdGEobm9kZSwgcHJvcCwgdmFsdWUpIHtcbiAgICBpZiAocHJvcCBpbiBub2RlKSB7XG4gICAgICAgIG5vZGVbcHJvcF0gPSB0eXBlb2Ygbm9kZVtwcm9wXSA9PT0gJ2Jvb2xlYW4nICYmIHZhbHVlID09PSAnJyA/IHRydWUgOiB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGF0dHIobm9kZSwgcHJvcCwgdmFsdWUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNldF9keW5hbWljX2VsZW1lbnRfZGF0YSh0YWcpIHtcbiAgICByZXR1cm4gKC8tLy50ZXN0KHRhZykpID8gc2V0X2N1c3RvbV9lbGVtZW50X2RhdGFfbWFwIDogc2V0X2F0dHJpYnV0ZXM7XG59XG5mdW5jdGlvbiB4bGlua19hdHRyKG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICBub2RlLnNldEF0dHJpYnV0ZU5TKCdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgYXR0cmlidXRlLCB2YWx1ZSk7XG59XG5mdW5jdGlvbiBnZXRfYmluZGluZ19ncm91cF92YWx1ZShncm91cCwgX192YWx1ZSwgY2hlY2tlZCkge1xuICAgIGNvbnN0IHZhbHVlID0gbmV3IFNldCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JvdXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGdyb3VwW2ldLmNoZWNrZWQpXG4gICAgICAgICAgICB2YWx1ZS5hZGQoZ3JvdXBbaV0uX192YWx1ZSk7XG4gICAgfVxuICAgIGlmICghY2hlY2tlZCkge1xuICAgICAgICB2YWx1ZS5kZWxldGUoX192YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBBcnJheS5mcm9tKHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGluaXRfYmluZGluZ19ncm91cChncm91cCkge1xuICAgIGxldCBfaW5wdXRzO1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qIHB1c2ggKi8gcCguLi5pbnB1dHMpIHtcbiAgICAgICAgICAgIF9pbnB1dHMgPSBpbnB1dHM7XG4gICAgICAgICAgICBfaW5wdXRzLmZvckVhY2goaW5wdXQgPT4gZ3JvdXAucHVzaChpbnB1dCkpO1xuICAgICAgICB9LFxuICAgICAgICAvKiByZW1vdmUgKi8gcigpIHtcbiAgICAgICAgICAgIF9pbnB1dHMuZm9yRWFjaChpbnB1dCA9PiBncm91cC5zcGxpY2UoZ3JvdXAuaW5kZXhPZihpbnB1dCksIDEpKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBpbml0X2JpbmRpbmdfZ3JvdXBfZHluYW1pYyhncm91cCwgaW5kZXhlcykge1xuICAgIGxldCBfZ3JvdXAgPSBnZXRfYmluZGluZ19ncm91cChncm91cCk7XG4gICAgbGV0IF9pbnB1dHM7XG4gICAgZnVuY3Rpb24gZ2V0X2JpbmRpbmdfZ3JvdXAoZ3JvdXApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmRleGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBncm91cCA9IGdyb3VwW2luZGV4ZXNbaV1dID0gZ3JvdXBbaW5kZXhlc1tpXV0gfHwgW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdyb3VwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwdXNoKCkge1xuICAgICAgICBfaW5wdXRzLmZvckVhY2goaW5wdXQgPT4gX2dyb3VwLnB1c2goaW5wdXQpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgICBfaW5wdXRzLmZvckVhY2goaW5wdXQgPT4gX2dyb3VwLnNwbGljZShfZ3JvdXAuaW5kZXhPZihpbnB1dCksIDEpKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyogdXBkYXRlICovIHUobmV3X2luZGV4ZXMpIHtcbiAgICAgICAgICAgIGluZGV4ZXMgPSBuZXdfaW5kZXhlcztcbiAgICAgICAgICAgIGNvbnN0IG5ld19ncm91cCA9IGdldF9iaW5kaW5nX2dyb3VwKGdyb3VwKTtcbiAgICAgICAgICAgIGlmIChuZXdfZ3JvdXAgIT09IF9ncm91cCkge1xuICAgICAgICAgICAgICAgIHJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIF9ncm91cCA9IG5ld19ncm91cDtcbiAgICAgICAgICAgICAgICBwdXNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8qIHB1c2ggKi8gcCguLi5pbnB1dHMpIHtcbiAgICAgICAgICAgIF9pbnB1dHMgPSBpbnB1dHM7XG4gICAgICAgICAgICBwdXNoKCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qIHJlbW92ZSAqLyByOiByZW1vdmVcbiAgICB9O1xufVxuZnVuY3Rpb24gdG9fbnVtYmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAnJyA/IG51bGwgOiArdmFsdWU7XG59XG5mdW5jdGlvbiB0aW1lX3Jhbmdlc190b19hcnJheShyYW5nZXMpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFuZ2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGFycmF5LnB1c2goeyBzdGFydDogcmFuZ2VzLnN0YXJ0KGkpLCBlbmQ6IHJhbmdlcy5lbmQoaSkgfSk7XG4gICAgfVxuICAgIHJldHVybiBhcnJheTtcbn1cbmZ1bmN0aW9uIGNoaWxkcmVuKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkTm9kZXMpO1xufVxuZnVuY3Rpb24gaW5pdF9jbGFpbV9pbmZvKG5vZGVzKSB7XG4gICAgaWYgKG5vZGVzLmNsYWltX2luZm8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBub2Rlcy5jbGFpbV9pbmZvID0geyBsYXN0X2luZGV4OiAwLCB0b3RhbF9jbGFpbWVkOiAwIH07XG4gICAgfVxufVxuZnVuY3Rpb24gY2xhaW1fbm9kZShub2RlcywgcHJlZGljYXRlLCBwcm9jZXNzTm9kZSwgY3JlYXRlTm9kZSwgZG9udFVwZGF0ZUxhc3RJbmRleCA9IGZhbHNlKSB7XG4gICAgLy8gVHJ5IHRvIGZpbmQgbm9kZXMgaW4gYW4gb3JkZXIgc3VjaCB0aGF0IHdlIGxlbmd0aGVuIHRoZSBsb25nZXN0IGluY3JlYXNpbmcgc3Vic2VxdWVuY2VcbiAgICBpbml0X2NsYWltX2luZm8obm9kZXMpO1xuICAgIGNvbnN0IHJlc3VsdE5vZGUgPSAoKCkgPT4ge1xuICAgICAgICAvLyBXZSBmaXJzdCB0cnkgdG8gZmluZCBhbiBlbGVtZW50IGFmdGVyIHRoZSBwcmV2aW91cyBvbmVcbiAgICAgICAgZm9yIChsZXQgaSA9IG5vZGVzLmNsYWltX2luZm8ubGFzdF9pbmRleDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbaV07XG4gICAgICAgICAgICBpZiAocHJlZGljYXRlKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVwbGFjZW1lbnQgPSBwcm9jZXNzTm9kZShub2RlKTtcbiAgICAgICAgICAgICAgICBpZiAocmVwbGFjZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBub2Rlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBub2Rlc1tpXSA9IHJlcGxhY2VtZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWRvbnRVcGRhdGVMYXN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXMuY2xhaW1faW5mby5sYXN0X2luZGV4ID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB3ZSB0cnkgdG8gZmluZCBvbmUgYmVmb3JlXG4gICAgICAgIC8vIFdlIGl0ZXJhdGUgaW4gcmV2ZXJzZSBzbyB0aGF0IHdlIGRvbid0IGdvIHRvbyBmYXIgYmFja1xuICAgICAgICBmb3IgKGxldCBpID0gbm9kZXMuY2xhaW1faW5mby5sYXN0X2luZGV4IC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgICAgIGlmIChwcmVkaWNhdGUobm9kZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXBsYWNlbWVudCA9IHByb2Nlc3NOb2RlKG5vZGUpO1xuICAgICAgICAgICAgICAgIGlmIChyZXBsYWNlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzW2ldID0gcmVwbGFjZW1lbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghZG9udFVwZGF0ZUxhc3RJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBub2Rlcy5jbGFpbV9pbmZvLmxhc3RfaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyZXBsYWNlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNpbmNlIHdlIHNwbGljZWQgYmVmb3JlIHRoZSBsYXN0X2luZGV4LCB3ZSBkZWNyZWFzZSBpdFxuICAgICAgICAgICAgICAgICAgICBub2Rlcy5jbGFpbV9pbmZvLmxhc3RfaW5kZXgtLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgd2UgY2FuJ3QgZmluZCBhbnkgbWF0Y2hpbmcgbm9kZSwgd2UgY3JlYXRlIGEgbmV3IG9uZVxuICAgICAgICByZXR1cm4gY3JlYXRlTm9kZSgpO1xuICAgIH0pKCk7XG4gICAgcmVzdWx0Tm9kZS5jbGFpbV9vcmRlciA9IG5vZGVzLmNsYWltX2luZm8udG90YWxfY2xhaW1lZDtcbiAgICBub2Rlcy5jbGFpbV9pbmZvLnRvdGFsX2NsYWltZWQgKz0gMTtcbiAgICByZXR1cm4gcmVzdWx0Tm9kZTtcbn1cbmZ1bmN0aW9uIGNsYWltX2VsZW1lbnRfYmFzZShub2RlcywgbmFtZSwgYXR0cmlidXRlcywgY3JlYXRlX2VsZW1lbnQpIHtcbiAgICByZXR1cm4gY2xhaW1fbm9kZShub2RlcywgKG5vZGUpID0+IG5vZGUubm9kZU5hbWUgPT09IG5hbWUsIChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbW92ZSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5vZGUuYXR0cmlidXRlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlID0gbm9kZS5hdHRyaWJ1dGVzW2pdO1xuICAgICAgICAgICAgaWYgKCFhdHRyaWJ1dGVzW2F0dHJpYnV0ZS5uYW1lXSkge1xuICAgICAgICAgICAgICAgIHJlbW92ZS5wdXNoKGF0dHJpYnV0ZS5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZW1vdmUuZm9yRWFjaCh2ID0+IG5vZGUucmVtb3ZlQXR0cmlidXRlKHYpKTtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9LCAoKSA9PiBjcmVhdGVfZWxlbWVudChuYW1lKSk7XG59XG5mdW5jdGlvbiBjbGFpbV9lbGVtZW50KG5vZGVzLCBuYW1lLCBhdHRyaWJ1dGVzKSB7XG4gICAgcmV0dXJuIGNsYWltX2VsZW1lbnRfYmFzZShub2RlcywgbmFtZSwgYXR0cmlidXRlcywgZWxlbWVudCk7XG59XG5mdW5jdGlvbiBjbGFpbV9zdmdfZWxlbWVudChub2RlcywgbmFtZSwgYXR0cmlidXRlcykge1xuICAgIHJldHVybiBjbGFpbV9lbGVtZW50X2Jhc2Uobm9kZXMsIG5hbWUsIGF0dHJpYnV0ZXMsIHN2Z19lbGVtZW50KTtcbn1cbmZ1bmN0aW9uIGNsYWltX3RleHQobm9kZXMsIGRhdGEpIHtcbiAgICByZXR1cm4gY2xhaW1fbm9kZShub2RlcywgKG5vZGUpID0+IG5vZGUubm9kZVR5cGUgPT09IDMsIChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGFTdHIgPSAnJyArIGRhdGE7XG4gICAgICAgIGlmIChub2RlLmRhdGEuc3RhcnRzV2l0aChkYXRhU3RyKSkge1xuICAgICAgICAgICAgaWYgKG5vZGUuZGF0YS5sZW5ndGggIT09IGRhdGFTdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUuc3BsaXRUZXh0KGRhdGFTdHIubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUuZGF0YSA9IGRhdGFTdHI7XG4gICAgICAgIH1cbiAgICB9LCAoKSA9PiB0ZXh0KGRhdGEpLCB0cnVlIC8vIFRleHQgbm9kZXMgc2hvdWxkIG5vdCB1cGRhdGUgbGFzdCBpbmRleCBzaW5jZSBpdCBpcyBsaWtlbHkgbm90IHdvcnRoIGl0IHRvIGVsaW1pbmF0ZSBhbiBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlIG9mIGFjdHVhbCBlbGVtZW50c1xuICAgICk7XG59XG5mdW5jdGlvbiBjbGFpbV9zcGFjZShub2Rlcykge1xuICAgIHJldHVybiBjbGFpbV90ZXh0KG5vZGVzLCAnICcpO1xufVxuZnVuY3Rpb24gY2xhaW1fY29tbWVudChub2RlcywgZGF0YSkge1xuICAgIHJldHVybiBjbGFpbV9ub2RlKG5vZGVzLCAobm9kZSkgPT4gbm9kZS5ub2RlVHlwZSA9PT0gOCwgKG5vZGUpID0+IHtcbiAgICAgICAgbm9kZS5kYXRhID0gJycgKyBkYXRhO1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0sICgpID0+IGNvbW1lbnQoZGF0YSksIHRydWUpO1xufVxuZnVuY3Rpb24gZmluZF9jb21tZW50KG5vZGVzLCB0ZXh0LCBzdGFydCkge1xuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IG5vZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDggLyogY29tbWVudCBub2RlICovICYmIG5vZGUudGV4dENvbnRlbnQudHJpbSgpID09PSB0ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm9kZXMubGVuZ3RoO1xufVxuZnVuY3Rpb24gY2xhaW1faHRtbF90YWcobm9kZXMsIGlzX3N2Zykge1xuICAgIC8vIGZpbmQgaHRtbCBvcGVuaW5nIHRhZ1xuICAgIGNvbnN0IHN0YXJ0X2luZGV4ID0gZmluZF9jb21tZW50KG5vZGVzLCAnSFRNTF9UQUdfU1RBUlQnLCAwKTtcbiAgICBjb25zdCBlbmRfaW5kZXggPSBmaW5kX2NvbW1lbnQobm9kZXMsICdIVE1MX1RBR19FTkQnLCBzdGFydF9pbmRleCk7XG4gICAgaWYgKHN0YXJ0X2luZGV4ID09PSBlbmRfaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBIdG1sVGFnSHlkcmF0aW9uKHVuZGVmaW5lZCwgaXNfc3ZnKTtcbiAgICB9XG4gICAgaW5pdF9jbGFpbV9pbmZvKG5vZGVzKTtcbiAgICBjb25zdCBodG1sX3RhZ19ub2RlcyA9IG5vZGVzLnNwbGljZShzdGFydF9pbmRleCwgZW5kX2luZGV4IC0gc3RhcnRfaW5kZXggKyAxKTtcbiAgICBkZXRhY2goaHRtbF90YWdfbm9kZXNbMF0pO1xuICAgIGRldGFjaChodG1sX3RhZ19ub2Rlc1todG1sX3RhZ19ub2Rlcy5sZW5ndGggLSAxXSk7XG4gICAgY29uc3QgY2xhaW1lZF9ub2RlcyA9IGh0bWxfdGFnX25vZGVzLnNsaWNlKDEsIGh0bWxfdGFnX25vZGVzLmxlbmd0aCAtIDEpO1xuICAgIGZvciAoY29uc3QgbiBvZiBjbGFpbWVkX25vZGVzKSB7XG4gICAgICAgIG4uY2xhaW1fb3JkZXIgPSBub2Rlcy5jbGFpbV9pbmZvLnRvdGFsX2NsYWltZWQ7XG4gICAgICAgIG5vZGVzLmNsYWltX2luZm8udG90YWxfY2xhaW1lZCArPSAxO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEh0bWxUYWdIeWRyYXRpb24oY2xhaW1lZF9ub2RlcywgaXNfc3ZnKTtcbn1cbmZ1bmN0aW9uIHNldF9kYXRhKHRleHQsIGRhdGEpIHtcbiAgICBkYXRhID0gJycgKyBkYXRhO1xuICAgIGlmICh0ZXh0LmRhdGEgPT09IGRhdGEpXG4gICAgICAgIHJldHVybjtcbiAgICB0ZXh0LmRhdGEgPSBkYXRhO1xufVxuZnVuY3Rpb24gc2V0X2RhdGFfY29udGVudGVkaXRhYmxlKHRleHQsIGRhdGEpIHtcbiAgICBkYXRhID0gJycgKyBkYXRhO1xuICAgIGlmICh0ZXh0Lndob2xlVGV4dCA9PT0gZGF0YSlcbiAgICAgICAgcmV0dXJuO1xuICAgIHRleHQuZGF0YSA9IGRhdGE7XG59XG5mdW5jdGlvbiBzZXRfZGF0YV9tYXliZV9jb250ZW50ZWRpdGFibGUodGV4dCwgZGF0YSwgYXR0cl92YWx1ZSkge1xuICAgIGlmICh+Y29udGVudGVkaXRhYmxlX3RydXRoeV92YWx1ZXMuaW5kZXhPZihhdHRyX3ZhbHVlKSkge1xuICAgICAgICBzZXRfZGF0YV9jb250ZW50ZWRpdGFibGUodGV4dCwgZGF0YSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzZXRfZGF0YSh0ZXh0LCBkYXRhKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzZXRfaW5wdXRfdmFsdWUoaW5wdXQsIHZhbHVlKSB7XG4gICAgaW5wdXQudmFsdWUgPSB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIHNldF9pbnB1dF90eXBlKGlucHV0LCB0eXBlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaW5wdXQudHlwZSA9IHR5cGU7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICB9XG59XG5mdW5jdGlvbiBzZXRfc3R5bGUobm9kZSwga2V5LCB2YWx1ZSwgaW1wb3J0YW50KSB7XG4gICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgbm9kZS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShrZXkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbm9kZS5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIHZhbHVlLCBpbXBvcnRhbnQgPyAnaW1wb3J0YW50JyA6ICcnKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzZWxlY3Rfb3B0aW9uKHNlbGVjdCwgdmFsdWUsIG1vdW50aW5nKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Qub3B0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBzZWxlY3Qub3B0aW9uc1tpXTtcbiAgICAgICAgaWYgKG9wdGlvbi5fX3ZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIW1vdW50aW5nIHx8IHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc2VsZWN0LnNlbGVjdGVkSW5kZXggPSAtMTsgLy8gbm8gb3B0aW9uIHNob3VsZCBiZSBzZWxlY3RlZFxuICAgIH1cbn1cbmZ1bmN0aW9uIHNlbGVjdF9vcHRpb25zKHNlbGVjdCwgdmFsdWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHNlbGVjdC5vcHRpb25zW2ldO1xuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB+dmFsdWUuaW5kZXhPZihvcHRpb24uX192YWx1ZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gc2VsZWN0X3ZhbHVlKHNlbGVjdCkge1xuICAgIGNvbnN0IHNlbGVjdGVkX29wdGlvbiA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCc6Y2hlY2tlZCcpO1xuICAgIHJldHVybiBzZWxlY3RlZF9vcHRpb24gJiYgc2VsZWN0ZWRfb3B0aW9uLl9fdmFsdWU7XG59XG5mdW5jdGlvbiBzZWxlY3RfbXVsdGlwbGVfdmFsdWUoc2VsZWN0KSB7XG4gICAgcmV0dXJuIFtdLm1hcC5jYWxsKHNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKCc6Y2hlY2tlZCcpLCBvcHRpb24gPT4gb3B0aW9uLl9fdmFsdWUpO1xufVxuLy8gdW5mb3J0dW5hdGVseSB0aGlzIGNhbid0IGJlIGEgY29uc3RhbnQgYXMgdGhhdCB3b3VsZG4ndCBiZSB0cmVlLXNoYWtlYWJsZVxuLy8gc28gd2UgY2FjaGUgdGhlIHJlc3VsdCBpbnN0ZWFkXG5sZXQgY3Jvc3NvcmlnaW47XG5mdW5jdGlvbiBpc19jcm9zc29yaWdpbigpIHtcbiAgICBpZiAoY3Jvc3NvcmlnaW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjcm9zc29yaWdpbiA9IGZhbHNlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICB2b2lkIHdpbmRvdy5wYXJlbnQuZG9jdW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjcm9zc29yaWdpbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNyb3Nzb3JpZ2luO1xufVxuZnVuY3Rpb24gYWRkX2lmcmFtZV9yZXNpemVfbGlzdGVuZXIobm9kZSwgZm4pIHtcbiAgICBjb25zdCBjb21wdXRlZF9zdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgaWYgKGNvbXB1dGVkX3N0eWxlLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgICAgICBub2RlLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICB9XG4gICAgY29uc3QgaWZyYW1lID0gZWxlbWVudCgnaWZyYW1lJyk7XG4gICAgaWZyYW1lLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogYmxvY2s7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyAnICtcbiAgICAgICAgJ292ZXJmbG93OiBoaWRkZW47IGJvcmRlcjogMDsgb3BhY2l0eTogMDsgcG9pbnRlci1ldmVudHM6IG5vbmU7IHotaW5kZXg6IC0xOycpO1xuICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICBpZnJhbWUudGFiSW5kZXggPSAtMTtcbiAgICBjb25zdCBjcm9zc29yaWdpbiA9IGlzX2Nyb3Nzb3JpZ2luKCk7XG4gICAgbGV0IHVuc3Vic2NyaWJlO1xuICAgIGlmIChjcm9zc29yaWdpbikge1xuICAgICAgICBpZnJhbWUuc3JjID0gXCJkYXRhOnRleHQvaHRtbCw8c2NyaXB0Pm9ucmVzaXplPWZ1bmN0aW9uKCl7cGFyZW50LnBvc3RNZXNzYWdlKDAsJyonKX08L3NjcmlwdD5cIjtcbiAgICAgICAgdW5zdWJzY3JpYmUgPSBsaXN0ZW4od2luZG93LCAnbWVzc2FnZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gaWZyYW1lLmNvbnRlbnRXaW5kb3cpXG4gICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZnJhbWUuc3JjID0gJ2Fib3V0OmJsYW5rJztcbiAgICAgICAgaWZyYW1lLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlID0gbGlzdGVuKGlmcmFtZS5jb250ZW50V2luZG93LCAncmVzaXplJywgZm4pO1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIGFuIGluaXRpYWwgcmVzaXplIGV2ZW50IGlzIGZpcmVkIF9hZnRlcl8gdGhlIGlmcmFtZSBpcyBsb2FkZWQgKHdoaWNoIGlzIGFzeW5jaHJvbm91cylcbiAgICAgICAgICAgIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vc3ZlbHRlanMvc3ZlbHRlL2lzc3Vlcy80MjMzXG4gICAgICAgICAgICBmbigpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBhcHBlbmQobm9kZSwgaWZyYW1lKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAoY3Jvc3NvcmlnaW4pIHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodW5zdWJzY3JpYmUgJiYgaWZyYW1lLmNvbnRlbnRXaW5kb3cpIHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZGV0YWNoKGlmcmFtZSk7XG4gICAgfTtcbn1cbmNvbnN0IHJlc2l6ZV9vYnNlcnZlcl9jb250ZW50X2JveCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgUmVzaXplT2JzZXJ2ZXJTaW5nbGV0b24oeyBib3g6ICdjb250ZW50LWJveCcgfSk7XG5jb25zdCByZXNpemVfb2JzZXJ2ZXJfYm9yZGVyX2JveCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgUmVzaXplT2JzZXJ2ZXJTaW5nbGV0b24oeyBib3g6ICdib3JkZXItYm94JyB9KTtcbmNvbnN0IHJlc2l6ZV9vYnNlcnZlcl9kZXZpY2VfcGl4ZWxfY29udGVudF9ib3ggPSAvKiBAX19QVVJFX18gKi8gbmV3IFJlc2l6ZU9ic2VydmVyU2luZ2xldG9uKHsgYm94OiAnZGV2aWNlLXBpeGVsLWNvbnRlbnQtYm94JyB9KTtcbmZ1bmN0aW9uIHRvZ2dsZV9jbGFzcyhlbGVtZW50LCBuYW1lLCB0b2dnbGUpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdFt0b2dnbGUgPyAnYWRkJyA6ICdyZW1vdmUnXShuYW1lKTtcbn1cbmZ1bmN0aW9uIGN1c3RvbV9ldmVudCh0eXBlLCBkZXRhaWwsIHsgYnViYmxlcyA9IGZhbHNlLCBjYW5jZWxhYmxlID0gZmFsc2UgfSA9IHt9KSB7XG4gICAgY29uc3QgZSA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgIGUuaW5pdEN1c3RvbUV2ZW50KHR5cGUsIGJ1YmJsZXMsIGNhbmNlbGFibGUsIGRldGFpbCk7XG4gICAgcmV0dXJuIGU7XG59XG5mdW5jdGlvbiBxdWVyeV9zZWxlY3Rvcl9hbGwoc2VsZWN0b3IsIHBhcmVudCA9IGRvY3VtZW50LmJvZHkpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShwYXJlbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xufVxuZnVuY3Rpb24gaGVhZF9zZWxlY3Rvcihub2RlSWQsIGhlYWQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBsZXQgc3RhcnRlZCA9IDA7XG4gICAgZm9yIChjb25zdCBub2RlIG9mIGhlYWQuY2hpbGROb2Rlcykge1xuICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gOCAvKiBjb21tZW50IG5vZGUgKi8pIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1lbnQgPSBub2RlLnRleHRDb250ZW50LnRyaW0oKTtcbiAgICAgICAgICAgIGlmIChjb21tZW50ID09PSBgSEVBRF8ke25vZGVJZH1fRU5EYCkge1xuICAgICAgICAgICAgICAgIHN0YXJ0ZWQgLT0gMTtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNvbW1lbnQgPT09IGBIRUFEXyR7bm9kZUlkfV9TVEFSVGApIHtcbiAgICAgICAgICAgICAgICBzdGFydGVkICs9IDE7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhcnRlZCA+IDApIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKG5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5jbGFzcyBIdG1sVGFnIHtcbiAgICBjb25zdHJ1Y3Rvcihpc19zdmcgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmlzX3N2ZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzX3N2ZyA9IGlzX3N2ZztcbiAgICAgICAgdGhpcy5lID0gdGhpcy5uID0gbnVsbDtcbiAgICB9XG4gICAgYyhodG1sKSB7XG4gICAgICAgIHRoaXMuaChodG1sKTtcbiAgICB9XG4gICAgbShodG1sLCB0YXJnZXQsIGFuY2hvciA9IG51bGwpIHtcbiAgICAgICAgaWYgKCF0aGlzLmUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzX3N2ZylcbiAgICAgICAgICAgICAgICB0aGlzLmUgPSBzdmdfZWxlbWVudCh0YXJnZXQubm9kZU5hbWUpO1xuICAgICAgICAgICAgLyoqICM3MzY0ICB0YXJnZXQgZm9yIDx0ZW1wbGF0ZT4gbWF5IGJlIHByb3ZpZGVkIGFzICNkb2N1bWVudC1mcmFnbWVudCgxMSkgKi9cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLmUgPSBlbGVtZW50KCh0YXJnZXQubm9kZVR5cGUgPT09IDExID8gJ1RFTVBMQVRFJyA6IHRhcmdldC5ub2RlTmFtZSkpO1xuICAgICAgICAgICAgdGhpcy50ID0gdGFyZ2V0LnRhZ05hbWUgIT09ICdURU1QTEFURScgPyB0YXJnZXQgOiB0YXJnZXQuY29udGVudDtcbiAgICAgICAgICAgIHRoaXMuYyhodG1sKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmkoYW5jaG9yKTtcbiAgICB9XG4gICAgaChodG1sKSB7XG4gICAgICAgIHRoaXMuZS5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICB0aGlzLm4gPSBBcnJheS5mcm9tKHRoaXMuZS5ub2RlTmFtZSA9PT0gJ1RFTVBMQVRFJyA/IHRoaXMuZS5jb250ZW50LmNoaWxkTm9kZXMgOiB0aGlzLmUuY2hpbGROb2Rlcyk7XG4gICAgfVxuICAgIGkoYW5jaG9yKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5uLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpbnNlcnQodGhpcy50LCB0aGlzLm5baV0sIGFuY2hvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcChodG1sKSB7XG4gICAgICAgIHRoaXMuZCgpO1xuICAgICAgICB0aGlzLmgoaHRtbCk7XG4gICAgICAgIHRoaXMuaSh0aGlzLmEpO1xuICAgIH1cbiAgICBkKCkge1xuICAgICAgICB0aGlzLm4uZm9yRWFjaChkZXRhY2gpO1xuICAgIH1cbn1cbmNsYXNzIEh0bWxUYWdIeWRyYXRpb24gZXh0ZW5kcyBIdG1sVGFnIHtcbiAgICBjb25zdHJ1Y3RvcihjbGFpbWVkX25vZGVzLCBpc19zdmcgPSBmYWxzZSkge1xuICAgICAgICBzdXBlcihpc19zdmcpO1xuICAgICAgICB0aGlzLmUgPSB0aGlzLm4gPSBudWxsO1xuICAgICAgICB0aGlzLmwgPSBjbGFpbWVkX25vZGVzO1xuICAgIH1cbiAgICBjKGh0bWwpIHtcbiAgICAgICAgaWYgKHRoaXMubCkge1xuICAgICAgICAgICAgdGhpcy5uID0gdGhpcy5sO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3VwZXIuYyhodG1sKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpKGFuY2hvcikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaW5zZXJ0X2h5ZHJhdGlvbih0aGlzLnQsIHRoaXMubltpXSwgYW5jaG9yKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGF0dHJpYnV0ZV90b19vYmplY3QoYXR0cmlidXRlcykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAoY29uc3QgYXR0cmlidXRlIG9mIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgcmVzdWx0W2F0dHJpYnV0ZS5uYW1lXSA9IGF0dHJpYnV0ZS52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGdldF9jdXN0b21fZWxlbWVudHNfc2xvdHMoZWxlbWVudCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGVsZW1lbnQuY2hpbGROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgIHJlc3VsdFtub2RlLnNsb3QgfHwgJ2RlZmF1bHQnXSA9IHRydWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGNvbnN0cnVjdF9zdmVsdGVfY29tcG9uZW50KGNvbXBvbmVudCwgcHJvcHMpIHtcbiAgICByZXR1cm4gbmV3IGNvbXBvbmVudChwcm9wcyk7XG59XG5cbi8vIHdlIG5lZWQgdG8gc3RvcmUgdGhlIGluZm9ybWF0aW9uIGZvciBtdWx0aXBsZSBkb2N1bWVudHMgYmVjYXVzZSBhIFN2ZWx0ZSBhcHBsaWNhdGlvbiBjb3VsZCBhbHNvIGNvbnRhaW4gaWZyYW1lc1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3N2ZWx0ZWpzL3N2ZWx0ZS9pc3N1ZXMvMzYyNFxuY29uc3QgbWFuYWdlZF9zdHlsZXMgPSBuZXcgTWFwKCk7XG5sZXQgYWN0aXZlID0gMDtcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kYXJrc2t5YXBwL3N0cmluZy1oYXNoL2Jsb2IvbWFzdGVyL2luZGV4LmpzXG5mdW5jdGlvbiBoYXNoKHN0cikge1xuICAgIGxldCBoYXNoID0gNTM4MTtcbiAgICBsZXQgaSA9IHN0ci5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSlcbiAgICAgICAgaGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpIF4gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGhhc2ggPj4+IDA7XG59XG5mdW5jdGlvbiBjcmVhdGVfc3R5bGVfaW5mb3JtYXRpb24oZG9jLCBub2RlKSB7XG4gICAgY29uc3QgaW5mbyA9IHsgc3R5bGVzaGVldDogYXBwZW5kX2VtcHR5X3N0eWxlc2hlZXQobm9kZSksIHJ1bGVzOiB7fSB9O1xuICAgIG1hbmFnZWRfc3R5bGVzLnNldChkb2MsIGluZm8pO1xuICAgIHJldHVybiBpbmZvO1xufVxuZnVuY3Rpb24gY3JlYXRlX3J1bGUobm9kZSwgYSwgYiwgZHVyYXRpb24sIGRlbGF5LCBlYXNlLCBmbiwgdWlkID0gMCkge1xuICAgIGNvbnN0IHN0ZXAgPSAxNi42NjYgLyBkdXJhdGlvbjtcbiAgICBsZXQga2V5ZnJhbWVzID0gJ3tcXG4nO1xuICAgIGZvciAobGV0IHAgPSAwOyBwIDw9IDE7IHAgKz0gc3RlcCkge1xuICAgICAgICBjb25zdCB0ID0gYSArIChiIC0gYSkgKiBlYXNlKHApO1xuICAgICAgICBrZXlmcmFtZXMgKz0gcCAqIDEwMCArIGAleyR7Zm4odCwgMSAtIHQpfX1cXG5gO1xuICAgIH1cbiAgICBjb25zdCBydWxlID0ga2V5ZnJhbWVzICsgYDEwMCUgeyR7Zm4oYiwgMSAtIGIpfX1cXG59YDtcbiAgICBjb25zdCBuYW1lID0gYF9fc3ZlbHRlXyR7aGFzaChydWxlKX1fJHt1aWR9YDtcbiAgICBjb25zdCBkb2MgPSBnZXRfcm9vdF9mb3Jfc3R5bGUobm9kZSk7XG4gICAgY29uc3QgeyBzdHlsZXNoZWV0LCBydWxlcyB9ID0gbWFuYWdlZF9zdHlsZXMuZ2V0KGRvYykgfHwgY3JlYXRlX3N0eWxlX2luZm9ybWF0aW9uKGRvYywgbm9kZSk7XG4gICAgaWYgKCFydWxlc1tuYW1lXSkge1xuICAgICAgICBydWxlc1tuYW1lXSA9IHRydWU7XG4gICAgICAgIHN0eWxlc2hlZXQuaW5zZXJ0UnVsZShgQGtleWZyYW1lcyAke25hbWV9ICR7cnVsZX1gLCBzdHlsZXNoZWV0LmNzc1J1bGVzLmxlbmd0aCk7XG4gICAgfVxuICAgIGNvbnN0IGFuaW1hdGlvbiA9IG5vZGUuc3R5bGUuYW5pbWF0aW9uIHx8ICcnO1xuICAgIG5vZGUuc3R5bGUuYW5pbWF0aW9uID0gYCR7YW5pbWF0aW9uID8gYCR7YW5pbWF0aW9ufSwgYCA6ICcnfSR7bmFtZX0gJHtkdXJhdGlvbn1tcyBsaW5lYXIgJHtkZWxheX1tcyAxIGJvdGhgO1xuICAgIGFjdGl2ZSArPSAxO1xuICAgIHJldHVybiBuYW1lO1xufVxuZnVuY3Rpb24gZGVsZXRlX3J1bGUobm9kZSwgbmFtZSkge1xuICAgIGNvbnN0IHByZXZpb3VzID0gKG5vZGUuc3R5bGUuYW5pbWF0aW9uIHx8ICcnKS5zcGxpdCgnLCAnKTtcbiAgICBjb25zdCBuZXh0ID0gcHJldmlvdXMuZmlsdGVyKG5hbWVcbiAgICAgICAgPyBhbmltID0+IGFuaW0uaW5kZXhPZihuYW1lKSA8IDAgLy8gcmVtb3ZlIHNwZWNpZmljIGFuaW1hdGlvblxuICAgICAgICA6IGFuaW0gPT4gYW5pbS5pbmRleE9mKCdfX3N2ZWx0ZScpID09PSAtMSAvLyByZW1vdmUgYWxsIFN2ZWx0ZSBhbmltYXRpb25zXG4gICAgKTtcbiAgICBjb25zdCBkZWxldGVkID0gcHJldmlvdXMubGVuZ3RoIC0gbmV4dC5sZW5ndGg7XG4gICAgaWYgKGRlbGV0ZWQpIHtcbiAgICAgICAgbm9kZS5zdHlsZS5hbmltYXRpb24gPSBuZXh0LmpvaW4oJywgJyk7XG4gICAgICAgIGFjdGl2ZSAtPSBkZWxldGVkO1xuICAgICAgICBpZiAoIWFjdGl2ZSlcbiAgICAgICAgICAgIGNsZWFyX3J1bGVzKCk7XG4gICAgfVxufVxuZnVuY3Rpb24gY2xlYXJfcnVsZXMoKSB7XG4gICAgZXhwb3J0cy5yYWYoKCkgPT4ge1xuICAgICAgICBpZiAoYWN0aXZlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBtYW5hZ2VkX3N0eWxlcy5mb3JFYWNoKGluZm8gPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBvd25lck5vZGUgfSA9IGluZm8uc3R5bGVzaGVldDtcbiAgICAgICAgICAgIC8vIHRoZXJlIGlzIG5vIG93bmVyTm9kZSBpZiBpdCBydW5zIG9uIGpzZG9tLlxuICAgICAgICAgICAgaWYgKG93bmVyTm9kZSlcbiAgICAgICAgICAgICAgICBkZXRhY2gob3duZXJOb2RlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG1hbmFnZWRfc3R5bGVzLmNsZWFyKCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZV9hbmltYXRpb24obm9kZSwgZnJvbSwgZm4sIHBhcmFtcykge1xuICAgIGlmICghZnJvbSlcbiAgICAgICAgcmV0dXJuIG5vb3A7XG4gICAgY29uc3QgdG8gPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmIChmcm9tLmxlZnQgPT09IHRvLmxlZnQgJiYgZnJvbS5yaWdodCA9PT0gdG8ucmlnaHQgJiYgZnJvbS50b3AgPT09IHRvLnRvcCAmJiBmcm9tLmJvdHRvbSA9PT0gdG8uYm90dG9tKVxuICAgICAgICByZXR1cm4gbm9vcDtcbiAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSAzMDAsIGVhc2luZyA9IGlkZW50aXR5LCBcbiAgICAvLyBAdHMtaWdub3JlIHRvZG86IHNob3VsZCB0aGlzIGJlIHNlcGFyYXRlZCBmcm9tIGRlc3RydWN0dXJpbmc/IE9yIHN0YXJ0L2VuZCBhZGRlZCB0byBwdWJsaWMgYXBpIGFuZCBkb2N1bWVudGF0aW9uP1xuICAgIHN0YXJ0OiBzdGFydF90aW1lID0gZXhwb3J0cy5ub3coKSArIGRlbGF5LCBcbiAgICAvLyBAdHMtaWdub3JlIHRvZG86XG4gICAgZW5kID0gc3RhcnRfdGltZSArIGR1cmF0aW9uLCB0aWNrID0gbm9vcCwgY3NzIH0gPSBmbihub2RlLCB7IGZyb20sIHRvIH0sIHBhcmFtcyk7XG4gICAgbGV0IHJ1bm5pbmcgPSB0cnVlO1xuICAgIGxldCBzdGFydGVkID0gZmFsc2U7XG4gICAgbGV0IG5hbWU7XG4gICAgZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIGlmIChjc3MpIHtcbiAgICAgICAgICAgIG5hbWUgPSBjcmVhdGVfcnVsZShub2RlLCAwLCAxLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRlbGF5KSB7XG4gICAgICAgICAgICBzdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICBpZiAoY3NzKVxuICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSwgbmFtZSk7XG4gICAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgbG9vcChub3cgPT4ge1xuICAgICAgICBpZiAoIXN0YXJ0ZWQgJiYgbm93ID49IHN0YXJ0X3RpbWUpIHtcbiAgICAgICAgICAgIHN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFydGVkICYmIG5vdyA+PSBlbmQpIHtcbiAgICAgICAgICAgIHRpY2soMSwgMCk7XG4gICAgICAgICAgICBzdG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFydW5uaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSBub3cgLSBzdGFydF90aW1lO1xuICAgICAgICAgICAgY29uc3QgdCA9IDAgKyAxICogZWFzaW5nKHAgLyBkdXJhdGlvbik7XG4gICAgICAgICAgICB0aWNrKHQsIDEgLSB0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgICBzdGFydCgpO1xuICAgIHRpY2soMCwgMSk7XG4gICAgcmV0dXJuIHN0b3A7XG59XG5mdW5jdGlvbiBmaXhfcG9zaXRpb24obm9kZSkge1xuICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICBpZiAoc3R5bGUucG9zaXRpb24gIT09ICdhYnNvbHV0ZScgJiYgc3R5bGUucG9zaXRpb24gIT09ICdmaXhlZCcpIHtcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBzdHlsZTtcbiAgICAgICAgY29uc3QgYSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIG5vZGUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICBub2RlLnN0eWxlLndpZHRoID0gd2lkdGg7XG4gICAgICAgIG5vZGUuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBhZGRfdHJhbnNmb3JtKG5vZGUsIGEpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZF90cmFuc2Zvcm0obm9kZSwgYSkge1xuICAgIGNvbnN0IGIgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmIChhLmxlZnQgIT09IGIubGVmdCB8fCBhLnRvcCAhPT0gYi50b3ApIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgICAgICBjb25zdCB0cmFuc2Zvcm0gPSBzdHlsZS50cmFuc2Zvcm0gPT09ICdub25lJyA/ICcnIDogc3R5bGUudHJhbnNmb3JtO1xuICAgICAgICBub2RlLnN0eWxlLnRyYW5zZm9ybSA9IGAke3RyYW5zZm9ybX0gdHJhbnNsYXRlKCR7YS5sZWZ0IC0gYi5sZWZ0fXB4LCAke2EudG9wIC0gYi50b3B9cHgpYDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNldF9jdXJyZW50X2NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICBleHBvcnRzLmN1cnJlbnRfY29tcG9uZW50ID0gY29tcG9uZW50O1xufVxuZnVuY3Rpb24gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkge1xuICAgIGlmICghZXhwb3J0cy5jdXJyZW50X2NvbXBvbmVudClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGdW5jdGlvbiBjYWxsZWQgb3V0c2lkZSBjb21wb25lbnQgaW5pdGlhbGl6YXRpb24nKTtcbiAgICByZXR1cm4gZXhwb3J0cy5jdXJyZW50X2NvbXBvbmVudDtcbn1cbi8qKlxuICogU2NoZWR1bGVzIGEgY2FsbGJhY2sgdG8gcnVuIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIHVwZGF0ZWQgYWZ0ZXIgYW55IHN0YXRlIGNoYW5nZS5cbiAqXG4gKiBUaGUgZmlyc3QgdGltZSB0aGUgY2FsbGJhY2sgcnVucyB3aWxsIGJlIGJlZm9yZSB0aGUgaW5pdGlhbCBgb25Nb3VudGBcbiAqXG4gKiBodHRwczovL3N2ZWx0ZS5kZXYvZG9jcyNydW4tdGltZS1zdmVsdGUtYmVmb3JldXBkYXRlXG4gKi9cbmZ1bmN0aW9uIGJlZm9yZVVwZGF0ZShmbikge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmJlZm9yZV91cGRhdGUucHVzaChmbik7XG59XG4vKipcbiAqIFRoZSBgb25Nb3VudGAgZnVuY3Rpb24gc2NoZWR1bGVzIGEgY2FsbGJhY2sgdG8gcnVuIGFzIHNvb24gYXMgdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBtb3VudGVkIHRvIHRoZSBET00uXG4gKiBJdCBtdXN0IGJlIGNhbGxlZCBkdXJpbmcgdGhlIGNvbXBvbmVudCdzIGluaXRpYWxpc2F0aW9uIChidXQgZG9lc24ndCBuZWVkIHRvIGxpdmUgKmluc2lkZSogdGhlIGNvbXBvbmVudDtcbiAqIGl0IGNhbiBiZSBjYWxsZWQgZnJvbSBhbiBleHRlcm5hbCBtb2R1bGUpLlxuICpcbiAqIGBvbk1vdW50YCBkb2VzIG5vdCBydW4gaW5zaWRlIGEgW3NlcnZlci1zaWRlIGNvbXBvbmVudF0oL2RvY3MjcnVuLXRpbWUtc2VydmVyLXNpZGUtY29tcG9uZW50LWFwaSkuXG4gKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3MjcnVuLXRpbWUtc3ZlbHRlLW9ubW91bnRcbiAqL1xuZnVuY3Rpb24gb25Nb3VudChmbikge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLm9uX21vdW50LnB1c2goZm4pO1xufVxuLyoqXG4gKiBTY2hlZHVsZXMgYSBjYWxsYmFjayB0byBydW4gaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlIGNvbXBvbmVudCBoYXMgYmVlbiB1cGRhdGVkLlxuICpcbiAqIFRoZSBmaXJzdCB0aW1lIHRoZSBjYWxsYmFjayBydW5zIHdpbGwgYmUgYWZ0ZXIgdGhlIGluaXRpYWwgYG9uTW91bnRgXG4gKi9cbmZ1bmN0aW9uIGFmdGVyVXBkYXRlKGZuKSB7XG4gICAgZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuYWZ0ZXJfdXBkYXRlLnB1c2goZm4pO1xufVxuLyoqXG4gKiBTY2hlZHVsZXMgYSBjYWxsYmFjayB0byBydW4gaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBjb21wb25lbnQgaXMgdW5tb3VudGVkLlxuICpcbiAqIE91dCBvZiBgb25Nb3VudGAsIGBiZWZvcmVVcGRhdGVgLCBgYWZ0ZXJVcGRhdGVgIGFuZCBgb25EZXN0cm95YCwgdGhpcyBpcyB0aGVcbiAqIG9ubHkgb25lIHRoYXQgcnVucyBpbnNpZGUgYSBzZXJ2ZXItc2lkZSBjb21wb25lbnQuXG4gKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3MjcnVuLXRpbWUtc3ZlbHRlLW9uZGVzdHJveVxuICovXG5mdW5jdGlvbiBvbkRlc3Ryb3koZm4pIHtcbiAgICBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5vbl9kZXN0cm95LnB1c2goZm4pO1xufVxuLyoqXG4gKiBDcmVhdGVzIGFuIGV2ZW50IGRpc3BhdGNoZXIgdGhhdCBjYW4gYmUgdXNlZCB0byBkaXNwYXRjaCBbY29tcG9uZW50IGV2ZW50c10oL2RvY3MjdGVtcGxhdGUtc3ludGF4LWNvbXBvbmVudC1kaXJlY3RpdmVzLW9uLWV2ZW50bmFtZSkuXG4gKiBFdmVudCBkaXNwYXRjaGVycyBhcmUgZnVuY3Rpb25zIHRoYXQgY2FuIHRha2UgdHdvIGFyZ3VtZW50czogYG5hbWVgIGFuZCBgZGV0YWlsYC5cbiAqXG4gKiBDb21wb25lbnQgZXZlbnRzIGNyZWF0ZWQgd2l0aCBgY3JlYXRlRXZlbnREaXNwYXRjaGVyYCBjcmVhdGUgYVxuICogW0N1c3RvbUV2ZW50XShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ3VzdG9tRXZlbnQpLlxuICogVGhlc2UgZXZlbnRzIGRvIG5vdCBbYnViYmxlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL0xlYXJuL0phdmFTY3JpcHQvQnVpbGRpbmdfYmxvY2tzL0V2ZW50cyNFdmVudF9idWJibGluZ19hbmRfY2FwdHVyZSkuXG4gKiBUaGUgYGRldGFpbGAgYXJndW1lbnQgY29ycmVzcG9uZHMgdG8gdGhlIFtDdXN0b21FdmVudC5kZXRhaWxdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DdXN0b21FdmVudC9kZXRhaWwpXG4gKiBwcm9wZXJ0eSBhbmQgY2FuIGNvbnRhaW4gYW55IHR5cGUgb2YgZGF0YS5cbiAqXG4gKiBodHRwczovL3N2ZWx0ZS5kZXYvZG9jcyNydW4tdGltZS1zdmVsdGUtY3JlYXRlZXZlbnRkaXNwYXRjaGVyXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSBnZXRfY3VycmVudF9jb21wb25lbnQoKTtcbiAgICByZXR1cm4gKHR5cGUsIGRldGFpbCwgeyBjYW5jZWxhYmxlID0gZmFsc2UgfSA9IHt9KSA9PiB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9IGNvbXBvbmVudC4kJC5jYWxsYmFja3NbdHlwZV07XG4gICAgICAgIGlmIChjYWxsYmFja3MpIHtcbiAgICAgICAgICAgIC8vIFRPRE8gYXJlIHRoZXJlIHNpdHVhdGlvbnMgd2hlcmUgZXZlbnRzIGNvdWxkIGJlIGRpc3BhdGNoZWRcbiAgICAgICAgICAgIC8vIGluIGEgc2VydmVyIChub24tRE9NKSBlbnZpcm9ubWVudD9cbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gY3VzdG9tX2V2ZW50KHR5cGUsIGRldGFpbCwgeyBjYW5jZWxhYmxlIH0pO1xuICAgICAgICAgICAgY2FsbGJhY2tzLnNsaWNlKCkuZm9yRWFjaChmbiA9PiB7XG4gICAgICAgICAgICAgICAgZm4uY2FsbChjb21wb25lbnQsIGV2ZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuICFldmVudC5kZWZhdWx0UHJldmVudGVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG59XG4vKipcbiAqIEFzc29jaWF0ZXMgYW4gYXJiaXRyYXJ5IGBjb250ZXh0YCBvYmplY3Qgd2l0aCB0aGUgY3VycmVudCBjb21wb25lbnQgYW5kIHRoZSBzcGVjaWZpZWQgYGtleWBcbiAqIGFuZCByZXR1cm5zIHRoYXQgb2JqZWN0LiBUaGUgY29udGV4dCBpcyB0aGVuIGF2YWlsYWJsZSB0byBjaGlsZHJlbiBvZiB0aGUgY29tcG9uZW50XG4gKiAoaW5jbHVkaW5nIHNsb3R0ZWQgY29udGVudCkgd2l0aCBgZ2V0Q29udGV4dGAuXG4gKlxuICogTGlrZSBsaWZlY3ljbGUgZnVuY3Rpb25zLCB0aGlzIG11c3QgYmUgY2FsbGVkIGR1cmluZyBjb21wb25lbnQgaW5pdGlhbGlzYXRpb24uXG4gKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3MjcnVuLXRpbWUtc3ZlbHRlLXNldGNvbnRleHRcbiAqL1xuZnVuY3Rpb24gc2V0Q29udGV4dChrZXksIGNvbnRleHQpIHtcbiAgICBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5jb250ZXh0LnNldChrZXksIGNvbnRleHQpO1xuICAgIHJldHVybiBjb250ZXh0O1xufVxuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIGNvbnRleHQgdGhhdCBiZWxvbmdzIHRvIHRoZSBjbG9zZXN0IHBhcmVudCBjb21wb25lbnQgd2l0aCB0aGUgc3BlY2lmaWVkIGBrZXlgLlxuICogTXVzdCBiZSBjYWxsZWQgZHVyaW5nIGNvbXBvbmVudCBpbml0aWFsaXNhdGlvbi5cbiAqXG4gKiBodHRwczovL3N2ZWx0ZS5kZXYvZG9jcyNydW4tdGltZS1zdmVsdGUtZ2V0Y29udGV4dFxuICovXG5mdW5jdGlvbiBnZXRDb250ZXh0KGtleSkge1xuICAgIHJldHVybiBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5jb250ZXh0LmdldChrZXkpO1xufVxuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIHdob2xlIGNvbnRleHQgbWFwIHRoYXQgYmVsb25ncyB0byB0aGUgY2xvc2VzdCBwYXJlbnQgY29tcG9uZW50LlxuICogTXVzdCBiZSBjYWxsZWQgZHVyaW5nIGNvbXBvbmVudCBpbml0aWFsaXNhdGlvbi4gVXNlZnVsLCBmb3IgZXhhbXBsZSwgaWYgeW91XG4gKiBwcm9ncmFtbWF0aWNhbGx5IGNyZWF0ZSBhIGNvbXBvbmVudCBhbmQgd2FudCB0byBwYXNzIHRoZSBleGlzdGluZyBjb250ZXh0IHRvIGl0LlxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzI3J1bi10aW1lLXN2ZWx0ZS1nZXRhbGxjb250ZXh0c1xuICovXG5mdW5jdGlvbiBnZXRBbGxDb250ZXh0cygpIHtcbiAgICByZXR1cm4gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuY29udGV4dDtcbn1cbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgYSBnaXZlbiBga2V5YCBoYXMgYmVlbiBzZXQgaW4gdGhlIGNvbnRleHQgb2YgYSBwYXJlbnQgY29tcG9uZW50LlxuICogTXVzdCBiZSBjYWxsZWQgZHVyaW5nIGNvbXBvbmVudCBpbml0aWFsaXNhdGlvbi5cbiAqXG4gKiBodHRwczovL3N2ZWx0ZS5kZXYvZG9jcyNydW4tdGltZS1zdmVsdGUtaGFzY29udGV4dFxuICovXG5mdW5jdGlvbiBoYXNDb250ZXh0KGtleSkge1xuICAgIHJldHVybiBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5jb250ZXh0LmhhcyhrZXkpO1xufVxuLy8gVE9ETyBmaWd1cmUgb3V0IGlmIHdlIHN0aWxsIHdhbnQgdG8gc3VwcG9ydFxuLy8gc2hvcnRoYW5kIGV2ZW50cywgb3IgaWYgd2Ugd2FudCB0byBpbXBsZW1lbnRcbi8vIGEgcmVhbCBidWJibGluZyBtZWNoYW5pc21cbmZ1bmN0aW9uIGJ1YmJsZShjb21wb25lbnQsIGV2ZW50KSB7XG4gICAgY29uc3QgY2FsbGJhY2tzID0gY29tcG9uZW50LiQkLmNhbGxiYWNrc1tldmVudC50eXBlXTtcbiAgICBpZiAoY2FsbGJhY2tzKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY2FsbGJhY2tzLnNsaWNlKCkuZm9yRWFjaChmbiA9PiBmbi5jYWxsKHRoaXMsIGV2ZW50KSk7XG4gICAgfVxufVxuXG5jb25zdCBkaXJ0eV9jb21wb25lbnRzID0gW107XG5jb25zdCBpbnRyb3MgPSB7IGVuYWJsZWQ6IGZhbHNlIH07XG5jb25zdCBiaW5kaW5nX2NhbGxiYWNrcyA9IFtdO1xubGV0IHJlbmRlcl9jYWxsYmFja3MgPSBbXTtcbmNvbnN0IGZsdXNoX2NhbGxiYWNrcyA9IFtdO1xuY29uc3QgcmVzb2x2ZWRfcHJvbWlzZSA9IC8qIEBfX1BVUkVfXyAqLyBQcm9taXNlLnJlc29sdmUoKTtcbmxldCB1cGRhdGVfc2NoZWR1bGVkID0gZmFsc2U7XG5mdW5jdGlvbiBzY2hlZHVsZV91cGRhdGUoKSB7XG4gICAgaWYgKCF1cGRhdGVfc2NoZWR1bGVkKSB7XG4gICAgICAgIHVwZGF0ZV9zY2hlZHVsZWQgPSB0cnVlO1xuICAgICAgICByZXNvbHZlZF9wcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHRpY2soKSB7XG4gICAgc2NoZWR1bGVfdXBkYXRlKCk7XG4gICAgcmV0dXJuIHJlc29sdmVkX3Byb21pc2U7XG59XG5mdW5jdGlvbiBhZGRfcmVuZGVyX2NhbGxiYWNrKGZuKSB7XG4gICAgcmVuZGVyX2NhbGxiYWNrcy5wdXNoKGZuKTtcbn1cbmZ1bmN0aW9uIGFkZF9mbHVzaF9jYWxsYmFjayhmbikge1xuICAgIGZsdXNoX2NhbGxiYWNrcy5wdXNoKGZuKTtcbn1cbi8vIGZsdXNoKCkgY2FsbHMgY2FsbGJhY2tzIGluIHRoaXMgb3JkZXI6XG4vLyAxLiBBbGwgYmVmb3JlVXBkYXRlIGNhbGxiYWNrcywgaW4gb3JkZXI6IHBhcmVudHMgYmVmb3JlIGNoaWxkcmVuXG4vLyAyLiBBbGwgYmluZDp0aGlzIGNhbGxiYWNrcywgaW4gcmV2ZXJzZSBvcmRlcjogY2hpbGRyZW4gYmVmb3JlIHBhcmVudHMuXG4vLyAzLiBBbGwgYWZ0ZXJVcGRhdGUgY2FsbGJhY2tzLCBpbiBvcmRlcjogcGFyZW50cyBiZWZvcmUgY2hpbGRyZW4uIEVYQ0VQVFxuLy8gICAgZm9yIGFmdGVyVXBkYXRlcyBjYWxsZWQgZHVyaW5nIHRoZSBpbml0aWFsIG9uTW91bnQsIHdoaWNoIGFyZSBjYWxsZWQgaW5cbi8vICAgIHJldmVyc2Ugb3JkZXI6IGNoaWxkcmVuIGJlZm9yZSBwYXJlbnRzLlxuLy8gU2luY2UgY2FsbGJhY2tzIG1pZ2h0IHVwZGF0ZSBjb21wb25lbnQgdmFsdWVzLCB3aGljaCBjb3VsZCB0cmlnZ2VyIGFub3RoZXJcbi8vIGNhbGwgdG8gZmx1c2goKSwgdGhlIGZvbGxvd2luZyBzdGVwcyBndWFyZCBhZ2FpbnN0IHRoaXM6XG4vLyAxLiBEdXJpbmcgYmVmb3JlVXBkYXRlLCBhbnkgdXBkYXRlZCBjb21wb25lbnRzIHdpbGwgYmUgYWRkZWQgdG8gdGhlXG4vLyAgICBkaXJ0eV9jb21wb25lbnRzIGFycmF5IGFuZCB3aWxsIGNhdXNlIGEgcmVlbnRyYW50IGNhbGwgdG8gZmx1c2goKS4gQmVjYXVzZVxuLy8gICAgdGhlIGZsdXNoIGluZGV4IGlzIGtlcHQgb3V0c2lkZSB0aGUgZnVuY3Rpb24sIHRoZSByZWVudHJhbnQgY2FsbCB3aWxsIHBpY2tcbi8vICAgIHVwIHdoZXJlIHRoZSBlYXJsaWVyIGNhbGwgbGVmdCBvZmYgYW5kIGdvIHRocm91Z2ggYWxsIGRpcnR5IGNvbXBvbmVudHMuIFRoZVxuLy8gICAgY3VycmVudF9jb21wb25lbnQgdmFsdWUgaXMgc2F2ZWQgYW5kIHJlc3RvcmVkIHNvIHRoYXQgdGhlIHJlZW50cmFudCBjYWxsIHdpbGxcbi8vICAgIG5vdCBpbnRlcmZlcmUgd2l0aCB0aGUgXCJwYXJlbnRcIiBmbHVzaCgpIGNhbGwuXG4vLyAyLiBiaW5kOnRoaXMgY2FsbGJhY2tzIGNhbm5vdCB0cmlnZ2VyIG5ldyBmbHVzaCgpIGNhbGxzLlxuLy8gMy4gRHVyaW5nIGFmdGVyVXBkYXRlLCBhbnkgdXBkYXRlZCBjb21wb25lbnRzIHdpbGwgTk9UIGhhdmUgdGhlaXIgYWZ0ZXJVcGRhdGVcbi8vICAgIGNhbGxiYWNrIGNhbGxlZCBhIHNlY29uZCB0aW1lOyB0aGUgc2Vlbl9jYWxsYmFja3Mgc2V0LCBvdXRzaWRlIHRoZSBmbHVzaCgpXG4vLyAgICBmdW5jdGlvbiwgZ3VhcmFudGVlcyB0aGlzIGJlaGF2aW9yLlxuY29uc3Qgc2Vlbl9jYWxsYmFja3MgPSBuZXcgU2V0KCk7XG5sZXQgZmx1c2hpZHggPSAwOyAvLyBEbyAqbm90KiBtb3ZlIHRoaXMgaW5zaWRlIHRoZSBmbHVzaCgpIGZ1bmN0aW9uXG5mdW5jdGlvbiBmbHVzaCgpIHtcbiAgICAvLyBEbyBub3QgcmVlbnRlciBmbHVzaCB3aGlsZSBkaXJ0eSBjb21wb25lbnRzIGFyZSB1cGRhdGVkLCBhcyB0aGlzIGNhblxuICAgIC8vIHJlc3VsdCBpbiBhbiBpbmZpbml0ZSBsb29wLiBJbnN0ZWFkLCBsZXQgdGhlIGlubmVyIGZsdXNoIGhhbmRsZSBpdC5cbiAgICAvLyBSZWVudHJhbmN5IGlzIG9rIGFmdGVyd2FyZHMgZm9yIGJpbmRpbmdzIGV0Yy5cbiAgICBpZiAoZmx1c2hpZHggIT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzYXZlZF9jb21wb25lbnQgPSBleHBvcnRzLmN1cnJlbnRfY29tcG9uZW50O1xuICAgIGRvIHtcbiAgICAgICAgLy8gZmlyc3QsIGNhbGwgYmVmb3JlVXBkYXRlIGZ1bmN0aW9uc1xuICAgICAgICAvLyBhbmQgdXBkYXRlIGNvbXBvbmVudHNcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHdoaWxlIChmbHVzaGlkeCA8IGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gZGlydHlfY29tcG9uZW50c1tmbHVzaGlkeF07XG4gICAgICAgICAgICAgICAgZmx1c2hpZHgrKztcbiAgICAgICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICB1cGRhdGUoY29tcG9uZW50LiQkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gcmVzZXQgZGlydHkgc3RhdGUgdG8gbm90IGVuZCB1cCBpbiBhIGRlYWRsb2NrZWQgc3RhdGUgYW5kIHRoZW4gcmV0aHJvd1xuICAgICAgICAgICAgZGlydHlfY29tcG9uZW50cy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgZmx1c2hpZHggPSAwO1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQobnVsbCk7XG4gICAgICAgIGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoID0gMDtcbiAgICAgICAgZmx1c2hpZHggPSAwO1xuICAgICAgICB3aGlsZSAoYmluZGluZ19jYWxsYmFja3MubGVuZ3RoKVxuICAgICAgICAgICAgYmluZGluZ19jYWxsYmFja3MucG9wKCkoKTtcbiAgICAgICAgLy8gdGhlbiwgb25jZSBjb21wb25lbnRzIGFyZSB1cGRhdGVkLCBjYWxsXG4gICAgICAgIC8vIGFmdGVyVXBkYXRlIGZ1bmN0aW9ucy4gVGhpcyBtYXkgY2F1c2VcbiAgICAgICAgLy8gc3Vic2VxdWVudCB1cGRhdGVzLi4uXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVuZGVyX2NhbGxiYWNrcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSByZW5kZXJfY2FsbGJhY2tzW2ldO1xuICAgICAgICAgICAgaWYgKCFzZWVuX2NhbGxiYWNrcy5oYXMoY2FsbGJhY2spKSB7XG4gICAgICAgICAgICAgICAgLy8gLi4uc28gZ3VhcmQgYWdhaW5zdCBpbmZpbml0ZSBsb29wc1xuICAgICAgICAgICAgICAgIHNlZW5fY2FsbGJhY2tzLmFkZChjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZW5kZXJfY2FsbGJhY2tzLmxlbmd0aCA9IDA7XG4gICAgfSB3aGlsZSAoZGlydHlfY29tcG9uZW50cy5sZW5ndGgpO1xuICAgIHdoaWxlIChmbHVzaF9jYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgICAgIGZsdXNoX2NhbGxiYWNrcy5wb3AoKSgpO1xuICAgIH1cbiAgICB1cGRhdGVfc2NoZWR1bGVkID0gZmFsc2U7XG4gICAgc2Vlbl9jYWxsYmFja3MuY2xlYXIoKTtcbiAgICBzZXRfY3VycmVudF9jb21wb25lbnQoc2F2ZWRfY29tcG9uZW50KTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZSgkJCkge1xuICAgIGlmICgkJC5mcmFnbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAkJC51cGRhdGUoKTtcbiAgICAgICAgcnVuX2FsbCgkJC5iZWZvcmVfdXBkYXRlKTtcbiAgICAgICAgY29uc3QgZGlydHkgPSAkJC5kaXJ0eTtcbiAgICAgICAgJCQuZGlydHkgPSBbLTFdO1xuICAgICAgICAkJC5mcmFnbWVudCAmJiAkJC5mcmFnbWVudC5wKCQkLmN0eCwgZGlydHkpO1xuICAgICAgICAkJC5hZnRlcl91cGRhdGUuZm9yRWFjaChhZGRfcmVuZGVyX2NhbGxiYWNrKTtcbiAgICB9XG59XG4vKipcbiAqIFVzZWZ1bCBmb3IgZXhhbXBsZSB0byBleGVjdXRlIHJlbWFpbmluZyBgYWZ0ZXJVcGRhdGVgIGNhbGxiYWNrcyBiZWZvcmUgZXhlY3V0aW5nIGBkZXN0cm95YC5cbiAqL1xuZnVuY3Rpb24gZmx1c2hfcmVuZGVyX2NhbGxiYWNrcyhmbnMpIHtcbiAgICBjb25zdCBmaWx0ZXJlZCA9IFtdO1xuICAgIGNvbnN0IHRhcmdldHMgPSBbXTtcbiAgICByZW5kZXJfY2FsbGJhY2tzLmZvckVhY2goKGMpID0+IGZucy5pbmRleE9mKGMpID09PSAtMSA/IGZpbHRlcmVkLnB1c2goYykgOiB0YXJnZXRzLnB1c2goYykpO1xuICAgIHRhcmdldHMuZm9yRWFjaCgoYykgPT4gYygpKTtcbiAgICByZW5kZXJfY2FsbGJhY2tzID0gZmlsdGVyZWQ7XG59XG5cbmxldCBwcm9taXNlO1xuZnVuY3Rpb24gd2FpdCgpIHtcbiAgICBpZiAoIXByb21pc2UpIHtcbiAgICAgICAgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICBwcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgcHJvbWlzZSA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cbmZ1bmN0aW9uIGRpc3BhdGNoKG5vZGUsIGRpcmVjdGlvbiwga2luZCkge1xuICAgIG5vZGUuZGlzcGF0Y2hFdmVudChjdXN0b21fZXZlbnQoYCR7ZGlyZWN0aW9uID8gJ2ludHJvJyA6ICdvdXRybyd9JHtraW5kfWApKTtcbn1cbmNvbnN0IG91dHJvaW5nID0gbmV3IFNldCgpO1xubGV0IG91dHJvcztcbmZ1bmN0aW9uIGdyb3VwX291dHJvcygpIHtcbiAgICBvdXRyb3MgPSB7XG4gICAgICAgIHI6IDAsXG4gICAgICAgIGM6IFtdLFxuICAgICAgICBwOiBvdXRyb3MgLy8gcGFyZW50IGdyb3VwXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNoZWNrX291dHJvcygpIHtcbiAgICBpZiAoIW91dHJvcy5yKSB7XG4gICAgICAgIHJ1bl9hbGwob3V0cm9zLmMpO1xuICAgIH1cbiAgICBvdXRyb3MgPSBvdXRyb3MucDtcbn1cbmZ1bmN0aW9uIHRyYW5zaXRpb25faW4oYmxvY2ssIGxvY2FsKSB7XG4gICAgaWYgKGJsb2NrICYmIGJsb2NrLmkpIHtcbiAgICAgICAgb3V0cm9pbmcuZGVsZXRlKGJsb2NrKTtcbiAgICAgICAgYmxvY2suaShsb2NhbCk7XG4gICAgfVxufVxuZnVuY3Rpb24gdHJhbnNpdGlvbl9vdXQoYmxvY2ssIGxvY2FsLCBkZXRhY2gsIGNhbGxiYWNrKSB7XG4gICAgaWYgKGJsb2NrICYmIGJsb2NrLm8pIHtcbiAgICAgICAgaWYgKG91dHJvaW5nLmhhcyhibG9jaykpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIG91dHJvaW5nLmFkZChibG9jayk7XG4gICAgICAgIG91dHJvcy5jLnB1c2goKCkgPT4ge1xuICAgICAgICAgICAgb3V0cm9pbmcuZGVsZXRlKGJsb2NrKTtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGlmIChkZXRhY2gpXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrLmQoMSk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGJsb2NrLm8obG9jYWwpO1xuICAgIH1cbiAgICBlbHNlIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgIH1cbn1cbmNvbnN0IG51bGxfdHJhbnNpdGlvbiA9IHsgZHVyYXRpb246IDAgfTtcbmZ1bmN0aW9uIGNyZWF0ZV9pbl90cmFuc2l0aW9uKG5vZGUsIGZuLCBwYXJhbXMpIHtcbiAgICBjb25zdCBvcHRpb25zID0geyBkaXJlY3Rpb246ICdpbicgfTtcbiAgICBsZXQgY29uZmlnID0gZm4obm9kZSwgcGFyYW1zLCBvcHRpb25zKTtcbiAgICBsZXQgcnVubmluZyA9IGZhbHNlO1xuICAgIGxldCBhbmltYXRpb25fbmFtZTtcbiAgICBsZXQgdGFzaztcbiAgICBsZXQgdWlkID0gMDtcbiAgICBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgICAgICBpZiAoYW5pbWF0aW9uX25hbWUpXG4gICAgICAgICAgICBkZWxldGVfcnVsZShub2RlLCBhbmltYXRpb25fbmFtZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdvKCkge1xuICAgICAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSAzMDAsIGVhc2luZyA9IGlkZW50aXR5LCB0aWNrID0gbm9vcCwgY3NzIH0gPSBjb25maWcgfHwgbnVsbF90cmFuc2l0aW9uO1xuICAgICAgICBpZiAoY3NzKVxuICAgICAgICAgICAgYW5pbWF0aW9uX25hbWUgPSBjcmVhdGVfcnVsZShub2RlLCAwLCAxLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzLCB1aWQrKyk7XG4gICAgICAgIHRpY2soMCwgMSk7XG4gICAgICAgIGNvbnN0IHN0YXJ0X3RpbWUgPSBleHBvcnRzLm5vdygpICsgZGVsYXk7XG4gICAgICAgIGNvbnN0IGVuZF90aW1lID0gc3RhcnRfdGltZSArIGR1cmF0aW9uO1xuICAgICAgICBpZiAodGFzaylcbiAgICAgICAgICAgIHRhc2suYWJvcnQoKTtcbiAgICAgICAgcnVubmluZyA9IHRydWU7XG4gICAgICAgIGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4gZGlzcGF0Y2gobm9kZSwgdHJ1ZSwgJ3N0YXJ0JykpO1xuICAgICAgICB0YXNrID0gbG9vcChub3cgPT4ge1xuICAgICAgICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAobm93ID49IGVuZF90aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpY2soMSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5vZGUsIHRydWUsICdlbmQnKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobm93ID49IHN0YXJ0X3RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdCA9IGVhc2luZygobm93IC0gc3RhcnRfdGltZSkgLyBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHRpY2sodCwgMSAtIHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBydW5uaW5nO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGV0IHN0YXJ0ZWQgPSBmYWxzZTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdGFydCgpIHtcbiAgICAgICAgICAgIGlmIChzdGFydGVkKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSk7XG4gICAgICAgICAgICBpZiAoaXNfZnVuY3Rpb24oY29uZmlnKSkge1xuICAgICAgICAgICAgICAgIGNvbmZpZyA9IGNvbmZpZyhvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB3YWl0KCkudGhlbihnbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBnbygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBpbnZhbGlkYXRlKCkge1xuICAgICAgICAgICAgc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB9LFxuICAgICAgICBlbmQoKSB7XG4gICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICAgICAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlX291dF90cmFuc2l0aW9uKG5vZGUsIGZuLCBwYXJhbXMpIHtcbiAgICBjb25zdCBvcHRpb25zID0geyBkaXJlY3Rpb246ICdvdXQnIH07XG4gICAgbGV0IGNvbmZpZyA9IGZuKG5vZGUsIHBhcmFtcywgb3B0aW9ucyk7XG4gICAgbGV0IHJ1bm5pbmcgPSB0cnVlO1xuICAgIGxldCBhbmltYXRpb25fbmFtZTtcbiAgICBjb25zdCBncm91cCA9IG91dHJvcztcbiAgICBncm91cC5yICs9IDE7XG4gICAgZnVuY3Rpb24gZ28oKSB7XG4gICAgICAgIGNvbnN0IHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDMwMCwgZWFzaW5nID0gaWRlbnRpdHksIHRpY2sgPSBub29wLCBjc3MgfSA9IGNvbmZpZyB8fCBudWxsX3RyYW5zaXRpb247XG4gICAgICAgIGlmIChjc3MpXG4gICAgICAgICAgICBhbmltYXRpb25fbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIDEsIDAsIGR1cmF0aW9uLCBkZWxheSwgZWFzaW5nLCBjc3MpO1xuICAgICAgICBjb25zdCBzdGFydF90aW1lID0gZXhwb3J0cy5ub3coKSArIGRlbGF5O1xuICAgICAgICBjb25zdCBlbmRfdGltZSA9IHN0YXJ0X3RpbWUgKyBkdXJhdGlvbjtcbiAgICAgICAgYWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiBkaXNwYXRjaChub2RlLCBmYWxzZSwgJ3N0YXJ0JykpO1xuICAgICAgICBsb29wKG5vdyA9PiB7XG4gICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgIGlmIChub3cgPj0gZW5kX3RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGljaygwLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobm9kZSwgZmFsc2UsICdlbmQnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEtLWdyb3VwLnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2lsbCByZXN1bHQgaW4gYGVuZCgpYCBiZWluZyBjYWxsZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzbyB3ZSBkb24ndCBuZWVkIHRvIGNsZWFuIHVwIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bl9hbGwoZ3JvdXAuYyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobm93ID49IHN0YXJ0X3RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdCA9IGVhc2luZygobm93IC0gc3RhcnRfdGltZSkgLyBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHRpY2soMSAtIHQsIHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBydW5uaW5nO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGlzX2Z1bmN0aW9uKGNvbmZpZykpIHtcbiAgICAgICAgd2FpdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29uZmlnID0gY29uZmlnKG9wdGlvbnMpO1xuICAgICAgICAgICAgZ28oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBnbygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBlbmQocmVzZXQpIHtcbiAgICAgICAgICAgIGlmIChyZXNldCAmJiBjb25maWcudGljaykge1xuICAgICAgICAgICAgICAgIGNvbmZpZy50aWNrKDEsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uX25hbWUpXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZV9ydWxlKG5vZGUsIGFuaW1hdGlvbl9uYW1lKTtcbiAgICAgICAgICAgICAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlX2JpZGlyZWN0aW9uYWxfdHJhbnNpdGlvbihub2RlLCBmbiwgcGFyYW1zLCBpbnRybykge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7IGRpcmVjdGlvbjogJ2JvdGgnIH07XG4gICAgbGV0IGNvbmZpZyA9IGZuKG5vZGUsIHBhcmFtcywgb3B0aW9ucyk7XG4gICAgbGV0IHQgPSBpbnRybyA/IDAgOiAxO1xuICAgIGxldCBydW5uaW5nX3Byb2dyYW0gPSBudWxsO1xuICAgIGxldCBwZW5kaW5nX3Byb2dyYW0gPSBudWxsO1xuICAgIGxldCBhbmltYXRpb25fbmFtZSA9IG51bGw7XG4gICAgZnVuY3Rpb24gY2xlYXJfYW5pbWF0aW9uKCkge1xuICAgICAgICBpZiAoYW5pbWF0aW9uX25hbWUpXG4gICAgICAgICAgICBkZWxldGVfcnVsZShub2RlLCBhbmltYXRpb25fbmFtZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGluaXQocHJvZ3JhbSwgZHVyYXRpb24pIHtcbiAgICAgICAgY29uc3QgZCA9IChwcm9ncmFtLmIgLSB0KTtcbiAgICAgICAgZHVyYXRpb24gKj0gTWF0aC5hYnMoZCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhOiB0LFxuICAgICAgICAgICAgYjogcHJvZ3JhbS5iLFxuICAgICAgICAgICAgZCxcbiAgICAgICAgICAgIGR1cmF0aW9uLFxuICAgICAgICAgICAgc3RhcnQ6IHByb2dyYW0uc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IHByb2dyYW0uc3RhcnQgKyBkdXJhdGlvbixcbiAgICAgICAgICAgIGdyb3VwOiBwcm9ncmFtLmdyb3VwXG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdvKGIpIHtcbiAgICAgICAgY29uc3QgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gMzAwLCBlYXNpbmcgPSBpZGVudGl0eSwgdGljayA9IG5vb3AsIGNzcyB9ID0gY29uZmlnIHx8IG51bGxfdHJhbnNpdGlvbjtcbiAgICAgICAgY29uc3QgcHJvZ3JhbSA9IHtcbiAgICAgICAgICAgIHN0YXJ0OiBleHBvcnRzLm5vdygpICsgZGVsYXksXG4gICAgICAgICAgICBiXG4gICAgICAgIH07XG4gICAgICAgIGlmICghYikge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0b2RvOiBpbXByb3ZlIHR5cGluZ3NcbiAgICAgICAgICAgIHByb2dyYW0uZ3JvdXAgPSBvdXRyb3M7XG4gICAgICAgICAgICBvdXRyb3MuciArPSAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChydW5uaW5nX3Byb2dyYW0gfHwgcGVuZGluZ19wcm9ncmFtKSB7XG4gICAgICAgICAgICBwZW5kaW5nX3Byb2dyYW0gPSBwcm9ncmFtO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gaWYgdGhpcyBpcyBhbiBpbnRybywgYW5kIHRoZXJlJ3MgYSBkZWxheSwgd2UgbmVlZCB0byBkb1xuICAgICAgICAgICAgLy8gYW4gaW5pdGlhbCB0aWNrIGFuZC9vciBhcHBseSBDU1MgYW5pbWF0aW9uIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICBpZiAoY3NzKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJfYW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uX25hbWUgPSBjcmVhdGVfcnVsZShub2RlLCB0LCBiLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChiKVxuICAgICAgICAgICAgICAgIHRpY2soMCwgMSk7XG4gICAgICAgICAgICBydW5uaW5nX3Byb2dyYW0gPSBpbml0KHByb2dyYW0sIGR1cmF0aW9uKTtcbiAgICAgICAgICAgIGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4gZGlzcGF0Y2gobm9kZSwgYiwgJ3N0YXJ0JykpO1xuICAgICAgICAgICAgbG9vcChub3cgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwZW5kaW5nX3Byb2dyYW0gJiYgbm93ID4gcGVuZGluZ19wcm9ncmFtLnN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmdfcHJvZ3JhbSA9IGluaXQocGVuZGluZ19wcm9ncmFtLCBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHBlbmRpbmdfcHJvZ3JhbSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5vZGUsIHJ1bm5pbmdfcHJvZ3JhbS5iLCAnc3RhcnQnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJfYW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25fbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIHQsIHJ1bm5pbmdfcHJvZ3JhbS5iLCBydW5uaW5nX3Byb2dyYW0uZHVyYXRpb24sIDAsIGVhc2luZywgY29uZmlnLmNzcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJ1bm5pbmdfcHJvZ3JhbSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm93ID49IHJ1bm5pbmdfcHJvZ3JhbS5lbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpY2sodCA9IHJ1bm5pbmdfcHJvZ3JhbS5iLCAxIC0gdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChub2RlLCBydW5uaW5nX3Byb2dyYW0uYiwgJ2VuZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwZW5kaW5nX3Byb2dyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSdyZSBkb25lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJ1bm5pbmdfcHJvZ3JhbS5iKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGludHJvIFx1MjAxNCB3ZSBjYW4gdGlkeSB1cCBpbW1lZGlhdGVseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcl9hbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG91dHJvIFx1MjAxNCBuZWVkcyB0byBiZSBjb29yZGluYXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIS0tcnVubmluZ19wcm9ncmFtLmdyb3VwLnIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydW5fYWxsKHJ1bm5pbmdfcHJvZ3JhbS5ncm91cC5jKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBydW5uaW5nX3Byb2dyYW0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5vdyA+PSBydW5uaW5nX3Byb2dyYW0uc3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBub3cgLSBydW5uaW5nX3Byb2dyYW0uc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gcnVubmluZ19wcm9ncmFtLmEgKyBydW5uaW5nX3Byb2dyYW0uZCAqIGVhc2luZyhwIC8gcnVubmluZ19wcm9ncmFtLmR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpY2sodCwgMSAtIHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAhIShydW5uaW5nX3Byb2dyYW0gfHwgcGVuZGluZ19wcm9ncmFtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHJ1bihiKSB7XG4gICAgICAgICAgICBpZiAoaXNfZnVuY3Rpb24oY29uZmlnKSkge1xuICAgICAgICAgICAgICAgIHdhaXQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICBjb25maWcgPSBjb25maWcob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIGdvKGIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZ28oYik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVuZCgpIHtcbiAgICAgICAgICAgIGNsZWFyX2FuaW1hdGlvbigpO1xuICAgICAgICAgICAgcnVubmluZ19wcm9ncmFtID0gcGVuZGluZ19wcm9ncmFtID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGhhbmRsZV9wcm9taXNlKHByb21pc2UsIGluZm8pIHtcbiAgICBjb25zdCB0b2tlbiA9IGluZm8udG9rZW4gPSB7fTtcbiAgICBmdW5jdGlvbiB1cGRhdGUodHlwZSwgaW5kZXgsIGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKGluZm8udG9rZW4gIT09IHRva2VuKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpbmZvLnJlc29sdmVkID0gdmFsdWU7XG4gICAgICAgIGxldCBjaGlsZF9jdHggPSBpbmZvLmN0eDtcbiAgICAgICAgaWYgKGtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjaGlsZF9jdHggPSBjaGlsZF9jdHguc2xpY2UoKTtcbiAgICAgICAgICAgIGNoaWxkX2N0eFtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYmxvY2sgPSB0eXBlICYmIChpbmZvLmN1cnJlbnQgPSB0eXBlKShjaGlsZF9jdHgpO1xuICAgICAgICBsZXQgbmVlZHNfZmx1c2ggPSBmYWxzZTtcbiAgICAgICAgaWYgKGluZm8uYmxvY2spIHtcbiAgICAgICAgICAgIGlmIChpbmZvLmJsb2Nrcykge1xuICAgICAgICAgICAgICAgIGluZm8uYmxvY2tzLmZvckVhY2goKGJsb2NrLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpICE9PSBpbmRleCAmJiBibG9jaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBfb3V0cm9zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uX291dChibG9jaywgMSwgMSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmZvLmJsb2Nrc1tpXSA9PT0gYmxvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5mby5ibG9ja3NbaV0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tfb3V0cm9zKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGluZm8uYmxvY2suZCgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJsb2NrLmMoKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb25faW4oYmxvY2ssIDEpO1xuICAgICAgICAgICAgYmxvY2subShpbmZvLm1vdW50KCksIGluZm8uYW5jaG9yKTtcbiAgICAgICAgICAgIG5lZWRzX2ZsdXNoID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpbmZvLmJsb2NrID0gYmxvY2s7XG4gICAgICAgIGlmIChpbmZvLmJsb2NrcylcbiAgICAgICAgICAgIGluZm8uYmxvY2tzW2luZGV4XSA9IGJsb2NrO1xuICAgICAgICBpZiAobmVlZHNfZmx1c2gpIHtcbiAgICAgICAgICAgIGZsdXNoKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzX3Byb21pc2UocHJvbWlzZSkpIHtcbiAgICAgICAgY29uc3QgY3VycmVudF9jb21wb25lbnQgPSBnZXRfY3VycmVudF9jb21wb25lbnQoKTtcbiAgICAgICAgcHJvbWlzZS50aGVuKHZhbHVlID0+IHtcbiAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChjdXJyZW50X2NvbXBvbmVudCk7XG4gICAgICAgICAgICB1cGRhdGUoaW5mby50aGVuLCAxLCBpbmZvLnZhbHVlLCB2YWx1ZSk7XG4gICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQobnVsbCk7XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChjdXJyZW50X2NvbXBvbmVudCk7XG4gICAgICAgICAgICB1cGRhdGUoaW5mby5jYXRjaCwgMiwgaW5mby5lcnJvciwgZXJyb3IpO1xuICAgICAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KG51bGwpO1xuICAgICAgICAgICAgaWYgKCFpbmZvLmhhc0NhdGNoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBpZiB3ZSBwcmV2aW91c2x5IGhhZCBhIHRoZW4vY2F0Y2ggYmxvY2ssIGRlc3Ryb3kgaXRcbiAgICAgICAgaWYgKGluZm8uY3VycmVudCAhPT0gaW5mby5wZW5kaW5nKSB7XG4gICAgICAgICAgICB1cGRhdGUoaW5mby5wZW5kaW5nLCAwKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoaW5mby5jdXJyZW50ICE9PSBpbmZvLnRoZW4pIHtcbiAgICAgICAgICAgIHVwZGF0ZShpbmZvLnRoZW4sIDEsIGluZm8udmFsdWUsIHByb21pc2UpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5mby5yZXNvbHZlZCA9IHByb21pc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gdXBkYXRlX2F3YWl0X2Jsb2NrX2JyYW5jaChpbmZvLCBjdHgsIGRpcnR5KSB7XG4gICAgY29uc3QgY2hpbGRfY3R4ID0gY3R4LnNsaWNlKCk7XG4gICAgY29uc3QgeyByZXNvbHZlZCB9ID0gaW5mbztcbiAgICBpZiAoaW5mby5jdXJyZW50ID09PSBpbmZvLnRoZW4pIHtcbiAgICAgICAgY2hpbGRfY3R4W2luZm8udmFsdWVdID0gcmVzb2x2ZWQ7XG4gICAgfVxuICAgIGlmIChpbmZvLmN1cnJlbnQgPT09IGluZm8uY2F0Y2gpIHtcbiAgICAgICAgY2hpbGRfY3R4W2luZm8uZXJyb3JdID0gcmVzb2x2ZWQ7XG4gICAgfVxuICAgIGluZm8uYmxvY2sucChjaGlsZF9jdHgsIGRpcnR5KTtcbn1cblxuZnVuY3Rpb24gZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKSB7XG4gICAgYmxvY2suZCgxKTtcbiAgICBsb29rdXAuZGVsZXRlKGJsb2NrLmtleSk7XG59XG5mdW5jdGlvbiBvdXRyb19hbmRfZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKSB7XG4gICAgdHJhbnNpdGlvbl9vdXQoYmxvY2ssIDEsIDEsICgpID0+IHtcbiAgICAgICAgbG9va3VwLmRlbGV0ZShibG9jay5rZXkpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZml4X2FuZF9kZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApIHtcbiAgICBibG9jay5mKCk7XG4gICAgZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKTtcbn1cbmZ1bmN0aW9uIGZpeF9hbmRfb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCkge1xuICAgIGJsb2NrLmYoKTtcbiAgICBvdXRyb19hbmRfZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZV9rZXllZF9lYWNoKG9sZF9ibG9ja3MsIGRpcnR5LCBnZXRfa2V5LCBkeW5hbWljLCBjdHgsIGxpc3QsIGxvb2t1cCwgbm9kZSwgZGVzdHJveSwgY3JlYXRlX2VhY2hfYmxvY2ssIG5leHQsIGdldF9jb250ZXh0KSB7XG4gICAgbGV0IG8gPSBvbGRfYmxvY2tzLmxlbmd0aDtcbiAgICBsZXQgbiA9IGxpc3QubGVuZ3RoO1xuICAgIGxldCBpID0gbztcbiAgICBjb25zdCBvbGRfaW5kZXhlcyA9IHt9O1xuICAgIHdoaWxlIChpLS0pXG4gICAgICAgIG9sZF9pbmRleGVzW29sZF9ibG9ja3NbaV0ua2V5XSA9IGk7XG4gICAgY29uc3QgbmV3X2Jsb2NrcyA9IFtdO1xuICAgIGNvbnN0IG5ld19sb29rdXAgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgZGVsdGFzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHVwZGF0ZXMgPSBbXTtcbiAgICBpID0gbjtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkX2N0eCA9IGdldF9jb250ZXh0KGN0eCwgbGlzdCwgaSk7XG4gICAgICAgIGNvbnN0IGtleSA9IGdldF9rZXkoY2hpbGRfY3R4KTtcbiAgICAgICAgbGV0IGJsb2NrID0gbG9va3VwLmdldChrZXkpO1xuICAgICAgICBpZiAoIWJsb2NrKSB7XG4gICAgICAgICAgICBibG9jayA9IGNyZWF0ZV9lYWNoX2Jsb2NrKGtleSwgY2hpbGRfY3R4KTtcbiAgICAgICAgICAgIGJsb2NrLmMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkeW5hbWljKSB7XG4gICAgICAgICAgICAvLyBkZWZlciB1cGRhdGVzIHVudGlsIGFsbCB0aGUgRE9NIHNodWZmbGluZyBpcyBkb25lXG4gICAgICAgICAgICB1cGRhdGVzLnB1c2goKCkgPT4gYmxvY2sucChjaGlsZF9jdHgsIGRpcnR5KSk7XG4gICAgICAgIH1cbiAgICAgICAgbmV3X2xvb2t1cC5zZXQoa2V5LCBuZXdfYmxvY2tzW2ldID0gYmxvY2spO1xuICAgICAgICBpZiAoa2V5IGluIG9sZF9pbmRleGVzKVxuICAgICAgICAgICAgZGVsdGFzLnNldChrZXksIE1hdGguYWJzKGkgLSBvbGRfaW5kZXhlc1trZXldKSk7XG4gICAgfVxuICAgIGNvbnN0IHdpbGxfbW92ZSA9IG5ldyBTZXQoKTtcbiAgICBjb25zdCBkaWRfbW92ZSA9IG5ldyBTZXQoKTtcbiAgICBmdW5jdGlvbiBpbnNlcnQoYmxvY2spIHtcbiAgICAgICAgdHJhbnNpdGlvbl9pbihibG9jaywgMSk7XG4gICAgICAgIGJsb2NrLm0obm9kZSwgbmV4dCk7XG4gICAgICAgIGxvb2t1cC5zZXQoYmxvY2sua2V5LCBibG9jayk7XG4gICAgICAgIG5leHQgPSBibG9jay5maXJzdDtcbiAgICAgICAgbi0tO1xuICAgIH1cbiAgICB3aGlsZSAobyAmJiBuKSB7XG4gICAgICAgIGNvbnN0IG5ld19ibG9jayA9IG5ld19ibG9ja3NbbiAtIDFdO1xuICAgICAgICBjb25zdCBvbGRfYmxvY2sgPSBvbGRfYmxvY2tzW28gLSAxXTtcbiAgICAgICAgY29uc3QgbmV3X2tleSA9IG5ld19ibG9jay5rZXk7XG4gICAgICAgIGNvbnN0IG9sZF9rZXkgPSBvbGRfYmxvY2sua2V5O1xuICAgICAgICBpZiAobmV3X2Jsb2NrID09PSBvbGRfYmxvY2spIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgICAgIG5leHQgPSBuZXdfYmxvY2suZmlyc3Q7XG4gICAgICAgICAgICBvLS07XG4gICAgICAgICAgICBuLS07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIW5ld19sb29rdXAuaGFzKG9sZF9rZXkpKSB7XG4gICAgICAgICAgICAvLyByZW1vdmUgb2xkIGJsb2NrXG4gICAgICAgICAgICBkZXN0cm95KG9sZF9ibG9jaywgbG9va3VwKTtcbiAgICAgICAgICAgIG8tLTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghbG9va3VwLmhhcyhuZXdfa2V5KSB8fCB3aWxsX21vdmUuaGFzKG5ld19rZXkpKSB7XG4gICAgICAgICAgICBpbnNlcnQobmV3X2Jsb2NrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkaWRfbW92ZS5oYXMob2xkX2tleSkpIHtcbiAgICAgICAgICAgIG8tLTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkZWx0YXMuZ2V0KG5ld19rZXkpID4gZGVsdGFzLmdldChvbGRfa2V5KSkge1xuICAgICAgICAgICAgZGlkX21vdmUuYWRkKG5ld19rZXkpO1xuICAgICAgICAgICAgaW5zZXJ0KG5ld19ibG9jayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB3aWxsX21vdmUuYWRkKG9sZF9rZXkpO1xuICAgICAgICAgICAgby0tO1xuICAgICAgICB9XG4gICAgfVxuICAgIHdoaWxlIChvLS0pIHtcbiAgICAgICAgY29uc3Qgb2xkX2Jsb2NrID0gb2xkX2Jsb2Nrc1tvXTtcbiAgICAgICAgaWYgKCFuZXdfbG9va3VwLmhhcyhvbGRfYmxvY2sua2V5KSlcbiAgICAgICAgICAgIGRlc3Ryb3kob2xkX2Jsb2NrLCBsb29rdXApO1xuICAgIH1cbiAgICB3aGlsZSAobilcbiAgICAgICAgaW5zZXJ0KG5ld19ibG9ja3NbbiAtIDFdKTtcbiAgICBydW5fYWxsKHVwZGF0ZXMpO1xuICAgIHJldHVybiBuZXdfYmxvY2tzO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVfZWFjaF9rZXlzKGN0eCwgbGlzdCwgZ2V0X2NvbnRleHQsIGdldF9rZXkpIHtcbiAgICBjb25zdCBrZXlzID0gbmV3IFNldCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBrZXkgPSBnZXRfa2V5KGdldF9jb250ZXh0KGN0eCwgbGlzdCwgaSkpO1xuICAgICAgICBpZiAoa2V5cy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgaGF2ZSBkdXBsaWNhdGUga2V5cyBpbiBhIGtleWVkIGVhY2gnKTtcbiAgICAgICAgfVxuICAgICAgICBrZXlzLmFkZChrZXkpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0X3NwcmVhZF91cGRhdGUobGV2ZWxzLCB1cGRhdGVzKSB7XG4gICAgY29uc3QgdXBkYXRlID0ge307XG4gICAgY29uc3QgdG9fbnVsbF9vdXQgPSB7fTtcbiAgICBjb25zdCBhY2NvdW50ZWRfZm9yID0geyAkJHNjb3BlOiAxIH07XG4gICAgbGV0IGkgPSBsZXZlbHMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgY29uc3QgbyA9IGxldmVsc1tpXTtcbiAgICAgICAgY29uc3QgbiA9IHVwZGF0ZXNbaV07XG4gICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEoa2V5IGluIG4pKVxuICAgICAgICAgICAgICAgICAgICB0b19udWxsX291dFtrZXldID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG4pIHtcbiAgICAgICAgICAgICAgICBpZiAoIWFjY291bnRlZF9mb3Jba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVba2V5XSA9IG5ba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudGVkX2ZvcltrZXldID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXZlbHNbaV0gPSBuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbykge1xuICAgICAgICAgICAgICAgIGFjY291bnRlZF9mb3Jba2V5XSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdG9fbnVsbF9vdXQpIHtcbiAgICAgICAgaWYgKCEoa2V5IGluIHVwZGF0ZSkpXG4gICAgICAgICAgICB1cGRhdGVba2V5XSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIHVwZGF0ZTtcbn1cbmZ1bmN0aW9uIGdldF9zcHJlYWRfb2JqZWN0KHNwcmVhZF9wcm9wcykge1xuICAgIHJldHVybiB0eXBlb2Ygc3ByZWFkX3Byb3BzID09PSAnb2JqZWN0JyAmJiBzcHJlYWRfcHJvcHMgIT09IG51bGwgPyBzcHJlYWRfcHJvcHMgOiB7fTtcbn1cblxuY29uc3QgX2Jvb2xlYW5fYXR0cmlidXRlcyA9IFtcbiAgICAnYWxsb3dmdWxsc2NyZWVuJyxcbiAgICAnYWxsb3dwYXltZW50cmVxdWVzdCcsXG4gICAgJ2FzeW5jJyxcbiAgICAnYXV0b2ZvY3VzJyxcbiAgICAnYXV0b3BsYXknLFxuICAgICdjaGVja2VkJyxcbiAgICAnY29udHJvbHMnLFxuICAgICdkZWZhdWx0JyxcbiAgICAnZGVmZXInLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ2Zvcm1ub3ZhbGlkYXRlJyxcbiAgICAnaGlkZGVuJyxcbiAgICAnaW5lcnQnLFxuICAgICdpc21hcCcsXG4gICAgJ2xvb3AnLFxuICAgICdtdWx0aXBsZScsXG4gICAgJ211dGVkJyxcbiAgICAnbm9tb2R1bGUnLFxuICAgICdub3ZhbGlkYXRlJyxcbiAgICAnb3BlbicsXG4gICAgJ3BsYXlzaW5saW5lJyxcbiAgICAncmVhZG9ubHknLFxuICAgICdyZXF1aXJlZCcsXG4gICAgJ3JldmVyc2VkJyxcbiAgICAnc2VsZWN0ZWQnXG5dO1xuLyoqXG4gKiBMaXN0IG9mIEhUTUwgYm9vbGVhbiBhdHRyaWJ1dGVzIChlLmcuIGA8aW5wdXQgZGlzYWJsZWQ+YCkuXG4gKiBTb3VyY2U6IGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2luZGljZXMuaHRtbFxuICovXG5jb25zdCBib29sZWFuX2F0dHJpYnV0ZXMgPSBuZXcgU2V0KFsuLi5fYm9vbGVhbl9hdHRyaWJ1dGVzXSk7XG5cbi8qKiByZWdleCBvZiBhbGwgaHRtbCB2b2lkIGVsZW1lbnQgbmFtZXMgKi9cbmNvbnN0IHZvaWRfZWxlbWVudF9uYW1lcyA9IC9eKD86YXJlYXxiYXNlfGJyfGNvbHxjb21tYW5kfGVtYmVkfGhyfGltZ3xpbnB1dHxrZXlnZW58bGlua3xtZXRhfHBhcmFtfHNvdXJjZXx0cmFja3x3YnIpJC87XG5mdW5jdGlvbiBpc192b2lkKG5hbWUpIHtcbiAgICByZXR1cm4gdm9pZF9lbGVtZW50X25hbWVzLnRlc3QobmFtZSkgfHwgbmFtZS50b0xvd2VyQ2FzZSgpID09PSAnIWRvY3R5cGUnO1xufVxuXG5jb25zdCBpbnZhbGlkX2F0dHJpYnV0ZV9uYW1lX2NoYXJhY3RlciA9IC9bXFxzJ1wiPi89XFx1e0ZERDB9LVxcdXtGREVGfVxcdXtGRkZFfVxcdXtGRkZGfVxcdXsxRkZGRX1cXHV7MUZGRkZ9XFx1ezJGRkZFfVxcdXsyRkZGRn1cXHV7M0ZGRkV9XFx1ezNGRkZGfVxcdXs0RkZGRX1cXHV7NEZGRkZ9XFx1ezVGRkZFfVxcdXs1RkZGRn1cXHV7NkZGRkV9XFx1ezZGRkZGfVxcdXs3RkZGRX1cXHV7N0ZGRkZ9XFx1ezhGRkZFfVxcdXs4RkZGRn1cXHV7OUZGRkV9XFx1ezlGRkZGfVxcdXtBRkZGRX1cXHV7QUZGRkZ9XFx1e0JGRkZFfVxcdXtCRkZGRn1cXHV7Q0ZGRkV9XFx1e0NGRkZGfVxcdXtERkZGRX1cXHV7REZGRkZ9XFx1e0VGRkZFfVxcdXtFRkZGRn1cXHV7RkZGRkV9XFx1e0ZGRkZGfVxcdXsxMEZGRkV9XFx1ezEwRkZGRn1dL3U7XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zeW50YXguaHRtbCNhdHRyaWJ1dGVzLTJcbi8vIGh0dHBzOi8vaW5mcmEuc3BlYy53aGF0d2cub3JnLyNub25jaGFyYWN0ZXJcbmZ1bmN0aW9uIHNwcmVhZChhcmdzLCBhdHRyc190b19hZGQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVzID0gT2JqZWN0LmFzc2lnbih7fSwgLi4uYXJncyk7XG4gICAgaWYgKGF0dHJzX3RvX2FkZCkge1xuICAgICAgICBjb25zdCBjbGFzc2VzX3RvX2FkZCA9IGF0dHJzX3RvX2FkZC5jbGFzc2VzO1xuICAgICAgICBjb25zdCBzdHlsZXNfdG9fYWRkID0gYXR0cnNfdG9fYWRkLnN0eWxlcztcbiAgICAgICAgaWYgKGNsYXNzZXNfdG9fYWRkKSB7XG4gICAgICAgICAgICBpZiAoYXR0cmlidXRlcy5jbGFzcyA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5jbGFzcyA9IGNsYXNzZXNfdG9fYWRkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5jbGFzcyArPSAnICcgKyBjbGFzc2VzX3RvX2FkZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc3R5bGVzX3RvX2FkZCkge1xuICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZXMuc3R5bGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMuc3R5bGUgPSBzdHlsZV9vYmplY3RfdG9fc3RyaW5nKHN0eWxlc190b19hZGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5zdHlsZSA9IHN0eWxlX29iamVjdF90b19zdHJpbmcobWVyZ2Vfc3NyX3N0eWxlcyhhdHRyaWJ1dGVzLnN0eWxlLCBzdHlsZXNfdG9fYWRkKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IHN0ciA9ICcnO1xuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgIGlmIChpbnZhbGlkX2F0dHJpYnV0ZV9uYW1lX2NoYXJhY3Rlci50ZXN0KG5hbWUpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGF0dHJpYnV0ZXNbbmFtZV07XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdHJ1ZSlcbiAgICAgICAgICAgIHN0ciArPSAnICcgKyBuYW1lO1xuICAgICAgICBlbHNlIGlmIChib29sZWFuX2F0dHJpYnV0ZXMuaGFzKG5hbWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSlcbiAgICAgICAgICAgICAgICBzdHIgKz0gJyAnICsgbmFtZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBzdHIgKz0gYCAke25hbWV9PVwiJHt2YWx1ZX1cImA7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc3RyO1xufVxuZnVuY3Rpb24gbWVyZ2Vfc3NyX3N0eWxlcyhzdHlsZV9hdHRyaWJ1dGUsIHN0eWxlX2RpcmVjdGl2ZSkge1xuICAgIGNvbnN0IHN0eWxlX29iamVjdCA9IHt9O1xuICAgIGZvciAoY29uc3QgaW5kaXZpZHVhbF9zdHlsZSBvZiBzdHlsZV9hdHRyaWJ1dGUuc3BsaXQoJzsnKSkge1xuICAgICAgICBjb25zdCBjb2xvbl9pbmRleCA9IGluZGl2aWR1YWxfc3R5bGUuaW5kZXhPZignOicpO1xuICAgICAgICBjb25zdCBuYW1lID0gaW5kaXZpZHVhbF9zdHlsZS5zbGljZSgwLCBjb2xvbl9pbmRleCkudHJpbSgpO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGluZGl2aWR1YWxfc3R5bGUuc2xpY2UoY29sb25faW5kZXggKyAxKS50cmltKCk7XG4gICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICBzdHlsZV9vYmplY3RbbmFtZV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBuYW1lIGluIHN0eWxlX2RpcmVjdGl2ZSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHN0eWxlX2RpcmVjdGl2ZVtuYW1lXTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBzdHlsZV9vYmplY3RbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSBzdHlsZV9vYmplY3RbbmFtZV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlX29iamVjdDtcbn1cbmNvbnN0IEFUVFJfUkVHRVggPSAvWyZcIl0vZztcbmNvbnN0IENPTlRFTlRfUkVHRVggPSAvWyY8XS9nO1xuLyoqXG4gKiBOb3RlOiB0aGlzIG1ldGhvZCBpcyBwZXJmb3JtYW5jZSBzZW5zaXRpdmUgYW5kIGhhcyBiZWVuIG9wdGltaXplZFxuICogaHR0cHM6Ly9naXRodWIuY29tL3N2ZWx0ZWpzL3N2ZWx0ZS9wdWxsLzU3MDFcbiAqL1xuZnVuY3Rpb24gZXNjYXBlKHZhbHVlLCBpc19hdHRyID0gZmFsc2UpIHtcbiAgICBjb25zdCBzdHIgPSBTdHJpbmcodmFsdWUpO1xuICAgIGNvbnN0IHBhdHRlcm4gPSBpc19hdHRyID8gQVRUUl9SRUdFWCA6IENPTlRFTlRfUkVHRVg7XG4gICAgcGF0dGVybi5sYXN0SW5kZXggPSAwO1xuICAgIGxldCBlc2NhcGVkID0gJyc7XG4gICAgbGV0IGxhc3QgPSAwO1xuICAgIHdoaWxlIChwYXR0ZXJuLnRlc3Qoc3RyKSkge1xuICAgICAgICBjb25zdCBpID0gcGF0dGVybi5sYXN0SW5kZXggLSAxO1xuICAgICAgICBjb25zdCBjaCA9IHN0cltpXTtcbiAgICAgICAgZXNjYXBlZCArPSBzdHIuc3Vic3RyaW5nKGxhc3QsIGkpICsgKGNoID09PSAnJicgPyAnJmFtcDsnIDogKGNoID09PSAnXCInID8gJyZxdW90OycgOiAnJmx0OycpKTtcbiAgICAgICAgbGFzdCA9IGkgKyAxO1xuICAgIH1cbiAgICByZXR1cm4gZXNjYXBlZCArIHN0ci5zdWJzdHJpbmcobGFzdCk7XG59XG5mdW5jdGlvbiBlc2NhcGVfYXR0cmlidXRlX3ZhbHVlKHZhbHVlKSB7XG4gICAgLy8ga2VlcCBib29sZWFucywgbnVsbCwgYW5kIHVuZGVmaW5lZCBmb3IgdGhlIHNha2Ugb2YgYHNwcmVhZGBcbiAgICBjb25zdCBzaG91bGRfZXNjYXBlID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fCAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jyk7XG4gICAgcmV0dXJuIHNob3VsZF9lc2NhcGUgPyBlc2NhcGUodmFsdWUsIHRydWUpIDogdmFsdWU7XG59XG5mdW5jdGlvbiBlc2NhcGVfb2JqZWN0KG9iaikge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgICAgICByZXN1bHRba2V5XSA9IGVzY2FwZV9hdHRyaWJ1dGVfdmFsdWUob2JqW2tleV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gZWFjaChpdGVtcywgZm4pIHtcbiAgICBsZXQgc3RyID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBzdHIgKz0gZm4oaXRlbXNbaV0sIGkpO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xufVxuY29uc3QgbWlzc2luZ19jb21wb25lbnQgPSB7XG4gICAgJCRyZW5kZXI6ICgpID0+ICcnXG59O1xuZnVuY3Rpb24gdmFsaWRhdGVfY29tcG9uZW50KGNvbXBvbmVudCwgbmFtZSkge1xuICAgIGlmICghY29tcG9uZW50IHx8ICFjb21wb25lbnQuJCRyZW5kZXIpIHtcbiAgICAgICAgaWYgKG5hbWUgPT09ICdzdmVsdGU6Y29tcG9uZW50JylcbiAgICAgICAgICAgIG5hbWUgKz0gJyB0aGlzPXsuLi59JztcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGA8JHtuYW1lfT4gaXMgbm90IGEgdmFsaWQgU1NSIGNvbXBvbmVudC4gWW91IG1heSBuZWVkIHRvIHJldmlldyB5b3VyIGJ1aWxkIGNvbmZpZyB0byBlbnN1cmUgdGhhdCBkZXBlbmRlbmNpZXMgYXJlIGNvbXBpbGVkLCByYXRoZXIgdGhhbiBpbXBvcnRlZCBhcyBwcmUtY29tcGlsZWQgbW9kdWxlcy4gT3RoZXJ3aXNlIHlvdSBtYXkgbmVlZCB0byBmaXggYSA8JHtuYW1lfT4uYCk7XG4gICAgfVxuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG5mdW5jdGlvbiBkZWJ1ZyhmaWxlLCBsaW5lLCBjb2x1bW4sIHZhbHVlcykge1xuICAgIGNvbnNvbGUubG9nKGB7QGRlYnVnfSAke2ZpbGUgPyBmaWxlICsgJyAnIDogJyd9KCR7bGluZX06JHtjb2x1bW59KWApOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmxvZyh2YWx1ZXMpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICByZXR1cm4gJyc7XG59XG5sZXQgb25fZGVzdHJveTtcbmZ1bmN0aW9uIGNyZWF0ZV9zc3JfY29tcG9uZW50KGZuKSB7XG4gICAgZnVuY3Rpb24gJCRyZW5kZXIocmVzdWx0LCBwcm9wcywgYmluZGluZ3MsIHNsb3RzLCBjb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHBhcmVudF9jb21wb25lbnQgPSBleHBvcnRzLmN1cnJlbnRfY29tcG9uZW50O1xuICAgICAgICBjb25zdCAkJCA9IHtcbiAgICAgICAgICAgIG9uX2Rlc3Ryb3ksXG4gICAgICAgICAgICBjb250ZXh0OiBuZXcgTWFwKGNvbnRleHQgfHwgKHBhcmVudF9jb21wb25lbnQgPyBwYXJlbnRfY29tcG9uZW50LiQkLmNvbnRleHQgOiBbXSkpLFxuICAgICAgICAgICAgLy8gdGhlc2Ugd2lsbCBiZSBpbW1lZGlhdGVseSBkaXNjYXJkZWRcbiAgICAgICAgICAgIG9uX21vdW50OiBbXSxcbiAgICAgICAgICAgIGJlZm9yZV91cGRhdGU6IFtdLFxuICAgICAgICAgICAgYWZ0ZXJfdXBkYXRlOiBbXSxcbiAgICAgICAgICAgIGNhbGxiYWNrczogYmxhbmtfb2JqZWN0KClcbiAgICAgICAgfTtcbiAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KHsgJCQgfSk7XG4gICAgICAgIGNvbnN0IGh0bWwgPSBmbihyZXN1bHQsIHByb3BzLCBiaW5kaW5ncywgc2xvdHMpO1xuICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQocGFyZW50X2NvbXBvbmVudCk7XG4gICAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICByZW5kZXI6IChwcm9wcyA9IHt9LCB7ICQkc2xvdHMgPSB7fSwgY29udGV4dCA9IG5ldyBNYXAoKSB9ID0ge30pID0+IHtcbiAgICAgICAgICAgIG9uX2Rlc3Ryb3kgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHsgdGl0bGU6ICcnLCBoZWFkOiAnJywgY3NzOiBuZXcgU2V0KCkgfTtcbiAgICAgICAgICAgIGNvbnN0IGh0bWwgPSAkJHJlbmRlcihyZXN1bHQsIHByb3BzLCB7fSwgJCRzbG90cywgY29udGV4dCk7XG4gICAgICAgICAgICBydW5fYWxsKG9uX2Rlc3Ryb3kpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBodG1sLFxuICAgICAgICAgICAgICAgIGNzczoge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBBcnJheS5mcm9tKHJlc3VsdC5jc3MpLm1hcChjc3MgPT4gY3NzLmNvZGUpLmpvaW4oJ1xcbicpLFxuICAgICAgICAgICAgICAgICAgICBtYXA6IG51bGwgLy8gVE9ET1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaGVhZDogcmVzdWx0LnRpdGxlICsgcmVzdWx0LmhlYWRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgICQkcmVuZGVyXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGFkZF9hdHRyaWJ1dGUobmFtZSwgdmFsdWUsIGJvb2xlYW4pIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCAoYm9vbGVhbiAmJiAhdmFsdWUpKVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgY29uc3QgYXNzaWdubWVudCA9IChib29sZWFuICYmIHZhbHVlID09PSB0cnVlKSA/ICcnIDogYD1cIiR7ZXNjYXBlKHZhbHVlLCB0cnVlKX1cImA7XG4gICAgcmV0dXJuIGAgJHtuYW1lfSR7YXNzaWdubWVudH1gO1xufVxuZnVuY3Rpb24gYWRkX2NsYXNzZXMoY2xhc3Nlcykge1xuICAgIHJldHVybiBjbGFzc2VzID8gYCBjbGFzcz1cIiR7Y2xhc3Nlc31cImAgOiAnJztcbn1cbmZ1bmN0aW9uIHN0eWxlX29iamVjdF90b19zdHJpbmcoc3R5bGVfb2JqZWN0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHN0eWxlX29iamVjdClcbiAgICAgICAgLmZpbHRlcihrZXkgPT4gc3R5bGVfb2JqZWN0W2tleV0pXG4gICAgICAgIC5tYXAoa2V5ID0+IGAke2tleX06ICR7ZXNjYXBlX2F0dHJpYnV0ZV92YWx1ZShzdHlsZV9vYmplY3Rba2V5XSl9O2ApXG4gICAgICAgIC5qb2luKCcgJyk7XG59XG5mdW5jdGlvbiBhZGRfc3R5bGVzKHN0eWxlX29iamVjdCkge1xuICAgIGNvbnN0IHN0eWxlcyA9IHN0eWxlX29iamVjdF90b19zdHJpbmcoc3R5bGVfb2JqZWN0KTtcbiAgICByZXR1cm4gc3R5bGVzID8gYCBzdHlsZT1cIiR7c3R5bGVzfVwiYCA6ICcnO1xufVxuXG5mdW5jdGlvbiBiaW5kKGNvbXBvbmVudCwgbmFtZSwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBpbmRleCA9IGNvbXBvbmVudC4kJC5wcm9wc1tuYW1lXTtcbiAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb21wb25lbnQuJCQuYm91bmRbaW5kZXhdID0gY2FsbGJhY2s7XG4gICAgICAgIGNhbGxiYWNrKGNvbXBvbmVudC4kJC5jdHhbaW5kZXhdKTtcbiAgICB9XG59XG5mdW5jdGlvbiBjcmVhdGVfY29tcG9uZW50KGJsb2NrKSB7XG4gICAgYmxvY2sgJiYgYmxvY2suYygpO1xufVxuZnVuY3Rpb24gY2xhaW1fY29tcG9uZW50KGJsb2NrLCBwYXJlbnRfbm9kZXMpIHtcbiAgICBibG9jayAmJiBibG9jay5sKHBhcmVudF9ub2Rlcyk7XG59XG5mdW5jdGlvbiBtb3VudF9jb21wb25lbnQoY29tcG9uZW50LCB0YXJnZXQsIGFuY2hvciwgY3VzdG9tRWxlbWVudCkge1xuICAgIGNvbnN0IHsgZnJhZ21lbnQsIGFmdGVyX3VwZGF0ZSB9ID0gY29tcG9uZW50LiQkO1xuICAgIGZyYWdtZW50ICYmIGZyYWdtZW50Lm0odGFyZ2V0LCBhbmNob3IpO1xuICAgIGlmICghY3VzdG9tRWxlbWVudCkge1xuICAgICAgICAvLyBvbk1vdW50IGhhcHBlbnMgYmVmb3JlIHRoZSBpbml0aWFsIGFmdGVyVXBkYXRlXG4gICAgICAgIGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3X29uX2Rlc3Ryb3kgPSBjb21wb25lbnQuJCQub25fbW91bnQubWFwKHJ1bikuZmlsdGVyKGlzX2Z1bmN0aW9uKTtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBjb21wb25lbnQgd2FzIGRlc3Ryb3llZCBpbW1lZGlhdGVseVxuICAgICAgICAgICAgLy8gaXQgd2lsbCB1cGRhdGUgdGhlIGAkJC5vbl9kZXN0cm95YCByZWZlcmVuY2UgdG8gYG51bGxgLlxuICAgICAgICAgICAgLy8gdGhlIGRlc3RydWN0dXJlZCBvbl9kZXN0cm95IG1heSBzdGlsbCByZWZlcmVuY2UgdG8gdGhlIG9sZCBhcnJheVxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC4kJC5vbl9kZXN0cm95KSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LiQkLm9uX2Rlc3Ryb3kucHVzaCguLi5uZXdfb25fZGVzdHJveSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBFZGdlIGNhc2UgLSBjb21wb25lbnQgd2FzIGRlc3Ryb3llZCBpbW1lZGlhdGVseSxcbiAgICAgICAgICAgICAgICAvLyBtb3N0IGxpa2VseSBhcyBhIHJlc3VsdCBvZiBhIGJpbmRpbmcgaW5pdGlhbGlzaW5nXG4gICAgICAgICAgICAgICAgcnVuX2FsbChuZXdfb25fZGVzdHJveSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb21wb25lbnQuJCQub25fbW91bnQgPSBbXTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFmdGVyX3VwZGF0ZS5mb3JFYWNoKGFkZF9yZW5kZXJfY2FsbGJhY2spO1xufVxuZnVuY3Rpb24gZGVzdHJveV9jb21wb25lbnQoY29tcG9uZW50LCBkZXRhY2hpbmcpIHtcbiAgICBjb25zdCAkJCA9IGNvbXBvbmVudC4kJDtcbiAgICBpZiAoJCQuZnJhZ21lbnQgIT09IG51bGwpIHtcbiAgICAgICAgZmx1c2hfcmVuZGVyX2NhbGxiYWNrcygkJC5hZnRlcl91cGRhdGUpO1xuICAgICAgICBydW5fYWxsKCQkLm9uX2Rlc3Ryb3kpO1xuICAgICAgICAkJC5mcmFnbWVudCAmJiAkJC5mcmFnbWVudC5kKGRldGFjaGluZyk7XG4gICAgICAgIC8vIFRPRE8gbnVsbCBvdXQgb3RoZXIgcmVmcywgaW5jbHVkaW5nIGNvbXBvbmVudC4kJCAoYnV0IG5lZWQgdG9cbiAgICAgICAgLy8gcHJlc2VydmUgZmluYWwgc3RhdGU/KVxuICAgICAgICAkJC5vbl9kZXN0cm95ID0gJCQuZnJhZ21lbnQgPSBudWxsO1xuICAgICAgICAkJC5jdHggPSBbXTtcbiAgICB9XG59XG5mdW5jdGlvbiBtYWtlX2RpcnR5KGNvbXBvbmVudCwgaSkge1xuICAgIGlmIChjb21wb25lbnQuJCQuZGlydHlbMF0gPT09IC0xKSB7XG4gICAgICAgIGRpcnR5X2NvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgICAgICBzY2hlZHVsZV91cGRhdGUoKTtcbiAgICAgICAgY29tcG9uZW50LiQkLmRpcnR5LmZpbGwoMCk7XG4gICAgfVxuICAgIGNvbXBvbmVudC4kJC5kaXJ0eVsoaSAvIDMxKSB8IDBdIHw9ICgxIDw8IChpICUgMzEpKTtcbn1cbmZ1bmN0aW9uIGluaXQoY29tcG9uZW50LCBvcHRpb25zLCBpbnN0YW5jZSwgY3JlYXRlX2ZyYWdtZW50LCBub3RfZXF1YWwsIHByb3BzLCBhcHBlbmRfc3R5bGVzLCBkaXJ0eSA9IFstMV0pIHtcbiAgICBjb25zdCBwYXJlbnRfY29tcG9uZW50ID0gZXhwb3J0cy5jdXJyZW50X2NvbXBvbmVudDtcbiAgICBzZXRfY3VycmVudF9jb21wb25lbnQoY29tcG9uZW50KTtcbiAgICBjb25zdCAkJCA9IGNvbXBvbmVudC4kJCA9IHtcbiAgICAgICAgZnJhZ21lbnQ6IG51bGwsXG4gICAgICAgIGN0eDogW10sXG4gICAgICAgIC8vIHN0YXRlXG4gICAgICAgIHByb3BzLFxuICAgICAgICB1cGRhdGU6IG5vb3AsXG4gICAgICAgIG5vdF9lcXVhbCxcbiAgICAgICAgYm91bmQ6IGJsYW5rX29iamVjdCgpLFxuICAgICAgICAvLyBsaWZlY3ljbGVcbiAgICAgICAgb25fbW91bnQ6IFtdLFxuICAgICAgICBvbl9kZXN0cm95OiBbXSxcbiAgICAgICAgb25fZGlzY29ubmVjdDogW10sXG4gICAgICAgIGJlZm9yZV91cGRhdGU6IFtdLFxuICAgICAgICBhZnRlcl91cGRhdGU6IFtdLFxuICAgICAgICBjb250ZXh0OiBuZXcgTWFwKG9wdGlvbnMuY29udGV4dCB8fCAocGFyZW50X2NvbXBvbmVudCA/IHBhcmVudF9jb21wb25lbnQuJCQuY29udGV4dCA6IFtdKSksXG4gICAgICAgIC8vIGV2ZXJ5dGhpbmcgZWxzZVxuICAgICAgICBjYWxsYmFja3M6IGJsYW5rX29iamVjdCgpLFxuICAgICAgICBkaXJ0eSxcbiAgICAgICAgc2tpcF9ib3VuZDogZmFsc2UsXG4gICAgICAgIHJvb3Q6IG9wdGlvbnMudGFyZ2V0IHx8IHBhcmVudF9jb21wb25lbnQuJCQucm9vdFxuICAgIH07XG4gICAgYXBwZW5kX3N0eWxlcyAmJiBhcHBlbmRfc3R5bGVzKCQkLnJvb3QpO1xuICAgIGxldCByZWFkeSA9IGZhbHNlO1xuICAgICQkLmN0eCA9IGluc3RhbmNlXG4gICAgICAgID8gaW5zdGFuY2UoY29tcG9uZW50LCBvcHRpb25zLnByb3BzIHx8IHt9LCAoaSwgcmV0LCAuLi5yZXN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHJlc3QubGVuZ3RoID8gcmVzdFswXSA6IHJldDtcbiAgICAgICAgICAgIGlmICgkJC5jdHggJiYgbm90X2VxdWFsKCQkLmN0eFtpXSwgJCQuY3R4W2ldID0gdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEkJC5za2lwX2JvdW5kICYmICQkLmJvdW5kW2ldKVxuICAgICAgICAgICAgICAgICAgICAkJC5ib3VuZFtpXSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlYWR5KVxuICAgICAgICAgICAgICAgICAgICBtYWtlX2RpcnR5KGNvbXBvbmVudCwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9KVxuICAgICAgICA6IFtdO1xuICAgICQkLnVwZGF0ZSgpO1xuICAgIHJlYWR5ID0gdHJ1ZTtcbiAgICBydW5fYWxsKCQkLmJlZm9yZV91cGRhdGUpO1xuICAgIC8vIGBmYWxzZWAgYXMgYSBzcGVjaWFsIGNhc2Ugb2Ygbm8gRE9NIGNvbXBvbmVudFxuICAgICQkLmZyYWdtZW50ID0gY3JlYXRlX2ZyYWdtZW50ID8gY3JlYXRlX2ZyYWdtZW50KCQkLmN0eCkgOiBmYWxzZTtcbiAgICBpZiAob3B0aW9ucy50YXJnZXQpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuaHlkcmF0ZSkge1xuICAgICAgICAgICAgc3RhcnRfaHlkcmF0aW5nKCk7XG4gICAgICAgICAgICBjb25zdCBub2RlcyA9IGNoaWxkcmVuKG9wdGlvbnMudGFyZ2V0KTtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uXG4gICAgICAgICAgICAkJC5mcmFnbWVudCAmJiAkJC5mcmFnbWVudC5sKG5vZGVzKTtcbiAgICAgICAgICAgIG5vZGVzLmZvckVhY2goZGV0YWNoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uXG4gICAgICAgICAgICAkJC5mcmFnbWVudCAmJiAkJC5mcmFnbWVudC5jKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuaW50cm8pXG4gICAgICAgICAgICB0cmFuc2l0aW9uX2luKGNvbXBvbmVudC4kJC5mcmFnbWVudCk7XG4gICAgICAgIG1vdW50X2NvbXBvbmVudChjb21wb25lbnQsIG9wdGlvbnMudGFyZ2V0LCBvcHRpb25zLmFuY2hvciwgb3B0aW9ucy5jdXN0b21FbGVtZW50KTtcbiAgICAgICAgZW5kX2h5ZHJhdGluZygpO1xuICAgICAgICBmbHVzaCgpO1xuICAgIH1cbiAgICBzZXRfY3VycmVudF9jb21wb25lbnQocGFyZW50X2NvbXBvbmVudCk7XG59XG5pZiAodHlwZW9mIEhUTUxFbGVtZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXhwb3J0cy5TdmVsdGVFbGVtZW50ID0gY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICAgICAgY29uc3QgeyBvbl9tb3VudCB9ID0gdGhpcy4kJDtcbiAgICAgICAgICAgIHRoaXMuJCQub25fZGlzY29ubmVjdCA9IG9uX21vdW50Lm1hcChydW4pLmZpbHRlcihpc19mdW5jdGlvbik7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRvZG86IGltcHJvdmUgdHlwaW5nc1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy4kJC5zbG90dGVkKSB7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0b2RvOiBpbXByb3ZlIHR5cGluZ3NcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuJCQuc2xvdHRlZFtrZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soYXR0ciwgX29sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgdGhpc1thdHRyXSA9IG5ld1ZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICAgICAgcnVuX2FsbCh0aGlzLiQkLm9uX2Rpc2Nvbm5lY3QpO1xuICAgICAgICB9XG4gICAgICAgICRkZXN0cm95KCkge1xuICAgICAgICAgICAgZGVzdHJveV9jb21wb25lbnQodGhpcywgMSk7XG4gICAgICAgICAgICB0aGlzLiRkZXN0cm95ID0gbm9vcDtcbiAgICAgICAgfVxuICAgICAgICAkb24odHlwZSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIC8vIFRPRE8gc2hvdWxkIHRoaXMgZGVsZWdhdGUgdG8gYWRkRXZlbnRMaXN0ZW5lcj9cbiAgICAgICAgICAgIGlmICghaXNfZnVuY3Rpb24oY2FsbGJhY2spKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vb3A7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFja3MgPSAodGhpcy4kJC5jYWxsYmFja3NbdHlwZV0gfHwgKHRoaXMuJCQuY2FsbGJhY2tzW3R5cGVdID0gW10pKTtcbiAgICAgICAgICAgIGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBjYWxsYmFja3MuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSlcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgICRzZXQoJCRwcm9wcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuJCRzZXQgJiYgIWlzX2VtcHR5KCQkcHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kJC5za2lwX2JvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiQkc2V0KCQkcHJvcHMpO1xuICAgICAgICAgICAgICAgIHRoaXMuJCQuc2tpcF9ib3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn1cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgU3ZlbHRlIGNvbXBvbmVudHMuIFVzZWQgd2hlbiBkZXY9ZmFsc2UuXG4gKi9cbmNsYXNzIFN2ZWx0ZUNvbXBvbmVudCB7XG4gICAgJGRlc3Ryb3koKSB7XG4gICAgICAgIGRlc3Ryb3lfY29tcG9uZW50KHRoaXMsIDEpO1xuICAgICAgICB0aGlzLiRkZXN0cm95ID0gbm9vcDtcbiAgICB9XG4gICAgJG9uKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICghaXNfZnVuY3Rpb24oY2FsbGJhY2spKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9vcDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjYWxsYmFja3MgPSAodGhpcy4kJC5jYWxsYmFja3NbdHlwZV0gfHwgKHRoaXMuJCQuY2FsbGJhY2tzW3R5cGVdID0gW10pKTtcbiAgICAgICAgY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBjYWxsYmFja3MuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICAkc2V0KCQkcHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMuJCRzZXQgJiYgIWlzX2VtcHR5KCQkcHJvcHMpKSB7XG4gICAgICAgICAgICB0aGlzLiQkLnNraXBfYm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy4kJHNldCgkJHByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuJCQuc2tpcF9ib3VuZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkaXNwYXRjaF9kZXYodHlwZSwgZGV0YWlsKSB7XG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChjdXN0b21fZXZlbnQodHlwZSwgT2JqZWN0LmFzc2lnbih7IHZlcnNpb246ICczLjU5LjEnIH0sIGRldGFpbCksIHsgYnViYmxlczogdHJ1ZSB9KSk7XG59XG5mdW5jdGlvbiBhcHBlbmRfZGV2KHRhcmdldCwgbm9kZSkge1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NSW5zZXJ0JywgeyB0YXJnZXQsIG5vZGUgfSk7XG4gICAgYXBwZW5kKHRhcmdldCwgbm9kZSk7XG59XG5mdW5jdGlvbiBhcHBlbmRfaHlkcmF0aW9uX2Rldih0YXJnZXQsIG5vZGUpIHtcbiAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTUluc2VydCcsIHsgdGFyZ2V0LCBub2RlIH0pO1xuICAgIGFwcGVuZF9oeWRyYXRpb24odGFyZ2V0LCBub2RlKTtcbn1cbmZ1bmN0aW9uIGluc2VydF9kZXYodGFyZ2V0LCBub2RlLCBhbmNob3IpIHtcbiAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTUluc2VydCcsIHsgdGFyZ2V0LCBub2RlLCBhbmNob3IgfSk7XG4gICAgaW5zZXJ0KHRhcmdldCwgbm9kZSwgYW5jaG9yKTtcbn1cbmZ1bmN0aW9uIGluc2VydF9oeWRyYXRpb25fZGV2KHRhcmdldCwgbm9kZSwgYW5jaG9yKSB7XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01JbnNlcnQnLCB7IHRhcmdldCwgbm9kZSwgYW5jaG9yIH0pO1xuICAgIGluc2VydF9oeWRyYXRpb24odGFyZ2V0LCBub2RlLCBhbmNob3IpO1xufVxuZnVuY3Rpb24gZGV0YWNoX2Rldihub2RlKSB7XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01SZW1vdmUnLCB7IG5vZGUgfSk7XG4gICAgZGV0YWNoKG5vZGUpO1xufVxuZnVuY3Rpb24gZGV0YWNoX2JldHdlZW5fZGV2KGJlZm9yZSwgYWZ0ZXIpIHtcbiAgICB3aGlsZSAoYmVmb3JlLm5leHRTaWJsaW5nICYmIGJlZm9yZS5uZXh0U2libGluZyAhPT0gYWZ0ZXIpIHtcbiAgICAgICAgZGV0YWNoX2RldihiZWZvcmUubmV4dFNpYmxpbmcpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRldGFjaF9iZWZvcmVfZGV2KGFmdGVyKSB7XG4gICAgd2hpbGUgKGFmdGVyLnByZXZpb3VzU2libGluZykge1xuICAgICAgICBkZXRhY2hfZGV2KGFmdGVyLnByZXZpb3VzU2libGluZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gZGV0YWNoX2FmdGVyX2RldihiZWZvcmUpIHtcbiAgICB3aGlsZSAoYmVmb3JlLm5leHRTaWJsaW5nKSB7XG4gICAgICAgIGRldGFjaF9kZXYoYmVmb3JlLm5leHRTaWJsaW5nKTtcbiAgICB9XG59XG5mdW5jdGlvbiBsaXN0ZW5fZGV2KG5vZGUsIGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zLCBoYXNfcHJldmVudF9kZWZhdWx0LCBoYXNfc3RvcF9wcm9wYWdhdGlvbiwgaGFzX3N0b3BfaW1tZWRpYXRlX3Byb3BhZ2F0aW9uKSB7XG4gICAgY29uc3QgbW9kaWZpZXJzID0gb3B0aW9ucyA9PT0gdHJ1ZSA/IFsnY2FwdHVyZSddIDogb3B0aW9ucyA/IEFycmF5LmZyb20oT2JqZWN0LmtleXMob3B0aW9ucykpIDogW107XG4gICAgaWYgKGhhc19wcmV2ZW50X2RlZmF1bHQpXG4gICAgICAgIG1vZGlmaWVycy5wdXNoKCdwcmV2ZW50RGVmYXVsdCcpO1xuICAgIGlmIChoYXNfc3RvcF9wcm9wYWdhdGlvbilcbiAgICAgICAgbW9kaWZpZXJzLnB1c2goJ3N0b3BQcm9wYWdhdGlvbicpO1xuICAgIGlmIChoYXNfc3RvcF9pbW1lZGlhdGVfcHJvcGFnYXRpb24pXG4gICAgICAgIG1vZGlmaWVycy5wdXNoKCdzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24nKTtcbiAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTUFkZEV2ZW50TGlzdGVuZXInLCB7IG5vZGUsIGV2ZW50LCBoYW5kbGVyLCBtb2RpZmllcnMgfSk7XG4gICAgY29uc3QgZGlzcG9zZSA9IGxpc3Rlbihub2RlLCBldmVudCwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01SZW1vdmVFdmVudExpc3RlbmVyJywgeyBub2RlLCBldmVudCwgaGFuZGxlciwgbW9kaWZpZXJzIH0pO1xuICAgICAgICBkaXNwb3NlKCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGF0dHJfZGV2KG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICBhdHRyKG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKVxuICAgICAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTVJlbW92ZUF0dHJpYnV0ZScsIHsgbm9kZSwgYXR0cmlidXRlIH0pO1xuICAgIGVsc2VcbiAgICAgICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01TZXRBdHRyaWJ1dGUnLCB7IG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUgfSk7XG59XG5mdW5jdGlvbiBwcm9wX2Rldihub2RlLCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICBub2RlW3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NU2V0UHJvcGVydHknLCB7IG5vZGUsIHByb3BlcnR5LCB2YWx1ZSB9KTtcbn1cbmZ1bmN0aW9uIGRhdGFzZXRfZGV2KG5vZGUsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIG5vZGUuZGF0YXNldFtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTVNldERhdGFzZXQnLCB7IG5vZGUsIHByb3BlcnR5LCB2YWx1ZSB9KTtcbn1cbmZ1bmN0aW9uIHNldF9kYXRhX2Rldih0ZXh0LCBkYXRhKSB7XG4gICAgZGF0YSA9ICcnICsgZGF0YTtcbiAgICBpZiAodGV4dC5kYXRhID09PSBkYXRhKVxuICAgICAgICByZXR1cm47XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01TZXREYXRhJywgeyBub2RlOiB0ZXh0LCBkYXRhIH0pO1xuICAgIHRleHQuZGF0YSA9IGRhdGE7XG59XG5mdW5jdGlvbiBzZXRfZGF0YV9jb250ZW50ZWRpdGFibGVfZGV2KHRleHQsIGRhdGEpIHtcbiAgICBkYXRhID0gJycgKyBkYXRhO1xuICAgIGlmICh0ZXh0Lndob2xlVGV4dCA9PT0gZGF0YSlcbiAgICAgICAgcmV0dXJuO1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NU2V0RGF0YScsIHsgbm9kZTogdGV4dCwgZGF0YSB9KTtcbiAgICB0ZXh0LmRhdGEgPSBkYXRhO1xufVxuZnVuY3Rpb24gc2V0X2RhdGFfbWF5YmVfY29udGVudGVkaXRhYmxlX2Rldih0ZXh0LCBkYXRhLCBhdHRyX3ZhbHVlKSB7XG4gICAgaWYgKH5jb250ZW50ZWRpdGFibGVfdHJ1dGh5X3ZhbHVlcy5pbmRleE9mKGF0dHJfdmFsdWUpKSB7XG4gICAgICAgIHNldF9kYXRhX2NvbnRlbnRlZGl0YWJsZV9kZXYodGV4dCwgZGF0YSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzZXRfZGF0YV9kZXYodGV4dCwgZGF0YSk7XG4gICAgfVxufVxuZnVuY3Rpb24gdmFsaWRhdGVfZWFjaF9hcmd1bWVudChhcmcpIHtcbiAgICBpZiAodHlwZW9mIGFyZyAhPT0gJ3N0cmluZycgJiYgIShhcmcgJiYgdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gYXJnKSkge1xuICAgICAgICBsZXQgbXNnID0gJ3sjZWFjaH0gb25seSBpdGVyYXRlcyBvdmVyIGFycmF5LWxpa2Ugb2JqZWN0cy4nO1xuICAgICAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBhcmcgJiYgU3ltYm9sLml0ZXJhdG9yIGluIGFyZykge1xuICAgICAgICAgICAgbXNnICs9ICcgWW91IGNhbiB1c2UgYSBzcHJlYWQgdG8gY29udmVydCB0aGlzIGl0ZXJhYmxlIGludG8gYW4gYXJyYXkuJztcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgICB9XG59XG5mdW5jdGlvbiB2YWxpZGF0ZV9zbG90cyhuYW1lLCBzbG90LCBrZXlzKSB7XG4gICAgZm9yIChjb25zdCBzbG90X2tleSBvZiBPYmplY3Qua2V5cyhzbG90KSkge1xuICAgICAgICBpZiAoIX5rZXlzLmluZGV4T2Yoc2xvdF9rZXkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYDwke25hbWV9PiByZWNlaXZlZCBhbiB1bmV4cGVjdGVkIHNsb3QgXCIke3Nsb3Rfa2V5fVwiLmApO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gdmFsaWRhdGVfZHluYW1pY19lbGVtZW50KHRhZykge1xuICAgIGNvbnN0IGlzX3N0cmluZyA9IHR5cGVvZiB0YWcgPT09ICdzdHJpbmcnO1xuICAgIGlmICh0YWcgJiYgIWlzX3N0cmluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJzxzdmVsdGU6ZWxlbWVudD4gZXhwZWN0cyBcInRoaXNcIiBhdHRyaWJ1dGUgdG8gYmUgYSBzdHJpbmcuJyk7XG4gICAgfVxufVxuZnVuY3Rpb24gdmFsaWRhdGVfdm9pZF9keW5hbWljX2VsZW1lbnQodGFnKSB7XG4gICAgaWYgKHRhZyAmJiBpc192b2lkKHRhZykpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGA8c3ZlbHRlOmVsZW1lbnQgdGhpcz1cIiR7dGFnfVwiPiBpcyBzZWxmLWNsb3NpbmcgYW5kIGNhbm5vdCBoYXZlIGNvbnRlbnQuYCk7XG4gICAgfVxufVxuZnVuY3Rpb24gY29uc3RydWN0X3N2ZWx0ZV9jb21wb25lbnRfZGV2KGNvbXBvbmVudCwgcHJvcHMpIHtcbiAgICBjb25zdCBlcnJvcl9tZXNzYWdlID0gJ3RoaXM9ey4uLn0gb2YgPHN2ZWx0ZTpjb21wb25lbnQ+IHNob3VsZCBzcGVjaWZ5IGEgU3ZlbHRlIGNvbXBvbmVudC4nO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IGNvbXBvbmVudChwcm9wcyk7XG4gICAgICAgIGlmICghaW5zdGFuY2UuJCQgfHwgIWluc3RhbmNlLiRzZXQgfHwgIWluc3RhbmNlLiRvbiB8fCAhaW5zdGFuY2UuJGRlc3Ryb3kpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcl9tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc3QgeyBtZXNzYWdlIH0gPSBlcnI7XG4gICAgICAgIGlmICh0eXBlb2YgbWVzc2FnZSA9PT0gJ3N0cmluZycgJiYgbWVzc2FnZS5pbmRleE9mKCdpcyBub3QgYSBjb25zdHJ1Y3RvcicpICE9PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yX21lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgfVxufVxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBTdmVsdGUgY29tcG9uZW50cyB3aXRoIHNvbWUgbWlub3IgZGV2LWVuaGFuY2VtZW50cy4gVXNlZCB3aGVuIGRldj10cnVlLlxuICovXG5jbGFzcyBTdmVsdGVDb21wb25lbnREZXYgZXh0ZW5kcyBTdmVsdGVDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKCFvcHRpb25zIHx8ICghb3B0aW9ucy50YXJnZXQgJiYgIW9wdGlvbnMuJCRpbmxpbmUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCIndGFyZ2V0JyBpcyBhIHJlcXVpcmVkIG9wdGlvblwiKTtcbiAgICAgICAgfVxuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgc3VwZXIuJGRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy4kZGVzdHJveSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignQ29tcG9uZW50IHdhcyBhbHJlYWR5IGRlc3Ryb3llZCcpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgfTtcbiAgICB9XG4gICAgJGNhcHR1cmVfc3RhdGUoKSB7IH1cbiAgICAkaW5qZWN0X3N0YXRlKCkgeyB9XG59XG4vKipcbiAqIEJhc2UgY2xhc3MgdG8gY3JlYXRlIHN0cm9uZ2x5IHR5cGVkIFN2ZWx0ZSBjb21wb25lbnRzLlxuICogVGhpcyBvbmx5IGV4aXN0cyBmb3IgdHlwaW5nIHB1cnBvc2VzIGFuZCBzaG91bGQgYmUgdXNlZCBpbiBgLmQudHNgIGZpbGVzLlxuICpcbiAqICMjIyBFeGFtcGxlOlxuICpcbiAqIFlvdSBoYXZlIGNvbXBvbmVudCBsaWJyYXJ5IG9uIG5wbSBjYWxsZWQgYGNvbXBvbmVudC1saWJyYXJ5YCwgZnJvbSB3aGljaFxuICogeW91IGV4cG9ydCBhIGNvbXBvbmVudCBjYWxsZWQgYE15Q29tcG9uZW50YC4gRm9yIFN2ZWx0ZStUeXBlU2NyaXB0IHVzZXJzLFxuICogeW91IHdhbnQgdG8gcHJvdmlkZSB0eXBpbmdzLiBUaGVyZWZvcmUgeW91IGNyZWF0ZSBhIGBpbmRleC5kLnRzYDpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBTdmVsdGVDb21wb25lbnRUeXBlZCB9IGZyb20gXCJzdmVsdGVcIjtcbiAqIGV4cG9ydCBjbGFzcyBNeUNvbXBvbmVudCBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudFR5cGVkPHtmb286IHN0cmluZ30+IHt9XG4gKiBgYGBcbiAqIFR5cGluZyB0aGlzIG1ha2VzIGl0IHBvc3NpYmxlIGZvciBJREVzIGxpa2UgVlMgQ29kZSB3aXRoIHRoZSBTdmVsdGUgZXh0ZW5zaW9uXG4gKiB0byBwcm92aWRlIGludGVsbGlzZW5zZSBhbmQgdG8gdXNlIHRoZSBjb21wb25lbnQgbGlrZSB0aGlzIGluIGEgU3ZlbHRlIGZpbGVcbiAqIHdpdGggVHlwZVNjcmlwdDpcbiAqIGBgYHN2ZWx0ZVxuICogPHNjcmlwdCBsYW5nPVwidHNcIj5cbiAqIFx0aW1wb3J0IHsgTXlDb21wb25lbnQgfSBmcm9tIFwiY29tcG9uZW50LWxpYnJhcnlcIjtcbiAqIDwvc2NyaXB0PlxuICogPE15Q29tcG9uZW50IGZvbz17J2Jhcid9IC8+XG4gKiBgYGBcbiAqXG4gKiAjIyMjIFdoeSBub3QgbWFrZSB0aGlzIHBhcnQgb2YgYFN2ZWx0ZUNvbXBvbmVudChEZXYpYD9cbiAqIEJlY2F1c2VcbiAqIGBgYHRzXG4gKiBjbGFzcyBBU3ViY2xhc3NPZlN2ZWx0ZUNvbXBvbmVudCBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudDx7Zm9vOiBzdHJpbmd9PiB7fVxuICogY29uc3QgY29tcG9uZW50OiB0eXBlb2YgU3ZlbHRlQ29tcG9uZW50ID0gQVN1YmNsYXNzT2ZTdmVsdGVDb21wb25lbnQ7XG4gKiBgYGBcbiAqIHdpbGwgdGhyb3cgYSB0eXBlIGVycm9yLCBzbyB3ZSBuZWVkIHRvIHNlcGFyYXRlIHRoZSBtb3JlIHN0cmljdGx5IHR5cGVkIGNsYXNzLlxuICovXG5jbGFzcyBTdmVsdGVDb21wb25lbnRUeXBlZCBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudERldiB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICB9XG59XG5mdW5jdGlvbiBsb29wX2d1YXJkKHRpbWVvdXQpIHtcbiAgICBjb25zdCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKERhdGUubm93KCkgLSBzdGFydCA+IHRpbWVvdXQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW5maW5pdGUgbG9vcCBkZXRlY3RlZCcpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0cy5IdG1sVGFnID0gSHRtbFRhZztcbmV4cG9ydHMuSHRtbFRhZ0h5ZHJhdGlvbiA9IEh0bWxUYWdIeWRyYXRpb247XG5leHBvcnRzLlJlc2l6ZU9ic2VydmVyU2luZ2xldG9uID0gUmVzaXplT2JzZXJ2ZXJTaW5nbGV0b247XG5leHBvcnRzLlN2ZWx0ZUNvbXBvbmVudCA9IFN2ZWx0ZUNvbXBvbmVudDtcbmV4cG9ydHMuU3ZlbHRlQ29tcG9uZW50RGV2ID0gU3ZlbHRlQ29tcG9uZW50RGV2O1xuZXhwb3J0cy5TdmVsdGVDb21wb25lbnRUeXBlZCA9IFN2ZWx0ZUNvbXBvbmVudFR5cGVkO1xuZXhwb3J0cy5hY3Rpb25fZGVzdHJveWVyID0gYWN0aW9uX2Rlc3Ryb3llcjtcbmV4cG9ydHMuYWRkX2F0dHJpYnV0ZSA9IGFkZF9hdHRyaWJ1dGU7XG5leHBvcnRzLmFkZF9jbGFzc2VzID0gYWRkX2NsYXNzZXM7XG5leHBvcnRzLmFkZF9mbHVzaF9jYWxsYmFjayA9IGFkZF9mbHVzaF9jYWxsYmFjaztcbmV4cG9ydHMuYWRkX2lmcmFtZV9yZXNpemVfbGlzdGVuZXIgPSBhZGRfaWZyYW1lX3Jlc2l6ZV9saXN0ZW5lcjtcbmV4cG9ydHMuYWRkX2xvY2F0aW9uID0gYWRkX2xvY2F0aW9uO1xuZXhwb3J0cy5hZGRfcmVuZGVyX2NhbGxiYWNrID0gYWRkX3JlbmRlcl9jYWxsYmFjaztcbmV4cG9ydHMuYWRkX3N0eWxlcyA9IGFkZF9zdHlsZXM7XG5leHBvcnRzLmFkZF90cmFuc2Zvcm0gPSBhZGRfdHJhbnNmb3JtO1xuZXhwb3J0cy5hZnRlclVwZGF0ZSA9IGFmdGVyVXBkYXRlO1xuZXhwb3J0cy5hcHBlbmQgPSBhcHBlbmQ7XG5leHBvcnRzLmFwcGVuZF9kZXYgPSBhcHBlbmRfZGV2O1xuZXhwb3J0cy5hcHBlbmRfZW1wdHlfc3R5bGVzaGVldCA9IGFwcGVuZF9lbXB0eV9zdHlsZXNoZWV0O1xuZXhwb3J0cy5hcHBlbmRfaHlkcmF0aW9uID0gYXBwZW5kX2h5ZHJhdGlvbjtcbmV4cG9ydHMuYXBwZW5kX2h5ZHJhdGlvbl9kZXYgPSBhcHBlbmRfaHlkcmF0aW9uX2RldjtcbmV4cG9ydHMuYXBwZW5kX3N0eWxlcyA9IGFwcGVuZF9zdHlsZXM7XG5leHBvcnRzLmFzc2lnbiA9IGFzc2lnbjtcbmV4cG9ydHMuYXR0ciA9IGF0dHI7XG5leHBvcnRzLmF0dHJfZGV2ID0gYXR0cl9kZXY7XG5leHBvcnRzLmF0dHJpYnV0ZV90b19vYmplY3QgPSBhdHRyaWJ1dGVfdG9fb2JqZWN0O1xuZXhwb3J0cy5iZWZvcmVVcGRhdGUgPSBiZWZvcmVVcGRhdGU7XG5leHBvcnRzLmJpbmQgPSBiaW5kO1xuZXhwb3J0cy5iaW5kaW5nX2NhbGxiYWNrcyA9IGJpbmRpbmdfY2FsbGJhY2tzO1xuZXhwb3J0cy5ibGFua19vYmplY3QgPSBibGFua19vYmplY3Q7XG5leHBvcnRzLmJ1YmJsZSA9IGJ1YmJsZTtcbmV4cG9ydHMuY2hlY2tfb3V0cm9zID0gY2hlY2tfb3V0cm9zO1xuZXhwb3J0cy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuZXhwb3J0cy5jbGFpbV9jb21tZW50ID0gY2xhaW1fY29tbWVudDtcbmV4cG9ydHMuY2xhaW1fY29tcG9uZW50ID0gY2xhaW1fY29tcG9uZW50O1xuZXhwb3J0cy5jbGFpbV9lbGVtZW50ID0gY2xhaW1fZWxlbWVudDtcbmV4cG9ydHMuY2xhaW1faHRtbF90YWcgPSBjbGFpbV9odG1sX3RhZztcbmV4cG9ydHMuY2xhaW1fc3BhY2UgPSBjbGFpbV9zcGFjZTtcbmV4cG9ydHMuY2xhaW1fc3ZnX2VsZW1lbnQgPSBjbGFpbV9zdmdfZWxlbWVudDtcbmV4cG9ydHMuY2xhaW1fdGV4dCA9IGNsYWltX3RleHQ7XG5leHBvcnRzLmNsZWFyX2xvb3BzID0gY2xlYXJfbG9vcHM7XG5leHBvcnRzLmNvbW1lbnQgPSBjb21tZW50O1xuZXhwb3J0cy5jb21wb25lbnRfc3Vic2NyaWJlID0gY29tcG9uZW50X3N1YnNjcmliZTtcbmV4cG9ydHMuY29tcHV0ZV9yZXN0X3Byb3BzID0gY29tcHV0ZV9yZXN0X3Byb3BzO1xuZXhwb3J0cy5jb21wdXRlX3Nsb3RzID0gY29tcHV0ZV9zbG90cztcbmV4cG9ydHMuY29uc3RydWN0X3N2ZWx0ZV9jb21wb25lbnQgPSBjb25zdHJ1Y3Rfc3ZlbHRlX2NvbXBvbmVudDtcbmV4cG9ydHMuY29uc3RydWN0X3N2ZWx0ZV9jb21wb25lbnRfZGV2ID0gY29uc3RydWN0X3N2ZWx0ZV9jb21wb25lbnRfZGV2O1xuZXhwb3J0cy5jb250ZW50ZWRpdGFibGVfdHJ1dGh5X3ZhbHVlcyA9IGNvbnRlbnRlZGl0YWJsZV90cnV0aHlfdmFsdWVzO1xuZXhwb3J0cy5jcmVhdGVFdmVudERpc3BhdGNoZXIgPSBjcmVhdGVFdmVudERpc3BhdGNoZXI7XG5leHBvcnRzLmNyZWF0ZV9hbmltYXRpb24gPSBjcmVhdGVfYW5pbWF0aW9uO1xuZXhwb3J0cy5jcmVhdGVfYmlkaXJlY3Rpb25hbF90cmFuc2l0aW9uID0gY3JlYXRlX2JpZGlyZWN0aW9uYWxfdHJhbnNpdGlvbjtcbmV4cG9ydHMuY3JlYXRlX2NvbXBvbmVudCA9IGNyZWF0ZV9jb21wb25lbnQ7XG5leHBvcnRzLmNyZWF0ZV9pbl90cmFuc2l0aW9uID0gY3JlYXRlX2luX3RyYW5zaXRpb247XG5leHBvcnRzLmNyZWF0ZV9vdXRfdHJhbnNpdGlvbiA9IGNyZWF0ZV9vdXRfdHJhbnNpdGlvbjtcbmV4cG9ydHMuY3JlYXRlX3Nsb3QgPSBjcmVhdGVfc2xvdDtcbmV4cG9ydHMuY3JlYXRlX3Nzcl9jb21wb25lbnQgPSBjcmVhdGVfc3NyX2NvbXBvbmVudDtcbmV4cG9ydHMuY3VzdG9tX2V2ZW50ID0gY3VzdG9tX2V2ZW50O1xuZXhwb3J0cy5kYXRhc2V0X2RldiA9IGRhdGFzZXRfZGV2O1xuZXhwb3J0cy5kZWJ1ZyA9IGRlYnVnO1xuZXhwb3J0cy5kZXN0cm95X2Jsb2NrID0gZGVzdHJveV9ibG9jaztcbmV4cG9ydHMuZGVzdHJveV9jb21wb25lbnQgPSBkZXN0cm95X2NvbXBvbmVudDtcbmV4cG9ydHMuZGVzdHJveV9lYWNoID0gZGVzdHJveV9lYWNoO1xuZXhwb3J0cy5kZXRhY2ggPSBkZXRhY2g7XG5leHBvcnRzLmRldGFjaF9hZnRlcl9kZXYgPSBkZXRhY2hfYWZ0ZXJfZGV2O1xuZXhwb3J0cy5kZXRhY2hfYmVmb3JlX2RldiA9IGRldGFjaF9iZWZvcmVfZGV2O1xuZXhwb3J0cy5kZXRhY2hfYmV0d2Vlbl9kZXYgPSBkZXRhY2hfYmV0d2Vlbl9kZXY7XG5leHBvcnRzLmRldGFjaF9kZXYgPSBkZXRhY2hfZGV2O1xuZXhwb3J0cy5kaXJ0eV9jb21wb25lbnRzID0gZGlydHlfY29tcG9uZW50cztcbmV4cG9ydHMuZGlzcGF0Y2hfZGV2ID0gZGlzcGF0Y2hfZGV2O1xuZXhwb3J0cy5lYWNoID0gZWFjaDtcbmV4cG9ydHMuZWxlbWVudCA9IGVsZW1lbnQ7XG5leHBvcnRzLmVsZW1lbnRfaXMgPSBlbGVtZW50X2lzO1xuZXhwb3J0cy5lbXB0eSA9IGVtcHR5O1xuZXhwb3J0cy5lbmRfaHlkcmF0aW5nID0gZW5kX2h5ZHJhdGluZztcbmV4cG9ydHMuZXNjYXBlID0gZXNjYXBlO1xuZXhwb3J0cy5lc2NhcGVfYXR0cmlidXRlX3ZhbHVlID0gZXNjYXBlX2F0dHJpYnV0ZV92YWx1ZTtcbmV4cG9ydHMuZXNjYXBlX29iamVjdCA9IGVzY2FwZV9vYmplY3Q7XG5leHBvcnRzLmV4Y2x1ZGVfaW50ZXJuYWxfcHJvcHMgPSBleGNsdWRlX2ludGVybmFsX3Byb3BzO1xuZXhwb3J0cy5maXhfYW5kX2Rlc3Ryb3lfYmxvY2sgPSBmaXhfYW5kX2Rlc3Ryb3lfYmxvY2s7XG5leHBvcnRzLmZpeF9hbmRfb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2sgPSBmaXhfYW5kX291dHJvX2FuZF9kZXN0cm95X2Jsb2NrO1xuZXhwb3J0cy5maXhfcG9zaXRpb24gPSBmaXhfcG9zaXRpb247XG5leHBvcnRzLmZsdXNoID0gZmx1c2g7XG5leHBvcnRzLmZsdXNoX3JlbmRlcl9jYWxsYmFja3MgPSBmbHVzaF9yZW5kZXJfY2FsbGJhY2tzO1xuZXhwb3J0cy5nZXRBbGxDb250ZXh0cyA9IGdldEFsbENvbnRleHRzO1xuZXhwb3J0cy5nZXRDb250ZXh0ID0gZ2V0Q29udGV4dDtcbmV4cG9ydHMuZ2V0X2FsbF9kaXJ0eV9mcm9tX3Njb3BlID0gZ2V0X2FsbF9kaXJ0eV9mcm9tX3Njb3BlO1xuZXhwb3J0cy5nZXRfYmluZGluZ19ncm91cF92YWx1ZSA9IGdldF9iaW5kaW5nX2dyb3VwX3ZhbHVlO1xuZXhwb3J0cy5nZXRfY3VycmVudF9jb21wb25lbnQgPSBnZXRfY3VycmVudF9jb21wb25lbnQ7XG5leHBvcnRzLmdldF9jdXN0b21fZWxlbWVudHNfc2xvdHMgPSBnZXRfY3VzdG9tX2VsZW1lbnRzX3Nsb3RzO1xuZXhwb3J0cy5nZXRfcm9vdF9mb3Jfc3R5bGUgPSBnZXRfcm9vdF9mb3Jfc3R5bGU7XG5leHBvcnRzLmdldF9zbG90X2NoYW5nZXMgPSBnZXRfc2xvdF9jaGFuZ2VzO1xuZXhwb3J0cy5nZXRfc3ByZWFkX29iamVjdCA9IGdldF9zcHJlYWRfb2JqZWN0O1xuZXhwb3J0cy5nZXRfc3ByZWFkX3VwZGF0ZSA9IGdldF9zcHJlYWRfdXBkYXRlO1xuZXhwb3J0cy5nZXRfc3RvcmVfdmFsdWUgPSBnZXRfc3RvcmVfdmFsdWU7XG5leHBvcnRzLmdsb2JhbHMgPSBnbG9iYWxzO1xuZXhwb3J0cy5ncm91cF9vdXRyb3MgPSBncm91cF9vdXRyb3M7XG5leHBvcnRzLmhhbmRsZV9wcm9taXNlID0gaGFuZGxlX3Byb21pc2U7XG5leHBvcnRzLmhhc0NvbnRleHQgPSBoYXNDb250ZXh0O1xuZXhwb3J0cy5oYXNfcHJvcCA9IGhhc19wcm9wO1xuZXhwb3J0cy5oZWFkX3NlbGVjdG9yID0gaGVhZF9zZWxlY3RvcjtcbmV4cG9ydHMuaWRlbnRpdHkgPSBpZGVudGl0eTtcbmV4cG9ydHMuaW5pdCA9IGluaXQ7XG5leHBvcnRzLmluaXRfYmluZGluZ19ncm91cCA9IGluaXRfYmluZGluZ19ncm91cDtcbmV4cG9ydHMuaW5pdF9iaW5kaW5nX2dyb3VwX2R5bmFtaWMgPSBpbml0X2JpbmRpbmdfZ3JvdXBfZHluYW1pYztcbmV4cG9ydHMuaW5zZXJ0ID0gaW5zZXJ0O1xuZXhwb3J0cy5pbnNlcnRfZGV2ID0gaW5zZXJ0X2RldjtcbmV4cG9ydHMuaW5zZXJ0X2h5ZHJhdGlvbiA9IGluc2VydF9oeWRyYXRpb247XG5leHBvcnRzLmluc2VydF9oeWRyYXRpb25fZGV2ID0gaW5zZXJ0X2h5ZHJhdGlvbl9kZXY7XG5leHBvcnRzLmludHJvcyA9IGludHJvcztcbmV4cG9ydHMuaW52YWxpZF9hdHRyaWJ1dGVfbmFtZV9jaGFyYWN0ZXIgPSBpbnZhbGlkX2F0dHJpYnV0ZV9uYW1lX2NoYXJhY3RlcjtcbmV4cG9ydHMuaXNfY2xpZW50ID0gaXNfY2xpZW50O1xuZXhwb3J0cy5pc19jcm9zc29yaWdpbiA9IGlzX2Nyb3Nzb3JpZ2luO1xuZXhwb3J0cy5pc19lbXB0eSA9IGlzX2VtcHR5O1xuZXhwb3J0cy5pc19mdW5jdGlvbiA9IGlzX2Z1bmN0aW9uO1xuZXhwb3J0cy5pc19wcm9taXNlID0gaXNfcHJvbWlzZTtcbmV4cG9ydHMuaXNfdm9pZCA9IGlzX3ZvaWQ7XG5leHBvcnRzLmxpc3RlbiA9IGxpc3RlbjtcbmV4cG9ydHMubGlzdGVuX2RldiA9IGxpc3Rlbl9kZXY7XG5leHBvcnRzLmxvb3AgPSBsb29wO1xuZXhwb3J0cy5sb29wX2d1YXJkID0gbG9vcF9ndWFyZDtcbmV4cG9ydHMubWVyZ2Vfc3NyX3N0eWxlcyA9IG1lcmdlX3Nzcl9zdHlsZXM7XG5leHBvcnRzLm1pc3NpbmdfY29tcG9uZW50ID0gbWlzc2luZ19jb21wb25lbnQ7XG5leHBvcnRzLm1vdW50X2NvbXBvbmVudCA9IG1vdW50X2NvbXBvbmVudDtcbmV4cG9ydHMubm9vcCA9IG5vb3A7XG5leHBvcnRzLm5vdF9lcXVhbCA9IG5vdF9lcXVhbDtcbmV4cG9ydHMubnVsbF90b19lbXB0eSA9IG51bGxfdG9fZW1wdHk7XG5leHBvcnRzLm9iamVjdF93aXRob3V0X3Byb3BlcnRpZXMgPSBvYmplY3Rfd2l0aG91dF9wcm9wZXJ0aWVzO1xuZXhwb3J0cy5vbkRlc3Ryb3kgPSBvbkRlc3Ryb3k7XG5leHBvcnRzLm9uTW91bnQgPSBvbk1vdW50O1xuZXhwb3J0cy5vbmNlID0gb25jZTtcbmV4cG9ydHMub3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2sgPSBvdXRyb19hbmRfZGVzdHJveV9ibG9jaztcbmV4cG9ydHMucHJldmVudF9kZWZhdWx0ID0gcHJldmVudF9kZWZhdWx0O1xuZXhwb3J0cy5wcm9wX2RldiA9IHByb3BfZGV2O1xuZXhwb3J0cy5xdWVyeV9zZWxlY3Rvcl9hbGwgPSBxdWVyeV9zZWxlY3Rvcl9hbGw7XG5leHBvcnRzLnJlc2l6ZV9vYnNlcnZlcl9ib3JkZXJfYm94ID0gcmVzaXplX29ic2VydmVyX2JvcmRlcl9ib3g7XG5leHBvcnRzLnJlc2l6ZV9vYnNlcnZlcl9jb250ZW50X2JveCA9IHJlc2l6ZV9vYnNlcnZlcl9jb250ZW50X2JveDtcbmV4cG9ydHMucmVzaXplX29ic2VydmVyX2RldmljZV9waXhlbF9jb250ZW50X2JveCA9IHJlc2l6ZV9vYnNlcnZlcl9kZXZpY2VfcGl4ZWxfY29udGVudF9ib3g7XG5leHBvcnRzLnJ1biA9IHJ1bjtcbmV4cG9ydHMucnVuX2FsbCA9IHJ1bl9hbGw7XG5leHBvcnRzLnNhZmVfbm90X2VxdWFsID0gc2FmZV9ub3RfZXF1YWw7XG5leHBvcnRzLnNjaGVkdWxlX3VwZGF0ZSA9IHNjaGVkdWxlX3VwZGF0ZTtcbmV4cG9ydHMuc2VsZWN0X211bHRpcGxlX3ZhbHVlID0gc2VsZWN0X211bHRpcGxlX3ZhbHVlO1xuZXhwb3J0cy5zZWxlY3Rfb3B0aW9uID0gc2VsZWN0X29wdGlvbjtcbmV4cG9ydHMuc2VsZWN0X29wdGlvbnMgPSBzZWxlY3Rfb3B0aW9ucztcbmV4cG9ydHMuc2VsZWN0X3ZhbHVlID0gc2VsZWN0X3ZhbHVlO1xuZXhwb3J0cy5zZWxmID0gc2VsZjtcbmV4cG9ydHMuc2V0Q29udGV4dCA9IHNldENvbnRleHQ7XG5leHBvcnRzLnNldF9hdHRyaWJ1dGVzID0gc2V0X2F0dHJpYnV0ZXM7XG5leHBvcnRzLnNldF9jdXJyZW50X2NvbXBvbmVudCA9IHNldF9jdXJyZW50X2NvbXBvbmVudDtcbmV4cG9ydHMuc2V0X2N1c3RvbV9lbGVtZW50X2RhdGEgPSBzZXRfY3VzdG9tX2VsZW1lbnRfZGF0YTtcbmV4cG9ydHMuc2V0X2N1c3RvbV9lbGVtZW50X2RhdGFfbWFwID0gc2V0X2N1c3RvbV9lbGVtZW50X2RhdGFfbWFwO1xuZXhwb3J0cy5zZXRfZGF0YSA9IHNldF9kYXRhO1xuZXhwb3J0cy5zZXRfZGF0YV9jb250ZW50ZWRpdGFibGUgPSBzZXRfZGF0YV9jb250ZW50ZWRpdGFibGU7XG5leHBvcnRzLnNldF9kYXRhX2NvbnRlbnRlZGl0YWJsZV9kZXYgPSBzZXRfZGF0YV9jb250ZW50ZWRpdGFibGVfZGV2O1xuZXhwb3J0cy5zZXRfZGF0YV9kZXYgPSBzZXRfZGF0YV9kZXY7XG5leHBvcnRzLnNldF9kYXRhX21heWJlX2NvbnRlbnRlZGl0YWJsZSA9IHNldF9kYXRhX21heWJlX2NvbnRlbnRlZGl0YWJsZTtcbmV4cG9ydHMuc2V0X2RhdGFfbWF5YmVfY29udGVudGVkaXRhYmxlX2RldiA9IHNldF9kYXRhX21heWJlX2NvbnRlbnRlZGl0YWJsZV9kZXY7XG5leHBvcnRzLnNldF9keW5hbWljX2VsZW1lbnRfZGF0YSA9IHNldF9keW5hbWljX2VsZW1lbnRfZGF0YTtcbmV4cG9ydHMuc2V0X2lucHV0X3R5cGUgPSBzZXRfaW5wdXRfdHlwZTtcbmV4cG9ydHMuc2V0X2lucHV0X3ZhbHVlID0gc2V0X2lucHV0X3ZhbHVlO1xuZXhwb3J0cy5zZXRfbm93ID0gc2V0X25vdztcbmV4cG9ydHMuc2V0X3JhZiA9IHNldF9yYWY7XG5leHBvcnRzLnNldF9zdG9yZV92YWx1ZSA9IHNldF9zdG9yZV92YWx1ZTtcbmV4cG9ydHMuc2V0X3N0eWxlID0gc2V0X3N0eWxlO1xuZXhwb3J0cy5zZXRfc3ZnX2F0dHJpYnV0ZXMgPSBzZXRfc3ZnX2F0dHJpYnV0ZXM7XG5leHBvcnRzLnNwYWNlID0gc3BhY2U7XG5leHBvcnRzLnNwbGl0X2Nzc191bml0ID0gc3BsaXRfY3NzX3VuaXQ7XG5leHBvcnRzLnNwcmVhZCA9IHNwcmVhZDtcbmV4cG9ydHMuc3JjX3VybF9lcXVhbCA9IHNyY191cmxfZXF1YWw7XG5leHBvcnRzLnN0YXJ0X2h5ZHJhdGluZyA9IHN0YXJ0X2h5ZHJhdGluZztcbmV4cG9ydHMuc3RvcF9pbW1lZGlhdGVfcHJvcGFnYXRpb24gPSBzdG9wX2ltbWVkaWF0ZV9wcm9wYWdhdGlvbjtcbmV4cG9ydHMuc3RvcF9wcm9wYWdhdGlvbiA9IHN0b3BfcHJvcGFnYXRpb247XG5leHBvcnRzLnN1YnNjcmliZSA9IHN1YnNjcmliZTtcbmV4cG9ydHMuc3ZnX2VsZW1lbnQgPSBzdmdfZWxlbWVudDtcbmV4cG9ydHMudGV4dCA9IHRleHQ7XG5leHBvcnRzLnRpY2sgPSB0aWNrO1xuZXhwb3J0cy50aW1lX3Jhbmdlc190b19hcnJheSA9IHRpbWVfcmFuZ2VzX3RvX2FycmF5O1xuZXhwb3J0cy50b19udW1iZXIgPSB0b19udW1iZXI7XG5leHBvcnRzLnRvZ2dsZV9jbGFzcyA9IHRvZ2dsZV9jbGFzcztcbmV4cG9ydHMudHJhbnNpdGlvbl9pbiA9IHRyYW5zaXRpb25faW47XG5leHBvcnRzLnRyYW5zaXRpb25fb3V0ID0gdHJhbnNpdGlvbl9vdXQ7XG5leHBvcnRzLnRydXN0ZWQgPSB0cnVzdGVkO1xuZXhwb3J0cy51cGRhdGVfYXdhaXRfYmxvY2tfYnJhbmNoID0gdXBkYXRlX2F3YWl0X2Jsb2NrX2JyYW5jaDtcbmV4cG9ydHMudXBkYXRlX2tleWVkX2VhY2ggPSB1cGRhdGVfa2V5ZWRfZWFjaDtcbmV4cG9ydHMudXBkYXRlX3Nsb3QgPSB1cGRhdGVfc2xvdDtcbmV4cG9ydHMudXBkYXRlX3Nsb3RfYmFzZSA9IHVwZGF0ZV9zbG90X2Jhc2U7XG5leHBvcnRzLnZhbGlkYXRlX2NvbXBvbmVudCA9IHZhbGlkYXRlX2NvbXBvbmVudDtcbmV4cG9ydHMudmFsaWRhdGVfZHluYW1pY19lbGVtZW50ID0gdmFsaWRhdGVfZHluYW1pY19lbGVtZW50O1xuZXhwb3J0cy52YWxpZGF0ZV9lYWNoX2FyZ3VtZW50ID0gdmFsaWRhdGVfZWFjaF9hcmd1bWVudDtcbmV4cG9ydHMudmFsaWRhdGVfZWFjaF9rZXlzID0gdmFsaWRhdGVfZWFjaF9rZXlzO1xuZXhwb3J0cy52YWxpZGF0ZV9zbG90cyA9IHZhbGlkYXRlX3Nsb3RzO1xuZXhwb3J0cy52YWxpZGF0ZV9zdG9yZSA9IHZhbGlkYXRlX3N0b3JlO1xuZXhwb3J0cy52YWxpZGF0ZV92b2lkX2R5bmFtaWNfZWxlbWVudCA9IHZhbGlkYXRlX3ZvaWRfZHluYW1pY19lbGVtZW50O1xuZXhwb3J0cy54bGlua19hdHRyID0geGxpbmtfYXR0cjtcbiIsICJmdW5jdGlvbiBub29wKCkgeyB9XG5jb25zdCBpZGVudGl0eSA9IHggPT4geDtcbmZ1bmN0aW9uIGFzc2lnbih0YXIsIHNyYykge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBmb3IgKGNvbnN0IGsgaW4gc3JjKVxuICAgICAgICB0YXJba10gPSBzcmNba107XG4gICAgcmV0dXJuIHRhcjtcbn1cbi8vIEFkYXB0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vdGhlbi9pcy1wcm9taXNlL2Jsb2IvbWFzdGVyL2luZGV4LmpzXG4vLyBEaXN0cmlidXRlZCB1bmRlciBNSVQgTGljZW5zZSBodHRwczovL2dpdGh1Yi5jb20vdGhlbi9pcy1wcm9taXNlL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbmZ1bmN0aW9uIGlzX3Byb21pc2UodmFsdWUpIHtcbiAgICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nO1xufVxuZnVuY3Rpb24gYWRkX2xvY2F0aW9uKGVsZW1lbnQsIGZpbGUsIGxpbmUsIGNvbHVtbiwgY2hhcikge1xuICAgIGVsZW1lbnQuX19zdmVsdGVfbWV0YSA9IHtcbiAgICAgICAgbG9jOiB7IGZpbGUsIGxpbmUsIGNvbHVtbiwgY2hhciB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJ1bihmbikge1xuICAgIHJldHVybiBmbigpO1xufVxuZnVuY3Rpb24gYmxhbmtfb2JqZWN0KCkge1xuICAgIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwpO1xufVxuZnVuY3Rpb24gcnVuX2FsbChmbnMpIHtcbiAgICBmbnMuZm9yRWFjaChydW4pO1xufVxuZnVuY3Rpb24gaXNfZnVuY3Rpb24odGhpbmcpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaW5nID09PSAnZnVuY3Rpb24nO1xufVxuZnVuY3Rpb24gc2FmZV9ub3RfZXF1YWwoYSwgYikge1xuICAgIHJldHVybiBhICE9IGEgPyBiID09IGIgOiBhICE9PSBiIHx8ICgoYSAmJiB0eXBlb2YgYSA9PT0gJ29iamVjdCcpIHx8IHR5cGVvZiBhID09PSAnZnVuY3Rpb24nKTtcbn1cbmxldCBzcmNfdXJsX2VxdWFsX2FuY2hvcjtcbmZ1bmN0aW9uIHNyY191cmxfZXF1YWwoZWxlbWVudF9zcmMsIHVybCkge1xuICAgIGlmICghc3JjX3VybF9lcXVhbF9hbmNob3IpIHtcbiAgICAgICAgc3JjX3VybF9lcXVhbF9hbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgfVxuICAgIHNyY191cmxfZXF1YWxfYW5jaG9yLmhyZWYgPSB1cmw7XG4gICAgcmV0dXJuIGVsZW1lbnRfc3JjID09PSBzcmNfdXJsX2VxdWFsX2FuY2hvci5ocmVmO1xufVxuZnVuY3Rpb24gbm90X2VxdWFsKGEsIGIpIHtcbiAgICByZXR1cm4gYSAhPSBhID8gYiA9PSBiIDogYSAhPT0gYjtcbn1cbmZ1bmN0aW9uIGlzX2VtcHR5KG9iaikge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLmxlbmd0aCA9PT0gMDtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlX3N0b3JlKHN0b3JlLCBuYW1lKSB7XG4gICAgaWYgKHN0b3JlICE9IG51bGwgJiYgdHlwZW9mIHN0b3JlLnN1YnNjcmliZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCcke25hbWV9JyBpcyBub3QgYSBzdG9yZSB3aXRoIGEgJ3N1YnNjcmliZScgbWV0aG9kYCk7XG4gICAgfVxufVxuZnVuY3Rpb24gc3Vic2NyaWJlKHN0b3JlLCAuLi5jYWxsYmFja3MpIHtcbiAgICBpZiAoc3RvcmUgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbm9vcDtcbiAgICB9XG4gICAgY29uc3QgdW5zdWIgPSBzdG9yZS5zdWJzY3JpYmUoLi4uY2FsbGJhY2tzKTtcbiAgICByZXR1cm4gdW5zdWIudW5zdWJzY3JpYmUgPyAoKSA9PiB1bnN1Yi51bnN1YnNjcmliZSgpIDogdW5zdWI7XG59XG5mdW5jdGlvbiBnZXRfc3RvcmVfdmFsdWUoc3RvcmUpIHtcbiAgICBsZXQgdmFsdWU7XG4gICAgc3Vic2NyaWJlKHN0b3JlLCBfID0+IHZhbHVlID0gXykoKTtcbiAgICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiBjb21wb25lbnRfc3Vic2NyaWJlKGNvbXBvbmVudCwgc3RvcmUsIGNhbGxiYWNrKSB7XG4gICAgY29tcG9uZW50LiQkLm9uX2Rlc3Ryb3kucHVzaChzdWJzY3JpYmUoc3RvcmUsIGNhbGxiYWNrKSk7XG59XG5mdW5jdGlvbiBjcmVhdGVfc2xvdChkZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIGZuKSB7XG4gICAgaWYgKGRlZmluaXRpb24pIHtcbiAgICAgICAgY29uc3Qgc2xvdF9jdHggPSBnZXRfc2xvdF9jb250ZXh0KGRlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgZm4pO1xuICAgICAgICByZXR1cm4gZGVmaW5pdGlvblswXShzbG90X2N0eCk7XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0X3Nsb3RfY29udGV4dChkZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIGZuKSB7XG4gICAgcmV0dXJuIGRlZmluaXRpb25bMV0gJiYgZm5cbiAgICAgICAgPyBhc3NpZ24oJCRzY29wZS5jdHguc2xpY2UoKSwgZGVmaW5pdGlvblsxXShmbihjdHgpKSlcbiAgICAgICAgOiAkJHNjb3BlLmN0eDtcbn1cbmZ1bmN0aW9uIGdldF9zbG90X2NoYW5nZXMoZGVmaW5pdGlvbiwgJCRzY29wZSwgZGlydHksIGZuKSB7XG4gICAgaWYgKGRlZmluaXRpb25bMl0gJiYgZm4pIHtcbiAgICAgICAgY29uc3QgbGV0cyA9IGRlZmluaXRpb25bMl0oZm4oZGlydHkpKTtcbiAgICAgICAgaWYgKCQkc2NvcGUuZGlydHkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGxldHM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBsZXRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY29uc3QgbWVyZ2VkID0gW107XG4gICAgICAgICAgICBjb25zdCBsZW4gPSBNYXRoLm1heCgkJHNjb3BlLmRpcnR5Lmxlbmd0aCwgbGV0cy5sZW5ndGgpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIG1lcmdlZFtpXSA9ICQkc2NvcGUuZGlydHlbaV0gfCBsZXRzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1lcmdlZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJCRzY29wZS5kaXJ0eSB8IGxldHM7XG4gICAgfVxuICAgIHJldHVybiAkJHNjb3BlLmRpcnR5O1xufVxuZnVuY3Rpb24gdXBkYXRlX3Nsb3RfYmFzZShzbG90LCBzbG90X2RlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgc2xvdF9jaGFuZ2VzLCBnZXRfc2xvdF9jb250ZXh0X2ZuKSB7XG4gICAgaWYgKHNsb3RfY2hhbmdlcykge1xuICAgICAgICBjb25zdCBzbG90X2NvbnRleHQgPSBnZXRfc2xvdF9jb250ZXh0KHNsb3RfZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBnZXRfc2xvdF9jb250ZXh0X2ZuKTtcbiAgICAgICAgc2xvdC5wKHNsb3RfY29udGV4dCwgc2xvdF9jaGFuZ2VzKTtcbiAgICB9XG59XG5mdW5jdGlvbiB1cGRhdGVfc2xvdChzbG90LCBzbG90X2RlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgZGlydHksIGdldF9zbG90X2NoYW5nZXNfZm4sIGdldF9zbG90X2NvbnRleHRfZm4pIHtcbiAgICBjb25zdCBzbG90X2NoYW5nZXMgPSBnZXRfc2xvdF9jaGFuZ2VzKHNsb3RfZGVmaW5pdGlvbiwgJCRzY29wZSwgZGlydHksIGdldF9zbG90X2NoYW5nZXNfZm4pO1xuICAgIHVwZGF0ZV9zbG90X2Jhc2Uoc2xvdCwgc2xvdF9kZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIHNsb3RfY2hhbmdlcywgZ2V0X3Nsb3RfY29udGV4dF9mbik7XG59XG5mdW5jdGlvbiBnZXRfYWxsX2RpcnR5X2Zyb21fc2NvcGUoJCRzY29wZSkge1xuICAgIGlmICgkJHNjb3BlLmN0eC5sZW5ndGggPiAzMikge1xuICAgICAgICBjb25zdCBkaXJ0eSA9IFtdO1xuICAgICAgICBjb25zdCBsZW5ndGggPSAkJHNjb3BlLmN0eC5sZW5ndGggLyAzMjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZGlydHlbaV0gPSAtMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGlydHk7XG4gICAgfVxuICAgIHJldHVybiAtMTtcbn1cbmZ1bmN0aW9uIGV4Y2x1ZGVfaW50ZXJuYWxfcHJvcHMocHJvcHMpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGsgaW4gcHJvcHMpXG4gICAgICAgIGlmIChrWzBdICE9PSAnJCcpXG4gICAgICAgICAgICByZXN1bHRba10gPSBwcm9wc1trXTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gY29tcHV0ZV9yZXN0X3Byb3BzKHByb3BzLCBrZXlzKSB7XG4gICAgY29uc3QgcmVzdCA9IHt9O1xuICAgIGtleXMgPSBuZXcgU2V0KGtleXMpO1xuICAgIGZvciAoY29uc3QgayBpbiBwcm9wcylcbiAgICAgICAgaWYgKCFrZXlzLmhhcyhrKSAmJiBrWzBdICE9PSAnJCcpXG4gICAgICAgICAgICByZXN0W2tdID0gcHJvcHNba107XG4gICAgcmV0dXJuIHJlc3Q7XG59XG5mdW5jdGlvbiBjb21wdXRlX3Nsb3RzKHNsb3RzKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgZm9yIChjb25zdCBrZXkgaW4gc2xvdHMpIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gb25jZShmbikge1xuICAgIGxldCByYW4gPSBmYWxzZTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKHJhbilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgcmFuID0gdHJ1ZTtcbiAgICAgICAgZm4uY2FsbCh0aGlzLCAuLi5hcmdzKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gbnVsbF90b19lbXB0eSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIHNldF9zdG9yZV92YWx1ZShzdG9yZSwgcmV0LCB2YWx1ZSkge1xuICAgIHN0b3JlLnNldCh2YWx1ZSk7XG4gICAgcmV0dXJuIHJldDtcbn1cbmNvbnN0IGhhc19wcm9wID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG5mdW5jdGlvbiBhY3Rpb25fZGVzdHJveWVyKGFjdGlvbl9yZXN1bHQpIHtcbiAgICByZXR1cm4gYWN0aW9uX3Jlc3VsdCAmJiBpc19mdW5jdGlvbihhY3Rpb25fcmVzdWx0LmRlc3Ryb3kpID8gYWN0aW9uX3Jlc3VsdC5kZXN0cm95IDogbm9vcDtcbn1cbmZ1bmN0aW9uIHNwbGl0X2Nzc191bml0KHZhbHVlKSB7XG4gICAgY29uc3Qgc3BsaXQgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLm1hdGNoKC9eXFxzKigtP1tcXGQuXSspKFteXFxzXSopXFxzKiQvKTtcbiAgICByZXR1cm4gc3BsaXQgPyBbcGFyc2VGbG9hdChzcGxpdFsxXSksIHNwbGl0WzJdIHx8ICdweCddIDogW3ZhbHVlLCAncHgnXTtcbn1cbmNvbnN0IGNvbnRlbnRlZGl0YWJsZV90cnV0aHlfdmFsdWVzID0gWycnLCB0cnVlLCAxLCAndHJ1ZScsICdjb250ZW50ZWRpdGFibGUnXTtcblxuY29uc3QgaXNfY2xpZW50ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG5sZXQgbm93ID0gaXNfY2xpZW50XG4gICAgPyAoKSA9PiB3aW5kb3cucGVyZm9ybWFuY2Uubm93KClcbiAgICA6ICgpID0+IERhdGUubm93KCk7XG5sZXQgcmFmID0gaXNfY2xpZW50ID8gY2IgPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNiKSA6IG5vb3A7XG4vLyB1c2VkIGludGVybmFsbHkgZm9yIHRlc3RpbmdcbmZ1bmN0aW9uIHNldF9ub3coZm4pIHtcbiAgICBub3cgPSBmbjtcbn1cbmZ1bmN0aW9uIHNldF9yYWYoZm4pIHtcbiAgICByYWYgPSBmbjtcbn1cblxuY29uc3QgdGFza3MgPSBuZXcgU2V0KCk7XG5mdW5jdGlvbiBydW5fdGFza3Mobm93KSB7XG4gICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgaWYgKCF0YXNrLmMobm93KSkge1xuICAgICAgICAgICAgdGFza3MuZGVsZXRlKHRhc2spO1xuICAgICAgICAgICAgdGFzay5mKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAodGFza3Muc2l6ZSAhPT0gMClcbiAgICAgICAgcmFmKHJ1bl90YXNrcyk7XG59XG4vKipcbiAqIEZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHkhXG4gKi9cbmZ1bmN0aW9uIGNsZWFyX2xvb3BzKCkge1xuICAgIHRhc2tzLmNsZWFyKCk7XG59XG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgdGFzayB0aGF0IHJ1bnMgb24gZWFjaCByYWYgZnJhbWVcbiAqIHVudGlsIGl0IHJldHVybnMgYSBmYWxzeSB2YWx1ZSBvciBpcyBhYm9ydGVkXG4gKi9cbmZ1bmN0aW9uIGxvb3AoY2FsbGJhY2spIHtcbiAgICBsZXQgdGFzaztcbiAgICBpZiAodGFza3Muc2l6ZSA9PT0gMClcbiAgICAgICAgcmFmKHJ1bl90YXNrcyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvbWlzZTogbmV3IFByb21pc2UoZnVsZmlsbCA9PiB7XG4gICAgICAgICAgICB0YXNrcy5hZGQodGFzayA9IHsgYzogY2FsbGJhY2ssIGY6IGZ1bGZpbGwgfSk7XG4gICAgICAgIH0pLFxuICAgICAgICBhYm9ydCgpIHtcbiAgICAgICAgICAgIHRhc2tzLmRlbGV0ZSh0YXNrKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmNvbnN0IGdsb2JhbHMgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICA/IHdpbmRvd1xuICAgIDogdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnXG4gICAgICAgID8gZ2xvYmFsVGhpc1xuICAgICAgICA6IGdsb2JhbCk7XG5cbi8qKlxuICogUmVzaXplIG9ic2VydmVyIHNpbmdsZXRvbi5cbiAqIE9uZSBsaXN0ZW5lciBwZXIgZWxlbWVudCBvbmx5IVxuICogaHR0cHM6Ly9ncm91cHMuZ29vZ2xlLmNvbS9hL2Nocm9taXVtLm9yZy9nL2JsaW5rLWRldi9jL3o2aWVuT05VYjVBL20vRjUtVmNVWnRCQUFKXG4gKi9cbmNsYXNzIFJlc2l6ZU9ic2VydmVyU2luZ2xldG9uIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMuX2xpc3RlbmVycyA9ICdXZWFrTWFwJyBpbiBnbG9iYWxzID8gbmV3IFdlYWtNYXAoKSA6IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgb2JzZXJ2ZShlbGVtZW50LCBsaXN0ZW5lcikge1xuICAgICAgICB0aGlzLl9saXN0ZW5lcnMuc2V0KGVsZW1lbnQsIGxpc3RlbmVyKTtcbiAgICAgICAgdGhpcy5fZ2V0T2JzZXJ2ZXIoKS5vYnNlcnZlKGVsZW1lbnQsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9saXN0ZW5lcnMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5fb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpOyAvLyB0aGlzIGxpbmUgY2FuIHByb2JhYmx5IGJlIHJlbW92ZWRcbiAgICAgICAgfTtcbiAgICB9XG4gICAgX2dldE9ic2VydmVyKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHJldHVybiAoX2EgPSB0aGlzLl9vYnNlcnZlcikgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogKHRoaXMuX29ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICBSZXNpemVPYnNlcnZlclNpbmdsZXRvbi5lbnRyaWVzLnNldChlbnRyeS50YXJnZXQsIGVudHJ5KTtcbiAgICAgICAgICAgICAgICAoX2EgPSB0aGlzLl9saXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYShlbnRyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICB9XG59XG4vLyBOZWVkcyB0byBiZSB3cml0dGVuIGxpa2UgdGhpcyB0byBwYXNzIHRoZSB0cmVlLXNoYWtlLXRlc3RcblJlc2l6ZU9ic2VydmVyU2luZ2xldG9uLmVudHJpZXMgPSAnV2Vha01hcCcgaW4gZ2xvYmFscyA/IG5ldyBXZWFrTWFwKCkgOiB1bmRlZmluZWQ7XG5cbi8vIFRyYWNrIHdoaWNoIG5vZGVzIGFyZSBjbGFpbWVkIGR1cmluZyBoeWRyYXRpb24uIFVuY2xhaW1lZCBub2RlcyBjYW4gdGhlbiBiZSByZW1vdmVkIGZyb20gdGhlIERPTVxuLy8gYXQgdGhlIGVuZCBvZiBoeWRyYXRpb24gd2l0aG91dCB0b3VjaGluZyB0aGUgcmVtYWluaW5nIG5vZGVzLlxubGV0IGlzX2h5ZHJhdGluZyA9IGZhbHNlO1xuZnVuY3Rpb24gc3RhcnRfaHlkcmF0aW5nKCkge1xuICAgIGlzX2h5ZHJhdGluZyA9IHRydWU7XG59XG5mdW5jdGlvbiBlbmRfaHlkcmF0aW5nKCkge1xuICAgIGlzX2h5ZHJhdGluZyA9IGZhbHNlO1xufVxuZnVuY3Rpb24gdXBwZXJfYm91bmQobG93LCBoaWdoLCBrZXksIHZhbHVlKSB7XG4gICAgLy8gUmV0dXJuIGZpcnN0IGluZGV4IG9mIHZhbHVlIGxhcmdlciB0aGFuIGlucHV0IHZhbHVlIGluIHRoZSByYW5nZSBbbG93LCBoaWdoKVxuICAgIHdoaWxlIChsb3cgPCBoaWdoKSB7XG4gICAgICAgIGNvbnN0IG1pZCA9IGxvdyArICgoaGlnaCAtIGxvdykgPj4gMSk7XG4gICAgICAgIGlmIChrZXkobWlkKSA8PSB2YWx1ZSkge1xuICAgICAgICAgICAgbG93ID0gbWlkICsgMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGhpZ2ggPSBtaWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGxvdztcbn1cbmZ1bmN0aW9uIGluaXRfaHlkcmF0ZSh0YXJnZXQpIHtcbiAgICBpZiAodGFyZ2V0Lmh5ZHJhdGVfaW5pdClcbiAgICAgICAgcmV0dXJuO1xuICAgIHRhcmdldC5oeWRyYXRlX2luaXQgPSB0cnVlO1xuICAgIC8vIFdlIGtub3cgdGhhdCBhbGwgY2hpbGRyZW4gaGF2ZSBjbGFpbV9vcmRlciB2YWx1ZXMgc2luY2UgdGhlIHVuY2xhaW1lZCBoYXZlIGJlZW4gZGV0YWNoZWQgaWYgdGFyZ2V0IGlzIG5vdCA8aGVhZD5cbiAgICBsZXQgY2hpbGRyZW4gPSB0YXJnZXQuY2hpbGROb2RlcztcbiAgICAvLyBJZiB0YXJnZXQgaXMgPGhlYWQ+LCB0aGVyZSBtYXkgYmUgY2hpbGRyZW4gd2l0aG91dCBjbGFpbV9vcmRlclxuICAgIGlmICh0YXJnZXQubm9kZU5hbWUgPT09ICdIRUFEJykge1xuICAgICAgICBjb25zdCBteUNoaWxkcmVuID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGlmIChub2RlLmNsYWltX29yZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBteUNoaWxkcmVuLnB1c2gobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2hpbGRyZW4gPSBteUNoaWxkcmVuO1xuICAgIH1cbiAgICAvKlxuICAgICogUmVvcmRlciBjbGFpbWVkIGNoaWxkcmVuIG9wdGltYWxseS5cbiAgICAqIFdlIGNhbiByZW9yZGVyIGNsYWltZWQgY2hpbGRyZW4gb3B0aW1hbGx5IGJ5IGZpbmRpbmcgdGhlIGxvbmdlc3Qgc3Vic2VxdWVuY2Ugb2ZcbiAgICAqIG5vZGVzIHRoYXQgYXJlIGFscmVhZHkgY2xhaW1lZCBpbiBvcmRlciBhbmQgb25seSBtb3ZpbmcgdGhlIHJlc3QuIFRoZSBsb25nZXN0XG4gICAgKiBzdWJzZXF1ZW5jZSBvZiBub2RlcyB0aGF0IGFyZSBjbGFpbWVkIGluIG9yZGVyIGNhbiBiZSBmb3VuZCBieVxuICAgICogY29tcHV0aW5nIHRoZSBsb25nZXN0IGluY3JlYXNpbmcgc3Vic2VxdWVuY2Ugb2YgLmNsYWltX29yZGVyIHZhbHVlcy5cbiAgICAqXG4gICAgKiBUaGlzIGFsZ29yaXRobSBpcyBvcHRpbWFsIGluIGdlbmVyYXRpbmcgdGhlIGxlYXN0IGFtb3VudCBvZiByZW9yZGVyIG9wZXJhdGlvbnNcbiAgICAqIHBvc3NpYmxlLlxuICAgICpcbiAgICAqIFByb29mOlxuICAgICogV2Uga25vdyB0aGF0LCBnaXZlbiBhIHNldCBvZiByZW9yZGVyaW5nIG9wZXJhdGlvbnMsIHRoZSBub2RlcyB0aGF0IGRvIG5vdCBtb3ZlXG4gICAgKiBhbHdheXMgZm9ybSBhbiBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlLCBzaW5jZSB0aGV5IGRvIG5vdCBtb3ZlIGFtb25nIGVhY2ggb3RoZXJcbiAgICAqIG1lYW5pbmcgdGhhdCB0aGV5IG11c3QgYmUgYWxyZWFkeSBvcmRlcmVkIGFtb25nIGVhY2ggb3RoZXIuIFRodXMsIHRoZSBtYXhpbWFsXG4gICAgKiBzZXQgb2Ygbm9kZXMgdGhhdCBkbyBub3QgbW92ZSBmb3JtIGEgbG9uZ2VzdCBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlLlxuICAgICovXG4gICAgLy8gQ29tcHV0ZSBsb25nZXN0IGluY3JlYXNpbmcgc3Vic2VxdWVuY2VcbiAgICAvLyBtOiBzdWJzZXF1ZW5jZSBsZW5ndGggaiA9PiBpbmRleCBrIG9mIHNtYWxsZXN0IHZhbHVlIHRoYXQgZW5kcyBhbiBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlIG9mIGxlbmd0aCBqXG4gICAgY29uc3QgbSA9IG5ldyBJbnQzMkFycmF5KGNoaWxkcmVuLmxlbmd0aCArIDEpO1xuICAgIC8vIFByZWRlY2Vzc29yIGluZGljZXMgKyAxXG4gICAgY29uc3QgcCA9IG5ldyBJbnQzMkFycmF5KGNoaWxkcmVuLmxlbmd0aCk7XG4gICAgbVswXSA9IC0xO1xuICAgIGxldCBsb25nZXN0ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBjaGlsZHJlbltpXS5jbGFpbV9vcmRlcjtcbiAgICAgICAgLy8gRmluZCB0aGUgbGFyZ2VzdCBzdWJzZXF1ZW5jZSBsZW5ndGggc3VjaCB0aGF0IGl0IGVuZHMgaW4gYSB2YWx1ZSBsZXNzIHRoYW4gb3VyIGN1cnJlbnQgdmFsdWVcbiAgICAgICAgLy8gdXBwZXJfYm91bmQgcmV0dXJucyBmaXJzdCBncmVhdGVyIHZhbHVlLCBzbyB3ZSBzdWJ0cmFjdCBvbmVcbiAgICAgICAgLy8gd2l0aCBmYXN0IHBhdGggZm9yIHdoZW4gd2UgYXJlIG9uIHRoZSBjdXJyZW50IGxvbmdlc3Qgc3Vic2VxdWVuY2VcbiAgICAgICAgY29uc3Qgc2VxTGVuID0gKChsb25nZXN0ID4gMCAmJiBjaGlsZHJlblttW2xvbmdlc3RdXS5jbGFpbV9vcmRlciA8PSBjdXJyZW50KSA/IGxvbmdlc3QgKyAxIDogdXBwZXJfYm91bmQoMSwgbG9uZ2VzdCwgaWR4ID0+IGNoaWxkcmVuW21baWR4XV0uY2xhaW1fb3JkZXIsIGN1cnJlbnQpKSAtIDE7XG4gICAgICAgIHBbaV0gPSBtW3NlcUxlbl0gKyAxO1xuICAgICAgICBjb25zdCBuZXdMZW4gPSBzZXFMZW4gKyAxO1xuICAgICAgICAvLyBXZSBjYW4gZ3VhcmFudGVlIHRoYXQgY3VycmVudCBpcyB0aGUgc21hbGxlc3QgdmFsdWUuIE90aGVyd2lzZSwgd2Ugd291bGQgaGF2ZSBnZW5lcmF0ZWQgYSBsb25nZXIgc2VxdWVuY2UuXG4gICAgICAgIG1bbmV3TGVuXSA9IGk7XG4gICAgICAgIGxvbmdlc3QgPSBNYXRoLm1heChuZXdMZW4sIGxvbmdlc3QpO1xuICAgIH1cbiAgICAvLyBUaGUgbG9uZ2VzdCBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlIG9mIG5vZGVzIChpbml0aWFsbHkgcmV2ZXJzZWQpXG4gICAgY29uc3QgbGlzID0gW107XG4gICAgLy8gVGhlIHJlc3Qgb2YgdGhlIG5vZGVzLCBub2RlcyB0aGF0IHdpbGwgYmUgbW92ZWRcbiAgICBjb25zdCB0b01vdmUgPSBbXTtcbiAgICBsZXQgbGFzdCA9IGNoaWxkcmVuLmxlbmd0aCAtIDE7XG4gICAgZm9yIChsZXQgY3VyID0gbVtsb25nZXN0XSArIDE7IGN1ciAhPSAwOyBjdXIgPSBwW2N1ciAtIDFdKSB7XG4gICAgICAgIGxpcy5wdXNoKGNoaWxkcmVuW2N1ciAtIDFdKTtcbiAgICAgICAgZm9yICg7IGxhc3QgPj0gY3VyOyBsYXN0LS0pIHtcbiAgICAgICAgICAgIHRvTW92ZS5wdXNoKGNoaWxkcmVuW2xhc3RdKTtcbiAgICAgICAgfVxuICAgICAgICBsYXN0LS07XG4gICAgfVxuICAgIGZvciAoOyBsYXN0ID49IDA7IGxhc3QtLSkge1xuICAgICAgICB0b01vdmUucHVzaChjaGlsZHJlbltsYXN0XSk7XG4gICAgfVxuICAgIGxpcy5yZXZlcnNlKCk7XG4gICAgLy8gV2Ugc29ydCB0aGUgbm9kZXMgYmVpbmcgbW92ZWQgdG8gZ3VhcmFudGVlIHRoYXQgdGhlaXIgaW5zZXJ0aW9uIG9yZGVyIG1hdGNoZXMgdGhlIGNsYWltIG9yZGVyXG4gICAgdG9Nb3ZlLnNvcnQoKGEsIGIpID0+IGEuY2xhaW1fb3JkZXIgLSBiLmNsYWltX29yZGVyKTtcbiAgICAvLyBGaW5hbGx5LCB3ZSBtb3ZlIHRoZSBub2Rlc1xuICAgIGZvciAobGV0IGkgPSAwLCBqID0gMDsgaSA8IHRvTW92ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB3aGlsZSAoaiA8IGxpcy5sZW5ndGggJiYgdG9Nb3ZlW2ldLmNsYWltX29yZGVyID49IGxpc1tqXS5jbGFpbV9vcmRlcikge1xuICAgICAgICAgICAgaisrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFuY2hvciA9IGogPCBsaXMubGVuZ3RoID8gbGlzW2pdIDogbnVsbDtcbiAgICAgICAgdGFyZ2V0Lmluc2VydEJlZm9yZSh0b01vdmVbaV0sIGFuY2hvcik7XG4gICAgfVxufVxuZnVuY3Rpb24gYXBwZW5kKHRhcmdldCwgbm9kZSkge1xuICAgIHRhcmdldC5hcHBlbmRDaGlsZChub2RlKTtcbn1cbmZ1bmN0aW9uIGFwcGVuZF9zdHlsZXModGFyZ2V0LCBzdHlsZV9zaGVldF9pZCwgc3R5bGVzKSB7XG4gICAgY29uc3QgYXBwZW5kX3N0eWxlc190byA9IGdldF9yb290X2Zvcl9zdHlsZSh0YXJnZXQpO1xuICAgIGlmICghYXBwZW5kX3N0eWxlc190by5nZXRFbGVtZW50QnlJZChzdHlsZV9zaGVldF9pZCkpIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBlbGVtZW50KCdzdHlsZScpO1xuICAgICAgICBzdHlsZS5pZCA9IHN0eWxlX3NoZWV0X2lkO1xuICAgICAgICBzdHlsZS50ZXh0Q29udGVudCA9IHN0eWxlcztcbiAgICAgICAgYXBwZW5kX3N0eWxlc2hlZXQoYXBwZW5kX3N0eWxlc190bywgc3R5bGUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldF9yb290X2Zvcl9zdHlsZShub2RlKSB7XG4gICAgaWYgKCFub2RlKVxuICAgICAgICByZXR1cm4gZG9jdW1lbnQ7XG4gICAgY29uc3Qgcm9vdCA9IG5vZGUuZ2V0Um9vdE5vZGUgPyBub2RlLmdldFJvb3ROb2RlKCkgOiBub2RlLm93bmVyRG9jdW1lbnQ7XG4gICAgaWYgKHJvb3QgJiYgcm9vdC5ob3N0KSB7XG4gICAgICAgIHJldHVybiByb290O1xuICAgIH1cbiAgICByZXR1cm4gbm9kZS5vd25lckRvY3VtZW50O1xufVxuZnVuY3Rpb24gYXBwZW5kX2VtcHR5X3N0eWxlc2hlZXQobm9kZSkge1xuICAgIGNvbnN0IHN0eWxlX2VsZW1lbnQgPSBlbGVtZW50KCdzdHlsZScpO1xuICAgIGFwcGVuZF9zdHlsZXNoZWV0KGdldF9yb290X2Zvcl9zdHlsZShub2RlKSwgc3R5bGVfZWxlbWVudCk7XG4gICAgcmV0dXJuIHN0eWxlX2VsZW1lbnQuc2hlZXQ7XG59XG5mdW5jdGlvbiBhcHBlbmRfc3R5bGVzaGVldChub2RlLCBzdHlsZSkge1xuICAgIGFwcGVuZChub2RlLmhlYWQgfHwgbm9kZSwgc3R5bGUpO1xuICAgIHJldHVybiBzdHlsZS5zaGVldDtcbn1cbmZ1bmN0aW9uIGFwcGVuZF9oeWRyYXRpb24odGFyZ2V0LCBub2RlKSB7XG4gICAgaWYgKGlzX2h5ZHJhdGluZykge1xuICAgICAgICBpbml0X2h5ZHJhdGUodGFyZ2V0KTtcbiAgICAgICAgaWYgKCh0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCA9PT0gdW5kZWZpbmVkKSB8fCAoKHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkICE9PSBudWxsKSAmJiAodGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQucGFyZW50Tm9kZSAhPT0gdGFyZ2V0KSkpIHtcbiAgICAgICAgICAgIHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkID0gdGFyZ2V0LmZpcnN0Q2hpbGQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2tpcCBub2RlcyBvZiB1bmRlZmluZWQgb3JkZXJpbmdcbiAgICAgICAgd2hpbGUgKCh0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCAhPT0gbnVsbCkgJiYgKHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkLmNsYWltX29yZGVyID09PSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCA9IHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlICE9PSB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCkge1xuICAgICAgICAgICAgLy8gV2Ugb25seSBpbnNlcnQgaWYgdGhlIG9yZGVyaW5nIG9mIHRoaXMgbm9kZSBzaG91bGQgYmUgbW9kaWZpZWQgb3IgdGhlIHBhcmVudCBub2RlIGlzIG5vdCB0YXJnZXRcbiAgICAgICAgICAgIGlmIChub2RlLmNsYWltX29yZGVyICE9PSB1bmRlZmluZWQgfHwgbm9kZS5wYXJlbnROb2RlICE9PSB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQuaW5zZXJ0QmVmb3JlKG5vZGUsIHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkID0gbm9kZS5uZXh0U2libGluZztcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChub2RlLnBhcmVudE5vZGUgIT09IHRhcmdldCB8fCBub2RlLm5leHRTaWJsaW5nICE9PSBudWxsKSB7XG4gICAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB9XG59XG5mdW5jdGlvbiBpbnNlcnQodGFyZ2V0LCBub2RlLCBhbmNob3IpIHtcbiAgICB0YXJnZXQuaW5zZXJ0QmVmb3JlKG5vZGUsIGFuY2hvciB8fCBudWxsKTtcbn1cbmZ1bmN0aW9uIGluc2VydF9oeWRyYXRpb24odGFyZ2V0LCBub2RlLCBhbmNob3IpIHtcbiAgICBpZiAoaXNfaHlkcmF0aW5nICYmICFhbmNob3IpIHtcbiAgICAgICAgYXBwZW5kX2h5ZHJhdGlvbih0YXJnZXQsIG5vZGUpO1xuICAgIH1cbiAgICBlbHNlIGlmIChub2RlLnBhcmVudE5vZGUgIT09IHRhcmdldCB8fCBub2RlLm5leHRTaWJsaW5nICE9IGFuY2hvcikge1xuICAgICAgICB0YXJnZXQuaW5zZXJ0QmVmb3JlKG5vZGUsIGFuY2hvciB8fCBudWxsKTtcbiAgICB9XG59XG5mdW5jdGlvbiBkZXRhY2gobm9kZSkge1xuICAgIGlmIChub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRlc3Ryb3lfZWFjaChpdGVyYXRpb25zLCBkZXRhY2hpbmcpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZXJhdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGl0ZXJhdGlvbnNbaV0pXG4gICAgICAgICAgICBpdGVyYXRpb25zW2ldLmQoZGV0YWNoaW5nKTtcbiAgICB9XG59XG5mdW5jdGlvbiBlbGVtZW50KG5hbWUpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lKTtcbn1cbmZ1bmN0aW9uIGVsZW1lbnRfaXMobmFtZSwgaXMpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lLCB7IGlzIH0pO1xufVxuZnVuY3Rpb24gb2JqZWN0X3dpdGhvdXRfcHJvcGVydGllcyhvYmosIGV4Y2x1ZGUpIHtcbiAgICBjb25zdCB0YXJnZXQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGsgaW4gb2JqKSB7XG4gICAgICAgIGlmIChoYXNfcHJvcChvYmosIGspXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAmJiBleGNsdWRlLmluZGV4T2YoaykgPT09IC0xKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICB0YXJnZXRba10gPSBvYmpba107XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIHN2Z19lbGVtZW50KG5hbWUpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsIG5hbWUpO1xufVxuZnVuY3Rpb24gdGV4dChkYXRhKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGRhdGEpO1xufVxuZnVuY3Rpb24gc3BhY2UoKSB7XG4gICAgcmV0dXJuIHRleHQoJyAnKTtcbn1cbmZ1bmN0aW9uIGVtcHR5KCkge1xuICAgIHJldHVybiB0ZXh0KCcnKTtcbn1cbmZ1bmN0aW9uIGNvbW1lbnQoY29udGVudCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVDb21tZW50KGNvbnRlbnQpO1xufVxuZnVuY3Rpb24gbGlzdGVuKG5vZGUsIGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICByZXR1cm4gKCkgPT4gbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHByZXZlbnRfZGVmYXVsdChmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCBldmVudCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHN0b3BfcHJvcGFnYXRpb24oZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gc3RvcF9pbW1lZGlhdGVfcHJvcGFnYXRpb24oZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gc2VsZihmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSB0aGlzKVxuICAgICAgICAgICAgZm4uY2FsbCh0aGlzLCBldmVudCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHRydXN0ZWQoZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKGV2ZW50LmlzVHJ1c3RlZClcbiAgICAgICAgICAgIGZuLmNhbGwodGhpcywgZXZlbnQpO1xuICAgIH07XG59XG5mdW5jdGlvbiBhdHRyKG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbClcbiAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICBlbHNlIGlmIChub2RlLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpICE9PSB2YWx1ZSlcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG59XG4vKipcbiAqIExpc3Qgb2YgYXR0cmlidXRlcyB0aGF0IHNob3VsZCBhbHdheXMgYmUgc2V0IHRocm91Z2ggdGhlIGF0dHIgbWV0aG9kLFxuICogYmVjYXVzZSB1cGRhdGluZyB0aGVtIHRocm91Z2ggdGhlIHByb3BlcnR5IHNldHRlciBkb2Vzbid0IHdvcmsgcmVsaWFibHkuXG4gKiBJbiB0aGUgZXhhbXBsZSBvZiBgd2lkdGhgL2BoZWlnaHRgLCB0aGUgcHJvYmxlbSBpcyB0aGF0IHRoZSBzZXR0ZXIgb25seVxuICogYWNjZXB0cyBudW1lcmljIHZhbHVlcywgYnV0IHRoZSBhdHRyaWJ1dGUgY2FuIGFsc28gYmUgc2V0IHRvIGEgc3RyaW5nIGxpa2UgYDUwJWAuXG4gKiBJZiB0aGlzIGxpc3QgYmVjb21lcyB0b28gYmlnLCByZXRoaW5rIHRoaXMgYXBwcm9hY2guXG4gKi9cbmNvbnN0IGFsd2F5c19zZXRfdGhyb3VnaF9zZXRfYXR0cmlidXRlID0gWyd3aWR0aCcsICdoZWlnaHQnXTtcbmZ1bmN0aW9uIHNldF9hdHRyaWJ1dGVzKG5vZGUsIGF0dHJpYnV0ZXMpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgZGVzY3JpcHRvcnMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhub2RlLl9fcHJvdG9fXyk7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgICAgICBpZiAoYXR0cmlidXRlc1trZXldID09IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoa2V5ID09PSAnc3R5bGUnKSB7XG4gICAgICAgICAgICBub2RlLnN0eWxlLmNzc1RleHQgPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoa2V5ID09PSAnX192YWx1ZScpIHtcbiAgICAgICAgICAgIG5vZGUudmFsdWUgPSBub2RlW2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGVzY3JpcHRvcnNba2V5XSAmJiBkZXNjcmlwdG9yc1trZXldLnNldCAmJiBhbHdheXNfc2V0X3Rocm91Z2hfc2V0X2F0dHJpYnV0ZS5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICBub2RlW2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhdHRyKG5vZGUsIGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIHNldF9zdmdfYXR0cmlidXRlcyhub2RlLCBhdHRyaWJ1dGVzKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgICAgICBhdHRyKG5vZGUsIGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzZXRfY3VzdG9tX2VsZW1lbnRfZGF0YV9tYXAobm9kZSwgZGF0YV9tYXApIHtcbiAgICBPYmplY3Qua2V5cyhkYXRhX21hcCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHNldF9jdXN0b21fZWxlbWVudF9kYXRhKG5vZGUsIGtleSwgZGF0YV9tYXBba2V5XSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBzZXRfY3VzdG9tX2VsZW1lbnRfZGF0YShub2RlLCBwcm9wLCB2YWx1ZSkge1xuICAgIGlmIChwcm9wIGluIG5vZGUpIHtcbiAgICAgICAgbm9kZVtwcm9wXSA9IHR5cGVvZiBub2RlW3Byb3BdID09PSAnYm9vbGVhbicgJiYgdmFsdWUgPT09ICcnID8gdHJ1ZSA6IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgYXR0cihub2RlLCBwcm9wLCB2YWx1ZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gc2V0X2R5bmFtaWNfZWxlbWVudF9kYXRhKHRhZykge1xuICAgIHJldHVybiAoLy0vLnRlc3QodGFnKSkgPyBzZXRfY3VzdG9tX2VsZW1lbnRfZGF0YV9tYXAgOiBzZXRfYXR0cmlidXRlcztcbn1cbmZ1bmN0aW9uIHhsaW5rX2F0dHIobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgIG5vZGUuc2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCBhdHRyaWJ1dGUsIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGdldF9iaW5kaW5nX2dyb3VwX3ZhbHVlKGdyb3VwLCBfX3ZhbHVlLCBjaGVja2VkKSB7XG4gICAgY29uc3QgdmFsdWUgPSBuZXcgU2V0KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncm91cC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoZ3JvdXBbaV0uY2hlY2tlZClcbiAgICAgICAgICAgIHZhbHVlLmFkZChncm91cFtpXS5fX3ZhbHVlKTtcbiAgICB9XG4gICAgaWYgKCFjaGVja2VkKSB7XG4gICAgICAgIHZhbHVlLmRlbGV0ZShfX3ZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LmZyb20odmFsdWUpO1xufVxuZnVuY3Rpb24gaW5pdF9iaW5kaW5nX2dyb3VwKGdyb3VwKSB7XG4gICAgbGV0IF9pbnB1dHM7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyogcHVzaCAqLyBwKC4uLmlucHV0cykge1xuICAgICAgICAgICAgX2lucHV0cyA9IGlucHV0cztcbiAgICAgICAgICAgIF9pbnB1dHMuZm9yRWFjaChpbnB1dCA9PiBncm91cC5wdXNoKGlucHV0KSk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qIHJlbW92ZSAqLyByKCkge1xuICAgICAgICAgICAgX2lucHV0cy5mb3JFYWNoKGlucHV0ID0+IGdyb3VwLnNwbGljZShncm91cC5pbmRleE9mKGlucHV0KSwgMSkpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGluaXRfYmluZGluZ19ncm91cF9keW5hbWljKGdyb3VwLCBpbmRleGVzKSB7XG4gICAgbGV0IF9ncm91cCA9IGdldF9iaW5kaW5nX2dyb3VwKGdyb3VwKTtcbiAgICBsZXQgX2lucHV0cztcbiAgICBmdW5jdGlvbiBnZXRfYmluZGluZ19ncm91cChncm91cCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGV4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGdyb3VwID0gZ3JvdXBbaW5kZXhlc1tpXV0gPSBncm91cFtpbmRleGVzW2ldXSB8fCBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ3JvdXA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHB1c2goKSB7XG4gICAgICAgIF9pbnB1dHMuZm9yRWFjaChpbnB1dCA9PiBfZ3JvdXAucHVzaChpbnB1dCkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICAgIF9pbnB1dHMuZm9yRWFjaChpbnB1dCA9PiBfZ3JvdXAuc3BsaWNlKF9ncm91cC5pbmRleE9mKGlucHV0KSwgMSkpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICAvKiB1cGRhdGUgKi8gdShuZXdfaW5kZXhlcykge1xuICAgICAgICAgICAgaW5kZXhlcyA9IG5ld19pbmRleGVzO1xuICAgICAgICAgICAgY29uc3QgbmV3X2dyb3VwID0gZ2V0X2JpbmRpbmdfZ3JvdXAoZ3JvdXApO1xuICAgICAgICAgICAgaWYgKG5ld19ncm91cCAhPT0gX2dyb3VwKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgX2dyb3VwID0gbmV3X2dyb3VwO1xuICAgICAgICAgICAgICAgIHB1c2goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLyogcHVzaCAqLyBwKC4uLmlucHV0cykge1xuICAgICAgICAgICAgX2lucHV0cyA9IGlucHV0cztcbiAgICAgICAgICAgIHB1c2goKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyogcmVtb3ZlICovIHI6IHJlbW92ZVxuICAgIH07XG59XG5mdW5jdGlvbiB0b19udW1iZXIodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09ICcnID8gbnVsbCA6ICt2YWx1ZTtcbn1cbmZ1bmN0aW9uIHRpbWVfcmFuZ2VzX3RvX2FycmF5KHJhbmdlcykge1xuICAgIGNvbnN0IGFycmF5ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByYW5nZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgYXJyYXkucHVzaCh7IHN0YXJ0OiByYW5nZXMuc3RhcnQoaSksIGVuZDogcmFuZ2VzLmVuZChpKSB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5O1xufVxuZnVuY3Rpb24gY2hpbGRyZW4oZWxlbWVudCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGROb2Rlcyk7XG59XG5mdW5jdGlvbiBpbml0X2NsYWltX2luZm8obm9kZXMpIHtcbiAgICBpZiAobm9kZXMuY2xhaW1faW5mbyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG5vZGVzLmNsYWltX2luZm8gPSB7IGxhc3RfaW5kZXg6IDAsIHRvdGFsX2NsYWltZWQ6IDAgfTtcbiAgICB9XG59XG5mdW5jdGlvbiBjbGFpbV9ub2RlKG5vZGVzLCBwcmVkaWNhdGUsIHByb2Nlc3NOb2RlLCBjcmVhdGVOb2RlLCBkb250VXBkYXRlTGFzdEluZGV4ID0gZmFsc2UpIHtcbiAgICAvLyBUcnkgdG8gZmluZCBub2RlcyBpbiBhbiBvcmRlciBzdWNoIHRoYXQgd2UgbGVuZ3RoZW4gdGhlIGxvbmdlc3QgaW5jcmVhc2luZyBzdWJzZXF1ZW5jZVxuICAgIGluaXRfY2xhaW1faW5mbyhub2Rlcyk7XG4gICAgY29uc3QgcmVzdWx0Tm9kZSA9ICgoKSA9PiB7XG4gICAgICAgIC8vIFdlIGZpcnN0IHRyeSB0byBmaW5kIGFuIGVsZW1lbnQgYWZ0ZXIgdGhlIHByZXZpb3VzIG9uZVxuICAgICAgICBmb3IgKGxldCBpID0gbm9kZXMuY2xhaW1faW5mby5sYXN0X2luZGV4OyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgICAgIGlmIChwcmVkaWNhdGUobm9kZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXBsYWNlbWVudCA9IHByb2Nlc3NOb2RlKG5vZGUpO1xuICAgICAgICAgICAgICAgIGlmIChyZXBsYWNlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzW2ldID0gcmVwbGFjZW1lbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghZG9udFVwZGF0ZUxhc3RJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBub2Rlcy5jbGFpbV9pbmZvLmxhc3RfaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBPdGhlcndpc2UsIHdlIHRyeSB0byBmaW5kIG9uZSBiZWZvcmVcbiAgICAgICAgLy8gV2UgaXRlcmF0ZSBpbiByZXZlcnNlIHNvIHRoYXQgd2UgZG9uJ3QgZ28gdG9vIGZhciBiYWNrXG4gICAgICAgIGZvciAobGV0IGkgPSBub2Rlcy5jbGFpbV9pbmZvLmxhc3RfaW5kZXggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgICAgICAgaWYgKHByZWRpY2F0ZShub2RlKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcGxhY2VtZW50ID0gcHJvY2Vzc05vZGUobm9kZSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlcGxhY2VtZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXNbaV0gPSByZXBsYWNlbWVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFkb250VXBkYXRlTGFzdEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzLmNsYWltX2luZm8ubGFzdF9pbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlcGxhY2VtZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2luY2Ugd2Ugc3BsaWNlZCBiZWZvcmUgdGhlIGxhc3RfaW5kZXgsIHdlIGRlY3JlYXNlIGl0XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzLmNsYWltX2luZm8ubGFzdF9pbmRleC0tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB3ZSBjYW4ndCBmaW5kIGFueSBtYXRjaGluZyBub2RlLCB3ZSBjcmVhdGUgYSBuZXcgb25lXG4gICAgICAgIHJldHVybiBjcmVhdGVOb2RlKCk7XG4gICAgfSkoKTtcbiAgICByZXN1bHROb2RlLmNsYWltX29yZGVyID0gbm9kZXMuY2xhaW1faW5mby50b3RhbF9jbGFpbWVkO1xuICAgIG5vZGVzLmNsYWltX2luZm8udG90YWxfY2xhaW1lZCArPSAxO1xuICAgIHJldHVybiByZXN1bHROb2RlO1xufVxuZnVuY3Rpb24gY2xhaW1fZWxlbWVudF9iYXNlKG5vZGVzLCBuYW1lLCBhdHRyaWJ1dGVzLCBjcmVhdGVfZWxlbWVudCkge1xuICAgIHJldHVybiBjbGFpbV9ub2RlKG5vZGVzLCAobm9kZSkgPT4gbm9kZS5ub2RlTmFtZSA9PT0gbmFtZSwgKG5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgcmVtb3ZlID0gW107XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbm9kZS5hdHRyaWJ1dGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSBub2RlLmF0dHJpYnV0ZXNbal07XG4gICAgICAgICAgICBpZiAoIWF0dHJpYnV0ZXNbYXR0cmlidXRlLm5hbWVdKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlLnB1c2goYXR0cmlidXRlLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlbW92ZS5mb3JFYWNoKHYgPT4gbm9kZS5yZW1vdmVBdHRyaWJ1dGUodikpO1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0sICgpID0+IGNyZWF0ZV9lbGVtZW50KG5hbWUpKTtcbn1cbmZ1bmN0aW9uIGNsYWltX2VsZW1lbnQobm9kZXMsIG5hbWUsIGF0dHJpYnV0ZXMpIHtcbiAgICByZXR1cm4gY2xhaW1fZWxlbWVudF9iYXNlKG5vZGVzLCBuYW1lLCBhdHRyaWJ1dGVzLCBlbGVtZW50KTtcbn1cbmZ1bmN0aW9uIGNsYWltX3N2Z19lbGVtZW50KG5vZGVzLCBuYW1lLCBhdHRyaWJ1dGVzKSB7XG4gICAgcmV0dXJuIGNsYWltX2VsZW1lbnRfYmFzZShub2RlcywgbmFtZSwgYXR0cmlidXRlcywgc3ZnX2VsZW1lbnQpO1xufVxuZnVuY3Rpb24gY2xhaW1fdGV4dChub2RlcywgZGF0YSkge1xuICAgIHJldHVybiBjbGFpbV9ub2RlKG5vZGVzLCAobm9kZSkgPT4gbm9kZS5ub2RlVHlwZSA9PT0gMywgKG5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YVN0ciA9ICcnICsgZGF0YTtcbiAgICAgICAgaWYgKG5vZGUuZGF0YS5zdGFydHNXaXRoKGRhdGFTdHIpKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5kYXRhLmxlbmd0aCAhPT0gZGF0YVN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZS5zcGxpdFRleHQoZGF0YVN0ci5sZW5ndGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbm9kZS5kYXRhID0gZGF0YVN0cjtcbiAgICAgICAgfVxuICAgIH0sICgpID0+IHRleHQoZGF0YSksIHRydWUgLy8gVGV4dCBub2RlcyBzaG91bGQgbm90IHVwZGF0ZSBsYXN0IGluZGV4IHNpbmNlIGl0IGlzIGxpa2VseSBub3Qgd29ydGggaXQgdG8gZWxpbWluYXRlIGFuIGluY3JlYXNpbmcgc3Vic2VxdWVuY2Ugb2YgYWN0dWFsIGVsZW1lbnRzXG4gICAgKTtcbn1cbmZ1bmN0aW9uIGNsYWltX3NwYWNlKG5vZGVzKSB7XG4gICAgcmV0dXJuIGNsYWltX3RleHQobm9kZXMsICcgJyk7XG59XG5mdW5jdGlvbiBjbGFpbV9jb21tZW50KG5vZGVzLCBkYXRhKSB7XG4gICAgcmV0dXJuIGNsYWltX25vZGUobm9kZXMsIChub2RlKSA9PiBub2RlLm5vZGVUeXBlID09PSA4LCAobm9kZSkgPT4ge1xuICAgICAgICBub2RlLmRhdGEgPSAnJyArIGRhdGE7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSwgKCkgPT4gY29tbWVudChkYXRhKSwgdHJ1ZSk7XG59XG5mdW5jdGlvbiBmaW5kX2NvbW1lbnQobm9kZXMsIHRleHQsIHN0YXJ0KSB7XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgbm9kZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gOCAvKiBjb21tZW50IG5vZGUgKi8gJiYgbm9kZS50ZXh0Q29udGVudC50cmltKCkgPT09IHRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBub2Rlcy5sZW5ndGg7XG59XG5mdW5jdGlvbiBjbGFpbV9odG1sX3RhZyhub2RlcywgaXNfc3ZnKSB7XG4gICAgLy8gZmluZCBodG1sIG9wZW5pbmcgdGFnXG4gICAgY29uc3Qgc3RhcnRfaW5kZXggPSBmaW5kX2NvbW1lbnQobm9kZXMsICdIVE1MX1RBR19TVEFSVCcsIDApO1xuICAgIGNvbnN0IGVuZF9pbmRleCA9IGZpbmRfY29tbWVudChub2RlcywgJ0hUTUxfVEFHX0VORCcsIHN0YXJ0X2luZGV4KTtcbiAgICBpZiAoc3RhcnRfaW5kZXggPT09IGVuZF9pbmRleCkge1xuICAgICAgICByZXR1cm4gbmV3IEh0bWxUYWdIeWRyYXRpb24odW5kZWZpbmVkLCBpc19zdmcpO1xuICAgIH1cbiAgICBpbml0X2NsYWltX2luZm8obm9kZXMpO1xuICAgIGNvbnN0IGh0bWxfdGFnX25vZGVzID0gbm9kZXMuc3BsaWNlKHN0YXJ0X2luZGV4LCBlbmRfaW5kZXggLSBzdGFydF9pbmRleCArIDEpO1xuICAgIGRldGFjaChodG1sX3RhZ19ub2Rlc1swXSk7XG4gICAgZGV0YWNoKGh0bWxfdGFnX25vZGVzW2h0bWxfdGFnX25vZGVzLmxlbmd0aCAtIDFdKTtcbiAgICBjb25zdCBjbGFpbWVkX25vZGVzID0gaHRtbF90YWdfbm9kZXMuc2xpY2UoMSwgaHRtbF90YWdfbm9kZXMubGVuZ3RoIC0gMSk7XG4gICAgZm9yIChjb25zdCBuIG9mIGNsYWltZWRfbm9kZXMpIHtcbiAgICAgICAgbi5jbGFpbV9vcmRlciA9IG5vZGVzLmNsYWltX2luZm8udG90YWxfY2xhaW1lZDtcbiAgICAgICAgbm9kZXMuY2xhaW1faW5mby50b3RhbF9jbGFpbWVkICs9IDE7XG4gICAgfVxuICAgIHJldHVybiBuZXcgSHRtbFRhZ0h5ZHJhdGlvbihjbGFpbWVkX25vZGVzLCBpc19zdmcpO1xufVxuZnVuY3Rpb24gc2V0X2RhdGEodGV4dCwgZGF0YSkge1xuICAgIGRhdGEgPSAnJyArIGRhdGE7XG4gICAgaWYgKHRleHQuZGF0YSA9PT0gZGF0YSlcbiAgICAgICAgcmV0dXJuO1xuICAgIHRleHQuZGF0YSA9IGRhdGE7XG59XG5mdW5jdGlvbiBzZXRfZGF0YV9jb250ZW50ZWRpdGFibGUodGV4dCwgZGF0YSkge1xuICAgIGRhdGEgPSAnJyArIGRhdGE7XG4gICAgaWYgKHRleHQud2hvbGVUZXh0ID09PSBkYXRhKVxuICAgICAgICByZXR1cm47XG4gICAgdGV4dC5kYXRhID0gZGF0YTtcbn1cbmZ1bmN0aW9uIHNldF9kYXRhX21heWJlX2NvbnRlbnRlZGl0YWJsZSh0ZXh0LCBkYXRhLCBhdHRyX3ZhbHVlKSB7XG4gICAgaWYgKH5jb250ZW50ZWRpdGFibGVfdHJ1dGh5X3ZhbHVlcy5pbmRleE9mKGF0dHJfdmFsdWUpKSB7XG4gICAgICAgIHNldF9kYXRhX2NvbnRlbnRlZGl0YWJsZSh0ZXh0LCBkYXRhKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHNldF9kYXRhKHRleHQsIGRhdGEpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNldF9pbnB1dF92YWx1ZShpbnB1dCwgdmFsdWUpIHtcbiAgICBpbnB1dC52YWx1ZSA9IHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xufVxuZnVuY3Rpb24gc2V0X2lucHV0X3R5cGUoaW5wdXQsIHR5cGUpIHtcbiAgICB0cnkge1xuICAgICAgICBpbnB1dC50eXBlID0gdHlwZTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNldF9zdHlsZShub2RlLCBrZXksIHZhbHVlLCBpbXBvcnRhbnQpIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICBub2RlLnN0eWxlLnJlbW92ZVByb3BlcnR5KGtleSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBub2RlLnN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsdWUsIGltcG9ydGFudCA/ICdpbXBvcnRhbnQnIDogJycpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNlbGVjdF9vcHRpb24oc2VsZWN0LCB2YWx1ZSwgbW91bnRpbmcpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHNlbGVjdC5vcHRpb25zW2ldO1xuICAgICAgICBpZiAob3B0aW9uLl9fdmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghbW91bnRpbmcgfHwgdmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzZWxlY3Quc2VsZWN0ZWRJbmRleCA9IC0xOyAvLyBubyBvcHRpb24gc2hvdWxkIGJlIHNlbGVjdGVkXG4gICAgfVxufVxuZnVuY3Rpb24gc2VsZWN0X29wdGlvbnMoc2VsZWN0LCB2YWx1ZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0Lm9wdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gc2VsZWN0Lm9wdGlvbnNbaV07XG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IH52YWx1ZS5pbmRleE9mKG9wdGlvbi5fX3ZhbHVlKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzZWxlY3RfdmFsdWUoc2VsZWN0KSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRfb3B0aW9uID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJzpjaGVja2VkJyk7XG4gICAgcmV0dXJuIHNlbGVjdGVkX29wdGlvbiAmJiBzZWxlY3RlZF9vcHRpb24uX192YWx1ZTtcbn1cbmZ1bmN0aW9uIHNlbGVjdF9tdWx0aXBsZV92YWx1ZShzZWxlY3QpIHtcbiAgICByZXR1cm4gW10ubWFwLmNhbGwoc2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJzpjaGVja2VkJyksIG9wdGlvbiA9PiBvcHRpb24uX192YWx1ZSk7XG59XG4vLyB1bmZvcnR1bmF0ZWx5IHRoaXMgY2FuJ3QgYmUgYSBjb25zdGFudCBhcyB0aGF0IHdvdWxkbid0IGJlIHRyZWUtc2hha2VhYmxlXG4vLyBzbyB3ZSBjYWNoZSB0aGUgcmVzdWx0IGluc3RlYWRcbmxldCBjcm9zc29yaWdpbjtcbmZ1bmN0aW9uIGlzX2Nyb3Nzb3JpZ2luKCkge1xuICAgIGlmIChjcm9zc29yaWdpbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNyb3Nzb3JpZ2luID0gZmFsc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnBhcmVudCkge1xuICAgICAgICAgICAgICAgIHZvaWQgd2luZG93LnBhcmVudC5kb2N1bWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNyb3Nzb3JpZ2luID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY3Jvc3NvcmlnaW47XG59XG5mdW5jdGlvbiBhZGRfaWZyYW1lX3Jlc2l6ZV9saXN0ZW5lcihub2RlLCBmbikge1xuICAgIGNvbnN0IGNvbXB1dGVkX3N0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICBpZiAoY29tcHV0ZWRfc3R5bGUucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIG5vZGUuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgIH1cbiAgICBjb25zdCBpZnJhbWUgPSBlbGVtZW50KCdpZnJhbWUnKTtcbiAgICBpZnJhbWUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBibG9jazsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IGxlZnQ6IDA7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7ICcgK1xuICAgICAgICAnb3ZlcmZsb3c6IGhpZGRlbjsgYm9yZGVyOiAwOyBvcGFjaXR5OiAwOyBwb2ludGVyLWV2ZW50czogbm9uZTsgei1pbmRleDogLTE7Jyk7XG4gICAgaWZyYW1lLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgIGlmcmFtZS50YWJJbmRleCA9IC0xO1xuICAgIGNvbnN0IGNyb3Nzb3JpZ2luID0gaXNfY3Jvc3NvcmlnaW4oKTtcbiAgICBsZXQgdW5zdWJzY3JpYmU7XG4gICAgaWYgKGNyb3Nzb3JpZ2luKSB7XG4gICAgICAgIGlmcmFtZS5zcmMgPSBcImRhdGE6dGV4dC9odG1sLDxzY3JpcHQ+b25yZXNpemU9ZnVuY3Rpb24oKXtwYXJlbnQucG9zdE1lc3NhZ2UoMCwnKicpfTwvc2NyaXB0PlwiO1xuICAgICAgICB1bnN1YnNjcmliZSA9IGxpc3Rlbih3aW5kb3csICdtZXNzYWdlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSBpZnJhbWUuY29udGVudFdpbmRvdylcbiAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmcmFtZS5zcmMgPSAnYWJvdXQ6YmxhbmsnO1xuICAgICAgICBpZnJhbWUub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgdW5zdWJzY3JpYmUgPSBsaXN0ZW4oaWZyYW1lLmNvbnRlbnRXaW5kb3csICdyZXNpemUnLCBmbik7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgYW4gaW5pdGlhbCByZXNpemUgZXZlbnQgaXMgZmlyZWQgX2FmdGVyXyB0aGUgaWZyYW1lIGlzIGxvYWRlZCAod2hpY2ggaXMgYXN5bmNocm9ub3VzKVxuICAgICAgICAgICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zdmVsdGVqcy9zdmVsdGUvaXNzdWVzLzQyMzNcbiAgICAgICAgICAgIGZuKCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGFwcGVuZChub2RlLCBpZnJhbWUpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlmIChjcm9zc29yaWdpbikge1xuICAgICAgICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh1bnN1YnNjcmliZSAmJiBpZnJhbWUuY29udGVudFdpbmRvdykge1xuICAgICAgICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgICAgICBkZXRhY2goaWZyYW1lKTtcbiAgICB9O1xufVxuY29uc3QgcmVzaXplX29ic2VydmVyX2NvbnRlbnRfYm94ID0gLyogQF9fUFVSRV9fICovIG5ldyBSZXNpemVPYnNlcnZlclNpbmdsZXRvbih7IGJveDogJ2NvbnRlbnQtYm94JyB9KTtcbmNvbnN0IHJlc2l6ZV9vYnNlcnZlcl9ib3JkZXJfYm94ID0gLyogQF9fUFVSRV9fICovIG5ldyBSZXNpemVPYnNlcnZlclNpbmdsZXRvbih7IGJveDogJ2JvcmRlci1ib3gnIH0pO1xuY29uc3QgcmVzaXplX29ic2VydmVyX2RldmljZV9waXhlbF9jb250ZW50X2JveCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgUmVzaXplT2JzZXJ2ZXJTaW5nbGV0b24oeyBib3g6ICdkZXZpY2UtcGl4ZWwtY29udGVudC1ib3gnIH0pO1xuZnVuY3Rpb24gdG9nZ2xlX2NsYXNzKGVsZW1lbnQsIG5hbWUsIHRvZ2dsZSkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0W3RvZ2dsZSA/ICdhZGQnIDogJ3JlbW92ZSddKG5hbWUpO1xufVxuZnVuY3Rpb24gY3VzdG9tX2V2ZW50KHR5cGUsIGRldGFpbCwgeyBidWJibGVzID0gZmFsc2UsIGNhbmNlbGFibGUgPSBmYWxzZSB9ID0ge30pIHtcbiAgICBjb25zdCBlID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgZS5pbml0Q3VzdG9tRXZlbnQodHlwZSwgYnViYmxlcywgY2FuY2VsYWJsZSwgZGV0YWlsKTtcbiAgICByZXR1cm4gZTtcbn1cbmZ1bmN0aW9uIHF1ZXJ5X3NlbGVjdG9yX2FsbChzZWxlY3RvciwgcGFyZW50ID0gZG9jdW1lbnQuYm9keSkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG59XG5mdW5jdGlvbiBoZWFkX3NlbGVjdG9yKG5vZGVJZCwgaGVhZCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGxldCBzdGFydGVkID0gMDtcbiAgICBmb3IgKGNvbnN0IG5vZGUgb2YgaGVhZC5jaGlsZE5vZGVzKSB7XG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSA4IC8qIGNvbW1lbnQgbm9kZSAqLykge1xuICAgICAgICAgICAgY29uc3QgY29tbWVudCA9IG5vZGUudGV4dENvbnRlbnQudHJpbSgpO1xuICAgICAgICAgICAgaWYgKGNvbW1lbnQgPT09IGBIRUFEXyR7bm9kZUlkfV9FTkRgKSB7XG4gICAgICAgICAgICAgICAgc3RhcnRlZCAtPSAxO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY29tbWVudCA9PT0gYEhFQURfJHtub2RlSWR9X1NUQVJUYCkge1xuICAgICAgICAgICAgICAgIHN0YXJ0ZWQgKz0gMTtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdGFydGVkID4gMCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gobm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmNsYXNzIEh0bWxUYWcge1xuICAgIGNvbnN0cnVjdG9yKGlzX3N2ZyA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuaXNfc3ZnID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNfc3ZnID0gaXNfc3ZnO1xuICAgICAgICB0aGlzLmUgPSB0aGlzLm4gPSBudWxsO1xuICAgIH1cbiAgICBjKGh0bWwpIHtcbiAgICAgICAgdGhpcy5oKGh0bWwpO1xuICAgIH1cbiAgICBtKGh0bWwsIHRhcmdldCwgYW5jaG9yID0gbnVsbCkge1xuICAgICAgICBpZiAoIXRoaXMuZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNfc3ZnKVxuICAgICAgICAgICAgICAgIHRoaXMuZSA9IHN2Z19lbGVtZW50KHRhcmdldC5ub2RlTmFtZSk7XG4gICAgICAgICAgICAvKiogIzczNjQgIHRhcmdldCBmb3IgPHRlbXBsYXRlPiBtYXkgYmUgcHJvdmlkZWQgYXMgI2RvY3VtZW50LWZyYWdtZW50KDExKSAqL1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuZSA9IGVsZW1lbnQoKHRhcmdldC5ub2RlVHlwZSA9PT0gMTEgPyAnVEVNUExBVEUnIDogdGFyZ2V0Lm5vZGVOYW1lKSk7XG4gICAgICAgICAgICB0aGlzLnQgPSB0YXJnZXQudGFnTmFtZSAhPT0gJ1RFTVBMQVRFJyA/IHRhcmdldCA6IHRhcmdldC5jb250ZW50O1xuICAgICAgICAgICAgdGhpcy5jKGh0bWwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaShhbmNob3IpO1xuICAgIH1cbiAgICBoKGh0bWwpIHtcbiAgICAgICAgdGhpcy5lLmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgIHRoaXMubiA9IEFycmF5LmZyb20odGhpcy5lLm5vZGVOYW1lID09PSAnVEVNUExBVEUnID8gdGhpcy5lLmNvbnRlbnQuY2hpbGROb2RlcyA6IHRoaXMuZS5jaGlsZE5vZGVzKTtcbiAgICB9XG4gICAgaShhbmNob3IpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm4ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGluc2VydCh0aGlzLnQsIHRoaXMubltpXSwgYW5jaG9yKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwKGh0bWwpIHtcbiAgICAgICAgdGhpcy5kKCk7XG4gICAgICAgIHRoaXMuaChodG1sKTtcbiAgICAgICAgdGhpcy5pKHRoaXMuYSk7XG4gICAgfVxuICAgIGQoKSB7XG4gICAgICAgIHRoaXMubi5mb3JFYWNoKGRldGFjaCk7XG4gICAgfVxufVxuY2xhc3MgSHRtbFRhZ0h5ZHJhdGlvbiBleHRlbmRzIEh0bWxUYWcge1xuICAgIGNvbnN0cnVjdG9yKGNsYWltZWRfbm9kZXMsIGlzX3N2ZyA9IGZhbHNlKSB7XG4gICAgICAgIHN1cGVyKGlzX3N2Zyk7XG4gICAgICAgIHRoaXMuZSA9IHRoaXMubiA9IG51bGw7XG4gICAgICAgIHRoaXMubCA9IGNsYWltZWRfbm9kZXM7XG4gICAgfVxuICAgIGMoaHRtbCkge1xuICAgICAgICBpZiAodGhpcy5sKSB7XG4gICAgICAgICAgICB0aGlzLm4gPSB0aGlzLmw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdXBlci5jKGh0bWwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGkoYW5jaG9yKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5uLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpbnNlcnRfaHlkcmF0aW9uKHRoaXMudCwgdGhpcy5uW2ldLCBhbmNob3IpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gYXR0cmlidXRlX3RvX29iamVjdChhdHRyaWJ1dGVzKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgZm9yIChjb25zdCBhdHRyaWJ1dGUgb2YgYXR0cmlidXRlcykge1xuICAgICAgICByZXN1bHRbYXR0cmlidXRlLm5hbWVdID0gYXR0cmlidXRlLnZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gZ2V0X2N1c3RvbV9lbGVtZW50c19zbG90cyhlbGVtZW50KSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgZWxlbWVudC5jaGlsZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgcmVzdWx0W25vZGUuc2xvdCB8fCAnZGVmYXVsdCddID0gdHJ1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gY29uc3RydWN0X3N2ZWx0ZV9jb21wb25lbnQoY29tcG9uZW50LCBwcm9wcykge1xuICAgIHJldHVybiBuZXcgY29tcG9uZW50KHByb3BzKTtcbn1cblxuLy8gd2UgbmVlZCB0byBzdG9yZSB0aGUgaW5mb3JtYXRpb24gZm9yIG11bHRpcGxlIGRvY3VtZW50cyBiZWNhdXNlIGEgU3ZlbHRlIGFwcGxpY2F0aW9uIGNvdWxkIGFsc28gY29udGFpbiBpZnJhbWVzXG4vLyBodHRwczovL2dpdGh1Yi5jb20vc3ZlbHRlanMvc3ZlbHRlL2lzc3Vlcy8zNjI0XG5jb25zdCBtYW5hZ2VkX3N0eWxlcyA9IG5ldyBNYXAoKTtcbmxldCBhY3RpdmUgPSAwO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Rhcmtza3lhcHAvc3RyaW5nLWhhc2gvYmxvYi9tYXN0ZXIvaW5kZXguanNcbmZ1bmN0aW9uIGhhc2goc3RyKSB7XG4gICAgbGV0IGhhc2ggPSA1MzgxO1xuICAgIGxldCBpID0gc3RyLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKVxuICAgICAgICBoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgXiBzdHIuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gaGFzaCA+Pj4gMDtcbn1cbmZ1bmN0aW9uIGNyZWF0ZV9zdHlsZV9pbmZvcm1hdGlvbihkb2MsIG5vZGUpIHtcbiAgICBjb25zdCBpbmZvID0geyBzdHlsZXNoZWV0OiBhcHBlbmRfZW1wdHlfc3R5bGVzaGVldChub2RlKSwgcnVsZXM6IHt9IH07XG4gICAgbWFuYWdlZF9zdHlsZXMuc2V0KGRvYywgaW5mbyk7XG4gICAgcmV0dXJuIGluZm87XG59XG5mdW5jdGlvbiBjcmVhdGVfcnVsZShub2RlLCBhLCBiLCBkdXJhdGlvbiwgZGVsYXksIGVhc2UsIGZuLCB1aWQgPSAwKSB7XG4gICAgY29uc3Qgc3RlcCA9IDE2LjY2NiAvIGR1cmF0aW9uO1xuICAgIGxldCBrZXlmcmFtZXMgPSAne1xcbic7XG4gICAgZm9yIChsZXQgcCA9IDA7IHAgPD0gMTsgcCArPSBzdGVwKSB7XG4gICAgICAgIGNvbnN0IHQgPSBhICsgKGIgLSBhKSAqIGVhc2UocCk7XG4gICAgICAgIGtleWZyYW1lcyArPSBwICogMTAwICsgYCV7JHtmbih0LCAxIC0gdCl9fVxcbmA7XG4gICAgfVxuICAgIGNvbnN0IHJ1bGUgPSBrZXlmcmFtZXMgKyBgMTAwJSB7JHtmbihiLCAxIC0gYil9fVxcbn1gO1xuICAgIGNvbnN0IG5hbWUgPSBgX19zdmVsdGVfJHtoYXNoKHJ1bGUpfV8ke3VpZH1gO1xuICAgIGNvbnN0IGRvYyA9IGdldF9yb290X2Zvcl9zdHlsZShub2RlKTtcbiAgICBjb25zdCB7IHN0eWxlc2hlZXQsIHJ1bGVzIH0gPSBtYW5hZ2VkX3N0eWxlcy5nZXQoZG9jKSB8fCBjcmVhdGVfc3R5bGVfaW5mb3JtYXRpb24oZG9jLCBub2RlKTtcbiAgICBpZiAoIXJ1bGVzW25hbWVdKSB7XG4gICAgICAgIHJ1bGVzW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgc3R5bGVzaGVldC5pbnNlcnRSdWxlKGBAa2V5ZnJhbWVzICR7bmFtZX0gJHtydWxlfWAsIHN0eWxlc2hlZXQuY3NzUnVsZXMubGVuZ3RoKTtcbiAgICB9XG4gICAgY29uc3QgYW5pbWF0aW9uID0gbm9kZS5zdHlsZS5hbmltYXRpb24gfHwgJyc7XG4gICAgbm9kZS5zdHlsZS5hbmltYXRpb24gPSBgJHthbmltYXRpb24gPyBgJHthbmltYXRpb259LCBgIDogJyd9JHtuYW1lfSAke2R1cmF0aW9ufW1zIGxpbmVhciAke2RlbGF5fW1zIDEgYm90aGA7XG4gICAgYWN0aXZlICs9IDE7XG4gICAgcmV0dXJuIG5hbWU7XG59XG5mdW5jdGlvbiBkZWxldGVfcnVsZShub2RlLCBuYW1lKSB7XG4gICAgY29uc3QgcHJldmlvdXMgPSAobm9kZS5zdHlsZS5hbmltYXRpb24gfHwgJycpLnNwbGl0KCcsICcpO1xuICAgIGNvbnN0IG5leHQgPSBwcmV2aW91cy5maWx0ZXIobmFtZVxuICAgICAgICA/IGFuaW0gPT4gYW5pbS5pbmRleE9mKG5hbWUpIDwgMCAvLyByZW1vdmUgc3BlY2lmaWMgYW5pbWF0aW9uXG4gICAgICAgIDogYW5pbSA9PiBhbmltLmluZGV4T2YoJ19fc3ZlbHRlJykgPT09IC0xIC8vIHJlbW92ZSBhbGwgU3ZlbHRlIGFuaW1hdGlvbnNcbiAgICApO1xuICAgIGNvbnN0IGRlbGV0ZWQgPSBwcmV2aW91cy5sZW5ndGggLSBuZXh0Lmxlbmd0aDtcbiAgICBpZiAoZGVsZXRlZCkge1xuICAgICAgICBub2RlLnN0eWxlLmFuaW1hdGlvbiA9IG5leHQuam9pbignLCAnKTtcbiAgICAgICAgYWN0aXZlIC09IGRlbGV0ZWQ7XG4gICAgICAgIGlmICghYWN0aXZlKVxuICAgICAgICAgICAgY2xlYXJfcnVsZXMoKTtcbiAgICB9XG59XG5mdW5jdGlvbiBjbGVhcl9ydWxlcygpIHtcbiAgICByYWYoKCkgPT4ge1xuICAgICAgICBpZiAoYWN0aXZlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBtYW5hZ2VkX3N0eWxlcy5mb3JFYWNoKGluZm8gPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBvd25lck5vZGUgfSA9IGluZm8uc3R5bGVzaGVldDtcbiAgICAgICAgICAgIC8vIHRoZXJlIGlzIG5vIG93bmVyTm9kZSBpZiBpdCBydW5zIG9uIGpzZG9tLlxuICAgICAgICAgICAgaWYgKG93bmVyTm9kZSlcbiAgICAgICAgICAgICAgICBkZXRhY2gob3duZXJOb2RlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG1hbmFnZWRfc3R5bGVzLmNsZWFyKCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZV9hbmltYXRpb24obm9kZSwgZnJvbSwgZm4sIHBhcmFtcykge1xuICAgIGlmICghZnJvbSlcbiAgICAgICAgcmV0dXJuIG5vb3A7XG4gICAgY29uc3QgdG8gPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmIChmcm9tLmxlZnQgPT09IHRvLmxlZnQgJiYgZnJvbS5yaWdodCA9PT0gdG8ucmlnaHQgJiYgZnJvbS50b3AgPT09IHRvLnRvcCAmJiBmcm9tLmJvdHRvbSA9PT0gdG8uYm90dG9tKVxuICAgICAgICByZXR1cm4gbm9vcDtcbiAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSAzMDAsIGVhc2luZyA9IGlkZW50aXR5LCBcbiAgICAvLyBAdHMtaWdub3JlIHRvZG86IHNob3VsZCB0aGlzIGJlIHNlcGFyYXRlZCBmcm9tIGRlc3RydWN0dXJpbmc/IE9yIHN0YXJ0L2VuZCBhZGRlZCB0byBwdWJsaWMgYXBpIGFuZCBkb2N1bWVudGF0aW9uP1xuICAgIHN0YXJ0OiBzdGFydF90aW1lID0gbm93KCkgKyBkZWxheSwgXG4gICAgLy8gQHRzLWlnbm9yZSB0b2RvOlxuICAgIGVuZCA9IHN0YXJ0X3RpbWUgKyBkdXJhdGlvbiwgdGljayA9IG5vb3AsIGNzcyB9ID0gZm4obm9kZSwgeyBmcm9tLCB0byB9LCBwYXJhbXMpO1xuICAgIGxldCBydW5uaW5nID0gdHJ1ZTtcbiAgICBsZXQgc3RhcnRlZCA9IGZhbHNlO1xuICAgIGxldCBuYW1lO1xuICAgIGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICBpZiAoY3NzKSB7XG4gICAgICAgICAgICBuYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgMCwgMSwgZHVyYXRpb24sIGRlbGF5LCBlYXNpbmcsIGNzcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFkZWxheSkge1xuICAgICAgICAgICAgc3RhcnRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgaWYgKGNzcylcbiAgICAgICAgICAgIGRlbGV0ZV9ydWxlKG5vZGUsIG5hbWUpO1xuICAgICAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgfVxuICAgIGxvb3Aobm93ID0+IHtcbiAgICAgICAgaWYgKCFzdGFydGVkICYmIG5vdyA+PSBzdGFydF90aW1lKSB7XG4gICAgICAgICAgICBzdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhcnRlZCAmJiBub3cgPj0gZW5kKSB7XG4gICAgICAgICAgICB0aWNrKDEsIDApO1xuICAgICAgICAgICAgc3RvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcnVubmluZykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFydGVkKSB7XG4gICAgICAgICAgICBjb25zdCBwID0gbm93IC0gc3RhcnRfdGltZTtcbiAgICAgICAgICAgIGNvbnN0IHQgPSAwICsgMSAqIGVhc2luZyhwIC8gZHVyYXRpb24pO1xuICAgICAgICAgICAgdGljayh0LCAxIC0gdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gICAgc3RhcnQoKTtcbiAgICB0aWNrKDAsIDEpO1xuICAgIHJldHVybiBzdG9wO1xufVxuZnVuY3Rpb24gZml4X3Bvc2l0aW9uKG5vZGUpIHtcbiAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgaWYgKHN0eWxlLnBvc2l0aW9uICE9PSAnYWJzb2x1dGUnICYmIHN0eWxlLnBvc2l0aW9uICE9PSAnZml4ZWQnKSB7XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gc3R5bGU7XG4gICAgICAgIGNvbnN0IGEgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBub2RlLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgbm9kZS5zdHlsZS53aWR0aCA9IHdpZHRoO1xuICAgICAgICBub2RlLnN0eWxlLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgYWRkX3RyYW5zZm9ybShub2RlLCBhKTtcbiAgICB9XG59XG5mdW5jdGlvbiBhZGRfdHJhbnNmb3JtKG5vZGUsIGEpIHtcbiAgICBjb25zdCBiID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAoYS5sZWZ0ICE9PSBiLmxlZnQgfHwgYS50b3AgIT09IGIudG9wKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtID0gc3R5bGUudHJhbnNmb3JtID09PSAnbm9uZScgPyAnJyA6IHN0eWxlLnRyYW5zZm9ybTtcbiAgICAgICAgbm9kZS5zdHlsZS50cmFuc2Zvcm0gPSBgJHt0cmFuc2Zvcm19IHRyYW5zbGF0ZSgke2EubGVmdCAtIGIubGVmdH1weCwgJHthLnRvcCAtIGIudG9wfXB4KWA7XG4gICAgfVxufVxuXG5sZXQgY3VycmVudF9jb21wb25lbnQ7XG5mdW5jdGlvbiBzZXRfY3VycmVudF9jb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgY3VycmVudF9jb21wb25lbnQgPSBjb21wb25lbnQ7XG59XG5mdW5jdGlvbiBnZXRfY3VycmVudF9jb21wb25lbnQoKSB7XG4gICAgaWYgKCFjdXJyZW50X2NvbXBvbmVudClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGdW5jdGlvbiBjYWxsZWQgb3V0c2lkZSBjb21wb25lbnQgaW5pdGlhbGl6YXRpb24nKTtcbiAgICByZXR1cm4gY3VycmVudF9jb21wb25lbnQ7XG59XG4vKipcbiAqIFNjaGVkdWxlcyBhIGNhbGxiYWNrIHRvIHJ1biBpbW1lZGlhdGVseSBiZWZvcmUgdGhlIGNvbXBvbmVudCBpcyB1cGRhdGVkIGFmdGVyIGFueSBzdGF0ZSBjaGFuZ2UuXG4gKlxuICogVGhlIGZpcnN0IHRpbWUgdGhlIGNhbGxiYWNrIHJ1bnMgd2lsbCBiZSBiZWZvcmUgdGhlIGluaXRpYWwgYG9uTW91bnRgXG4gKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3MjcnVuLXRpbWUtc3ZlbHRlLWJlZm9yZXVwZGF0ZVxuICovXG5mdW5jdGlvbiBiZWZvcmVVcGRhdGUoZm4pIHtcbiAgICBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5iZWZvcmVfdXBkYXRlLnB1c2goZm4pO1xufVxuLyoqXG4gKiBUaGUgYG9uTW91bnRgIGZ1bmN0aW9uIHNjaGVkdWxlcyBhIGNhbGxiYWNrIHRvIHJ1biBhcyBzb29uIGFzIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gbW91bnRlZCB0byB0aGUgRE9NLlxuICogSXQgbXVzdCBiZSBjYWxsZWQgZHVyaW5nIHRoZSBjb21wb25lbnQncyBpbml0aWFsaXNhdGlvbiAoYnV0IGRvZXNuJ3QgbmVlZCB0byBsaXZlICppbnNpZGUqIHRoZSBjb21wb25lbnQ7XG4gKiBpdCBjYW4gYmUgY2FsbGVkIGZyb20gYW4gZXh0ZXJuYWwgbW9kdWxlKS5cbiAqXG4gKiBgb25Nb3VudGAgZG9lcyBub3QgcnVuIGluc2lkZSBhIFtzZXJ2ZXItc2lkZSBjb21wb25lbnRdKC9kb2NzI3J1bi10aW1lLXNlcnZlci1zaWRlLWNvbXBvbmVudC1hcGkpLlxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzI3J1bi10aW1lLXN2ZWx0ZS1vbm1vdW50XG4gKi9cbmZ1bmN0aW9uIG9uTW91bnQoZm4pIHtcbiAgICBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5vbl9tb3VudC5wdXNoKGZuKTtcbn1cbi8qKlxuICogU2NoZWR1bGVzIGEgY2FsbGJhY2sgdG8gcnVuIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gdXBkYXRlZC5cbiAqXG4gKiBUaGUgZmlyc3QgdGltZSB0aGUgY2FsbGJhY2sgcnVucyB3aWxsIGJlIGFmdGVyIHRoZSBpbml0aWFsIGBvbk1vdW50YFxuICovXG5mdW5jdGlvbiBhZnRlclVwZGF0ZShmbikge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmFmdGVyX3VwZGF0ZS5wdXNoKGZuKTtcbn1cbi8qKlxuICogU2NoZWR1bGVzIGEgY2FsbGJhY2sgdG8gcnVuIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIHVubW91bnRlZC5cbiAqXG4gKiBPdXQgb2YgYG9uTW91bnRgLCBgYmVmb3JlVXBkYXRlYCwgYGFmdGVyVXBkYXRlYCBhbmQgYG9uRGVzdHJveWAsIHRoaXMgaXMgdGhlXG4gKiBvbmx5IG9uZSB0aGF0IHJ1bnMgaW5zaWRlIGEgc2VydmVyLXNpZGUgY29tcG9uZW50LlxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzI3J1bi10aW1lLXN2ZWx0ZS1vbmRlc3Ryb3lcbiAqL1xuZnVuY3Rpb24gb25EZXN0cm95KGZuKSB7XG4gICAgZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQub25fZGVzdHJveS5wdXNoKGZuKTtcbn1cbi8qKlxuICogQ3JlYXRlcyBhbiBldmVudCBkaXNwYXRjaGVyIHRoYXQgY2FuIGJlIHVzZWQgdG8gZGlzcGF0Y2ggW2NvbXBvbmVudCBldmVudHNdKC9kb2NzI3RlbXBsYXRlLXN5bnRheC1jb21wb25lbnQtZGlyZWN0aXZlcy1vbi1ldmVudG5hbWUpLlxuICogRXZlbnQgZGlzcGF0Y2hlcnMgYXJlIGZ1bmN0aW9ucyB0aGF0IGNhbiB0YWtlIHR3byBhcmd1bWVudHM6IGBuYW1lYCBhbmQgYGRldGFpbGAuXG4gKlxuICogQ29tcG9uZW50IGV2ZW50cyBjcmVhdGVkIHdpdGggYGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcmAgY3JlYXRlIGFcbiAqIFtDdXN0b21FdmVudF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0N1c3RvbUV2ZW50KS5cbiAqIFRoZXNlIGV2ZW50cyBkbyBub3QgW2J1YmJsZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9MZWFybi9KYXZhU2NyaXB0L0J1aWxkaW5nX2Jsb2Nrcy9FdmVudHMjRXZlbnRfYnViYmxpbmdfYW5kX2NhcHR1cmUpLlxuICogVGhlIGBkZXRhaWxgIGFyZ3VtZW50IGNvcnJlc3BvbmRzIHRvIHRoZSBbQ3VzdG9tRXZlbnQuZGV0YWlsXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ3VzdG9tRXZlbnQvZGV0YWlsKVxuICogcHJvcGVydHkgYW5kIGNhbiBjb250YWluIGFueSB0eXBlIG9mIGRhdGEuXG4gKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3MjcnVuLXRpbWUtc3ZlbHRlLWNyZWF0ZWV2ZW50ZGlzcGF0Y2hlclxuICovXG5mdW5jdGlvbiBjcmVhdGVFdmVudERpc3BhdGNoZXIoKSB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCk7XG4gICAgcmV0dXJuICh0eXBlLCBkZXRhaWwsIHsgY2FuY2VsYWJsZSA9IGZhbHNlIH0gPSB7fSkgPT4ge1xuICAgICAgICBjb25zdCBjYWxsYmFja3MgPSBjb21wb25lbnQuJCQuY2FsbGJhY2tzW3R5cGVdO1xuICAgICAgICBpZiAoY2FsbGJhY2tzKSB7XG4gICAgICAgICAgICAvLyBUT0RPIGFyZSB0aGVyZSBzaXR1YXRpb25zIHdoZXJlIGV2ZW50cyBjb3VsZCBiZSBkaXNwYXRjaGVkXG4gICAgICAgICAgICAvLyBpbiBhIHNlcnZlciAobm9uLURPTSkgZW52aXJvbm1lbnQ/XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IGN1c3RvbV9ldmVudCh0eXBlLCBkZXRhaWwsIHsgY2FuY2VsYWJsZSB9KTtcbiAgICAgICAgICAgIGNhbGxiYWNrcy5zbGljZSgpLmZvckVhY2goZm4gPT4ge1xuICAgICAgICAgICAgICAgIGZuLmNhbGwoY29tcG9uZW50LCBldmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiAhZXZlbnQuZGVmYXVsdFByZXZlbnRlZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xufVxuLyoqXG4gKiBBc3NvY2lhdGVzIGFuIGFyYml0cmFyeSBgY29udGV4dGAgb2JqZWN0IHdpdGggdGhlIGN1cnJlbnQgY29tcG9uZW50IGFuZCB0aGUgc3BlY2lmaWVkIGBrZXlgXG4gKiBhbmQgcmV0dXJucyB0aGF0IG9iamVjdC4gVGhlIGNvbnRleHQgaXMgdGhlbiBhdmFpbGFibGUgdG8gY2hpbGRyZW4gb2YgdGhlIGNvbXBvbmVudFxuICogKGluY2x1ZGluZyBzbG90dGVkIGNvbnRlbnQpIHdpdGggYGdldENvbnRleHRgLlxuICpcbiAqIExpa2UgbGlmZWN5Y2xlIGZ1bmN0aW9ucywgdGhpcyBtdXN0IGJlIGNhbGxlZCBkdXJpbmcgY29tcG9uZW50IGluaXRpYWxpc2F0aW9uLlxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzI3J1bi10aW1lLXN2ZWx0ZS1zZXRjb250ZXh0XG4gKi9cbmZ1bmN0aW9uIHNldENvbnRleHQoa2V5LCBjb250ZXh0KSB7XG4gICAgZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuY29udGV4dC5zZXQoa2V5LCBjb250ZXh0KTtcbiAgICByZXR1cm4gY29udGV4dDtcbn1cbi8qKlxuICogUmV0cmlldmVzIHRoZSBjb250ZXh0IHRoYXQgYmVsb25ncyB0byB0aGUgY2xvc2VzdCBwYXJlbnQgY29tcG9uZW50IHdpdGggdGhlIHNwZWNpZmllZCBga2V5YC5cbiAqIE11c3QgYmUgY2FsbGVkIGR1cmluZyBjb21wb25lbnQgaW5pdGlhbGlzYXRpb24uXG4gKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3MjcnVuLXRpbWUtc3ZlbHRlLWdldGNvbnRleHRcbiAqL1xuZnVuY3Rpb24gZ2V0Q29udGV4dChrZXkpIHtcbiAgICByZXR1cm4gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuY29udGV4dC5nZXQoa2V5KTtcbn1cbi8qKlxuICogUmV0cmlldmVzIHRoZSB3aG9sZSBjb250ZXh0IG1hcCB0aGF0IGJlbG9uZ3MgdG8gdGhlIGNsb3Nlc3QgcGFyZW50IGNvbXBvbmVudC5cbiAqIE11c3QgYmUgY2FsbGVkIGR1cmluZyBjb21wb25lbnQgaW5pdGlhbGlzYXRpb24uIFVzZWZ1bCwgZm9yIGV4YW1wbGUsIGlmIHlvdVxuICogcHJvZ3JhbW1hdGljYWxseSBjcmVhdGUgYSBjb21wb25lbnQgYW5kIHdhbnQgdG8gcGFzcyB0aGUgZXhpc3RpbmcgY29udGV4dCB0byBpdC5cbiAqXG4gKiBodHRwczovL3N2ZWx0ZS5kZXYvZG9jcyNydW4tdGltZS1zdmVsdGUtZ2V0YWxsY29udGV4dHNcbiAqL1xuZnVuY3Rpb24gZ2V0QWxsQ29udGV4dHMoKSB7XG4gICAgcmV0dXJuIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmNvbnRleHQ7XG59XG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIGEgZ2l2ZW4gYGtleWAgaGFzIGJlZW4gc2V0IGluIHRoZSBjb250ZXh0IG9mIGEgcGFyZW50IGNvbXBvbmVudC5cbiAqIE11c3QgYmUgY2FsbGVkIGR1cmluZyBjb21wb25lbnQgaW5pdGlhbGlzYXRpb24uXG4gKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3MjcnVuLXRpbWUtc3ZlbHRlLWhhc2NvbnRleHRcbiAqL1xuZnVuY3Rpb24gaGFzQ29udGV4dChrZXkpIHtcbiAgICByZXR1cm4gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuY29udGV4dC5oYXMoa2V5KTtcbn1cbi8vIFRPRE8gZmlndXJlIG91dCBpZiB3ZSBzdGlsbCB3YW50IHRvIHN1cHBvcnRcbi8vIHNob3J0aGFuZCBldmVudHMsIG9yIGlmIHdlIHdhbnQgdG8gaW1wbGVtZW50XG4vLyBhIHJlYWwgYnViYmxpbmcgbWVjaGFuaXNtXG5mdW5jdGlvbiBidWJibGUoY29tcG9uZW50LCBldmVudCkge1xuICAgIGNvbnN0IGNhbGxiYWNrcyA9IGNvbXBvbmVudC4kJC5jYWxsYmFja3NbZXZlbnQudHlwZV07XG4gICAgaWYgKGNhbGxiYWNrcykge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNhbGxiYWNrcy5zbGljZSgpLmZvckVhY2goZm4gPT4gZm4uY2FsbCh0aGlzLCBldmVudCkpO1xuICAgIH1cbn1cblxuY29uc3QgZGlydHlfY29tcG9uZW50cyA9IFtdO1xuY29uc3QgaW50cm9zID0geyBlbmFibGVkOiBmYWxzZSB9O1xuY29uc3QgYmluZGluZ19jYWxsYmFja3MgPSBbXTtcbmxldCByZW5kZXJfY2FsbGJhY2tzID0gW107XG5jb25zdCBmbHVzaF9jYWxsYmFja3MgPSBbXTtcbmNvbnN0IHJlc29sdmVkX3Byb21pc2UgPSAvKiBAX19QVVJFX18gKi8gUHJvbWlzZS5yZXNvbHZlKCk7XG5sZXQgdXBkYXRlX3NjaGVkdWxlZCA9IGZhbHNlO1xuZnVuY3Rpb24gc2NoZWR1bGVfdXBkYXRlKCkge1xuICAgIGlmICghdXBkYXRlX3NjaGVkdWxlZCkge1xuICAgICAgICB1cGRhdGVfc2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgICAgcmVzb2x2ZWRfcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9XG59XG5mdW5jdGlvbiB0aWNrKCkge1xuICAgIHNjaGVkdWxlX3VwZGF0ZSgpO1xuICAgIHJldHVybiByZXNvbHZlZF9wcm9taXNlO1xufVxuZnVuY3Rpb24gYWRkX3JlbmRlcl9jYWxsYmFjayhmbikge1xuICAgIHJlbmRlcl9jYWxsYmFja3MucHVzaChmbik7XG59XG5mdW5jdGlvbiBhZGRfZmx1c2hfY2FsbGJhY2soZm4pIHtcbiAgICBmbHVzaF9jYWxsYmFja3MucHVzaChmbik7XG59XG4vLyBmbHVzaCgpIGNhbGxzIGNhbGxiYWNrcyBpbiB0aGlzIG9yZGVyOlxuLy8gMS4gQWxsIGJlZm9yZVVwZGF0ZSBjYWxsYmFja3MsIGluIG9yZGVyOiBwYXJlbnRzIGJlZm9yZSBjaGlsZHJlblxuLy8gMi4gQWxsIGJpbmQ6dGhpcyBjYWxsYmFja3MsIGluIHJldmVyc2Ugb3JkZXI6IGNoaWxkcmVuIGJlZm9yZSBwYXJlbnRzLlxuLy8gMy4gQWxsIGFmdGVyVXBkYXRlIGNhbGxiYWNrcywgaW4gb3JkZXI6IHBhcmVudHMgYmVmb3JlIGNoaWxkcmVuLiBFWENFUFRcbi8vICAgIGZvciBhZnRlclVwZGF0ZXMgY2FsbGVkIGR1cmluZyB0aGUgaW5pdGlhbCBvbk1vdW50LCB3aGljaCBhcmUgY2FsbGVkIGluXG4vLyAgICByZXZlcnNlIG9yZGVyOiBjaGlsZHJlbiBiZWZvcmUgcGFyZW50cy5cbi8vIFNpbmNlIGNhbGxiYWNrcyBtaWdodCB1cGRhdGUgY29tcG9uZW50IHZhbHVlcywgd2hpY2ggY291bGQgdHJpZ2dlciBhbm90aGVyXG4vLyBjYWxsIHRvIGZsdXNoKCksIHRoZSBmb2xsb3dpbmcgc3RlcHMgZ3VhcmQgYWdhaW5zdCB0aGlzOlxuLy8gMS4gRHVyaW5nIGJlZm9yZVVwZGF0ZSwgYW55IHVwZGF0ZWQgY29tcG9uZW50cyB3aWxsIGJlIGFkZGVkIHRvIHRoZVxuLy8gICAgZGlydHlfY29tcG9uZW50cyBhcnJheSBhbmQgd2lsbCBjYXVzZSBhIHJlZW50cmFudCBjYWxsIHRvIGZsdXNoKCkuIEJlY2F1c2Vcbi8vICAgIHRoZSBmbHVzaCBpbmRleCBpcyBrZXB0IG91dHNpZGUgdGhlIGZ1bmN0aW9uLCB0aGUgcmVlbnRyYW50IGNhbGwgd2lsbCBwaWNrXG4vLyAgICB1cCB3aGVyZSB0aGUgZWFybGllciBjYWxsIGxlZnQgb2ZmIGFuZCBnbyB0aHJvdWdoIGFsbCBkaXJ0eSBjb21wb25lbnRzLiBUaGVcbi8vICAgIGN1cnJlbnRfY29tcG9uZW50IHZhbHVlIGlzIHNhdmVkIGFuZCByZXN0b3JlZCBzbyB0aGF0IHRoZSByZWVudHJhbnQgY2FsbCB3aWxsXG4vLyAgICBub3QgaW50ZXJmZXJlIHdpdGggdGhlIFwicGFyZW50XCIgZmx1c2goKSBjYWxsLlxuLy8gMi4gYmluZDp0aGlzIGNhbGxiYWNrcyBjYW5ub3QgdHJpZ2dlciBuZXcgZmx1c2goKSBjYWxscy5cbi8vIDMuIER1cmluZyBhZnRlclVwZGF0ZSwgYW55IHVwZGF0ZWQgY29tcG9uZW50cyB3aWxsIE5PVCBoYXZlIHRoZWlyIGFmdGVyVXBkYXRlXG4vLyAgICBjYWxsYmFjayBjYWxsZWQgYSBzZWNvbmQgdGltZTsgdGhlIHNlZW5fY2FsbGJhY2tzIHNldCwgb3V0c2lkZSB0aGUgZmx1c2goKVxuLy8gICAgZnVuY3Rpb24sIGd1YXJhbnRlZXMgdGhpcyBiZWhhdmlvci5cbmNvbnN0IHNlZW5fY2FsbGJhY2tzID0gbmV3IFNldCgpO1xubGV0IGZsdXNoaWR4ID0gMDsgLy8gRG8gKm5vdCogbW92ZSB0aGlzIGluc2lkZSB0aGUgZmx1c2goKSBmdW5jdGlvblxuZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgLy8gRG8gbm90IHJlZW50ZXIgZmx1c2ggd2hpbGUgZGlydHkgY29tcG9uZW50cyBhcmUgdXBkYXRlZCwgYXMgdGhpcyBjYW5cbiAgICAvLyByZXN1bHQgaW4gYW4gaW5maW5pdGUgbG9vcC4gSW5zdGVhZCwgbGV0IHRoZSBpbm5lciBmbHVzaCBoYW5kbGUgaXQuXG4gICAgLy8gUmVlbnRyYW5jeSBpcyBvayBhZnRlcndhcmRzIGZvciBiaW5kaW5ncyBldGMuXG4gICAgaWYgKGZsdXNoaWR4ICE9PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc2F2ZWRfY29tcG9uZW50ID0gY3VycmVudF9jb21wb25lbnQ7XG4gICAgZG8ge1xuICAgICAgICAvLyBmaXJzdCwgY2FsbCBiZWZvcmVVcGRhdGUgZnVuY3Rpb25zXG4gICAgICAgIC8vIGFuZCB1cGRhdGUgY29tcG9uZW50c1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgd2hpbGUgKGZsdXNoaWR4IDwgZGlydHlfY29tcG9uZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBkaXJ0eV9jb21wb25lbnRzW2ZsdXNoaWR4XTtcbiAgICAgICAgICAgICAgICBmbHVzaGlkeCsrO1xuICAgICAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZShjb21wb25lbnQuJCQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyByZXNldCBkaXJ0eSBzdGF0ZSB0byBub3QgZW5kIHVwIGluIGEgZGVhZGxvY2tlZCBzdGF0ZSBhbmQgdGhlbiByZXRocm93XG4gICAgICAgICAgICBkaXJ0eV9jb21wb25lbnRzLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICBmbHVzaGlkeCA9IDA7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChudWxsKTtcbiAgICAgICAgZGlydHlfY29tcG9uZW50cy5sZW5ndGggPSAwO1xuICAgICAgICBmbHVzaGlkeCA9IDA7XG4gICAgICAgIHdoaWxlIChiaW5kaW5nX2NhbGxiYWNrcy5sZW5ndGgpXG4gICAgICAgICAgICBiaW5kaW5nX2NhbGxiYWNrcy5wb3AoKSgpO1xuICAgICAgICAvLyB0aGVuLCBvbmNlIGNvbXBvbmVudHMgYXJlIHVwZGF0ZWQsIGNhbGxcbiAgICAgICAgLy8gYWZ0ZXJVcGRhdGUgZnVuY3Rpb25zLiBUaGlzIG1heSBjYXVzZVxuICAgICAgICAvLyBzdWJzZXF1ZW50IHVwZGF0ZXMuLi5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZW5kZXJfY2FsbGJhY2tzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IHJlbmRlcl9jYWxsYmFja3NbaV07XG4gICAgICAgICAgICBpZiAoIXNlZW5fY2FsbGJhY2tzLmhhcyhjYWxsYmFjaykpIHtcbiAgICAgICAgICAgICAgICAvLyAuLi5zbyBndWFyZCBhZ2FpbnN0IGluZmluaXRlIGxvb3BzXG4gICAgICAgICAgICAgICAgc2Vlbl9jYWxsYmFja3MuYWRkKGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlbmRlcl9jYWxsYmFja3MubGVuZ3RoID0gMDtcbiAgICB9IHdoaWxlIChkaXJ0eV9jb21wb25lbnRzLmxlbmd0aCk7XG4gICAgd2hpbGUgKGZsdXNoX2NhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgZmx1c2hfY2FsbGJhY2tzLnBvcCgpKCk7XG4gICAgfVxuICAgIHVwZGF0ZV9zY2hlZHVsZWQgPSBmYWxzZTtcbiAgICBzZWVuX2NhbGxiYWNrcy5jbGVhcigpO1xuICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChzYXZlZF9jb21wb25lbnQpO1xufVxuZnVuY3Rpb24gdXBkYXRlKCQkKSB7XG4gICAgaWYgKCQkLmZyYWdtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICQkLnVwZGF0ZSgpO1xuICAgICAgICBydW5fYWxsKCQkLmJlZm9yZV91cGRhdGUpO1xuICAgICAgICBjb25zdCBkaXJ0eSA9ICQkLmRpcnR5O1xuICAgICAgICAkJC5kaXJ0eSA9IFstMV07XG4gICAgICAgICQkLmZyYWdtZW50ICYmICQkLmZyYWdtZW50LnAoJCQuY3R4LCBkaXJ0eSk7XG4gICAgICAgICQkLmFmdGVyX3VwZGF0ZS5mb3JFYWNoKGFkZF9yZW5kZXJfY2FsbGJhY2spO1xuICAgIH1cbn1cbi8qKlxuICogVXNlZnVsIGZvciBleGFtcGxlIHRvIGV4ZWN1dGUgcmVtYWluaW5nIGBhZnRlclVwZGF0ZWAgY2FsbGJhY2tzIGJlZm9yZSBleGVjdXRpbmcgYGRlc3Ryb3lgLlxuICovXG5mdW5jdGlvbiBmbHVzaF9yZW5kZXJfY2FsbGJhY2tzKGZucykge1xuICAgIGNvbnN0IGZpbHRlcmVkID0gW107XG4gICAgY29uc3QgdGFyZ2V0cyA9IFtdO1xuICAgIHJlbmRlcl9jYWxsYmFja3MuZm9yRWFjaCgoYykgPT4gZm5zLmluZGV4T2YoYykgPT09IC0xID8gZmlsdGVyZWQucHVzaChjKSA6IHRhcmdldHMucHVzaChjKSk7XG4gICAgdGFyZ2V0cy5mb3JFYWNoKChjKSA9PiBjKCkpO1xuICAgIHJlbmRlcl9jYWxsYmFja3MgPSBmaWx0ZXJlZDtcbn1cblxubGV0IHByb21pc2U7XG5mdW5jdGlvbiB3YWl0KCkge1xuICAgIGlmICghcHJvbWlzZSkge1xuICAgICAgICBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIHByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBwcm9taXNlID0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBwcm9taXNlO1xufVxuZnVuY3Rpb24gZGlzcGF0Y2gobm9kZSwgZGlyZWN0aW9uLCBraW5kKSB7XG4gICAgbm9kZS5kaXNwYXRjaEV2ZW50KGN1c3RvbV9ldmVudChgJHtkaXJlY3Rpb24gPyAnaW50cm8nIDogJ291dHJvJ30ke2tpbmR9YCkpO1xufVxuY29uc3Qgb3V0cm9pbmcgPSBuZXcgU2V0KCk7XG5sZXQgb3V0cm9zO1xuZnVuY3Rpb24gZ3JvdXBfb3V0cm9zKCkge1xuICAgIG91dHJvcyA9IHtcbiAgICAgICAgcjogMCxcbiAgICAgICAgYzogW10sXG4gICAgICAgIHA6IG91dHJvcyAvLyBwYXJlbnQgZ3JvdXBcbiAgICB9O1xufVxuZnVuY3Rpb24gY2hlY2tfb3V0cm9zKCkge1xuICAgIGlmICghb3V0cm9zLnIpIHtcbiAgICAgICAgcnVuX2FsbChvdXRyb3MuYyk7XG4gICAgfVxuICAgIG91dHJvcyA9IG91dHJvcy5wO1xufVxuZnVuY3Rpb24gdHJhbnNpdGlvbl9pbihibG9jaywgbG9jYWwpIHtcbiAgICBpZiAoYmxvY2sgJiYgYmxvY2suaSkge1xuICAgICAgICBvdXRyb2luZy5kZWxldGUoYmxvY2spO1xuICAgICAgICBibG9jay5pKGxvY2FsKTtcbiAgICB9XG59XG5mdW5jdGlvbiB0cmFuc2l0aW9uX291dChibG9jaywgbG9jYWwsIGRldGFjaCwgY2FsbGJhY2spIHtcbiAgICBpZiAoYmxvY2sgJiYgYmxvY2subykge1xuICAgICAgICBpZiAob3V0cm9pbmcuaGFzKGJsb2NrKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgb3V0cm9pbmcuYWRkKGJsb2NrKTtcbiAgICAgICAgb3V0cm9zLmMucHVzaCgoKSA9PiB7XG4gICAgICAgICAgICBvdXRyb2luZy5kZWxldGUoYmxvY2spO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRldGFjaClcbiAgICAgICAgICAgICAgICAgICAgYmxvY2suZCgxKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYmxvY2subyhsb2NhbCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxufVxuY29uc3QgbnVsbF90cmFuc2l0aW9uID0geyBkdXJhdGlvbjogMCB9O1xuZnVuY3Rpb24gY3JlYXRlX2luX3RyYW5zaXRpb24obm9kZSwgZm4sIHBhcmFtcykge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7IGRpcmVjdGlvbjogJ2luJyB9O1xuICAgIGxldCBjb25maWcgPSBmbihub2RlLCBwYXJhbXMsIG9wdGlvbnMpO1xuICAgIGxldCBydW5uaW5nID0gZmFsc2U7XG4gICAgbGV0IGFuaW1hdGlvbl9uYW1lO1xuICAgIGxldCB0YXNrO1xuICAgIGxldCB1aWQgPSAwO1xuICAgIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgICAgIGlmIChhbmltYXRpb25fbmFtZSlcbiAgICAgICAgICAgIGRlbGV0ZV9ydWxlKG5vZGUsIGFuaW1hdGlvbl9uYW1lKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ28oKSB7XG4gICAgICAgIGNvbnN0IHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDMwMCwgZWFzaW5nID0gaWRlbnRpdHksIHRpY2sgPSBub29wLCBjc3MgfSA9IGNvbmZpZyB8fCBudWxsX3RyYW5zaXRpb247XG4gICAgICAgIGlmIChjc3MpXG4gICAgICAgICAgICBhbmltYXRpb25fbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIDAsIDEsIGR1cmF0aW9uLCBkZWxheSwgZWFzaW5nLCBjc3MsIHVpZCsrKTtcbiAgICAgICAgdGljaygwLCAxKTtcbiAgICAgICAgY29uc3Qgc3RhcnRfdGltZSA9IG5vdygpICsgZGVsYXk7XG4gICAgICAgIGNvbnN0IGVuZF90aW1lID0gc3RhcnRfdGltZSArIGR1cmF0aW9uO1xuICAgICAgICBpZiAodGFzaylcbiAgICAgICAgICAgIHRhc2suYWJvcnQoKTtcbiAgICAgICAgcnVubmluZyA9IHRydWU7XG4gICAgICAgIGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4gZGlzcGF0Y2gobm9kZSwgdHJ1ZSwgJ3N0YXJ0JykpO1xuICAgICAgICB0YXNrID0gbG9vcChub3cgPT4ge1xuICAgICAgICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAobm93ID49IGVuZF90aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpY2soMSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5vZGUsIHRydWUsICdlbmQnKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobm93ID49IHN0YXJ0X3RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdCA9IGVhc2luZygobm93IC0gc3RhcnRfdGltZSkgLyBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHRpY2sodCwgMSAtIHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBydW5uaW5nO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGV0IHN0YXJ0ZWQgPSBmYWxzZTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdGFydCgpIHtcbiAgICAgICAgICAgIGlmIChzdGFydGVkKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSk7XG4gICAgICAgICAgICBpZiAoaXNfZnVuY3Rpb24oY29uZmlnKSkge1xuICAgICAgICAgICAgICAgIGNvbmZpZyA9IGNvbmZpZyhvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB3YWl0KCkudGhlbihnbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBnbygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBpbnZhbGlkYXRlKCkge1xuICAgICAgICAgICAgc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB9LFxuICAgICAgICBlbmQoKSB7XG4gICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICAgICAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlX291dF90cmFuc2l0aW9uKG5vZGUsIGZuLCBwYXJhbXMpIHtcbiAgICBjb25zdCBvcHRpb25zID0geyBkaXJlY3Rpb246ICdvdXQnIH07XG4gICAgbGV0IGNvbmZpZyA9IGZuKG5vZGUsIHBhcmFtcywgb3B0aW9ucyk7XG4gICAgbGV0IHJ1bm5pbmcgPSB0cnVlO1xuICAgIGxldCBhbmltYXRpb25fbmFtZTtcbiAgICBjb25zdCBncm91cCA9IG91dHJvcztcbiAgICBncm91cC5yICs9IDE7XG4gICAgZnVuY3Rpb24gZ28oKSB7XG4gICAgICAgIGNvbnN0IHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDMwMCwgZWFzaW5nID0gaWRlbnRpdHksIHRpY2sgPSBub29wLCBjc3MgfSA9IGNvbmZpZyB8fCBudWxsX3RyYW5zaXRpb247XG4gICAgICAgIGlmIChjc3MpXG4gICAgICAgICAgICBhbmltYXRpb25fbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIDEsIDAsIGR1cmF0aW9uLCBkZWxheSwgZWFzaW5nLCBjc3MpO1xuICAgICAgICBjb25zdCBzdGFydF90aW1lID0gbm93KCkgKyBkZWxheTtcbiAgICAgICAgY29uc3QgZW5kX3RpbWUgPSBzdGFydF90aW1lICsgZHVyYXRpb247XG4gICAgICAgIGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4gZGlzcGF0Y2gobm9kZSwgZmFsc2UsICdzdGFydCcpKTtcbiAgICAgICAgbG9vcChub3cgPT4ge1xuICAgICAgICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAobm93ID49IGVuZF90aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpY2soMCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5vZGUsIGZhbHNlLCAnZW5kJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghLS1ncm91cC5yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdpbGwgcmVzdWx0IGluIGBlbmQoKWAgYmVpbmcgY2FsbGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc28gd2UgZG9uJ3QgbmVlZCB0byBjbGVhbiB1cCBoZXJlXG4gICAgICAgICAgICAgICAgICAgICAgICBydW5fYWxsKGdyb3VwLmMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBzdGFydF90aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBlYXNpbmcoKG5vdyAtIHN0YXJ0X3RpbWUpIC8gZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB0aWNrKDEgLSB0LCB0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcnVubmluZztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChpc19mdW5jdGlvbihjb25maWcpKSB7XG4gICAgICAgIHdhaXQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbmZpZyA9IGNvbmZpZyhvcHRpb25zKTtcbiAgICAgICAgICAgIGdvKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZ28oKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZW5kKHJlc2V0KSB7XG4gICAgICAgICAgICBpZiAocmVzZXQgJiYgY29uZmlnLnRpY2spIHtcbiAgICAgICAgICAgICAgICBjb25maWcudGljaygxLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbl9uYW1lKVxuICAgICAgICAgICAgICAgICAgICBkZWxldGVfcnVsZShub2RlLCBhbmltYXRpb25fbmFtZSk7XG4gICAgICAgICAgICAgICAgcnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZV9iaWRpcmVjdGlvbmFsX3RyYW5zaXRpb24obm9kZSwgZm4sIHBhcmFtcywgaW50cm8pIHtcbiAgICBjb25zdCBvcHRpb25zID0geyBkaXJlY3Rpb246ICdib3RoJyB9O1xuICAgIGxldCBjb25maWcgPSBmbihub2RlLCBwYXJhbXMsIG9wdGlvbnMpO1xuICAgIGxldCB0ID0gaW50cm8gPyAwIDogMTtcbiAgICBsZXQgcnVubmluZ19wcm9ncmFtID0gbnVsbDtcbiAgICBsZXQgcGVuZGluZ19wcm9ncmFtID0gbnVsbDtcbiAgICBsZXQgYW5pbWF0aW9uX25hbWUgPSBudWxsO1xuICAgIGZ1bmN0aW9uIGNsZWFyX2FuaW1hdGlvbigpIHtcbiAgICAgICAgaWYgKGFuaW1hdGlvbl9uYW1lKVxuICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSwgYW5pbWF0aW9uX25hbWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpbml0KHByb2dyYW0sIGR1cmF0aW9uKSB7XG4gICAgICAgIGNvbnN0IGQgPSAocHJvZ3JhbS5iIC0gdCk7XG4gICAgICAgIGR1cmF0aW9uICo9IE1hdGguYWJzKGQpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYTogdCxcbiAgICAgICAgICAgIGI6IHByb2dyYW0uYixcbiAgICAgICAgICAgIGQsXG4gICAgICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgICAgIHN0YXJ0OiBwcm9ncmFtLnN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBwcm9ncmFtLnN0YXJ0ICsgZHVyYXRpb24sXG4gICAgICAgICAgICBncm91cDogcHJvZ3JhbS5ncm91cFxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBnbyhiKSB7XG4gICAgICAgIGNvbnN0IHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDMwMCwgZWFzaW5nID0gaWRlbnRpdHksIHRpY2sgPSBub29wLCBjc3MgfSA9IGNvbmZpZyB8fCBudWxsX3RyYW5zaXRpb247XG4gICAgICAgIGNvbnN0IHByb2dyYW0gPSB7XG4gICAgICAgICAgICBzdGFydDogbm93KCkgKyBkZWxheSxcbiAgICAgICAgICAgIGJcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCFiKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRvZG86IGltcHJvdmUgdHlwaW5nc1xuICAgICAgICAgICAgcHJvZ3JhbS5ncm91cCA9IG91dHJvcztcbiAgICAgICAgICAgIG91dHJvcy5yICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJ1bm5pbmdfcHJvZ3JhbSB8fCBwZW5kaW5nX3Byb2dyYW0pIHtcbiAgICAgICAgICAgIHBlbmRpbmdfcHJvZ3JhbSA9IHByb2dyYW07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBpZiB0aGlzIGlzIGFuIGludHJvLCBhbmQgdGhlcmUncyBhIGRlbGF5LCB3ZSBuZWVkIHRvIGRvXG4gICAgICAgICAgICAvLyBhbiBpbml0aWFsIHRpY2sgYW5kL29yIGFwcGx5IENTUyBhbmltYXRpb24gaW1tZWRpYXRlbHlcbiAgICAgICAgICAgIGlmIChjc3MpIHtcbiAgICAgICAgICAgICAgICBjbGVhcl9hbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICBhbmltYXRpb25fbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIHQsIGIsIGR1cmF0aW9uLCBkZWxheSwgZWFzaW5nLCBjc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGIpXG4gICAgICAgICAgICAgICAgdGljaygwLCAxKTtcbiAgICAgICAgICAgIHJ1bm5pbmdfcHJvZ3JhbSA9IGluaXQocHJvZ3JhbSwgZHVyYXRpb24pO1xuICAgICAgICAgICAgYWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiBkaXNwYXRjaChub2RlLCBiLCAnc3RhcnQnKSk7XG4gICAgICAgICAgICBsb29wKG5vdyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHBlbmRpbmdfcHJvZ3JhbSAmJiBub3cgPiBwZW5kaW5nX3Byb2dyYW0uc3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ19wcm9ncmFtID0gaW5pdChwZW5kaW5nX3Byb2dyYW0sIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgcGVuZGluZ19wcm9ncmFtID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobm9kZSwgcnVubmluZ19wcm9ncmFtLmIsICdzdGFydCcpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3NzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhcl9hbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbl9uYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgdCwgcnVubmluZ19wcm9ncmFtLmIsIHJ1bm5pbmdfcHJvZ3JhbS5kdXJhdGlvbiwgMCwgZWFzaW5nLCBjb25maWcuY3NzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocnVubmluZ19wcm9ncmFtKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub3cgPj0gcnVubmluZ19wcm9ncmFtLmVuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGljayh0ID0gcnVubmluZ19wcm9ncmFtLmIsIDEgLSB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5vZGUsIHJ1bm5pbmdfcHJvZ3JhbS5iLCAnZW5kJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXBlbmRpbmdfcHJvZ3JhbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlJ3JlIGRvbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocnVubmluZ19wcm9ncmFtLmIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW50cm8gXHUyMDE0IHdlIGNhbiB0aWR5IHVwIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyX2FuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb3V0cm8gXHUyMDE0IG5lZWRzIHRvIGJlIGNvb3JkaW5hdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghLS1ydW5uaW5nX3Byb2dyYW0uZ3JvdXAucilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bl9hbGwocnVubmluZ19wcm9ncmFtLmdyb3VwLmMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bm5pbmdfcHJvZ3JhbSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobm93ID49IHJ1bm5pbmdfcHJvZ3JhbS5zdGFydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcCA9IG5vdyAtIHJ1bm5pbmdfcHJvZ3JhbS5zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBydW5uaW5nX3Byb2dyYW0uYSArIHJ1bm5pbmdfcHJvZ3JhbS5kICogZWFzaW5nKHAgLyBydW5uaW5nX3Byb2dyYW0uZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGljayh0LCAxIC0gdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuICEhKHJ1bm5pbmdfcHJvZ3JhbSB8fCBwZW5kaW5nX3Byb2dyYW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcnVuKGIpIHtcbiAgICAgICAgICAgIGlmIChpc19mdW5jdGlvbihjb25maWcpKSB7XG4gICAgICAgICAgICAgICAgd2FpdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZyA9IGNvbmZpZyhvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgZ28oYik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBnbyhiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW5kKCkge1xuICAgICAgICAgICAgY2xlYXJfYW5pbWF0aW9uKCk7XG4gICAgICAgICAgICBydW5uaW5nX3Byb2dyYW0gPSBwZW5kaW5nX3Byb2dyYW0gPSBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlX3Byb21pc2UocHJvbWlzZSwgaW5mbykge1xuICAgIGNvbnN0IHRva2VuID0gaW5mby50b2tlbiA9IHt9O1xuICAgIGZ1bmN0aW9uIHVwZGF0ZSh0eXBlLCBpbmRleCwga2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAoaW5mby50b2tlbiAhPT0gdG9rZW4pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGluZm8ucmVzb2x2ZWQgPSB2YWx1ZTtcbiAgICAgICAgbGV0IGNoaWxkX2N0eCA9IGluZm8uY3R4O1xuICAgICAgICBpZiAoa2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNoaWxkX2N0eCA9IGNoaWxkX2N0eC5zbGljZSgpO1xuICAgICAgICAgICAgY2hpbGRfY3R4W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBibG9jayA9IHR5cGUgJiYgKGluZm8uY3VycmVudCA9IHR5cGUpKGNoaWxkX2N0eCk7XG4gICAgICAgIGxldCBuZWVkc19mbHVzaCA9IGZhbHNlO1xuICAgICAgICBpZiAoaW5mby5ibG9jaykge1xuICAgICAgICAgICAgaWYgKGluZm8uYmxvY2tzKSB7XG4gICAgICAgICAgICAgICAgaW5mby5ibG9ja3MuZm9yRWFjaCgoYmxvY2ssIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgIT09IGluZGV4ICYmIGJsb2NrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cF9vdXRyb3MoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25fb3V0KGJsb2NrLCAxLCAxLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZm8uYmxvY2tzW2ldID09PSBibG9jaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZvLmJsb2Nrc1tpXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja19vdXRyb3MoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5mby5ibG9jay5kKDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmxvY2suYygpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbl9pbihibG9jaywgMSk7XG4gICAgICAgICAgICBibG9jay5tKGluZm8ubW91bnQoKSwgaW5mby5hbmNob3IpO1xuICAgICAgICAgICAgbmVlZHNfZmx1c2ggPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGluZm8uYmxvY2sgPSBibG9jaztcbiAgICAgICAgaWYgKGluZm8uYmxvY2tzKVxuICAgICAgICAgICAgaW5mby5ibG9ja3NbaW5kZXhdID0gYmxvY2s7XG4gICAgICAgIGlmIChuZWVkc19mbHVzaCkge1xuICAgICAgICAgICAgZmx1c2goKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXNfcHJvbWlzZShwcm9taXNlKSkge1xuICAgICAgICBjb25zdCBjdXJyZW50X2NvbXBvbmVudCA9IGdldF9jdXJyZW50X2NvbXBvbmVudCgpO1xuICAgICAgICBwcm9taXNlLnRoZW4odmFsdWUgPT4ge1xuICAgICAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KGN1cnJlbnRfY29tcG9uZW50KTtcbiAgICAgICAgICAgIHVwZGF0ZShpbmZvLnRoZW4sIDEsIGluZm8udmFsdWUsIHZhbHVlKTtcbiAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChudWxsKTtcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KGN1cnJlbnRfY29tcG9uZW50KTtcbiAgICAgICAgICAgIHVwZGF0ZShpbmZvLmNhdGNoLCAyLCBpbmZvLmVycm9yLCBlcnJvcik7XG4gICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQobnVsbCk7XG4gICAgICAgICAgICBpZiAoIWluZm8uaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGlmIHdlIHByZXZpb3VzbHkgaGFkIGEgdGhlbi9jYXRjaCBibG9jaywgZGVzdHJveSBpdFxuICAgICAgICBpZiAoaW5mby5jdXJyZW50ICE9PSBpbmZvLnBlbmRpbmcpIHtcbiAgICAgICAgICAgIHVwZGF0ZShpbmZvLnBlbmRpbmcsIDApO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChpbmZvLmN1cnJlbnQgIT09IGluZm8udGhlbikge1xuICAgICAgICAgICAgdXBkYXRlKGluZm8udGhlbiwgMSwgaW5mby52YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpbmZvLnJlc29sdmVkID0gcHJvbWlzZTtcbiAgICB9XG59XG5mdW5jdGlvbiB1cGRhdGVfYXdhaXRfYmxvY2tfYnJhbmNoKGluZm8sIGN0eCwgZGlydHkpIHtcbiAgICBjb25zdCBjaGlsZF9jdHggPSBjdHguc2xpY2UoKTtcbiAgICBjb25zdCB7IHJlc29sdmVkIH0gPSBpbmZvO1xuICAgIGlmIChpbmZvLmN1cnJlbnQgPT09IGluZm8udGhlbikge1xuICAgICAgICBjaGlsZF9jdHhbaW5mby52YWx1ZV0gPSByZXNvbHZlZDtcbiAgICB9XG4gICAgaWYgKGluZm8uY3VycmVudCA9PT0gaW5mby5jYXRjaCkge1xuICAgICAgICBjaGlsZF9jdHhbaW5mby5lcnJvcl0gPSByZXNvbHZlZDtcbiAgICB9XG4gICAgaW5mby5ibG9jay5wKGNoaWxkX2N0eCwgZGlydHkpO1xufVxuXG5mdW5jdGlvbiBkZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApIHtcbiAgICBibG9jay5kKDEpO1xuICAgIGxvb2t1cC5kZWxldGUoYmxvY2sua2V5KTtcbn1cbmZ1bmN0aW9uIG91dHJvX2FuZF9kZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApIHtcbiAgICB0cmFuc2l0aW9uX291dChibG9jaywgMSwgMSwgKCkgPT4ge1xuICAgICAgICBsb29rdXAuZGVsZXRlKGJsb2NrLmtleSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBmaXhfYW5kX2Rlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCkge1xuICAgIGJsb2NrLmYoKTtcbiAgICBkZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApO1xufVxuZnVuY3Rpb24gZml4X2FuZF9vdXRyb19hbmRfZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKSB7XG4gICAgYmxvY2suZigpO1xuICAgIG91dHJvX2FuZF9kZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApO1xufVxuZnVuY3Rpb24gdXBkYXRlX2tleWVkX2VhY2gob2xkX2Jsb2NrcywgZGlydHksIGdldF9rZXksIGR5bmFtaWMsIGN0eCwgbGlzdCwgbG9va3VwLCBub2RlLCBkZXN0cm95LCBjcmVhdGVfZWFjaF9ibG9jaywgbmV4dCwgZ2V0X2NvbnRleHQpIHtcbiAgICBsZXQgbyA9IG9sZF9ibG9ja3MubGVuZ3RoO1xuICAgIGxldCBuID0gbGlzdC5sZW5ndGg7XG4gICAgbGV0IGkgPSBvO1xuICAgIGNvbnN0IG9sZF9pbmRleGVzID0ge307XG4gICAgd2hpbGUgKGktLSlcbiAgICAgICAgb2xkX2luZGV4ZXNbb2xkX2Jsb2Nrc1tpXS5rZXldID0gaTtcbiAgICBjb25zdCBuZXdfYmxvY2tzID0gW107XG4gICAgY29uc3QgbmV3X2xvb2t1cCA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBkZWx0YXMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgdXBkYXRlcyA9IFtdO1xuICAgIGkgPSBuO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgY29uc3QgY2hpbGRfY3R4ID0gZ2V0X2NvbnRleHQoY3R4LCBsaXN0LCBpKTtcbiAgICAgICAgY29uc3Qga2V5ID0gZ2V0X2tleShjaGlsZF9jdHgpO1xuICAgICAgICBsZXQgYmxvY2sgPSBsb29rdXAuZ2V0KGtleSk7XG4gICAgICAgIGlmICghYmxvY2spIHtcbiAgICAgICAgICAgIGJsb2NrID0gY3JlYXRlX2VhY2hfYmxvY2soa2V5LCBjaGlsZF9jdHgpO1xuICAgICAgICAgICAgYmxvY2suYygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGR5bmFtaWMpIHtcbiAgICAgICAgICAgIC8vIGRlZmVyIHVwZGF0ZXMgdW50aWwgYWxsIHRoZSBET00gc2h1ZmZsaW5nIGlzIGRvbmVcbiAgICAgICAgICAgIHVwZGF0ZXMucHVzaCgoKSA9PiBibG9jay5wKGNoaWxkX2N0eCwgZGlydHkpKTtcbiAgICAgICAgfVxuICAgICAgICBuZXdfbG9va3VwLnNldChrZXksIG5ld19ibG9ja3NbaV0gPSBibG9jayk7XG4gICAgICAgIGlmIChrZXkgaW4gb2xkX2luZGV4ZXMpXG4gICAgICAgICAgICBkZWx0YXMuc2V0KGtleSwgTWF0aC5hYnMoaSAtIG9sZF9pbmRleGVzW2tleV0pKTtcbiAgICB9XG4gICAgY29uc3Qgd2lsbF9tb3ZlID0gbmV3IFNldCgpO1xuICAgIGNvbnN0IGRpZF9tb3ZlID0gbmV3IFNldCgpO1xuICAgIGZ1bmN0aW9uIGluc2VydChibG9jaykge1xuICAgICAgICB0cmFuc2l0aW9uX2luKGJsb2NrLCAxKTtcbiAgICAgICAgYmxvY2subShub2RlLCBuZXh0KTtcbiAgICAgICAgbG9va3VwLnNldChibG9jay5rZXksIGJsb2NrKTtcbiAgICAgICAgbmV4dCA9IGJsb2NrLmZpcnN0O1xuICAgICAgICBuLS07XG4gICAgfVxuICAgIHdoaWxlIChvICYmIG4pIHtcbiAgICAgICAgY29uc3QgbmV3X2Jsb2NrID0gbmV3X2Jsb2Nrc1tuIC0gMV07XG4gICAgICAgIGNvbnN0IG9sZF9ibG9jayA9IG9sZF9ibG9ja3NbbyAtIDFdO1xuICAgICAgICBjb25zdCBuZXdfa2V5ID0gbmV3X2Jsb2NrLmtleTtcbiAgICAgICAgY29uc3Qgb2xkX2tleSA9IG9sZF9ibG9jay5rZXk7XG4gICAgICAgIGlmIChuZXdfYmxvY2sgPT09IG9sZF9ibG9jaykge1xuICAgICAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgICAgICAgbmV4dCA9IG5ld19ibG9jay5maXJzdDtcbiAgICAgICAgICAgIG8tLTtcbiAgICAgICAgICAgIG4tLTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghbmV3X2xvb2t1cC5oYXMob2xkX2tleSkpIHtcbiAgICAgICAgICAgIC8vIHJlbW92ZSBvbGQgYmxvY2tcbiAgICAgICAgICAgIGRlc3Ryb3kob2xkX2Jsb2NrLCBsb29rdXApO1xuICAgICAgICAgICAgby0tO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFsb29rdXAuaGFzKG5ld19rZXkpIHx8IHdpbGxfbW92ZS5oYXMobmV3X2tleSkpIHtcbiAgICAgICAgICAgIGluc2VydChuZXdfYmxvY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRpZF9tb3ZlLmhhcyhvbGRfa2V5KSkge1xuICAgICAgICAgICAgby0tO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRlbHRhcy5nZXQobmV3X2tleSkgPiBkZWx0YXMuZ2V0KG9sZF9rZXkpKSB7XG4gICAgICAgICAgICBkaWRfbW92ZS5hZGQobmV3X2tleSk7XG4gICAgICAgICAgICBpbnNlcnQobmV3X2Jsb2NrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHdpbGxfbW92ZS5hZGQob2xkX2tleSk7XG4gICAgICAgICAgICBvLS07XG4gICAgICAgIH1cbiAgICB9XG4gICAgd2hpbGUgKG8tLSkge1xuICAgICAgICBjb25zdCBvbGRfYmxvY2sgPSBvbGRfYmxvY2tzW29dO1xuICAgICAgICBpZiAoIW5ld19sb29rdXAuaGFzKG9sZF9ibG9jay5rZXkpKVxuICAgICAgICAgICAgZGVzdHJveShvbGRfYmxvY2ssIGxvb2t1cCk7XG4gICAgfVxuICAgIHdoaWxlIChuKVxuICAgICAgICBpbnNlcnQobmV3X2Jsb2Nrc1tuIC0gMV0pO1xuICAgIHJ1bl9hbGwodXBkYXRlcyk7XG4gICAgcmV0dXJuIG5ld19ibG9ja3M7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZV9lYWNoX2tleXMoY3R4LCBsaXN0LCBnZXRfY29udGV4dCwgZ2V0X2tleSkge1xuICAgIGNvbnN0IGtleXMgPSBuZXcgU2V0KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGdldF9rZXkoZ2V0X2NvbnRleHQoY3R4LCBsaXN0LCBpKSk7XG4gICAgICAgIGlmIChrZXlzLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBoYXZlIGR1cGxpY2F0ZSBrZXlzIGluIGEga2V5ZWQgZWFjaCcpO1xuICAgICAgICB9XG4gICAgICAgIGtleXMuYWRkKGtleSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRfc3ByZWFkX3VwZGF0ZShsZXZlbHMsIHVwZGF0ZXMpIHtcbiAgICBjb25zdCB1cGRhdGUgPSB7fTtcbiAgICBjb25zdCB0b19udWxsX291dCA9IHt9O1xuICAgIGNvbnN0IGFjY291bnRlZF9mb3IgPSB7ICQkc2NvcGU6IDEgfTtcbiAgICBsZXQgaSA9IGxldmVscy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgICBjb25zdCBvID0gbGV2ZWxzW2ldO1xuICAgICAgICBjb25zdCBuID0gdXBkYXRlc1tpXTtcbiAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG8pIHtcbiAgICAgICAgICAgICAgICBpZiAoIShrZXkgaW4gbikpXG4gICAgICAgICAgICAgICAgICAgIHRvX251bGxfb3V0W2tleV0gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbikge1xuICAgICAgICAgICAgICAgIGlmICghYWNjb3VudGVkX2ZvcltrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVtrZXldID0gbltrZXldO1xuICAgICAgICAgICAgICAgICAgICBhY2NvdW50ZWRfZm9yW2tleV0gPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldmVsc1tpXSA9IG47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvKSB7XG4gICAgICAgICAgICAgICAgYWNjb3VudGVkX2ZvcltrZXldID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0b19udWxsX291dCkge1xuICAgICAgICBpZiAoIShrZXkgaW4gdXBkYXRlKSlcbiAgICAgICAgICAgIHVwZGF0ZVtrZXldID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gdXBkYXRlO1xufVxuZnVuY3Rpb24gZ2V0X3NwcmVhZF9vYmplY3Qoc3ByZWFkX3Byb3BzKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBzcHJlYWRfcHJvcHMgPT09ICdvYmplY3QnICYmIHNwcmVhZF9wcm9wcyAhPT0gbnVsbCA/IHNwcmVhZF9wcm9wcyA6IHt9O1xufVxuXG5jb25zdCBfYm9vbGVhbl9hdHRyaWJ1dGVzID0gW1xuICAgICdhbGxvd2Z1bGxzY3JlZW4nLFxuICAgICdhbGxvd3BheW1lbnRyZXF1ZXN0JyxcbiAgICAnYXN5bmMnLFxuICAgICdhdXRvZm9jdXMnLFxuICAgICdhdXRvcGxheScsXG4gICAgJ2NoZWNrZWQnLFxuICAgICdjb250cm9scycsXG4gICAgJ2RlZmF1bHQnLFxuICAgICdkZWZlcicsXG4gICAgJ2Rpc2FibGVkJyxcbiAgICAnZm9ybW5vdmFsaWRhdGUnLFxuICAgICdoaWRkZW4nLFxuICAgICdpbmVydCcsXG4gICAgJ2lzbWFwJyxcbiAgICAnbG9vcCcsXG4gICAgJ211bHRpcGxlJyxcbiAgICAnbXV0ZWQnLFxuICAgICdub21vZHVsZScsXG4gICAgJ25vdmFsaWRhdGUnLFxuICAgICdvcGVuJyxcbiAgICAncGxheXNpbmxpbmUnLFxuICAgICdyZWFkb25seScsXG4gICAgJ3JlcXVpcmVkJyxcbiAgICAncmV2ZXJzZWQnLFxuICAgICdzZWxlY3RlZCdcbl07XG4vKipcbiAqIExpc3Qgb2YgSFRNTCBib29sZWFuIGF0dHJpYnV0ZXMgKGUuZy4gYDxpbnB1dCBkaXNhYmxlZD5gKS5cbiAqIFNvdXJjZTogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW5kaWNlcy5odG1sXG4gKi9cbmNvbnN0IGJvb2xlYW5fYXR0cmlidXRlcyA9IG5ldyBTZXQoWy4uLl9ib29sZWFuX2F0dHJpYnV0ZXNdKTtcblxuLyoqIHJlZ2V4IG9mIGFsbCBodG1sIHZvaWQgZWxlbWVudCBuYW1lcyAqL1xuY29uc3Qgdm9pZF9lbGVtZW50X25hbWVzID0gL14oPzphcmVhfGJhc2V8YnJ8Y29sfGNvbW1hbmR8ZW1iZWR8aHJ8aW1nfGlucHV0fGtleWdlbnxsaW5rfG1ldGF8cGFyYW18c291cmNlfHRyYWNrfHdicikkLztcbmZ1bmN0aW9uIGlzX3ZvaWQobmFtZSkge1xuICAgIHJldHVybiB2b2lkX2VsZW1lbnRfbmFtZXMudGVzdChuYW1lKSB8fCBuYW1lLnRvTG93ZXJDYXNlKCkgPT09ICchZG9jdHlwZSc7XG59XG5cbmNvbnN0IGludmFsaWRfYXR0cmlidXRlX25hbWVfY2hhcmFjdGVyID0gL1tcXHMnXCI+Lz1cXHV7RkREMH0tXFx1e0ZERUZ9XFx1e0ZGRkV9XFx1e0ZGRkZ9XFx1ezFGRkZFfVxcdXsxRkZGRn1cXHV7MkZGRkV9XFx1ezJGRkZGfVxcdXszRkZGRX1cXHV7M0ZGRkZ9XFx1ezRGRkZFfVxcdXs0RkZGRn1cXHV7NUZGRkV9XFx1ezVGRkZGfVxcdXs2RkZGRX1cXHV7NkZGRkZ9XFx1ezdGRkZFfVxcdXs3RkZGRn1cXHV7OEZGRkV9XFx1ezhGRkZGfVxcdXs5RkZGRX1cXHV7OUZGRkZ9XFx1e0FGRkZFfVxcdXtBRkZGRn1cXHV7QkZGRkV9XFx1e0JGRkZGfVxcdXtDRkZGRX1cXHV7Q0ZGRkZ9XFx1e0RGRkZFfVxcdXtERkZGRn1cXHV7RUZGRkV9XFx1e0VGRkZGfVxcdXtGRkZGRX1cXHV7RkZGRkZ9XFx1ezEwRkZGRX1cXHV7MTBGRkZGfV0vdTtcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3N5bnRheC5odG1sI2F0dHJpYnV0ZXMtMlxuLy8gaHR0cHM6Ly9pbmZyYS5zcGVjLndoYXR3Zy5vcmcvI25vbmNoYXJhY3RlclxuZnVuY3Rpb24gc3ByZWFkKGFyZ3MsIGF0dHJzX3RvX2FkZCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBPYmplY3QuYXNzaWduKHt9LCAuLi5hcmdzKTtcbiAgICBpZiAoYXR0cnNfdG9fYWRkKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzZXNfdG9fYWRkID0gYXR0cnNfdG9fYWRkLmNsYXNzZXM7XG4gICAgICAgIGNvbnN0IHN0eWxlc190b19hZGQgPSBhdHRyc190b19hZGQuc3R5bGVzO1xuICAgICAgICBpZiAoY2xhc3Nlc190b19hZGQpIHtcbiAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzLmNsYXNzID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLmNsYXNzID0gY2xhc3Nlc190b19hZGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLmNsYXNzICs9ICcgJyArIGNsYXNzZXNfdG9fYWRkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzdHlsZXNfdG9fYWRkKSB7XG4gICAgICAgICAgICBpZiAoYXR0cmlidXRlcy5zdHlsZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5zdHlsZSA9IHN0eWxlX29iamVjdF90b19zdHJpbmcoc3R5bGVzX3RvX2FkZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLnN0eWxlID0gc3R5bGVfb2JqZWN0X3RvX3N0cmluZyhtZXJnZV9zc3Jfc3R5bGVzKGF0dHJpYnV0ZXMuc3R5bGUsIHN0eWxlc190b19hZGQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgc3RyID0gJyc7XG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgaWYgKGludmFsaWRfYXR0cmlidXRlX25hbWVfY2hhcmFjdGVyLnRlc3QobmFtZSkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IHZhbHVlID0gYXR0cmlidXRlc1tuYW1lXTtcbiAgICAgICAgaWYgKHZhbHVlID09PSB0cnVlKVxuICAgICAgICAgICAgc3RyICs9ICcgJyArIG5hbWU7XG4gICAgICAgIGVsc2UgaWYgKGJvb2xlYW5fYXR0cmlidXRlcy5oYXMobmFtZS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlKVxuICAgICAgICAgICAgICAgIHN0ciArPSAnICcgKyBuYW1lO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHN0ciArPSBgICR7bmFtZX09XCIke3ZhbHVlfVwiYDtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzdHI7XG59XG5mdW5jdGlvbiBtZXJnZV9zc3Jfc3R5bGVzKHN0eWxlX2F0dHJpYnV0ZSwgc3R5bGVfZGlyZWN0aXZlKSB7XG4gICAgY29uc3Qgc3R5bGVfb2JqZWN0ID0ge307XG4gICAgZm9yIChjb25zdCBpbmRpdmlkdWFsX3N0eWxlIG9mIHN0eWxlX2F0dHJpYnV0ZS5zcGxpdCgnOycpKSB7XG4gICAgICAgIGNvbnN0IGNvbG9uX2luZGV4ID0gaW5kaXZpZHVhbF9zdHlsZS5pbmRleE9mKCc6Jyk7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBpbmRpdmlkdWFsX3N0eWxlLnNsaWNlKDAsIGNvbG9uX2luZGV4KS50cmltKCk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gaW5kaXZpZHVhbF9zdHlsZS5zbGljZShjb2xvbl9pbmRleCArIDEpLnRyaW0oKTtcbiAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIHN0eWxlX29iamVjdFtuYW1lXSA9IHZhbHVlO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG5hbWUgaW4gc3R5bGVfZGlyZWN0aXZlKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gc3R5bGVfZGlyZWN0aXZlW25hbWVdO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHN0eWxlX29iamVjdFtuYW1lXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIHN0eWxlX29iamVjdFtuYW1lXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3R5bGVfb2JqZWN0O1xufVxuY29uc3QgQVRUUl9SRUdFWCA9IC9bJlwiXS9nO1xuY29uc3QgQ09OVEVOVF9SRUdFWCA9IC9bJjxdL2c7XG4vKipcbiAqIE5vdGU6IHRoaXMgbWV0aG9kIGlzIHBlcmZvcm1hbmNlIHNlbnNpdGl2ZSBhbmQgaGFzIGJlZW4gb3B0aW1pemVkXG4gKiBodHRwczovL2dpdGh1Yi5jb20vc3ZlbHRlanMvc3ZlbHRlL3B1bGwvNTcwMVxuICovXG5mdW5jdGlvbiBlc2NhcGUodmFsdWUsIGlzX2F0dHIgPSBmYWxzZSkge1xuICAgIGNvbnN0IHN0ciA9IFN0cmluZyh2YWx1ZSk7XG4gICAgY29uc3QgcGF0dGVybiA9IGlzX2F0dHIgPyBBVFRSX1JFR0VYIDogQ09OVEVOVF9SRUdFWDtcbiAgICBwYXR0ZXJuLmxhc3RJbmRleCA9IDA7XG4gICAgbGV0IGVzY2FwZWQgPSAnJztcbiAgICBsZXQgbGFzdCA9IDA7XG4gICAgd2hpbGUgKHBhdHRlcm4udGVzdChzdHIpKSB7XG4gICAgICAgIGNvbnN0IGkgPSBwYXR0ZXJuLmxhc3RJbmRleCAtIDE7XG4gICAgICAgIGNvbnN0IGNoID0gc3RyW2ldO1xuICAgICAgICBlc2NhcGVkICs9IHN0ci5zdWJzdHJpbmcobGFzdCwgaSkgKyAoY2ggPT09ICcmJyA/ICcmYW1wOycgOiAoY2ggPT09ICdcIicgPyAnJnF1b3Q7JyA6ICcmbHQ7JykpO1xuICAgICAgICBsYXN0ID0gaSArIDE7XG4gICAgfVxuICAgIHJldHVybiBlc2NhcGVkICsgc3RyLnN1YnN0cmluZyhsYXN0KTtcbn1cbmZ1bmN0aW9uIGVzY2FwZV9hdHRyaWJ1dGVfdmFsdWUodmFsdWUpIHtcbiAgICAvLyBrZWVwIGJvb2xlYW5zLCBudWxsLCBhbmQgdW5kZWZpbmVkIGZvciB0aGUgc2FrZSBvZiBgc3ByZWFkYFxuICAgIGNvbnN0IHNob3VsZF9lc2NhcGUgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8ICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKTtcbiAgICByZXR1cm4gc2hvdWxkX2VzY2FwZSA/IGVzY2FwZSh2YWx1ZSwgdHJ1ZSkgOiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGVzY2FwZV9vYmplY3Qob2JqKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gZXNjYXBlX2F0dHJpYnV0ZV92YWx1ZShvYmpba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBlYWNoKGl0ZW1zLCBmbikge1xuICAgIGxldCBzdHIgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHN0ciArPSBmbihpdGVtc1tpXSwgaSk7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG59XG5jb25zdCBtaXNzaW5nX2NvbXBvbmVudCA9IHtcbiAgICAkJHJlbmRlcjogKCkgPT4gJydcbn07XG5mdW5jdGlvbiB2YWxpZGF0ZV9jb21wb25lbnQoY29tcG9uZW50LCBuYW1lKSB7XG4gICAgaWYgKCFjb21wb25lbnQgfHwgIWNvbXBvbmVudC4kJHJlbmRlcikge1xuICAgICAgICBpZiAobmFtZSA9PT0gJ3N2ZWx0ZTpjb21wb25lbnQnKVxuICAgICAgICAgICAgbmFtZSArPSAnIHRoaXM9ey4uLn0nO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYDwke25hbWV9PiBpcyBub3QgYSB2YWxpZCBTU1IgY29tcG9uZW50LiBZb3UgbWF5IG5lZWQgdG8gcmV2aWV3IHlvdXIgYnVpbGQgY29uZmlnIHRvIGVuc3VyZSB0aGF0IGRlcGVuZGVuY2llcyBhcmUgY29tcGlsZWQsIHJhdGhlciB0aGFuIGltcG9ydGVkIGFzIHByZS1jb21waWxlZCBtb2R1bGVzLiBPdGhlcndpc2UgeW91IG1heSBuZWVkIHRvIGZpeCBhIDwke25hbWV9Pi5gKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cbmZ1bmN0aW9uIGRlYnVnKGZpbGUsIGxpbmUsIGNvbHVtbiwgdmFsdWVzKSB7XG4gICAgY29uc29sZS5sb2coYHtAZGVidWd9ICR7ZmlsZSA/IGZpbGUgKyAnICcgOiAnJ30oJHtsaW5lfToke2NvbHVtbn0pYCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIHJldHVybiAnJztcbn1cbmxldCBvbl9kZXN0cm95O1xuZnVuY3Rpb24gY3JlYXRlX3Nzcl9jb21wb25lbnQoZm4pIHtcbiAgICBmdW5jdGlvbiAkJHJlbmRlcihyZXN1bHQsIHByb3BzLCBiaW5kaW5ncywgc2xvdHMsIGNvbnRleHQpIHtcbiAgICAgICAgY29uc3QgcGFyZW50X2NvbXBvbmVudCA9IGN1cnJlbnRfY29tcG9uZW50O1xuICAgICAgICBjb25zdCAkJCA9IHtcbiAgICAgICAgICAgIG9uX2Rlc3Ryb3ksXG4gICAgICAgICAgICBjb250ZXh0OiBuZXcgTWFwKGNvbnRleHQgfHwgKHBhcmVudF9jb21wb25lbnQgPyBwYXJlbnRfY29tcG9uZW50LiQkLmNvbnRleHQgOiBbXSkpLFxuICAgICAgICAgICAgLy8gdGhlc2Ugd2lsbCBiZSBpbW1lZGlhdGVseSBkaXNjYXJkZWRcbiAgICAgICAgICAgIG9uX21vdW50OiBbXSxcbiAgICAgICAgICAgIGJlZm9yZV91cGRhdGU6IFtdLFxuICAgICAgICAgICAgYWZ0ZXJfdXBkYXRlOiBbXSxcbiAgICAgICAgICAgIGNhbGxiYWNrczogYmxhbmtfb2JqZWN0KClcbiAgICAgICAgfTtcbiAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KHsgJCQgfSk7XG4gICAgICAgIGNvbnN0IGh0bWwgPSBmbihyZXN1bHQsIHByb3BzLCBiaW5kaW5ncywgc2xvdHMpO1xuICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQocGFyZW50X2NvbXBvbmVudCk7XG4gICAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICByZW5kZXI6IChwcm9wcyA9IHt9LCB7ICQkc2xvdHMgPSB7fSwgY29udGV4dCA9IG5ldyBNYXAoKSB9ID0ge30pID0+IHtcbiAgICAgICAgICAgIG9uX2Rlc3Ryb3kgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHsgdGl0bGU6ICcnLCBoZWFkOiAnJywgY3NzOiBuZXcgU2V0KCkgfTtcbiAgICAgICAgICAgIGNvbnN0IGh0bWwgPSAkJHJlbmRlcihyZXN1bHQsIHByb3BzLCB7fSwgJCRzbG90cywgY29udGV4dCk7XG4gICAgICAgICAgICBydW5fYWxsKG9uX2Rlc3Ryb3kpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBodG1sLFxuICAgICAgICAgICAgICAgIGNzczoge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBBcnJheS5mcm9tKHJlc3VsdC5jc3MpLm1hcChjc3MgPT4gY3NzLmNvZGUpLmpvaW4oJ1xcbicpLFxuICAgICAgICAgICAgICAgICAgICBtYXA6IG51bGwgLy8gVE9ET1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaGVhZDogcmVzdWx0LnRpdGxlICsgcmVzdWx0LmhlYWRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgICQkcmVuZGVyXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGFkZF9hdHRyaWJ1dGUobmFtZSwgdmFsdWUsIGJvb2xlYW4pIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCAoYm9vbGVhbiAmJiAhdmFsdWUpKVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgY29uc3QgYXNzaWdubWVudCA9IChib29sZWFuICYmIHZhbHVlID09PSB0cnVlKSA/ICcnIDogYD1cIiR7ZXNjYXBlKHZhbHVlLCB0cnVlKX1cImA7XG4gICAgcmV0dXJuIGAgJHtuYW1lfSR7YXNzaWdubWVudH1gO1xufVxuZnVuY3Rpb24gYWRkX2NsYXNzZXMoY2xhc3Nlcykge1xuICAgIHJldHVybiBjbGFzc2VzID8gYCBjbGFzcz1cIiR7Y2xhc3Nlc31cImAgOiAnJztcbn1cbmZ1bmN0aW9uIHN0eWxlX29iamVjdF90b19zdHJpbmcoc3R5bGVfb2JqZWN0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHN0eWxlX29iamVjdClcbiAgICAgICAgLmZpbHRlcihrZXkgPT4gc3R5bGVfb2JqZWN0W2tleV0pXG4gICAgICAgIC5tYXAoa2V5ID0+IGAke2tleX06ICR7ZXNjYXBlX2F0dHJpYnV0ZV92YWx1ZShzdHlsZV9vYmplY3Rba2V5XSl9O2ApXG4gICAgICAgIC5qb2luKCcgJyk7XG59XG5mdW5jdGlvbiBhZGRfc3R5bGVzKHN0eWxlX29iamVjdCkge1xuICAgIGNvbnN0IHN0eWxlcyA9IHN0eWxlX29iamVjdF90b19zdHJpbmcoc3R5bGVfb2JqZWN0KTtcbiAgICByZXR1cm4gc3R5bGVzID8gYCBzdHlsZT1cIiR7c3R5bGVzfVwiYCA6ICcnO1xufVxuXG5mdW5jdGlvbiBiaW5kKGNvbXBvbmVudCwgbmFtZSwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBpbmRleCA9IGNvbXBvbmVudC4kJC5wcm9wc1tuYW1lXTtcbiAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb21wb25lbnQuJCQuYm91bmRbaW5kZXhdID0gY2FsbGJhY2s7XG4gICAgICAgIGNhbGxiYWNrKGNvbXBvbmVudC4kJC5jdHhbaW5kZXhdKTtcbiAgICB9XG59XG5mdW5jdGlvbiBjcmVhdGVfY29tcG9uZW50KGJsb2NrKSB7XG4gICAgYmxvY2sgJiYgYmxvY2suYygpO1xufVxuZnVuY3Rpb24gY2xhaW1fY29tcG9uZW50KGJsb2NrLCBwYXJlbnRfbm9kZXMpIHtcbiAgICBibG9jayAmJiBibG9jay5sKHBhcmVudF9ub2Rlcyk7XG59XG5mdW5jdGlvbiBtb3VudF9jb21wb25lbnQoY29tcG9uZW50LCB0YXJnZXQsIGFuY2hvciwgY3VzdG9tRWxlbWVudCkge1xuICAgIGNvbnN0IHsgZnJhZ21lbnQsIGFmdGVyX3VwZGF0ZSB9ID0gY29tcG9uZW50LiQkO1xuICAgIGZyYWdtZW50ICYmIGZyYWdtZW50Lm0odGFyZ2V0LCBhbmNob3IpO1xuICAgIGlmICghY3VzdG9tRWxlbWVudCkge1xuICAgICAgICAvLyBvbk1vdW50IGhhcHBlbnMgYmVmb3JlIHRoZSBpbml0aWFsIGFmdGVyVXBkYXRlXG4gICAgICAgIGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3X29uX2Rlc3Ryb3kgPSBjb21wb25lbnQuJCQub25fbW91bnQubWFwKHJ1bikuZmlsdGVyKGlzX2Z1bmN0aW9uKTtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBjb21wb25lbnQgd2FzIGRlc3Ryb3llZCBpbW1lZGlhdGVseVxuICAgICAgICAgICAgLy8gaXQgd2lsbCB1cGRhdGUgdGhlIGAkJC5vbl9kZXN0cm95YCByZWZlcmVuY2UgdG8gYG51bGxgLlxuICAgICAgICAgICAgLy8gdGhlIGRlc3RydWN0dXJlZCBvbl9kZXN0cm95IG1heSBzdGlsbCByZWZlcmVuY2UgdG8gdGhlIG9sZCBhcnJheVxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC4kJC5vbl9kZXN0cm95KSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LiQkLm9uX2Rlc3Ryb3kucHVzaCguLi5uZXdfb25fZGVzdHJveSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBFZGdlIGNhc2UgLSBjb21wb25lbnQgd2FzIGRlc3Ryb3llZCBpbW1lZGlhdGVseSxcbiAgICAgICAgICAgICAgICAvLyBtb3N0IGxpa2VseSBhcyBhIHJlc3VsdCBvZiBhIGJpbmRpbmcgaW5pdGlhbGlzaW5nXG4gICAgICAgICAgICAgICAgcnVuX2FsbChuZXdfb25fZGVzdHJveSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb21wb25lbnQuJCQub25fbW91bnQgPSBbXTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFmdGVyX3VwZGF0ZS5mb3JFYWNoKGFkZF9yZW5kZXJfY2FsbGJhY2spO1xufVxuZnVuY3Rpb24gZGVzdHJveV9jb21wb25lbnQoY29tcG9uZW50LCBkZXRhY2hpbmcpIHtcbiAgICBjb25zdCAkJCA9IGNvbXBvbmVudC4kJDtcbiAgICBpZiAoJCQuZnJhZ21lbnQgIT09IG51bGwpIHtcbiAgICAgICAgZmx1c2hfcmVuZGVyX2NhbGxiYWNrcygkJC5hZnRlcl91cGRhdGUpO1xuICAgICAgICBydW5fYWxsKCQkLm9uX2Rlc3Ryb3kpO1xuICAgICAgICAkJC5mcmFnbWVudCAmJiAkJC5mcmFnbWVudC5kKGRldGFjaGluZyk7XG4gICAgICAgIC8vIFRPRE8gbnVsbCBvdXQgb3RoZXIgcmVmcywgaW5jbHVkaW5nIGNvbXBvbmVudC4kJCAoYnV0IG5lZWQgdG9cbiAgICAgICAgLy8gcHJlc2VydmUgZmluYWwgc3RhdGU/KVxuICAgICAgICAkJC5vbl9kZXN0cm95ID0gJCQuZnJhZ21lbnQgPSBudWxsO1xuICAgICAgICAkJC5jdHggPSBbXTtcbiAgICB9XG59XG5mdW5jdGlvbiBtYWtlX2RpcnR5KGNvbXBvbmVudCwgaSkge1xuICAgIGlmIChjb21wb25lbnQuJCQuZGlydHlbMF0gPT09IC0xKSB7XG4gICAgICAgIGRpcnR5X2NvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgICAgICBzY2hlZHVsZV91cGRhdGUoKTtcbiAgICAgICAgY29tcG9uZW50LiQkLmRpcnR5LmZpbGwoMCk7XG4gICAgfVxuICAgIGNvbXBvbmVudC4kJC5kaXJ0eVsoaSAvIDMxKSB8IDBdIHw9ICgxIDw8IChpICUgMzEpKTtcbn1cbmZ1bmN0aW9uIGluaXQoY29tcG9uZW50LCBvcHRpb25zLCBpbnN0YW5jZSwgY3JlYXRlX2ZyYWdtZW50LCBub3RfZXF1YWwsIHByb3BzLCBhcHBlbmRfc3R5bGVzLCBkaXJ0eSA9IFstMV0pIHtcbiAgICBjb25zdCBwYXJlbnRfY29tcG9uZW50ID0gY3VycmVudF9jb21wb25lbnQ7XG4gICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgY29uc3QgJCQgPSBjb21wb25lbnQuJCQgPSB7XG4gICAgICAgIGZyYWdtZW50OiBudWxsLFxuICAgICAgICBjdHg6IFtdLFxuICAgICAgICAvLyBzdGF0ZVxuICAgICAgICBwcm9wcyxcbiAgICAgICAgdXBkYXRlOiBub29wLFxuICAgICAgICBub3RfZXF1YWwsXG4gICAgICAgIGJvdW5kOiBibGFua19vYmplY3QoKSxcbiAgICAgICAgLy8gbGlmZWN5Y2xlXG4gICAgICAgIG9uX21vdW50OiBbXSxcbiAgICAgICAgb25fZGVzdHJveTogW10sXG4gICAgICAgIG9uX2Rpc2Nvbm5lY3Q6IFtdLFxuICAgICAgICBiZWZvcmVfdXBkYXRlOiBbXSxcbiAgICAgICAgYWZ0ZXJfdXBkYXRlOiBbXSxcbiAgICAgICAgY29udGV4dDogbmV3IE1hcChvcHRpb25zLmNvbnRleHQgfHwgKHBhcmVudF9jb21wb25lbnQgPyBwYXJlbnRfY29tcG9uZW50LiQkLmNvbnRleHQgOiBbXSkpLFxuICAgICAgICAvLyBldmVyeXRoaW5nIGVsc2VcbiAgICAgICAgY2FsbGJhY2tzOiBibGFua19vYmplY3QoKSxcbiAgICAgICAgZGlydHksXG4gICAgICAgIHNraXBfYm91bmQ6IGZhbHNlLFxuICAgICAgICByb290OiBvcHRpb25zLnRhcmdldCB8fCBwYXJlbnRfY29tcG9uZW50LiQkLnJvb3RcbiAgICB9O1xuICAgIGFwcGVuZF9zdHlsZXMgJiYgYXBwZW5kX3N0eWxlcygkJC5yb290KTtcbiAgICBsZXQgcmVhZHkgPSBmYWxzZTtcbiAgICAkJC5jdHggPSBpbnN0YW5jZVxuICAgICAgICA/IGluc3RhbmNlKGNvbXBvbmVudCwgb3B0aW9ucy5wcm9wcyB8fCB7fSwgKGksIHJldCwgLi4ucmVzdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSByZXN0Lmxlbmd0aCA/IHJlc3RbMF0gOiByZXQ7XG4gICAgICAgICAgICBpZiAoJCQuY3R4ICYmIG5vdF9lcXVhbCgkJC5jdHhbaV0sICQkLmN0eFtpXSA9IHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghJCQuc2tpcF9ib3VuZCAmJiAkJC5ib3VuZFtpXSlcbiAgICAgICAgICAgICAgICAgICAgJCQuYm91bmRbaV0odmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmIChyZWFkeSlcbiAgICAgICAgICAgICAgICAgICAgbWFrZV9kaXJ0eShjb21wb25lbnQsIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSlcbiAgICAgICAgOiBbXTtcbiAgICAkJC51cGRhdGUoKTtcbiAgICByZWFkeSA9IHRydWU7XG4gICAgcnVuX2FsbCgkJC5iZWZvcmVfdXBkYXRlKTtcbiAgICAvLyBgZmFsc2VgIGFzIGEgc3BlY2lhbCBjYXNlIG9mIG5vIERPTSBjb21wb25lbnRcbiAgICAkJC5mcmFnbWVudCA9IGNyZWF0ZV9mcmFnbWVudCA/IGNyZWF0ZV9mcmFnbWVudCgkJC5jdHgpIDogZmFsc2U7XG4gICAgaWYgKG9wdGlvbnMudGFyZ2V0KSB7XG4gICAgICAgIGlmIChvcHRpb25zLmh5ZHJhdGUpIHtcbiAgICAgICAgICAgIHN0YXJ0X2h5ZHJhdGluZygpO1xuICAgICAgICAgICAgY29uc3Qgbm9kZXMgPSBjaGlsZHJlbihvcHRpb25zLnRhcmdldCk7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuICAgICAgICAgICAgJCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQubChub2Rlcyk7XG4gICAgICAgICAgICBub2Rlcy5mb3JFYWNoKGRldGFjaCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuICAgICAgICAgICAgJCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQuYygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmludHJvKVxuICAgICAgICAgICAgdHJhbnNpdGlvbl9pbihjb21wb25lbnQuJCQuZnJhZ21lbnQpO1xuICAgICAgICBtb3VudF9jb21wb25lbnQoY29tcG9uZW50LCBvcHRpb25zLnRhcmdldCwgb3B0aW9ucy5hbmNob3IsIG9wdGlvbnMuY3VzdG9tRWxlbWVudCk7XG4gICAgICAgIGVuZF9oeWRyYXRpbmcoKTtcbiAgICAgICAgZmx1c2goKTtcbiAgICB9XG4gICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KHBhcmVudF9jb21wb25lbnQpO1xufVxubGV0IFN2ZWx0ZUVsZW1lbnQ7XG5pZiAodHlwZW9mIEhUTUxFbGVtZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgU3ZlbHRlRWxlbWVudCA9IGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgb25fbW91bnQgfSA9IHRoaXMuJCQ7XG4gICAgICAgICAgICB0aGlzLiQkLm9uX2Rpc2Nvbm5lY3QgPSBvbl9tb3VudC5tYXAocnVuKS5maWx0ZXIoaXNfZnVuY3Rpb24pO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0b2RvOiBpbXByb3ZlIHR5cGluZ3NcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuJCQuc2xvdHRlZCkge1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdG9kbzogaW1wcm92ZSB0eXBpbmdzXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLiQkLnNsb3R0ZWRba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGF0dHIsIF9vbGRWYWx1ZSwgbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXNbYXR0cl0gPSBuZXdWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgICAgIHJ1bl9hbGwodGhpcy4kJC5vbl9kaXNjb25uZWN0KTtcbiAgICAgICAgfVxuICAgICAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgICAgIGRlc3Ryb3lfY29tcG9uZW50KHRoaXMsIDEpO1xuICAgICAgICAgICAgdGhpcy4kZGVzdHJveSA9IG5vb3A7XG4gICAgICAgIH1cbiAgICAgICAgJG9uKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAvLyBUT0RPIHNob3VsZCB0aGlzIGRlbGVnYXRlIHRvIGFkZEV2ZW50TGlzdGVuZXI/XG4gICAgICAgICAgICBpZiAoIWlzX2Z1bmN0aW9uKGNhbGxiYWNrKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBub29wO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gKHRoaXMuJCQuY2FsbGJhY2tzW3R5cGVdIHx8ICh0aGlzLiQkLmNhbGxiYWNrc1t0eXBlXSA9IFtdKSk7XG4gICAgICAgICAgICBjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gY2FsbGJhY2tzLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICAkc2V0KCQkcHJvcHMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiQkc2V0ICYmICFpc19lbXB0eSgkJHByb3BzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJCQuc2tpcF9ib3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kJHNldCgkJHByb3BzKTtcbiAgICAgICAgICAgICAgICB0aGlzLiQkLnNraXBfYm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59XG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIFN2ZWx0ZSBjb21wb25lbnRzLiBVc2VkIHdoZW4gZGV2PWZhbHNlLlxuICovXG5jbGFzcyBTdmVsdGVDb21wb25lbnQge1xuICAgICRkZXN0cm95KCkge1xuICAgICAgICBkZXN0cm95X2NvbXBvbmVudCh0aGlzLCAxKTtcbiAgICAgICAgdGhpcy4kZGVzdHJveSA9IG5vb3A7XG4gICAgfVxuICAgICRvbih0eXBlLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAoIWlzX2Z1bmN0aW9uKGNhbGxiYWNrKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5vb3A7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gKHRoaXMuJCQuY2FsbGJhY2tzW3R5cGVdIHx8ICh0aGlzLiQkLmNhbGxiYWNrc1t0eXBlXSA9IFtdKSk7XG4gICAgICAgIGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gY2FsbGJhY2tzLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSlcbiAgICAgICAgICAgICAgICBjYWxsYmFja3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgJHNldCgkJHByb3BzKSB7XG4gICAgICAgIGlmICh0aGlzLiQkc2V0ICYmICFpc19lbXB0eSgkJHByb3BzKSkge1xuICAgICAgICAgICAgdGhpcy4kJC5za2lwX2JvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuJCRzZXQoJCRwcm9wcyk7XG4gICAgICAgICAgICB0aGlzLiQkLnNraXBfYm91bmQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZGlzcGF0Y2hfZGV2KHR5cGUsIGRldGFpbCkge1xuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoY3VzdG9tX2V2ZW50KHR5cGUsIE9iamVjdC5hc3NpZ24oeyB2ZXJzaW9uOiAnMy41OS4xJyB9LCBkZXRhaWwpLCB7IGJ1YmJsZXM6IHRydWUgfSkpO1xufVxuZnVuY3Rpb24gYXBwZW5kX2Rldih0YXJnZXQsIG5vZGUpIHtcbiAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTUluc2VydCcsIHsgdGFyZ2V0LCBub2RlIH0pO1xuICAgIGFwcGVuZCh0YXJnZXQsIG5vZGUpO1xufVxuZnVuY3Rpb24gYXBwZW5kX2h5ZHJhdGlvbl9kZXYodGFyZ2V0LCBub2RlKSB7XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01JbnNlcnQnLCB7IHRhcmdldCwgbm9kZSB9KTtcbiAgICBhcHBlbmRfaHlkcmF0aW9uKHRhcmdldCwgbm9kZSk7XG59XG5mdW5jdGlvbiBpbnNlcnRfZGV2KHRhcmdldCwgbm9kZSwgYW5jaG9yKSB7XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01JbnNlcnQnLCB7IHRhcmdldCwgbm9kZSwgYW5jaG9yIH0pO1xuICAgIGluc2VydCh0YXJnZXQsIG5vZGUsIGFuY2hvcik7XG59XG5mdW5jdGlvbiBpbnNlcnRfaHlkcmF0aW9uX2Rldih0YXJnZXQsIG5vZGUsIGFuY2hvcikge1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NSW5zZXJ0JywgeyB0YXJnZXQsIG5vZGUsIGFuY2hvciB9KTtcbiAgICBpbnNlcnRfaHlkcmF0aW9uKHRhcmdldCwgbm9kZSwgYW5jaG9yKTtcbn1cbmZ1bmN0aW9uIGRldGFjaF9kZXYobm9kZSkge1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NUmVtb3ZlJywgeyBub2RlIH0pO1xuICAgIGRldGFjaChub2RlKTtcbn1cbmZ1bmN0aW9uIGRldGFjaF9iZXR3ZWVuX2RldihiZWZvcmUsIGFmdGVyKSB7XG4gICAgd2hpbGUgKGJlZm9yZS5uZXh0U2libGluZyAmJiBiZWZvcmUubmV4dFNpYmxpbmcgIT09IGFmdGVyKSB7XG4gICAgICAgIGRldGFjaF9kZXYoYmVmb3JlLm5leHRTaWJsaW5nKTtcbiAgICB9XG59XG5mdW5jdGlvbiBkZXRhY2hfYmVmb3JlX2RldihhZnRlcikge1xuICAgIHdoaWxlIChhZnRlci5wcmV2aW91c1NpYmxpbmcpIHtcbiAgICAgICAgZGV0YWNoX2RldihhZnRlci5wcmV2aW91c1NpYmxpbmcpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRldGFjaF9hZnRlcl9kZXYoYmVmb3JlKSB7XG4gICAgd2hpbGUgKGJlZm9yZS5uZXh0U2libGluZykge1xuICAgICAgICBkZXRhY2hfZGV2KGJlZm9yZS5uZXh0U2libGluZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gbGlzdGVuX2Rldihub2RlLCBldmVudCwgaGFuZGxlciwgb3B0aW9ucywgaGFzX3ByZXZlbnRfZGVmYXVsdCwgaGFzX3N0b3BfcHJvcGFnYXRpb24sIGhhc19zdG9wX2ltbWVkaWF0ZV9wcm9wYWdhdGlvbikge1xuICAgIGNvbnN0IG1vZGlmaWVycyA9IG9wdGlvbnMgPT09IHRydWUgPyBbJ2NhcHR1cmUnXSA6IG9wdGlvbnMgPyBBcnJheS5mcm9tKE9iamVjdC5rZXlzKG9wdGlvbnMpKSA6IFtdO1xuICAgIGlmIChoYXNfcHJldmVudF9kZWZhdWx0KVxuICAgICAgICBtb2RpZmllcnMucHVzaCgncHJldmVudERlZmF1bHQnKTtcbiAgICBpZiAoaGFzX3N0b3BfcHJvcGFnYXRpb24pXG4gICAgICAgIG1vZGlmaWVycy5wdXNoKCdzdG9wUHJvcGFnYXRpb24nKTtcbiAgICBpZiAoaGFzX3N0b3BfaW1tZWRpYXRlX3Byb3BhZ2F0aW9uKVxuICAgICAgICBtb2RpZmllcnMucHVzaCgnc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uJyk7XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01BZGRFdmVudExpc3RlbmVyJywgeyBub2RlLCBldmVudCwgaGFuZGxlciwgbW9kaWZpZXJzIH0pO1xuICAgIGNvbnN0IGRpc3Bvc2UgPSBsaXN0ZW4obm9kZSwgZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NUmVtb3ZlRXZlbnRMaXN0ZW5lcicsIHsgbm9kZSwgZXZlbnQsIGhhbmRsZXIsIG1vZGlmaWVycyB9KTtcbiAgICAgICAgZGlzcG9zZSgpO1xuICAgIH07XG59XG5mdW5jdGlvbiBhdHRyX2Rldihub2RlLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gICAgYXR0cihub2RlLCBhdHRyaWJ1dGUsIHZhbHVlKTtcbiAgICBpZiAodmFsdWUgPT0gbnVsbClcbiAgICAgICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01SZW1vdmVBdHRyaWJ1dGUnLCB7IG5vZGUsIGF0dHJpYnV0ZSB9KTtcbiAgICBlbHNlXG4gICAgICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NU2V0QXR0cmlidXRlJywgeyBub2RlLCBhdHRyaWJ1dGUsIHZhbHVlIH0pO1xufVxuZnVuY3Rpb24gcHJvcF9kZXYobm9kZSwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgbm9kZVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTVNldFByb3BlcnR5JywgeyBub2RlLCBwcm9wZXJ0eSwgdmFsdWUgfSk7XG59XG5mdW5jdGlvbiBkYXRhc2V0X2Rldihub2RlLCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICBub2RlLmRhdGFzZXRbcHJvcGVydHldID0gdmFsdWU7XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01TZXREYXRhc2V0JywgeyBub2RlLCBwcm9wZXJ0eSwgdmFsdWUgfSk7XG59XG5mdW5jdGlvbiBzZXRfZGF0YV9kZXYodGV4dCwgZGF0YSkge1xuICAgIGRhdGEgPSAnJyArIGRhdGE7XG4gICAgaWYgKHRleHQuZGF0YSA9PT0gZGF0YSlcbiAgICAgICAgcmV0dXJuO1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NU2V0RGF0YScsIHsgbm9kZTogdGV4dCwgZGF0YSB9KTtcbiAgICB0ZXh0LmRhdGEgPSBkYXRhO1xufVxuZnVuY3Rpb24gc2V0X2RhdGFfY29udGVudGVkaXRhYmxlX2Rldih0ZXh0LCBkYXRhKSB7XG4gICAgZGF0YSA9ICcnICsgZGF0YTtcbiAgICBpZiAodGV4dC53aG9sZVRleHQgPT09IGRhdGEpXG4gICAgICAgIHJldHVybjtcbiAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTVNldERhdGEnLCB7IG5vZGU6IHRleHQsIGRhdGEgfSk7XG4gICAgdGV4dC5kYXRhID0gZGF0YTtcbn1cbmZ1bmN0aW9uIHNldF9kYXRhX21heWJlX2NvbnRlbnRlZGl0YWJsZV9kZXYodGV4dCwgZGF0YSwgYXR0cl92YWx1ZSkge1xuICAgIGlmICh+Y29udGVudGVkaXRhYmxlX3RydXRoeV92YWx1ZXMuaW5kZXhPZihhdHRyX3ZhbHVlKSkge1xuICAgICAgICBzZXRfZGF0YV9jb250ZW50ZWRpdGFibGVfZGV2KHRleHQsIGRhdGEpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc2V0X2RhdGFfZGV2KHRleHQsIGRhdGEpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHZhbGlkYXRlX2VhY2hfYXJndW1lbnQoYXJnKSB7XG4gICAgaWYgKHR5cGVvZiBhcmcgIT09ICdzdHJpbmcnICYmICEoYXJnICYmIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIGFyZykpIHtcbiAgICAgICAgbGV0IG1zZyA9ICd7I2VhY2h9IG9ubHkgaXRlcmF0ZXMgb3ZlciBhcnJheS1saWtlIG9iamVjdHMuJztcbiAgICAgICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgYXJnICYmIFN5bWJvbC5pdGVyYXRvciBpbiBhcmcpIHtcbiAgICAgICAgICAgIG1zZyArPSAnIFlvdSBjYW4gdXNlIGEgc3ByZWFkIHRvIGNvbnZlcnQgdGhpcyBpdGVyYWJsZSBpbnRvIGFuIGFycmF5Lic7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gdmFsaWRhdGVfc2xvdHMobmFtZSwgc2xvdCwga2V5cykge1xuICAgIGZvciAoY29uc3Qgc2xvdF9rZXkgb2YgT2JqZWN0LmtleXMoc2xvdCkpIHtcbiAgICAgICAgaWYgKCF+a2V5cy5pbmRleE9mKHNsb3Rfa2V5KSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGA8JHtuYW1lfT4gcmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBzbG90IFwiJHtzbG90X2tleX1cIi5gKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIHZhbGlkYXRlX2R5bmFtaWNfZWxlbWVudCh0YWcpIHtcbiAgICBjb25zdCBpc19zdHJpbmcgPSB0eXBlb2YgdGFnID09PSAnc3RyaW5nJztcbiAgICBpZiAodGFnICYmICFpc19zdHJpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCc8c3ZlbHRlOmVsZW1lbnQ+IGV4cGVjdHMgXCJ0aGlzXCIgYXR0cmlidXRlIHRvIGJlIGEgc3RyaW5nLicpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHZhbGlkYXRlX3ZvaWRfZHluYW1pY19lbGVtZW50KHRhZykge1xuICAgIGlmICh0YWcgJiYgaXNfdm9pZCh0YWcpKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgPHN2ZWx0ZTplbGVtZW50IHRoaXM9XCIke3RhZ31cIj4gaXMgc2VsZi1jbG9zaW5nIGFuZCBjYW5ub3QgaGF2ZSBjb250ZW50LmApO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNvbnN0cnVjdF9zdmVsdGVfY29tcG9uZW50X2Rldihjb21wb25lbnQsIHByb3BzKSB7XG4gICAgY29uc3QgZXJyb3JfbWVzc2FnZSA9ICd0aGlzPXsuLi59IG9mIDxzdmVsdGU6Y29tcG9uZW50PiBzaG91bGQgc3BlY2lmeSBhIFN2ZWx0ZSBjb21wb25lbnQuJztcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBjb21wb25lbnQocHJvcHMpO1xuICAgICAgICBpZiAoIWluc3RhbmNlLiQkIHx8ICFpbnN0YW5jZS4kc2V0IHx8ICFpbnN0YW5jZS4kb24gfHwgIWluc3RhbmNlLiRkZXN0cm95KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JfbWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnN0IHsgbWVzc2FnZSB9ID0gZXJyO1xuICAgICAgICBpZiAodHlwZW9mIG1lc3NhZ2UgPT09ICdzdHJpbmcnICYmIG1lc3NhZ2UuaW5kZXhPZignaXMgbm90IGEgY29uc3RydWN0b3InKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcl9tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgU3ZlbHRlIGNvbXBvbmVudHMgd2l0aCBzb21lIG1pbm9yIGRldi1lbmhhbmNlbWVudHMuIFVzZWQgd2hlbiBkZXY9dHJ1ZS5cbiAqL1xuY2xhc3MgU3ZlbHRlQ29tcG9uZW50RGV2IGV4dGVuZHMgU3ZlbHRlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIGlmICghb3B0aW9ucyB8fCAoIW9wdGlvbnMudGFyZ2V0ICYmICFvcHRpb25zLiQkaW5saW5lKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiJ3RhcmdldCcgaXMgYSByZXF1aXJlZCBvcHRpb25cIik7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgJGRlc3Ryb3koKSB7XG4gICAgICAgIHN1cGVyLiRkZXN0cm95KCk7XG4gICAgICAgIHRoaXMuJGRlc3Ryb3kgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0NvbXBvbmVudCB3YXMgYWxyZWFkeSBkZXN0cm95ZWQnKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAgIH07XG4gICAgfVxuICAgICRjYXB0dXJlX3N0YXRlKCkgeyB9XG4gICAgJGluamVjdF9zdGF0ZSgpIHsgfVxufVxuLyoqXG4gKiBCYXNlIGNsYXNzIHRvIGNyZWF0ZSBzdHJvbmdseSB0eXBlZCBTdmVsdGUgY29tcG9uZW50cy5cbiAqIFRoaXMgb25seSBleGlzdHMgZm9yIHR5cGluZyBwdXJwb3NlcyBhbmQgc2hvdWxkIGJlIHVzZWQgaW4gYC5kLnRzYCBmaWxlcy5cbiAqXG4gKiAjIyMgRXhhbXBsZTpcbiAqXG4gKiBZb3UgaGF2ZSBjb21wb25lbnQgbGlicmFyeSBvbiBucG0gY2FsbGVkIGBjb21wb25lbnQtbGlicmFyeWAsIGZyb20gd2hpY2hcbiAqIHlvdSBleHBvcnQgYSBjb21wb25lbnQgY2FsbGVkIGBNeUNvbXBvbmVudGAuIEZvciBTdmVsdGUrVHlwZVNjcmlwdCB1c2VycyxcbiAqIHlvdSB3YW50IHRvIHByb3ZpZGUgdHlwaW5ncy4gVGhlcmVmb3JlIHlvdSBjcmVhdGUgYSBgaW5kZXguZC50c2A6XG4gKiBgYGB0c1xuICogaW1wb3J0IHsgU3ZlbHRlQ29tcG9uZW50VHlwZWQgfSBmcm9tIFwic3ZlbHRlXCI7XG4gKiBleHBvcnQgY2xhc3MgTXlDb21wb25lbnQgZXh0ZW5kcyBTdmVsdGVDb21wb25lbnRUeXBlZDx7Zm9vOiBzdHJpbmd9PiB7fVxuICogYGBgXG4gKiBUeXBpbmcgdGhpcyBtYWtlcyBpdCBwb3NzaWJsZSBmb3IgSURFcyBsaWtlIFZTIENvZGUgd2l0aCB0aGUgU3ZlbHRlIGV4dGVuc2lvblxuICogdG8gcHJvdmlkZSBpbnRlbGxpc2Vuc2UgYW5kIHRvIHVzZSB0aGUgY29tcG9uZW50IGxpa2UgdGhpcyBpbiBhIFN2ZWx0ZSBmaWxlXG4gKiB3aXRoIFR5cGVTY3JpcHQ6XG4gKiBgYGBzdmVsdGVcbiAqIDxzY3JpcHQgbGFuZz1cInRzXCI+XG4gKiBcdGltcG9ydCB7IE15Q29tcG9uZW50IH0gZnJvbSBcImNvbXBvbmVudC1saWJyYXJ5XCI7XG4gKiA8L3NjcmlwdD5cbiAqIDxNeUNvbXBvbmVudCBmb289eydiYXInfSAvPlxuICogYGBgXG4gKlxuICogIyMjIyBXaHkgbm90IG1ha2UgdGhpcyBwYXJ0IG9mIGBTdmVsdGVDb21wb25lbnQoRGV2KWA/XG4gKiBCZWNhdXNlXG4gKiBgYGB0c1xuICogY2xhc3MgQVN1YmNsYXNzT2ZTdmVsdGVDb21wb25lbnQgZXh0ZW5kcyBTdmVsdGVDb21wb25lbnQ8e2Zvbzogc3RyaW5nfT4ge31cbiAqIGNvbnN0IGNvbXBvbmVudDogdHlwZW9mIFN2ZWx0ZUNvbXBvbmVudCA9IEFTdWJjbGFzc09mU3ZlbHRlQ29tcG9uZW50O1xuICogYGBgXG4gKiB3aWxsIHRocm93IGEgdHlwZSBlcnJvciwgc28gd2UgbmVlZCB0byBzZXBhcmF0ZSB0aGUgbW9yZSBzdHJpY3RseSB0eXBlZCBjbGFzcy5cbiAqL1xuY2xhc3MgU3ZlbHRlQ29tcG9uZW50VHlwZWQgZXh0ZW5kcyBTdmVsdGVDb21wb25lbnREZXYge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG4gICAgfVxufVxuZnVuY3Rpb24gbG9vcF9ndWFyZCh0aW1lb3V0KSB7XG4gICAgY29uc3Qgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlmIChEYXRlLm5vdygpIC0gc3RhcnQgPiB0aW1lb3V0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0luZmluaXRlIGxvb3AgZGV0ZWN0ZWQnKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmV4cG9ydCB7IEh0bWxUYWcsIEh0bWxUYWdIeWRyYXRpb24sIFJlc2l6ZU9ic2VydmVyU2luZ2xldG9uLCBTdmVsdGVDb21wb25lbnQsIFN2ZWx0ZUNvbXBvbmVudERldiwgU3ZlbHRlQ29tcG9uZW50VHlwZWQsIFN2ZWx0ZUVsZW1lbnQsIGFjdGlvbl9kZXN0cm95ZXIsIGFkZF9hdHRyaWJ1dGUsIGFkZF9jbGFzc2VzLCBhZGRfZmx1c2hfY2FsbGJhY2ssIGFkZF9pZnJhbWVfcmVzaXplX2xpc3RlbmVyLCBhZGRfbG9jYXRpb24sIGFkZF9yZW5kZXJfY2FsbGJhY2ssIGFkZF9zdHlsZXMsIGFkZF90cmFuc2Zvcm0sIGFmdGVyVXBkYXRlLCBhcHBlbmQsIGFwcGVuZF9kZXYsIGFwcGVuZF9lbXB0eV9zdHlsZXNoZWV0LCBhcHBlbmRfaHlkcmF0aW9uLCBhcHBlbmRfaHlkcmF0aW9uX2RldiwgYXBwZW5kX3N0eWxlcywgYXNzaWduLCBhdHRyLCBhdHRyX2RldiwgYXR0cmlidXRlX3RvX29iamVjdCwgYmVmb3JlVXBkYXRlLCBiaW5kLCBiaW5kaW5nX2NhbGxiYWNrcywgYmxhbmtfb2JqZWN0LCBidWJibGUsIGNoZWNrX291dHJvcywgY2hpbGRyZW4sIGNsYWltX2NvbW1lbnQsIGNsYWltX2NvbXBvbmVudCwgY2xhaW1fZWxlbWVudCwgY2xhaW1faHRtbF90YWcsIGNsYWltX3NwYWNlLCBjbGFpbV9zdmdfZWxlbWVudCwgY2xhaW1fdGV4dCwgY2xlYXJfbG9vcHMsIGNvbW1lbnQsIGNvbXBvbmVudF9zdWJzY3JpYmUsIGNvbXB1dGVfcmVzdF9wcm9wcywgY29tcHV0ZV9zbG90cywgY29uc3RydWN0X3N2ZWx0ZV9jb21wb25lbnQsIGNvbnN0cnVjdF9zdmVsdGVfY29tcG9uZW50X2RldiwgY29udGVudGVkaXRhYmxlX3RydXRoeV92YWx1ZXMsIGNyZWF0ZUV2ZW50RGlzcGF0Y2hlciwgY3JlYXRlX2FuaW1hdGlvbiwgY3JlYXRlX2JpZGlyZWN0aW9uYWxfdHJhbnNpdGlvbiwgY3JlYXRlX2NvbXBvbmVudCwgY3JlYXRlX2luX3RyYW5zaXRpb24sIGNyZWF0ZV9vdXRfdHJhbnNpdGlvbiwgY3JlYXRlX3Nsb3QsIGNyZWF0ZV9zc3JfY29tcG9uZW50LCBjdXJyZW50X2NvbXBvbmVudCwgY3VzdG9tX2V2ZW50LCBkYXRhc2V0X2RldiwgZGVidWcsIGRlc3Ryb3lfYmxvY2ssIGRlc3Ryb3lfY29tcG9uZW50LCBkZXN0cm95X2VhY2gsIGRldGFjaCwgZGV0YWNoX2FmdGVyX2RldiwgZGV0YWNoX2JlZm9yZV9kZXYsIGRldGFjaF9iZXR3ZWVuX2RldiwgZGV0YWNoX2RldiwgZGlydHlfY29tcG9uZW50cywgZGlzcGF0Y2hfZGV2LCBlYWNoLCBlbGVtZW50LCBlbGVtZW50X2lzLCBlbXB0eSwgZW5kX2h5ZHJhdGluZywgZXNjYXBlLCBlc2NhcGVfYXR0cmlidXRlX3ZhbHVlLCBlc2NhcGVfb2JqZWN0LCBleGNsdWRlX2ludGVybmFsX3Byb3BzLCBmaXhfYW5kX2Rlc3Ryb3lfYmxvY2ssIGZpeF9hbmRfb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2ssIGZpeF9wb3NpdGlvbiwgZmx1c2gsIGZsdXNoX3JlbmRlcl9jYWxsYmFja3MsIGdldEFsbENvbnRleHRzLCBnZXRDb250ZXh0LCBnZXRfYWxsX2RpcnR5X2Zyb21fc2NvcGUsIGdldF9iaW5kaW5nX2dyb3VwX3ZhbHVlLCBnZXRfY3VycmVudF9jb21wb25lbnQsIGdldF9jdXN0b21fZWxlbWVudHNfc2xvdHMsIGdldF9yb290X2Zvcl9zdHlsZSwgZ2V0X3Nsb3RfY2hhbmdlcywgZ2V0X3NwcmVhZF9vYmplY3QsIGdldF9zcHJlYWRfdXBkYXRlLCBnZXRfc3RvcmVfdmFsdWUsIGdsb2JhbHMsIGdyb3VwX291dHJvcywgaGFuZGxlX3Byb21pc2UsIGhhc0NvbnRleHQsIGhhc19wcm9wLCBoZWFkX3NlbGVjdG9yLCBpZGVudGl0eSwgaW5pdCwgaW5pdF9iaW5kaW5nX2dyb3VwLCBpbml0X2JpbmRpbmdfZ3JvdXBfZHluYW1pYywgaW5zZXJ0LCBpbnNlcnRfZGV2LCBpbnNlcnRfaHlkcmF0aW9uLCBpbnNlcnRfaHlkcmF0aW9uX2RldiwgaW50cm9zLCBpbnZhbGlkX2F0dHJpYnV0ZV9uYW1lX2NoYXJhY3RlciwgaXNfY2xpZW50LCBpc19jcm9zc29yaWdpbiwgaXNfZW1wdHksIGlzX2Z1bmN0aW9uLCBpc19wcm9taXNlLCBpc192b2lkLCBsaXN0ZW4sIGxpc3Rlbl9kZXYsIGxvb3AsIGxvb3BfZ3VhcmQsIG1lcmdlX3Nzcl9zdHlsZXMsIG1pc3NpbmdfY29tcG9uZW50LCBtb3VudF9jb21wb25lbnQsIG5vb3AsIG5vdF9lcXVhbCwgbm93LCBudWxsX3RvX2VtcHR5LCBvYmplY3Rfd2l0aG91dF9wcm9wZXJ0aWVzLCBvbkRlc3Ryb3ksIG9uTW91bnQsIG9uY2UsIG91dHJvX2FuZF9kZXN0cm95X2Jsb2NrLCBwcmV2ZW50X2RlZmF1bHQsIHByb3BfZGV2LCBxdWVyeV9zZWxlY3Rvcl9hbGwsIHJhZiwgcmVzaXplX29ic2VydmVyX2JvcmRlcl9ib3gsIHJlc2l6ZV9vYnNlcnZlcl9jb250ZW50X2JveCwgcmVzaXplX29ic2VydmVyX2RldmljZV9waXhlbF9jb250ZW50X2JveCwgcnVuLCBydW5fYWxsLCBzYWZlX25vdF9lcXVhbCwgc2NoZWR1bGVfdXBkYXRlLCBzZWxlY3RfbXVsdGlwbGVfdmFsdWUsIHNlbGVjdF9vcHRpb24sIHNlbGVjdF9vcHRpb25zLCBzZWxlY3RfdmFsdWUsIHNlbGYsIHNldENvbnRleHQsIHNldF9hdHRyaWJ1dGVzLCBzZXRfY3VycmVudF9jb21wb25lbnQsIHNldF9jdXN0b21fZWxlbWVudF9kYXRhLCBzZXRfY3VzdG9tX2VsZW1lbnRfZGF0YV9tYXAsIHNldF9kYXRhLCBzZXRfZGF0YV9jb250ZW50ZWRpdGFibGUsIHNldF9kYXRhX2NvbnRlbnRlZGl0YWJsZV9kZXYsIHNldF9kYXRhX2Rldiwgc2V0X2RhdGFfbWF5YmVfY29udGVudGVkaXRhYmxlLCBzZXRfZGF0YV9tYXliZV9jb250ZW50ZWRpdGFibGVfZGV2LCBzZXRfZHluYW1pY19lbGVtZW50X2RhdGEsIHNldF9pbnB1dF90eXBlLCBzZXRfaW5wdXRfdmFsdWUsIHNldF9ub3csIHNldF9yYWYsIHNldF9zdG9yZV92YWx1ZSwgc2V0X3N0eWxlLCBzZXRfc3ZnX2F0dHJpYnV0ZXMsIHNwYWNlLCBzcGxpdF9jc3NfdW5pdCwgc3ByZWFkLCBzcmNfdXJsX2VxdWFsLCBzdGFydF9oeWRyYXRpbmcsIHN0b3BfaW1tZWRpYXRlX3Byb3BhZ2F0aW9uLCBzdG9wX3Byb3BhZ2F0aW9uLCBzdWJzY3JpYmUsIHN2Z19lbGVtZW50LCB0ZXh0LCB0aWNrLCB0aW1lX3Jhbmdlc190b19hcnJheSwgdG9fbnVtYmVyLCB0b2dnbGVfY2xhc3MsIHRyYW5zaXRpb25faW4sIHRyYW5zaXRpb25fb3V0LCB0cnVzdGVkLCB1cGRhdGVfYXdhaXRfYmxvY2tfYnJhbmNoLCB1cGRhdGVfa2V5ZWRfZWFjaCwgdXBkYXRlX3Nsb3QsIHVwZGF0ZV9zbG90X2Jhc2UsIHZhbGlkYXRlX2NvbXBvbmVudCwgdmFsaWRhdGVfZHluYW1pY19lbGVtZW50LCB2YWxpZGF0ZV9lYWNoX2FyZ3VtZW50LCB2YWxpZGF0ZV9lYWNoX2tleXMsIHZhbGlkYXRlX3Nsb3RzLCB2YWxpZGF0ZV9zdG9yZSwgdmFsaWRhdGVfdm9pZF9keW5hbWljX2VsZW1lbnQsIHhsaW5rX2F0dHIgfTtcbiIsICJpbXBvcnQgeyBub29wLCBzYWZlX25vdF9lcXVhbCwgc3Vic2NyaWJlLCBydW5fYWxsLCBpc19mdW5jdGlvbiB9IGZyb20gJy4uL2ludGVybmFsL2luZGV4Lm1qcyc7XG5leHBvcnQgeyBnZXRfc3RvcmVfdmFsdWUgYXMgZ2V0IH0gZnJvbSAnLi4vaW50ZXJuYWwvaW5kZXgubWpzJztcblxuY29uc3Qgc3Vic2NyaWJlcl9xdWV1ZSA9IFtdO1xuLyoqXG4gKiBDcmVhdGVzIGEgYFJlYWRhYmxlYCBzdG9yZSB0aGF0IGFsbG93cyByZWFkaW5nIGJ5IHN1YnNjcmlwdGlvbi5cbiAqIEBwYXJhbSB2YWx1ZSBpbml0aWFsIHZhbHVlXG4gKiBAcGFyYW0ge1N0YXJ0U3RvcE5vdGlmaWVyfSBbc3RhcnRdXG4gKi9cbmZ1bmN0aW9uIHJlYWRhYmxlKHZhbHVlLCBzdGFydCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHN1YnNjcmliZTogd3JpdGFibGUodmFsdWUsIHN0YXJ0KS5zdWJzY3JpYmVcbiAgICB9O1xufVxuLyoqXG4gKiBDcmVhdGUgYSBgV3JpdGFibGVgIHN0b3JlIHRoYXQgYWxsb3dzIGJvdGggdXBkYXRpbmcgYW5kIHJlYWRpbmcgYnkgc3Vic2NyaXB0aW9uLlxuICogQHBhcmFtIHsqPX12YWx1ZSBpbml0aWFsIHZhbHVlXG4gKiBAcGFyYW0ge1N0YXJ0U3RvcE5vdGlmaWVyPX0gc3RhcnRcbiAqL1xuZnVuY3Rpb24gd3JpdGFibGUodmFsdWUsIHN0YXJ0ID0gbm9vcCkge1xuICAgIGxldCBzdG9wO1xuICAgIGNvbnN0IHN1YnNjcmliZXJzID0gbmV3IFNldCgpO1xuICAgIGZ1bmN0aW9uIHNldChuZXdfdmFsdWUpIHtcbiAgICAgICAgaWYgKHNhZmVfbm90X2VxdWFsKHZhbHVlLCBuZXdfdmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG5ld192YWx1ZTtcbiAgICAgICAgICAgIGlmIChzdG9wKSB7IC8vIHN0b3JlIGlzIHJlYWR5XG4gICAgICAgICAgICAgICAgY29uc3QgcnVuX3F1ZXVlID0gIXN1YnNjcmliZXJfcXVldWUubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgc3Vic2NyaWJlciBvZiBzdWJzY3JpYmVycykge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyWzFdKCk7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXJfcXVldWUucHVzaChzdWJzY3JpYmVyLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChydW5fcXVldWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJzY3JpYmVyX3F1ZXVlLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyX3F1ZXVlW2ldWzBdKHN1YnNjcmliZXJfcXVldWVbaSArIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyX3F1ZXVlLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVwZGF0ZShmbikge1xuICAgICAgICBzZXQoZm4odmFsdWUpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3Vic2NyaWJlKHJ1biwgaW52YWxpZGF0ZSA9IG5vb3ApIHtcbiAgICAgICAgY29uc3Qgc3Vic2NyaWJlciA9IFtydW4sIGludmFsaWRhdGVdO1xuICAgICAgICBzdWJzY3JpYmVycy5hZGQoc3Vic2NyaWJlcik7XG4gICAgICAgIGlmIChzdWJzY3JpYmVycy5zaXplID09PSAxKSB7XG4gICAgICAgICAgICBzdG9wID0gc3RhcnQoc2V0KSB8fCBub29wO1xuICAgICAgICB9XG4gICAgICAgIHJ1bih2YWx1ZSk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBzdWJzY3JpYmVycy5kZWxldGUoc3Vic2NyaWJlcik7XG4gICAgICAgICAgICBpZiAoc3Vic2NyaWJlcnMuc2l6ZSA9PT0gMCAmJiBzdG9wKSB7XG4gICAgICAgICAgICAgICAgc3RvcCgpO1xuICAgICAgICAgICAgICAgIHN0b3AgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4geyBzZXQsIHVwZGF0ZSwgc3Vic2NyaWJlIH07XG59XG5mdW5jdGlvbiBkZXJpdmVkKHN0b3JlcywgZm4sIGluaXRpYWxfdmFsdWUpIHtcbiAgICBjb25zdCBzaW5nbGUgPSAhQXJyYXkuaXNBcnJheShzdG9yZXMpO1xuICAgIGNvbnN0IHN0b3Jlc19hcnJheSA9IHNpbmdsZVxuICAgICAgICA/IFtzdG9yZXNdXG4gICAgICAgIDogc3RvcmVzO1xuICAgIGNvbnN0IGF1dG8gPSBmbi5sZW5ndGggPCAyO1xuICAgIHJldHVybiByZWFkYWJsZShpbml0aWFsX3ZhbHVlLCAoc2V0KSA9PiB7XG4gICAgICAgIGxldCBzdGFydGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IFtdO1xuICAgICAgICBsZXQgcGVuZGluZyA9IDA7XG4gICAgICAgIGxldCBjbGVhbnVwID0gbm9vcDtcbiAgICAgICAgY29uc3Qgc3luYyA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChwZW5kaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZm4oc2luZ2xlID8gdmFsdWVzWzBdIDogdmFsdWVzLCBzZXQpO1xuICAgICAgICAgICAgaWYgKGF1dG8pIHtcbiAgICAgICAgICAgICAgICBzZXQocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsZWFudXAgPSBpc19mdW5jdGlvbihyZXN1bHQpID8gcmVzdWx0IDogbm9vcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgdW5zdWJzY3JpYmVycyA9IHN0b3Jlc19hcnJheS5tYXAoKHN0b3JlLCBpKSA9PiBzdWJzY3JpYmUoc3RvcmUsICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdmFsdWVzW2ldID0gdmFsdWU7XG4gICAgICAgICAgICBwZW5kaW5nICY9IH4oMSA8PCBpKTtcbiAgICAgICAgICAgIGlmIChzdGFydGVkKSB7XG4gICAgICAgICAgICAgICAgc3luYygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBwZW5kaW5nIHw9ICgxIDw8IGkpO1xuICAgICAgICB9KSk7XG4gICAgICAgIHN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICBzeW5jKCk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICAgICAgcnVuX2FsbCh1bnN1YnNjcmliZXJzKTtcbiAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICAgIC8vIFdlIG5lZWQgdG8gc2V0IHRoaXMgdG8gZmFsc2UgYmVjYXVzZSBjYWxsYmFja3MgY2FuIHN0aWxsIGhhcHBlbiBkZXNwaXRlIGhhdmluZyB1bnN1YnNjcmliZWQ6XG4gICAgICAgICAgICAvLyBDYWxsYmFja3MgbWlnaHQgYWxyZWFkeSBiZSBwbGFjZWQgaW4gdGhlIHF1ZXVlIHdoaWNoIGRvZXNuJ3Qga25vdyBpdCBzaG91bGQgbm8gbG9uZ2VyXG4gICAgICAgICAgICAvLyBpbnZva2UgdGhpcyBkZXJpdmVkIHN0b3JlLlxuICAgICAgICAgICAgc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB9O1xuICAgIH0pO1xufVxuLyoqXG4gKiBUYWtlcyBhIHN0b3JlIGFuZCByZXR1cm5zIGEgbmV3IG9uZSBkZXJpdmVkIGZyb20gdGhlIG9sZCBvbmUgdGhhdCBpcyByZWFkYWJsZS5cbiAqXG4gKiBAcGFyYW0gc3RvcmUgLSBzdG9yZSB0byBtYWtlIHJlYWRvbmx5XG4gKi9cbmZ1bmN0aW9uIHJlYWRvbmx5KHN0b3JlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3Vic2NyaWJlOiBzdG9yZS5zdWJzY3JpYmUuYmluZChzdG9yZSlcbiAgICB9O1xufVxuXG5leHBvcnQgeyBkZXJpdmVkLCByZWFkYWJsZSwgcmVhZG9ubHksIHdyaXRhYmxlIH07XG4iLCAiaW1wb3J0IHsgd3JpdGFibGUgfSBmcm9tICdzdmVsdGUvc3RvcmUnO1xuXG5leHBvcnQgY29uc3QgY3VzdG9tUGVyY2VudFN0b3JlID0gd3JpdGFibGUoMCk7IiwgIjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgY3VzdG9tUGVyY2VudFN0b3JlIH0gZnJvbSBcIi4uL3N0b3Jlc1wiO1xuXG4gICAgZXhwb3J0IGxldCBiYW5rO1xuICAgIGV4cG9ydCBsZXQgY2FyTGVhc2U7XG4gICAgZXhwb3J0IGxldCBrYWliZW1ha3NlO1xuICAgIGV4cG9ydCBsZXQgcGVyc29uO1xuICAgIGV4cG9ydCBsZXQgdHlwZTtcbiAgICBleHBvcnQgbGV0IGV1cm9ib3JQcmljZXM7XG5cbiAgICAkOiBpbnRlcmVzdCA9IDA7XG4gICAgJDogY3VycmVudEludGVyZXN0ID1cbiAgICAgICAgKGJhbmsuaW50ZXJlc3QgPT0gMCA/IDAgOiBiYW5rLmludGVyZXN0KSArXG4gICAgICAgIChpbnRlcmVzdCA9PSAwID8gMCA6IGludGVyZXN0KTtcblxuICAgICQ6IGludGVyZXN0V2l0aEV1cm9ib3IgPVxuICAgICAgICBjdXJyZW50SW50ZXJlc3QgIT0gMFxuICAgICAgICAgICAgPyBOdW1iZXIoY3VycmVudEludGVyZXN0KSArIE51bWJlcihldXJvYm9yUHJpY2VzW2JhbmsuZXVyb2JvckFlZ10pXG4gICAgICAgICAgICA6IDA7XG5cbiAgICAkOiBjYXJQcmljZVdpdGhSZW1vdmVkTnVtYmVycyA9XG4gICAgICAgIGNhckxlYXNlLnByaWNlIC1cbiAgICAgICAgKGNhckxlYXNlLnNlbGZfZmluYW5jZSA9PT0gXCJcIiA/IDAgOiBjYXJMZWFzZS5zZWxmX2ZpbmFuY2UpIC1cbiAgICAgICAgKHR5cGUgPT0gXCJrYXN1dHVzXCJcbiAgICAgICAgICAgID8gY2FyTGVhc2UucHJpY2VfbGVmdCA9PT0gXCJcIlxuICAgICAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgICAgIDogY2FyTGVhc2UucHJpY2VfbGVmdFxuICAgICAgICAgICAgOiAwKTtcbiAgICAkOiBjYXJQcmljZUtNID1cbiAgICAgICAgY2FyUHJpY2VXaXRoUmVtb3ZlZE51bWJlcnMgKlxuICAgICAgICAocGVyc29uID09IFwibGVnYWxcIiA/IDEgOiBrYWliZW1ha3NlKSAqXG4gICAgICAgICh0eXBlID09IFwia2FwaXRhbFwiID8gMC43IDogMSk7XG5cbiAgICAkOiBtb250aGx5UHJpY2UgPVxuICAgICAgICBNYXRoLnJvdW5kKDEwMCAqICgoaW50ZXJlc3RXaXRoRXVyb2JvciAvIDEwMCAvIDEyKSAqIGNhclByaWNlS00pKSAvXG4gICAgICAgICgxIC1cbiAgICAgICAgICAgIDEgLyBNYXRoLnBvdyhpbnRlcmVzdFdpdGhFdXJvYm9yIC8gMTAwIC8gMTIgKyAxLCBjYXJMZWFzZS5wZXJpb2QpKSAvXG4gICAgICAgIDEwMDtcblxuICAgIC8vIGRpc3BsYXkgc3R1ZmZcbiAgICAkOiBkaXNwbGF5Q2FyUHJpY2VLTSA9IE51bWJlcihjYXJMZWFzZS5wcmljZSkgKiAxLjI7XG4gICAgJDogZGlzcGxheUNhclByaWNlID0gTnVtYmVyKGNhckxlYXNlLnByaWNlKTtcbiAgICAkOiBkaXNwbGF5UHJpY2VMZWZ0ID0gTnVtYmVyKGNhckxlYXNlLnByaWNlX2xlZnQpO1xuXG4gICAgLy8gJDogZnVsbENhclByaWNlV2l0aEtNID1cbiAgICAvLyAgICAgY2FyTGVhc2UucHJpY2UgKiAocGVyc29uID09IFwibGVnYWxcIiA/IDEgOiBrYWliZW1ha3NlKTtcblxuICAgIC8vICQ6IGRpc2NvdW50ZWRDYXJQcmljZSA9XG4gICAgLy8gICAgIGZ1bGxDYXJQcmljZVdpdGhLTSAtXG4gICAgLy8gICAgIChjYXJMZWFzZS5zZWxmX2ZpbmFuY2UgPT09IFwiXCIgPyAwIDogY2FyTGVhc2Uuc2VsZl9maW5hbmNlKSAtXG4gICAgLy8gICAgICh0eXBlID09IFwia2FzdXR1c1wiXG4gICAgLy8gICAgICAgICA/IGNhckxlYXNlLnByaWNlX2xlZnQgPT09IFwiXCJcbiAgICAvLyAgICAgICAgICAgICA/IDBcbiAgICAvLyAgICAgICAgICAgICA6IGNhckxlYXNlLnByaWNlX2xlZnRcbiAgICAvLyAgICAgICAgIDogMCk7XG48L3NjcmlwdD5cblxuPCEtLSBjbGFzcz1cImJsb2NrIG1heC13LXNtIHAtNiBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQtbGcgc2hhZG93IGhvdmVyOmJnLWdyYXktMTAwIHRleHQtZ3JheS03MDAgZm9udC1zZW1pYm9sZFwiIC0tPlxuPCEtLSBjbGFzcz1cIm1iLTIgdGV4dC0yeGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCIgLS0+XG48IS0tIDxwIGNsYXNzPVwiZm9udC1ub3JtYWwgdGV4dC1ncmF5LTcwMCBkYXJrOnRleHQtZ3JheS00MDBcIj4gLS0+XG48YVxuICAgIGhyZWY9e2Ake2JhbmsubGluayA/IGJhbmsubGluayA6IFwiI1wifWB9XG4gICAgY2xhc3M9XCJibG9jayBtYXgtdy1zbSBwLTYgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkLWxnIHNoYWRvdyBob3ZlcjpiZy1ncmF5LTEwMCB0ZXh0LWdyYXktNzAwIGZvbnQtc2VtaWJvbGRcIlxuPlxuICAgIHsjaWYgYmFuay5sb2dvICE9PSBcIlwifVxuICAgICAgICA8aW1nIHNyYz17YmFuay5sb2dvfSBhbHQ9XCJsb2dvXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIzMDBcIiBjbGFzcz1cInBiLTJcIiAvPlxuICAgIHs6ZWxzZX1cbiAgICAgICAgPGg1IGNsYXNzPVwibWItMiB0ZXh0LTJ4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAge2JhbmsubmFtZX1cbiAgICAgICAgPC9oNT5cbiAgICB7L2lmfVxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJtaW4td2lkdGg6IDEyZW07XCIgY2xhc3M9XCJsYWJlbHNfYXJvdW5kXCI+XG4gICAgICAgICAgICB7I2lmIGJhbmsuaW50ZXJlc3QgIT0gbnVsbCAmJiBiYW5rLmludGVyZXN0ICE9IDAgJiYgYmFuay5uYW1lICE9IFwiT21hXCJ9XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWdyYXktNTAwIHRleHQteHNcIj5JbnRlcmVzdDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtZ3JheS01MDAgZm9udC1ub3JtYWxcIj5cbiAgICAgICAgICAgICAgICAgICAge2JhbmsuaW50ZXJlc3QudG9GaXhlZCgyKX0lICsge2JhbmsuZXVyb2JvckFlZ31cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICB7OmVsc2V9XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWdyYXktNTAwIHRleHQteHNcIj5JbnRlcmVzdDwvcD5cbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImFwcGVhcmFuY2Utbm9uZSBzaGFkb3ctc20gYm9yZGVyIGJvcmRlci1ncmF5LTIwMCB0ZXh0LXNtIHAtMiBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWdyYXktNTAwIHJvdW5kZWQtbGcgdy0yNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBiaW5kOnZhbHVlPXtiYW5rLmludGVyZXN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgb246aW5wdXQ9eygpID0+ICgkY3VzdG9tUGVyY2VudFN0b3JlID0gYmFuay5pbnRlcmVzdCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImN1c3RvbV9pbnRlcmVzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY3VzdG9tX2ludGVyZXN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiT21hICVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDFweDt3aWR0aDogNzBweDtcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAlXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgey9pZn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJtaW4td2lkdGg6IDEyZW07XCIgY2xhc3M9XCJsYWJlbHNfYXJvdW5kXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtZ3JheS01MDAgdGV4dC14c1wiPkhpbmQgKEtNLWdhKTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9udC1zZW1pYm9sZFwiPntkaXNwbGF5Q2FyUHJpY2VLTS50b0ZpeGVkKDIpfSDigqw8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWxzX2Fyb3VuZFwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWdyYXktNTAwIHRleHQteHNcIj5MaWlzaW5ndXN1bW1hPC9wPlxuICAgICAgICAgICAgPHA+e2Rpc3BsYXlDYXJQcmljZS50b0ZpeGVkKDIpfSDigqw8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWxzX2Fyb3VuZFwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWdyYXktNTAwIHRleHQteHNcIj5LTTwvcD5cbiAgICAgICAgICAgIDxwPntwZXJzb24gPT0gXCJwcml2YXRlXCIgPyAyMCA6IDB9ICU8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWxzX2Fyb3VuZFwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWdyYXktNTAwIHRleHQteHNcIj5QZXJpb29kPC9wPlxuICAgICAgICAgICAgPHA+e2NhckxlYXNlLnBlcmlvZH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7I2lmIHR5cGUgPT0gXCJrYXN1dHVzXCJ9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWxzX2Fyb3VuZFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1ncmF5LTUwMCB0ZXh0LXhzXCI+SsOkw6RrdsOkw6RydHVzPC9wPlxuICAgICAgICAgICAgICAgIDxwPntkaXNwbGF5UHJpY2VMZWZ0LnRvRml4ZWQoMil9IOKCrDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICB7L2lmfVxuICAgIDwvZGl2PlxuXG4gICAgPHAgY2xhc3M9XCJmb250LXNlbWlib2xkIHRleHQtZ3JheS03MDBcIj5cbiAgICAgICAgeyNpZiBtb250aGx5UHJpY2UudG9GaXhlZCgyKSA+IDF9XG4gICAgICAgICAgICB7bW9udGhseVByaWNlLnRvRml4ZWQoMil9IOKCrFxuICAgICAgICAgICAgeyNpZiBiYW5rLmVsZWN0cm9DYXJTdXBwb3J0ID09IHRydWV9XG4gICAgICAgICAgICAgICAgPCEtLSB7bW9udGhseVByaWNlLnRvRml4ZWQoMil9IOKCrCAtLT5cbiAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgIHs6ZWxzZX1cbiAgICAgICAgICAgIHZpZ2FcbiAgICAgICAgey9pZn1cbiAgICA8L3A+XG48L2E+XG5cbjxzdHlsZSBsYW5nPVwicG9zdGNzc1wiPlxuICAgIC5sYWJlbHNfYXJvdW5kIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cbjwvc3R5bGU+XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgaW50ZXJuYWwgPSByZXF1aXJlKCcuL2ludGVybmFsL2luZGV4LmpzJyk7XG5cbmZ1bmN0aW9uIG9uTW91bnQoKSB7IH1cbmZ1bmN0aW9uIGJlZm9yZVVwZGF0ZSgpIHsgfVxuZnVuY3Rpb24gYWZ0ZXJVcGRhdGUoKSB7IH1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTdmVsdGVDb21wb25lbnQnLCB7XG5cdGVudW1lcmFibGU6IHRydWUsXG5cdGdldDogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBpbnRlcm5hbC5TdmVsdGVDb21wb25lbnREZXY7XG5cdH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTdmVsdGVDb21wb25lbnRUeXBlZCcsIHtcblx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIGludGVybmFsLlN2ZWx0ZUNvbXBvbmVudFR5cGVkO1xuXHR9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRXZlbnREaXNwYXRjaGVyJywge1xuXHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRnZXQ6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gaW50ZXJuYWwuY3JlYXRlRXZlbnREaXNwYXRjaGVyO1xuXHR9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnZ2V0QWxsQ29udGV4dHMnLCB7XG5cdGVudW1lcmFibGU6IHRydWUsXG5cdGdldDogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBpbnRlcm5hbC5nZXRBbGxDb250ZXh0cztcblx0fVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2dldENvbnRleHQnLCB7XG5cdGVudW1lcmFibGU6IHRydWUsXG5cdGdldDogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBpbnRlcm5hbC5nZXRDb250ZXh0O1xuXHR9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaGFzQ29udGV4dCcsIHtcblx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIGludGVybmFsLmhhc0NvbnRleHQ7XG5cdH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdvbkRlc3Ryb3knLCB7XG5cdGVudW1lcmFibGU6IHRydWUsXG5cdGdldDogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBpbnRlcm5hbC5vbkRlc3Ryb3k7XG5cdH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdzZXRDb250ZXh0Jywge1xuXHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRnZXQ6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gaW50ZXJuYWwuc2V0Q29udGV4dDtcblx0fVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3RpY2snLCB7XG5cdGVudW1lcmFibGU6IHRydWUsXG5cdGdldDogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBpbnRlcm5hbC50aWNrO1xuXHR9XG59KTtcbmV4cG9ydHMuYWZ0ZXJVcGRhdGUgPSBhZnRlclVwZGF0ZTtcbmV4cG9ydHMuYmVmb3JlVXBkYXRlID0gYmVmb3JlVXBkYXRlO1xuZXhwb3J0cy5vbk1vdW50ID0gb25Nb3VudDtcbiIsICI8c2NyaXB0PlxuICAgIC8vIGltcG9ydCB7Zmx5fSBmcm9tIFwic3ZlbHRlL3RyYW5zaXRpb25cIlxuICAgIC8vIGltcG9ydCB7ZWxhc3RpY091dH0gZnJvbSBcInN2ZWx0ZS9lYXNpbmdcIlxuICAgIGltcG9ydCB7IGFmdGVyVXBkYXRlLCBvbkRlc3Ryb3ksIG9uTW91bnQgfSBmcm9tIFwic3ZlbHRlXCI7XG4gICAgaW1wb3J0IHsgY3VzdG9tUGVyY2VudFN0b3JlIH0gZnJvbSBcIi4uL3N0b3Jlc1wiO1xuXG4gICAgZXhwb3J0IGxldCBwb2ludGVycztcbiAgICBleHBvcnQgbGV0IGNhckRhdGE7XG4gICAgZXhwb3J0IGxldCBjYXJMZWFzZTI7XG4gICAgZXhwb3J0IGxldCBwZXJjZW50YWdlczI7XG4gICAgZXhwb3J0IGxldCB0eXBlT2ZQZXJzb24yO1xuICAgIGV4cG9ydCBsZXQgdHlwZU9mTGVhc2UyO1xuICAgIGV4cG9ydCBsZXQgY2hlY2tlZDI7XG4gICAgZXhwb3J0IGxldCBoaW5kO1xuICAgIGV4cG9ydCBsZXQgcHVzaEV2ZW50O1xuICAgIGV4cG9ydCBsZXQgY3VzdG9tUGVyY2VudDtcblxuICAgIGZ1bmN0aW9uIHVzZUVmZmVjdChjYiwgZGVwcykge1xuICAgICAgICBsZXQgY2xlYW51cDtcblxuICAgICAgICBmdW5jdGlvbiBhcHBseSgpIHtcbiAgICAgICAgICAgIGlmIChjbGVhbnVwKSBjbGVhbnVwKCk7XG4gICAgICAgICAgICBjbGVhbnVwID0gY2IoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkZXBzKSB7XG4gICAgICAgICAgICBsZXQgdmFsdWVzID0gW107XG4gICAgICAgICAgICBhZnRlclVwZGF0ZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3X3ZhbHVlcyA9IGRlcHMoKTtcbiAgICAgICAgICAgICAgICBpZiAobmV3X3ZhbHVlcy5zb21lKCh2YWx1ZSwgaSkgPT4gdmFsdWUgIT09IHZhbHVlc1tpXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzID0gbmV3X3ZhbHVlcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG5vIGRlcHMgPSBhbHdheXMgcnVuXG4gICAgICAgICAgICBhZnRlclVwZGF0ZShhcHBseSk7XG4gICAgICAgIH1cblxuICAgICAgICBvbkRlc3Ryb3koKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNsZWFudXApIGNsZWFudXAoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IGJvZHkgPSBcIlwiO1xuICAgIGxldCBtZXNzYWdlc0VsZW1lbnQ7XG5cbiAgICAkOiBjaGFyQ291bnQgPSBib2R5Lmxlbmd0aDtcblxuICAgIC8vIGFmdGVyVXBkYXRlKCgpID0+IG1lc3NhZ2VzRWxlbWVudC5zY3JvbGwoe3RvcDogbWVzc2FnZXNFbGVtZW50LnNjcm9sbEhlaWdodCwgYmVoYXZpb3I6IFwic21vb3RoXCJ9KSlcblxuICAgIGZ1bmN0aW9uIHN1Ym1pdE1lc3NhZ2UoKSB7XG4gICAgICAgIGlmIChib2R5ID09PSBcIlwiKSByZXR1cm47XG4gICAgICAgIHB1c2hFdmVudChcInNlbmRfbWVzc2FnZVwiLCB7IGJvZHkgfSk7XG4gICAgICAgIGJvZHkgPSBcIlwiO1xuICAgIH1cblxuICAgICQ6IHVuaXh0aW1lID0gRGF0ZS5ub3coKSAvIDEwMDA7XG4gICAgLy8gJDogeSA9IDUwO1xuXG4gICAgb25Nb3VudChhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdW5peHRpbWUgPSBEYXRlLm5vdygpIC8gMTAwMDtcbiAgICAgICAgfSwgMTAwMCk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3X3ggPSAoZS5wYWdlWCAvIHdpbmRvdy5pbm5lcldpZHRoKSAqIDEwMDsgLy8gaW4gJVxuICAgICAgICAgICAgY29uc3QgbmV3X3kgPSAoZS5wYWdlWSAvIHdpbmRvdy5pbm5lckhlaWdodCkgKiAxMDA7IC8vIGluICVcbiAgICAgICAgICAgIC8vIHRoaXMucHVzaEV2ZW50KCdjdXJzb3ItbW92ZScsIHsgeCwgeSB9KTtcbiAgICAgICAgICAgIHB1c2hFdmVudChcImN1cnNvci1tb3ZlXCIsIHsgbmV3X3gsIG5ld195IH0pO1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm5ld194XCIsIG5ld194KTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwibmV3X3lcIiwgbmV3X3kpO1xuXG4gICAgICAgICAgICAvLyB4ID0gbmV3X3g7XG4gICAgICAgICAgICAvLyB5ID0gbmV3X3k7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBjYXJMZWFzZSA9IHtcbiAgICAgICAgLy8gICAgIHByaWNlOiBjYXJEYXRhLmNhckxlYXNlLnByaWNlLFxuICAgICAgICAvLyAgICAgcGVyaW9kOiBOdW1iZXIoY2FyRGF0YS5jYXJMZWFzZS5wZXJpb2QpLFxuICAgICAgICAvLyAgICAgc2VsZl9maW5hbmNlOiBOdW1iZXIoY2FyRGF0YS5jYXJMZWFzZS5zZWxmX2ZpbmFuY2UpLFxuICAgICAgICAvLyAgICAgcHJpY2VfbGVmdDogTnVtYmVyKGNhckRhdGEuY2FyTGVhc2UucHJpY2VfbGVmdCksXG4gICAgICAgIC8vIH07XG4gICAgfSk7XG4gICAgaW1wb3J0IEJhbmsgZnJvbSBcIi4vQmFuay5zdmVsdGVcIjtcblxuICAgIGNvbnNvbGUubG9nKGhpbmQpO1xuXG4gICAgJDoga2FpYmVtYWtzZSA9IDEuMjtcblxuICAgIGNvbnNvbGUubG9nKFwiY2FyZERhdGFcIik7XG4gICAgY29uc29sZS5sb2coY2FyRGF0YSk7XG4gICAgLy8gbGV0IGNhckxlYXNlID0ge1xuICAgIC8vICAgICBwcmljZTogY2FyTGVhc2UyLnByaWNlLFxuICAgIC8vICAgICBwZXJpb2Q6IE51bWJlcihjYXJMZWFzZTIucGVyaW9kKSxcbiAgICAvLyAgICAgc2VsZl9maW5hbmNlOiBOdW1iZXIoY2FyTGVhc2UyLnNlbGZfZmluYW5jZSksXG4gICAgLy8gICAgIHByaWNlX2xlZnQ6IE51bWJlcihjYXJMZWFzZTIucHJpY2VfbGVmdCksXG4gICAgLy8gfTtcbiAgICAvLyAkOiBjYXJMZWFzZSA9IHtcbiAgICAvLyAgICAgcHJpY2U6IDAsXG4gICAgLy8gICAgIHBlcmlvZDogMCxcbiAgICAvLyAgICAgc2VsZl9maW5hbmNlOiAwLFxuICAgIC8vICAgICBwcmljZV9sZWZ0OiAwLFxuICAgIC8vIH07XG5cbiAgICAvLyBsZXQgcGVyY2VudGFnZXMgPSB7XG4gICAgLy8gICAgIHNlbGZfZmluYW5jZTogTnVtYmVyKGNhckRhdGEucGVyY2VudGFnZXMuc2VsZl9maW5hbmNlKSxcbiAgICAvLyAgICAgcHJpY2VfbGVmdDogTnVtYmVyKGNhckRhdGEucGVyY2VudGFnZXMucHJpY2VfbGVmdCksXG4gICAgLy8gfTtcblxuICAgICQ6IGNoZWNrZWQgPSBmYWxzZTtcblxuICAgICQ6IHR5cGVPZkxlYXNlID0gXCJrYXN1dHVzXCI7XG4gICAgJDogdHlwZU9mUGVyc29uID0gXCJwcml2YXRlXCI7XG5cbiAgICAvLyBsZXQgaW50ZXJlc3QgPSAxLjk7XG4gICAgLy8gZnVuY3Rpb24gaGFuZGxlQ3VzdG9tQmFuaygpIHtcbiAgICAvLyBpZiAoY2hlY2tlZCA9PSB0cnVlKSB7XG4gICAgLy8gICAgIGJhbmtzLnB1c2goY3VzdG9tKTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgICBiYW5rcy5zcGxpY2UoXG4gICAgLy8gICAgICAgICBiYW5rcy5maW5kSW5kZXgoKGEpID0+IGEubmFtZSA9PT0gXCJDdXN0b21cIiksXG4gICAgLy8gICAgICAgICAxXG4gICAgLy8gICAgICk7XG4gICAgLy8gfVxuICAgIC8vIGNvbnNvbGUubG9nKGNoZWNrZWQpO1xuICAgIC8vIGNvbnNvbGUubG9nKGJhbmtzKTtcbiAgICAvLyB9XG5cbiAgICAvLyBpLnBheW1lbnQ9aS5pbnRlcmVzdC8xMDAvMTIqaS5wcmljZS8oMS0xL01hdGgucG93KGkuaW50ZXJlc3QvMTAwLzEyKzEsaS5wZXJpb2QpXG4gICAgLy8gaS5wYXltZW50PU1hdGgucm91bmQoMTAwKmkucGF5bWVudCkvMTAwXG5cbiAgICAvLyBvLnBheW1lbnQ9by5pbnRlcmVzdC8xMDAvMTIqby5sb2FuLygxLTEvTWF0aC5wb3coby5pbnRlcmVzdC8xMDAvMTIrMSxvLnBlcmlvZCkpOm8ucHJpY2VCYXNlZEludGVyZXN0P1xuICAgIC8vIG8ucGF5bWVudD0oby5wcmljZS1vLmFkdmFuY2UrKG8ucHJpY2Utby5hZHZhbmNlKSooby5pbnRlcmVzdC8xMDAvMTIqby5wZXJpb2QpKS9vLnBlcmlvZDpcbiAgICAvLyBvLnBheW1lbnQ9by5pbnRlcmVzdC8xMDAvMTIqKG8ucHJpY2Utby5hZHZhbmNlKS8oMS0xL01hdGgucG93KG8uaW50ZXJlc3QvMTAwLzEyKzEsby5wZXJpb2QpKSxvLnBheW1lbnQ9TWF0aC5yb3VuZCgxMDAqby5wYXltZW50KS8xMDBcblxuICAgIC8vICQ6IG1vbnRobHlQcmljZSA9XG4gICAgLy8gICAgIE1hdGgucm91bmQoXG4gICAgLy8gICAgICAgICAxMDAgKlxuICAgIC8vICAgICAgICAgICAgICgoKGludGVyZXN0IC8gMTAwIC8gMTIpICpcbiAgICAvLyAgICAgICAgICAgICAgICAgKGNhckxlYXNlLnByaWNlIC0gY2FyTGVhc2Uuc2VsZl9maW5hbmNlKSkgL1xuICAgIC8vICAgICAgICAgICAgICAgICAoMSAtXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAxIC8gTWF0aC5wb3coaW50ZXJlc3QgLyAxMDAgLyAxMiArIDEsIGNhckxlYXNlLnBlcmlvZCkpKVxuICAgIC8vICAgICApIC8gMTAwO1xuICAgIC8vICQ6IG1vbnRobHlQcmljZSA9XG4gICAgLy8gICAgIChjYXJMZWFzZS5wcmljZSAtXG4gICAgLy8gICAgICAgICBjYXJMZWFzZS5zZWxmX2ZpbmFuY2UgK1xuICAgIC8vICAgICAgICAgKGNhckxlYXNlLnByaWNlIC0gY2FyTGVhc2Uuc2VsZl9maW5hbmNlKSAqXG4gICAgLy8gICAgICAgICAgICAgKChpbnRlcmVzdCAvIDEwMCAvIDEyKSAqIGNhckxlYXNlLnBlcmlvZCkpIC9cbiAgICAvLyAgICAgY2FyTGVhc2UucGVyaW9kO1xuICAgIC8vICQ6IG1vbnRobHlQcmljZSA9XG4gICAgLy8gICAgICgoY2FyTGVhc2UucHJpY2UgLVxuICAgIC8vICAgICAgICAgKGNhckxlYXNlLnNlbGZfZmluYW5jZSA9PT0gXCJcIiA/IDAgOiBjYXJMZWFzZS5zZWxmX2ZpbmFuY2UpIC1cbiAgICAvLyAgICAgICAgIChjYXJMZWFzZS5wcmljZV9sZWZ0ID09PSBcIlwiID8gMCA6IGNhckxlYXNlLnByaWNlX2xlZnQpKSAvXG4gICAgLy8gICAgICAgICBjYXJMZWFzZS5wZXJpb2QpICpcbiAgICAvLyAgICAgKGludGVyZXN0ID09PSBcIlwiID8gMSA6IGludGVyZXN0IC8gMTAwICsgMSk7XG5cbiAgICAvLyAkOiBjdXJyZW50SW50ZXJlc3QgPSBpbnRlcmVzdCA9PT0gXCJcIiA/IDAgOiBOdW1iZXIoaW50ZXJlc3QpO1xuICAgIC8vICQ6IGNhclByaWNlID1cbiAgICAvLyAgICAgY2FyTGVhc2UucHJpY2UgLVxuICAgIC8vICAgICAoY2FyTGVhc2Uuc2VsZl9maW5hbmNlID09PSBcIlwiID8gMCA6IGNhckxlYXNlLnNlbGZfZmluYW5jZSkgLVxuICAgIC8vICAgICAoY2FyTGVhc2UucHJpY2VfbGVmdCA9PT0gXCJcIiA/IDAgOiBjYXJMZWFzZS5wcmljZV9sZWZ0KTtcblxuICAgIC8vICQ6IG1vbnRobHlQcmljZSA9XG4gICAgLy8gICAgIE1hdGgucm91bmQoMTAwICogKChjdXJyZW50SW50ZXJlc3QgLyAxMDAgLyAxMikgKiBjYXJQcmljZSkpIC9cbiAgICAvLyAgICAgKDEgLSAxIC8gTWF0aC5wb3coY3VycmVudEludGVyZXN0IC8gMTAwIC8gMTIgKyAxLCBjYXJMZWFzZS5wZXJpb2QpKSAvXG4gICAgLy8gICAgIDEwMDtcblxuICAgIGV4cG9ydCBsZXQgdG91Y2hlZCA9IFwiXCI7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UyKCkge1xuICAgICAgICBpZiAodG91Y2hlZCA9PSBcImhpbmRcIikge1xuICAgICAgICAgICAgY2FyTGVhc2UyLnNlbGZfZmluYW5jZSA9XG4gICAgICAgICAgICAgICAgKHBlcmNlbnRhZ2VzMi5zZWxmX2ZpbmFuY2UgKiBjYXJMZWFzZTIucHJpY2UpIC8gMTAwO1xuICAgICAgICAgICAgY2FyTGVhc2UyLnNlbGZfZmluYW5jZSA9IGNhckxlYXNlMi5zZWxmX2ZpbmFuY2UudG9GaXhlZCgyKTtcblxuICAgICAgICAgICAgY2FyTGVhc2UyLnByaWNlX2xlZnQgPVxuICAgICAgICAgICAgICAgIChwZXJjZW50YWdlczIucHJpY2VfbGVmdCAqIGNhckxlYXNlMi5wcmljZSkgLyAxMDA7XG4gICAgICAgICAgICBjYXJMZWFzZTIucHJpY2VfbGVmdCA9IGNhckxlYXNlMi5wcmljZV9sZWZ0LnRvRml4ZWQoMik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRvdWNoZWQgPT0gXCJzZWxmX2ZpbmFuY2VcIikge1xuICAgICAgICAgICAgcGVyY2VudGFnZXMyLnNlbGZfZmluYW5jZSA9XG4gICAgICAgICAgICAgICAgKGNhckxlYXNlMi5zZWxmX2ZpbmFuY2UgKiAxMDApIC8gY2FyTGVhc2UyLnByaWNlO1xuICAgICAgICAgICAgcGVyY2VudGFnZXMyLnNlbGZfZmluYW5jZSA9IHBlcmNlbnRhZ2VzMi5zZWxmX2ZpbmFuY2UudG9GaXhlZCgyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0b3VjaGVkID09IFwic2VsZl9maW5hbmNlX3BlclwiKSB7XG4gICAgICAgICAgICBjYXJMZWFzZTIuc2VsZl9maW5hbmNlID1cbiAgICAgICAgICAgICAgICAocGVyY2VudGFnZXMyLnNlbGZfZmluYW5jZSAqIGNhckxlYXNlMi5wcmljZSkgLyAxMDA7XG4gICAgICAgICAgICBjYXJMZWFzZTIuc2VsZl9maW5hbmNlID0gY2FyTGVhc2UyLnNlbGZfZmluYW5jZS50b0ZpeGVkKDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRvdWNoZWQgPT0gXCJwcmljZV9sZWZ0XCIpIHtcbiAgICAgICAgICAgIHBlcmNlbnRhZ2VzMi5wcmljZV9sZWZ0ID1cbiAgICAgICAgICAgICAgICAoY2FyTGVhc2UyLnByaWNlX2xlZnQgKiAxMDApIC8gY2FyTGVhc2UyLnByaWNlO1xuICAgICAgICAgICAgcGVyY2VudGFnZXMyLnByaWNlX2xlZnQgPSBwZXJjZW50YWdlczIucHJpY2VfbGVmdC50b0ZpeGVkKDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRvdWNoZWQgPT0gXCJwcmljZV9sZWZ0X3BlclwiKSB7XG4gICAgICAgICAgICBjYXJMZWFzZTIucHJpY2VfbGVmdCA9XG4gICAgICAgICAgICAgICAgKHBlcmNlbnRhZ2VzMi5wcmljZV9sZWZ0ICogY2FyTGVhc2UyLnByaWNlKSAvIDEwMDtcbiAgICAgICAgICAgIGNhckxlYXNlMi5wcmljZV9sZWZ0ID0gY2FyTGVhc2UyLnByaWNlX2xlZnQudG9GaXhlZCgyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoZWNrZWRJbnZlcnNlID0gY2hlY2tlZDI7XG5cbiAgICAgICAgaWYgKGNoZWNrZWQyID09IHRydWUpIHtcbiAgICAgICAgICAgIGlmICh0b3VjaGVkID09IFwiY3VzdG9tXCIpIHtcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tlZE5ldyA9IGNoZWNrZWQyO1xuICAgICAgICAgICAgICAgIGlmIChjaGVja2VkTmV3ID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWRJbnZlcnNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjaGVja2VkSW52ZXJzZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjdXN0b21QZXJjZW50TmV3ID0gJGN1c3RvbVBlcmNlbnRTdG9yZTtcbiAgICAgICAgY29uc29sZS5sb2coXCJjdXN0b21cIik7XG4gICAgICAgIGNvbnNvbGUubG9nKCRjdXN0b21QZXJjZW50U3RvcmUpO1xuICAgICAgICBjb25zb2xlLmxvZyhjdXN0b21QZXJjZW50KTtcbiAgICAgICAgcHVzaEV2ZW50KFwidXBkYXRlZC1kYXRhXCIsIHtcbiAgICAgICAgICAgIGNhckxlYXNlMixcbiAgICAgICAgICAgIHBlcmNlbnRhZ2VzMixcbiAgICAgICAgICAgIHR5cGVPZkxlYXNlMixcbiAgICAgICAgICAgIHR5cGVPZlBlcnNvbjIsXG4gICAgICAgICAgICBjaGVja2VkSW52ZXJzZSxcbiAgICAgICAgICAgIGN1c3RvbVBlcmNlbnROZXcsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdChcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlMigpO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiBbJGN1c3RvbVBlcmNlbnRTdG9yZV1cbiAgICApO1xuICAgIC8vICQ6ICRjdXN0b21QZXJjZW50U3RvcmUsIHVwZGF0ZUN1c3RvbVBlcmNlbnQoKTtcblxuICAgIC8vIGZ1bmN0aW9uIHVwZGF0ZUN1c3RvbVBlcmNlbnQoKSB7XG5cbiAgICAvLyAgICAgJGN1c3RvbVBlcmNlbnRTdG9yZSA9IGJhbmsuaW50ZXJlc3Q7XG4gICAgLy8gICAgIGxldCBuZXdDdXN0b21QZXJjZW50ID0gJGN1c3RvbVBlcmNlbnRTdG9yZTtcblxuICAgIC8vICAgICBwdXNoRXZlbnQoXCJjdXN0b21fYmFua1wiLCB7XG4gICAgLy8gICAgICAgICBuZXdDdXN0b21QZXJjZW50LFxuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG5cbiAgICBjb25zdCBiYW5rcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJTd2VkQmFua1wiLFxuICAgICAgICAgICAgaW50ZXJlc3Q6IDIuMjksXG4gICAgICAgICAgICBsb2dvOiBcIi9pbWFnZXMvc3dlZGJhbmsuanBnXCIsXG4gICAgICAgICAgICBsaW5rOiBcImh0dHBzOi8vd3d3LnN3ZWRiYW5rLmVlL2J1c2luZXNzL2ZpbmFuY2UvbGVhc2luZy9jYXJcIixcbiAgICAgICAgICAgIGV1cm9ib3JBZWc6IFwiNiBrdXVcIixcbiAgICAgICAgICAgIGVsZWN0cm9DYXJTdXBwb3J0OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkxIVlwiLFxuICAgICAgICAgICAgaW50ZXJlc3Q6IDEuOTUsXG4gICAgICAgICAgICBsb2dvOiBcIi9pbWFnZXMvbGh2LmpwZ1wiLFxuICAgICAgICAgICAgbGluazogXCJodHRwczovL3d3dy5saHYuZWUvZXQvbGlpc2luZ1wiLFxuICAgICAgICAgICAgZXVyb2JvckFlZzogXCI2IGt1dVwiLFxuICAgICAgICAgICAgZWxlY3Ryb0NhclN1cHBvcnQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIlNFQlwiLFxuICAgICAgICAgICAgaW50ZXJlc3Q6IDEuNDUsXG4gICAgICAgICAgICBsb2dvOiBcIi9pbWFnZXMvc2ViLmpwZ1wiLFxuICAgICAgICAgICAgbGluazogXCJodHRwczovL3d3dy5zZWIuZWUvZXJha2xpZW50L2xhZW51ZC9saWlzaW5nLW11Z2F2LXZpaXMtc29pZHVraS1zb2V0YW1pc2Vrc1wiLFxuICAgICAgICAgICAgZXVyb2JvckFlZzogXCI2IGt1dVwiLFxuICAgICAgICAgICAgZWxlY3Ryb0NhclN1cHBvcnQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkNPT1BcIixcbiAgICAgICAgICAgIGludGVyZXN0OiAxLjk5LFxuICAgICAgICAgICAgbG9nbzogXCIvaW1hZ2VzL2Nvb3AuanBnXCIsXG4gICAgICAgICAgICBsaW5rOiBcImh0dHBzOi8vd3d3LmNvb3BwYW5rLmVlL2F1dG9saWlzaW5nXCIsXG4gICAgICAgICAgICBldXJvYm9yQWVnOiBcIjYga3V1XCIsXG4gICAgICAgICAgICBlbGVjdHJvQ2FyU3VwcG9ydDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiTHVtaW5vclwiLFxuICAgICAgICAgICAgaW50ZXJlc3Q6IDIuNDksXG4gICAgICAgICAgICBsb2dvOiBcIi9pbWFnZXMvbHVtaW5vci5wbmdcIixcbiAgICAgICAgICAgIGxpbms6IFwiaHR0cHM6Ly9sdW1pbm9yLmVlL2VyYS9saWlzaW5nP3N0YXRpYz10cnVlXCIsXG4gICAgICAgICAgICBldXJvYm9yQWVnOiBcIjMga3V1XCIsXG4gICAgICAgICAgICBlbGVjdHJvQ2FyU3VwcG9ydDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgXTtcblxuICAgICQ6IGN1c3RvbUJhbmsgPSB7XG4gICAgICAgIG5hbWU6IFwiT21hXCIsXG4gICAgICAgIGludGVyZXN0OiBjdXN0b21QZXJjZW50LFxuICAgICAgICBsb2dvOiBcIlwiLFxuICAgICAgICBldXJvYm9yQWVnOiBcIjYga3V1XCIsXG4gICAgfTtcblxuICAgIGNvbnN0IGV1cm9ib3JQcmljZXMgPSB7XG4gICAgICAgIFwiMyBrdXVcIjogMy4zODgsXG4gICAgICAgIFwiNiBrdXVcIjogMy42NzEsXG4gICAgICAgIFwiMTIga3V1XCI6IDMuODM0LFxuICAgIH07XG48L3NjcmlwdD5cblxuPGRpdiBjbGFzcz1cImNvbnRhaW50ZXIgZmxleCBqdXN0aWZ5LWNlbnRlciBjb250ZW50LWFsaWduLWNvbHVtblwiPlxuICAgIDxoMSBjbGFzcz1cInAtMiBtYi02IGZvbnQtYm9sZCB0ZXh0LTN4bCBzbTp0ZXh0LTV4bCBtZDp0ZXh0LTV4bFwiPlxuICAgICAgICBBdXRvbGlpc2luZyBLYWxrdWxhYXRvclxuICAgIDwvaDE+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJjb250YWludGVyIGZsZXgganVzdGlmeS1jZW50ZXIgY29udGVudC1hbGlnbi1jb2x1bW5cIj5cbiAgICA8ZGl2PlxuICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIiBvbjpjaGFuZ2U9e2hhbmRsZUNoYW5nZTJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQgZ2FwLTYgbWItNiBtZDpncmlkLWNvbHMtM1wiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYXBwZWFyYW5jZS1ub25lIHNoYWRvdy1zbSBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHAtMiBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWdyYXktNTAwIHJvdW5kZWQtbGcgd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJpbmQ6dmFsdWU9e3R5cGVPZkxlYXNlMn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibGVhc2VfdHlwZVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJrYXN1dHVzXCI+S2FzdXR1c3JlbnQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJrYXBpdGFsXCI+S2FwaXRhbGlyZW50PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYXBwZWFyYW5jZS1ub25lIHNoYWRvdy1zbSBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHAtMiBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWdyYXktNTAwIHJvdW5kZWQtbGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBiaW5kOnZhbHVlPXt0eXBlT2ZQZXJzb24yfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwZXJzb25fdHlwZVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwcml2YXRlXCI+ZXJhaXNpa3VuYTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxlZ2FsXCI+anVyaWlkaWxpc2UgaXNpa3VuYTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWNvbnRlbnQtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicmVsYXRpdmUgaC01IHctNSBjdXJzb3ItcG9pbnRlciByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItYmx1ZS1ncmF5LTIwMCB0cmFuc2l0aW9uLWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJvbWFfcGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmluZDpjaGVja2VkPXtjaGVja2VkMn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjpjbGljaz17KCkgPT4gKCkgPT4gKHRvdWNoZWQgPSBcImN1c3RvbVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwib21hX3BhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJvbWFfcGFua1wiIGNsYXNzPVwicGwtMlwiPk9tYSBQYW5rPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkIGdhcC02IG1iLTYgbWQ6Z3JpZC1jb2xzLTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcj1cInByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYmxvY2sgbWItMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPkhpbmQ8L2xhYmVsXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImFwcGVhcmFuY2Utbm9uZSBzaGFkb3ctc20gYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBwLTIgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ncmF5LTUwMCByb3VuZGVkLWxnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJpbmQ6dmFsdWU9e2NhckxlYXNlMi5wcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOmNsaWNrPXsoKSA9PiAodG91Y2hlZCA9IFwiaGluZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOmlucHV0PXtoYW5kbGVDaGFuZ2UyfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJIaW5kXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcj1cImxlbmd0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJsb2NrIG1iLTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5QZXJpb29kPC9sYWJlbFxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJhcHBlYXJhbmNlLW5vbmUgc2hhZG93LXNtIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcC0yIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItZ3JheS01MDAgcm91bmRlZC1sZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBiaW5kOnZhbHVlPXtjYXJMZWFzZTIucGVyaW9kfVxuICAgICAgICAgICAgICAgICAgICAgICAgb246aW5wdXQ9e2hhbmRsZUNoYW5nZTJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImxlbmd0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGVuZ3RoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGVyaW9vZFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3I9XCJvbWFfZXVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYmxvY2sgbWItMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPk9tYWZpbmFudHNlZXJpbmcg4oKsPC9sYWJlbFxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJhcHBlYXJhbmNlLW5vbmUgc2hhZG93LXNtIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcC0yIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItZ3JheS01MDAgcm91bmRlZC1sZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBiaW5kOnZhbHVlPXtjYXJMZWFzZTIuc2VsZl9maW5hbmNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb246Y2xpY2s9eygpID0+ICh0b3VjaGVkID0gXCJzZWxmX2ZpbmFuY2VcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbjppbnB1dD17aGFuZGxlQ2hhbmdlMn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwib21hX2V1clwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwib21hX2V1clwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk9tYWZpbmFudHNlZXJpbmcg4oKsXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcj1cIm9tYV9ldXJfcGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYmxvY2sgbWItMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPk9tYWZpbmFudHNlZXJpbmcgJTwvbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYXBwZWFyYW5jZS1ub25lIHNoYWRvdy1zbSBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHAtMiBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWdyYXktNTAwIHJvdW5kZWQtbGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYmluZDp2YWx1ZT17cGVyY2VudGFnZXMyLnNlbGZfZmluYW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOmNsaWNrPXsoKSA9PiAodG91Y2hlZCA9IFwic2VsZl9maW5hbmNlX3BlclwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOmlucHV0PXtoYW5kbGVDaGFuZ2UyfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJvbWFfZXVyX3BlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwib21hX2V1cl9wZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJPbWFmaW5hbnRzZWVyaW5nICVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsjaWYgdHlwZU9mTGVhc2UyID09IFwia2FzdXR1c1wifVxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yPVwiamFha19ldXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYmxvY2sgbWItMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5Kw6TDpGt2w6TDpHJ0dXMg4oKsPC9sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJhcHBlYXJhbmNlLW5vbmUgc2hhZG93LXNtIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcC0yIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItZ3JheS01MDAgcm91bmRlZC1sZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmluZDp2YWx1ZT17Y2FyTGVhc2UyLnByaWNlX2xlZnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246Y2xpY2s9eygpID0+ICh0b3VjaGVkID0gXCJwcmljZV9sZWZ0XCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOmlucHV0PXtoYW5kbGVDaGFuZ2UyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiamFha19ldXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiamFha19ldXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSsOkw6RrdsOkw6RydHVzIOKCrFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcj1cImphYWtfZXVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJsb2NrIG1iLTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+SsOkw6RrdsOkw6RydHVzICU8L2xhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImFwcGVhcmFuY2Utbm9uZSBzaGFkb3ctc20gYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBwLTIgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ncmF5LTUwMCByb3VuZGVkLWxnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaW5kOnZhbHVlPXtwZXJjZW50YWdlczIucHJpY2VfbGVmdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjpjbGljaz17KCkgPT4gKHRvdWNoZWQgPSBcInByaWNlX2xlZnRfcGVyXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOmlucHV0PXtoYW5kbGVDaGFuZ2UyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiamFha19wZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSsOkw6RrdsOkw6RydHVzICUgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuPC9kaXY+XG5cbjwhLS0gY2xhc3M9e2BncmlkIGdhcC02IG1iLTYgJHtcbiAgICAgICAgICAgICAgICBjaGVja2VkID8gXCJsZzpncmlkLWNvbHMtNVwiIDogXCJsZzpncmlkLWNvbHMtNFwiXG4gICAgICAgICAgICB9ICR7Y2hlY2tlZCA/IFwibWQ6Z3JpZC1jb2xzLTNcIiA6IFwibWQ6Z3JpZC1jb2xzLTNcIn0gZ3JpZC1jb2xzLTFgfSAtLT5cbjxkaXYgY2xhc3M9XCJjb250YWludGVyIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz17YGdyaWQgZ2FwLTYgbWItNiBsZzpncmlkLWNvbHMtNCBtZDpncmlkLWNvbHMtMyBzbTpncmlkLWNvbHMtMiBncmlkLWNvbHMtMWB9XG4gICAgICAgID5cbiAgICAgICAgICAgIHsjaWYgY2hlY2tlZDIgPT09IHRydWV9XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPEJhbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhbms9e2N1c3RvbUJhbmt9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJMZWFzZT17Y2FyTGVhc2UyfVxuICAgICAgICAgICAgICAgICAgICAgICAge2thaWJlbWFrc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXt0eXBlT2ZMZWFzZTJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzb249e3R5cGVPZlBlcnNvbjJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXVyb2JvclByaWNlc31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICB7I2VhY2ggYmFua3MgYXMgYmFuayAoYmFuay5uYW1lKX1cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8QmFua1xuICAgICAgICAgICAgICAgICAgICAgICAge2Jhbmt9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJMZWFzZT17Y2FyTGVhc2UyfVxuICAgICAgICAgICAgICAgICAgICAgICAge2thaWJlbWFrc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXt0eXBlT2ZMZWFzZTJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzb249e3R5cGVPZlBlcnNvbjJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXVyb2JvclByaWNlc31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cblxuPGJyIC8+XG48aHIgLz5cbjxiciAvPlxuXG48ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgIDxwIGNsYXNzPVwidGV4dC1ncmF5LTUwMCB0ZXh0LXhzXCI+XG4gICAgICAgICpUdWxlbXVzIG9uIGxpZ2lrYXVkbmUgamEgdsO1aWIgZXJpbmVkYSBzdWxsZSBwYWt1dGF2YXRlc3QgdGluZ2ltdXN0ZXN0KlxuICAgIDwvcD5cbjwvZGl2PlxuXG57I2VhY2ggT2JqZWN0LmVudHJpZXMocG9pbnRlcnMpIGFzIFt1c2VyX2lkLCB1c2VyX3BvaW50ZXJdfVxuICAgIHsjaWYgdW5peHRpbWUgLSB1c2VyX3BvaW50ZXIudW5peHRpbWUgPCA1fVxuICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LW5vbmVcIiBpZD17dXNlcl9pZH0+XG4gICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBzdHlsZT17XCJjb2xvcjogZGVlcHBpbms7IGxlZnQ6IFwiICtcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9wb2ludGVyLnggK1xuICAgICAgICAgICAgICAgICAgICBcIiU7IHRvcDogXCIgK1xuICAgICAgICAgICAgICAgICAgICB1c2VyX3BvaW50ZXIueSArXG4gICAgICAgICAgICAgICAgICAgIFwiJVwifVxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZmxleCBmbGV4LWNvbCBhYnNvbHV0ZSBwb2ludGVyLWV2ZW50cy1ub25lIHdoaXRlc3BhY2Utbm93cmFwIG92ZXJmbG93LWhpZGRlblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIxIDIxXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRzPVwiOC4yLDIwLjkgOC4yLDQuOSAxOS44LDE2LjUgMTMsMTYuNSAxMi42LDE2LjZcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8cG9seWdvblxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludHM9XCI5LjIsNy4zIDkuMiwxOC41IDEyLjIsMTUuNiAxMi42LDE1LjUgMTcuNCwxNS41XCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgey9pZn1cbnsvZWFjaH1cbiIsICJcbiAgICAgICAgaW1wb3J0ICogYXMgbW9kdWxlMCBmcm9tICcuLi9zdmVsdGUvQmFuay5zdmVsdGUnO2ltcG9ydCAqIGFzIG1vZHVsZTEgZnJvbSAnLi4vc3ZlbHRlL0NhbGN1bGF0b3Iuc3ZlbHRlJztpbXBvcnQgKiBhcyBtb2R1bGUyIGZyb20gJy4uL3N2ZWx0ZS9IZWFkZXIuc3ZlbHRlJ1xuXG4gICAgICAgIGNvbnN0IG1vZHVsZXMgPSBbbW9kdWxlMCxtb2R1bGUxLG1vZHVsZTJdO1xuXG4gICAgICAgIGV4cG9ydCBkZWZhdWx0IG1vZHVsZXM7XG4gICAgICAgIGV4cG9ydCBjb25zdCBmaWxlbmFtZXMgPSBbJy4uL3N2ZWx0ZS9CYW5rLnN2ZWx0ZScsJy4uL3N2ZWx0ZS9DYWxjdWxhdG9yLnN2ZWx0ZScsJy4uL3N2ZWx0ZS9IZWFkZXIuc3ZlbHRlJ11cbiAgICAgICIsICIvKioqXG4gKiBSZW5kZXIgYSBjb21wb25lbnQgd2l0aCB0aGUgbmFtZSwgcHJvcHMgYW5kIHNsb3RzIHByb3ZpZGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKG5hbWUsIHByb3BzID0ge30sIHNsb3RzID0gbnVsbCkge1xuICAgIC8vIHJlbW92ZSBmcm9tIGNhY2hlIGluIG5vbi1wcm9kdWN0aW9uIGVudmlyb25tZW50c1xuICAgIC8vIHNvIHRoYXQgd2UgY2FuIHNlZSBjaGFuZ2VzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiByZXF1aXJlLnJlc29sdmUoX19maWxlbmFtZSkgaW4gcmVxdWlyZS5jYWNoZSkge1xuICAgICAgICBkZWxldGUgcmVxdWlyZS5jYWNoZVtyZXF1aXJlLnJlc29sdmUoX19maWxlbmFtZSldXG4gICAgfVxuXG4gICAgY29uc3QgY29tcG9uZW50ID0gcmVxdWlyZShfX2ZpbGVuYW1lKVtuYW1lXS5kZWZhdWx0XG4gICAgY29uc3QgJCRzbG90cyA9IE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhzbG90cykubWFwKChbaywgdl0pID0+IFtrLCAoKSA9PiB2XSkpIHx8IHt9XG5cbiAgICByZXR1cm4gY29tcG9uZW50LnJlbmRlcihwcm9wcywgeyQkc2xvdHMsIGNvbnRleHQ6IG5ldyBNYXAoKX0pXG59XG4iLCAiZnVuY3Rpb24gbm9vcCgpIHsgfVxuY29uc3QgaWRlbnRpdHkgPSB4ID0+IHg7XG5mdW5jdGlvbiBhc3NpZ24odGFyLCBzcmMpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZm9yIChjb25zdCBrIGluIHNyYylcbiAgICAgICAgdGFyW2tdID0gc3JjW2tdO1xuICAgIHJldHVybiB0YXI7XG59XG4vLyBBZGFwdGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3RoZW4vaXMtcHJvbWlzZS9ibG9iL21hc3Rlci9pbmRleC5qc1xuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgTUlUIExpY2Vuc2UgaHR0cHM6Ly9naXRodWIuY29tL3RoZW4vaXMtcHJvbWlzZS9ibG9iL21hc3Rlci9MSUNFTlNFXG5mdW5jdGlvbiBpc19wcm9taXNlKHZhbHVlKSB7XG4gICAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gJ2Z1bmN0aW9uJztcbn1cbmZ1bmN0aW9uIGFkZF9sb2NhdGlvbihlbGVtZW50LCBmaWxlLCBsaW5lLCBjb2x1bW4sIGNoYXIpIHtcbiAgICBlbGVtZW50Ll9fc3ZlbHRlX21ldGEgPSB7XG4gICAgICAgIGxvYzogeyBmaWxlLCBsaW5lLCBjb2x1bW4sIGNoYXIgfVxuICAgIH07XG59XG5mdW5jdGlvbiBydW4oZm4pIHtcbiAgICByZXR1cm4gZm4oKTtcbn1cbmZ1bmN0aW9uIGJsYW5rX29iamVjdCgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsKTtcbn1cbmZ1bmN0aW9uIHJ1bl9hbGwoZm5zKSB7XG4gICAgZm5zLmZvckVhY2gocnVuKTtcbn1cbmZ1bmN0aW9uIGlzX2Z1bmN0aW9uKHRoaW5nKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGluZyA9PT0gJ2Z1bmN0aW9uJztcbn1cbmZ1bmN0aW9uIHNhZmVfbm90X2VxdWFsKGEsIGIpIHtcbiAgICByZXR1cm4gYSAhPSBhID8gYiA9PSBiIDogYSAhPT0gYiB8fCAoKGEgJiYgdHlwZW9mIGEgPT09ICdvYmplY3QnKSB8fCB0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJyk7XG59XG5sZXQgc3JjX3VybF9lcXVhbF9hbmNob3I7XG5mdW5jdGlvbiBzcmNfdXJsX2VxdWFsKGVsZW1lbnRfc3JjLCB1cmwpIHtcbiAgICBpZiAoIXNyY191cmxfZXF1YWxfYW5jaG9yKSB7XG4gICAgICAgIHNyY191cmxfZXF1YWxfYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIH1cbiAgICBzcmNfdXJsX2VxdWFsX2FuY2hvci5ocmVmID0gdXJsO1xuICAgIHJldHVybiBlbGVtZW50X3NyYyA9PT0gc3JjX3VybF9lcXVhbF9hbmNob3IuaHJlZjtcbn1cbmZ1bmN0aW9uIG5vdF9lcXVhbChhLCBiKSB7XG4gICAgcmV0dXJuIGEgIT0gYSA/IGIgPT0gYiA6IGEgIT09IGI7XG59XG5mdW5jdGlvbiBpc19lbXB0eShvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5sZW5ndGggPT09IDA7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZV9zdG9yZShzdG9yZSwgbmFtZSkge1xuICAgIGlmIChzdG9yZSAhPSBudWxsICYmIHR5cGVvZiBzdG9yZS5zdWJzY3JpYmUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAnJHtuYW1lfScgaXMgbm90IGEgc3RvcmUgd2l0aCBhICdzdWJzY3JpYmUnIG1ldGhvZGApO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHN1YnNjcmliZShzdG9yZSwgLi4uY2FsbGJhY2tzKSB7XG4gICAgaWYgKHN0b3JlID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG5vb3A7XG4gICAgfVxuICAgIGNvbnN0IHVuc3ViID0gc3RvcmUuc3Vic2NyaWJlKC4uLmNhbGxiYWNrcyk7XG4gICAgcmV0dXJuIHVuc3ViLnVuc3Vic2NyaWJlID8gKCkgPT4gdW5zdWIudW5zdWJzY3JpYmUoKSA6IHVuc3ViO1xufVxuZnVuY3Rpb24gZ2V0X3N0b3JlX3ZhbHVlKHN0b3JlKSB7XG4gICAgbGV0IHZhbHVlO1xuICAgIHN1YnNjcmliZShzdG9yZSwgXyA9PiB2YWx1ZSA9IF8pKCk7XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuZnVuY3Rpb24gY29tcG9uZW50X3N1YnNjcmliZShjb21wb25lbnQsIHN0b3JlLCBjYWxsYmFjaykge1xuICAgIGNvbXBvbmVudC4kJC5vbl9kZXN0cm95LnB1c2goc3Vic2NyaWJlKHN0b3JlLCBjYWxsYmFjaykpO1xufVxuZnVuY3Rpb24gY3JlYXRlX3Nsb3QoZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBmbikge1xuICAgIGlmIChkZWZpbml0aW9uKSB7XG4gICAgICAgIGNvbnN0IHNsb3RfY3R4ID0gZ2V0X3Nsb3RfY29udGV4dChkZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIGZuKTtcbiAgICAgICAgcmV0dXJuIGRlZmluaXRpb25bMF0oc2xvdF9jdHgpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldF9zbG90X2NvbnRleHQoZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBmbikge1xuICAgIHJldHVybiBkZWZpbml0aW9uWzFdICYmIGZuXG4gICAgICAgID8gYXNzaWduKCQkc2NvcGUuY3R4LnNsaWNlKCksIGRlZmluaXRpb25bMV0oZm4oY3R4KSkpXG4gICAgICAgIDogJCRzY29wZS5jdHg7XG59XG5mdW5jdGlvbiBnZXRfc2xvdF9jaGFuZ2VzKGRlZmluaXRpb24sICQkc2NvcGUsIGRpcnR5LCBmbikge1xuICAgIGlmIChkZWZpbml0aW9uWzJdICYmIGZuKSB7XG4gICAgICAgIGNvbnN0IGxldHMgPSBkZWZpbml0aW9uWzJdKGZuKGRpcnR5KSk7XG4gICAgICAgIGlmICgkJHNjb3BlLmRpcnR5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBsZXRzO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgbGV0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lcmdlZCA9IFtdO1xuICAgICAgICAgICAgY29uc3QgbGVuID0gTWF0aC5tYXgoJCRzY29wZS5kaXJ0eS5sZW5ndGgsIGxldHMubGVuZ3RoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBtZXJnZWRbaV0gPSAkJHNjb3BlLmRpcnR5W2ldIHwgbGV0c1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtZXJnZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICQkc2NvcGUuZGlydHkgfCBsZXRzO1xuICAgIH1cbiAgICByZXR1cm4gJCRzY29wZS5kaXJ0eTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZV9zbG90X2Jhc2Uoc2xvdCwgc2xvdF9kZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIHNsb3RfY2hhbmdlcywgZ2V0X3Nsb3RfY29udGV4dF9mbikge1xuICAgIGlmIChzbG90X2NoYW5nZXMpIHtcbiAgICAgICAgY29uc3Qgc2xvdF9jb250ZXh0ID0gZ2V0X3Nsb3RfY29udGV4dChzbG90X2RlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgZ2V0X3Nsb3RfY29udGV4dF9mbik7XG4gICAgICAgIHNsb3QucChzbG90X2NvbnRleHQsIHNsb3RfY2hhbmdlcyk7XG4gICAgfVxufVxuZnVuY3Rpb24gdXBkYXRlX3Nsb3Qoc2xvdCwgc2xvdF9kZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIGRpcnR5LCBnZXRfc2xvdF9jaGFuZ2VzX2ZuLCBnZXRfc2xvdF9jb250ZXh0X2ZuKSB7XG4gICAgY29uc3Qgc2xvdF9jaGFuZ2VzID0gZ2V0X3Nsb3RfY2hhbmdlcyhzbG90X2RlZmluaXRpb24sICQkc2NvcGUsIGRpcnR5LCBnZXRfc2xvdF9jaGFuZ2VzX2ZuKTtcbiAgICB1cGRhdGVfc2xvdF9iYXNlKHNsb3QsIHNsb3RfZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBzbG90X2NoYW5nZXMsIGdldF9zbG90X2NvbnRleHRfZm4pO1xufVxuZnVuY3Rpb24gZ2V0X2FsbF9kaXJ0eV9mcm9tX3Njb3BlKCQkc2NvcGUpIHtcbiAgICBpZiAoJCRzY29wZS5jdHgubGVuZ3RoID4gMzIpIHtcbiAgICAgICAgY29uc3QgZGlydHkgPSBbXTtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gJCRzY29wZS5jdHgubGVuZ3RoIC8gMzI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRpcnR5W2ldID0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRpcnR5O1xuICAgIH1cbiAgICByZXR1cm4gLTE7XG59XG5mdW5jdGlvbiBleGNsdWRlX2ludGVybmFsX3Byb3BzKHByb3BzKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgZm9yIChjb25zdCBrIGluIHByb3BzKVxuICAgICAgICBpZiAoa1swXSAhPT0gJyQnKVxuICAgICAgICAgICAgcmVzdWx0W2tdID0gcHJvcHNba107XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGNvbXB1dGVfcmVzdF9wcm9wcyhwcm9wcywga2V5cykge1xuICAgIGNvbnN0IHJlc3QgPSB7fTtcbiAgICBrZXlzID0gbmV3IFNldChrZXlzKTtcbiAgICBmb3IgKGNvbnN0IGsgaW4gcHJvcHMpXG4gICAgICAgIGlmICgha2V5cy5oYXMoaykgJiYga1swXSAhPT0gJyQnKVxuICAgICAgICAgICAgcmVzdFtrXSA9IHByb3BzW2tdO1xuICAgIHJldHVybiByZXN0O1xufVxuZnVuY3Rpb24gY29tcHV0ZV9zbG90cyhzbG90cykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAoY29uc3Qga2V5IGluIHNsb3RzKSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG9uY2UoZm4pIHtcbiAgICBsZXQgcmFuID0gZmFsc2U7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgIGlmIChyYW4pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHJhbiA9IHRydWU7XG4gICAgICAgIGZuLmNhbGwodGhpcywgLi4uYXJncyk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIG51bGxfdG9fZW1wdHkodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWU7XG59XG5mdW5jdGlvbiBzZXRfc3RvcmVfdmFsdWUoc3RvcmUsIHJldCwgdmFsdWUpIHtcbiAgICBzdG9yZS5zZXQodmFsdWUpO1xuICAgIHJldHVybiByZXQ7XG59XG5jb25zdCBoYXNfcHJvcCA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xuZnVuY3Rpb24gYWN0aW9uX2Rlc3Ryb3llcihhY3Rpb25fcmVzdWx0KSB7XG4gICAgcmV0dXJuIGFjdGlvbl9yZXN1bHQgJiYgaXNfZnVuY3Rpb24oYWN0aW9uX3Jlc3VsdC5kZXN0cm95KSA/IGFjdGlvbl9yZXN1bHQuZGVzdHJveSA6IG5vb3A7XG59XG5cbmNvbnN0IGlzX2NsaWVudCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xubGV0IG5vdyA9IGlzX2NsaWVudFxuICAgID8gKCkgPT4gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpXG4gICAgOiAoKSA9PiBEYXRlLm5vdygpO1xubGV0IHJhZiA9IGlzX2NsaWVudCA/IGNiID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZShjYikgOiBub29wO1xuLy8gdXNlZCBpbnRlcm5hbGx5IGZvciB0ZXN0aW5nXG5mdW5jdGlvbiBzZXRfbm93KGZuKSB7XG4gICAgbm93ID0gZm47XG59XG5mdW5jdGlvbiBzZXRfcmFmKGZuKSB7XG4gICAgcmFmID0gZm47XG59XG5cbmNvbnN0IHRhc2tzID0gbmV3IFNldCgpO1xuZnVuY3Rpb24gcnVuX3Rhc2tzKG5vdykge1xuICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGlmICghdGFzay5jKG5vdykpIHtcbiAgICAgICAgICAgIHRhc2tzLmRlbGV0ZSh0YXNrKTtcbiAgICAgICAgICAgIHRhc2suZigpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHRhc2tzLnNpemUgIT09IDApXG4gICAgICAgIHJhZihydW5fdGFza3MpO1xufVxuLyoqXG4gKiBGb3IgdGVzdGluZyBwdXJwb3NlcyBvbmx5IVxuICovXG5mdW5jdGlvbiBjbGVhcl9sb29wcygpIHtcbiAgICB0YXNrcy5jbGVhcigpO1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHRhc2sgdGhhdCBydW5zIG9uIGVhY2ggcmFmIGZyYW1lXG4gKiB1bnRpbCBpdCByZXR1cm5zIGEgZmFsc3kgdmFsdWUgb3IgaXMgYWJvcnRlZFxuICovXG5mdW5jdGlvbiBsb29wKGNhbGxiYWNrKSB7XG4gICAgbGV0IHRhc2s7XG4gICAgaWYgKHRhc2tzLnNpemUgPT09IDApXG4gICAgICAgIHJhZihydW5fdGFza3MpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb21pc2U6IG5ldyBQcm9taXNlKGZ1bGZpbGwgPT4ge1xuICAgICAgICAgICAgdGFza3MuYWRkKHRhc2sgPSB7IGM6IGNhbGxiYWNrLCBmOiBmdWxmaWxsIH0pO1xuICAgICAgICB9KSxcbiAgICAgICAgYWJvcnQoKSB7XG4gICAgICAgICAgICB0YXNrcy5kZWxldGUodGFzayk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG4vLyBUcmFjayB3aGljaCBub2RlcyBhcmUgY2xhaW1lZCBkdXJpbmcgaHlkcmF0aW9uLiBVbmNsYWltZWQgbm9kZXMgY2FuIHRoZW4gYmUgcmVtb3ZlZCBmcm9tIHRoZSBET01cbi8vIGF0IHRoZSBlbmQgb2YgaHlkcmF0aW9uIHdpdGhvdXQgdG91Y2hpbmcgdGhlIHJlbWFpbmluZyBub2Rlcy5cbmxldCBpc19oeWRyYXRpbmcgPSBmYWxzZTtcbmZ1bmN0aW9uIHN0YXJ0X2h5ZHJhdGluZygpIHtcbiAgICBpc19oeWRyYXRpbmcgPSB0cnVlO1xufVxuZnVuY3Rpb24gZW5kX2h5ZHJhdGluZygpIHtcbiAgICBpc19oeWRyYXRpbmcgPSBmYWxzZTtcbn1cbmZ1bmN0aW9uIHVwcGVyX2JvdW5kKGxvdywgaGlnaCwga2V5LCB2YWx1ZSkge1xuICAgIC8vIFJldHVybiBmaXJzdCBpbmRleCBvZiB2YWx1ZSBsYXJnZXIgdGhhbiBpbnB1dCB2YWx1ZSBpbiB0aGUgcmFuZ2UgW2xvdywgaGlnaClcbiAgICB3aGlsZSAobG93IDwgaGlnaCkge1xuICAgICAgICBjb25zdCBtaWQgPSBsb3cgKyAoKGhpZ2ggLSBsb3cpID4+IDEpO1xuICAgICAgICBpZiAoa2V5KG1pZCkgPD0gdmFsdWUpIHtcbiAgICAgICAgICAgIGxvdyA9IG1pZCArIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBoaWdoID0gbWlkO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBsb3c7XG59XG5mdW5jdGlvbiBpbml0X2h5ZHJhdGUodGFyZ2V0KSB7XG4gICAgaWYgKHRhcmdldC5oeWRyYXRlX2luaXQpXG4gICAgICAgIHJldHVybjtcbiAgICB0YXJnZXQuaHlkcmF0ZV9pbml0ID0gdHJ1ZTtcbiAgICAvLyBXZSBrbm93IHRoYXQgYWxsIGNoaWxkcmVuIGhhdmUgY2xhaW1fb3JkZXIgdmFsdWVzIHNpbmNlIHRoZSB1bmNsYWltZWQgaGF2ZSBiZWVuIGRldGFjaGVkIGlmIHRhcmdldCBpcyBub3QgPGhlYWQ+XG4gICAgbGV0IGNoaWxkcmVuID0gdGFyZ2V0LmNoaWxkTm9kZXM7XG4gICAgLy8gSWYgdGFyZ2V0IGlzIDxoZWFkPiwgdGhlcmUgbWF5IGJlIGNoaWxkcmVuIHdpdGhvdXQgY2xhaW1fb3JkZXJcbiAgICBpZiAodGFyZ2V0Lm5vZGVOYW1lID09PSAnSEVBRCcpIHtcbiAgICAgICAgY29uc3QgbXlDaGlsZHJlbiA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAobm9kZS5jbGFpbV9vcmRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbXlDaGlsZHJlbi5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNoaWxkcmVuID0gbXlDaGlsZHJlbjtcbiAgICB9XG4gICAgLypcbiAgICAqIFJlb3JkZXIgY2xhaW1lZCBjaGlsZHJlbiBvcHRpbWFsbHkuXG4gICAgKiBXZSBjYW4gcmVvcmRlciBjbGFpbWVkIGNoaWxkcmVuIG9wdGltYWxseSBieSBmaW5kaW5nIHRoZSBsb25nZXN0IHN1YnNlcXVlbmNlIG9mXG4gICAgKiBub2RlcyB0aGF0IGFyZSBhbHJlYWR5IGNsYWltZWQgaW4gb3JkZXIgYW5kIG9ubHkgbW92aW5nIHRoZSByZXN0LiBUaGUgbG9uZ2VzdFxuICAgICogc3Vic2VxdWVuY2Ugb2Ygbm9kZXMgdGhhdCBhcmUgY2xhaW1lZCBpbiBvcmRlciBjYW4gYmUgZm91bmQgYnlcbiAgICAqIGNvbXB1dGluZyB0aGUgbG9uZ2VzdCBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlIG9mIC5jbGFpbV9vcmRlciB2YWx1ZXMuXG4gICAgKlxuICAgICogVGhpcyBhbGdvcml0aG0gaXMgb3B0aW1hbCBpbiBnZW5lcmF0aW5nIHRoZSBsZWFzdCBhbW91bnQgb2YgcmVvcmRlciBvcGVyYXRpb25zXG4gICAgKiBwb3NzaWJsZS5cbiAgICAqXG4gICAgKiBQcm9vZjpcbiAgICAqIFdlIGtub3cgdGhhdCwgZ2l2ZW4gYSBzZXQgb2YgcmVvcmRlcmluZyBvcGVyYXRpb25zLCB0aGUgbm9kZXMgdGhhdCBkbyBub3QgbW92ZVxuICAgICogYWx3YXlzIGZvcm0gYW4gaW5jcmVhc2luZyBzdWJzZXF1ZW5jZSwgc2luY2UgdGhleSBkbyBub3QgbW92ZSBhbW9uZyBlYWNoIG90aGVyXG4gICAgKiBtZWFuaW5nIHRoYXQgdGhleSBtdXN0IGJlIGFscmVhZHkgb3JkZXJlZCBhbW9uZyBlYWNoIG90aGVyLiBUaHVzLCB0aGUgbWF4aW1hbFxuICAgICogc2V0IG9mIG5vZGVzIHRoYXQgZG8gbm90IG1vdmUgZm9ybSBhIGxvbmdlc3QgaW5jcmVhc2luZyBzdWJzZXF1ZW5jZS5cbiAgICAqL1xuICAgIC8vIENvbXB1dGUgbG9uZ2VzdCBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlXG4gICAgLy8gbTogc3Vic2VxdWVuY2UgbGVuZ3RoIGogPT4gaW5kZXggayBvZiBzbWFsbGVzdCB2YWx1ZSB0aGF0IGVuZHMgYW4gaW5jcmVhc2luZyBzdWJzZXF1ZW5jZSBvZiBsZW5ndGggalxuICAgIGNvbnN0IG0gPSBuZXcgSW50MzJBcnJheShjaGlsZHJlbi5sZW5ndGggKyAxKTtcbiAgICAvLyBQcmVkZWNlc3NvciBpbmRpY2VzICsgMVxuICAgIGNvbnN0IHAgPSBuZXcgSW50MzJBcnJheShjaGlsZHJlbi5sZW5ndGgpO1xuICAgIG1bMF0gPSAtMTtcbiAgICBsZXQgbG9uZ2VzdCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gY2hpbGRyZW5baV0uY2xhaW1fb3JkZXI7XG4gICAgICAgIC8vIEZpbmQgdGhlIGxhcmdlc3Qgc3Vic2VxdWVuY2UgbGVuZ3RoIHN1Y2ggdGhhdCBpdCBlbmRzIGluIGEgdmFsdWUgbGVzcyB0aGFuIG91ciBjdXJyZW50IHZhbHVlXG4gICAgICAgIC8vIHVwcGVyX2JvdW5kIHJldHVybnMgZmlyc3QgZ3JlYXRlciB2YWx1ZSwgc28gd2Ugc3VidHJhY3Qgb25lXG4gICAgICAgIC8vIHdpdGggZmFzdCBwYXRoIGZvciB3aGVuIHdlIGFyZSBvbiB0aGUgY3VycmVudCBsb25nZXN0IHN1YnNlcXVlbmNlXG4gICAgICAgIGNvbnN0IHNlcUxlbiA9ICgobG9uZ2VzdCA+IDAgJiYgY2hpbGRyZW5bbVtsb25nZXN0XV0uY2xhaW1fb3JkZXIgPD0gY3VycmVudCkgPyBsb25nZXN0ICsgMSA6IHVwcGVyX2JvdW5kKDEsIGxvbmdlc3QsIGlkeCA9PiBjaGlsZHJlblttW2lkeF1dLmNsYWltX29yZGVyLCBjdXJyZW50KSkgLSAxO1xuICAgICAgICBwW2ldID0gbVtzZXFMZW5dICsgMTtcbiAgICAgICAgY29uc3QgbmV3TGVuID0gc2VxTGVuICsgMTtcbiAgICAgICAgLy8gV2UgY2FuIGd1YXJhbnRlZSB0aGF0IGN1cnJlbnQgaXMgdGhlIHNtYWxsZXN0IHZhbHVlLiBPdGhlcndpc2UsIHdlIHdvdWxkIGhhdmUgZ2VuZXJhdGVkIGEgbG9uZ2VyIHNlcXVlbmNlLlxuICAgICAgICBtW25ld0xlbl0gPSBpO1xuICAgICAgICBsb25nZXN0ID0gTWF0aC5tYXgobmV3TGVuLCBsb25nZXN0KTtcbiAgICB9XG4gICAgLy8gVGhlIGxvbmdlc3QgaW5jcmVhc2luZyBzdWJzZXF1ZW5jZSBvZiBub2RlcyAoaW5pdGlhbGx5IHJldmVyc2VkKVxuICAgIGNvbnN0IGxpcyA9IFtdO1xuICAgIC8vIFRoZSByZXN0IG9mIHRoZSBub2Rlcywgbm9kZXMgdGhhdCB3aWxsIGJlIG1vdmVkXG4gICAgY29uc3QgdG9Nb3ZlID0gW107XG4gICAgbGV0IGxhc3QgPSBjaGlsZHJlbi5sZW5ndGggLSAxO1xuICAgIGZvciAobGV0IGN1ciA9IG1bbG9uZ2VzdF0gKyAxOyBjdXIgIT0gMDsgY3VyID0gcFtjdXIgLSAxXSkge1xuICAgICAgICBsaXMucHVzaChjaGlsZHJlbltjdXIgLSAxXSk7XG4gICAgICAgIGZvciAoOyBsYXN0ID49IGN1cjsgbGFzdC0tKSB7XG4gICAgICAgICAgICB0b01vdmUucHVzaChjaGlsZHJlbltsYXN0XSk7XG4gICAgICAgIH1cbiAgICAgICAgbGFzdC0tO1xuICAgIH1cbiAgICBmb3IgKDsgbGFzdCA+PSAwOyBsYXN0LS0pIHtcbiAgICAgICAgdG9Nb3ZlLnB1c2goY2hpbGRyZW5bbGFzdF0pO1xuICAgIH1cbiAgICBsaXMucmV2ZXJzZSgpO1xuICAgIC8vIFdlIHNvcnQgdGhlIG5vZGVzIGJlaW5nIG1vdmVkIHRvIGd1YXJhbnRlZSB0aGF0IHRoZWlyIGluc2VydGlvbiBvcmRlciBtYXRjaGVzIHRoZSBjbGFpbSBvcmRlclxuICAgIHRvTW92ZS5zb3J0KChhLCBiKSA9PiBhLmNsYWltX29yZGVyIC0gYi5jbGFpbV9vcmRlcik7XG4gICAgLy8gRmluYWxseSwgd2UgbW92ZSB0aGUgbm9kZXNcbiAgICBmb3IgKGxldCBpID0gMCwgaiA9IDA7IGkgPCB0b01vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgd2hpbGUgKGogPCBsaXMubGVuZ3RoICYmIHRvTW92ZVtpXS5jbGFpbV9vcmRlciA+PSBsaXNbal0uY2xhaW1fb3JkZXIpIHtcbiAgICAgICAgICAgIGorKztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhbmNob3IgPSBqIDwgbGlzLmxlbmd0aCA/IGxpc1tqXSA6IG51bGw7XG4gICAgICAgIHRhcmdldC5pbnNlcnRCZWZvcmUodG9Nb3ZlW2ldLCBhbmNob3IpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFwcGVuZCh0YXJnZXQsIG5vZGUpIHtcbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQobm9kZSk7XG59XG5mdW5jdGlvbiBhcHBlbmRfc3R5bGVzKHRhcmdldCwgc3R5bGVfc2hlZXRfaWQsIHN0eWxlcykge1xuICAgIGNvbnN0IGFwcGVuZF9zdHlsZXNfdG8gPSBnZXRfcm9vdF9mb3Jfc3R5bGUodGFyZ2V0KTtcbiAgICBpZiAoIWFwcGVuZF9zdHlsZXNfdG8uZ2V0RWxlbWVudEJ5SWQoc3R5bGVfc2hlZXRfaWQpKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gZWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgc3R5bGUuaWQgPSBzdHlsZV9zaGVldF9pZDtcbiAgICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSBzdHlsZXM7XG4gICAgICAgIGFwcGVuZF9zdHlsZXNoZWV0KGFwcGVuZF9zdHlsZXNfdG8sIHN0eWxlKTtcbiAgICB9XG59XG5mdW5jdGlvbiBnZXRfcm9vdF9mb3Jfc3R5bGUobm9kZSkge1xuICAgIGlmICghbm9kZSlcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50O1xuICAgIGNvbnN0IHJvb3QgPSBub2RlLmdldFJvb3ROb2RlID8gbm9kZS5nZXRSb290Tm9kZSgpIDogbm9kZS5vd25lckRvY3VtZW50O1xuICAgIGlmIChyb290ICYmIHJvb3QuaG9zdCkge1xuICAgICAgICByZXR1cm4gcm9vdDtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGUub3duZXJEb2N1bWVudDtcbn1cbmZ1bmN0aW9uIGFwcGVuZF9lbXB0eV9zdHlsZXNoZWV0KG5vZGUpIHtcbiAgICBjb25zdCBzdHlsZV9lbGVtZW50ID0gZWxlbWVudCgnc3R5bGUnKTtcbiAgICBhcHBlbmRfc3R5bGVzaGVldChnZXRfcm9vdF9mb3Jfc3R5bGUobm9kZSksIHN0eWxlX2VsZW1lbnQpO1xuICAgIHJldHVybiBzdHlsZV9lbGVtZW50LnNoZWV0O1xufVxuZnVuY3Rpb24gYXBwZW5kX3N0eWxlc2hlZXQobm9kZSwgc3R5bGUpIHtcbiAgICBhcHBlbmQobm9kZS5oZWFkIHx8IG5vZGUsIHN0eWxlKTtcbiAgICByZXR1cm4gc3R5bGUuc2hlZXQ7XG59XG5mdW5jdGlvbiBhcHBlbmRfaHlkcmF0aW9uKHRhcmdldCwgbm9kZSkge1xuICAgIGlmIChpc19oeWRyYXRpbmcpIHtcbiAgICAgICAgaW5pdF9oeWRyYXRlKHRhcmdldCk7XG4gICAgICAgIGlmICgodGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgPT09IHVuZGVmaW5lZCkgfHwgKCh0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCAhPT0gbnVsbCkgJiYgKHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkLnBhcmVudE5vZGUgIT09IHRhcmdldCkpKSB7XG4gICAgICAgICAgICB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCA9IHRhcmdldC5maXJzdENoaWxkO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNraXAgbm9kZXMgb2YgdW5kZWZpbmVkIG9yZGVyaW5nXG4gICAgICAgIHdoaWxlICgodGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgIT09IG51bGwpICYmICh0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZC5jbGFpbV9vcmRlciA9PT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgdGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgPSB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZSAhPT0gdGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQpIHtcbiAgICAgICAgICAgIC8vIFdlIG9ubHkgaW5zZXJ0IGlmIHRoZSBvcmRlcmluZyBvZiB0aGlzIG5vZGUgc2hvdWxkIGJlIG1vZGlmaWVkIG9yIHRoZSBwYXJlbnQgbm9kZSBpcyBub3QgdGFyZ2V0XG4gICAgICAgICAgICBpZiAobm9kZS5jbGFpbV9vcmRlciAhPT0gdW5kZWZpbmVkIHx8IG5vZGUucGFyZW50Tm9kZSAhPT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCA9IG5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZS5wYXJlbnROb2RlICE9PSB0YXJnZXQgfHwgbm9kZS5uZXh0U2libGluZyAhPT0gbnVsbCkge1xuICAgICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gaW5zZXJ0KHRhcmdldCwgbm9kZSwgYW5jaG9yKSB7XG4gICAgdGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCBhbmNob3IgfHwgbnVsbCk7XG59XG5mdW5jdGlvbiBpbnNlcnRfaHlkcmF0aW9uKHRhcmdldCwgbm9kZSwgYW5jaG9yKSB7XG4gICAgaWYgKGlzX2h5ZHJhdGluZyAmJiAhYW5jaG9yKSB7XG4gICAgICAgIGFwcGVuZF9oeWRyYXRpb24odGFyZ2V0LCBub2RlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZS5wYXJlbnROb2RlICE9PSB0YXJnZXQgfHwgbm9kZS5uZXh0U2libGluZyAhPSBhbmNob3IpIHtcbiAgICAgICAgdGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCBhbmNob3IgfHwgbnVsbCk7XG4gICAgfVxufVxuZnVuY3Rpb24gZGV0YWNoKG5vZGUpIHtcbiAgICBpZiAobm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICB9XG59XG5mdW5jdGlvbiBkZXN0cm95X2VhY2goaXRlcmF0aW9ucywgZGV0YWNoaW5nKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVyYXRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChpdGVyYXRpb25zW2ldKVxuICAgICAgICAgICAgaXRlcmF0aW9uc1tpXS5kKGRldGFjaGluZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gZWxlbWVudChuYW1lKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSk7XG59XG5mdW5jdGlvbiBlbGVtZW50X2lzKG5hbWUsIGlzKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSwgeyBpcyB9KTtcbn1cbmZ1bmN0aW9uIG9iamVjdF93aXRob3V0X3Byb3BlcnRpZXMob2JqLCBleGNsdWRlKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0ge307XG4gICAgZm9yIChjb25zdCBrIGluIG9iaikge1xuICAgICAgICBpZiAoaGFzX3Byb3Aob2JqLCBrKVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgJiYgZXhjbHVkZS5pbmRleE9mKGspID09PSAtMSkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgdGFyZ2V0W2tdID0gb2JqW2tdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBzdmdfZWxlbWVudChuYW1lKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCBuYW1lKTtcbn1cbmZ1bmN0aW9uIHRleHQoZGF0YSkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkYXRhKTtcbn1cbmZ1bmN0aW9uIHNwYWNlKCkge1xuICAgIHJldHVybiB0ZXh0KCcgJyk7XG59XG5mdW5jdGlvbiBlbXB0eSgpIHtcbiAgICByZXR1cm4gdGV4dCgnJyk7XG59XG5mdW5jdGlvbiBsaXN0ZW4obm9kZSwgZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIHJldHVybiAoKSA9PiBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcHJldmVudF9kZWZhdWx0KGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gc3RvcF9wcm9wYWdhdGlvbihmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhpcywgZXZlbnQpO1xuICAgIH07XG59XG5mdW5jdGlvbiBzdG9wX2ltbWVkaWF0ZV9wcm9wYWdhdGlvbihmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhpcywgZXZlbnQpO1xuICAgIH07XG59XG5mdW5jdGlvbiBzZWxmKGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMpXG4gICAgICAgICAgICBmbi5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gdHJ1c3RlZChmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoZXZlbnQuaXNUcnVzdGVkKVxuICAgICAgICAgICAgZm4uY2FsbCh0aGlzLCBldmVudCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGF0dHIobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKVxuICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgIGVsc2UgaWYgKG5vZGUuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZSkgIT09IHZhbHVlKVxuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIHNldF9hdHRyaWJ1dGVzKG5vZGUsIGF0dHJpYnV0ZXMpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgZGVzY3JpcHRvcnMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhub2RlLl9fcHJvdG9fXyk7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgICAgICBpZiAoYXR0cmlidXRlc1trZXldID09IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoa2V5ID09PSAnc3R5bGUnKSB7XG4gICAgICAgICAgICBub2RlLnN0eWxlLmNzc1RleHQgPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoa2V5ID09PSAnX192YWx1ZScpIHtcbiAgICAgICAgICAgIG5vZGUudmFsdWUgPSBub2RlW2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGVzY3JpcHRvcnNba2V5XSAmJiBkZXNjcmlwdG9yc1trZXldLnNldCkge1xuICAgICAgICAgICAgbm9kZVtrZXldID0gYXR0cmlidXRlc1trZXldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYXR0cihub2RlLCBrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBzZXRfc3ZnX2F0dHJpYnV0ZXMobm9kZSwgYXR0cmlidXRlcykge1xuICAgIGZvciAoY29uc3Qga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgYXR0cihub2RlLCBrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgfVxufVxuZnVuY3Rpb24gc2V0X2N1c3RvbV9lbGVtZW50X2RhdGFfbWFwKG5vZGUsIGRhdGFfbWFwKSB7XG4gICAgT2JqZWN0LmtleXMoZGF0YV9tYXApLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBzZXRfY3VzdG9tX2VsZW1lbnRfZGF0YShub2RlLCBrZXksIGRhdGFfbWFwW2tleV0pO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gc2V0X2N1c3RvbV9lbGVtZW50X2RhdGEobm9kZSwgcHJvcCwgdmFsdWUpIHtcbiAgICBpZiAocHJvcCBpbiBub2RlKSB7XG4gICAgICAgIG5vZGVbcHJvcF0gPSB0eXBlb2Ygbm9kZVtwcm9wXSA9PT0gJ2Jvb2xlYW4nICYmIHZhbHVlID09PSAnJyA/IHRydWUgOiB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGF0dHIobm9kZSwgcHJvcCwgdmFsdWUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNldF9keW5hbWljX2VsZW1lbnRfZGF0YSh0YWcpIHtcbiAgICByZXR1cm4gKC8tLy50ZXN0KHRhZykpID8gc2V0X2N1c3RvbV9lbGVtZW50X2RhdGFfbWFwIDogc2V0X2F0dHJpYnV0ZXM7XG59XG5mdW5jdGlvbiB4bGlua19hdHRyKG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICBub2RlLnNldEF0dHJpYnV0ZU5TKCdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgYXR0cmlidXRlLCB2YWx1ZSk7XG59XG5mdW5jdGlvbiBnZXRfYmluZGluZ19ncm91cF92YWx1ZShncm91cCwgX192YWx1ZSwgY2hlY2tlZCkge1xuICAgIGNvbnN0IHZhbHVlID0gbmV3IFNldCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JvdXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGdyb3VwW2ldLmNoZWNrZWQpXG4gICAgICAgICAgICB2YWx1ZS5hZGQoZ3JvdXBbaV0uX192YWx1ZSk7XG4gICAgfVxuICAgIGlmICghY2hlY2tlZCkge1xuICAgICAgICB2YWx1ZS5kZWxldGUoX192YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBBcnJheS5mcm9tKHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGluaXRfYmluZGluZ19ncm91cChncm91cCkge1xuICAgIGxldCBfaW5wdXRzO1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qIHB1c2ggKi8gcCguLi5pbnB1dHMpIHtcbiAgICAgICAgICAgIF9pbnB1dHMgPSBpbnB1dHM7XG4gICAgICAgICAgICBfaW5wdXRzLmZvckVhY2goaW5wdXQgPT4gZ3JvdXAucHVzaChpbnB1dCkpO1xuICAgICAgICB9LFxuICAgICAgICAvKiByZW1vdmUgKi8gcigpIHtcbiAgICAgICAgICAgIF9pbnB1dHMuZm9yRWFjaChpbnB1dCA9PiBncm91cC5zcGxpY2UoZ3JvdXAuaW5kZXhPZihpbnB1dCksIDEpKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBpbml0X2JpbmRpbmdfZ3JvdXBfZHluYW1pYyhncm91cCwgaW5kZXhlcykge1xuICAgIGxldCBfZ3JvdXAgPSBnZXRfYmluZGluZ19ncm91cChncm91cCk7XG4gICAgbGV0IF9pbnB1dHM7XG4gICAgZnVuY3Rpb24gZ2V0X2JpbmRpbmdfZ3JvdXAoZ3JvdXApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmRleGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBncm91cCA9IGdyb3VwW2luZGV4ZXNbaV1dID0gZ3JvdXBbaW5kZXhlc1tpXV0gfHwgW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdyb3VwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwdXNoKCkge1xuICAgICAgICBfaW5wdXRzLmZvckVhY2goaW5wdXQgPT4gX2dyb3VwLnB1c2goaW5wdXQpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgICBfaW5wdXRzLmZvckVhY2goaW5wdXQgPT4gX2dyb3VwLnNwbGljZShfZ3JvdXAuaW5kZXhPZihpbnB1dCksIDEpKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyogdXBkYXRlICovIHUobmV3X2luZGV4ZXMpIHtcbiAgICAgICAgICAgIGluZGV4ZXMgPSBuZXdfaW5kZXhlcztcbiAgICAgICAgICAgIGNvbnN0IG5ld19ncm91cCA9IGdldF9iaW5kaW5nX2dyb3VwKGdyb3VwKTtcbiAgICAgICAgICAgIGlmIChuZXdfZ3JvdXAgIT09IF9ncm91cCkge1xuICAgICAgICAgICAgICAgIHJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIF9ncm91cCA9IG5ld19ncm91cDtcbiAgICAgICAgICAgICAgICBwdXNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8qIHB1c2ggKi8gcCguLi5pbnB1dHMpIHtcbiAgICAgICAgICAgIF9pbnB1dHMgPSBpbnB1dHM7XG4gICAgICAgICAgICBwdXNoKCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qIHJlbW92ZSAqLyByOiByZW1vdmVcbiAgICB9O1xufVxuZnVuY3Rpb24gdG9fbnVtYmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAnJyA/IG51bGwgOiArdmFsdWU7XG59XG5mdW5jdGlvbiB0aW1lX3Jhbmdlc190b19hcnJheShyYW5nZXMpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFuZ2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGFycmF5LnB1c2goeyBzdGFydDogcmFuZ2VzLnN0YXJ0KGkpLCBlbmQ6IHJhbmdlcy5lbmQoaSkgfSk7XG4gICAgfVxuICAgIHJldHVybiBhcnJheTtcbn1cbmZ1bmN0aW9uIGNoaWxkcmVuKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkTm9kZXMpO1xufVxuZnVuY3Rpb24gaW5pdF9jbGFpbV9pbmZvKG5vZGVzKSB7XG4gICAgaWYgKG5vZGVzLmNsYWltX2luZm8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBub2Rlcy5jbGFpbV9pbmZvID0geyBsYXN0X2luZGV4OiAwLCB0b3RhbF9jbGFpbWVkOiAwIH07XG4gICAgfVxufVxuZnVuY3Rpb24gY2xhaW1fbm9kZShub2RlcywgcHJlZGljYXRlLCBwcm9jZXNzTm9kZSwgY3JlYXRlTm9kZSwgZG9udFVwZGF0ZUxhc3RJbmRleCA9IGZhbHNlKSB7XG4gICAgLy8gVHJ5IHRvIGZpbmQgbm9kZXMgaW4gYW4gb3JkZXIgc3VjaCB0aGF0IHdlIGxlbmd0aGVuIHRoZSBsb25nZXN0IGluY3JlYXNpbmcgc3Vic2VxdWVuY2VcbiAgICBpbml0X2NsYWltX2luZm8obm9kZXMpO1xuICAgIGNvbnN0IHJlc3VsdE5vZGUgPSAoKCkgPT4ge1xuICAgICAgICAvLyBXZSBmaXJzdCB0cnkgdG8gZmluZCBhbiBlbGVtZW50IGFmdGVyIHRoZSBwcmV2aW91cyBvbmVcbiAgICAgICAgZm9yIChsZXQgaSA9IG5vZGVzLmNsYWltX2luZm8ubGFzdF9pbmRleDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbaV07XG4gICAgICAgICAgICBpZiAocHJlZGljYXRlKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVwbGFjZW1lbnQgPSBwcm9jZXNzTm9kZShub2RlKTtcbiAgICAgICAgICAgICAgICBpZiAocmVwbGFjZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBub2Rlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBub2Rlc1tpXSA9IHJlcGxhY2VtZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWRvbnRVcGRhdGVMYXN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXMuY2xhaW1faW5mby5sYXN0X2luZGV4ID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB3ZSB0cnkgdG8gZmluZCBvbmUgYmVmb3JlXG4gICAgICAgIC8vIFdlIGl0ZXJhdGUgaW4gcmV2ZXJzZSBzbyB0aGF0IHdlIGRvbid0IGdvIHRvbyBmYXIgYmFja1xuICAgICAgICBmb3IgKGxldCBpID0gbm9kZXMuY2xhaW1faW5mby5sYXN0X2luZGV4IC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgICAgIGlmIChwcmVkaWNhdGUobm9kZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXBsYWNlbWVudCA9IHByb2Nlc3NOb2RlKG5vZGUpO1xuICAgICAgICAgICAgICAgIGlmIChyZXBsYWNlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzW2ldID0gcmVwbGFjZW1lbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghZG9udFVwZGF0ZUxhc3RJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBub2Rlcy5jbGFpbV9pbmZvLmxhc3RfaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyZXBsYWNlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNpbmNlIHdlIHNwbGljZWQgYmVmb3JlIHRoZSBsYXN0X2luZGV4LCB3ZSBkZWNyZWFzZSBpdFxuICAgICAgICAgICAgICAgICAgICBub2Rlcy5jbGFpbV9pbmZvLmxhc3RfaW5kZXgtLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgd2UgY2FuJ3QgZmluZCBhbnkgbWF0Y2hpbmcgbm9kZSwgd2UgY3JlYXRlIGEgbmV3IG9uZVxuICAgICAgICByZXR1cm4gY3JlYXRlTm9kZSgpO1xuICAgIH0pKCk7XG4gICAgcmVzdWx0Tm9kZS5jbGFpbV9vcmRlciA9IG5vZGVzLmNsYWltX2luZm8udG90YWxfY2xhaW1lZDtcbiAgICBub2Rlcy5jbGFpbV9pbmZvLnRvdGFsX2NsYWltZWQgKz0gMTtcbiAgICByZXR1cm4gcmVzdWx0Tm9kZTtcbn1cbmZ1bmN0aW9uIGNsYWltX2VsZW1lbnRfYmFzZShub2RlcywgbmFtZSwgYXR0cmlidXRlcywgY3JlYXRlX2VsZW1lbnQpIHtcbiAgICByZXR1cm4gY2xhaW1fbm9kZShub2RlcywgKG5vZGUpID0+IG5vZGUubm9kZU5hbWUgPT09IG5hbWUsIChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbW92ZSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5vZGUuYXR0cmlidXRlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlID0gbm9kZS5hdHRyaWJ1dGVzW2pdO1xuICAgICAgICAgICAgaWYgKCFhdHRyaWJ1dGVzW2F0dHJpYnV0ZS5uYW1lXSkge1xuICAgICAgICAgICAgICAgIHJlbW92ZS5wdXNoKGF0dHJpYnV0ZS5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZW1vdmUuZm9yRWFjaCh2ID0+IG5vZGUucmVtb3ZlQXR0cmlidXRlKHYpKTtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9LCAoKSA9PiBjcmVhdGVfZWxlbWVudChuYW1lKSk7XG59XG5mdW5jdGlvbiBjbGFpbV9lbGVtZW50KG5vZGVzLCBuYW1lLCBhdHRyaWJ1dGVzKSB7XG4gICAgcmV0dXJuIGNsYWltX2VsZW1lbnRfYmFzZShub2RlcywgbmFtZSwgYXR0cmlidXRlcywgZWxlbWVudCk7XG59XG5mdW5jdGlvbiBjbGFpbV9zdmdfZWxlbWVudChub2RlcywgbmFtZSwgYXR0cmlidXRlcykge1xuICAgIHJldHVybiBjbGFpbV9lbGVtZW50X2Jhc2Uobm9kZXMsIG5hbWUsIGF0dHJpYnV0ZXMsIHN2Z19lbGVtZW50KTtcbn1cbmZ1bmN0aW9uIGNsYWltX3RleHQobm9kZXMsIGRhdGEpIHtcbiAgICByZXR1cm4gY2xhaW1fbm9kZShub2RlcywgKG5vZGUpID0+IG5vZGUubm9kZVR5cGUgPT09IDMsIChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGFTdHIgPSAnJyArIGRhdGE7XG4gICAgICAgIGlmIChub2RlLmRhdGEuc3RhcnRzV2l0aChkYXRhU3RyKSkge1xuICAgICAgICAgICAgaWYgKG5vZGUuZGF0YS5sZW5ndGggIT09IGRhdGFTdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUuc3BsaXRUZXh0KGRhdGFTdHIubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUuZGF0YSA9IGRhdGFTdHI7XG4gICAgICAgIH1cbiAgICB9LCAoKSA9PiB0ZXh0KGRhdGEpLCB0cnVlIC8vIFRleHQgbm9kZXMgc2hvdWxkIG5vdCB1cGRhdGUgbGFzdCBpbmRleCBzaW5jZSBpdCBpcyBsaWtlbHkgbm90IHdvcnRoIGl0IHRvIGVsaW1pbmF0ZSBhbiBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlIG9mIGFjdHVhbCBlbGVtZW50c1xuICAgICk7XG59XG5mdW5jdGlvbiBjbGFpbV9zcGFjZShub2Rlcykge1xuICAgIHJldHVybiBjbGFpbV90ZXh0KG5vZGVzLCAnICcpO1xufVxuZnVuY3Rpb24gZmluZF9jb21tZW50KG5vZGVzLCB0ZXh0LCBzdGFydCkge1xuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IG5vZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDggLyogY29tbWVudCBub2RlICovICYmIG5vZGUudGV4dENvbnRlbnQudHJpbSgpID09PSB0ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm9kZXMubGVuZ3RoO1xufVxuZnVuY3Rpb24gY2xhaW1faHRtbF90YWcobm9kZXMsIGlzX3N2Zykge1xuICAgIC8vIGZpbmQgaHRtbCBvcGVuaW5nIHRhZ1xuICAgIGNvbnN0IHN0YXJ0X2luZGV4ID0gZmluZF9jb21tZW50KG5vZGVzLCAnSFRNTF9UQUdfU1RBUlQnLCAwKTtcbiAgICBjb25zdCBlbmRfaW5kZXggPSBmaW5kX2NvbW1lbnQobm9kZXMsICdIVE1MX1RBR19FTkQnLCBzdGFydF9pbmRleCk7XG4gICAgaWYgKHN0YXJ0X2luZGV4ID09PSBlbmRfaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBIdG1sVGFnSHlkcmF0aW9uKHVuZGVmaW5lZCwgaXNfc3ZnKTtcbiAgICB9XG4gICAgaW5pdF9jbGFpbV9pbmZvKG5vZGVzKTtcbiAgICBjb25zdCBodG1sX3RhZ19ub2RlcyA9IG5vZGVzLnNwbGljZShzdGFydF9pbmRleCwgZW5kX2luZGV4IC0gc3RhcnRfaW5kZXggKyAxKTtcbiAgICBkZXRhY2goaHRtbF90YWdfbm9kZXNbMF0pO1xuICAgIGRldGFjaChodG1sX3RhZ19ub2Rlc1todG1sX3RhZ19ub2Rlcy5sZW5ndGggLSAxXSk7XG4gICAgY29uc3QgY2xhaW1lZF9ub2RlcyA9IGh0bWxfdGFnX25vZGVzLnNsaWNlKDEsIGh0bWxfdGFnX25vZGVzLmxlbmd0aCAtIDEpO1xuICAgIGZvciAoY29uc3QgbiBvZiBjbGFpbWVkX25vZGVzKSB7XG4gICAgICAgIG4uY2xhaW1fb3JkZXIgPSBub2Rlcy5jbGFpbV9pbmZvLnRvdGFsX2NsYWltZWQ7XG4gICAgICAgIG5vZGVzLmNsYWltX2luZm8udG90YWxfY2xhaW1lZCArPSAxO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEh0bWxUYWdIeWRyYXRpb24oY2xhaW1lZF9ub2RlcywgaXNfc3ZnKTtcbn1cbmZ1bmN0aW9uIHNldF9kYXRhKHRleHQsIGRhdGEpIHtcbiAgICBkYXRhID0gJycgKyBkYXRhO1xuICAgIGlmICh0ZXh0Lndob2xlVGV4dCAhPT0gZGF0YSlcbiAgICAgICAgdGV4dC5kYXRhID0gZGF0YTtcbn1cbmZ1bmN0aW9uIHNldF9pbnB1dF92YWx1ZShpbnB1dCwgdmFsdWUpIHtcbiAgICBpbnB1dC52YWx1ZSA9IHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xufVxuZnVuY3Rpb24gc2V0X2lucHV0X3R5cGUoaW5wdXQsIHR5cGUpIHtcbiAgICB0cnkge1xuICAgICAgICBpbnB1dC50eXBlID0gdHlwZTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNldF9zdHlsZShub2RlLCBrZXksIHZhbHVlLCBpbXBvcnRhbnQpIHtcbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgbm9kZS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShrZXkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbm9kZS5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIHZhbHVlLCBpbXBvcnRhbnQgPyAnaW1wb3J0YW50JyA6ICcnKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzZWxlY3Rfb3B0aW9uKHNlbGVjdCwgdmFsdWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHNlbGVjdC5vcHRpb25zW2ldO1xuICAgICAgICBpZiAob3B0aW9uLl9fdmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNlbGVjdC5zZWxlY3RlZEluZGV4ID0gLTE7IC8vIG5vIG9wdGlvbiBzaG91bGQgYmUgc2VsZWN0ZWRcbn1cbmZ1bmN0aW9uIHNlbGVjdF9vcHRpb25zKHNlbGVjdCwgdmFsdWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHNlbGVjdC5vcHRpb25zW2ldO1xuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB+dmFsdWUuaW5kZXhPZihvcHRpb24uX192YWx1ZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gZmlyc3RfZW5hYmxlZF9vcHRpb24oc2VsZWN0KSB7XG4gICAgZm9yIChjb25zdCBvcHRpb24gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcbiAgICAgICAgaWYgKCFvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb247XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBzZWxlY3RfdmFsdWUoc2VsZWN0KSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRfb3B0aW9uID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJzpjaGVja2VkJykgfHwgZmlyc3RfZW5hYmxlZF9vcHRpb24oc2VsZWN0KTtcbiAgICByZXR1cm4gc2VsZWN0ZWRfb3B0aW9uICYmIHNlbGVjdGVkX29wdGlvbi5fX3ZhbHVlO1xufVxuZnVuY3Rpb24gc2VsZWN0X211bHRpcGxlX3ZhbHVlKHNlbGVjdCkge1xuICAgIHJldHVybiBbXS5tYXAuY2FsbChzZWxlY3QucXVlcnlTZWxlY3RvckFsbCgnOmNoZWNrZWQnKSwgb3B0aW9uID0+IG9wdGlvbi5fX3ZhbHVlKTtcbn1cbi8vIHVuZm9ydHVuYXRlbHkgdGhpcyBjYW4ndCBiZSBhIGNvbnN0YW50IGFzIHRoYXQgd291bGRuJ3QgYmUgdHJlZS1zaGFrZWFibGVcbi8vIHNvIHdlIGNhY2hlIHRoZSByZXN1bHQgaW5zdGVhZFxubGV0IGNyb3Nzb3JpZ2luO1xuZnVuY3Rpb24gaXNfY3Jvc3NvcmlnaW4oKSB7XG4gICAgaWYgKGNyb3Nzb3JpZ2luID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY3Jvc3NvcmlnaW4gPSBmYWxzZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgdm9pZCB3aW5kb3cucGFyZW50LmRvY3VtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY3Jvc3NvcmlnaW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjcm9zc29yaWdpbjtcbn1cbmZ1bmN0aW9uIGFkZF9yZXNpemVfbGlzdGVuZXIobm9kZSwgZm4pIHtcbiAgICBjb25zdCBjb21wdXRlZF9zdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgaWYgKGNvbXB1dGVkX3N0eWxlLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgICAgICBub2RlLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICB9XG4gICAgY29uc3QgaWZyYW1lID0gZWxlbWVudCgnaWZyYW1lJyk7XG4gICAgaWZyYW1lLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogYmxvY2s7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyAnICtcbiAgICAgICAgJ292ZXJmbG93OiBoaWRkZW47IGJvcmRlcjogMDsgb3BhY2l0eTogMDsgcG9pbnRlci1ldmVudHM6IG5vbmU7IHotaW5kZXg6IC0xOycpO1xuICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICBpZnJhbWUudGFiSW5kZXggPSAtMTtcbiAgICBjb25zdCBjcm9zc29yaWdpbiA9IGlzX2Nyb3Nzb3JpZ2luKCk7XG4gICAgbGV0IHVuc3Vic2NyaWJlO1xuICAgIGlmIChjcm9zc29yaWdpbikge1xuICAgICAgICBpZnJhbWUuc3JjID0gXCJkYXRhOnRleHQvaHRtbCw8c2NyaXB0Pm9ucmVzaXplPWZ1bmN0aW9uKCl7cGFyZW50LnBvc3RNZXNzYWdlKDAsJyonKX08L3NjcmlwdD5cIjtcbiAgICAgICAgdW5zdWJzY3JpYmUgPSBsaXN0ZW4od2luZG93LCAnbWVzc2FnZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gaWZyYW1lLmNvbnRlbnRXaW5kb3cpXG4gICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZnJhbWUuc3JjID0gJ2Fib3V0OmJsYW5rJztcbiAgICAgICAgaWZyYW1lLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlID0gbGlzdGVuKGlmcmFtZS5jb250ZW50V2luZG93LCAncmVzaXplJywgZm4pO1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIGFuIGluaXRpYWwgcmVzaXplIGV2ZW50IGlzIGZpcmVkIF9hZnRlcl8gdGhlIGlmcmFtZSBpcyBsb2FkZWQgKHdoaWNoIGlzIGFzeW5jaHJvbm91cylcbiAgICAgICAgICAgIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vc3ZlbHRlanMvc3ZlbHRlL2lzc3Vlcy80MjMzXG4gICAgICAgICAgICBmbigpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBhcHBlbmQobm9kZSwgaWZyYW1lKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAoY3Jvc3NvcmlnaW4pIHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodW5zdWJzY3JpYmUgJiYgaWZyYW1lLmNvbnRlbnRXaW5kb3cpIHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZGV0YWNoKGlmcmFtZSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHRvZ2dsZV9jbGFzcyhlbGVtZW50LCBuYW1lLCB0b2dnbGUpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdFt0b2dnbGUgPyAnYWRkJyA6ICdyZW1vdmUnXShuYW1lKTtcbn1cbmZ1bmN0aW9uIGN1c3RvbV9ldmVudCh0eXBlLCBkZXRhaWwsIHsgYnViYmxlcyA9IGZhbHNlLCBjYW5jZWxhYmxlID0gZmFsc2UgfSA9IHt9KSB7XG4gICAgY29uc3QgZSA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgIGUuaW5pdEN1c3RvbUV2ZW50KHR5cGUsIGJ1YmJsZXMsIGNhbmNlbGFibGUsIGRldGFpbCk7XG4gICAgcmV0dXJuIGU7XG59XG5mdW5jdGlvbiBxdWVyeV9zZWxlY3Rvcl9hbGwoc2VsZWN0b3IsIHBhcmVudCA9IGRvY3VtZW50LmJvZHkpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShwYXJlbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xufVxuZnVuY3Rpb24gaGVhZF9zZWxlY3Rvcihub2RlSWQsIGhlYWQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBsZXQgc3RhcnRlZCA9IDA7XG4gICAgZm9yIChjb25zdCBub2RlIG9mIGhlYWQuY2hpbGROb2Rlcykge1xuICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gOCAvKiBjb21tZW50IG5vZGUgKi8pIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1lbnQgPSBub2RlLnRleHRDb250ZW50LnRyaW0oKTtcbiAgICAgICAgICAgIGlmIChjb21tZW50ID09PSBgSEVBRF8ke25vZGVJZH1fRU5EYCkge1xuICAgICAgICAgICAgICAgIHN0YXJ0ZWQgLT0gMTtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNvbW1lbnQgPT09IGBIRUFEXyR7bm9kZUlkfV9TVEFSVGApIHtcbiAgICAgICAgICAgICAgICBzdGFydGVkICs9IDE7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhcnRlZCA+IDApIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKG5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5jbGFzcyBIdG1sVGFnIHtcbiAgICBjb25zdHJ1Y3Rvcihpc19zdmcgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmlzX3N2ZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzX3N2ZyA9IGlzX3N2ZztcbiAgICAgICAgdGhpcy5lID0gdGhpcy5uID0gbnVsbDtcbiAgICB9XG4gICAgYyhodG1sKSB7XG4gICAgICAgIHRoaXMuaChodG1sKTtcbiAgICB9XG4gICAgbShodG1sLCB0YXJnZXQsIGFuY2hvciA9IG51bGwpIHtcbiAgICAgICAgaWYgKCF0aGlzLmUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzX3N2ZylcbiAgICAgICAgICAgICAgICB0aGlzLmUgPSBzdmdfZWxlbWVudCh0YXJnZXQubm9kZU5hbWUpO1xuICAgICAgICAgICAgLyoqICM3MzY0ICB0YXJnZXQgZm9yIDx0ZW1wbGF0ZT4gbWF5IGJlIHByb3ZpZGVkIGFzICNkb2N1bWVudC1mcmFnbWVudCgxMSkgKi9cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLmUgPSBlbGVtZW50KCh0YXJnZXQubm9kZVR5cGUgPT09IDExID8gJ1RFTVBMQVRFJyA6IHRhcmdldC5ub2RlTmFtZSkpO1xuICAgICAgICAgICAgdGhpcy50ID0gdGFyZ2V0LnRhZ05hbWUgIT09ICdURU1QTEFURScgPyB0YXJnZXQgOiB0YXJnZXQuY29udGVudDtcbiAgICAgICAgICAgIHRoaXMuYyhodG1sKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmkoYW5jaG9yKTtcbiAgICB9XG4gICAgaChodG1sKSB7XG4gICAgICAgIHRoaXMuZS5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICB0aGlzLm4gPSBBcnJheS5mcm9tKHRoaXMuZS5ub2RlTmFtZSA9PT0gJ1RFTVBMQVRFJyA/IHRoaXMuZS5jb250ZW50LmNoaWxkTm9kZXMgOiB0aGlzLmUuY2hpbGROb2Rlcyk7XG4gICAgfVxuICAgIGkoYW5jaG9yKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5uLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpbnNlcnQodGhpcy50LCB0aGlzLm5baV0sIGFuY2hvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcChodG1sKSB7XG4gICAgICAgIHRoaXMuZCgpO1xuICAgICAgICB0aGlzLmgoaHRtbCk7XG4gICAgICAgIHRoaXMuaSh0aGlzLmEpO1xuICAgIH1cbiAgICBkKCkge1xuICAgICAgICB0aGlzLm4uZm9yRWFjaChkZXRhY2gpO1xuICAgIH1cbn1cbmNsYXNzIEh0bWxUYWdIeWRyYXRpb24gZXh0ZW5kcyBIdG1sVGFnIHtcbiAgICBjb25zdHJ1Y3RvcihjbGFpbWVkX25vZGVzLCBpc19zdmcgPSBmYWxzZSkge1xuICAgICAgICBzdXBlcihpc19zdmcpO1xuICAgICAgICB0aGlzLmUgPSB0aGlzLm4gPSBudWxsO1xuICAgICAgICB0aGlzLmwgPSBjbGFpbWVkX25vZGVzO1xuICAgIH1cbiAgICBjKGh0bWwpIHtcbiAgICAgICAgaWYgKHRoaXMubCkge1xuICAgICAgICAgICAgdGhpcy5uID0gdGhpcy5sO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3VwZXIuYyhodG1sKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpKGFuY2hvcikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaW5zZXJ0X2h5ZHJhdGlvbih0aGlzLnQsIHRoaXMubltpXSwgYW5jaG9yKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGF0dHJpYnV0ZV90b19vYmplY3QoYXR0cmlidXRlcykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAoY29uc3QgYXR0cmlidXRlIG9mIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgcmVzdWx0W2F0dHJpYnV0ZS5uYW1lXSA9IGF0dHJpYnV0ZS52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGdldF9jdXN0b21fZWxlbWVudHNfc2xvdHMoZWxlbWVudCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGVsZW1lbnQuY2hpbGROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgIHJlc3VsdFtub2RlLnNsb3QgfHwgJ2RlZmF1bHQnXSA9IHRydWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGNvbnN0cnVjdF9zdmVsdGVfY29tcG9uZW50KGNvbXBvbmVudCwgcHJvcHMpIHtcbiAgICByZXR1cm4gbmV3IGNvbXBvbmVudChwcm9wcyk7XG59XG5cbi8vIHdlIG5lZWQgdG8gc3RvcmUgdGhlIGluZm9ybWF0aW9uIGZvciBtdWx0aXBsZSBkb2N1bWVudHMgYmVjYXVzZSBhIFN2ZWx0ZSBhcHBsaWNhdGlvbiBjb3VsZCBhbHNvIGNvbnRhaW4gaWZyYW1lc1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3N2ZWx0ZWpzL3N2ZWx0ZS9pc3N1ZXMvMzYyNFxuY29uc3QgbWFuYWdlZF9zdHlsZXMgPSBuZXcgTWFwKCk7XG5sZXQgYWN0aXZlID0gMDtcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kYXJrc2t5YXBwL3N0cmluZy1oYXNoL2Jsb2IvbWFzdGVyL2luZGV4LmpzXG5mdW5jdGlvbiBoYXNoKHN0cikge1xuICAgIGxldCBoYXNoID0gNTM4MTtcbiAgICBsZXQgaSA9IHN0ci5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSlcbiAgICAgICAgaGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpIF4gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGhhc2ggPj4+IDA7XG59XG5mdW5jdGlvbiBjcmVhdGVfc3R5bGVfaW5mb3JtYXRpb24oZG9jLCBub2RlKSB7XG4gICAgY29uc3QgaW5mbyA9IHsgc3R5bGVzaGVldDogYXBwZW5kX2VtcHR5X3N0eWxlc2hlZXQobm9kZSksIHJ1bGVzOiB7fSB9O1xuICAgIG1hbmFnZWRfc3R5bGVzLnNldChkb2MsIGluZm8pO1xuICAgIHJldHVybiBpbmZvO1xufVxuZnVuY3Rpb24gY3JlYXRlX3J1bGUobm9kZSwgYSwgYiwgZHVyYXRpb24sIGRlbGF5LCBlYXNlLCBmbiwgdWlkID0gMCkge1xuICAgIGNvbnN0IHN0ZXAgPSAxNi42NjYgLyBkdXJhdGlvbjtcbiAgICBsZXQga2V5ZnJhbWVzID0gJ3tcXG4nO1xuICAgIGZvciAobGV0IHAgPSAwOyBwIDw9IDE7IHAgKz0gc3RlcCkge1xuICAgICAgICBjb25zdCB0ID0gYSArIChiIC0gYSkgKiBlYXNlKHApO1xuICAgICAgICBrZXlmcmFtZXMgKz0gcCAqIDEwMCArIGAleyR7Zm4odCwgMSAtIHQpfX1cXG5gO1xuICAgIH1cbiAgICBjb25zdCBydWxlID0ga2V5ZnJhbWVzICsgYDEwMCUgeyR7Zm4oYiwgMSAtIGIpfX1cXG59YDtcbiAgICBjb25zdCBuYW1lID0gYF9fc3ZlbHRlXyR7aGFzaChydWxlKX1fJHt1aWR9YDtcbiAgICBjb25zdCBkb2MgPSBnZXRfcm9vdF9mb3Jfc3R5bGUobm9kZSk7XG4gICAgY29uc3QgeyBzdHlsZXNoZWV0LCBydWxlcyB9ID0gbWFuYWdlZF9zdHlsZXMuZ2V0KGRvYykgfHwgY3JlYXRlX3N0eWxlX2luZm9ybWF0aW9uKGRvYywgbm9kZSk7XG4gICAgaWYgKCFydWxlc1tuYW1lXSkge1xuICAgICAgICBydWxlc1tuYW1lXSA9IHRydWU7XG4gICAgICAgIHN0eWxlc2hlZXQuaW5zZXJ0UnVsZShgQGtleWZyYW1lcyAke25hbWV9ICR7cnVsZX1gLCBzdHlsZXNoZWV0LmNzc1J1bGVzLmxlbmd0aCk7XG4gICAgfVxuICAgIGNvbnN0IGFuaW1hdGlvbiA9IG5vZGUuc3R5bGUuYW5pbWF0aW9uIHx8ICcnO1xuICAgIG5vZGUuc3R5bGUuYW5pbWF0aW9uID0gYCR7YW5pbWF0aW9uID8gYCR7YW5pbWF0aW9ufSwgYCA6ICcnfSR7bmFtZX0gJHtkdXJhdGlvbn1tcyBsaW5lYXIgJHtkZWxheX1tcyAxIGJvdGhgO1xuICAgIGFjdGl2ZSArPSAxO1xuICAgIHJldHVybiBuYW1lO1xufVxuZnVuY3Rpb24gZGVsZXRlX3J1bGUobm9kZSwgbmFtZSkge1xuICAgIGNvbnN0IHByZXZpb3VzID0gKG5vZGUuc3R5bGUuYW5pbWF0aW9uIHx8ICcnKS5zcGxpdCgnLCAnKTtcbiAgICBjb25zdCBuZXh0ID0gcHJldmlvdXMuZmlsdGVyKG5hbWVcbiAgICAgICAgPyBhbmltID0+IGFuaW0uaW5kZXhPZihuYW1lKSA8IDAgLy8gcmVtb3ZlIHNwZWNpZmljIGFuaW1hdGlvblxuICAgICAgICA6IGFuaW0gPT4gYW5pbS5pbmRleE9mKCdfX3N2ZWx0ZScpID09PSAtMSAvLyByZW1vdmUgYWxsIFN2ZWx0ZSBhbmltYXRpb25zXG4gICAgKTtcbiAgICBjb25zdCBkZWxldGVkID0gcHJldmlvdXMubGVuZ3RoIC0gbmV4dC5sZW5ndGg7XG4gICAgaWYgKGRlbGV0ZWQpIHtcbiAgICAgICAgbm9kZS5zdHlsZS5hbmltYXRpb24gPSBuZXh0LmpvaW4oJywgJyk7XG4gICAgICAgIGFjdGl2ZSAtPSBkZWxldGVkO1xuICAgICAgICBpZiAoIWFjdGl2ZSlcbiAgICAgICAgICAgIGNsZWFyX3J1bGVzKCk7XG4gICAgfVxufVxuZnVuY3Rpb24gY2xlYXJfcnVsZXMoKSB7XG4gICAgcmFmKCgpID0+IHtcbiAgICAgICAgaWYgKGFjdGl2ZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgbWFuYWdlZF9zdHlsZXMuZm9yRWFjaChpbmZvID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgb3duZXJOb2RlIH0gPSBpbmZvLnN0eWxlc2hlZXQ7XG4gICAgICAgICAgICAvLyB0aGVyZSBpcyBubyBvd25lck5vZGUgaWYgaXQgcnVucyBvbiBqc2RvbS5cbiAgICAgICAgICAgIGlmIChvd25lck5vZGUpXG4gICAgICAgICAgICAgICAgZGV0YWNoKG93bmVyTm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBtYW5hZ2VkX3N0eWxlcy5jbGVhcigpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVfYW5pbWF0aW9uKG5vZGUsIGZyb20sIGZuLCBwYXJhbXMpIHtcbiAgICBpZiAoIWZyb20pXG4gICAgICAgIHJldHVybiBub29wO1xuICAgIGNvbnN0IHRvID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAoZnJvbS5sZWZ0ID09PSB0by5sZWZ0ICYmIGZyb20ucmlnaHQgPT09IHRvLnJpZ2h0ICYmIGZyb20udG9wID09PSB0by50b3AgJiYgZnJvbS5ib3R0b20gPT09IHRvLmJvdHRvbSlcbiAgICAgICAgcmV0dXJuIG5vb3A7XG4gICAgY29uc3QgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gMzAwLCBlYXNpbmcgPSBpZGVudGl0eSwgXG4gICAgLy8gQHRzLWlnbm9yZSB0b2RvOiBzaG91bGQgdGhpcyBiZSBzZXBhcmF0ZWQgZnJvbSBkZXN0cnVjdHVyaW5nPyBPciBzdGFydC9lbmQgYWRkZWQgdG8gcHVibGljIGFwaSBhbmQgZG9jdW1lbnRhdGlvbj9cbiAgICBzdGFydDogc3RhcnRfdGltZSA9IG5vdygpICsgZGVsYXksIFxuICAgIC8vIEB0cy1pZ25vcmUgdG9kbzpcbiAgICBlbmQgPSBzdGFydF90aW1lICsgZHVyYXRpb24sIHRpY2sgPSBub29wLCBjc3MgfSA9IGZuKG5vZGUsIHsgZnJvbSwgdG8gfSwgcGFyYW1zKTtcbiAgICBsZXQgcnVubmluZyA9IHRydWU7XG4gICAgbGV0IHN0YXJ0ZWQgPSBmYWxzZTtcbiAgICBsZXQgbmFtZTtcbiAgICBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgaWYgKGNzcykge1xuICAgICAgICAgICAgbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIDAsIDEsIGR1cmF0aW9uLCBkZWxheSwgZWFzaW5nLCBjc3MpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZGVsYXkpIHtcbiAgICAgICAgICAgIHN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIGlmIChjc3MpXG4gICAgICAgICAgICBkZWxldGVfcnVsZShub2RlLCBuYW1lKTtcbiAgICAgICAgcnVubmluZyA9IGZhbHNlO1xuICAgIH1cbiAgICBsb29wKG5vdyA9PiB7XG4gICAgICAgIGlmICghc3RhcnRlZCAmJiBub3cgPj0gc3RhcnRfdGltZSkge1xuICAgICAgICAgICAgc3RhcnRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXJ0ZWQgJiYgbm93ID49IGVuZCkge1xuICAgICAgICAgICAgdGljaygxLCAwKTtcbiAgICAgICAgICAgIHN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJ1bm5pbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhcnRlZCkge1xuICAgICAgICAgICAgY29uc3QgcCA9IG5vdyAtIHN0YXJ0X3RpbWU7XG4gICAgICAgICAgICBjb25zdCB0ID0gMCArIDEgKiBlYXNpbmcocCAvIGR1cmF0aW9uKTtcbiAgICAgICAgICAgIHRpY2sodCwgMSAtIHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICAgIHN0YXJ0KCk7XG4gICAgdGljaygwLCAxKTtcbiAgICByZXR1cm4gc3RvcDtcbn1cbmZ1bmN0aW9uIGZpeF9wb3NpdGlvbihub2RlKSB7XG4gICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgIGlmIChzdHlsZS5wb3NpdGlvbiAhPT0gJ2Fic29sdXRlJyAmJiBzdHlsZS5wb3NpdGlvbiAhPT0gJ2ZpeGVkJykge1xuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHN0eWxlO1xuICAgICAgICBjb25zdCBhID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgbm9kZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIG5vZGUuc3R5bGUud2lkdGggPSB3aWR0aDtcbiAgICAgICAgbm9kZS5zdHlsZS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGFkZF90cmFuc2Zvcm0obm9kZSwgYSk7XG4gICAgfVxufVxuZnVuY3Rpb24gYWRkX3RyYW5zZm9ybShub2RlLCBhKSB7XG4gICAgY29uc3QgYiA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKGEubGVmdCAhPT0gYi5sZWZ0IHx8IGEudG9wICE9PSBiLnRvcCkge1xuICAgICAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IHN0eWxlLnRyYW5zZm9ybSA9PT0gJ25vbmUnID8gJycgOiBzdHlsZS50cmFuc2Zvcm07XG4gICAgICAgIG5vZGUuc3R5bGUudHJhbnNmb3JtID0gYCR7dHJhbnNmb3JtfSB0cmFuc2xhdGUoJHthLmxlZnQgLSBiLmxlZnR9cHgsICR7YS50b3AgLSBiLnRvcH1weClgO1xuICAgIH1cbn1cblxubGV0IGN1cnJlbnRfY29tcG9uZW50O1xuZnVuY3Rpb24gc2V0X2N1cnJlbnRfY29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgIGN1cnJlbnRfY29tcG9uZW50ID0gY29tcG9uZW50O1xufVxuZnVuY3Rpb24gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkge1xuICAgIGlmICghY3VycmVudF9jb21wb25lbnQpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRnVuY3Rpb24gY2FsbGVkIG91dHNpZGUgY29tcG9uZW50IGluaXRpYWxpemF0aW9uJyk7XG4gICAgcmV0dXJuIGN1cnJlbnRfY29tcG9uZW50O1xufVxuLyoqXG4gKiBTY2hlZHVsZXMgYSBjYWxsYmFjayB0byBydW4gaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBjb21wb25lbnQgaXMgdXBkYXRlZCBhZnRlciBhbnkgc3RhdGUgY2hhbmdlLlxuICpcbiAqIFRoZSBmaXJzdCB0aW1lIHRoZSBjYWxsYmFjayBydW5zIHdpbGwgYmUgYmVmb3JlIHRoZSBpbml0aWFsIGBvbk1vdW50YFxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzI3J1bi10aW1lLXN2ZWx0ZS1iZWZvcmV1cGRhdGVcbiAqL1xuZnVuY3Rpb24gYmVmb3JlVXBkYXRlKGZuKSB7XG4gICAgZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuYmVmb3JlX3VwZGF0ZS5wdXNoKGZuKTtcbn1cbi8qKlxuICogVGhlIGBvbk1vdW50YCBmdW5jdGlvbiBzY2hlZHVsZXMgYSBjYWxsYmFjayB0byBydW4gYXMgc29vbiBhcyB0aGUgY29tcG9uZW50IGhhcyBiZWVuIG1vdW50ZWQgdG8gdGhlIERPTS5cbiAqIEl0IG11c3QgYmUgY2FsbGVkIGR1cmluZyB0aGUgY29tcG9uZW50J3MgaW5pdGlhbGlzYXRpb24gKGJ1dCBkb2Vzbid0IG5lZWQgdG8gbGl2ZSAqaW5zaWRlKiB0aGUgY29tcG9uZW50O1xuICogaXQgY2FuIGJlIGNhbGxlZCBmcm9tIGFuIGV4dGVybmFsIG1vZHVsZSkuXG4gKlxuICogYG9uTW91bnRgIGRvZXMgbm90IHJ1biBpbnNpZGUgYSBbc2VydmVyLXNpZGUgY29tcG9uZW50XSgvZG9jcyNydW4tdGltZS1zZXJ2ZXItc2lkZS1jb21wb25lbnQtYXBpKS5cbiAqXG4gKiBodHRwczovL3N2ZWx0ZS5kZXYvZG9jcyNydW4tdGltZS1zdmVsdGUtb25tb3VudFxuICovXG5mdW5jdGlvbiBvbk1vdW50KGZuKSB7XG4gICAgZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQub25fbW91bnQucHVzaChmbik7XG59XG4vKipcbiAqIFNjaGVkdWxlcyBhIGNhbGxiYWNrIHRvIHJ1biBpbW1lZGlhdGVseSBhZnRlciB0aGUgY29tcG9uZW50IGhhcyBiZWVuIHVwZGF0ZWQuXG4gKlxuICogVGhlIGZpcnN0IHRpbWUgdGhlIGNhbGxiYWNrIHJ1bnMgd2lsbCBiZSBhZnRlciB0aGUgaW5pdGlhbCBgb25Nb3VudGBcbiAqL1xuZnVuY3Rpb24gYWZ0ZXJVcGRhdGUoZm4pIHtcbiAgICBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5hZnRlcl91cGRhdGUucHVzaChmbik7XG59XG4vKipcbiAqIFNjaGVkdWxlcyBhIGNhbGxiYWNrIHRvIHJ1biBpbW1lZGlhdGVseSBiZWZvcmUgdGhlIGNvbXBvbmVudCBpcyB1bm1vdW50ZWQuXG4gKlxuICogT3V0IG9mIGBvbk1vdW50YCwgYGJlZm9yZVVwZGF0ZWAsIGBhZnRlclVwZGF0ZWAgYW5kIGBvbkRlc3Ryb3lgLCB0aGlzIGlzIHRoZVxuICogb25seSBvbmUgdGhhdCBydW5zIGluc2lkZSBhIHNlcnZlci1zaWRlIGNvbXBvbmVudC5cbiAqXG4gKiBodHRwczovL3N2ZWx0ZS5kZXYvZG9jcyNydW4tdGltZS1zdmVsdGUtb25kZXN0cm95XG4gKi9cbmZ1bmN0aW9uIG9uRGVzdHJveShmbikge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLm9uX2Rlc3Ryb3kucHVzaChmbik7XG59XG4vKipcbiAqIENyZWF0ZXMgYW4gZXZlbnQgZGlzcGF0Y2hlciB0aGF0IGNhbiBiZSB1c2VkIHRvIGRpc3BhdGNoIFtjb21wb25lbnQgZXZlbnRzXSgvZG9jcyN0ZW1wbGF0ZS1zeW50YXgtY29tcG9uZW50LWRpcmVjdGl2ZXMtb24tZXZlbnRuYW1lKS5cbiAqIEV2ZW50IGRpc3BhdGNoZXJzIGFyZSBmdW5jdGlvbnMgdGhhdCBjYW4gdGFrZSB0d28gYXJndW1lbnRzOiBgbmFtZWAgYW5kIGBkZXRhaWxgLlxuICpcbiAqIENvbXBvbmVudCBldmVudHMgY3JlYXRlZCB3aXRoIGBjcmVhdGVFdmVudERpc3BhdGNoZXJgIGNyZWF0ZSBhXG4gKiBbQ3VzdG9tRXZlbnRdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DdXN0b21FdmVudCkuXG4gKiBUaGVzZSBldmVudHMgZG8gbm90IFtidWJibGVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvTGVhcm4vSmF2YVNjcmlwdC9CdWlsZGluZ19ibG9ja3MvRXZlbnRzI0V2ZW50X2J1YmJsaW5nX2FuZF9jYXB0dXJlKS5cbiAqIFRoZSBgZGV0YWlsYCBhcmd1bWVudCBjb3JyZXNwb25kcyB0byB0aGUgW0N1c3RvbUV2ZW50LmRldGFpbF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0N1c3RvbUV2ZW50L2RldGFpbClcbiAqIHByb3BlcnR5IGFuZCBjYW4gY29udGFpbiBhbnkgdHlwZSBvZiBkYXRhLlxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzI3J1bi10aW1lLXN2ZWx0ZS1jcmVhdGVldmVudGRpc3BhdGNoZXJcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRXZlbnREaXNwYXRjaGVyKCkge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IGdldF9jdXJyZW50X2NvbXBvbmVudCgpO1xuICAgIHJldHVybiAodHlwZSwgZGV0YWlsLCB7IGNhbmNlbGFibGUgPSBmYWxzZSB9ID0ge30pID0+IHtcbiAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gY29tcG9uZW50LiQkLmNhbGxiYWNrc1t0eXBlXTtcbiAgICAgICAgaWYgKGNhbGxiYWNrcykge1xuICAgICAgICAgICAgLy8gVE9ETyBhcmUgdGhlcmUgc2l0dWF0aW9ucyB3aGVyZSBldmVudHMgY291bGQgYmUgZGlzcGF0Y2hlZFxuICAgICAgICAgICAgLy8gaW4gYSBzZXJ2ZXIgKG5vbi1ET00pIGVudmlyb25tZW50P1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBjdXN0b21fZXZlbnQodHlwZSwgZGV0YWlsLCB7IGNhbmNlbGFibGUgfSk7XG4gICAgICAgICAgICBjYWxsYmFja3Muc2xpY2UoKS5mb3JFYWNoKGZuID0+IHtcbiAgICAgICAgICAgICAgICBmbi5jYWxsKGNvbXBvbmVudCwgZXZlbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbn1cbi8qKlxuICogQXNzb2NpYXRlcyBhbiBhcmJpdHJhcnkgYGNvbnRleHRgIG9iamVjdCB3aXRoIHRoZSBjdXJyZW50IGNvbXBvbmVudCBhbmQgdGhlIHNwZWNpZmllZCBga2V5YFxuICogYW5kIHJldHVybnMgdGhhdCBvYmplY3QuIFRoZSBjb250ZXh0IGlzIHRoZW4gYXZhaWxhYmxlIHRvIGNoaWxkcmVuIG9mIHRoZSBjb21wb25lbnRcbiAqIChpbmNsdWRpbmcgc2xvdHRlZCBjb250ZW50KSB3aXRoIGBnZXRDb250ZXh0YC5cbiAqXG4gKiBMaWtlIGxpZmVjeWNsZSBmdW5jdGlvbnMsIHRoaXMgbXVzdCBiZSBjYWxsZWQgZHVyaW5nIGNvbXBvbmVudCBpbml0aWFsaXNhdGlvbi5cbiAqXG4gKiBodHRwczovL3N2ZWx0ZS5kZXYvZG9jcyNydW4tdGltZS1zdmVsdGUtc2V0Y29udGV4dFxuICovXG5mdW5jdGlvbiBzZXRDb250ZXh0KGtleSwgY29udGV4dCkge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmNvbnRleHQuc2V0KGtleSwgY29udGV4dCk7XG4gICAgcmV0dXJuIGNvbnRleHQ7XG59XG4vKipcbiAqIFJldHJpZXZlcyB0aGUgY29udGV4dCB0aGF0IGJlbG9uZ3MgdG8gdGhlIGNsb3Nlc3QgcGFyZW50IGNvbXBvbmVudCB3aXRoIHRoZSBzcGVjaWZpZWQgYGtleWAuXG4gKiBNdXN0IGJlIGNhbGxlZCBkdXJpbmcgY29tcG9uZW50IGluaXRpYWxpc2F0aW9uLlxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzI3J1bi10aW1lLXN2ZWx0ZS1nZXRjb250ZXh0XG4gKi9cbmZ1bmN0aW9uIGdldENvbnRleHQoa2V5KSB7XG4gICAgcmV0dXJuIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmNvbnRleHQuZ2V0KGtleSk7XG59XG4vKipcbiAqIFJldHJpZXZlcyB0aGUgd2hvbGUgY29udGV4dCBtYXAgdGhhdCBiZWxvbmdzIHRvIHRoZSBjbG9zZXN0IHBhcmVudCBjb21wb25lbnQuXG4gKiBNdXN0IGJlIGNhbGxlZCBkdXJpbmcgY29tcG9uZW50IGluaXRpYWxpc2F0aW9uLiBVc2VmdWwsIGZvciBleGFtcGxlLCBpZiB5b3VcbiAqIHByb2dyYW1tYXRpY2FsbHkgY3JlYXRlIGEgY29tcG9uZW50IGFuZCB3YW50IHRvIHBhc3MgdGhlIGV4aXN0aW5nIGNvbnRleHQgdG8gaXQuXG4gKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3MjcnVuLXRpbWUtc3ZlbHRlLWdldGFsbGNvbnRleHRzXG4gKi9cbmZ1bmN0aW9uIGdldEFsbENvbnRleHRzKCkge1xuICAgIHJldHVybiBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5jb250ZXh0O1xufVxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciBhIGdpdmVuIGBrZXlgIGhhcyBiZWVuIHNldCBpbiB0aGUgY29udGV4dCBvZiBhIHBhcmVudCBjb21wb25lbnQuXG4gKiBNdXN0IGJlIGNhbGxlZCBkdXJpbmcgY29tcG9uZW50IGluaXRpYWxpc2F0aW9uLlxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzI3J1bi10aW1lLXN2ZWx0ZS1oYXNjb250ZXh0XG4gKi9cbmZ1bmN0aW9uIGhhc0NvbnRleHQoa2V5KSB7XG4gICAgcmV0dXJuIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmNvbnRleHQuaGFzKGtleSk7XG59XG4vLyBUT0RPIGZpZ3VyZSBvdXQgaWYgd2Ugc3RpbGwgd2FudCB0byBzdXBwb3J0XG4vLyBzaG9ydGhhbmQgZXZlbnRzLCBvciBpZiB3ZSB3YW50IHRvIGltcGxlbWVudFxuLy8gYSByZWFsIGJ1YmJsaW5nIG1lY2hhbmlzbVxuZnVuY3Rpb24gYnViYmxlKGNvbXBvbmVudCwgZXZlbnQpIHtcbiAgICBjb25zdCBjYWxsYmFja3MgPSBjb21wb25lbnQuJCQuY2FsbGJhY2tzW2V2ZW50LnR5cGVdO1xuICAgIGlmIChjYWxsYmFja3MpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjYWxsYmFja3Muc2xpY2UoKS5mb3JFYWNoKGZuID0+IGZuLmNhbGwodGhpcywgZXZlbnQpKTtcbiAgICB9XG59XG5cbmNvbnN0IGRpcnR5X2NvbXBvbmVudHMgPSBbXTtcbmNvbnN0IGludHJvcyA9IHsgZW5hYmxlZDogZmFsc2UgfTtcbmNvbnN0IGJpbmRpbmdfY2FsbGJhY2tzID0gW107XG5sZXQgcmVuZGVyX2NhbGxiYWNrcyA9IFtdO1xuY29uc3QgZmx1c2hfY2FsbGJhY2tzID0gW107XG5jb25zdCByZXNvbHZlZF9wcm9taXNlID0gLyogQF9fUFVSRV9fICovIFByb21pc2UucmVzb2x2ZSgpO1xubGV0IHVwZGF0ZV9zY2hlZHVsZWQgPSBmYWxzZTtcbmZ1bmN0aW9uIHNjaGVkdWxlX3VwZGF0ZSgpIHtcbiAgICBpZiAoIXVwZGF0ZV9zY2hlZHVsZWQpIHtcbiAgICAgICAgdXBkYXRlX3NjaGVkdWxlZCA9IHRydWU7XG4gICAgICAgIHJlc29sdmVkX3Byb21pc2UudGhlbihmbHVzaCk7XG4gICAgfVxufVxuZnVuY3Rpb24gdGljaygpIHtcbiAgICBzY2hlZHVsZV91cGRhdGUoKTtcbiAgICByZXR1cm4gcmVzb2x2ZWRfcHJvbWlzZTtcbn1cbmZ1bmN0aW9uIGFkZF9yZW5kZXJfY2FsbGJhY2soZm4pIHtcbiAgICByZW5kZXJfY2FsbGJhY2tzLnB1c2goZm4pO1xufVxuZnVuY3Rpb24gYWRkX2ZsdXNoX2NhbGxiYWNrKGZuKSB7XG4gICAgZmx1c2hfY2FsbGJhY2tzLnB1c2goZm4pO1xufVxuLy8gZmx1c2goKSBjYWxscyBjYWxsYmFja3MgaW4gdGhpcyBvcmRlcjpcbi8vIDEuIEFsbCBiZWZvcmVVcGRhdGUgY2FsbGJhY2tzLCBpbiBvcmRlcjogcGFyZW50cyBiZWZvcmUgY2hpbGRyZW5cbi8vIDIuIEFsbCBiaW5kOnRoaXMgY2FsbGJhY2tzLCBpbiByZXZlcnNlIG9yZGVyOiBjaGlsZHJlbiBiZWZvcmUgcGFyZW50cy5cbi8vIDMuIEFsbCBhZnRlclVwZGF0ZSBjYWxsYmFja3MsIGluIG9yZGVyOiBwYXJlbnRzIGJlZm9yZSBjaGlsZHJlbi4gRVhDRVBUXG4vLyAgICBmb3IgYWZ0ZXJVcGRhdGVzIGNhbGxlZCBkdXJpbmcgdGhlIGluaXRpYWwgb25Nb3VudCwgd2hpY2ggYXJlIGNhbGxlZCBpblxuLy8gICAgcmV2ZXJzZSBvcmRlcjogY2hpbGRyZW4gYmVmb3JlIHBhcmVudHMuXG4vLyBTaW5jZSBjYWxsYmFja3MgbWlnaHQgdXBkYXRlIGNvbXBvbmVudCB2YWx1ZXMsIHdoaWNoIGNvdWxkIHRyaWdnZXIgYW5vdGhlclxuLy8gY2FsbCB0byBmbHVzaCgpLCB0aGUgZm9sbG93aW5nIHN0ZXBzIGd1YXJkIGFnYWluc3QgdGhpczpcbi8vIDEuIER1cmluZyBiZWZvcmVVcGRhdGUsIGFueSB1cGRhdGVkIGNvbXBvbmVudHMgd2lsbCBiZSBhZGRlZCB0byB0aGVcbi8vICAgIGRpcnR5X2NvbXBvbmVudHMgYXJyYXkgYW5kIHdpbGwgY2F1c2UgYSByZWVudHJhbnQgY2FsbCB0byBmbHVzaCgpLiBCZWNhdXNlXG4vLyAgICB0aGUgZmx1c2ggaW5kZXggaXMga2VwdCBvdXRzaWRlIHRoZSBmdW5jdGlvbiwgdGhlIHJlZW50cmFudCBjYWxsIHdpbGwgcGlja1xuLy8gICAgdXAgd2hlcmUgdGhlIGVhcmxpZXIgY2FsbCBsZWZ0IG9mZiBhbmQgZ28gdGhyb3VnaCBhbGwgZGlydHkgY29tcG9uZW50cy4gVGhlXG4vLyAgICBjdXJyZW50X2NvbXBvbmVudCB2YWx1ZSBpcyBzYXZlZCBhbmQgcmVzdG9yZWQgc28gdGhhdCB0aGUgcmVlbnRyYW50IGNhbGwgd2lsbFxuLy8gICAgbm90IGludGVyZmVyZSB3aXRoIHRoZSBcInBhcmVudFwiIGZsdXNoKCkgY2FsbC5cbi8vIDIuIGJpbmQ6dGhpcyBjYWxsYmFja3MgY2Fubm90IHRyaWdnZXIgbmV3IGZsdXNoKCkgY2FsbHMuXG4vLyAzLiBEdXJpbmcgYWZ0ZXJVcGRhdGUsIGFueSB1cGRhdGVkIGNvbXBvbmVudHMgd2lsbCBOT1QgaGF2ZSB0aGVpciBhZnRlclVwZGF0ZVxuLy8gICAgY2FsbGJhY2sgY2FsbGVkIGEgc2Vjb25kIHRpbWU7IHRoZSBzZWVuX2NhbGxiYWNrcyBzZXQsIG91dHNpZGUgdGhlIGZsdXNoKClcbi8vICAgIGZ1bmN0aW9uLCBndWFyYW50ZWVzIHRoaXMgYmVoYXZpb3IuXG5jb25zdCBzZWVuX2NhbGxiYWNrcyA9IG5ldyBTZXQoKTtcbmxldCBmbHVzaGlkeCA9IDA7IC8vIERvICpub3QqIG1vdmUgdGhpcyBpbnNpZGUgdGhlIGZsdXNoKCkgZnVuY3Rpb25cbmZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIC8vIERvIG5vdCByZWVudGVyIGZsdXNoIHdoaWxlIGRpcnR5IGNvbXBvbmVudHMgYXJlIHVwZGF0ZWQsIGFzIHRoaXMgY2FuXG4gICAgLy8gcmVzdWx0IGluIGFuIGluZmluaXRlIGxvb3AuIEluc3RlYWQsIGxldCB0aGUgaW5uZXIgZmx1c2ggaGFuZGxlIGl0LlxuICAgIC8vIFJlZW50cmFuY3kgaXMgb2sgYWZ0ZXJ3YXJkcyBmb3IgYmluZGluZ3MgZXRjLlxuICAgIGlmIChmbHVzaGlkeCAhPT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNhdmVkX2NvbXBvbmVudCA9IGN1cnJlbnRfY29tcG9uZW50O1xuICAgIGRvIHtcbiAgICAgICAgLy8gZmlyc3QsIGNhbGwgYmVmb3JlVXBkYXRlIGZ1bmN0aW9uc1xuICAgICAgICAvLyBhbmQgdXBkYXRlIGNvbXBvbmVudHNcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHdoaWxlIChmbHVzaGlkeCA8IGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gZGlydHlfY29tcG9uZW50c1tmbHVzaGlkeF07XG4gICAgICAgICAgICAgICAgZmx1c2hpZHgrKztcbiAgICAgICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICB1cGRhdGUoY29tcG9uZW50LiQkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gcmVzZXQgZGlydHkgc3RhdGUgdG8gbm90IGVuZCB1cCBpbiBhIGRlYWRsb2NrZWQgc3RhdGUgYW5kIHRoZW4gcmV0aHJvd1xuICAgICAgICAgICAgZGlydHlfY29tcG9uZW50cy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgZmx1c2hpZHggPSAwO1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQobnVsbCk7XG4gICAgICAgIGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoID0gMDtcbiAgICAgICAgZmx1c2hpZHggPSAwO1xuICAgICAgICB3aGlsZSAoYmluZGluZ19jYWxsYmFja3MubGVuZ3RoKVxuICAgICAgICAgICAgYmluZGluZ19jYWxsYmFja3MucG9wKCkoKTtcbiAgICAgICAgLy8gdGhlbiwgb25jZSBjb21wb25lbnRzIGFyZSB1cGRhdGVkLCBjYWxsXG4gICAgICAgIC8vIGFmdGVyVXBkYXRlIGZ1bmN0aW9ucy4gVGhpcyBtYXkgY2F1c2VcbiAgICAgICAgLy8gc3Vic2VxdWVudCB1cGRhdGVzLi4uXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVuZGVyX2NhbGxiYWNrcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSByZW5kZXJfY2FsbGJhY2tzW2ldO1xuICAgICAgICAgICAgaWYgKCFzZWVuX2NhbGxiYWNrcy5oYXMoY2FsbGJhY2spKSB7XG4gICAgICAgICAgICAgICAgLy8gLi4uc28gZ3VhcmQgYWdhaW5zdCBpbmZpbml0ZSBsb29wc1xuICAgICAgICAgICAgICAgIHNlZW5fY2FsbGJhY2tzLmFkZChjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZW5kZXJfY2FsbGJhY2tzLmxlbmd0aCA9IDA7XG4gICAgfSB3aGlsZSAoZGlydHlfY29tcG9uZW50cy5sZW5ndGgpO1xuICAgIHdoaWxlIChmbHVzaF9jYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgICAgIGZsdXNoX2NhbGxiYWNrcy5wb3AoKSgpO1xuICAgIH1cbiAgICB1cGRhdGVfc2NoZWR1bGVkID0gZmFsc2U7XG4gICAgc2Vlbl9jYWxsYmFja3MuY2xlYXIoKTtcbiAgICBzZXRfY3VycmVudF9jb21wb25lbnQoc2F2ZWRfY29tcG9uZW50KTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZSgkJCkge1xuICAgIGlmICgkJC5mcmFnbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAkJC51cGRhdGUoKTtcbiAgICAgICAgcnVuX2FsbCgkJC5iZWZvcmVfdXBkYXRlKTtcbiAgICAgICAgY29uc3QgZGlydHkgPSAkJC5kaXJ0eTtcbiAgICAgICAgJCQuZGlydHkgPSBbLTFdO1xuICAgICAgICAkJC5mcmFnbWVudCAmJiAkJC5mcmFnbWVudC5wKCQkLmN0eCwgZGlydHkpO1xuICAgICAgICAkJC5hZnRlcl91cGRhdGUuZm9yRWFjaChhZGRfcmVuZGVyX2NhbGxiYWNrKTtcbiAgICB9XG59XG4vKipcbiAqIFVzZWZ1bCBmb3IgZXhhbXBsZSB0byBleGVjdXRlIHJlbWFpbmluZyBgYWZ0ZXJVcGRhdGVgIGNhbGxiYWNrcyBiZWZvcmUgZXhlY3V0aW5nIGBkZXN0cm95YC5cbiAqL1xuZnVuY3Rpb24gZmx1c2hfcmVuZGVyX2NhbGxiYWNrcyhmbnMpIHtcbiAgICBjb25zdCBmaWx0ZXJlZCA9IFtdO1xuICAgIGNvbnN0IHRhcmdldHMgPSBbXTtcbiAgICByZW5kZXJfY2FsbGJhY2tzLmZvckVhY2goKGMpID0+IGZucy5pbmRleE9mKGMpID09PSAtMSA/IGZpbHRlcmVkLnB1c2goYykgOiB0YXJnZXRzLnB1c2goYykpO1xuICAgIHRhcmdldHMuZm9yRWFjaCgoYykgPT4gYygpKTtcbiAgICByZW5kZXJfY2FsbGJhY2tzID0gZmlsdGVyZWQ7XG59XG5cbmxldCBwcm9taXNlO1xuZnVuY3Rpb24gd2FpdCgpIHtcbiAgICBpZiAoIXByb21pc2UpIHtcbiAgICAgICAgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICBwcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgcHJvbWlzZSA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cbmZ1bmN0aW9uIGRpc3BhdGNoKG5vZGUsIGRpcmVjdGlvbiwga2luZCkge1xuICAgIG5vZGUuZGlzcGF0Y2hFdmVudChjdXN0b21fZXZlbnQoYCR7ZGlyZWN0aW9uID8gJ2ludHJvJyA6ICdvdXRybyd9JHtraW5kfWApKTtcbn1cbmNvbnN0IG91dHJvaW5nID0gbmV3IFNldCgpO1xubGV0IG91dHJvcztcbmZ1bmN0aW9uIGdyb3VwX291dHJvcygpIHtcbiAgICBvdXRyb3MgPSB7XG4gICAgICAgIHI6IDAsXG4gICAgICAgIGM6IFtdLFxuICAgICAgICBwOiBvdXRyb3MgLy8gcGFyZW50IGdyb3VwXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNoZWNrX291dHJvcygpIHtcbiAgICBpZiAoIW91dHJvcy5yKSB7XG4gICAgICAgIHJ1bl9hbGwob3V0cm9zLmMpO1xuICAgIH1cbiAgICBvdXRyb3MgPSBvdXRyb3MucDtcbn1cbmZ1bmN0aW9uIHRyYW5zaXRpb25faW4oYmxvY2ssIGxvY2FsKSB7XG4gICAgaWYgKGJsb2NrICYmIGJsb2NrLmkpIHtcbiAgICAgICAgb3V0cm9pbmcuZGVsZXRlKGJsb2NrKTtcbiAgICAgICAgYmxvY2suaShsb2NhbCk7XG4gICAgfVxufVxuZnVuY3Rpb24gdHJhbnNpdGlvbl9vdXQoYmxvY2ssIGxvY2FsLCBkZXRhY2gsIGNhbGxiYWNrKSB7XG4gICAgaWYgKGJsb2NrICYmIGJsb2NrLm8pIHtcbiAgICAgICAgaWYgKG91dHJvaW5nLmhhcyhibG9jaykpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIG91dHJvaW5nLmFkZChibG9jayk7XG4gICAgICAgIG91dHJvcy5jLnB1c2goKCkgPT4ge1xuICAgICAgICAgICAgb3V0cm9pbmcuZGVsZXRlKGJsb2NrKTtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGlmIChkZXRhY2gpXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrLmQoMSk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGJsb2NrLm8obG9jYWwpO1xuICAgIH1cbiAgICBlbHNlIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgIH1cbn1cbmNvbnN0IG51bGxfdHJhbnNpdGlvbiA9IHsgZHVyYXRpb246IDAgfTtcbmZ1bmN0aW9uIGNyZWF0ZV9pbl90cmFuc2l0aW9uKG5vZGUsIGZuLCBwYXJhbXMpIHtcbiAgICBjb25zdCBvcHRpb25zID0geyBkaXJlY3Rpb246ICdpbicgfTtcbiAgICBsZXQgY29uZmlnID0gZm4obm9kZSwgcGFyYW1zLCBvcHRpb25zKTtcbiAgICBsZXQgcnVubmluZyA9IGZhbHNlO1xuICAgIGxldCBhbmltYXRpb25fbmFtZTtcbiAgICBsZXQgdGFzaztcbiAgICBsZXQgdWlkID0gMDtcbiAgICBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgICAgICBpZiAoYW5pbWF0aW9uX25hbWUpXG4gICAgICAgICAgICBkZWxldGVfcnVsZShub2RlLCBhbmltYXRpb25fbmFtZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdvKCkge1xuICAgICAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSAzMDAsIGVhc2luZyA9IGlkZW50aXR5LCB0aWNrID0gbm9vcCwgY3NzIH0gPSBjb25maWcgfHwgbnVsbF90cmFuc2l0aW9uO1xuICAgICAgICBpZiAoY3NzKVxuICAgICAgICAgICAgYW5pbWF0aW9uX25hbWUgPSBjcmVhdGVfcnVsZShub2RlLCAwLCAxLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzLCB1aWQrKyk7XG4gICAgICAgIHRpY2soMCwgMSk7XG4gICAgICAgIGNvbnN0IHN0YXJ0X3RpbWUgPSBub3coKSArIGRlbGF5O1xuICAgICAgICBjb25zdCBlbmRfdGltZSA9IHN0YXJ0X3RpbWUgKyBkdXJhdGlvbjtcbiAgICAgICAgaWYgKHRhc2spXG4gICAgICAgICAgICB0YXNrLmFib3J0KCk7XG4gICAgICAgIHJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICBhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IGRpc3BhdGNoKG5vZGUsIHRydWUsICdzdGFydCcpKTtcbiAgICAgICAgdGFzayA9IGxvb3Aobm93ID0+IHtcbiAgICAgICAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBlbmRfdGltZSkge1xuICAgICAgICAgICAgICAgICAgICB0aWNrKDEsIDApO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChub2RlLCB0cnVlLCAnZW5kJyk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBzdGFydF90aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBlYXNpbmcoKG5vdyAtIHN0YXJ0X3RpbWUpIC8gZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB0aWNrKHQsIDEgLSB0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcnVubmluZztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxldCBzdGFydGVkID0gZmFsc2U7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3RhcnQoKSB7XG4gICAgICAgICAgICBpZiAoc3RhcnRlZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBzdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGRlbGV0ZV9ydWxlKG5vZGUpO1xuICAgICAgICAgICAgaWYgKGlzX2Z1bmN0aW9uKGNvbmZpZykpIHtcbiAgICAgICAgICAgICAgICBjb25maWcgPSBjb25maWcob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgd2FpdCgpLnRoZW4oZ28pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZ28oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaW52YWxpZGF0ZSgpIHtcbiAgICAgICAgICAgIHN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW5kKCkge1xuICAgICAgICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICAgICAgcnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZV9vdXRfdHJhbnNpdGlvbihub2RlLCBmbiwgcGFyYW1zKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHsgZGlyZWN0aW9uOiAnb3V0JyB9O1xuICAgIGxldCBjb25maWcgPSBmbihub2RlLCBwYXJhbXMsIG9wdGlvbnMpO1xuICAgIGxldCBydW5uaW5nID0gdHJ1ZTtcbiAgICBsZXQgYW5pbWF0aW9uX25hbWU7XG4gICAgY29uc3QgZ3JvdXAgPSBvdXRyb3M7XG4gICAgZ3JvdXAuciArPSAxO1xuICAgIGZ1bmN0aW9uIGdvKCkge1xuICAgICAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSAzMDAsIGVhc2luZyA9IGlkZW50aXR5LCB0aWNrID0gbm9vcCwgY3NzIH0gPSBjb25maWcgfHwgbnVsbF90cmFuc2l0aW9uO1xuICAgICAgICBpZiAoY3NzKVxuICAgICAgICAgICAgYW5pbWF0aW9uX25hbWUgPSBjcmVhdGVfcnVsZShub2RlLCAxLCAwLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzKTtcbiAgICAgICAgY29uc3Qgc3RhcnRfdGltZSA9IG5vdygpICsgZGVsYXk7XG4gICAgICAgIGNvbnN0IGVuZF90aW1lID0gc3RhcnRfdGltZSArIGR1cmF0aW9uO1xuICAgICAgICBhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IGRpc3BhdGNoKG5vZGUsIGZhbHNlLCAnc3RhcnQnKSk7XG4gICAgICAgIGxvb3Aobm93ID0+IHtcbiAgICAgICAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBlbmRfdGltZSkge1xuICAgICAgICAgICAgICAgICAgICB0aWNrKDAsIDEpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChub2RlLCBmYWxzZSwgJ2VuZCcpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIS0tZ3JvdXAucikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3aWxsIHJlc3VsdCBpbiBgZW5kKClgIGJlaW5nIGNhbGxlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNvIHdlIGRvbid0IG5lZWQgdG8gY2xlYW4gdXAgaGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgcnVuX2FsbChncm91cC5jKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChub3cgPj0gc3RhcnRfdGltZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ID0gZWFzaW5nKChub3cgLSBzdGFydF90aW1lKSAvIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgdGljaygxIC0gdCwgdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJ1bm5pbmc7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoaXNfZnVuY3Rpb24oY29uZmlnKSkge1xuICAgICAgICB3YWl0KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb25maWcgPSBjb25maWcob3B0aW9ucyk7XG4gICAgICAgICAgICBnbygpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGdvKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGVuZChyZXNldCkge1xuICAgICAgICAgICAgaWYgKHJlc2V0ICYmIGNvbmZpZy50aWNrKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLnRpY2soMSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25fbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSwgYW5pbWF0aW9uX25hbWUpO1xuICAgICAgICAgICAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBjcmVhdGVfYmlkaXJlY3Rpb25hbF90cmFuc2l0aW9uKG5vZGUsIGZuLCBwYXJhbXMsIGludHJvKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHsgZGlyZWN0aW9uOiAnYm90aCcgfTtcbiAgICBsZXQgY29uZmlnID0gZm4obm9kZSwgcGFyYW1zLCBvcHRpb25zKTtcbiAgICBsZXQgdCA9IGludHJvID8gMCA6IDE7XG4gICAgbGV0IHJ1bm5pbmdfcHJvZ3JhbSA9IG51bGw7XG4gICAgbGV0IHBlbmRpbmdfcHJvZ3JhbSA9IG51bGw7XG4gICAgbGV0IGFuaW1hdGlvbl9uYW1lID0gbnVsbDtcbiAgICBmdW5jdGlvbiBjbGVhcl9hbmltYXRpb24oKSB7XG4gICAgICAgIGlmIChhbmltYXRpb25fbmFtZSlcbiAgICAgICAgICAgIGRlbGV0ZV9ydWxlKG5vZGUsIGFuaW1hdGlvbl9uYW1lKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaW5pdChwcm9ncmFtLCBkdXJhdGlvbikge1xuICAgICAgICBjb25zdCBkID0gKHByb2dyYW0uYiAtIHQpO1xuICAgICAgICBkdXJhdGlvbiAqPSBNYXRoLmFicyhkKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGE6IHQsXG4gICAgICAgICAgICBiOiBwcm9ncmFtLmIsXG4gICAgICAgICAgICBkLFxuICAgICAgICAgICAgZHVyYXRpb24sXG4gICAgICAgICAgICBzdGFydDogcHJvZ3JhbS5zdGFydCxcbiAgICAgICAgICAgIGVuZDogcHJvZ3JhbS5zdGFydCArIGR1cmF0aW9uLFxuICAgICAgICAgICAgZ3JvdXA6IHByb2dyYW0uZ3JvdXBcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ28oYikge1xuICAgICAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSAzMDAsIGVhc2luZyA9IGlkZW50aXR5LCB0aWNrID0gbm9vcCwgY3NzIH0gPSBjb25maWcgfHwgbnVsbF90cmFuc2l0aW9uO1xuICAgICAgICBjb25zdCBwcm9ncmFtID0ge1xuICAgICAgICAgICAgc3RhcnQ6IG5vdygpICsgZGVsYXksXG4gICAgICAgICAgICBiXG4gICAgICAgIH07XG4gICAgICAgIGlmICghYikge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0b2RvOiBpbXByb3ZlIHR5cGluZ3NcbiAgICAgICAgICAgIHByb2dyYW0uZ3JvdXAgPSBvdXRyb3M7XG4gICAgICAgICAgICBvdXRyb3MuciArPSAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChydW5uaW5nX3Byb2dyYW0gfHwgcGVuZGluZ19wcm9ncmFtKSB7XG4gICAgICAgICAgICBwZW5kaW5nX3Byb2dyYW0gPSBwcm9ncmFtO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gaWYgdGhpcyBpcyBhbiBpbnRybywgYW5kIHRoZXJlJ3MgYSBkZWxheSwgd2UgbmVlZCB0byBkb1xuICAgICAgICAgICAgLy8gYW4gaW5pdGlhbCB0aWNrIGFuZC9vciBhcHBseSBDU1MgYW5pbWF0aW9uIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICBpZiAoY3NzKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJfYW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uX25hbWUgPSBjcmVhdGVfcnVsZShub2RlLCB0LCBiLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChiKVxuICAgICAgICAgICAgICAgIHRpY2soMCwgMSk7XG4gICAgICAgICAgICBydW5uaW5nX3Byb2dyYW0gPSBpbml0KHByb2dyYW0sIGR1cmF0aW9uKTtcbiAgICAgICAgICAgIGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4gZGlzcGF0Y2gobm9kZSwgYiwgJ3N0YXJ0JykpO1xuICAgICAgICAgICAgbG9vcChub3cgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwZW5kaW5nX3Byb2dyYW0gJiYgbm93ID4gcGVuZGluZ19wcm9ncmFtLnN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmdfcHJvZ3JhbSA9IGluaXQocGVuZGluZ19wcm9ncmFtLCBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHBlbmRpbmdfcHJvZ3JhbSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5vZGUsIHJ1bm5pbmdfcHJvZ3JhbS5iLCAnc3RhcnQnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJfYW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25fbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIHQsIHJ1bm5pbmdfcHJvZ3JhbS5iLCBydW5uaW5nX3Byb2dyYW0uZHVyYXRpb24sIDAsIGVhc2luZywgY29uZmlnLmNzcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJ1bm5pbmdfcHJvZ3JhbSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm93ID49IHJ1bm5pbmdfcHJvZ3JhbS5lbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpY2sodCA9IHJ1bm5pbmdfcHJvZ3JhbS5iLCAxIC0gdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChub2RlLCBydW5uaW5nX3Byb2dyYW0uYiwgJ2VuZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwZW5kaW5nX3Byb2dyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSdyZSBkb25lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJ1bm5pbmdfcHJvZ3JhbS5iKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGludHJvIFx1MjAxNCB3ZSBjYW4gdGlkeSB1cCBpbW1lZGlhdGVseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcl9hbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG91dHJvIFx1MjAxNCBuZWVkcyB0byBiZSBjb29yZGluYXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIS0tcnVubmluZ19wcm9ncmFtLmdyb3VwLnIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydW5fYWxsKHJ1bm5pbmdfcHJvZ3JhbS5ncm91cC5jKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBydW5uaW5nX3Byb2dyYW0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5vdyA+PSBydW5uaW5nX3Byb2dyYW0uc3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBub3cgLSBydW5uaW5nX3Byb2dyYW0uc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gcnVubmluZ19wcm9ncmFtLmEgKyBydW5uaW5nX3Byb2dyYW0uZCAqIGVhc2luZyhwIC8gcnVubmluZ19wcm9ncmFtLmR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpY2sodCwgMSAtIHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAhIShydW5uaW5nX3Byb2dyYW0gfHwgcGVuZGluZ19wcm9ncmFtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHJ1bihiKSB7XG4gICAgICAgICAgICBpZiAoaXNfZnVuY3Rpb24oY29uZmlnKSkge1xuICAgICAgICAgICAgICAgIHdhaXQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICBjb25maWcgPSBjb25maWcob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIGdvKGIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZ28oYik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVuZCgpIHtcbiAgICAgICAgICAgIGNsZWFyX2FuaW1hdGlvbigpO1xuICAgICAgICAgICAgcnVubmluZ19wcm9ncmFtID0gcGVuZGluZ19wcm9ncmFtID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGhhbmRsZV9wcm9taXNlKHByb21pc2UsIGluZm8pIHtcbiAgICBjb25zdCB0b2tlbiA9IGluZm8udG9rZW4gPSB7fTtcbiAgICBmdW5jdGlvbiB1cGRhdGUodHlwZSwgaW5kZXgsIGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKGluZm8udG9rZW4gIT09IHRva2VuKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpbmZvLnJlc29sdmVkID0gdmFsdWU7XG4gICAgICAgIGxldCBjaGlsZF9jdHggPSBpbmZvLmN0eDtcbiAgICAgICAgaWYgKGtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjaGlsZF9jdHggPSBjaGlsZF9jdHguc2xpY2UoKTtcbiAgICAgICAgICAgIGNoaWxkX2N0eFtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYmxvY2sgPSB0eXBlICYmIChpbmZvLmN1cnJlbnQgPSB0eXBlKShjaGlsZF9jdHgpO1xuICAgICAgICBsZXQgbmVlZHNfZmx1c2ggPSBmYWxzZTtcbiAgICAgICAgaWYgKGluZm8uYmxvY2spIHtcbiAgICAgICAgICAgIGlmIChpbmZvLmJsb2Nrcykge1xuICAgICAgICAgICAgICAgIGluZm8uYmxvY2tzLmZvckVhY2goKGJsb2NrLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpICE9PSBpbmRleCAmJiBibG9jaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBfb3V0cm9zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uX291dChibG9jaywgMSwgMSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmZvLmJsb2Nrc1tpXSA9PT0gYmxvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5mby5ibG9ja3NbaV0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tfb3V0cm9zKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGluZm8uYmxvY2suZCgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJsb2NrLmMoKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb25faW4oYmxvY2ssIDEpO1xuICAgICAgICAgICAgYmxvY2subShpbmZvLm1vdW50KCksIGluZm8uYW5jaG9yKTtcbiAgICAgICAgICAgIG5lZWRzX2ZsdXNoID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpbmZvLmJsb2NrID0gYmxvY2s7XG4gICAgICAgIGlmIChpbmZvLmJsb2NrcylcbiAgICAgICAgICAgIGluZm8uYmxvY2tzW2luZGV4XSA9IGJsb2NrO1xuICAgICAgICBpZiAobmVlZHNfZmx1c2gpIHtcbiAgICAgICAgICAgIGZsdXNoKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzX3Byb21pc2UocHJvbWlzZSkpIHtcbiAgICAgICAgY29uc3QgY3VycmVudF9jb21wb25lbnQgPSBnZXRfY3VycmVudF9jb21wb25lbnQoKTtcbiAgICAgICAgcHJvbWlzZS50aGVuKHZhbHVlID0+IHtcbiAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChjdXJyZW50X2NvbXBvbmVudCk7XG4gICAgICAgICAgICB1cGRhdGUoaW5mby50aGVuLCAxLCBpbmZvLnZhbHVlLCB2YWx1ZSk7XG4gICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQobnVsbCk7XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChjdXJyZW50X2NvbXBvbmVudCk7XG4gICAgICAgICAgICB1cGRhdGUoaW5mby5jYXRjaCwgMiwgaW5mby5lcnJvciwgZXJyb3IpO1xuICAgICAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KG51bGwpO1xuICAgICAgICAgICAgaWYgKCFpbmZvLmhhc0NhdGNoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBpZiB3ZSBwcmV2aW91c2x5IGhhZCBhIHRoZW4vY2F0Y2ggYmxvY2ssIGRlc3Ryb3kgaXRcbiAgICAgICAgaWYgKGluZm8uY3VycmVudCAhPT0gaW5mby5wZW5kaW5nKSB7XG4gICAgICAgICAgICB1cGRhdGUoaW5mby5wZW5kaW5nLCAwKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoaW5mby5jdXJyZW50ICE9PSBpbmZvLnRoZW4pIHtcbiAgICAgICAgICAgIHVwZGF0ZShpbmZvLnRoZW4sIDEsIGluZm8udmFsdWUsIHByb21pc2UpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5mby5yZXNvbHZlZCA9IHByb21pc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gdXBkYXRlX2F3YWl0X2Jsb2NrX2JyYW5jaChpbmZvLCBjdHgsIGRpcnR5KSB7XG4gICAgY29uc3QgY2hpbGRfY3R4ID0gY3R4LnNsaWNlKCk7XG4gICAgY29uc3QgeyByZXNvbHZlZCB9ID0gaW5mbztcbiAgICBpZiAoaW5mby5jdXJyZW50ID09PSBpbmZvLnRoZW4pIHtcbiAgICAgICAgY2hpbGRfY3R4W2luZm8udmFsdWVdID0gcmVzb2x2ZWQ7XG4gICAgfVxuICAgIGlmIChpbmZvLmN1cnJlbnQgPT09IGluZm8uY2F0Y2gpIHtcbiAgICAgICAgY2hpbGRfY3R4W2luZm8uZXJyb3JdID0gcmVzb2x2ZWQ7XG4gICAgfVxuICAgIGluZm8uYmxvY2sucChjaGlsZF9jdHgsIGRpcnR5KTtcbn1cblxuY29uc3QgZ2xvYmFscyA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgID8gd2luZG93XG4gICAgOiB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgPyBnbG9iYWxUaGlzXG4gICAgICAgIDogZ2xvYmFsKTtcblxuZnVuY3Rpb24gZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKSB7XG4gICAgYmxvY2suZCgxKTtcbiAgICBsb29rdXAuZGVsZXRlKGJsb2NrLmtleSk7XG59XG5mdW5jdGlvbiBvdXRyb19hbmRfZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKSB7XG4gICAgdHJhbnNpdGlvbl9vdXQoYmxvY2ssIDEsIDEsICgpID0+IHtcbiAgICAgICAgbG9va3VwLmRlbGV0ZShibG9jay5rZXkpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZml4X2FuZF9kZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApIHtcbiAgICBibG9jay5mKCk7XG4gICAgZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKTtcbn1cbmZ1bmN0aW9uIGZpeF9hbmRfb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCkge1xuICAgIGJsb2NrLmYoKTtcbiAgICBvdXRyb19hbmRfZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZV9rZXllZF9lYWNoKG9sZF9ibG9ja3MsIGRpcnR5LCBnZXRfa2V5LCBkeW5hbWljLCBjdHgsIGxpc3QsIGxvb2t1cCwgbm9kZSwgZGVzdHJveSwgY3JlYXRlX2VhY2hfYmxvY2ssIG5leHQsIGdldF9jb250ZXh0KSB7XG4gICAgbGV0IG8gPSBvbGRfYmxvY2tzLmxlbmd0aDtcbiAgICBsZXQgbiA9IGxpc3QubGVuZ3RoO1xuICAgIGxldCBpID0gbztcbiAgICBjb25zdCBvbGRfaW5kZXhlcyA9IHt9O1xuICAgIHdoaWxlIChpLS0pXG4gICAgICAgIG9sZF9pbmRleGVzW29sZF9ibG9ja3NbaV0ua2V5XSA9IGk7XG4gICAgY29uc3QgbmV3X2Jsb2NrcyA9IFtdO1xuICAgIGNvbnN0IG5ld19sb29rdXAgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgZGVsdGFzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHVwZGF0ZXMgPSBbXTtcbiAgICBpID0gbjtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkX2N0eCA9IGdldF9jb250ZXh0KGN0eCwgbGlzdCwgaSk7XG4gICAgICAgIGNvbnN0IGtleSA9IGdldF9rZXkoY2hpbGRfY3R4KTtcbiAgICAgICAgbGV0IGJsb2NrID0gbG9va3VwLmdldChrZXkpO1xuICAgICAgICBpZiAoIWJsb2NrKSB7XG4gICAgICAgICAgICBibG9jayA9IGNyZWF0ZV9lYWNoX2Jsb2NrKGtleSwgY2hpbGRfY3R4KTtcbiAgICAgICAgICAgIGJsb2NrLmMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkeW5hbWljKSB7XG4gICAgICAgICAgICAvLyBkZWZlciB1cGRhdGVzIHVudGlsIGFsbCB0aGUgRE9NIHNodWZmbGluZyBpcyBkb25lXG4gICAgICAgICAgICB1cGRhdGVzLnB1c2goKCkgPT4gYmxvY2sucChjaGlsZF9jdHgsIGRpcnR5KSk7XG4gICAgICAgIH1cbiAgICAgICAgbmV3X2xvb2t1cC5zZXQoa2V5LCBuZXdfYmxvY2tzW2ldID0gYmxvY2spO1xuICAgICAgICBpZiAoa2V5IGluIG9sZF9pbmRleGVzKVxuICAgICAgICAgICAgZGVsdGFzLnNldChrZXksIE1hdGguYWJzKGkgLSBvbGRfaW5kZXhlc1trZXldKSk7XG4gICAgfVxuICAgIGNvbnN0IHdpbGxfbW92ZSA9IG5ldyBTZXQoKTtcbiAgICBjb25zdCBkaWRfbW92ZSA9IG5ldyBTZXQoKTtcbiAgICBmdW5jdGlvbiBpbnNlcnQoYmxvY2spIHtcbiAgICAgICAgdHJhbnNpdGlvbl9pbihibG9jaywgMSk7XG4gICAgICAgIGJsb2NrLm0obm9kZSwgbmV4dCk7XG4gICAgICAgIGxvb2t1cC5zZXQoYmxvY2sua2V5LCBibG9jayk7XG4gICAgICAgIG5leHQgPSBibG9jay5maXJzdDtcbiAgICAgICAgbi0tO1xuICAgIH1cbiAgICB3aGlsZSAobyAmJiBuKSB7XG4gICAgICAgIGNvbnN0IG5ld19ibG9jayA9IG5ld19ibG9ja3NbbiAtIDFdO1xuICAgICAgICBjb25zdCBvbGRfYmxvY2sgPSBvbGRfYmxvY2tzW28gLSAxXTtcbiAgICAgICAgY29uc3QgbmV3X2tleSA9IG5ld19ibG9jay5rZXk7XG4gICAgICAgIGNvbnN0IG9sZF9rZXkgPSBvbGRfYmxvY2sua2V5O1xuICAgICAgICBpZiAobmV3X2Jsb2NrID09PSBvbGRfYmxvY2spIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgICAgIG5leHQgPSBuZXdfYmxvY2suZmlyc3Q7XG4gICAgICAgICAgICBvLS07XG4gICAgICAgICAgICBuLS07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIW5ld19sb29rdXAuaGFzKG9sZF9rZXkpKSB7XG4gICAgICAgICAgICAvLyByZW1vdmUgb2xkIGJsb2NrXG4gICAgICAgICAgICBkZXN0cm95KG9sZF9ibG9jaywgbG9va3VwKTtcbiAgICAgICAgICAgIG8tLTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghbG9va3VwLmhhcyhuZXdfa2V5KSB8fCB3aWxsX21vdmUuaGFzKG5ld19rZXkpKSB7XG4gICAgICAgICAgICBpbnNlcnQobmV3X2Jsb2NrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkaWRfbW92ZS5oYXMob2xkX2tleSkpIHtcbiAgICAgICAgICAgIG8tLTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkZWx0YXMuZ2V0KG5ld19rZXkpID4gZGVsdGFzLmdldChvbGRfa2V5KSkge1xuICAgICAgICAgICAgZGlkX21vdmUuYWRkKG5ld19rZXkpO1xuICAgICAgICAgICAgaW5zZXJ0KG5ld19ibG9jayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB3aWxsX21vdmUuYWRkKG9sZF9rZXkpO1xuICAgICAgICAgICAgby0tO1xuICAgICAgICB9XG4gICAgfVxuICAgIHdoaWxlIChvLS0pIHtcbiAgICAgICAgY29uc3Qgb2xkX2Jsb2NrID0gb2xkX2Jsb2Nrc1tvXTtcbiAgICAgICAgaWYgKCFuZXdfbG9va3VwLmhhcyhvbGRfYmxvY2sua2V5KSlcbiAgICAgICAgICAgIGRlc3Ryb3kob2xkX2Jsb2NrLCBsb29rdXApO1xuICAgIH1cbiAgICB3aGlsZSAobilcbiAgICAgICAgaW5zZXJ0KG5ld19ibG9ja3NbbiAtIDFdKTtcbiAgICBydW5fYWxsKHVwZGF0ZXMpO1xuICAgIHJldHVybiBuZXdfYmxvY2tzO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVfZWFjaF9rZXlzKGN0eCwgbGlzdCwgZ2V0X2NvbnRleHQsIGdldF9rZXkpIHtcbiAgICBjb25zdCBrZXlzID0gbmV3IFNldCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBrZXkgPSBnZXRfa2V5KGdldF9jb250ZXh0KGN0eCwgbGlzdCwgaSkpO1xuICAgICAgICBpZiAoa2V5cy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgaGF2ZSBkdXBsaWNhdGUga2V5cyBpbiBhIGtleWVkIGVhY2gnKTtcbiAgICAgICAgfVxuICAgICAgICBrZXlzLmFkZChrZXkpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0X3NwcmVhZF91cGRhdGUobGV2ZWxzLCB1cGRhdGVzKSB7XG4gICAgY29uc3QgdXBkYXRlID0ge307XG4gICAgY29uc3QgdG9fbnVsbF9vdXQgPSB7fTtcbiAgICBjb25zdCBhY2NvdW50ZWRfZm9yID0geyAkJHNjb3BlOiAxIH07XG4gICAgbGV0IGkgPSBsZXZlbHMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgY29uc3QgbyA9IGxldmVsc1tpXTtcbiAgICAgICAgY29uc3QgbiA9IHVwZGF0ZXNbaV07XG4gICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEoa2V5IGluIG4pKVxuICAgICAgICAgICAgICAgICAgICB0b19udWxsX291dFtrZXldID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG4pIHtcbiAgICAgICAgICAgICAgICBpZiAoIWFjY291bnRlZF9mb3Jba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVba2V5XSA9IG5ba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudGVkX2ZvcltrZXldID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXZlbHNbaV0gPSBuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbykge1xuICAgICAgICAgICAgICAgIGFjY291bnRlZF9mb3Jba2V5XSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdG9fbnVsbF9vdXQpIHtcbiAgICAgICAgaWYgKCEoa2V5IGluIHVwZGF0ZSkpXG4gICAgICAgICAgICB1cGRhdGVba2V5XSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIHVwZGF0ZTtcbn1cbmZ1bmN0aW9uIGdldF9zcHJlYWRfb2JqZWN0KHNwcmVhZF9wcm9wcykge1xuICAgIHJldHVybiB0eXBlb2Ygc3ByZWFkX3Byb3BzID09PSAnb2JqZWN0JyAmJiBzcHJlYWRfcHJvcHMgIT09IG51bGwgPyBzcHJlYWRfcHJvcHMgOiB7fTtcbn1cblxuY29uc3QgX2Jvb2xlYW5fYXR0cmlidXRlcyA9IFtcbiAgICAnYWxsb3dmdWxsc2NyZWVuJyxcbiAgICAnYWxsb3dwYXltZW50cmVxdWVzdCcsXG4gICAgJ2FzeW5jJyxcbiAgICAnYXV0b2ZvY3VzJyxcbiAgICAnYXV0b3BsYXknLFxuICAgICdjaGVja2VkJyxcbiAgICAnY29udHJvbHMnLFxuICAgICdkZWZhdWx0JyxcbiAgICAnZGVmZXInLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ2Zvcm1ub3ZhbGlkYXRlJyxcbiAgICAnaGlkZGVuJyxcbiAgICAnaW5lcnQnLFxuICAgICdpc21hcCcsXG4gICAgJ2l0ZW1zY29wZScsXG4gICAgJ2xvb3AnLFxuICAgICdtdWx0aXBsZScsXG4gICAgJ211dGVkJyxcbiAgICAnbm9tb2R1bGUnLFxuICAgICdub3ZhbGlkYXRlJyxcbiAgICAnb3BlbicsXG4gICAgJ3BsYXlzaW5saW5lJyxcbiAgICAncmVhZG9ubHknLFxuICAgICdyZXF1aXJlZCcsXG4gICAgJ3JldmVyc2VkJyxcbiAgICAnc2VsZWN0ZWQnXG5dO1xuLyoqXG4gKiBMaXN0IG9mIEhUTUwgYm9vbGVhbiBhdHRyaWJ1dGVzIChlLmcuIGA8aW5wdXQgZGlzYWJsZWQ+YCkuXG4gKiBTb3VyY2U6IGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2luZGljZXMuaHRtbFxuICovXG5jb25zdCBib29sZWFuX2F0dHJpYnV0ZXMgPSBuZXcgU2V0KFsuLi5fYm9vbGVhbl9hdHRyaWJ1dGVzXSk7XG5cbi8qKiByZWdleCBvZiBhbGwgaHRtbCB2b2lkIGVsZW1lbnQgbmFtZXMgKi9cbmNvbnN0IHZvaWRfZWxlbWVudF9uYW1lcyA9IC9eKD86YXJlYXxiYXNlfGJyfGNvbHxjb21tYW5kfGVtYmVkfGhyfGltZ3xpbnB1dHxrZXlnZW58bGlua3xtZXRhfHBhcmFtfHNvdXJjZXx0cmFja3x3YnIpJC87XG5mdW5jdGlvbiBpc192b2lkKG5hbWUpIHtcbiAgICByZXR1cm4gdm9pZF9lbGVtZW50X25hbWVzLnRlc3QobmFtZSkgfHwgbmFtZS50b0xvd2VyQ2FzZSgpID09PSAnIWRvY3R5cGUnO1xufVxuXG5jb25zdCBpbnZhbGlkX2F0dHJpYnV0ZV9uYW1lX2NoYXJhY3RlciA9IC9bXFxzJ1wiPi89XFx1e0ZERDB9LVxcdXtGREVGfVxcdXtGRkZFfVxcdXtGRkZGfVxcdXsxRkZGRX1cXHV7MUZGRkZ9XFx1ezJGRkZFfVxcdXsyRkZGRn1cXHV7M0ZGRkV9XFx1ezNGRkZGfVxcdXs0RkZGRX1cXHV7NEZGRkZ9XFx1ezVGRkZFfVxcdXs1RkZGRn1cXHV7NkZGRkV9XFx1ezZGRkZGfVxcdXs3RkZGRX1cXHV7N0ZGRkZ9XFx1ezhGRkZFfVxcdXs4RkZGRn1cXHV7OUZGRkV9XFx1ezlGRkZGfVxcdXtBRkZGRX1cXHV7QUZGRkZ9XFx1e0JGRkZFfVxcdXtCRkZGRn1cXHV7Q0ZGRkV9XFx1e0NGRkZGfVxcdXtERkZGRX1cXHV7REZGRkZ9XFx1e0VGRkZFfVxcdXtFRkZGRn1cXHV7RkZGRkV9XFx1e0ZGRkZGfVxcdXsxMEZGRkV9XFx1ezEwRkZGRn1dL3U7XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zeW50YXguaHRtbCNhdHRyaWJ1dGVzLTJcbi8vIGh0dHBzOi8vaW5mcmEuc3BlYy53aGF0d2cub3JnLyNub25jaGFyYWN0ZXJcbmZ1bmN0aW9uIHNwcmVhZChhcmdzLCBhdHRyc190b19hZGQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVzID0gT2JqZWN0LmFzc2lnbih7fSwgLi4uYXJncyk7XG4gICAgaWYgKGF0dHJzX3RvX2FkZCkge1xuICAgICAgICBjb25zdCBjbGFzc2VzX3RvX2FkZCA9IGF0dHJzX3RvX2FkZC5jbGFzc2VzO1xuICAgICAgICBjb25zdCBzdHlsZXNfdG9fYWRkID0gYXR0cnNfdG9fYWRkLnN0eWxlcztcbiAgICAgICAgaWYgKGNsYXNzZXNfdG9fYWRkKSB7XG4gICAgICAgICAgICBpZiAoYXR0cmlidXRlcy5jbGFzcyA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5jbGFzcyA9IGNsYXNzZXNfdG9fYWRkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5jbGFzcyArPSAnICcgKyBjbGFzc2VzX3RvX2FkZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc3R5bGVzX3RvX2FkZCkge1xuICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZXMuc3R5bGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMuc3R5bGUgPSBzdHlsZV9vYmplY3RfdG9fc3RyaW5nKHN0eWxlc190b19hZGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5zdHlsZSA9IHN0eWxlX29iamVjdF90b19zdHJpbmcobWVyZ2Vfc3NyX3N0eWxlcyhhdHRyaWJ1dGVzLnN0eWxlLCBzdHlsZXNfdG9fYWRkKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IHN0ciA9ICcnO1xuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgIGlmIChpbnZhbGlkX2F0dHJpYnV0ZV9uYW1lX2NoYXJhY3Rlci50ZXN0KG5hbWUpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGF0dHJpYnV0ZXNbbmFtZV07XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdHJ1ZSlcbiAgICAgICAgICAgIHN0ciArPSAnICcgKyBuYW1lO1xuICAgICAgICBlbHNlIGlmIChib29sZWFuX2F0dHJpYnV0ZXMuaGFzKG5hbWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSlcbiAgICAgICAgICAgICAgICBzdHIgKz0gJyAnICsgbmFtZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBzdHIgKz0gYCAke25hbWV9PVwiJHt2YWx1ZX1cImA7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc3RyO1xufVxuZnVuY3Rpb24gbWVyZ2Vfc3NyX3N0eWxlcyhzdHlsZV9hdHRyaWJ1dGUsIHN0eWxlX2RpcmVjdGl2ZSkge1xuICAgIGNvbnN0IHN0eWxlX29iamVjdCA9IHt9O1xuICAgIGZvciAoY29uc3QgaW5kaXZpZHVhbF9zdHlsZSBvZiBzdHlsZV9hdHRyaWJ1dGUuc3BsaXQoJzsnKSkge1xuICAgICAgICBjb25zdCBjb2xvbl9pbmRleCA9IGluZGl2aWR1YWxfc3R5bGUuaW5kZXhPZignOicpO1xuICAgICAgICBjb25zdCBuYW1lID0gaW5kaXZpZHVhbF9zdHlsZS5zbGljZSgwLCBjb2xvbl9pbmRleCkudHJpbSgpO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGluZGl2aWR1YWxfc3R5bGUuc2xpY2UoY29sb25faW5kZXggKyAxKS50cmltKCk7XG4gICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICBzdHlsZV9vYmplY3RbbmFtZV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBuYW1lIGluIHN0eWxlX2RpcmVjdGl2ZSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHN0eWxlX2RpcmVjdGl2ZVtuYW1lXTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBzdHlsZV9vYmplY3RbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSBzdHlsZV9vYmplY3RbbmFtZV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlX29iamVjdDtcbn1cbmNvbnN0IEFUVFJfUkVHRVggPSAvWyZcIl0vZztcbmNvbnN0IENPTlRFTlRfUkVHRVggPSAvWyY8XS9nO1xuLyoqXG4gKiBOb3RlOiB0aGlzIG1ldGhvZCBpcyBwZXJmb3JtYW5jZSBzZW5zaXRpdmUgYW5kIGhhcyBiZWVuIG9wdGltaXplZFxuICogaHR0cHM6Ly9naXRodWIuY29tL3N2ZWx0ZWpzL3N2ZWx0ZS9wdWxsLzU3MDFcbiAqL1xuZnVuY3Rpb24gZXNjYXBlKHZhbHVlLCBpc19hdHRyID0gZmFsc2UpIHtcbiAgICBjb25zdCBzdHIgPSBTdHJpbmcodmFsdWUpO1xuICAgIGNvbnN0IHBhdHRlcm4gPSBpc19hdHRyID8gQVRUUl9SRUdFWCA6IENPTlRFTlRfUkVHRVg7XG4gICAgcGF0dGVybi5sYXN0SW5kZXggPSAwO1xuICAgIGxldCBlc2NhcGVkID0gJyc7XG4gICAgbGV0IGxhc3QgPSAwO1xuICAgIHdoaWxlIChwYXR0ZXJuLnRlc3Qoc3RyKSkge1xuICAgICAgICBjb25zdCBpID0gcGF0dGVybi5sYXN0SW5kZXggLSAxO1xuICAgICAgICBjb25zdCBjaCA9IHN0cltpXTtcbiAgICAgICAgZXNjYXBlZCArPSBzdHIuc3Vic3RyaW5nKGxhc3QsIGkpICsgKGNoID09PSAnJicgPyAnJmFtcDsnIDogKGNoID09PSAnXCInID8gJyZxdW90OycgOiAnJmx0OycpKTtcbiAgICAgICAgbGFzdCA9IGkgKyAxO1xuICAgIH1cbiAgICByZXR1cm4gZXNjYXBlZCArIHN0ci5zdWJzdHJpbmcobGFzdCk7XG59XG5mdW5jdGlvbiBlc2NhcGVfYXR0cmlidXRlX3ZhbHVlKHZhbHVlKSB7XG4gICAgLy8ga2VlcCBib29sZWFucywgbnVsbCwgYW5kIHVuZGVmaW5lZCBmb3IgdGhlIHNha2Ugb2YgYHNwcmVhZGBcbiAgICBjb25zdCBzaG91bGRfZXNjYXBlID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fCAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jyk7XG4gICAgcmV0dXJuIHNob3VsZF9lc2NhcGUgPyBlc2NhcGUodmFsdWUsIHRydWUpIDogdmFsdWU7XG59XG5mdW5jdGlvbiBlc2NhcGVfb2JqZWN0KG9iaikge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgICAgICByZXN1bHRba2V5XSA9IGVzY2FwZV9hdHRyaWJ1dGVfdmFsdWUob2JqW2tleV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gZWFjaChpdGVtcywgZm4pIHtcbiAgICBsZXQgc3RyID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBzdHIgKz0gZm4oaXRlbXNbaV0sIGkpO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xufVxuY29uc3QgbWlzc2luZ19jb21wb25lbnQgPSB7XG4gICAgJCRyZW5kZXI6ICgpID0+ICcnXG59O1xuZnVuY3Rpb24gdmFsaWRhdGVfY29tcG9uZW50KGNvbXBvbmVudCwgbmFtZSkge1xuICAgIGlmICghY29tcG9uZW50IHx8ICFjb21wb25lbnQuJCRyZW5kZXIpIHtcbiAgICAgICAgaWYgKG5hbWUgPT09ICdzdmVsdGU6Y29tcG9uZW50JylcbiAgICAgICAgICAgIG5hbWUgKz0gJyB0aGlzPXsuLi59JztcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGA8JHtuYW1lfT4gaXMgbm90IGEgdmFsaWQgU1NSIGNvbXBvbmVudC4gWW91IG1heSBuZWVkIHRvIHJldmlldyB5b3VyIGJ1aWxkIGNvbmZpZyB0byBlbnN1cmUgdGhhdCBkZXBlbmRlbmNpZXMgYXJlIGNvbXBpbGVkLCByYXRoZXIgdGhhbiBpbXBvcnRlZCBhcyBwcmUtY29tcGlsZWQgbW9kdWxlcy4gT3RoZXJ3aXNlIHlvdSBtYXkgbmVlZCB0byBmaXggYSA8JHtuYW1lfT4uYCk7XG4gICAgfVxuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG5mdW5jdGlvbiBkZWJ1ZyhmaWxlLCBsaW5lLCBjb2x1bW4sIHZhbHVlcykge1xuICAgIGNvbnNvbGUubG9nKGB7QGRlYnVnfSAke2ZpbGUgPyBmaWxlICsgJyAnIDogJyd9KCR7bGluZX06JHtjb2x1bW59KWApOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmxvZyh2YWx1ZXMpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICByZXR1cm4gJyc7XG59XG5sZXQgb25fZGVzdHJveTtcbmZ1bmN0aW9uIGNyZWF0ZV9zc3JfY29tcG9uZW50KGZuKSB7XG4gICAgZnVuY3Rpb24gJCRyZW5kZXIocmVzdWx0LCBwcm9wcywgYmluZGluZ3MsIHNsb3RzLCBjb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHBhcmVudF9jb21wb25lbnQgPSBjdXJyZW50X2NvbXBvbmVudDtcbiAgICAgICAgY29uc3QgJCQgPSB7XG4gICAgICAgICAgICBvbl9kZXN0cm95LFxuICAgICAgICAgICAgY29udGV4dDogbmV3IE1hcChjb250ZXh0IHx8IChwYXJlbnRfY29tcG9uZW50ID8gcGFyZW50X2NvbXBvbmVudC4kJC5jb250ZXh0IDogW10pKSxcbiAgICAgICAgICAgIC8vIHRoZXNlIHdpbGwgYmUgaW1tZWRpYXRlbHkgZGlzY2FyZGVkXG4gICAgICAgICAgICBvbl9tb3VudDogW10sXG4gICAgICAgICAgICBiZWZvcmVfdXBkYXRlOiBbXSxcbiAgICAgICAgICAgIGFmdGVyX3VwZGF0ZTogW10sXG4gICAgICAgICAgICBjYWxsYmFja3M6IGJsYW5rX29iamVjdCgpXG4gICAgICAgIH07XG4gICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudCh7ICQkIH0pO1xuICAgICAgICBjb25zdCBodG1sID0gZm4ocmVzdWx0LCBwcm9wcywgYmluZGluZ3MsIHNsb3RzKTtcbiAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KHBhcmVudF9jb21wb25lbnQpO1xuICAgICAgICByZXR1cm4gaHRtbDtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVuZGVyOiAocHJvcHMgPSB7fSwgeyAkJHNsb3RzID0ge30sIGNvbnRleHQgPSBuZXcgTWFwKCkgfSA9IHt9KSA9PiB7XG4gICAgICAgICAgICBvbl9kZXN0cm95ID0gW107XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB7IHRpdGxlOiAnJywgaGVhZDogJycsIGNzczogbmV3IFNldCgpIH07XG4gICAgICAgICAgICBjb25zdCBodG1sID0gJCRyZW5kZXIocmVzdWx0LCBwcm9wcywge30sICQkc2xvdHMsIGNvbnRleHQpO1xuICAgICAgICAgICAgcnVuX2FsbChvbl9kZXN0cm95KTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaHRtbCxcbiAgICAgICAgICAgICAgICBjc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogQXJyYXkuZnJvbShyZXN1bHQuY3NzKS5tYXAoY3NzID0+IGNzcy5jb2RlKS5qb2luKCdcXG4nKSxcbiAgICAgICAgICAgICAgICAgICAgbWFwOiBudWxsIC8vIFRPRE9cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGhlYWQ6IHJlc3VsdC50aXRsZSArIHJlc3VsdC5oZWFkXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAkJHJlbmRlclxuICAgIH07XG59XG5mdW5jdGlvbiBhZGRfYXR0cmlidXRlKG5hbWUsIHZhbHVlLCBib29sZWFuKSB7XG4gICAgaWYgKHZhbHVlID09IG51bGwgfHwgKGJvb2xlYW4gJiYgIXZhbHVlKSlcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIGNvbnN0IGFzc2lnbm1lbnQgPSAoYm9vbGVhbiAmJiB2YWx1ZSA9PT0gdHJ1ZSkgPyAnJyA6IGA9XCIke2VzY2FwZSh2YWx1ZSwgdHJ1ZSl9XCJgO1xuICAgIHJldHVybiBgICR7bmFtZX0ke2Fzc2lnbm1lbnR9YDtcbn1cbmZ1bmN0aW9uIGFkZF9jbGFzc2VzKGNsYXNzZXMpIHtcbiAgICByZXR1cm4gY2xhc3NlcyA/IGAgY2xhc3M9XCIke2NsYXNzZXN9XCJgIDogJyc7XG59XG5mdW5jdGlvbiBzdHlsZV9vYmplY3RfdG9fc3RyaW5nKHN0eWxlX29iamVjdCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhzdHlsZV9vYmplY3QpXG4gICAgICAgIC5maWx0ZXIoa2V5ID0+IHN0eWxlX29iamVjdFtrZXldKVxuICAgICAgICAubWFwKGtleSA9PiBgJHtrZXl9OiAke2VzY2FwZV9hdHRyaWJ1dGVfdmFsdWUoc3R5bGVfb2JqZWN0W2tleV0pfTtgKVxuICAgICAgICAuam9pbignICcpO1xufVxuZnVuY3Rpb24gYWRkX3N0eWxlcyhzdHlsZV9vYmplY3QpIHtcbiAgICBjb25zdCBzdHlsZXMgPSBzdHlsZV9vYmplY3RfdG9fc3RyaW5nKHN0eWxlX29iamVjdCk7XG4gICAgcmV0dXJuIHN0eWxlcyA/IGAgc3R5bGU9XCIke3N0eWxlc31cImAgOiAnJztcbn1cblxuZnVuY3Rpb24gYmluZChjb21wb25lbnQsIG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgaW5kZXggPSBjb21wb25lbnQuJCQucHJvcHNbbmFtZV07XG4gICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29tcG9uZW50LiQkLmJvdW5kW2luZGV4XSA9IGNhbGxiYWNrO1xuICAgICAgICBjYWxsYmFjayhjb21wb25lbnQuJCQuY3R4W2luZGV4XSk7XG4gICAgfVxufVxuZnVuY3Rpb24gY3JlYXRlX2NvbXBvbmVudChibG9jaykge1xuICAgIGJsb2NrICYmIGJsb2NrLmMoKTtcbn1cbmZ1bmN0aW9uIGNsYWltX2NvbXBvbmVudChibG9jaywgcGFyZW50X25vZGVzKSB7XG4gICAgYmxvY2sgJiYgYmxvY2subChwYXJlbnRfbm9kZXMpO1xufVxuZnVuY3Rpb24gbW91bnRfY29tcG9uZW50KGNvbXBvbmVudCwgdGFyZ2V0LCBhbmNob3IsIGN1c3RvbUVsZW1lbnQpIHtcbiAgICBjb25zdCB7IGZyYWdtZW50LCBhZnRlcl91cGRhdGUgfSA9IGNvbXBvbmVudC4kJDtcbiAgICBmcmFnbWVudCAmJiBmcmFnbWVudC5tKHRhcmdldCwgYW5jaG9yKTtcbiAgICBpZiAoIWN1c3RvbUVsZW1lbnQpIHtcbiAgICAgICAgLy8gb25Nb3VudCBoYXBwZW5zIGJlZm9yZSB0aGUgaW5pdGlhbCBhZnRlclVwZGF0ZVxuICAgICAgICBhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld19vbl9kZXN0cm95ID0gY29tcG9uZW50LiQkLm9uX21vdW50Lm1hcChydW4pLmZpbHRlcihpc19mdW5jdGlvbik7XG4gICAgICAgICAgICAvLyBpZiB0aGUgY29tcG9uZW50IHdhcyBkZXN0cm95ZWQgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgIC8vIGl0IHdpbGwgdXBkYXRlIHRoZSBgJCQub25fZGVzdHJveWAgcmVmZXJlbmNlIHRvIGBudWxsYC5cbiAgICAgICAgICAgIC8vIHRoZSBkZXN0cnVjdHVyZWQgb25fZGVzdHJveSBtYXkgc3RpbGwgcmVmZXJlbmNlIHRvIHRoZSBvbGQgYXJyYXlcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQuJCQub25fZGVzdHJveSkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC4kJC5vbl9kZXN0cm95LnB1c2goLi4ubmV3X29uX2Rlc3Ryb3kpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gRWRnZSBjYXNlIC0gY29tcG9uZW50IHdhcyBkZXN0cm95ZWQgaW1tZWRpYXRlbHksXG4gICAgICAgICAgICAgICAgLy8gbW9zdCBsaWtlbHkgYXMgYSByZXN1bHQgb2YgYSBiaW5kaW5nIGluaXRpYWxpc2luZ1xuICAgICAgICAgICAgICAgIHJ1bl9hbGwobmV3X29uX2Rlc3Ryb3kpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29tcG9uZW50LiQkLm9uX21vdW50ID0gW107XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhZnRlcl91cGRhdGUuZm9yRWFjaChhZGRfcmVuZGVyX2NhbGxiYWNrKTtcbn1cbmZ1bmN0aW9uIGRlc3Ryb3lfY29tcG9uZW50KGNvbXBvbmVudCwgZGV0YWNoaW5nKSB7XG4gICAgY29uc3QgJCQgPSBjb21wb25lbnQuJCQ7XG4gICAgaWYgKCQkLmZyYWdtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGZsdXNoX3JlbmRlcl9jYWxsYmFja3MoJCQuYWZ0ZXJfdXBkYXRlKTtcbiAgICAgICAgcnVuX2FsbCgkJC5vbl9kZXN0cm95KTtcbiAgICAgICAgJCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQuZChkZXRhY2hpbmcpO1xuICAgICAgICAvLyBUT0RPIG51bGwgb3V0IG90aGVyIHJlZnMsIGluY2x1ZGluZyBjb21wb25lbnQuJCQgKGJ1dCBuZWVkIHRvXG4gICAgICAgIC8vIHByZXNlcnZlIGZpbmFsIHN0YXRlPylcbiAgICAgICAgJCQub25fZGVzdHJveSA9ICQkLmZyYWdtZW50ID0gbnVsbDtcbiAgICAgICAgJCQuY3R4ID0gW107XG4gICAgfVxufVxuZnVuY3Rpb24gbWFrZV9kaXJ0eShjb21wb25lbnQsIGkpIHtcbiAgICBpZiAoY29tcG9uZW50LiQkLmRpcnR5WzBdID09PSAtMSkge1xuICAgICAgICBkaXJ0eV9jb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcbiAgICAgICAgc2NoZWR1bGVfdXBkYXRlKCk7XG4gICAgICAgIGNvbXBvbmVudC4kJC5kaXJ0eS5maWxsKDApO1xuICAgIH1cbiAgICBjb21wb25lbnQuJCQuZGlydHlbKGkgLyAzMSkgfCAwXSB8PSAoMSA8PCAoaSAlIDMxKSk7XG59XG5mdW5jdGlvbiBpbml0KGNvbXBvbmVudCwgb3B0aW9ucywgaW5zdGFuY2UsIGNyZWF0ZV9mcmFnbWVudCwgbm90X2VxdWFsLCBwcm9wcywgYXBwZW5kX3N0eWxlcywgZGlydHkgPSBbLTFdKSB7XG4gICAgY29uc3QgcGFyZW50X2NvbXBvbmVudCA9IGN1cnJlbnRfY29tcG9uZW50O1xuICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChjb21wb25lbnQpO1xuICAgIGNvbnN0ICQkID0gY29tcG9uZW50LiQkID0ge1xuICAgICAgICBmcmFnbWVudDogbnVsbCxcbiAgICAgICAgY3R4OiBbXSxcbiAgICAgICAgLy8gc3RhdGVcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIHVwZGF0ZTogbm9vcCxcbiAgICAgICAgbm90X2VxdWFsLFxuICAgICAgICBib3VuZDogYmxhbmtfb2JqZWN0KCksXG4gICAgICAgIC8vIGxpZmVjeWNsZVxuICAgICAgICBvbl9tb3VudDogW10sXG4gICAgICAgIG9uX2Rlc3Ryb3k6IFtdLFxuICAgICAgICBvbl9kaXNjb25uZWN0OiBbXSxcbiAgICAgICAgYmVmb3JlX3VwZGF0ZTogW10sXG4gICAgICAgIGFmdGVyX3VwZGF0ZTogW10sXG4gICAgICAgIGNvbnRleHQ6IG5ldyBNYXAob3B0aW9ucy5jb250ZXh0IHx8IChwYXJlbnRfY29tcG9uZW50ID8gcGFyZW50X2NvbXBvbmVudC4kJC5jb250ZXh0IDogW10pKSxcbiAgICAgICAgLy8gZXZlcnl0aGluZyBlbHNlXG4gICAgICAgIGNhbGxiYWNrczogYmxhbmtfb2JqZWN0KCksXG4gICAgICAgIGRpcnR5LFxuICAgICAgICBza2lwX2JvdW5kOiBmYWxzZSxcbiAgICAgICAgcm9vdDogb3B0aW9ucy50YXJnZXQgfHwgcGFyZW50X2NvbXBvbmVudC4kJC5yb290XG4gICAgfTtcbiAgICBhcHBlbmRfc3R5bGVzICYmIGFwcGVuZF9zdHlsZXMoJCQucm9vdCk7XG4gICAgbGV0IHJlYWR5ID0gZmFsc2U7XG4gICAgJCQuY3R4ID0gaW5zdGFuY2VcbiAgICAgICAgPyBpbnN0YW5jZShjb21wb25lbnQsIG9wdGlvbnMucHJvcHMgfHwge30sIChpLCByZXQsIC4uLnJlc3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcmVzdC5sZW5ndGggPyByZXN0WzBdIDogcmV0O1xuICAgICAgICAgICAgaWYgKCQkLmN0eCAmJiBub3RfZXF1YWwoJCQuY3R4W2ldLCAkJC5jdHhbaV0gPSB2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoISQkLnNraXBfYm91bmQgJiYgJCQuYm91bmRbaV0pXG4gICAgICAgICAgICAgICAgICAgICQkLmJvdW5kW2ldKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAocmVhZHkpXG4gICAgICAgICAgICAgICAgICAgIG1ha2VfZGlydHkoY29tcG9uZW50LCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH0pXG4gICAgICAgIDogW107XG4gICAgJCQudXBkYXRlKCk7XG4gICAgcmVhZHkgPSB0cnVlO1xuICAgIHJ1bl9hbGwoJCQuYmVmb3JlX3VwZGF0ZSk7XG4gICAgLy8gYGZhbHNlYCBhcyBhIHNwZWNpYWwgY2FzZSBvZiBubyBET00gY29tcG9uZW50XG4gICAgJCQuZnJhZ21lbnQgPSBjcmVhdGVfZnJhZ21lbnQgPyBjcmVhdGVfZnJhZ21lbnQoJCQuY3R4KSA6IGZhbHNlO1xuICAgIGlmIChvcHRpb25zLnRhcmdldCkge1xuICAgICAgICBpZiAob3B0aW9ucy5oeWRyYXRlKSB7XG4gICAgICAgICAgICBzdGFydF9oeWRyYXRpbmcoKTtcbiAgICAgICAgICAgIGNvbnN0IG5vZGVzID0gY2hpbGRyZW4ob3B0aW9ucy50YXJnZXQpO1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb25cbiAgICAgICAgICAgICQkLmZyYWdtZW50ICYmICQkLmZyYWdtZW50Lmwobm9kZXMpO1xuICAgICAgICAgICAgbm9kZXMuZm9yRWFjaChkZXRhY2gpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb25cbiAgICAgICAgICAgICQkLmZyYWdtZW50ICYmICQkLmZyYWdtZW50LmMoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5pbnRybylcbiAgICAgICAgICAgIHRyYW5zaXRpb25faW4oY29tcG9uZW50LiQkLmZyYWdtZW50KTtcbiAgICAgICAgbW91bnRfY29tcG9uZW50KGNvbXBvbmVudCwgb3B0aW9ucy50YXJnZXQsIG9wdGlvbnMuYW5jaG9yLCBvcHRpb25zLmN1c3RvbUVsZW1lbnQpO1xuICAgICAgICBlbmRfaHlkcmF0aW5nKCk7XG4gICAgICAgIGZsdXNoKCk7XG4gICAgfVxuICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChwYXJlbnRfY29tcG9uZW50KTtcbn1cbmxldCBTdmVsdGVFbGVtZW50O1xuaWYgKHR5cGVvZiBIVE1MRWxlbWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFN2ZWx0ZUVsZW1lbnQgPSBjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgICAgICBjb25zdCB7IG9uX21vdW50IH0gPSB0aGlzLiQkO1xuICAgICAgICAgICAgdGhpcy4kJC5vbl9kaXNjb25uZWN0ID0gb25fbW91bnQubWFwKHJ1bikuZmlsdGVyKGlzX2Z1bmN0aW9uKTtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdG9kbzogaW1wcm92ZSB0eXBpbmdzXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLiQkLnNsb3R0ZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRvZG86IGltcHJvdmUgdHlwaW5nc1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy4kJC5zbG90dGVkW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhhdHRyLCBfb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzW2F0dHJdID0gbmV3VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgICAgICBydW5fYWxsKHRoaXMuJCQub25fZGlzY29ubmVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgJGRlc3Ryb3koKSB7XG4gICAgICAgICAgICBkZXN0cm95X2NvbXBvbmVudCh0aGlzLCAxKTtcbiAgICAgICAgICAgIHRoaXMuJGRlc3Ryb3kgPSBub29wO1xuICAgICAgICB9XG4gICAgICAgICRvbih0eXBlLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgLy8gVE9ETyBzaG91bGQgdGhpcyBkZWxlZ2F0ZSB0byBhZGRFdmVudExpc3RlbmVyP1xuICAgICAgICAgICAgaWYgKCFpc19mdW5jdGlvbihjYWxsYmFjaykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9vcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9ICh0aGlzLiQkLmNhbGxiYWNrc1t0eXBlXSB8fCAodGhpcy4kJC5jYWxsYmFja3NbdHlwZV0gPSBbXSkpO1xuICAgICAgICAgICAgY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGNhbGxiYWNrcy5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKVxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgJHNldCgkJHByb3BzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy4kJHNldCAmJiAhaXNfZW1wdHkoJCRwcm9wcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiQkLnNraXBfYm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJCRzZXQoJCRwcm9wcyk7XG4gICAgICAgICAgICAgICAgdGhpcy4kJC5za2lwX2JvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufVxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBTdmVsdGUgY29tcG9uZW50cy4gVXNlZCB3aGVuIGRldj1mYWxzZS5cbiAqL1xuY2xhc3MgU3ZlbHRlQ29tcG9uZW50IHtcbiAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgZGVzdHJveV9jb21wb25lbnQodGhpcywgMSk7XG4gICAgICAgIHRoaXMuJGRlc3Ryb3kgPSBub29wO1xuICAgIH1cbiAgICAkb24odHlwZSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCFpc19mdW5jdGlvbihjYWxsYmFjaykpIHtcbiAgICAgICAgICAgIHJldHVybiBub29wO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9ICh0aGlzLiQkLmNhbGxiYWNrc1t0eXBlXSB8fCAodGhpcy4kJC5jYWxsYmFja3NbdHlwZV0gPSBbXSkpO1xuICAgICAgICBjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGNhbGxiYWNrcy5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgICRzZXQoJCRwcm9wcykge1xuICAgICAgICBpZiAodGhpcy4kJHNldCAmJiAhaXNfZW1wdHkoJCRwcm9wcykpIHtcbiAgICAgICAgICAgIHRoaXMuJCQuc2tpcF9ib3VuZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLiQkc2V0KCQkcHJvcHMpO1xuICAgICAgICAgICAgdGhpcy4kJC5za2lwX2JvdW5kID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BhdGNoX2Rldih0eXBlLCBkZXRhaWwpIHtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGN1c3RvbV9ldmVudCh0eXBlLCBPYmplY3QuYXNzaWduKHsgdmVyc2lvbjogJzMuNTYuMCcgfSwgZGV0YWlsKSwgeyBidWJibGVzOiB0cnVlIH0pKTtcbn1cbmZ1bmN0aW9uIGFwcGVuZF9kZXYodGFyZ2V0LCBub2RlKSB7XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01JbnNlcnQnLCB7IHRhcmdldCwgbm9kZSB9KTtcbiAgICBhcHBlbmQodGFyZ2V0LCBub2RlKTtcbn1cbmZ1bmN0aW9uIGFwcGVuZF9oeWRyYXRpb25fZGV2KHRhcmdldCwgbm9kZSkge1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NSW5zZXJ0JywgeyB0YXJnZXQsIG5vZGUgfSk7XG4gICAgYXBwZW5kX2h5ZHJhdGlvbih0YXJnZXQsIG5vZGUpO1xufVxuZnVuY3Rpb24gaW5zZXJ0X2Rldih0YXJnZXQsIG5vZGUsIGFuY2hvcikge1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NSW5zZXJ0JywgeyB0YXJnZXQsIG5vZGUsIGFuY2hvciB9KTtcbiAgICBpbnNlcnQodGFyZ2V0LCBub2RlLCBhbmNob3IpO1xufVxuZnVuY3Rpb24gaW5zZXJ0X2h5ZHJhdGlvbl9kZXYodGFyZ2V0LCBub2RlLCBhbmNob3IpIHtcbiAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTUluc2VydCcsIHsgdGFyZ2V0LCBub2RlLCBhbmNob3IgfSk7XG4gICAgaW5zZXJ0X2h5ZHJhdGlvbih0YXJnZXQsIG5vZGUsIGFuY2hvcik7XG59XG5mdW5jdGlvbiBkZXRhY2hfZGV2KG5vZGUpIHtcbiAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTVJlbW92ZScsIHsgbm9kZSB9KTtcbiAgICBkZXRhY2gobm9kZSk7XG59XG5mdW5jdGlvbiBkZXRhY2hfYmV0d2Vlbl9kZXYoYmVmb3JlLCBhZnRlcikge1xuICAgIHdoaWxlIChiZWZvcmUubmV4dFNpYmxpbmcgJiYgYmVmb3JlLm5leHRTaWJsaW5nICE9PSBhZnRlcikge1xuICAgICAgICBkZXRhY2hfZGV2KGJlZm9yZS5uZXh0U2libGluZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gZGV0YWNoX2JlZm9yZV9kZXYoYWZ0ZXIpIHtcbiAgICB3aGlsZSAoYWZ0ZXIucHJldmlvdXNTaWJsaW5nKSB7XG4gICAgICAgIGRldGFjaF9kZXYoYWZ0ZXIucHJldmlvdXNTaWJsaW5nKTtcbiAgICB9XG59XG5mdW5jdGlvbiBkZXRhY2hfYWZ0ZXJfZGV2KGJlZm9yZSkge1xuICAgIHdoaWxlIChiZWZvcmUubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgZGV0YWNoX2RldihiZWZvcmUubmV4dFNpYmxpbmcpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGxpc3Rlbl9kZXYobm9kZSwgZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMsIGhhc19wcmV2ZW50X2RlZmF1bHQsIGhhc19zdG9wX3Byb3BhZ2F0aW9uLCBoYXNfc3RvcF9pbW1lZGlhdGVfcHJvcGFnYXRpb24pIHtcbiAgICBjb25zdCBtb2RpZmllcnMgPSBvcHRpb25zID09PSB0cnVlID8gWydjYXB0dXJlJ10gOiBvcHRpb25zID8gQXJyYXkuZnJvbShPYmplY3Qua2V5cyhvcHRpb25zKSkgOiBbXTtcbiAgICBpZiAoaGFzX3ByZXZlbnRfZGVmYXVsdClcbiAgICAgICAgbW9kaWZpZXJzLnB1c2goJ3ByZXZlbnREZWZhdWx0Jyk7XG4gICAgaWYgKGhhc19zdG9wX3Byb3BhZ2F0aW9uKVxuICAgICAgICBtb2RpZmllcnMucHVzaCgnc3RvcFByb3BhZ2F0aW9uJyk7XG4gICAgaWYgKGhhc19zdG9wX2ltbWVkaWF0ZV9wcm9wYWdhdGlvbilcbiAgICAgICAgbW9kaWZpZXJzLnB1c2goJ3N0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbicpO1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NQWRkRXZlbnRMaXN0ZW5lcicsIHsgbm9kZSwgZXZlbnQsIGhhbmRsZXIsIG1vZGlmaWVycyB9KTtcbiAgICBjb25zdCBkaXNwb3NlID0gbGlzdGVuKG5vZGUsIGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTVJlbW92ZUV2ZW50TGlzdGVuZXInLCB7IG5vZGUsIGV2ZW50LCBoYW5kbGVyLCBtb2RpZmllcnMgfSk7XG4gICAgICAgIGRpc3Bvc2UoKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gYXR0cl9kZXYobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgIGF0dHIobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgaWYgKHZhbHVlID09IG51bGwpXG4gICAgICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NUmVtb3ZlQXR0cmlidXRlJywgeyBub2RlLCBhdHRyaWJ1dGUgfSk7XG4gICAgZWxzZVxuICAgICAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTVNldEF0dHJpYnV0ZScsIHsgbm9kZSwgYXR0cmlidXRlLCB2YWx1ZSB9KTtcbn1cbmZ1bmN0aW9uIHByb3BfZGV2KG5vZGUsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIG5vZGVbcHJvcGVydHldID0gdmFsdWU7XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01TZXRQcm9wZXJ0eScsIHsgbm9kZSwgcHJvcGVydHksIHZhbHVlIH0pO1xufVxuZnVuY3Rpb24gZGF0YXNldF9kZXYobm9kZSwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgbm9kZS5kYXRhc2V0W3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NU2V0RGF0YXNldCcsIHsgbm9kZSwgcHJvcGVydHksIHZhbHVlIH0pO1xufVxuZnVuY3Rpb24gc2V0X2RhdGFfZGV2KHRleHQsIGRhdGEpIHtcbiAgICBkYXRhID0gJycgKyBkYXRhO1xuICAgIGlmICh0ZXh0Lndob2xlVGV4dCA9PT0gZGF0YSlcbiAgICAgICAgcmV0dXJuO1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NU2V0RGF0YScsIHsgbm9kZTogdGV4dCwgZGF0YSB9KTtcbiAgICB0ZXh0LmRhdGEgPSBkYXRhO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVfZWFjaF9hcmd1bWVudChhcmcpIHtcbiAgICBpZiAodHlwZW9mIGFyZyAhPT0gJ3N0cmluZycgJiYgIShhcmcgJiYgdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gYXJnKSkge1xuICAgICAgICBsZXQgbXNnID0gJ3sjZWFjaH0gb25seSBpdGVyYXRlcyBvdmVyIGFycmF5LWxpa2Ugb2JqZWN0cy4nO1xuICAgICAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBhcmcgJiYgU3ltYm9sLml0ZXJhdG9yIGluIGFyZykge1xuICAgICAgICAgICAgbXNnICs9ICcgWW91IGNhbiB1c2UgYSBzcHJlYWQgdG8gY29udmVydCB0aGlzIGl0ZXJhYmxlIGludG8gYW4gYXJyYXkuJztcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgICB9XG59XG5mdW5jdGlvbiB2YWxpZGF0ZV9zbG90cyhuYW1lLCBzbG90LCBrZXlzKSB7XG4gICAgZm9yIChjb25zdCBzbG90X2tleSBvZiBPYmplY3Qua2V5cyhzbG90KSkge1xuICAgICAgICBpZiAoIX5rZXlzLmluZGV4T2Yoc2xvdF9rZXkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYDwke25hbWV9PiByZWNlaXZlZCBhbiB1bmV4cGVjdGVkIHNsb3QgXCIke3Nsb3Rfa2V5fVwiLmApO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gdmFsaWRhdGVfZHluYW1pY19lbGVtZW50KHRhZykge1xuICAgIGNvbnN0IGlzX3N0cmluZyA9IHR5cGVvZiB0YWcgPT09ICdzdHJpbmcnO1xuICAgIGlmICh0YWcgJiYgIWlzX3N0cmluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJzxzdmVsdGU6ZWxlbWVudD4gZXhwZWN0cyBcInRoaXNcIiBhdHRyaWJ1dGUgdG8gYmUgYSBzdHJpbmcuJyk7XG4gICAgfVxufVxuZnVuY3Rpb24gdmFsaWRhdGVfdm9pZF9keW5hbWljX2VsZW1lbnQodGFnKSB7XG4gICAgaWYgKHRhZyAmJiBpc192b2lkKHRhZykpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGA8c3ZlbHRlOmVsZW1lbnQgdGhpcz1cIiR7dGFnfVwiPiBpcyBzZWxmLWNsb3NpbmcgYW5kIGNhbm5vdCBoYXZlIGNvbnRlbnQuYCk7XG4gICAgfVxufVxuZnVuY3Rpb24gY29uc3RydWN0X3N2ZWx0ZV9jb21wb25lbnRfZGV2KGNvbXBvbmVudCwgcHJvcHMpIHtcbiAgICBjb25zdCBlcnJvcl9tZXNzYWdlID0gJ3RoaXM9ey4uLn0gb2YgPHN2ZWx0ZTpjb21wb25lbnQ+IHNob3VsZCBzcGVjaWZ5IGEgU3ZlbHRlIGNvbXBvbmVudC4nO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IGNvbXBvbmVudChwcm9wcyk7XG4gICAgICAgIGlmICghaW5zdGFuY2UuJCQgfHwgIWluc3RhbmNlLiRzZXQgfHwgIWluc3RhbmNlLiRvbiB8fCAhaW5zdGFuY2UuJGRlc3Ryb3kpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcl9tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc3QgeyBtZXNzYWdlIH0gPSBlcnI7XG4gICAgICAgIGlmICh0eXBlb2YgbWVzc2FnZSA9PT0gJ3N0cmluZycgJiYgbWVzc2FnZS5pbmRleE9mKCdpcyBub3QgYSBjb25zdHJ1Y3RvcicpICE9PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yX21lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgfVxufVxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBTdmVsdGUgY29tcG9uZW50cyB3aXRoIHNvbWUgbWlub3IgZGV2LWVuaGFuY2VtZW50cy4gVXNlZCB3aGVuIGRldj10cnVlLlxuICovXG5jbGFzcyBTdmVsdGVDb21wb25lbnREZXYgZXh0ZW5kcyBTdmVsdGVDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKCFvcHRpb25zIHx8ICghb3B0aW9ucy50YXJnZXQgJiYgIW9wdGlvbnMuJCRpbmxpbmUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCIndGFyZ2V0JyBpcyBhIHJlcXVpcmVkIG9wdGlvblwiKTtcbiAgICAgICAgfVxuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgc3VwZXIuJGRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy4kZGVzdHJveSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignQ29tcG9uZW50IHdhcyBhbHJlYWR5IGRlc3Ryb3llZCcpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgfTtcbiAgICB9XG4gICAgJGNhcHR1cmVfc3RhdGUoKSB7IH1cbiAgICAkaW5qZWN0X3N0YXRlKCkgeyB9XG59XG4vKipcbiAqIEJhc2UgY2xhc3MgdG8gY3JlYXRlIHN0cm9uZ2x5IHR5cGVkIFN2ZWx0ZSBjb21wb25lbnRzLlxuICogVGhpcyBvbmx5IGV4aXN0cyBmb3IgdHlwaW5nIHB1cnBvc2VzIGFuZCBzaG91bGQgYmUgdXNlZCBpbiBgLmQudHNgIGZpbGVzLlxuICpcbiAqICMjIyBFeGFtcGxlOlxuICpcbiAqIFlvdSBoYXZlIGNvbXBvbmVudCBsaWJyYXJ5IG9uIG5wbSBjYWxsZWQgYGNvbXBvbmVudC1saWJyYXJ5YCwgZnJvbSB3aGljaFxuICogeW91IGV4cG9ydCBhIGNvbXBvbmVudCBjYWxsZWQgYE15Q29tcG9uZW50YC4gRm9yIFN2ZWx0ZStUeXBlU2NyaXB0IHVzZXJzLFxuICogeW91IHdhbnQgdG8gcHJvdmlkZSB0eXBpbmdzLiBUaGVyZWZvcmUgeW91IGNyZWF0ZSBhIGBpbmRleC5kLnRzYDpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBTdmVsdGVDb21wb25lbnRUeXBlZCB9IGZyb20gXCJzdmVsdGVcIjtcbiAqIGV4cG9ydCBjbGFzcyBNeUNvbXBvbmVudCBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudFR5cGVkPHtmb286IHN0cmluZ30+IHt9XG4gKiBgYGBcbiAqIFR5cGluZyB0aGlzIG1ha2VzIGl0IHBvc3NpYmxlIGZvciBJREVzIGxpa2UgVlMgQ29kZSB3aXRoIHRoZSBTdmVsdGUgZXh0ZW5zaW9uXG4gKiB0byBwcm92aWRlIGludGVsbGlzZW5zZSBhbmQgdG8gdXNlIHRoZSBjb21wb25lbnQgbGlrZSB0aGlzIGluIGEgU3ZlbHRlIGZpbGVcbiAqIHdpdGggVHlwZVNjcmlwdDpcbiAqIGBgYHN2ZWx0ZVxuICogPHNjcmlwdCBsYW5nPVwidHNcIj5cbiAqIFx0aW1wb3J0IHsgTXlDb21wb25lbnQgfSBmcm9tIFwiY29tcG9uZW50LWxpYnJhcnlcIjtcbiAqIDwvc2NyaXB0PlxuICogPE15Q29tcG9uZW50IGZvbz17J2Jhcid9IC8+XG4gKiBgYGBcbiAqXG4gKiAjIyMjIFdoeSBub3QgbWFrZSB0aGlzIHBhcnQgb2YgYFN2ZWx0ZUNvbXBvbmVudChEZXYpYD9cbiAqIEJlY2F1c2VcbiAqIGBgYHRzXG4gKiBjbGFzcyBBU3ViY2xhc3NPZlN2ZWx0ZUNvbXBvbmVudCBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudDx7Zm9vOiBzdHJpbmd9PiB7fVxuICogY29uc3QgY29tcG9uZW50OiB0eXBlb2YgU3ZlbHRlQ29tcG9uZW50ID0gQVN1YmNsYXNzT2ZTdmVsdGVDb21wb25lbnQ7XG4gKiBgYGBcbiAqIHdpbGwgdGhyb3cgYSB0eXBlIGVycm9yLCBzbyB3ZSBuZWVkIHRvIHNlcGFyYXRlIHRoZSBtb3JlIHN0cmljdGx5IHR5cGVkIGNsYXNzLlxuICovXG5jbGFzcyBTdmVsdGVDb21wb25lbnRUeXBlZCBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudERldiB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICB9XG59XG5mdW5jdGlvbiBsb29wX2d1YXJkKHRpbWVvdXQpIHtcbiAgICBjb25zdCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKERhdGUubm93KCkgLSBzdGFydCA+IHRpbWVvdXQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW5maW5pdGUgbG9vcCBkZXRlY3RlZCcpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IHsgSHRtbFRhZywgSHRtbFRhZ0h5ZHJhdGlvbiwgU3ZlbHRlQ29tcG9uZW50LCBTdmVsdGVDb21wb25lbnREZXYsIFN2ZWx0ZUNvbXBvbmVudFR5cGVkLCBTdmVsdGVFbGVtZW50LCBhY3Rpb25fZGVzdHJveWVyLCBhZGRfYXR0cmlidXRlLCBhZGRfY2xhc3NlcywgYWRkX2ZsdXNoX2NhbGxiYWNrLCBhZGRfbG9jYXRpb24sIGFkZF9yZW5kZXJfY2FsbGJhY2ssIGFkZF9yZXNpemVfbGlzdGVuZXIsIGFkZF9zdHlsZXMsIGFkZF90cmFuc2Zvcm0sIGFmdGVyVXBkYXRlLCBhcHBlbmQsIGFwcGVuZF9kZXYsIGFwcGVuZF9lbXB0eV9zdHlsZXNoZWV0LCBhcHBlbmRfaHlkcmF0aW9uLCBhcHBlbmRfaHlkcmF0aW9uX2RldiwgYXBwZW5kX3N0eWxlcywgYXNzaWduLCBhdHRyLCBhdHRyX2RldiwgYXR0cmlidXRlX3RvX29iamVjdCwgYmVmb3JlVXBkYXRlLCBiaW5kLCBiaW5kaW5nX2NhbGxiYWNrcywgYmxhbmtfb2JqZWN0LCBidWJibGUsIGNoZWNrX291dHJvcywgY2hpbGRyZW4sIGNsYWltX2NvbXBvbmVudCwgY2xhaW1fZWxlbWVudCwgY2xhaW1faHRtbF90YWcsIGNsYWltX3NwYWNlLCBjbGFpbV9zdmdfZWxlbWVudCwgY2xhaW1fdGV4dCwgY2xlYXJfbG9vcHMsIGNvbXBvbmVudF9zdWJzY3JpYmUsIGNvbXB1dGVfcmVzdF9wcm9wcywgY29tcHV0ZV9zbG90cywgY29uc3RydWN0X3N2ZWx0ZV9jb21wb25lbnQsIGNvbnN0cnVjdF9zdmVsdGVfY29tcG9uZW50X2RldiwgY3JlYXRlRXZlbnREaXNwYXRjaGVyLCBjcmVhdGVfYW5pbWF0aW9uLCBjcmVhdGVfYmlkaXJlY3Rpb25hbF90cmFuc2l0aW9uLCBjcmVhdGVfY29tcG9uZW50LCBjcmVhdGVfaW5fdHJhbnNpdGlvbiwgY3JlYXRlX291dF90cmFuc2l0aW9uLCBjcmVhdGVfc2xvdCwgY3JlYXRlX3Nzcl9jb21wb25lbnQsIGN1cnJlbnRfY29tcG9uZW50LCBjdXN0b21fZXZlbnQsIGRhdGFzZXRfZGV2LCBkZWJ1ZywgZGVzdHJveV9ibG9jaywgZGVzdHJveV9jb21wb25lbnQsIGRlc3Ryb3lfZWFjaCwgZGV0YWNoLCBkZXRhY2hfYWZ0ZXJfZGV2LCBkZXRhY2hfYmVmb3JlX2RldiwgZGV0YWNoX2JldHdlZW5fZGV2LCBkZXRhY2hfZGV2LCBkaXJ0eV9jb21wb25lbnRzLCBkaXNwYXRjaF9kZXYsIGVhY2gsIGVsZW1lbnQsIGVsZW1lbnRfaXMsIGVtcHR5LCBlbmRfaHlkcmF0aW5nLCBlc2NhcGUsIGVzY2FwZV9hdHRyaWJ1dGVfdmFsdWUsIGVzY2FwZV9vYmplY3QsIGV4Y2x1ZGVfaW50ZXJuYWxfcHJvcHMsIGZpeF9hbmRfZGVzdHJveV9ibG9jaywgZml4X2FuZF9vdXRyb19hbmRfZGVzdHJveV9ibG9jaywgZml4X3Bvc2l0aW9uLCBmbHVzaCwgZmx1c2hfcmVuZGVyX2NhbGxiYWNrcywgZ2V0QWxsQ29udGV4dHMsIGdldENvbnRleHQsIGdldF9hbGxfZGlydHlfZnJvbV9zY29wZSwgZ2V0X2JpbmRpbmdfZ3JvdXBfdmFsdWUsIGdldF9jdXJyZW50X2NvbXBvbmVudCwgZ2V0X2N1c3RvbV9lbGVtZW50c19zbG90cywgZ2V0X3Jvb3RfZm9yX3N0eWxlLCBnZXRfc2xvdF9jaGFuZ2VzLCBnZXRfc3ByZWFkX29iamVjdCwgZ2V0X3NwcmVhZF91cGRhdGUsIGdldF9zdG9yZV92YWx1ZSwgZ2xvYmFscywgZ3JvdXBfb3V0cm9zLCBoYW5kbGVfcHJvbWlzZSwgaGFzQ29udGV4dCwgaGFzX3Byb3AsIGhlYWRfc2VsZWN0b3IsIGlkZW50aXR5LCBpbml0LCBpbml0X2JpbmRpbmdfZ3JvdXAsIGluaXRfYmluZGluZ19ncm91cF9keW5hbWljLCBpbnNlcnQsIGluc2VydF9kZXYsIGluc2VydF9oeWRyYXRpb24sIGluc2VydF9oeWRyYXRpb25fZGV2LCBpbnRyb3MsIGludmFsaWRfYXR0cmlidXRlX25hbWVfY2hhcmFjdGVyLCBpc19jbGllbnQsIGlzX2Nyb3Nzb3JpZ2luLCBpc19lbXB0eSwgaXNfZnVuY3Rpb24sIGlzX3Byb21pc2UsIGlzX3ZvaWQsIGxpc3RlbiwgbGlzdGVuX2RldiwgbG9vcCwgbG9vcF9ndWFyZCwgbWVyZ2Vfc3NyX3N0eWxlcywgbWlzc2luZ19jb21wb25lbnQsIG1vdW50X2NvbXBvbmVudCwgbm9vcCwgbm90X2VxdWFsLCBub3csIG51bGxfdG9fZW1wdHksIG9iamVjdF93aXRob3V0X3Byb3BlcnRpZXMsIG9uRGVzdHJveSwgb25Nb3VudCwgb25jZSwgb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2ssIHByZXZlbnRfZGVmYXVsdCwgcHJvcF9kZXYsIHF1ZXJ5X3NlbGVjdG9yX2FsbCwgcmFmLCBydW4sIHJ1bl9hbGwsIHNhZmVfbm90X2VxdWFsLCBzY2hlZHVsZV91cGRhdGUsIHNlbGVjdF9tdWx0aXBsZV92YWx1ZSwgc2VsZWN0X29wdGlvbiwgc2VsZWN0X29wdGlvbnMsIHNlbGVjdF92YWx1ZSwgc2VsZiwgc2V0Q29udGV4dCwgc2V0X2F0dHJpYnV0ZXMsIHNldF9jdXJyZW50X2NvbXBvbmVudCwgc2V0X2N1c3RvbV9lbGVtZW50X2RhdGEsIHNldF9jdXN0b21fZWxlbWVudF9kYXRhX21hcCwgc2V0X2RhdGEsIHNldF9kYXRhX2Rldiwgc2V0X2R5bmFtaWNfZWxlbWVudF9kYXRhLCBzZXRfaW5wdXRfdHlwZSwgc2V0X2lucHV0X3ZhbHVlLCBzZXRfbm93LCBzZXRfcmFmLCBzZXRfc3RvcmVfdmFsdWUsIHNldF9zdHlsZSwgc2V0X3N2Z19hdHRyaWJ1dGVzLCBzcGFjZSwgc3ByZWFkLCBzcmNfdXJsX2VxdWFsLCBzdGFydF9oeWRyYXRpbmcsIHN0b3BfaW1tZWRpYXRlX3Byb3BhZ2F0aW9uLCBzdG9wX3Byb3BhZ2F0aW9uLCBzdWJzY3JpYmUsIHN2Z19lbGVtZW50LCB0ZXh0LCB0aWNrLCB0aW1lX3Jhbmdlc190b19hcnJheSwgdG9fbnVtYmVyLCB0b2dnbGVfY2xhc3MsIHRyYW5zaXRpb25faW4sIHRyYW5zaXRpb25fb3V0LCB0cnVzdGVkLCB1cGRhdGVfYXdhaXRfYmxvY2tfYnJhbmNoLCB1cGRhdGVfa2V5ZWRfZWFjaCwgdXBkYXRlX3Nsb3QsIHVwZGF0ZV9zbG90X2Jhc2UsIHZhbGlkYXRlX2NvbXBvbmVudCwgdmFsaWRhdGVfZHluYW1pY19lbGVtZW50LCB2YWxpZGF0ZV9lYWNoX2FyZ3VtZW50LCB2YWxpZGF0ZV9lYWNoX2tleXMsIHZhbGlkYXRlX3Nsb3RzLCB2YWxpZGF0ZV9zdG9yZSwgdmFsaWRhdGVfdm9pZF9keW5hbWljX2VsZW1lbnQsIHhsaW5rX2F0dHIgfTtcbiIsICJleHBvcnQgZnVuY3Rpb24gZXhwb3J0U3ZlbHRlQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gICAgbGV0IHtkZWZhdWx0OiBtb2R1bGVzLCBmaWxlbmFtZXN9ID0gY29tcG9uZW50c1xuXG4gICAgZmlsZW5hbWVzID0gZmlsZW5hbWVzLm1hcChuYW1lID0+IG5hbWUucmVwbGFjZShcIi4uL3N2ZWx0ZS9cIiwgXCJcIikpLm1hcChuYW1lID0+IG5hbWUucmVwbGFjZShcIi5zdmVsdGVcIiwgXCJcIikpXG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgLi4ubW9kdWxlcy5tYXAoKG0sIGluZGV4KSA9PiAoe1tmaWxlbmFtZXNbaW5kZXhdXTogbS5kZWZhdWx0fSkpKVxufVxuIiwgImltcG9ydCB7ZGV0YWNoLCBpbnNlcnQsIG5vb3B9IGZyb20gXCJzdmVsdGUvaW50ZXJuYWxcIlxuaW1wb3J0IHtleHBvcnRTdmVsdGVDb21wb25lbnRzfSBmcm9tIFwiLi91dGlsc1wiXG5cbmZ1bmN0aW9uIGJhc2U2NFRvRWxlbWVudChiYXNlNjQpIHtcbiAgICBsZXQgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gYXRvYihiYXNlNjQpLnRyaW0oKVxuICAgIHJldHVybiB0ZW1wbGF0ZVxufVxuXG5mdW5jdGlvbiBkYXRhQXR0cmlidXRlVG9Kc29uKGF0dHJpYnV0ZU5hbWUsIGVsKSB7XG4gICAgY29uc3QgZGF0YSA9IGVsLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKVxuICAgIHJldHVybiBkYXRhID8gSlNPTi5wYXJzZShkYXRhKSA6IHt9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNsb3RzKHNsb3RzLCByZWYpIHtcbiAgICBjb25zdCBjcmVhdGVTbG90ID0gKHNsb3ROYW1lLCByZWYpID0+IHtcbiAgICAgICAgbGV0IHNhdmVkVGFyZ2V0LCBzYXZlZEFuY2hvciwgc2F2ZWRFbGVtZW50XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGdldEVsZW1lbnQoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiYXNlNjRUb0VsZW1lbnQoZGF0YUF0dHJpYnV0ZVRvSnNvbihcImRhdGEtc2xvdHNcIiwgcmVmLmVsKVtzbG90TmFtZV0pXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB1cGRhdGUoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmdldEVsZW1lbnQoKVxuICAgICAgICAgICAgICAgICAgICBkZXRhY2goc2F2ZWRFbGVtZW50KVxuICAgICAgICAgICAgICAgICAgICBpbnNlcnQoc2F2ZWRUYXJnZXQsIGVsZW1lbnQsIHNhdmVkQW5jaG9yKVxuICAgICAgICAgICAgICAgICAgICBzYXZlZEVsZW1lbnQgPSBlbGVtZW50XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjOiBub29wLFxuICAgICAgICAgICAgICAgIG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZ2V0RWxlbWVudCgpXG4gICAgICAgICAgICAgICAgICAgIHNhdmVkVGFyZ2V0ID0gdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgIHNhdmVkQW5jaG9yID0gYW5jaG9yXG4gICAgICAgICAgICAgICAgICAgIHNhdmVkRWxlbWVudCA9IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0KHRhcmdldCwgZWxlbWVudCwgYW5jaG9yKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZChkZXRhY2hpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRldGFjaGluZykgZGV0YWNoKHNhdmVkRWxlbWVudClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGw6IG5vb3AsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzdmVsdGVTbG90cyA9IHt9XG5cbiAgICBmb3IgKGNvbnN0IHNsb3ROYW1lIGluIHNsb3RzKSB7XG4gICAgICAgIHN2ZWx0ZVNsb3RzW3Nsb3ROYW1lXSA9IFtjcmVhdGVTbG90KHNsb3ROYW1lLCByZWYpXVxuICAgIH1cblxuICAgIHJldHVybiBzdmVsdGVTbG90c1xufVxuXG5mdW5jdGlvbiBnZXRQcm9wcyhyZWYpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5kYXRhQXR0cmlidXRlVG9Kc29uKFwiZGF0YS1wcm9wc1wiLCByZWYuZWwpLFxuICAgICAgICBwdXNoRXZlbnQ6IChldmVudCwgZGF0YSwgY2FsbGJhY2spID0+IHJlZi5wdXNoRXZlbnQoZXZlbnQsIGRhdGEsIGNhbGxiYWNrKSxcbiAgICAgICAgJCRzbG90czogY3JlYXRlU2xvdHMoZGF0YUF0dHJpYnV0ZVRvSnNvbihcImRhdGEtc2xvdHNcIiwgcmVmLmVsKSwgcmVmKSxcbiAgICAgICAgJCRzY29wZToge30sXG4gICAgfVxufVxuXG5mdW5jdGlvbiBmaW5kU2xvdEN0eChjb21wb25lbnQpIHtcbiAgICAvLyBUaGUgZGVmYXVsdCBzbG90IGFsd2F5cyBleGlzdHMgaWYgdGhlcmUncyBhIHNsb3Qgc2V0XG4gICAgLy8gZXZlbiBpZiBubyBzbG90IGlzIHNldCBmb3IgdGhlIGV4cGxpY2l0IGRlZmF1bHQgc2xvdFxuICAgIHJldHVybiBjb21wb25lbnQuJCQuY3R4LmZpbmQoY3R4RWxlbWVudCA9PiBjdHhFbGVtZW50Py5kZWZhdWx0KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SG9va3MoQ29tcG9uZW50cykge1xuICAgIGNvbnN0IGNvbXBvbmVudHMgPSBleHBvcnRTdmVsdGVDb21wb25lbnRzKENvbXBvbmVudHMpXG5cbiAgICBjb25zdCBTdmVsdGVIb29rID0ge1xuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50TmFtZSA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1uYW1lXCIpXG4gICAgICAgICAgICBpZiAoIWNvbXBvbmVudE5hbWUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb21wb25lbnQgbmFtZSBtdXN0IGJlIHByb3ZpZGVkXCIpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IENvbXBvbmVudCA9IGNvbXBvbmVudHNbY29tcG9uZW50TmFtZV1cbiAgICAgICAgICAgIGlmICghQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gZmluZCAke2NvbXBvbmVudE5hbWV9IGNvbXBvbmVudC5gKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBDb21wb25lbnQoe1xuICAgICAgICAgICAgICAgIHRhcmdldDogdGhpcy5lbCxcbiAgICAgICAgICAgICAgICBwcm9wczogZ2V0UHJvcHModGhpcyksXG4gICAgICAgICAgICAgICAgaHlkcmF0ZTogdHJ1ZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG5cbiAgICAgICAgdXBkYXRlZCgpIHtcbiAgICAgICAgICAgIC8vIFNldCB0aGUgcHJvcHNcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlLiRzZXQoZ2V0UHJvcHModGhpcykpXG5cbiAgICAgICAgICAgIC8vIFNldCB0aGUgc2xvdHNcbiAgICAgICAgICAgIGNvbnN0IHNsb3RDdHggPSBmaW5kU2xvdEN0eCh0aGlzLl9pbnN0YW5jZSlcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHNsb3RDdHgpIHtcbiAgICAgICAgICAgICAgICBzbG90Q3R4W2tleV1bMF0oKS51cGRhdGUoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGRlc3Ryb3llZCgpIHtcbiAgICAgICAgICAgIC8vIFdlIGRvbid0IHdhbnQgdG8gZGVzdHJveSB0aGUgY29tcG9uZW50XG4gICAgICAgICAgICAvLyBJZiB3ZSBkbyBhIHBhZ2UgbmF2aWdhdGlvbiwgdGhpcyB3b3VsZCByZW1vdmUgdGhlIGNvbXBvbmVudCBpbiB0aGUgRE9NLFxuICAgICAgICAgICAgLy8gYW5kIHRoZW4gaXQgd291bGQgdG8gdGhlIHRyYW5zaXRpb24sIGNhdXNpbmcgYSBmbGlja2VyIG9mIHVucmVuZGVyZWQgY29udGVudFxuICAgICAgICAgICAgLy8gU2luY2Ugd2UncmUgZG9pbmcgYSBwYWdlIHRyYW5zaXRpb24gYW55d2F5LCB0aGUgY29tcG9uZW50IHdpbGwgYmUgcmVtb3ZlIGF1dG9tYXRpY2FsbHlcbiAgICAgICAgfSxcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBTdmVsdGVIb29rLFxuICAgIH1cbn1cbiIsICJpbXBvcnQgKiBhcyBDb21wb25lbnRzIGZyb20gXCIuLi9zdmVsdGUvKiovKlwiXG5pbXBvcnQge2V4cG9ydFN2ZWx0ZUNvbXBvbmVudHMsIHJlbmRlcn0gZnJvbSBcImxpdmVfc3ZlbHRlXCJcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRTdmVsdGVDb21wb25lbnRzKENvbXBvbmVudHMpXG5tb2R1bGUuZXhwb3J0cy5zc3JSZW5kZXJDb21wb25lbnQgPSByZW5kZXJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQSwwQ0FBQUEsVUFBQTtBQUFBO0FBRUEsV0FBTyxlQUFlQSxVQUFTLGNBQWMsRUFBRSxPQUFPLEtBQUssQ0FBQztBQUU1RCxhQUFTQyxRQUFPO0FBQUEsSUFBRTtBQUNsQixRQUFNLFdBQVcsT0FBSztBQUN0QixhQUFTLE9BQU8s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QUUsQ0FBQyxFQUFFLElBQUksQ0FBQSxTQUFRLEtBQUssUUFBUSxXQUFXLEVBQUUsQ0FBQztBQUV6RyxTQUFPLE9BQU8sT0FBTyxDQUFDLEdBQUcsR0FBR0QsU0FBUSxJQUFJLENBQUMsR0FBRyxXQUFXLEVBQUMsQ0FBQ0MsV0FBVSxLQUFLLENBQUMsR0FBRyxFQUFFLFFBQU8sRUFBRSxDQUFDO0FBQzVGOzs7QUVIQSxPQUFPLFVBQVUsdUJBQXVCLFNBQVU7QUFDbEQsT0FBTyxRQUFRLHFCQUFxQjsiLAogICJuYW1lcyI6IFsiZXhwb3J0cyIsICJub29wIiwgImVsZW1lbnQiLCAicnVuIiwgInJ1bl9hbGwiLCAiaXNfZnVuY3Rpb24iLCAic2FmZV9ub3RfZXF1YWwiLCAiaXNfZW1wdHkiLCAic3Vic2NyaWJlIiwgImdldF9zdG9yZV92YWx1ZSIsICJnbG9iYWxzIiwgIlJlc2l6ZU9ic2VydmVyU2luZ2xldG9uIiwgIl9hIiwgImNoaWxkcmVuIiwgImdyb3VwIiwgInRleHQiLCAiY3Jvc3NvcmlnaW4iLCAiY29tbWVudCIsICJoYXNoIiwgInRpY2siLCAicmVuZGVyX2NhbGxiYWNrcyIsICJmbHVzaF9yZW5kZXJfY2FsbGJhY2tzIiwgImRldGFjaCIsICJpbml0IiwgInByb21pc2UiLCAidXBkYXRlIiwgImJsb2NrIiwgImluc2VydCIsICJfYm9vbGVhbl9hdHRyaWJ1dGVzIiwgImJvb2xlYW5fYXR0cmlidXRlcyIsICJkZXN0cm95X2NvbXBvbmVudCIsICJub3RfZXF1YWwiLCAiYXBwZW5kX3N0eWxlcyIsICJhdHRyIiwgIl9hIiwgInN1YnNjcmliZSIsICJydW4iLCAiY3VzdG9tUGVyY2VudFN0b3JlIiwgImV4cG9ydHMiLCAiY3VzdG9tUGVyY2VudFN0b3JlIiwgIm5vb3AiLCAicnVuIiwgInJ1bl9hbGwiLCAiaXNfZnVuY3Rpb24iLCAiaXNfZW1wdHkiLCAicmVuZGVyX2NhbGxiYWNrcyIsICJmbHVzaF9yZW5kZXJfY2FsbGJhY2tzIiwgImdsb2JhbHMiLCAiX2Jvb2xlYW5fYXR0cmlidXRlcyIsICJib29sZWFuX2F0dHJpYnV0ZXMiLCAiZGVzdHJveV9jb21wb25lbnQiLCAicnVuX2FsbCIsICJTdmVsdGVFbGVtZW50IiwgInJ1biIsICJpc19mdW5jdGlvbiIsICJub29wIiwgImlzX2VtcHR5IiwgIm1vZHVsZXMiLCAiZmlsZW5hbWVzIl0KfQo=
