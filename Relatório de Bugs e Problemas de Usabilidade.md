# Relatório de Bugs e Problemas de Usabilidade

Este relatório detalha os bugs e problemas de usabilidade identificados durante os testes no site `https://qa-training.sbx.devsquad.app/`. Cada item inclui uma descrição, passos para reprodução, resultados esperados e obtidos, além de evidências visuais.

## Bugs Encontrados

### Bug 1: Campo 'Nome Completo' Aceita Caracteres Inválidos

**Descrição:** O campo 'Full name' (Nome Completo) permite a inserção de caracteres não alfabéticos, como números e emojis, o que não é esperado para um campo destinado a nomes.

**Passos para Reprodução:**
1. Navegue até a URL: `https://qa-training.sbx.devsquad.app/`
2. No campo 'Full name', tente inserir números e/ou emojis (ex: "João123😊").

**Resultado Esperado:** O campo deveria aceitar apenas caracteres alfabéticos (letras e espaços), impedindo a inserção de números e emojis.

**Resultado Obtido:** O campo permite a inserção de qualquer tipo de caractere, incluindo números e emojis.

**Evidências:** [Link para a evidência](https://drive.google.com/file/d/1rHBNiBa6Fs8fCSw87B9agU011m_1TPvg/view?usp=drive_link)

### Bug 2: Seleção do Tipo de Cliente 'Individual' Altera para 'Business'

**Descrição:** Ao tentar selecionar a opção 'Individual' no campo 'Client type', o sistema automaticamente altera a seleção para 'Business'. Além disso, a grafia "individual" está em minúsculas, inconsistente com o padrão "Business" do formulário.

**Passos para Reprodução:**
1. Navegue até a URL: `https://qa-training.sbx.devsquad.app/`
2. Localize o campo 'Client type'.
3. Clique na opção 'individual'.

**Resultado Esperado:** A opção 'individual' deveria ser selecionada e permanecer ativa, permitindo que o usuário escolha o tipo de cliente desejado.

**Resultado Obtido:** Após clicar em 'individual', a seleção muda automaticamente para 'Business'. A grafia de 'individual' também está em minúsculas.

**Evidências:** [Link para a evidência](https://drive.google.com/file/d/1By6uNPdgZDNh-bglppQyMSLAbleTyBI7/view?usp=drive_link)

### Bug 3: Estados Incorretos para Países Selecionados

**Descrição:** Ao selecionar 'Brazil' como 'Country of Residence', a lista de estados exibida inclui opções de outros países (como EUA e Canadá), em vez de apresentar apenas os estados brasileiros.

**Passos para Reprodução:**
1. Navegue até a URL: `https://qa-training.sbx.devsquad.app/`
2. Preencha os campos do formulário até 'Country of Residence'.
3. Selecione 'Brazil' como país.
4. Clique no campo 'State'.

**Resultado Esperado:** A lista de estados deveria exibir exclusivamente estados brasileiros (ex: 'São Paulo', 'Rio de Janeiro', 'Minas Gerais').

**Resultado Obtido:** A lista de estados apresenta uma mistura de estados americanos e canadenses (ex: 'Alabama', 'Alaska', 'Ontario'), o que é incorreto para o país selecionado.

**Evidências:** [Link para a evidência](https://drive.google.com/file/d/1Si7Rf6_Pe1FEQWia1wmkoqKVWf_bWx0i/view?usp=drive_link)

### Bug 4: Mensagem de Sucesso Exibida Sem Aceitar Termos e Condições

**Descrição:** O formulário exibe uma mensagem de sucesso ("Client created successfully!") mesmo quando o checkbox 'I agree to the Terms and Conditions' não é marcado antes do envio.

**Passos para Reprodução:**
1. Navegue até a URL: `https://qa-training.sbx.devsquad.app/`
2. Preencha todos os campos obrigatórios do formulário.
3. **Não** marque o checkbox 'I agree to the Terms and Conditions'.
4. Clique no botão 'Submit'.

**Resultado Esperado:** O formulário deveria exibir uma mensagem de erro informando que os termos e condições precisam ser aceitos para prosseguir.

**Resultado Obtido:** O formulário exibe a mensagem "Client created successfully!", sugerindo que o cliente foi criado com sucesso, apesar da não aceitação dos termos.

**Evidências:** [Link para a evidência](https://drive.google.com/file/d/11YB-XJDG59vy32GAyIpqhS4rC57GCv7u/view?usp=drive_link)

### Bug 5: Status Code HTTP 200 OK Retornado em Todas as Requisições

**Descrição:** As requisições de envio do formulário sempre retornam um status HTTP 200 OK, independentemente da validade dos dados ou da aceitação dos termos, o que impede a correta identificação de erros via status code.

**Passos para Reprodução:**
1. Navegue até a URL: `https://qa-training.sbx.devsquad.app/`
2. Abra as ferramentas de desenvolvedor do navegador (F12) e vá para a aba 'Network'.
3. Clique no botão 'Submit' com o formulário vazio ou com dados inválidos.
4. Observe o status HTTP da requisição de envio do formulário.

**Resultado Esperado:** O status HTTP deveria refletir a validade da requisição, retornando códigos de erro (ex: 400 Bad Request, 422 Unprocessable Entity) para dados inválidos ou incompletos.

**Resultado Obtido:** Todas as requisições de envio do formulário retornam um status HTTP 200 OK, mesmo em cenários de erro.

**Evidências:** [Link para a evidência](https://drive.google.com/file/d/1KriFvjdRyJwGMggWz-_ZLmlVjp9DSGO9/view?usp=drive_link)

## Problemas de Usabilidade

### Problema de Usabilidade 1: Placeholder Ambíguo no Campo 'Prefixo do Telefone'

**Descrição:** O campo de prefixo do telefone exibe o placeholder "Prefix (+1)", o que pode levar usuários de outras regiões a crer que apenas o prefixo +1 é aceito ou que o sistema é restrito a usuários dos EUA/Canadá.

**Passos para Reprodução:**
1. Navegue até a URL: `https://qa-training.sbx.devsquad.app/`
2. Observe o placeholder no campo 'Prefix (+1)' ao lado de 'Phone Number'.

**Impacto:** Pode gerar confusão e frustração para usuários internacionais.

**Sugestão de Melhoria:** O placeholder deveria ser mais genérico (ex: "Prefixo" ou "Inserir prefixo") ou, idealmente, ser pré-preenchido com base na geolocalização ou no país selecionado.

**Evidências:** [Link para a evidência](https://drive.google.com/file/d/1HvQHOws4lCJHYDqcxGBUyrD1UKlM6mJR/view?usp=drive_link)

### Problema de Usabilidade 2: Layout Não Responsivo em Dispositivos Móveis (Menu Lateral Cortado)

**Descrição:** Ao simular a visualização em dispositivos móveis, o layout do formulário se adapta, mas o menu lateral é cortado, impossibilitando a navegação e prejudicando a experiência do usuário.

**Passos para Reprodução:**
1. Navegue até a URL: `https://qa-training.sbx.devsquad.app/`
2. Abra as ferramentas de desenvolvedor do navegador (F12).
3. Ative o modo de visualização responsiva e defina a largura para um tamanho de dispositivo móvel (ex: 375px para iPhone SE).

**Impacto:** A navegação e usabilidade do site ficam comprometidas em telas menores, especialmente em smartphones.

**Sugestão de Melhoria:** O layout deveria se adaptar de forma que todos os elementos, incluindo o menu lateral, sejam totalmente visíveis e utilizáveis em telas de dispositivos móveis.

**Evidências:** [Link para a evidência](https://drive.google.com/file/d/1pFC-0xGMZsER-4t-w3SfeA8QesNF3dB5/view?usp=drive_link)

## Conclusão

Os testes revelaram uma série de bugs funcionais e problemas de usabilidade que impactam a experiência do usuário e a robustez do sistema. Recomenda-se a priorização da correção desses itens para garantir a qualidade e a funcionalidade do site.

