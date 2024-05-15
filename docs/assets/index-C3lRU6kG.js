(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();class u{constructor(e){this.tarea=e,this.id=new Date().getTime(),this.completado=!1,this.creado=new Date}}class m{constructor(){this.todos=[],this.cargarLocalStorage()}nuevoTodo(e){this.todos.push(e),this.guardarLocalStorage()}eliminarTodo(e){this.todos=this.todos.filter(o=>o.id!=e),this.guardarLocalStorage()}marcarCompletado(e){for(const o of this.todos)if(o.id==e){o.completado=!o.completado,this.guardarLocalStorage();break}}eliminarCompletados(){this.todos=this.todos.filter(e=>!e.completado),this.guardarLocalStorage()}guardarLocalStorage(){localStorage.setItem("todo",JSON.stringify(this.todos))}cargarLocalStorage(){localStorage.getItem("todo")?this.todos=JSON.parse(localStorage.getItem("todo")):this.todos=[]}}const i=document.querySelector(".todo-list"),l=document.querySelector(".new-todo"),f=document.querySelector(".clear-completed"),h=document.querySelector(".filters"),p=document.querySelectorAll(".filtro"),n=t=>{const e=`<li class="${t.completado?"completed":""}" data-id="${t.id}">
	<div class="view">
	<input class="toggle" type="checkbox" ${t.completado?"checked":""}>
	<label>${t.tarea}</label>
	<button class="destroy"></button>
	</div>
	<input class="edit" value="Create a TodoMVC template">
	</li>`,o=document.createElement("div");return o.innerHTML=e,i.append(o.firstElementChild),o.firstElementChild};l.addEventListener("keyup",t=>{if(t.keyCode===13&&l.value.length>0){const e=new u(l.value);c.nuevoTodo(e),n(e),l.value=""}});i.addEventListener("click",()=>{const t=event.target.localName,e=event.target.parentElement.parentElement,o=e.getAttribute("data-id");t.includes("input")?(c.marcarCompletado(o),e.classList.toggle("completed")):t.includes("button")&&(c.eliminarTodo(o),i.removeChild(e))});f.addEventListener("click",()=>{c.eliminarCompletados();for(let t=i.children.length-1;t>=0;t--){const e=i.children[t];e.classList.contains("completed")&&i.removeChild(e)}});h.addEventListener("click",t=>{const e=t.target.text;if(e){p.forEach(o=>o.classList.remove("selected")),t.target.classList.add("selected");for(const o of i.children){o.classList.remove("hidden");const a=o.classList.contains("completed");switch(e){case"Pendientes":a&&o.classList.add("hidden");break;case"Completados":a||o.classList.add("hidden");break}}}});const c=new m;c.todos.forEach(t=>n(t));