
// ATENÇÂO: Arquivo gerado automaticamente pelo NBox.Cli. Não alterar!
/**
 * Gera todas as rotas baseadas no @page nas paginas no diretorio src/pages
 * Os arquivos deve iniciar com @page /path/para/rota
 * Se for um caminho que querer login, utilize + antes do path: @page +/cadastro/cliente
 */

import React from "react";
import PageComponents from "src/page-components";

export default [
  {
    path: "/",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        {React.createElement(PageComponents.Index)}
      </React.Suspense>
    ),
    meta: { auth: false, name: "" }
  }
];

