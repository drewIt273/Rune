/**
 * Instance by DrewIt
 */
//

const fragments: DocumentFragment[] = []

function fn(node: Node | string): Node[] | null {
    return typeof node === 'string' ? Array.from(document.querySelectorAll(node)) : [node]
}

function isConnected(node: Node): boolean {
    return node.isConnected
}

function remove(n: Node): void {
    if (n.isConnected) n.parentNode?.removeChild(n)
}

function closest(node: HTMLElement | null | undefined, match: Node): Node {
    if (node?.parentElement === match) return match
    else return closest(node?.parentElement, match)
}

function createFragment(): DocumentFragment {
    const d = new DocumentFragment()
    fragments.push(d)
    return d
}

function indexOf(node: ChildNode): number | undefined {
    return node.parentNode?.childNodes.values().toArray().indexOf(node)
}