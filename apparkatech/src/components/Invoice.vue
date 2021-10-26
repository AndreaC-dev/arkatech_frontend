  <template>
  <body>
      <div class="invoice-header">
          <h1>Orden de Compra</h1>
      </div>
      <!--tr: Filas
          td: celda dentro de esa fila -->
		<div class="invoice-box">
			<table cellpadding="0" cellspacing="0">
				<tr class="top">
					<td colspan="2">
						<table>
							<tr>
								<td class="title">
									<img class="logo" src="https://www.creativefabrica.com/wp-content/uploads/2020/03/08/Monogram-AKT-Logo-Design-Graphics-3386288-1.jpg" >
								</td>

								<td>
                                    <tr>
                                        <td>
                                        Orden de Compra:
                                        <br/>
                                        Fecha: 
                                        <br/>
                                        </td>
                                        <td>
                                        1
                                        <br/>
                                        ...
                                        <br/>
                                        </td>
                                    </tr>
								</td>
							</tr>
						</table>
					</td>
				</tr>

				<tr class="information" >
					<td colspan="2">
						<table>
                            <tr class="information" >
                                <td>
                                    <td>
									Nombre:
                                    <br/>
									Despacho:
                                    <br/>
									Ciudad:
                                    </td>
                                    <td>
									Jacques le Goff
                                    <br/>
									Tienda
                                    <br/>
									Bogotá D.C
                                    </td>
								</td>
                                
								<td>
                                    <td>
									Correo:
                                    <br/>
                                    Vendedor:
                                    </td>
                                     <td>
									Goff@gmail.com
                                    <br/>
                                    Web
                                    </td>
                                </td>
                            </tr>
						</table>
					</td>
				</tr>
                
                <tr class="header">
                    <td colspan="2">
                        <table >
                            <tr class="header">
                                <td>#</td>
                                <td>REF.</td>
                                <td>Cantidad</td>
                                <td>Descripción</td>
                                <td>V.Unitario</td>
                                <td>Iva</td>
                                <td>TOTAL</td>
                            </tr>
                            
                        </table>
                    </td>
                </tr>
                
				<tr class="content">
                    <td colspan="2">
                        <table>
                            <tr class="content">
                            <td>1</td>
                            <td>3-876 </td>
                            <td>
                               
                                <input class="form-quantity" type="form" >
                            </td>
                                <input class="form-descriptor" type="form" >
                            <td>1000</td>
                            <td>300</td>
                            <td>1300</td>
                            </tr>
                        </table>
                    </td>
				</tr>
                <tr class="total">
                    <td colspan="2">
                        <table>
                            <tr class="total ">
                                <td>Observaciones:</td>

                                <td >
                                    <td >
                                    <div>Subtotal</div>
                                    <div>descuento</div>
                                    <div>IVA</div>
                                    <div>TOTAL</div>
                                    </td>
                                    <td>
                                    <div>1000</div>
                                    <div>0</div>
                                    <div>300</div>
                                    <div>1300</div>
                                    </td>
                                    
                                </td>
                            </tr>
                            
                        </table>
                    </td>
                </tr>
                            
			</table>
        
		</div>
        <div class="invoice-footer">
          
      </div>
        </body>

</template>
<script>
import axios from "axios";

export default {
  name: "Invoice",
  data: function () {
    return {
      order: [],
    };
  },
   mounted() {
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://kit.fontawesome.com/dbed6b6114.js', 'crossorigin', 'anonymous')
      document.head.appendChild(recaptchaScript)
    },
  methods: {
    loadInvoice: function () {
      this.$router.push({ name: "invoice" });
    },
  },
  
};
</script>
<style >
.logo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  top: -50px;
  left: calc(50% - 50px);
}
.invoice-header {
    text-align: center;
    background-color: #1bba93;
    padding: 30px;
    
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    
    margin: auto;
    margin-top: 40px;
    max-width: 800px;
}
.invoice-header h1{

    font-size: 30px;
    text-align: center;
    color: white;
    padding: 20px 0;
    border-bottom: 1px solid #cccccc;
    font-weight: bold;
    
    

}

.invoice-box {
	max-width: 800px;
	margin: auto;
    
	padding: 30px;
	border: 1px solid #eee;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
	font-size: 16px;
	line-height: 24px;
	font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
	color: #555;
	}

	.invoice-box table {
		width: 100%;
		line-height: inherit;
		text-align: left;
	}

	

	

	.invoice-box table tr.top table td {
		padding-bottom: 20px;
	}


	.invoice-box table tr.information table tr {
		
        padding: 20px;
        width: 100%;
        border-radius: 10px;
        border: 1px solid black;
        display:inline-flex;
        flex-direction: center;
        justify-content:space-between;
        margin-bottom: 30px;
            
	}
    

	.invoice-box table tr.header table tr {
		padding: 5px;
        
        width: 100%;
        background: #DD8DC9;
		border: 2 px solid black;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
		font-weight: bold;
        display:inline-flex;
        flex-direction: center;
        justify-content:space-around;
        
	}

	.invoice-box table tr.content tr {
		padding: 20px;
        width: 100%;
        border: 1px solid black;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        margin-bottom: 20px;
        display:inline-flex;
        flex-direction:center;
        justify-content:space-around;
        text-align: center;
	}
    .invoice-box table tr.total tr {
		padding: 20px;
        width: 100%;
        border-radius: 10px;
        border: 1px solid black;
        margin-top: 0px;
        display:inline-flex;
        flex-direction:center;
        justify-content:space-between;
        
        
	}
   
    .invoice-box .form-quantity{
        width: 10%;
        height: 60%;
        
    }
    .invoice-box .form-descriptor{
        width: 30%;
        height: 100%;  
        
    }
 /*!!!!!!!!!!!!!!!!! Revisar error con el footer por favor----*/    
.invoice-footer{

    text-align: center;
    background-color: #1bba93;
    padding: 30px;
    
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    
    margin: auto;
    margin-top: 40px; 
    margin-bottom: 40px;
    max-width: 800px;

}
.important{

    background-color: #9D4E89;
}
	

	

</style>