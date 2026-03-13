<script>
import { h } from 'vue';
export default {
	name: 'NestedList',
	inheritAttrs: false,
	props: {
		items: {
			type: Array,
			required: true,
		},
	},
	render() {
		const attrs = this.$attrs || {};

		const renderItems = (items, depth = 0) => {
			// apply parent attrs only on the top-level ul
			const ulProps = depth === 0 ? attrs : {};
			return h(
				'ul',
				ulProps,
				items.map((item, idx) => {
					if (typeof item === 'string') {
						return h('li', { key: idx }, [h('p', item)]);
					}
					if (item && typeof item === 'object') {
						const children = [h('p', item.text || '')];
						if (
							Array.isArray(item.subpoints) &&
							item.subpoints.length
						) {
							children.push(
								renderItems(item.subpoints, depth + 1)
							);
						}
						return h('li', { key: idx }, children);
					}
					return h('li', { key: idx });
				})
			);
		};

		return renderItems(this.items || []);
	},
};
</script>

<style scoped>
/* Top-level: römische Ziffern */
ul {
	list-style-type: upper-roman;
	padding: 0;
}

/* Zweite Ebene: native square-Marker */
ul ul {
	list-style-type: circle;
	margin-left: 1rem;
	/* pad left so marker has space (browsers render marker in the padding area) */
	padding-left: 1rem;
}

/* Dritte Ebene und tiefer: keine Standardmarker, eigene Kästchen via ::before */
ul ul ul {
	list-style: circle;
	margin-left: 1.25rem;
	padding: 0;
}

li {
	margin-bottom: 2rem;
}

li li {
	margin-bottom: 0.25rem;

	& p {
		margin-bottom: 0.25rem;
	}
}

p {
	margin-bottom: 0.5rem;
}
</style>
