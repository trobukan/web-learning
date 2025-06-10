## Elements and Attributes

#### just type the tag 

`p`
```html
<p></p>
```

#### add content

`button{my button}`
```html
<button>my button</button>
```

#### add classes 

`button.add-button`
```html
<button class="add-button"></button>
```
#### add id

`button#add-button`
```html
<button id="add-button"></button>
```

#### other attributes

`button[type="submit"]
```html
<button type="submit"> </button>
```

## Operators

`ul>li`
```html
<ul>
	<li></li>
</ul>
```

`li + li`
```html
<li></li>
<li></li>
```

`nav>ul>li+li`
```html
<nav>
	<ul>
		<li></li>
		<li></li>
	</ul>
</nav>
```

`nav>ul>li^button`
```html
<nav>
	<ul>
		<li></li>
	</ul>
	<button></button>
</nav>
```

`.container`
```html
<div class="container"></div>
```

`#flex-container`
```html
<div id="flex-container"></div>
```

## Loop & Index

`nav>ul>li*3`
```html
<nav>
	<ul>
		<li></li>
		<li></li>
		<li></li>
	</ul>
</nav>
```

`nav>ul>li.item*3
```html
<nav>
	<ul>
		<li class="item"></li>
		<li class="item"></li>
		<li class="item"></li>
	</ul>
</nav>
```

`(ul>li)*3`
```html
<ul>
	<li></li>
</ul>
<ul>
	<li></li>
</ul>
<ul>
	<li></li>
</ul>
```

`nav>ul>li.item$*3`
```html
<nav>
	<ul>
		<li class="item1"></li>
		<li class="item2"></li>
		<li class="item"></li>
	</ul>
</nav>
```

`li[style="transition-delay: %s]*3
```html
<li style="transition-delay: 1s"></li>
<li style="transition-delay: 2s"></li>
<li style="transition-delay: 3s"></li>

```