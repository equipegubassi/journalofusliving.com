// Aguarda o carregamento completo do DOM para executar os scripts
document.addEventListener("DOMContentLoaded", function () {
    
    /**
     * SCRIPT 1: LÓGICA DO MENU MOBILE
     * Alterna a visibilidade do menu mobile ao clicar no botão.
     */
    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });
    }

    /**
     * SCRIPT 3: REDIRECIONAMENTO AO CLICAR EM "VOLTAR"
     * Envia o utilizador para uma página de "backredirect" quando ele tenta voltar.
     */
    const backredirectURL = "/backredirect";
    if (backredirectURL) {
        const backLink = backredirectURL + location.search;
        history.pushState({}, "", location.href);
        history.pushState({}, "", location.href);

        window.addEventListener("popstate", function (event) {
            if (event.state) {
                location.href = backLink;
            }
        });
    }

    /**
     * SCRIPT 4: ADICIONAR PARÂMETROS DE URL A TODOS OS LINKS
     * Adiciona automaticamente os parâmetros da URL atual (ex: utm_source) a todos os links da página.
     */
    const currentSearchParams = location.search;
    if (currentSearchParams) {
        document.querySelectorAll('a[href]').forEach(link => {
            // Ignora links de âncora
            if (link.href.includes("#")) return;
            
            try {
                const linkUrl = new URL(link.href);
                const currentParams = new URLSearchParams(currentSearchParams);

                currentParams.forEach((value, key) => {
                    linkUrl.searchParams.set(key, value);
                });
                
                link.href = linkUrl.toString();
            } catch (e) {
                // Lidar com URLs inválidas ou relativas, se necessário
                console.error("Could not process link:", link.href, e);
            }
        });
    }
});