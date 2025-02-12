const menuCategories = [
    {
        id: "huevos-rotos",
        items: [
            { name: "Con chistorra", price: "7,50€" },
            { name: "Con morcilla", price: "7,50€" },
            { name: "Con paletilla ibérica", price: "9,50€" },
            { name: "Con pisto", price: "7,50€" },
            { name: "Con frankfurt", price: "7,50€" },
            { name: "Con panceta", price: "7,50€" }
        ]
    },
    {
        id: "duos",
        description: "Todos los dúos incluyen 2 bebidas.",
        items: [
            { name: "Duo 1", description: "Cazón y bravas", price: "14,95€" },
            { name: "Duo 2", description: "Chocos y bravas", price: "14,95€" },
            { name: "Duo 3", description: "Rejos y bravas", price: "14,95€" },
            { name: "Duo 4", description: "Morros y bravas", price: "14,95€" },
            { name: "Duo 5", description: "Boquerones y bravas", price: "14,95€" },
            { name: "Duo 6", description: "Croquetas y bravas", price: "14,95€" },
            { name: "Duo 7", description: "Tigres y bravas", price: "14,95€" },
            { name: "Duo 8", description: "Fingers y bravas", price: "14,95€" },
            { name: "Duo 9", description: "Alitas y bravas", price: "14,95€" }
        ]
    },
    {
        id: "paninis",
        items: [
            { name: "Atun", price: "4,50€" },
            { name: "Jamon York", price: "4,50€" },
            { name: "Jamón serrano", price: "5,50€" },
            { name: "Bacon", price: "5,50€" }
        ]
    },
    {
        id: "pasta",
        description: "Elige tu salsa: carbonara o boloñesa.",
        table: {
            headers: ["", "Con Bebida", "Sin Bebida"],
            rows: [
                ["Spaghettis", "6,50€", "5,50€"],
                ["Macarrones", "6,50€", "5,50€"]
            ]
        }
    },
    {
        id: "ensaladas",
        items: [
            { name: "Ensalada César", description: "Picatoste, cebolla crujiente, parmesano, tomate cherry, zanahoria rallada, pollo y salsa césar.", price: "7,95€" },
            { name: "Ensalada queso de cabra", description: "Queso cabra, frutos secos, vinagre módena y cebolla crujiente.", price: "6,95€" },
            { name: "Ensalada Junior", description: "Cebolla, atún, espárragos, maiz, huevo y zanahoria.", price: "7,95€" }
        ]
    },
    {
        id: "tapas",
        items: [
            { name: "Morros", price: "5,50€" },
            { name: "Chocos", price: "6,90€" },
            { name: "Fingers de pollo (5 uds.)", price: "5,50€" },
            { name: "Croquetas pollo rustido (5 uds.)", price: "7,25€" },
            { name: "Croquetas rabo de toro (5 uds.)", price: "7,25€" },
            { name: "Croquetas bacalao (5 uds.)", price: "7,25€" },
            { name: "Pincho tortilla", price: "4,80€" },
            { name: "Salchipapas", price: "5,00€" },
            { name: "Bravas", price: "4,80€" },
            { name: "Callos", price: "7,20€" },
            { name: "Mejillones tigre", price: "6,50€" },
            { name: "Boquerones fritos", price: "6,50€" },
            { name: "Pincho tortilla de patatas", price: "4,70€" },
            { name: "Cono de patatas fritas caseras", price: "3,80€" },
            { name: "Rejos y anillas (a la andaluza)", price: "6,90€" },
            { name: "Bien me sabe (cazón)", price: "6,90€" }
        ]
    },
    {
        id: "bebidas",
        items: [
            { name: "Agua con gas", price: "1,50€" },
            { name: "Agua pequeña", price: "1,10€" },
            { name: "Agua grande", price: "2,00€" },
            { name: "Vichy Catalan", price: "2,20€" },
            { name: "Coca Cola", price: "2,00€" },
            { name: "Coca Cola Cero", price: "2,00€" },
            { name: "Fanta Naranja", price: "2,00€" },
            { name: "Fanta Limón", price: "2,00€" },
            { name: "Nestea", price: "2,00€" },
            { name: "Powerade Ice", price: "2,50€" },
            { name: "Bitter Kas", price: "2,50€" },
            { name: "Aquarius", price: "2,00€" },
            { name: "Cacaolat", price: "2,50€" },
            { name: "Tónica", price: "2,00€" },
            { name: "Zumo", price: "2,20€" },
            { name: "Vino Marqués Tinto", price: "2,20€" },
            { name: "Vino Valderivero Verdejo", price: "2,20€" },
            { name: "Vino Valderivero Roble", price: "2,70€" }
        ]
    },
    {
        id: "cervezas",
        items: [
            { name: "Mediana", price: "2,40€" },
            { name: "Quinto", price: "1,70€" },
            { name: "Caña Cerveza", price: "1,70€" },
            { name: "Copa Cerveza", price: "2,00€" },
            { name: "Jarra Cerveza", price: "4,00€" },
            { name: "Caña Clara", price: "1,80€" },
            { name: "Copa Clara", price: "2,30€" },
            { name: "Jarra Clara", price: "4,20€" },
            { name: "Caña Cerveza 0,0", price: "1,90€" },
            { name: "Copa Clara 0,0", price: "2,40€" },
            { name: "Jarra Cerveza 0,0", price: "4,30€" },
            { name: "Cerveza 1906", price: "2,60€" },
            { name: "500cl Estrella", price: "4,00€" },
            { name: "500cl Estrella Clara", price: "4,30€" },
            { name: "500 Tostada 0,0", price: "4,50€" }
        ]
    },
    {
        id: "licores",
        description: "Elige tu licor y disfruta como prefieras: chupito, copa o combinado.",
        table: {
            headers: ["", "Chupito", "Copa", "Combinado"],
            rows: [
                ["Anís del mono", "2,20€", "3,00€", "7,00€"],
                ["Marie Brizard", "2,40€", "3,25€", "7,50€"],
                ["Soberano", "2,20€", "3,00€", "7,00€"],
                ["Veterano", "2,20€", "3,00€", "7,00€"],
                ["Brandy Magno", "2,40€", "3,50€", "7,25€"],
                ["Crema Baileys", "2,60€", "4,00€", "5,50€"],
                ["Ginebra Beefeater", "3€", "", "7,00€"],
                ["Ginebra Gordon", "3€", "", "7,00€"],
                ["Ginebra Larios", "3€", "", "7,00€"],
                ["Ginebra Tanqueray", "3,50€", "", "7,50€"],
                ["Licor Cointreau", "4,50€", "6,00€", "8,00€"],
                ["Licor Ruavieja Herves", "3,00€", "4,50€", "4,50€"],
                ["Licor 43", "3,50€", "5,50€", "8,00€"],
                ["Llima Rives", "", "4,50€", "7,00€"],
                ["Martini Blanco", "", "", "3,25€"],
                ["Martini Rosso", "", "", "3,25€"],
                ["Patxaran Zoco", "2,50€", "3,50€", "4,00€"],
                ["Ron Bacardi", "3,00€", "", "7,00€"],
                ["Ron Negrita", "2,50€", "3,00€", "7,00€"],
                ["Ron Pujol", "2,50€", "3,00€", "7,00€"],
                ["Ron Cacique", "2,60€", "3,50€", "7,50€"],
                ["Vodka Smirnoff", "3,00€", "5,00€", "7,50€"],
                ["Whisky Ballantines", "2,60€", "4,00€", "7,00€"],
                ["Whisky Dewars W.Label", "2,60€", "4,00€", "7,00€"],
                ["Whisky J&B", "2,60€", "4,00€", "7,00€"],
                ["Whisky J.Walker Red", "3,50€", "5,50€", "8,00€"],
                ["Malibu", "", "", "6,00€"],
                ["Jack Daniel's", "4,00€", "6,50€", "8,50€"]
            ]
        }
    },
    {
        id: "cafe-y-pastas",
        description: "Disfruta de una gran variedad de cafés y dulces para acompañar.",
        items: [
            { name: "Café solo", price: "1,40€" },
            { name: "Cortado", price: "1,45€" },
            { name: "Café con leche", price: "1,70€" },
            { name: "Vaso de leche", price: "1,50€" },
            { name: "Cola-Cao", price: "1,90€" },
            { name: "Americano", price: "1,40€" },
            { name: "Bonbom", price: "1,80€" },
            { name: "Carajillo Baileys", price: "2,50€" },
            { name: "Carajillo ron Pujol", price: "2,50€" },
            { name: "Carajillo Whiskey/JB/Ballantines", price: "2,50€" },
            { name: "Carajillo anís", price: "2,40€" },
            { name: "Trifásico Baileys", price: "2,60€" },
            { name: "Trifásico Whiskey - JB - Ballantines", price: "2,50€" },
            { name: "Trifásico Anís - Cognac", price: "2,40€" },
            { name: "Infusión", price: "1,80€" },
            { name: "Café doble", price: "2,20€" },
            { name: "Chocolate", price: "2,50€" },
            { name: "Café con hielo", price: "1,55€" },
            { name: "Hielo", price: "0,15€" },
            { name: "Donut azúcar", price: "1,30€" },
            { name: "Donut chocolate", price: "1,80€" },
            { name: "Croissant mantequilla", price: "1,50€" },
            { name: "Croissant chocolate", price: "2,20€" },
            { name: "Croissant artesano manteca", price: "1,30€" },
            { name: "Magdalena casera", price: "1,30€" },
            { name: "Ración churros (4 uds.)", price: "3,25€" },
            { name: "Magdalena aceite de oliva", price: "1,30€" }
        ]
    },
    {
        id: "bocadillos-calientes",
        items: [
            { name: "Lomo", price: "4,50€" },
            { name: "Bacon", price: "4,50€" },
            { name: "Chistorra", price: "4,50€" },
            { name: "Panceta", price: "4,95€" },
            { name: "Salchichas Pais", price: "4,50€" },
            { name: "Bratwursts", price: "4,70€" },
            { name: "Frankfurt", price: "3,60€" },
            { name: "Cervela", price: "4,60€" },
            { name: "Pikantwurst", price: "4,70€" },
            { name: "Krakosky", price: "4,70€" },
            { name: "Malagueña", price: "4,70€" },
            { name: "Butifarra Vallès", price: "4,90€" },
            { name: "Butifarra Perol", price: "4,90€" },
            { name: "Tex-Wurt (cervela picante)", price: "4,90€" },
            { name: "Tortilla francesa", price: "4,00€" },
            { name: "Tortilla de patatas", price: "4,70€" },
            { name: "Hamburguesa", price: "4,50€" },
            { name: "Hamburguesa moruna", price: "4,80€" },
            { name: "Hamburguesa pollo", price: "4,80€" },
            { name: "Hamburguesa picante", price: "4,80€" },
            { name: "Pinchos morunos", price: "4,90€" },
            { name: "Pechuga de pollo rebozada", price: "4,80€" },
            { name: "Bikini", price: "3,50€" }
        ]
    },
    {
        id: "bocadillos-frios",
       items: [
            { name: "Jamón serrano", price: "4,50€" },
            { name: "Jamón york", price: "4,00€" },
            { name: "Atún", price: "4,50€" },
            { name: "Queso Edam", price: "4,00€" },
            { name: "Lomo ibérico", price: "5,90€" },
            { name: "Jamón ibérico", price: "6,25€" },
            { name: "Queso semi-manchego", price: "4,95€" },
            { name: "Chorizo ibérico", price: "4,25€" },
            { name: "Salchichón ibérico", price: "4,25€" },
            { name: "Longaniza pagès", price: "4,50€" },
            { name: "Pepito Ternera", price: "5,50€" },
            { name: "Serranito", price: "5,50€" },
            { name: "Pechuga plancha", price: "4,80€" },
            { name: "Mallorquín", price: "3,50€" }
        ]
    },
    {
        id: "platos-combinados",
        description: "Incluyen patatas, pimientos y huevos.",
        items: [
            { name: "Butifarra del Vallès", price: "9,90€" },
            { name: "Lomo", price: "9,90€" },
            { name: "Panceta", price: "9,90€" },
            { name: "Malagueño (Butifarra negra)", price: "9,90€" },
            { name: "Pechuga de Pollo", price: "9,90€" },
            { name: "Doña Croqueta", price: "9,90€" },
            { name: "Hamburguesa (2 a elegir)", price: "9,90€" },
            { name: "Pincho Moruno", price: "9,90€" }
        ]
    },
    {
        id: "snacks",
        items: [
            { name: "Patatas fritas", price: "1,40€" },
            { name: "Aceituna gazpacha", price: "1,25€" },
            { name: "Chupa-Chups", price: "0,40€" },
            { name: "Trident gragea menta", price: "1,00€" },
            { name: "Haribbo", price: "1,50€" },
            { name: "Kit-Kat", price: "1,50€" },
            { name: "Oreo", price: "1,50€" },
            { name: "Platanitos chip", price: "2,00€" }
        ]
    },
    {
        id: "combos",
        description: "Todos los combos incluyen patatas y bebida.",
        items: [
            { name: "Combo 1", details: "Hamburguesa", price: "7,50€" },
            { name: "Combo 2", details: "Frankfurt", price: "7,50€" },
            { name: "Combo 3", details: "Bocadillo frío", price: "7,50€" }
        ]
    }
    
];

menuCategories.forEach(category => {
    const categoryContainer = document.getElementById(category.id);
    
    if (category.description) {
        const descriptionPara = document.createElement("p");
        descriptionPara.classList.add("category-description");
        descriptionPara.textContent = category.description;
        categoryContainer.appendChild(descriptionPara);
    }

    if (category.items) {
        category.items.forEach(item => {
            const menuItemDiv = document.createElement("div");
            menuItemDiv.classList.add("menu-item");
            
            const itemTitle = document.createElement("h4");
            itemTitle.textContent = item.name;
            menuItemDiv.appendChild(itemTitle);
            
            if (item.description) {
                const itemDescription = document.createElement("p");
                itemDescription.textContent = item.description;
                menuItemDiv.appendChild(itemDescription);
            }
            
            const itemPrice = document.createElement("span");
            itemPrice.classList.add("price");
            itemPrice.textContent = item.price;
            menuItemDiv.appendChild(itemPrice);
            
            categoryContainer.appendChild(menuItemDiv);
        });
    }

    if (category.table) {
        const table = document.createElement("table");
        table.classList.add("menu-table");
        
        const thead = document.createElement("thead");
        const headerRow = document.createElement("tr");
        category.table.headers.forEach(header => {
            const th = document.createElement("th");
            th.textContent = header;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);
        
        const tbody = document.createElement("tbody");
        category.table.rows.forEach(rowData => {
            const row = document.createElement("tr");
            rowData.forEach(cellData => {
                const td = document.createElement("td");
                td.textContent = cellData;
                row.appendChild(td);
            });
            tbody.appendChild(row);
        });
        table.appendChild(tbody);
        
        categoryContainer.appendChild(table);
    }
});
