

var form_init= '<form class="form-inline" id="formulario"></form>';
var form_row =          
                        '<div class="form-group" id= "fila ' + '%data%' + '">'+
                          '<legend></legend>'+
                           '<button class="btn-danger pull-right" onclick= "Remove(this)">x</button>'+
                         '<label for="servicio" class="col-md-1 col-xs-3 control-label">Tratamiento:</label>'+
                          '<div class="col-md-2 col-xs-8">'+
                          '<select class="form-control" id="servicio">'+
                            '<option>Curación</option>'+
                            '<option>Ortodoncia</option>'+
                            '<option>Placa dental</option>'+
                            '<option>Implante</option>'+
                          '</select>'+
                          '</div>'+
                          '<label for="pieza_dental" class="col-md-2 col-xs-3 control-label">pieza:</label>'+
                          '<div class="col-md-2 col-xs-9">'+
                          '<select class="form-control" id="pieza_dental">'+
                            '<option>11</option>'+
                            '<option>12</option>'+
                            '<option>13</option>'+
                            '<option>14</option>'+
                            '<option>15</option>'+
                            '<option>16</option>'+
                            '<option>17</option>'+
                            '<option>18</option>'+
                            '<option>21</option>'+
                            '<option>22</option>'+
                            '<option>23</option>'+
                            '<option>24</option>'+
                            '<option>25</option>'+
                            '<option>26</option>'+
                            '<option>27</option>'+
                            '<option>28</option>'+
                            '<option>31</option>'+
                            '<option>32</option>'+
                            '<option>33</option>'+
                            '<option>34</option>'+
                            '<option>35</option>'+
                            '<option>36</option>'+
                            '<option>37</option>'+
                            '<option>38</option>'+
                            '<option>41</option>'+
                            '<option>42</option>'+
                            '<option>43</option>'+
                            '<option>44</option>'+
                            '<option>45</option>'+
                            '<option>46</option>'+
                            '<option>47</option>'+
                            '<option>48</option>'+
                          '</select>'+
                          '</div>'+
                            
                            '<label class="col-md-2 col-xs-3" for="monto">Monto:</label>'+
                            '<div class="col-md-2 col-xs-9">'+
                              '<div class="input-group ">'+
                              '<div class="input-group-addon">Bs</div>'+
                              '<input type="text" class="form-control monto" onchange="myFunction()" placeholder="Monto">'+
                            '</div>'+
                            '</div>'+
                            
                        '</div>';
var tratamientos = {"adultos": { 
                                "consulta": 100, 
                                 "curación": 200,
                                 "radiografía": 150,
                                 "extracción": 200
                      },
                     "niños":{
                                "curación": 50,
                                "extracción temporal": 100,
                                
                     }
                    };
                    
